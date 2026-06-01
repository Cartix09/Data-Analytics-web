import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { ServiceCard } from "@/components/consulting/ServiceCard";
import { services } from "@/content/services";

export function ConsultingPreview() {
  const list = services.slice(0, 4);
  return (
    <Section tone="white">
      <Container>
        <FadeInUp className="max-w-2xl">
          <Eyebrow>For teams · Consulting</Eyebrow>
          <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
            Dashboards, automation, and training — shipped for your team.
          </h2>
          <p className="mt-4 text-muted-light leading-relaxed">
            Engagements designed for finance, ops, and analytics leaders who need decisions backed by data their team can trust — and own.
          </p>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {list.map((s, i) => (
            <FadeInUp key={s.slug} delay={i * 0.05} className="h-full">
              <ServiceCard service={s} />
            </FadeInUp>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-text-on-light transition-colors"
          >
            See all services
            <ArrowRight size={16} aria-hidden />
          </Link>
          <span className="hidden md:inline-block h-4 w-px bg-border-light" aria-hidden />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-text-on-light hover:bg-accent-strong hover:text-white transition-colors"
          >
            Book a consultation for your team
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
