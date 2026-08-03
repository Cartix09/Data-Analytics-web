import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Lock, LogOut } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { signOutStudent } from "@/app/actions/student";
import { getStudentEmail, hasCourseAccess } from "@/lib/enrollment";
import { getLearningCourse } from "@/content/learning";

interface Params {
  params: Promise<{ courseSlug: string }>;
}

export default async function LearnCoursePage({ params }: Params) {
  const { courseSlug } = await params;
  const email = await getStudentEmail();
  if (!email) redirect("/learn");

  const access = await hasCourseAccess(email, courseSlug);
  if (!access) redirect("/learn");

  const course = getLearningCourse(courseSlug);
  if (!course) redirect("/learn");

  return (
    <>
      <PageHero
        eyebrow={course.eyebrow ?? "Course"}
        title={course.title}
        subtitle={course.summary ?? undefined}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-dark hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} aria-hidden /> Back to portal
          </Link>
          <form action={signOutStudent} className="inline-flex">
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-dark hover:text-accent transition-colors"
            >
              <LogOut size={14} aria-hidden /> Sign out
            </button>
          </form>
        </div>
      </PageHero>

      <Section tone="light">
        <Container>
          <FadeInUp>
            <Card padding="loose">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-light">
                    Signed in as {email}
                  </p>
                  <p className="mt-1 text-sm">
                    {access.allowedModules.length} of {course.modules.length}{" "}
                    modules unlocked in your enrollment.
                  </p>
                </div>
                <Chip tone="accent">
                  {access.allowedModules.length}/{course.modules.length}
                </Chip>
              </div>

              <ul className="grid gap-3">
                {course.modules.map((m) => {
                  const unlocked = access.allowedModules.includes(m.slug);
                  return (
                    <li key={m.slug}>
                      {unlocked ? (
                        <Link
                          href={`/learn/${course.slug}/${m.slug}`}
                          className="group flex items-center justify-between gap-4 rounded-md border border-border-light bg-white p-4 hover:border-accent/40 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                              <BookOpen size={16} aria-hidden />
                            </span>
                            <div>
                              <p className="text-sm font-semibold">{m.title}</p>
                              {m.summary ? (
                                <p className="mt-0.5 text-xs text-muted-light">
                                  {m.summary}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          <ArrowRight
                            size={16}
                            aria-hidden
                            className="text-accent-strong transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      ) : (
                        <div className="flex items-center justify-between gap-4 rounded-md border border-dashed border-border-light bg-light p-4">
                          <div className="flex items-start gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-light border border-border-light text-muted-light">
                              <Lock size={14} aria-hidden />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-muted-light">
                                {m.title}
                              </p>
                              <p className="mt-0.5 text-xs text-muted-light">
                                Not part of your enrollment yet.
                              </p>
                            </div>
                          </div>
                          <Chip>Locked</Chip>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Card>
          </FadeInUp>
        </Container>
      </Section>
    </>
  );
}
