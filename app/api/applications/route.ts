import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  courseSlug: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(2),
  company: z.string().optional(),
  whyNow: z.string().min(10),
  timeZone: z.string().optional(),
  referral: z.string().optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // MVP: log only. Wire to Resend + CRM/Notion + fit-call calendar in Phase 2.
  console.log("[application]", JSON.stringify(parsed.data));
  return NextResponse.json({ ok: true });
}
