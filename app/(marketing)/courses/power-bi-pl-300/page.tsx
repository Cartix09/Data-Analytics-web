import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X, Calendar, Sparkles, Wrench, Award, Mail, Download } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { CurriculumAccordion } from "@/components/courses/CurriculumAccordion";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { HeroDashboard } from "@/components/dashboard-mockup/HeroDashboard";
import { getCourse } from "@/content/courses";
import { founder } from "@/content/founder";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, courseLd, faqLd, breadcrumbLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Power BI Mastery (PL-300)",
  description:
    "An 8-week cohort program in Power BI modeling, DAX, and dashboard design. PL-300 aligned, taught by an analyst who works with real business reporting at P&G.",
  path: "/courses/power-bi-pl-300",
});

export default function PowerBiPage() {
  const course = getCourse("power-bi-pl-300");
  if (!course) notFound();

  return (
    <>
      <JsonLd
        data={[
          courseLd({
            name: course.title,
            description: course.outcome,
            url: `${site.url}/courses/power-bi-pl-300`,
          }),
          faqLd(course.faq),
          breadcrumbLd([
            { name: "Home", url: site.url },
            { name: "Courses", url: `${site.url}/courses` },
            { name: course.title, url: `${site.url}/courses/power-bi-pl-300` },
          ]),
        ]}
      />

      {/* Course hero */}
      <section className="relative surface-dark overflow-hidden pt-28 lg:pt-32 pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"
        />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <FadeInUp>
              <Eyebrow tone="dark" bordered>
                {course.eyebrow}
              </Eyebrow>
              <h1 className="mt-6 text-3xl md:text-4xl lg:text-display-md xl:text-display-lg text-text-on-dark text-balance leading-tight">
                {course.heroH1}
              </h1>
              <p className="mt-5 max-w-xl text-sm md:text-base text-muted-dark leading-relaxed">
                {course.heroSubhead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#apply" size="lg">
                  Apply for the next cohort
                </Button>
                <Button href="#syllabus" variant="secondary-dark" size="lg">
                  <Download size={14} aria-hidden /> See the syllabus
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-dark">
                Taught by {founder.name} - {founder.shortRole}.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <HeroDashboard />
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Credibility strip */}
      <Section tone="elevated" spacing="tight">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              <Chip tone="dark">{course.format}</Chip>
              <Chip tone="dark">{course.durationLabel}</Chip>
              <Chip tone="dark">{course.level}</Chip>
              <Chip tone="dark">PL-300 aligned</Chip>
            </div>
            <p className="text-sm text-muted-dark">
              Taught by an analyst who works with real business reporting every day.
            </p>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <FadeInUp>
              <Eyebrow>Outcomes</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">
                What you&rsquo;ll be able to do.
              </h2>
              <p className="mt-4 text-muted-light leading-relaxed">
                Concrete skills you&rsquo;ll bring back to your job by the end of the program - not abstract talking points.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 rounded-xl border border-border-light bg-white p-5"
                  >
                    <Check size={18} aria-hidden className="mt-0.5 text-accent-strong shrink-0" />
                    <span className="text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </FadeInUp>
          </div>
        </Container>
      </Section>

      {/* Audience */}
      <Section tone="white">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Built for analysts who want to be taken seriously.
            </h2>
          </FadeInUp>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeInUp>
              <Card tone="light" className="h-full">
                <div className="flex items-center gap-2 text-accent-strong">
                  <Check size={18} aria-hidden />
                  <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                    This course fits you if
                  </span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                  {course.audienceFor.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="text-accent-strong mt-1">-</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <Card tone="light" className="h-full">
                <div className="flex items-center gap-2 text-muted-light">
                  <X size={18} aria-hidden />
                  <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                    Probably not the right fit if
                  </span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-light">
                  {course.audienceNotFor.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-1">-</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInUp>
          </div>
        </Container>
      </Section>

      {/* Curriculum */}
      <Section tone="light" id="syllabus">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Curriculum</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Eight weeks. Real work every week.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              Each week opens with the business problem and closes with a deliverable you&rsquo;ll review with the instructor.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.05} className="mt-10">
            <CurriculumAccordion weeks={course.curriculum} />
          </FadeInUp>
        </Container>
      </Section>

      {/* Capstone */}
      <Section tone="dark">
        <Container>
          <FadeInUp>
            <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Sparkles size={28} aria-hidden />
              </div>
              <div>
                <Eyebrow tone="dark">Capstone</Eyebrow>
                <h2 className="mt-2 text-display-md text-text-on-dark text-balance">
                  A portfolio dashboard, not a toy demo.
                </h2>
                <p className="mt-3 text-muted-dark leading-relaxed max-w-2xl">
                  {course.capstone}
                </p>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </Section>

      {/* Cadence + tools */}
      <Section tone="light">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeInUp>
              <Card tone="white" className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                  <Calendar size={20} aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold">How the cohort runs</h3>
                <ul className="mt-4 space-y-2 text-sm text-text-on-light leading-relaxed">
                  {course.cadence.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-accent-strong">-</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <Card tone="white" className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                  <Wrench size={20} aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Tools &amp; prerequisites</h3>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-light">
                  Prerequisites
                </p>
                <ul className="mt-2 space-y-2 text-sm text-text-on-light leading-relaxed">
                  {course.prerequisites.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent-strong">-</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-light">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.tools.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Card>
            </FadeInUp>
          </div>
        </Container>
      </Section>

      {/* Differentiators */}
      <Section tone="white">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Why this course</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              What makes this course different.
            </h2>
          </FadeInUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {course.differentiators.map((d, i) => (
              <FadeInUp key={d.title} delay={i * 0.04}>
                <Card tone="light" className="h-full">
                  <h3 className="text-base font-semibold leading-tight">{d.title}</h3>
                  <p className="mt-3 text-sm text-muted-light leading-relaxed">{d.body}</p>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing note */}
      <Section tone="light">
        <Container size="narrow">
          <FadeInUp className="text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">{course.pricingNote}</h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              When you submit your application, we send you the cohort price, payment plan options, and a calendar link for a short fit call. No hard sells.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="#apply" size="lg">
                Apply now
              </Button>
              <Button href="/contact" variant="secondary-light" size="lg">
                <Mail size={14} aria-hidden /> Ask a question first
              </Button>
            </div>
          </FadeInUp>
        </Container>
      </Section>

      {/* Instructor */}
      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
            <FadeInUp>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-border-light bg-base">
                <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
                <div
                  aria-hidden
                  className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
                />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <Award size={32} aria-hidden className="text-accent mb-4" />
                  <p className="text-2xl font-semibold text-text-on-dark">{founder.name}</p>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">
                    {founder.shortRole}
                  </p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <Eyebrow>Instructor</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">
                Taught by an active analyst.
              </h2>
              <div className="mt-6 space-y-4 text-muted-light leading-relaxed">
                {founder.bioParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-text-on-light transition-colors"
              >
                Connect on LinkedIn →
              </a>
            </FadeInUp>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion items={course.faq} tone="light" eyebrow="FAQ" title="Common questions." />

      {/* Application */}
      <Section tone="light" id="apply">
        <Container size="narrow">
          <FadeInUp>
            <Eyebrow>Apply</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Apply for the next cohort.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              We read every application personally. Tell us where you are now and where you&rsquo;d like to be - and we&rsquo;ll tell you honestly whether this cohort fits.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.05} className="mt-10">
            <div className="rounded-xl border border-border-light bg-white p-6 md:p-10">
              <ApplicationForm courseSlug={course.slug} courseTitle={course.title} />
            </div>
          </FadeInUp>
          <p className="mt-6 text-center text-sm text-muted-light">
            Prefer to chat first?{" "}
            <Link href="/contact" className="text-accent-strong hover:underline">
              Send us a question →
            </Link>
          </p>
        </Container>
      </Section>

      <FinalCtaBand />
    </>
  );
}
