import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { renderInquiryEmail, sendEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
    const limit = rateLimit(`contact:${ip}`);
    if (!limit.ok) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    if (parsed.data.website) return NextResponse.json({ ok: true }); // honeypot

    const { website, ...fields } = parsed.data;
    void website;
    const html = renderInquiryEmail(fields as Record<string, string | undefined>);
    await sendEmail({
      subject: `New inquiry — ${parsed.data.name} (${parsed.data.projectType})`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact error", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
