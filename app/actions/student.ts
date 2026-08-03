"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { STUDENT_EMAIL_COOKIE } from "@/lib/enrollment";

/**
 * Sets a student email cookie so /learn can look up their enrollment.
 *
 * SECURITY NOTE (Phase 1): this trusts the email the visitor types. It is
 * only intended for the manual-enrollment MVP where the admin knows in
 * advance which emails have paid. Phase 2 must replace this with real auth
 * (magic-link email, Clerk, Auth.js, or Supabase) before any paid content
 * is served publicly.
 */
export async function signInAsStudent(email: string): Promise<{ ok: boolean; error?: string }> {
  const normalized = email.toLowerCase().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return { ok: false, error: "Enter a valid email address." };
  }
  const store = await cookies();
  store.set(STUDENT_EMAIL_COOKIE, normalized, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  revalidatePath("/learn", "layout");
  return { ok: true };
}

export async function signOutStudent(): Promise<void> {
  const store = await cookies();
  store.delete(STUDENT_EMAIL_COOKIE);
  revalidatePath("/learn", "layout");
}
