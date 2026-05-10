import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for the ANLYTICS website, courses, and consulting services.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms."
        subtitle="The plain-language terms that apply when you use this site, enroll in a course, or hire us for a consulting engagement."
      />
      <Section tone="light">
        <Container size="narrow">
          <article className="space-y-6 text-muted-light leading-relaxed">
            <h2 className="text-2xl font-semibold text-text-on-light">Using this site</h2>
            <p>
              The content on this site is provided for general information. We try to keep everything accurate, but we do not warrant the site or its content. Use it at your own risk.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Courses</h2>
            <p>
              When you enroll in a course, your access is governed by the program&rsquo;s enrollment terms — including the schedule, deliverables, refund window, and certificate criteria. Course materials are licensed for personal use; please don&rsquo;t redistribute them.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Consulting</h2>
            <p>
              Consulting engagements are governed by a separate Statement of Work. Each engagement begins with a mutual NDA when applicable.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Intellectual property</h2>
            <p>
              The brand, copy, course materials, and templates on this site are the property of ANLYTICS and Alish Niftaliyev. You may quote short excerpts with attribution.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Liability</h2>
            <p>
              We are not liable for indirect or consequential damages arising from use of the site or its content. Where required by law, our liability is limited to the amount you have paid us in the past 12 months.
            </p>
            <h2 className="text-2xl font-semibold text-text-on-light">Contact</h2>
            <p>
              Questions on these terms? Email{" "}
              <a className="text-accent-strong hover:underline" href="mailto:hello@anlytics.com">
                hello@anlytics.com
              </a>
              .
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
