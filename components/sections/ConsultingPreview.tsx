import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { ServiceCard } from "@/components/consulting/ServiceCard";
import { services } from "@/content/services";

export function ConsultingPreview() {
  const list = services.slice(0, 3);
  return (
    <Section tone="white">
      <Container>
        <FadeInUp className="max-w-2xl">
          <Eyebrow>Consulting</Eyebrow>
          <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
            When you&rsquo;d rather we just ship it.
          </h2>
          <p className="mt-4 text-muted-light leading-relaxed">
            Engagements designed for teams that need the dashboard, the automation, or the analytics review yesterday.
          </p>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <FadeInUp key={s.slug} delay={i * 0.05}>
              <ServiceCard service={s} />
            </FadeInUp>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-text-on-light transition-colors"
          >
            See all services
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
