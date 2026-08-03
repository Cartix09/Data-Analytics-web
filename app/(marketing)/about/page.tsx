import { ExternalLink, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Methodology } from "@/components/sections/Methodology";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { founder } from "@/content/founder";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "ANLYTICS is the analytics studio and school led by Alish Niftaliyev - an Expert Data Analyst at Procter & Gamble who teaches the same craft he uses at work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Practical analytics for teams and professionals."
        subtitle="ANLYTICS is the analytics studio and school led by Alish Niftaliyev, an Expert Data Analyst at Procter & Gamble who teaches the same craft he uses at work."
      />

      {/* Founder */}
      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <FadeInUp>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border-light bg-base">
                <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
                <div
                  aria-hidden
                  className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
                />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <span
                    aria-hidden
                    className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/[0.04] border border-white/10 text-3xl font-semibold text-text-on-dark mb-6"
                  >
                    AN
                  </span>
                  <p className="text-2xl font-semibold text-text-on-dark">{founder.name}</p>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">{founder.shortRole}</p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-text-on-dark transition-colors"
                  >
                    LinkedIn <ExternalLink size={14} aria-hidden />
                  </a>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <Eyebrow>Founder</Eyebrow>
              <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
                Working analyst. Honest teacher.
              </h2>
              <div className="mt-6 space-y-5 text-muted-light leading-relaxed">
                {founder.bioParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-light">Credentials</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {founder.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-text-on-light">
                      <Check size={14} aria-hidden className="mt-1 text-accent-strong shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </Section>

      {/* Beliefs */}
      <Section tone="white">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
              Five principles that shape every dashboard we ship and every course we teach.
            </h2>
          </FadeInUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {founder.beliefs.map((b, i) => (
              <FadeInUp key={b.title} delay={i * 0.04}>
                <Card tone="light" className="h-full">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-strong">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-light leading-relaxed">{b.body}</p>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </Section>

      <Methodology tone="light" />

      {/* How we got here */}
      <Section tone="dark">
        <Container size="narrow">
          <FadeInUp>
            <Eyebrow tone="dark">How we got here</Eyebrow>
            <h2 className="mt-4 text-display-md text-text-on-dark text-balance">
              ANLYTICS started where most analytics work starts - at the edge of a messy spreadsheet.
            </h2>
            <div className="mt-6 space-y-5 text-muted-dark leading-relaxed">
              <p>
                Working in supply analytics at P&amp;G, Alish kept seeing the same gap: junior analysts knew the tools but not the modeling, and senior leaders had dashboards that didn&rsquo;t answer the question they were really asking.
              </p>
              <p>
                ANLYTICS exists to close that gap on both sides: teaching real analytics workflows to people who want to be taken seriously as analysts, and delivering dashboards and reporting for teams who want the job done right the first time.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </Section>

      <FinalCtaBand />
    </>
  );
}
