import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { FadeInUp } from "@/components/motion/FadeInUp";

export function LearnHireSplit() {
  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeInUp>
            <Link
              href="/consulting"
              className="group block h-full rounded-xl border border-accent/50 bg-base p-8 md:p-12 text-text-on-dark transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-accent hover:border-accent"
            >
              <Eyebrow tone="dark">For teams · B2B</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">
                Dashboards, reporting, and analytics — shipped for your team.
              </h2>
              <p className="mt-4 max-w-md text-muted-dark leading-relaxed">
                We build the dashboards leadership keeps on-screen, automate the reports that eat your team&rsquo;s Mondays, and train the analysts who&rsquo;ll own that work after we leave.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {[
                  "Dashboard Builds",
                  "Reporting Automation",
                  "Analytics Audit",
                  "Corporate Training",
                ].map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 text-accent font-semibold">
                Book a consultation for your team
                <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <Link
              href="/courses"
              className="group block h-full rounded-xl border border-border-light bg-white p-8 md:p-12 text-text-on-light transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-card hover:border-accent/40"
            >
              <Eyebrow tone="light">For professionals · Learn</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">
                Become the analyst your team relies on.
              </h2>
              <p className="mt-4 max-w-md text-muted-light leading-relaxed">
                Cohort and self-paced programs in Power BI, SQL, and Python — built around the reporting work analysts actually do at companies that take data seriously.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Power BI / PL-300", "SQL for Analysts", "Python for Analysts"].map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border-light bg-light px-3 py-1.5 text-xs font-medium text-text-on-light"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 text-accent-strong font-medium">
                See all courses
                <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  );
}
