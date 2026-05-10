import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { testimonials } from "@/content/testimonials";

export function TestimonialsPlaceholder() {
  if (testimonials.length === 0) {
    return (
      <Section tone="light">
        <Container size="narrow">
          <FadeInUp className="text-center">
            <Eyebrow>What people say</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Reviews coming as the first cohorts wrap.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              We&rsquo;re a new brand. Until we have published reviews, we&rsquo;d rather not invent them. If you&rsquo;d like to talk to past students directly, ask us for an introduction.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.05} className="mt-12">
            <Card padding="loose" className="text-center">
              <Quote
                size={32}
                aria-hidden
                className="mx-auto text-accent-strong"
              />
              <p className="mt-6 text-lg font-medium leading-relaxed">
                &ldquo;The dashboards we build at work are decisions in disguise. The training I run is the same craft, taught the way I&rsquo;d want to be taught — practical, modeled, and ready for Monday morning.&rdquo;
              </p>
              <p className="mt-6 text-sm text-muted-light">
                — Alish Niftaliyev, founder of ANLYTICS
              </p>
            </Card>
          </FadeInUp>
        </Container>
      </Section>
    );
  }

  return (
    <Section tone="light">
      <Container>
        <FadeInUp className="max-w-2xl">
          <Eyebrow>What people say</Eyebrow>
          <h2 className="mt-4 text-display-md text-balance">
            From students and clients we&rsquo;ve worked with.
          </h2>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeInUp key={t.name + i} delay={i * 0.05}>
              <Card hover className="h-full">
                <Quote size={20} aria-hidden className="text-accent-strong" />
                <p className="mt-4 text-base leading-relaxed">{t.quote}</p>
                <div className="mt-6 border-t border-border-light pt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-light">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
