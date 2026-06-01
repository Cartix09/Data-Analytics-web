import Link from "next/link";
import {
  GraduationCap,
  Video,
  CalendarDays,
  FileText,
  ExternalLink,
  Info,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { AvailabilityForm } from "@/components/forms/AvailabilityForm";
import { studentHub } from "@/content/studentHub";

function isConfigured(url: string | undefined | null): boolean {
  return !!url && url !== "#" && url.length > 1;
}

export default function StudentHubPage() {
  const classroomReady = isConfigured(studentHub.googleClassroomUrl);

  return (
    <>
      <PageHero
        eyebrow="Student Hub · MVP"
        title="Welcome to the ANLYTICS Student Hub."
        subtitle="A simple home for course materials, live sessions, and availability — while the full ANLYTICS portal is being built. Bookmark this page."
      >
        <div className="flex flex-wrap items-start gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-muted-dark max-w-2xl">
          <Info size={18} aria-hidden className="text-accent mt-0.5 shrink-0" />
          <p>
            This is a temporary hub. We don&rsquo;t require login yet — keep this
            URL private and only share it with current students.
          </p>
        </div>
      </PageHero>

      {/* Google Classroom */}
      <Section tone="light">
        <Container>
          <FadeInUp>
            <Card hover className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                <GraduationCap size={28} aria-hidden />
              </div>
              <div>
                <Eyebrow>Google Classroom</Eyebrow>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-balance">
                  Course materials and assignments.
                </h2>
                <p className="mt-3 text-muted-light leading-relaxed max-w-2xl">
                  Course materials and assignments are shared through Google
                  Classroom while the ANLYTICS portal is being built.
                </p>
              </div>
              {classroomReady ? (
                <Button href={studentHub.googleClassroomUrl} external size="lg">
                  Open Google Classroom
                  <ExternalLink size={14} aria-hidden />
                </Button>
              ) : (
                <div className="text-sm text-muted-light">
                  Classroom link coming — your instructor will share it.
                </div>
              )}
            </Card>
          </FadeInUp>
        </Container>
      </Section>

      {/* Teams sessions */}
      <Section tone="white">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Live sessions · Microsoft Teams</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Join the weekly live sessions.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              All live sessions run on Microsoft Teams. Add the links to your
              calendar — recordings are posted in Google Classroom afterwards.
            </p>
          </FadeInUp>
          <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            {studentHub.teamsSessions.map((session, i) => {
              const ready = isConfigured(session.url);
              return (
                <FadeInUp key={session.day + i} delay={i * 0.05} className="h-full">
                  <Card hover className="h-full flex flex-col">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                      <Video size={20} aria-hidden />
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-light">
                      {session.label}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">{session.day}</h3>
                    <div className="mt-auto pt-6">
                      {ready ? (
                        <Button href={session.url} external size="sm">
                          Join Teams meeting
                          <ExternalLink size={13} aria-hidden />
                        </Button>
                      ) : (
                        <Chip>
                          <CalendarDays size={12} aria-hidden /> Link coming soon
                        </Chip>
                      )}
                    </div>
                  </Card>
                </FadeInUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Availability */}
      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <FadeInUp>
              <Eyebrow>Availability</Eyebrow>
              <h2 className="mt-4 text-display-md text-balance">
                Tell us when you are available.
              </h2>
              <p className="mt-4 text-muted-light leading-relaxed">
                We use this to choose live session times that work for most
                students. Pick every slot you&rsquo;d realistically join — you
                can update it any time by submitting again.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-light">
                <li className="flex gap-2">
                  <span className="text-accent-strong">—</span>
                  <span>Slots are general weekly windows, not single dates.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-strong">—</span>
                  <span>Add a time zone in the notes if you&rsquo;re outside CET.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-strong">—</span>
                  <span>We&rsquo;ll confirm new session times in Google Classroom.</span>
                </li>
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <div className="rounded-xl border border-border-light bg-white p-6 md:p-8">
                <AvailabilityForm slots={studentHub.availabilitySlots} />
              </div>
            </FadeInUp>
          </div>
        </Container>
      </Section>

      {/* Materials */}
      <Section tone="white">
        <Container>
          <FadeInUp className="max-w-2xl">
            <Eyebrow>Course materials</Eyebrow>
            <h2 className="mt-4 text-display-md text-balance">
              Everything you need to get started — and stay on track.
            </h2>
            <p className="mt-4 text-muted-light leading-relaxed">
              Resources curated for the current cohort. New materials are added
              as we cover them.
            </p>
          </FadeInUp>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {studentHub.materials.map((m, i) => {
              const ready = isConfigured(m.url);
              return (
                <FadeInUp key={m.title} delay={i * 0.05} className="h-full">
                  <Card hover className="h-full flex flex-col">
                    <div className="flex items-center justify-between min-h-[40px]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                        <FileText size={18} aria-hidden />
                      </div>
                      {m.tag ? <Chip tone="accent">{m.tag}</Chip> : null}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold leading-snug min-h-[3rem]">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-light leading-relaxed">
                      {m.description}
                    </p>
                    <div className="mt-auto pt-6">
                      {ready ? (
                        <Button href={m.url} external variant="secondary-light" size="sm">
                          Open material
                          <ExternalLink size={13} aria-hidden />
                        </Button>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-muted-light">
                          Posting soon
                        </span>
                      )}
                    </div>
                  </Card>
                </FadeInUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Help */}
      <Section tone="dark">
        <Container size="narrow">
          <FadeInUp className="text-center">
            <Eyebrow tone="dark">Need help?</Eyebrow>
            <h2 className="mt-4 text-display-md text-text-on-dark text-balance">
              Stuck on something? Email us.
            </h2>
            <p className="mt-4 text-muted-dark leading-relaxed">
              For anything course-related — missed sessions, materials access,
              technical issues — email{" "}
              <a className="text-accent hover:underline" href="mailto:hello@anlytics.com">
                hello@anlytics.com
              </a>
              . We reply within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-text-on-dark transition-colors"
            >
              Or use the contact form →
            </Link>
          </FadeInUp>
        </Container>
      </Section>
    </>
  );
}
