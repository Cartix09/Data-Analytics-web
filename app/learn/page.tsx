import Link from "next/link";
import { ArrowRight, BookOpen, Lock, LogOut } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { StudentSignInForm } from "@/components/learn/StudentSignInForm";
import { signOutStudent } from "@/app/actions/student";
import {
  getStudentAccess,
  getStudentEmail,
} from "@/lib/enrollment";
import { learningCourses } from "@/content/learning";

export default async function LearnHomePage() {
  const email = await getStudentEmail();

  if (!email) {
    return (
      <>
        <PageHero
          eyebrow="Learning portal"
          title="Sign in to your learning portal."
          subtitle="Enter the email address you used when you enrolled. You will only see the modules you have paid for. If your email is not recognised yet, contact us and we will add you."
        />
        <Section tone="light">
          <Container size="narrow">
            <FadeInUp>
              <Card padding="loose" className="max-w-md mx-auto">
                <StudentSignInForm />
                <p className="mt-6 text-xs text-muted-light leading-relaxed">
                  Access is granted manually by our team after payment is
                  confirmed. If you paid recently and cannot sign in yet, email{" "}
                  <a
                    href="mailto:hello@anlytics.com"
                    className="text-accent-strong hover:underline"
                  >
                    hello@anlytics.com
                  </a>
                  .
                </p>
              </Card>
            </FadeInUp>
          </Container>
        </Section>
      </>
    );
  }

  const access = await getStudentAccess(email);
  const enrolledCourses = learningCourses
    .filter((c) => access.some((a) => a.courseSlug === c.slug))
    .map((c) => ({
      course: c,
      access: access.find((a) => a.courseSlug === c.slug)!,
    }));

  return (
    <>
      <PageHero
        eyebrow="Learning portal"
        title={`Welcome back.`}
        subtitle={`Signed in as ${email}. Below are the modules you have access to. If a module is not listed, it has not been added to your enrollment yet.`}
      >
        <form action={signOutStudent}>
          <button
            type="submit"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-dark hover:text-accent transition-colors"
          >
            <LogOut size={14} aria-hidden /> Sign out
          </button>
        </form>
      </PageHero>

      <Section tone="light">
        <Container>
          {enrolledCourses.length === 0 ? (
            <FadeInUp>
              <Card padding="loose" className="text-center max-w-2xl mx-auto">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                  <Lock size={22} aria-hidden />
                </div>
                <h2 className="mt-6 text-2xl font-semibold">
                  No modules assigned yet.
                </h2>
                <p className="mt-3 text-muted-light leading-relaxed">
                  Your email is not currently linked to any modules. If you have
                  paid, we will add your enrollment shortly. In the meantime,
                  reach out at{" "}
                  <a
                    href="mailto:hello@anlytics.com"
                    className="text-accent-strong hover:underline"
                  >
                    hello@anlytics.com
                  </a>
                  .
                </p>
              </Card>
            </FadeInUp>
          ) : (
            <div className="grid gap-6">
              {enrolledCourses.map(({ course, access }) => (
                <FadeInUp key={course.slug}>
                  <Card padding="loose" className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <Eyebrow>{course.eyebrow ?? "Course"}</Eyebrow>
                        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                          {course.title}
                        </h2>
                        {course.summary ? (
                          <p className="mt-2 text-muted-light leading-relaxed max-w-2xl">
                            {course.summary}
                          </p>
                        ) : null}
                      </div>
                      <Chip tone="accent">
                        {access.allowedModules.length}/{course.modules.length} modules
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
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
