import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { getDict, getLocale } from "@/lib/i18n";

export async function LearnHireSplit() {
  const locale = await getLocale();
  const t = getDict(locale).learnHire;

  // Product/service names stay untranslated across locales.
  const b2bChips = [
    "Dashboard Builds",
    "Reporting Automation",
    "Analytics Audit",
    "Corporate Training",
  ];
  const learnChips = ["Power BI / PL-300", "SQL for Analysts", "Python for Analysts"];

  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          <FadeInUp className="h-full">
            <Link
              href="/consulting"
              className="group flex h-full flex-col rounded-xl border border-accent/50 bg-base p-8 md:p-12 text-text-on-dark transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-accent hover:border-accent"
            >
              <Eyebrow tone="dark">{t.b2bEyebrow}</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">{t.b2bTitle}</h2>
              <p className="mt-4 max-w-md text-muted-dark leading-relaxed">
                {t.b2bBody}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {b2bChips.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-8 inline-flex items-center gap-2 text-accent font-semibold">
                {t.b2bCta}
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </FadeInUp>

          <FadeInUp delay={0.05} className="h-full">
            <Link
              href="/courses"
              className="group flex h-full flex-col rounded-xl border border-border-light bg-white p-8 md:p-12 text-text-on-light transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-card hover:border-accent/40"
            >
              <Eyebrow tone="light">{t.learnEyebrow}</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">{t.learnTitle}</h2>
              <p className="mt-4 max-w-md text-muted-light leading-relaxed">
                {t.learnBody}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {learnChips.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border-light bg-light px-3 py-1.5 text-xs font-medium text-text-on-light"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-8 inline-flex items-center gap-2 text-accent-strong font-medium">
                {t.learnCta}
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  );
}
