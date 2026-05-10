import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { BookingEmbed } from "@/components/consulting/BookingEmbed";
import { Methodology } from "@/components/sections/Methodology";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { ShowcaseDashboard } from "@/components/dashboard-mockup/ShowcaseDashboard";
import { services, engagementModels, stacks } from "@/content/services";
import { consultingFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Consulting",
  description:
    "Power BI dashboard builds, reporting automation, and analytics audits — delivered by practitioners who do this work in production every day.",
  path: "/consulting",
});

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title="Reporting that earns its place on the leadership screen."
        subtitle="Power BI dashboard builds, reporting automation, and analytics audits — delivered by practitioners who do this work in production every day."
        tone="dark"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#book" size="lg">
            Book a consultation
          </Button>
          <Button href="#how-we-work" variant="secondary-dark" size="lg">
            See how we work
          </Button>
        </div>
      </PageHero>

      {/* Services */}
      <Section tone="light">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
              When you&rsquo;d rather we just ship it.
            </h2>
          </FadeInUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <FadeInUp key={s.slug} delay={i * 0.04} id={s.slug}>
                <Card hover className="h-full">
                  <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                      {/* icon via ServiceCard reused — but we need richer layout */}
                      <span className="text-xl font-semibold">0{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-light leading-relaxed">{s.summary}</p>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-muted-light">Outcomes</p>
                          <ul className="mt-2 space-y-1.5 text-sm">
                            {s.outcomes.map((o) => (
                              <li key={o} className="flex gap-2">
                                <Check size={14} aria-hidden className="mt-1 text-accent-strong shrink-0" />
                                <span className="leading-relaxed">{o}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-muted-light">Deliverables</p>
                          <ul className="mt-2 space-y-1.5 text-sm">
                            {s.deliverables.map((d) => (
                              <li key={d} className="flex gap-2">
                                <span className="text-accent-strong">—</span>
                                <span className="leading-relaxed">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Methodology */}
      <div id="how-we-work">
        <Methodology tone="dark" />
      </div>

      {/* Stacks */}
      <Section tone="white" spacing="tight">
        <Container>
          <FadeInUp className="text-center max-w-2xl mx-auto">
            <Eyebrow>Stacks we work in</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              We meet you where your data already lives.
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.05} className="mt-8 flex flex-wrap justify-center gap-2">
            {stacks.map((s) => (
              <Chip key={s} className="text-sm">{s}</Chip>
            ))}
          </FadeInUp>
        </Container>
      </Section>

      {/* Engagement models */}
      <Section tone="light">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Engagement models</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Three ways we typically work.
            </h2>
          </FadeInUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((m, i) => (
              <FadeInUp key={m.title} delay={i * 0.05}>
                <Card hover className="h-full">
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-3 text-sm text-muted-light leading-relaxed">{m.body}</p>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case studies placeholder */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <FadeInUp>
              <Eyebrow tone="dark">Case studies</Eyebrow>
              <h2 className="mt-4 text-display-md text-text-on-dark text-balance">
                Case studies in publication.
              </h2>
              <p className="mt-4 text-muted-dark leading-relaxed max-w-xl">
                Detailed write-ups are being prepared with client permission. In the meantime, we&rsquo;re happy to walk you through past engagements privately on a consultation call — names, numbers, and dashboards.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#book">Book a private walkthrough</Button>
                <Button href="/contact" variant="secondary-dark">
                  Email us first
                </Button>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <div className="grid grid-cols-2 gap-4">
                <ShowcaseDashboard variant="sales" />
                <ShowcaseDashboard variant="ops" />
                <ShowcaseDashboard variant="marketing" />
                <div className="rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center p-8 text-center">
                  <p className="text-sm text-muted-dark">
                    More dashboards added as engagements close and consent is granted.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </Section>

      <FaqAccordion items={consultingFaq} tone="light" title="Engagement, scoping, and the rest." />

      {/* Booking */}
      <Section tone="white" id="book">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <FadeInUp>
              <Eyebrow>Book a consultation</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">
                Tell us what you&rsquo;re trying to ship.
              </h2>
              <p className="mt-4 text-muted-light leading-relaxed">
                A 30-minute call is usually enough to scope the engagement. We&rsquo;ll tell you whether we&rsquo;re the right fit and, if not, point you at someone who is.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-text-on-light">
                <li className="flex gap-2">
                  <Check size={16} aria-hidden className="mt-0.5 text-accent-strong" />
                  <span>Mutual NDA available before the call.</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} aria-hidden className="mt-0.5 text-accent-strong" />
                  <span>Remote-first; on-site available for kickoff workshops.</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} aria-hidden className="mt-0.5 text-accent-strong" />
                  <span>Reply within one business day.</span>
                </li>
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <BookingEmbed />
            </FadeInUp>
          </div>
        </Container>
      </Section>

      <FinalCtaBand
        primary={{
          label: "Book a consultation",
          href: "#book",
          description: "Need dashboards or reporting that ships?",
        }}
        secondary={{
          label: "Train your team",
          href: "/contact",
          description: "Bring ANLYTICS to your analytics team.",
        }}
      />
    </>
  );
}
