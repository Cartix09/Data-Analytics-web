import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HeroDashboard } from "@/components/dashboard-mockup/HeroDashboard";
import { FadeInUp } from "@/components/motion/FadeInUp";

export function Hero() {
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
              Data analytics · Power BI · Consulting
            </Eyebrow>
            <h1 className="text-display-md md:text-display-lg lg:text-display-xl text-text-on-dark text-balance">
              Turn your data into decisions your business actually acts on.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-dark leading-relaxed">
              We build dashboards, automate reporting, and run analytics audits for teams — and train the professionals who&rsquo;ll own that work tomorrow. Power BI, SQL, and Python, taught and shipped by practitioners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/consulting" size="lg">
                Work with our team
              </Button>
              <Button href="/courses" variant="secondary-dark" size="lg">
                Explore courses
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-dark">
              Led by Alish Niftaliyev — Senior Data Analyst at Procter &amp; Gamble · PL-300 Instructor &amp; Mentor.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <HeroDashboard />
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}
