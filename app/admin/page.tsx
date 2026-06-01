import Link from "next/link";
import {
  AlertTriangle,
  FileCode,
  GraduationCap,
  Calendar,
  Briefcase,
  Globe,
  Layers,
  Library,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { FadeInUp } from "@/components/motion/FadeInUp";

interface EditableArea {
  icon: typeof FileCode;
  title: string;
  path: string;
  what: string;
  edits: string[];
}

const areas: EditableArea[] = [
  {
    icon: Globe,
    title: "Site settings",
    path: "content/site.ts",
    what: "Brand name, tagline, email, social URLs, booking URL fallback, founder shortcuts.",
    edits: [
      "Email and tagline (site.email, site.tagline)",
      "Social links (LinkedIn, YouTube, Instagram)",
      "Founder name + LinkedIn URL",
    ],
  },
  {
    icon: Library,
    title: "Courses",
    path: "content/courses.ts",
    what: "Course catalog: titles, outcomes, curriculum, FAQ, pricing notes, prerequisites, tools.",
    edits: [
      "Add a new course (full schema in the file)",
      "Update a course's outcome line or hero copy",
      "Edit weekly curriculum / capstone descriptions",
      "Toggle `published` and `available` flags",
    ],
  },
  {
    icon: GraduationCap,
    title: "Student Hub links",
    path: "content/studentHub.ts",
    what: "Google Classroom link, Microsoft Teams session links, weekly slots, downloadable materials.",
    edits: [
      "googleClassroomUrl — replace `#` with the real Classroom URL",
      "teamsSessions — three meeting cards (day, label, url)",
      "availabilitySlots — the checkbox options shown on the availability form",
      "materials — title, description, url, optional tag for each resource card",
    ],
  },
  {
    icon: Calendar,
    title: "Live session schedule",
    path: "content/studentHub.ts",
    what: "Live session days, times, and labels rendered on the Student Hub.",
    edits: [
      "Edit `teamsSessions[].day` to change a card's displayed day/time",
      "Edit `teamsSessions[].label` to relabel a session (e.g. 'Q&A')",
      "Add or remove cards to add or retire a weekly session",
    ],
  },
  {
    icon: Briefcase,
    title: "Consulting services",
    path: "content/services.ts",
    what: "Service cards on /consulting and the homepage consulting preview (outcomes, deliverables, engagement models).",
    edits: [
      "services[] — title, summary, outcomes[], deliverables[]",
      "engagementModels[] — the three engagement types",
      "stacks[] — the chips shown under 'Stacks we work in'",
    ],
  },
  {
    icon: FileCode,
    title: "FAQ entries",
    path: "content/faq.ts",
    what: "Home/courses-page FAQ (`homeFaq`) and consulting-page FAQ (`consultingFaq`).",
    edits: [
      "Edit a question / answer in place",
      "Add a new `{ q, a }` object to either array",
    ],
  },
  {
    icon: Layers,
    title: "Resources & blog placeholders",
    path: "content/resources.ts",
    what: "Resource category tiles and the 'coming up' post placeholders.",
    edits: [
      "resourceCategories[] — chips at the top of /resources",
      "upcomingPosts[] — placeholder cards until the first issue ships",
    ],
  },
  {
    icon: Mail,
    title: "Contact / booking",
    path: ".env.local",
    what: "Booking calendar URL and email destinations.",
    edits: [
      "NEXT_PUBLIC_BOOKING_URL — your Cal.com/Calendly link",
      "CONTACT_TO_EMAIL — inbox that receives contact submissions",
      "RESEND_API_KEY — used in Phase 2 to actually send emails",
    ],
  },
  {
    icon: Globe,
    title: "Translations (EN / AZ)",
    path: "content/i18n/en.ts and content/i18n/az.ts",
    what: "Visible UI strings (navigation, hero, CTAs, learn/hire split, footer, course filter labels).",
    edits: [
      "Add a new key to en.ts first, then translate it in az.ts",
      "Keep brand tokens (Power BI, SQL, Python, PL-300, ANLYTICS) untranslated",
    ],
  },
];

const roadmap = [
  {
    phase: "Now",
    title: "Edit content/*.ts files",
    body:
      "Every visible string, link, and list lives in a typed TypeScript file under content/. A developer commits and deploys the change.",
  },
  {
    phase: "Next",
    title: "Headless CMS (Sanity)",
    body:
      "Move the same content shapes into Sanity so Alish and Mursal can edit copy, courses, materials, and Teams links in a browser without a deploy. Components stay the same.",
  },
  {
    phase: "Later",
    title: "Authenticated admin + LMS",
    body:
      "Full student auth (Clerk or Auth.js), enrollment + payments (Stripe), and an internal admin for cohort, materials, and student management.",
  },
];

export default function AdminGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Admin guide · Internal"
        title="Where to edit the website."
        subtitle="A practical map of the editable surfaces — and a roadmap to a proper authenticated admin in Phase 2."
      />

      {/* Warning */}
      <Section tone="light" spacing="tight">
        <Container>
          <FadeInUp>
            <Card className="flex items-start gap-4 border-warning/40 bg-warning/[0.04]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-warning/15 text-warning">
                <AlertTriangle size={20} aria-hidden />
              </div>
              <div>
                <p className="font-semibold">This is a guide, not a live CMS.</p>
                <p className="mt-1 text-sm text-muted-light leading-relaxed">
                  No authentication is wired up. Production editing requires a
                  CMS or an authenticated admin — see the roadmap below. For
                  now, each editable area below points at the file you change
                  to update that part of the site.
                </p>
              </div>
            </Card>
          </FadeInUp>
        </Container>
      </Section>

      {/* Editable areas */}
      <Section tone="light">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Editable areas</Eyebrow>
            <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
              What you can change today.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              Every block below maps a section of the site to a single file. A
              developer commits the change and the deploy goes out.
            </p>
          </FadeInUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2 items-stretch">
            {areas.map((area, i) => {
              const Icon = area.icon;
              return (
                <FadeInUp key={area.title} delay={i * 0.04} className="h-full">
                  <Card hover className="h-full flex flex-col">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                        <Icon size={20} aria-hidden />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold leading-snug">
                          {area.title}
                        </h3>
                        <code className="mt-1 inline-block font-mono text-xs px-2 py-0.5 rounded bg-light border border-border-light text-text-on-light">
                          {area.path}
                        </code>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-light leading-relaxed">
                      {area.what}
                    </p>
                    <ul className="mt-4 space-y-1.5 text-sm">
                      {area.edits.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className="text-accent-strong shrink-0">—</span>
                          <span className="leading-relaxed">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeInUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Roadmap */}
      <Section tone="dark">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow tone="dark">Admin roadmap</Eyebrow>
            <h2 className="mt-4 text-display-md md:text-display-lg text-text-on-dark text-balance">
              From content files to a proper admin.
            </h2>
            <p className="mt-4 text-muted-dark leading-relaxed">
              We grow into the admin we need, not the one we don&rsquo;t. The
              current setup is fine for one practitioner. Phase 2 unlocks
              browser-based editing without a deploy.
            </p>
          </FadeInUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
            {roadmap.map((r, i) => (
              <FadeInUp key={r.phase} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-7 flex flex-col">
                  <Chip tone="accent">{r.phase}</Chip>
                  <h3 className="mt-4 text-lg font-semibold text-text-on-dark leading-snug min-h-[3rem]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Safety reminder */}
      <Section tone="light">
        <Container size="narrow">
          <FadeInUp className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
              <ShieldCheck size={22} aria-hidden />
            </div>
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-balance">
              Don&rsquo;t make this page public.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-light border border-border-light">
                /admin
              </code>{" "}
              is set to <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-light border border-border-light">noindex</code>{" "}
              and is excluded from the sitemap, but it is not access-protected.
              Treat the URL like an internal bookmark until Phase 2 ships proper auth.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-text-on-light transition-colors"
            >
              Back to the Student Hub →
            </Link>
          </FadeInUp>
        </Container>
      </Section>
    </>
  );
}
