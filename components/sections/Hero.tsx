import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HeroDashboard } from "@/components/dashboard-mockup/HeroDashboard";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { getDict, getLocale } from "@/lib/i18n";

export async function Hero() {
  const locale = await getLocale();
  const t = getDict(locale).hero;
  return (
    <section className="relative surface-dark overflow-hidden pt-28 lg:pt-32 pb-20 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <FadeInUp>
            <Eyebrow tone="dark" bordered className="mb-6">
              {t.eyebrow}
            </Eyebrow>
            <h1 className="text-display-md md:text-display-lg lg:text-display-xl text-text-on-dark text-balance">
              {t.h1}
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-dark leading-relaxed">
              {t.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/consulting" size="lg">
                {t.primaryCta}
              </Button>
              <Button href="/courses" variant="secondary-dark" size="lg">
                {t.secondaryCta}
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-dark">{t.microTrust}</p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <HeroDashboard />
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}
