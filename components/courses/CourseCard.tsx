import Link from "next/link";
import { ArrowRight, Clock, Users, Lock } from "lucide-react";
import type { Course } from "@/content/courses";
import { Chip } from "@/components/ui/Chip";
import { ShowcaseDashboard } from "@/components/dashboard-mockup/ShowcaseDashboard";
import type { ShowcaseVariant } from "@/components/dashboard-mockup/ShowcaseDashboard";
import type { Dictionary } from "@/content/i18n/en";

interface Labels {
  viewCourse: string;
  notifyMe: string;
  comingSoon: string;
}

interface Props {
  course: Course;
  variant?: ShowcaseVariant;
  labels?: Labels;
}

const liveCourseSlugs = new Set(["power-bi-pl-300"]);

export function courseCardLabels(dict?: Dictionary): Labels {
  return {
    viewCourse: dict?.courseCard.viewCourse ?? "View course",
    notifyMe: dict?.courseCard.notifyMe ?? "Notify me",
    comingSoon: dict?.courseCard.comingSoon ?? "Coming soon",
  };
}

function CardBody({
  course,
  variant,
  labels,
}: {
  course: Course;
  variant: ShowcaseVariant;
  labels: Labels;
}) {
  const live = liveCourseSlugs.has(course.slug);
  return (
    <>
      {/* fixed-aspect mockup frame — every card's preview is the same size */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-base border-b border-border-light">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-[420px]">
            <ShowcaseDashboard variant={variant} />
          </div>
        </div>
      </div>

      {/* body — fills remaining height; bottom meta row is pinned by mt-auto */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* chips row — fixed two-row height so cards with and without
             "Coming soon" still have titles aligned across the grid */}
        <div className="flex flex-wrap items-start gap-2 min-h-[64px] content-start">
          <Chip tone="accent">{course.level}</Chip>
          <Chip>{course.format}</Chip>
          {!live ? (
            <Chip className="text-muted-light">
              <Lock size={11} aria-hidden /> {labels.comingSoon}
            </Chip>
          ) : null}
        </div>

        {/* title — reserved min-height keeps the line below aligned */}
        <h3 className="mt-3 text-xl font-semibold leading-snug text-text-on-light text-balance min-h-[3.25rem]">
          {course.title}
        </h3>

        {/* outcome — reserved min-height for three-line consistency */}
        <p className="mt-2 text-sm text-muted-light leading-relaxed min-h-[4.5rem]">
          {course.outcome}
        </p>

        {/* footer — always at the bottom of the card */}
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
            {live ? labels.viewCourse : labels.notifyMe}
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

export function CourseCard({ course, variant = "sales", labels }: Props) {
  const live = liveCourseSlugs.has(course.slug);
  const href = live ? `/courses/${course.slug}` : "/contact";
  const resolvedLabels = labels ?? courseCardLabels();
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-white transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:shadow-card hover:border-accent/40"
      aria-label={live ? `View ${course.title}` : `Get notified about ${course.title}`}
    >
      <CardBody course={course} variant={variant} labels={resolvedLabels} />
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
