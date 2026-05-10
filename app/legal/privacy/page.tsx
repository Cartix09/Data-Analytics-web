import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "How ANLYTICS collects, uses, and protects your data.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy."
        subtitle="A short, plain-language summary of how we collect, use, and protect your data."
      />
      <Section tone="light">
        <Container size="narrow">
          <article className="prose-style space-y-6 text-muted-light leading-relaxed">
            <h2 className="text-2xl font-semibold text-text-on-light">
              The short version
            </h2>
            <p>
              We collect only the information you give us through forms (email, name, optional company, message), the bare minimum needed to deliver the courses, services, and newsletter you ask for, plus standard server logs. We don&rsquo;t sell your data. You can ask us to delete it at any time.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">What we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Form submissions:</strong> when you contact us, apply for a course, or subscribe to the newsletter, we keep your email and the message you sent.
              </li>
              <li>
                <strong>Booking metadata:</strong> if you book a consultation, we receive the meeting details (name, email, time slot) from our calendar provider.
              </li>
              <li>
                <strong>Analytics:</strong> aggregate page-view and event data to understand how the site is used. We do not use ad-tracking pixels.
              </li>
              <li>
                <strong>Server logs:</strong> standard request logs (IP, user agent, time) for security and debugging.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-text-on-light">How we use it</h2>
            <p>
              To reply to your messages, deliver the courses or services you&rsquo;ve enrolled in or hired us for, send the newsletter you subscribed to, and keep the site running.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Your rights</h2>
            <p>
              You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it. Email{" "}
              <a className="text-accent-strong hover:underline" href="mailto:hello@anlytics.com">
                hello@anlytics.com
              </a>{" "}
              and we&rsquo;ll get back to you within one business day.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Cookies</h2>
            <p>
              We use only essential cookies needed for the site to function and, where enabled, privacy-respecting analytics cookies. We do not use advertising cookies.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Updates</h2>
            <p>
              When this policy changes meaningfully, we&rsquo;ll update this page and note the change at the top.
            </p>
            <p className="text-xs text-muted-light">
              Last updated: this is a Phase 1 placeholder. Consult counsel before publishing in your jurisdiction.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
