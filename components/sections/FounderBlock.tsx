import { Check, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { founder } from "@/content/founder";

interface Props {
  variant?: "compact" | "full";
}

export function FounderBlock({ variant = "compact" }: Props) {
  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center">
          <FadeInUp>
            <div className="relative overflow-hidden rounded-xl border border-border-light bg-base aspect-square">
              <div
                aria-hidden
                className="absolute inset-0 grid-pattern opacity-40"
              />
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
              />
              <div className="relative flex h-full flex-col justify-end p-8">
                <span
                  aria-hidden
                  className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/[0.04] border border-white/10 text-3xl font-semibold text-text-on-dark mb-6"
                >
                  AN
                </span>
                <p className="text-2xl font-semibold text-text-on-dark">{founder.name}</p>
                <p className="mt-2 text-sm text-muted-dark leading-relaxed">
                  {founder.shortRole}
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <Eyebrow>Founder</Eyebrow>
            <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
              Built by a practitioner.
            </h2>
            <div className="mt-6 space-y-4 text-muted-light leading-relaxed">
              {founder.bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {variant === "full" ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {founder.credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm text-text-on-light"
                  >
                    <Check size={16} aria-hidden className="mt-0.5 text-accent-strong shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-text-on-light transition-colors"
              >
                Read more about ANLYTICS
                <ArrowRight size={16} aria-hidden />
              </Link>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-on-light hover:text-accent-strong transition-colors"
              >
                LinkedIn
                <ExternalLink size={14} aria-hidden />
              </a>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </Section>
  );
}
