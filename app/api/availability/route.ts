import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  availability: z.array(z.string().min(1)).min(1, "Pick at least one slot."),
  note: z.string().max(2000).optional(),
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

  // MVP: log only. Wire to Resend / a Google Sheet / a Notion DB in Phase 2.
  console.log("[availability]", JSON.stringify(parsed.data));
  return NextResponse.json({ ok: true });
}
