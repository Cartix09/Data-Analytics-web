import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  intent: z.enum(["course", "consulting", "corporate", "other"]),
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
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

  // MVP: log only. Wire to Resend/Postmark/Customer.io in Phase 2.
  console.log("[contact]", JSON.stringify(parsed.data));
  return NextResponse.json({ ok: true });
}
