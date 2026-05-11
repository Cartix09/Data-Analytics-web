import { Mail, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/forms/ContactForm";
import { BookingEmbed } from "@/components/consulting/BookingEmbed";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Course questions, consulting inquiries, corporate training — one inbox. We reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what your team is trying to figure out."
        subtitle="Whether you're scoping a dashboard build, automating recurring reports, training your analytics team, or picking the right course for yourself — the same inbox reads them all. We reply within one business day."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <FadeInUp>
              <div className="rounded-xl border border-border-light bg-white p-6 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                    <MessageSquare size={18} aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Send a message</p>
                    <p className="text-xs text-muted-light">
                      We read every message personally.
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <div className="space-y-6">
                <div>
                  <Eyebrow>Or book a call</Eyebrow>
                  <h2 className="mt-4 text-2xl font-semibold text-balance">
                    Pick a 30-minute slot that works.
                  </h2>
                  <p className="mt-3 text-muted-light leading-relaxed">
                    For consulting inquiries and corporate training, a short call is usually faster than email. We&rsquo;ll confirm by email after you book.
                  </p>
                </div>
                <BookingEmbed />
                <div className="rounded-xl border border-border-light bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                      <Mail size={16} aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Prefer email?</p>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-accent-strong hover:underline"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </Section>
    </>
  );
}
