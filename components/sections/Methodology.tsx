import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { methodology } from "@/content/methodology";

interface Props {
  tone?: "dark" | "light";
}

export function Methodology({ tone = "dark" }: Props) {
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "surface-dark py-16 md:py-24" : "surface-light py-16 md:py-24"}>
      <Container>
        <FadeInUp className="max-w-2xl">
          <Eyebrow tone={isDark ? "dark" : "light"}>Methodology</Eyebrow>
          <h2 className={`mt-4 text-display-md md:text-display-lg text-balance ${isDark ? "text-text-on-dark" : "text-text-on-light"}`}>
            Audit. Model. Build. Automate.
          </h2>
          <p className={`mt-4 leading-relaxed ${isDark ? "text-muted-dark" : "text-muted-light"}`}>
            The same four-step approach we follow on every consulting engagement is the spine of every course we teach.
          </p>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {methodology.map((step, i) => (
            <FadeInUp key={step.number} delay={i * 0.05} className="h-full">
              <div
                className={`relative rounded-xl border p-6 md:p-7 h-full flex flex-col ${
                  isDark
                    ? "border-white/10 bg-white/[0.02]"
                    : "border-border-light bg-white"
                }`}
              >
                <span className="text-3xl font-semibold text-accent tabular-nums">
                  {step.number}
                </span>
                <h3 className={`mt-4 text-lg font-semibold ${isDark ? "text-text-on-dark" : "text-text-on-light"}`}>
                  {step.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-muted-dark" : "text-muted-light"}`}>
                  {step.body}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
