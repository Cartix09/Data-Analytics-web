# ANLYTICS — Phase 1 MVP

A premium, data-native marketing website for **ANLYTICS** — the analytics studio and school led by Alish Niftaliyev (Senior Data Analyst at Procter & Gamble · PL-300 Instructor & Mentor).

This is the **Phase 1** public website. The full LMS (auth, lessons, payments, certificates) is intentionally deferred to Phase 2 — `/login` is a placeholder.

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
  login/                Standalone (no marketing chrome) — placeholder
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

All copy is in `content/*.ts`. To change a course outcome, an FAQ entry, the founder bio, or the navigation labels, edit the corresponding file — no component edits required.

When the time comes to swap the TS files for a CMS (Sanity is the planned route), keep the same TypeScript types so the components don't move.

## Design tokens

Defined as CSS variables in `app/globals.css` and surfaced through Tailwind in `tailwind.config.ts`:

- Surfaces: `bg-base #0A0A0B`, `bg-elevated #111114`, `bg-light #FAFAF9`, `bg-white #FFFFFF`
- Borders: `border-light #E5E5E5`, `border-dark #1F1F23`
- Text: `text-on-dark #FAFAFA`, `text-on-light #0A0A0B`, `muted-dark`, `muted-light`
- Accent: `accent #22D3EE` (single brand accent), `accent-strong #0891B2`, `accent-soft #CFFAFE`

## Honest content rules

- **No fake metrics.** "1,200+ students" doesn't appear anywhere — it isn't true yet.
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
- [ ] Decide whether self-paced courses should also link to live pages — currently `/courses/[slug]` exists only for `power-bi-pl-300`; other courses' cards link to `/contact` and show a "Coming soon" chip.
- [ ] Hook up `/api/contact`, `/api/newsletter`, `/api/applications` to Resend or a CRM.
- [ ] Set up an analytics tool (Plausible or PostHog recommended).
- [ ] Replace the `AN` initials placeholder in the founder block with a real photo when ready.
- [ ] Run `pnpm build` and verify Lighthouse mobile scores ≥ 90 / 95 / 95 / 95.

— Built by Alish Niftaliyev.
