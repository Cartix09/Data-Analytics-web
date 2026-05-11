import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { LearnHireSplit } from "@/components/sections/LearnHireSplit";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { Methodology } from "@/components/sections/Methodology";
import { ConsultingPreview } from "@/components/sections/ConsultingPreview";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { FounderBlock } from "@/components/sections/FounderBlock";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { NewsletterInline } from "@/components/sections/NewsletterInline";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, faqLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "ANLYTICS — Data analytics for teams, taught and shipped",
  description:
    "Dashboard builds, reporting automation, analytics audits, and corporate Power BI training for teams. Practical Power BI, SQL, and Python courses for professionals. Built and taught by practitioners.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd(homeFaq)} />
      <Hero />
      <TrustStrip />
      <LearnHireSplit />
      <ConsultingPreview />
      <Methodology tone="dark" />
      <DashboardShowcase />
      <FeaturedCourses />
      <FounderBlock variant="compact" />
      <TestimonialsPlaceholder />
      <FaqAccordion items={homeFaq} tone="light" />
      <FinalCtaBand />
      <Section tone="light" spacing="tight">
        <Container size="narrow">
          <NewsletterInline />
        </Container>
      </Section>
    </>
  );
}
