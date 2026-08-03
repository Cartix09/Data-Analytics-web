import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, FileText, PlayCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { canOpenModule, getStudentEmail } from "@/lib/enrollment";
import { getLearningCourse, getModule } from "@/content/learning";

interface Params {
  params: Promise<{ courseSlug: string; moduleSlug: string }>;
}

export default async function ModulePage({ params }: Params) {
  const { courseSlug, moduleSlug } = await params;
  const email = await getStudentEmail();
  if (!email) redirect("/learn");

  const allowed = await canOpenModule(email, courseSlug, moduleSlug);
  if (!allowed) redirect("/learn");

  const course = getLearningCourse(courseSlug);
  if (!course) redirect("/learn");
  const mod = getModule(course, moduleSlug);
  if (!mod) redirect("/learn");

  return (
    <>
      <PageHero
        eyebrow={course.title}
        title={mod.title}
        subtitle={mod.summary ?? undefined}
      >
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-dark hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden /> Back to portal
        </Link>
      </PageHero>

      <Section tone="light">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Lessons</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              {mod.lessons.length} lessons in this module.
            </h2>
          </FadeInUp>
          <div className="mt-10 grid gap-4">
            {mod.lessons.map((l, i) => (
              <FadeInUp key={l.slug} delay={i * 0.03}>
                <Link
                  href={`/learn/${course.slug}/${mod.slug}/${l.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border-light bg-white p-5 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                      {l.type === "video" ? (
                        <PlayCircle size={18} aria-hidden />
                      ) : (
                        <FileText size={18} aria-hidden />
                      )}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{l.title}</p>
                      {l.description ? (
                        <p className="mt-1 text-xs text-muted-light leading-relaxed">
                          {l.description}
                        </p>
                      ) : null}
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Chip>{l.type}</Chip>
                        {l.estimatedMinutes ? (
                          <Chip>{l.estimatedMinutes} min</Chip>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="text-accent-strong transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" spacing="tight">
        <Container>
          <FadeInUp>
            <Card padding="loose" className="text-center">
              <p className="text-sm text-muted-light">
                Need help with a lesson? Email{" "}
                <a
                  href="mailto:hello@anlytics.com"
                  className="text-accent-strong hover:underline"
                >
                  hello@anlytics.com
                </a>
                .
              </p>
              <div className="mt-4">
                <Button href="/learn" variant="secondary-light" size="sm">
                  Back to my portal
                </Button>
              </div>
            </Card>
          </FadeInUp>
        </Container>
      </Section>
    </>
  );
}
