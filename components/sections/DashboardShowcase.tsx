import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { ShowcaseDashboard } from "@/components/dashboard-mockup/ShowcaseDashboard";

export function DashboardShowcase() {
  return (
    <section className="surface-dark py-16 md:py-24 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-30"
      />
      <Container>
        <FadeInUp className="max-w-2xl relative">
          <Eyebrow tone="dark">What we build</Eyebrow>
          <h2 className="mt-4 text-display-md md:text-display-lg text-text-on-dark text-balance">
            Dashboards built with the same patterns we teach.
          </h2>
          <p className="mt-4 text-muted-dark leading-relaxed">
            Built in Power BI. Modeled in SQL. Wired with Python where it earns its keep.
          </p>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-3 relative">
          <FadeInUp>
            <ShowcaseDashboard variant="sales" />
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <ShowcaseDashboard variant="ops" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <ShowcaseDashboard variant="marketing" />
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}
