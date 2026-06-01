import { Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { NewsletterInline } from "@/components/sections/NewsletterInline";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { resourceCategories, upcomingPosts } from "@/content/resources";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "The Analytics Journal — practical breakdowns, templates, and notes from the work. Power BI, SQL, Python, dashboard design, and reporting automation.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The Analytics Journal."
        subtitle="Practical breakdowns, templates, and notes from the work — without the buzzwords. The Journal opens with the first published issue. Subscribe and we'll send it the day it ships."
      >
        <div className="max-w-xl">
          <NewsletterInline tone="light" compact />
        </div>
      </PageHero>

      {/* Categories */}
      <Section tone="white" spacing="tight">
        <Container>
          <FadeInUp className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {resourceCategories.map((c) => (
              <div
                key={c.slug}
                className="rounded-xl border border-border-light bg-light p-5 transition-colors hover:border-accent/40 h-full"
              >
                <p className="text-sm font-semibold">{c.label}</p>
                <p className="mt-1 text-xs text-muted-light">{c.description}</p>
              </div>
            ))}
          </FadeInUp>
        </Container>
      </Section>

      {/* Posts placeholder grid */}
      <Section tone="light">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Coming up</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              First issues in the pipeline.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              We&rsquo;re writing the kind of posts we wish we&rsquo;d had earlier in our careers. Subscribe and you&rsquo;ll get them as they publish — no clickbait, no stuffing.
            </p>
          </FadeInUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {upcomingPosts.map((post, i) => (
              <FadeInUp key={post.title} delay={i * 0.04} className="h-full">
                <Card tone="white" hover className="h-full flex flex-col">
                  {/* meta row — fixed min-height keeps titles aligned */}
                  <div className="flex items-center justify-between min-h-[28px]">
                    <Chip tone="accent">{post.category}</Chip>
                    {post.status === "coming-soon" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-light">
                        <Clock size={12} aria-hidden /> Coming soon
                      </span>
                    ) : null}
                  </div>
                  {/* title — reserved min-height for two lines */}
                  <h3 className="mt-5 text-lg font-semibold leading-snug min-h-[3.25rem]">
                    {post.title}
                  </h3>
                  {/* description — grows to fill, pushes any future footer down */}
                  <p className="mt-3 flex-1 text-sm text-muted-light leading-relaxed">
                    {post.description}
                  </p>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter wide */}
      <Section tone="dark">
        <Container size="narrow">
          <FadeInUp>
            <NewsletterInline tone="dark" />
          </FadeInUp>
        </Container>
      </Section>

      <FinalCtaBand />
    </>
  );
}
