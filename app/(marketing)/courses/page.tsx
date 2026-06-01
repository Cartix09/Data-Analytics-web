import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { getDict, getLocale } from "@/lib/i18n";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { Button } from "@/components/ui/Button";
import { publishedCourses } from "@/content/courses";
import { homeFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Courses",
  description:
    "Cohort and self-paced analytics programs from ANLYTICS — Power BI, SQL, Python, dashboard design, reporting automation, and corporate Power BI training for teams.",
  path: "/courses",
});

export default async function CoursesPage() {
  const list = publishedCourses();
  const dict = getDict(await getLocale());
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Programs for analysts and teams at every stage."
        subtitle="Cohort programs for working analysts, self-paced courses for upskillers, and corporate training engagements for teams. All taught by a practitioner."
      />

      <Section tone="light" spacing="default" className="pt-6 md:pt-10">
        <Container>
          <CourseFilters courses={list} dict={dict} />
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <FadeInUp>
            <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Building2 size={28} aria-hidden />
              </div>
              <div>
                <Eyebrow tone="dark">For teams · Corporate training</Eyebrow>
                <h2 className="mt-2 text-display-md text-text-on-dark text-balance">
                  Bring ANLYTICS to your team.
                </h2>
                <p className="mt-3 text-muted-dark leading-relaxed max-w-2xl">
                  Power BI, SQL, and reporting workflows taught against your team&rsquo;s real data — on your schedule, with measurable team outcomes and a capstone deliverable your business can use.
                </p>
              </div>
              <Button href="/contact" size="lg">
                Book a consultation for your team
              </Button>
            </div>
          </FadeInUp>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <FadeInUp className="text-center">
            <Eyebrow>Not sure where to start?</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Tell us what you&rsquo;re trying to figure out.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              A short message or a 15-minute call is usually enough to point you to the right program — or tell you honestly that we&rsquo;re not the right fit.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-text-on-light transition-colors"
            >
              Get in touch
              <ArrowRight size={16} aria-hidden />
            </Link>
          </FadeInUp>
        </Container>
      </Section>

      <FaqAccordion items={homeFaq} tone="light" />
      <FinalCtaBand />
    </>
  );
}
