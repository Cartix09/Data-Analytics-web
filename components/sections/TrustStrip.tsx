import { Container } from "@/components/ui/Container";

const items = [
  "Expert Data Analyst @ Procter & Gamble",
  "PL-300 Instructor & Mentor",
  "Power BI · SQL · Python",
  "Dashboards & reporting automation",
];

export function TrustStrip() {
  return (
    <section className="surface-elevated border-y border-white/5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6">
          <span className="text-eyebrow uppercase tracking-[0.18em] text-muted-dark">
            Built by
          </span>
          {items.map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-x-10 text-sm text-text-on-dark/85"
            >
              {item}
              {i < items.length - 1 ? (
                <span className="hidden md:inline-block h-1 w-1 rounded-full bg-muted-dark/40" aria-hidden />
              ) : null}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
