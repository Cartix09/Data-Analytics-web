import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
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
    return NextResponse.json({ ok: false, error: "Validation failed" }, { status: 400 });
  }

  // MVP: log only. Wire to ConvertKit / Customer.io / Resend audiences in Phase 2.
  console.log("[newsletter]", JSON.stringify(parsed.data));
  return NextResponse.json({ ok: true });
}
