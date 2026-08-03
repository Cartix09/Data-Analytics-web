# ANLYTICS - Phase 1 MVP

A premium, data-native marketing website for **ANLYTICS** - the analytics studio and school led by Alish Niftaliyev (Expert Data Analyst at Procter & Gamble · PL-300 Instructor & Mentor).

This is the **Phase 1** public website. The full LMS (auth, lessons, payments, certificates) is intentionally deferred to Phase 2 - `/login` is a placeholder.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 3** with CSS-variable design tokens
- **Framer Motion** for entrance animations
- **lucide-react** for icons
- **React Hook Form + Zod** for forms
- Self-hosted **Inter** + **JetBrains Mono** via `next/font`

## Quick start

```bash
pnpm install
cp .env.example .env.local      # fill values where you have them
pnpm dev                         # http://localhost:3000
```

Useful commands:

```bash
pnpm dev          # local dev
pnpm build        # production build
pnpm start        # serve the built app
pnpm typecheck    # tsc --noEmit
pnpm lint         # next lint
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for OG, sitemap, JSON-LD). |
| `NEXT_PUBLIC_BOOKING_URL` | Cal.com / Calendly URL embedded on `/consulting` and `/contact`. |
| `RESEND_API_KEY` | (Phase 2) For wiring `/api/contact`, `/api/newsletter`, `/api/applications`. |
| `CONTACT_TO_EMAIL` | Inbox to receive contact submissions. |

In MVP the API routes accept submissions and `console.log` them so you can see they work. Wire them to Resend / a CRM in Phase 2.

## Cal.com booking setup

**You do not need the Cal.com API for the MVP.** The site embeds a Cal.com (or Calendly) link directly via iframe.

To configure:

1. Create an event type in Cal.com (e.g. a 30-minute consultation).
2. Copy the booking URL - for example `https://cal.com/your-username/30min`.
3. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-username/30min
   ```
4. Restart `pnpm dev` (env vars are baked at server start).

The embed appears on `/consulting` and `/contact`. If `NEXT_PUBLIC_BOOKING_URL` is empty, the `BookingEmbed` component renders a clean "not configured" fallback with an email CTA instead of a broken iframe - so the site never looks broken even before booking is set up.

**When do you need the Cal.com API?** Only later - for custom scheduling logic, automatic CRM sync (HubSpot / Salesforce / Pipedrive), routing forms with conditional logic, or programmatic availability lookups. For Phase 1, the public booking URL is enough.

## Student Hub

`/login` renders a temporary **Student Hub** with:

- Google Classroom link (course materials and assignments).
- Three Microsoft Teams weekly live session links.
- An availability form (`POST /api/availability`).
- A "Course materials" grid.

All editable content lives in [`content/studentHub.ts`](./content/studentHub.ts) - Google Classroom URL, Teams meeting URLs, weekly session schedule, materials list. Edit that file and redeploy. No CMS or admin UI yet.

**Phase 2 plan:** replace `content/studentHub.ts` with a Sanity-backed CMS or a proper authenticated admin area so Alish and Mursal can edit hub links and materials without a code deploy.

## Sanity CMS setup

ANLYTICS ships with a real browser-based content editor - **Sanity Studio** mounted at `/studio`. `/admin` is an alias that redirects to `/studio`.

### Configure

1. Create a free project at [sanity.io/manage](https://sanity.io/manage).
2. Copy the **project ID** and **dataset name** (usually `production`).
3. Add to `.env.local`:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-12-01
   ```

4. In the Sanity Manage dashboard, add `http://localhost:3000` (and your production domain) to the **CORS Origins** list with "Allow credentials" enabled.
5. Restart `pnpm dev`. Visit `/studio` (or `/admin`) - log in with the Sanity account that owns the project.

When `NEXT_PUBLIC_SANITY_PROJECT_ID` is unset, `/studio` renders a setup screen that walks through these steps. Every page on the site continues to render correctly from the TypeScript content files - nothing breaks, editing just isn't live in the browser yet.

### Editable content types (Sanity schemas)

| Schema | What it controls |
| --- | --- |
| `siteSettings` *(singleton)* | Brand name, tagline, email, social URLs, booking URL, footer credit |
| `homepage` *(singleton)* | Hero, Learn/Hire split, Consulting preview, Final CTA copy |
| `studentHub` *(singleton)* | Google Classroom URL, Teams sessions, availability slots, course materials |
| `course` | Per-course content (title, outcome, curriculum, FAQ, level, format, audience, pricing note) |
| `service` | Consulting service cards (title, summary, outcomes, deliverables, icon) |
| `faqGroup` | FAQ groups by slot (home / consulting / studentHub / per-course) |
| `resourcePost` | Resources / blog post placeholders |
| `translation` | UI string overrides (key, English, Azerbaijani) - for browser-editing labels |

### Versions pinned

- `sanity` and `@sanity/vision`: **3.99.x** (matches `next-sanity@9.x` peer requirement).
- `next-sanity`: **9.12.x** (compatible with Next.js 15). Sanity 5.x + next-sanity 13.x require Next 16, so we pinned to the previous major.
- `styled-components`: **6.x** (required by Sanity 3 Studio).

### Current wiring + fallback

The site uses Sanity where wired, with **automatic fallback** to `content/*.ts` when Sanity is empty or unconfigured. Today's wiring:

| Surface | Source |
| --- | --- |
| Homepage hero copy | Sanity `homepage.hero` → fallback to `content/i18n/en.ts > hero` |
| Site settings | Sanity `siteSettings` → fallback to `content/site.ts` (via `studio/data.ts`) |
| Courses, services, student hub, FAQ, resources | Fetcher pattern is defined in `studio/data.ts` - schemas exist, individual pages still read from TS fallback until you publish documents in Sanity |

### Roadmap for full Sanity migration

Pages still using `content/*.ts` only (TODO - wire `studio/data.ts` getters in next pass):

- `/consulting` services + engagement models
- `/courses` catalog and the Power BI detail page
- `/login` Student Hub
- `/resources` post grid
- FAQ accordions
- Long-form bio + legal pages

When a document is published in Sanity, that page automatically switches over.

## Learning portal (`/learn`)

The learning portal is a Udemy-style area for enrolled students. Payment is handled manually outside the website (bank transfer or invoice), and access is granted per-student, per-module.

### Manual enrollment flow

1. Student pays outside the website (bank transfer / invoice / cash).
2. Alish confirms the payment to Mursal.
3. Mursal opens **`/studio` → Learning portal → Student enrollments** and creates a `studentAccess` document with:
   - the student's email (must match exactly what they type at sign-in),
   - the course reference,
   - the list of `allowedModules` (module slugs the student paid for),
   - `status: active`, optional access dates and payment notes.
4. Student visits `/learn`, enters their email, and only sees the modules on their access list.

Sanity documents win; the demo fallback in `content/learning.ts` is only used for local dev.

### Routes

| Route | What it does |
| --- | --- |
| `/learn` | Sign-in prompt if no student cookie; otherwise a dashboard of the student's enrolled courses and modules. |
| `/learn/[courseSlug]` | Course-level module list with locked/unlocked chips. |
| `/learn/[courseSlug]/[moduleSlug]` | Lesson list inside a purchased module. |
| `/learn/[courseSlug]/[moduleSlug]/[lessonSlug]` | Lesson player (embeds YouTube, Vimeo, Mux, or Google Drive; renders materials + type + minutes). |

### Access control (Phase 1)

Access checks live in `lib/enrollment.ts` and run on the server for every `/learn/*` page. Any request to an un-purchased module `redirect()`s back to `/learn`. The cookie is `httpOnly` and `sameSite: lax`.

**Phase 1 caveat:** the sign-in step just accepts an email and trusts it. That is enough for a small, invite-only cohort where the admin knows every paying email in advance - but it is **not** production-grade auth for a public paid product.

### Phase 2 upgrade path

- **Auth:** magic-link email (Resend + a `verificationToken` table), Clerk, Auth.js, or Supabase Auth. Replace `signInAsStudent` with a real verified flow before opening the portal publicly.
- **Access records:** move `studentAccess` from Sanity into a proper database (Supabase / Postgres) if the number of enrolled students grows past a few hundred.
- **Video hosting:** private Vimeo, Mux, or Bunny Stream. Signed playback URLs stop link sharing. **Google Drive links are convenient but weak** - anyone with the link can watch, so it is fine for cohort-known students but not for paid open enrollment.
- **Certificates + progress:** add a `lessonProgress` table keyed on `(userId, lessonId)` and a certificate generator once real auth is in place.

### Sanity schemas for the portal

| Schema | Purpose |
| --- | --- |
| `learningCourse` | Course container (title, slug, summary, list of module refs). |
| `learningModule` | Module (slug, title, summary, list of lesson refs). |
| `lesson` | Lesson (title, type, videoUrl, description, materials, estimated minutes). |
| `studentAccess` | The enrollment record: student email + course + `allowedModules[]` + status + dates + notes. |

## Internationalization (English / Azerbaijani)

The site supports two locales out of the box: **English** (`en`, default) and **Azerbaijani** (`az`).

How it works:

- Dictionaries live in `content/i18n/en.ts` and `content/i18n/az.ts`. `en.ts` defines the canonical `Dictionary` type; `az.ts` implements the same shape.
- `lib/i18n.ts` exposes `getLocale()` (reads the `anlytics_locale` cookie in server components) and `getDict(locale)`.
- `app/actions/locale.ts` is a server action that sets the cookie and revalidates the layout.
- `components/layout/LanguageSwitcher.tsx` renders the `EN / AZ` toggle. It is mounted in the top header (desktop) and inside the mobile drawer.

Currently translated:

- Header nav + mobile drawer + language switcher (in the top header).
- Homepage hero, Learn/Hire split, Consulting preview, Methodology, Final CTA.
- Course filter labels and shared course-card labels (View course / Notify me / Coming soon / weeks / workshop).
- Footer column headings, credit, newsletter labels.
- FAQ section default heading + eyebrow.

**TODO:** the long-form copy below is still English-only and needs Azerbaijani versions:

- Individual course detail bodies (curriculum weeks, capstones, FAQ answers).
- `/consulting` service outcomes/deliverables, engagement models, case studies text.
- `/about` founder bio paragraphs and "what we believe" body copy.
- `/resources` post titles & descriptions.
- `/contact` and `/login` form placeholder copy.
- `/learn` portal body copy.
- Legal pages (`/legal/privacy`, `/legal/terms`).

To add a new translatable string:

1. Add the key to `content/i18n/en.ts` (canonical type).
2. Add the same key with the Azerbaijani value to `content/i18n/az.ts`.
3. Read it in your component via `const t = getDict(await getLocale());`. For client components, pass `dict` as a prop from a server component.

Product/brand tokens (Power BI, SQL, Python, PL-300, DAX, ANLYTICS, Procter & Gamble) stay in their original form across all locales.

## Admin guide

`/admin` redirects to `/studio`, the real Sanity Studio. Alish and Mursal edit every configured content type in the browser from there. `/studio` uses Sanity's built-in auth (log in with the account that owns the Sanity project).

Where to edit (full list also in the admin page):

| Area | File |
| --- | --- |
| Site settings (email, tagline, socials) | `content/site.ts` |
| Courses (catalog, curriculum, FAQ) | `content/courses.ts` |
| Student Hub links (Classroom, Teams, materials) | `content/studentHub.ts` |
| Consulting services + engagement models | `content/services.ts` |
| Home / consulting FAQ | `content/faq.ts` |
| Resources / blog placeholders | `content/resources.ts` |
| Founder bio | `content/founder.ts` |
| Translations | `content/i18n/en.ts` + `content/i18n/az.ts` |
| Booking URL, email destination | `.env.local` |

**Phase 2 plan for editing:** introduce **Sanity Studio** (or Payload CMS) as a hosted admin so Alish and Mursal can edit content in a browser without a deploy. The TypeScript content shapes can be mirrored directly into Sanity schemas, so components don't move. Phase 3 adds an authenticated admin area for student-management features.

## Project structure

```
app/
  (marketing)/          Marketing layout (Header + Footer + sticky CTA)
    page.tsx                                /
    courses/page.tsx                        /courses
    courses/power-bi-pl-300/page.tsx        /courses/power-bi-pl-300
    consulting/page.tsx
    about/page.tsx
    resources/page.tsx
    contact/page.tsx
  legal/
    layout.tsx
    privacy/page.tsx
    terms/page.tsx
  login/                Standalone (no marketing chrome) - placeholder
    layout.tsx
    page.tsx
  api/
    contact/route.ts
    newsletter/route.ts
    applications/route.ts
  layout.tsx            Root layout (fonts, theme, JSON-LD)
  globals.css
  not-found.tsx         Custom 404
  sitemap.ts
  robots.ts

components/
  ui/                   Button, Container, Section, Eyebrow, Card, Chip, Logo, Input, Textarea, RadioChipGroup
  layout/               Header, MobileNavDrawer, Footer, StickyMobileCta
  sections/             Hero, TrustStrip, LearnHireSplit, FeaturedCourses, Methodology,
                        ConsultingPreview, DashboardShowcase, FounderBlock,
                        TestimonialsPlaceholder, FaqAccordion, FinalCtaBand,
                        NewsletterInline, PageHero
  courses/              CourseCard, CurriculumAccordion
  consulting/           ServiceCard, BookingEmbed
  forms/                ContactForm, ApplicationForm
  dashboard-mockup/     HeroDashboard, ShowcaseDashboard + parts (KpiTile, ChartLine,
                        Slicer, MatrixVisual)
  motion/               FadeInUp

content/                All site copy lives here as typed TS objects
  site.ts courses.ts services.ts methodology.ts faq.ts
  founder.ts testimonials.ts resources.ts nav.ts

lib/                    cn, SEO metadata helpers, JSON-LD helpers

public/                 Static assets (favicon, OG image)
```

## Editing content

All copy is in `content/*.ts`. To change a course outcome, an FAQ entry, the founder bio, or the navigation labels, edit the corresponding file - no component edits required.

When the time comes to swap the TS files for a CMS (Sanity is the planned route), keep the same TypeScript types so the components don't move.

## Design tokens

Defined as CSS variables in `app/globals.css` and surfaced through Tailwind in `tailwind.config.ts`:

- Surfaces: `bg-base #0A0A0B`, `bg-elevated #111114`, `bg-light #FAFAF9`, `bg-white #FFFFFF`
- Borders: `border-light #E5E5E5`, `border-dark #1F1F23`
- Text: `text-on-dark #FAFAFA`, `text-on-light #0A0A0B`, `muted-dark`, `muted-light`
- Accent: `accent #22D3EE` (single brand accent), `accent-strong #0891B2`, `accent-soft #CFFAFE`

## Honest content rules

- **No fake metrics.** "1,200+ students" doesn't appear anywhere - it isn't true yet.
- **No fake testimonials.** `content/testimonials.ts` ships empty; the testimonials section renders an honest empty state with a single anchor quote from the founder.
- **No lorem ipsum.** All copy is the real, ready-to-use copy.

## Deferred to Phase 2

- Real LMS (auth, lessons, video, progress, certificates).
- Stripe Checkout / Stripe Billing for cohort and self-paced enrollment.
- Sanity CMS for the marketing site (or another headless CMS).
- Mux for video hosting + signed playback URLs.
- Email automation backends (Resend / Customer.io / ConvertKit).
- Case studies, success-story detail pages, careers page.

## Phase 1 launch checklist

- [ ] Replace placeholder LinkedIn / YouTube / X URLs in `content/site.ts`.
- [ ] Wire `NEXT_PUBLIC_BOOKING_URL` to your real Cal.com / Calendly URL.
- [ ] Decide whether self-paced courses should also link to live pages - currently `/courses/[slug]` exists only for `power-bi-pl-300`; other courses' cards link to `/contact` and show a "Coming soon" chip.
- [ ] Hook up `/api/contact`, `/api/newsletter`, `/api/applications` to Resend or a CRM.
- [ ] Set up an analytics tool (Plausible or PostHog recommended).
- [ ] Replace the `AN` initials placeholder in the founder block with a real photo when ready.
- [ ] Run `pnpm build` and verify Lighthouse mobile scores ≥ 90 / 95 / 95 / 95.

- Built by Alish Niftaliyev.
