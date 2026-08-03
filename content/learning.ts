/**
 * Learning portal content (fallback).
 *
 * Every field here is a fallback used when the equivalent Sanity documents
 * are not published. Edit these types when the shape of a learning course /
 * module / lesson changes; the Sanity schemas mirror them.
 */

export type LessonType = "video" | "reading" | "worksheet" | "quiz" | "project";

export interface Lesson {
  slug: string;
  title: string;
  type: LessonType;
  /** Public video URL - private Vimeo, Mux playback URL, unlisted YouTube,
   *  or a Google Drive preview link. Google Drive is the least secure. */
  videoUrl?: string;
  /** Optional short description shown above the video/player. */
  description?: string;
  /** Downloadable materials tied to the lesson. */
  materials?: { title: string; url: string }[];
  /** Estimated minutes to complete. Used in the module list. */
  estimatedMinutes?: number;
}

export interface Module {
  slug: string;
  title: string;
  summary?: string;
  lessons: Lesson[];
}

export interface LearningCourse {
  slug: string;
  title: string;
  eyebrow?: string;
  summary?: string;
  modules: Module[];
}

/**
 * Manual enrollment fallback list.
 *
 * Each entry maps a student email to the courses and modules they have
 * paid for. When Sanity `studentAccess` documents exist, they override
 * this list. Emails are lowercased at read-time.
 *
 * SECURITY: this is a Phase 1 access shape. Access checks must happen
 * server-side (they do in this codebase - see lib/enrollment.ts). Do NOT
 * rely on client-side visibility alone.
 */
export interface StudentAccess {
  email: string;
  courseSlug: string;
  /** Slugs of the modules the student can open. */
  allowedModules: string[];
  status: "active" | "paused" | "expired";
  notes?: string;
  /** ISO date the access was granted. */
  accessStart?: string;
  /** Optional ISO date after which access is revoked. */
  accessEnd?: string;
}

export const learningCourses: LearningCourse[] = [
  {
    slug: "power-bi-pl-300",
    title: "Power BI Mastery (PL-300)",
    eyebrow: "Cohort program",
    summary:
      "Modeling, DAX, dashboard design, and PL-300 preparation - taught against real datasets.",
    modules: [
      {
        slug: "week-1-foundations",
        title: "Week 1 - Foundations & the analytics mindset",
        summary: "Frame the business question, map the data flow, set up a clean workspace.",
        lessons: [
          {
            slug: "welcome",
            title: "Welcome to the cohort",
            type: "video",
            description:
              "How the program runs, what to expect each week, and how to get the most out of the live sessions.",
            estimatedMinutes: 8,
          },
          {
            slug: "the-analytics-mindset",
            title: "The analytics mindset",
            type: "video",
            description:
              "Why the business question comes before the tool - and how to write one that maps to a dashboard.",
            estimatedMinutes: 14,
          },
          {
            slug: "workspace-setup",
            title: "Workspace setup",
            type: "reading",
            description:
              "Install Power BI Desktop, sign in, and connect the sample dataset used for the first exercise.",
            estimatedMinutes: 10,
            materials: [
              { title: "Power BI setup checklist (PDF)", url: "#" },
            ],
          },
        ],
      },
      {
        slug: "week-2-modeling",
        title: "Week 2 - Data modeling & the star schema",
        summary: "Fact and dimension tables, relationships, and the pitfalls of flat data.",
        lessons: [
          {
            slug: "star-schema-primer",
            title: "Star schema primer",
            type: "video",
            estimatedMinutes: 22,
          },
          {
            slug: "modeling-exercise",
            title: "Exercise - modeling a messy export",
            type: "worksheet",
            description:
              "Take a real, messy CRM export and turn it into a star schema ready for measures.",
            materials: [
              { title: "Exercise dataset (.pbix)", url: "#" },
            ],
          },
        ],
      },
      {
        slug: "week-3-dax",
        title: "Week 3 - DAX in depth",
        summary: "Row context, filter context, and CALCULATE without the mystery.",
        lessons: [
          {
            slug: "dax-fundamentals",
            title: "DAX fundamentals",
            type: "video",
            estimatedMinutes: 28,
          },
          {
            slug: "measures-that-hold-up",
            title: "Measures that hold up under filters",
            type: "video",
            estimatedMinutes: 24,
          },
        ],
      },
    ],
  },
];

/**
 * Demo access list. Replace with a real database (Supabase / Postgres) or
 * a Sanity `studentAccess` collection - see README "Learning portal".
 */
export const demoStudentAccess: StudentAccess[] = [
  {
    email: "demo.student@example.com",
    courseSlug: "power-bi-pl-300",
    allowedModules: ["week-1-foundations", "week-2-modeling"],
    status: "active",
    notes: "Purchased first 2 modules by bank transfer on 2026-01-15.",
    accessStart: "2026-01-15",
  },
];

export function getLearningCourse(slug: string): LearningCourse | undefined {
  return learningCourses.find((c) => c.slug === slug);
}

export function getModule(course: LearningCourse, moduleSlug: string): Module | undefined {
  return course.modules.find((m) => m.slug === moduleSlug);
}
