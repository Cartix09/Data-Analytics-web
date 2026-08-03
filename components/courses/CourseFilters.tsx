"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/content/courses";
import { CourseCard, courseCardLabels } from "@/components/courses/CourseCard";
import type { ShowcaseVariant } from "@/components/dashboard-mockup/ShowcaseDashboard";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/content/i18n/en";

const variants: ShowcaseVariant[] = ["sales", "ops", "marketing"];

type FilterValue =
  | "all"
  | "beginner"
  | "intermediate"
  | "advanced"
  | "cohort"
  | "self-paced"
  | "teams";

interface Props {
  courses: Course[];
  dict?: Dictionary;
}

function matches(course: Course, filter: FilterValue): boolean {
  switch (filter) {
    case "all":
      return true;
    case "beginner":
      return course.level === "Beginner";
    case "intermediate":
      return course.level === "Intermediate";
    case "advanced":
      return course.level === "Advanced";
    case "cohort":
      return course.format === "Cohort" || course.format === "Hybrid";
    case "self-paced":
      return course.format === "Self-paced";
    case "teams":
      return course.audience === "B2B" || course.audience === "Both";
    default:
      return true;
  }
}

export function CourseFilters({ courses, dict }: Props) {
  const [active, setActive] = useState<FilterValue>("all");

  const t = dict?.courseFilters;
  const cardLabels = courseCardLabels(dict);
  const filters: { value: FilterValue; label: string }[] = [
    { value: "all", label: t?.all ?? "All" },
    { value: "beginner", label: t?.beginner ?? "Beginner" },
    { value: "intermediate", label: t?.intermediate ?? "Intermediate" },
    { value: "advanced", label: t?.advanced ?? "Advanced" },
    { value: "cohort", label: t?.cohort ?? "Cohort" },
    { value: "self-paced", label: t?.selfPaced ?? "Self-paced" },
    { value: "teams", label: t?.forTeams ?? "For teams" },
  ];

  const filtered = useMemo(
    () => courses.filter((c) => matches(c, active)),
    [courses, active]
  );

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter courses"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const isActive = f.value === active;
          return (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.value)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150 ease-out-soft",
                isActive
                  ? "bg-accent/10 text-accent-strong border-accent/40"
                  : "bg-white text-text-on-light border-border-light hover:border-text-on-light/30"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12">
        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {filtered.map((course, i) => (
              <CourseCard
                key={course.slug}
                course={course}
                variant={variants[i % variants.length]}
                labels={cardLabels}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border-light bg-white p-10 md:p-14 text-center">
            <p className="text-display-md text-balance">
              {t?.emptyTitle ?? "No programs match this filter yet."}
            </p>
            <p className="mt-4 text-muted-light leading-relaxed max-w-xl mx-auto">
              {t?.emptyBody ??
                "Talk to us about a custom training path - we scope corporate programs around your team's real data and workflows."}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text-on-light hover:bg-accent-strong hover:text-white transition-colors"
            >
              {t?.emptyCta ?? "Book a consultation"}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
