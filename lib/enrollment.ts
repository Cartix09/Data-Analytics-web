/**
 * Server-side enrollment / access checks for the /learn portal.
 *
 * Reads the visitor's email from a signed cookie (`anlytics_student_email`,
 * set by /learn/sign-in) and looks up their access record. When Sanity is
 * configured, `studentAccess` documents win. Otherwise the fallback list in
 * `content/learning.ts` is used - which is intended only for demo/local dev.
 *
 * IMPORTANT: This is a Phase 1 shape. It is NOT production-grade auth. See
 * README "Learning portal" for the Phase 2 plan (Clerk / Auth.js / Supabase
 * + signed video URLs).
 */
import { cookies } from "next/headers";
import type { StudentAccess } from "@/content/learning";
import { demoStudentAccess } from "@/content/learning";
import { safeFetch } from "@/studio/client";

export const STUDENT_EMAIL_COOKIE = "anlytics_student_email";

export async function getStudentEmail(): Promise<string | null> {
  const store = await cookies();
  const value = store.get(STUDENT_EMAIL_COOKIE)?.value;
  return value ? value.toLowerCase().trim() : null;
}

export async function getStudentAccess(email: string): Promise<StudentAccess[]> {
  const normalized = email.toLowerCase().trim();

  // Sanity path: query studentAccess documents.
  const cms = await safeFetch<StudentAccess[]>(
    `*[_type == "studentAccess" && lower(email) == $email && status == "active"] {
      email, "courseSlug": course->slug.current,
      allowedModules, status, notes, accessStart, accessEnd
    }`,
    { email: normalized }
  );
  if (cms && cms.length > 0) return cms;

  // Fallback: local demo list (dev only).
  return demoStudentAccess.filter(
    (a) => a.email.toLowerCase() === normalized && a.status === "active"
  );
}

/** Convenience: does this email have access to at least one module of a course? */
export async function hasCourseAccess(
  email: string,
  courseSlug: string
): Promise<StudentAccess | null> {
  const rows = await getStudentAccess(email);
  const match = rows.find((r) => r.courseSlug === courseSlug);
  return match ?? null;
}

/** Convenience: can this email open this specific module? */
export async function canOpenModule(
  email: string,
  courseSlug: string,
  moduleSlug: string
): Promise<boolean> {
  const access = await hasCourseAccess(email, courseSlug);
  if (!access) return false;
  return access.allowedModules.includes(moduleSlug);
}
