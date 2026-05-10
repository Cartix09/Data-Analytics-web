import Link from "next/link";
import { ArrowRight, Clock, Users, Lock } from "lucide-react";
import type { Course } from "@/content/courses";
import { Chip } from "@/components/ui/Chip";
import { ShowcaseDashboard } from "@/components/dashboard-mockup/ShowcaseDashboard";
import type { ShowcaseVariant } from "@/components/dashboard-mockup/ShowcaseDashboard";

interface Props {
  course: Course;
  variant?: ShowcaseVariant;
}

const liveCourseSlugs = new Set(["power-bi-pl-300"]);

function CardBody({
  course,
  variant,
}: {
  course: Course;
  variant: ShowcaseVariant;
}) {
  const live = liveCourseSlugs.has(course.slug);
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-base">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative h-full w-full p-4">
          <ShowcaseDashboard variant={variant} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <Chip tone="accent">{course.level}</Chip>
          <Chip>{course.format}</Chip>
          {!live ? (
            <Chip className="text-muted-light">
              <Lock size={11} aria-hidden /> Coming soon
            </Chip>
          ) : null}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-on-light">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-muted-light leading-relaxed">
            {course.outcome}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border-light pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-light">
            <Clock size={13} aria-hidden /> {course.durationLabel}
          </span>
          <span
            className={
              "inline-flex items-center gap-1 text-sm font-medium " +
              (live ? "text-accent-strong" : "text-muted-light")
            }
          >
            {live ? "View course" : "Notify me"}
            <ArrowRight
              size={14}
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export function CourseCard({ course, variant = "sales" }: Props) {
  const live = liveCourseSlugs.has(course.slug);
  const href = live ? `/courses/${course.slug}` : "/contact";
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-white transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-card hover:border-accent/40"
      aria-label={live ? `View ${course.title}` : `Get notified about ${course.title}`}
    >
      <CardBody course={course} variant={variant} />
    </Link>
  );
}

interface CompactProps {
  course: Course;
}

export function CourseCardCompact({ course }: CompactProps) {
  const live = liveCourseSlugs.has(course.slug);
  const href = live ? `/courses/${course.slug}` : "/contact";
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 transition-all duration-200 ease-out-soft hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-card"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
        <Users size={20} aria-hidden />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-text-on-light">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-light">{course.outcome}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Chip>{course.format}</Chip>
          <Chip>{course.durationLabel}</Chip>
        </div>
      </div>
    </Link>
  );
}
