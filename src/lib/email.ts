import { Resend } from "resend";

const RESEND_KEY = process.env.RESEND_API_KEY;
const TO = process.env.CONTACT_EMAIL_TO || "info@nuviewconstructions.com";
const FROM = process.env.CONTACT_EMAIL_FROM || "NuView Web <onboarding@resend.dev>";

export async function sendEmail(opts: { subject: string; html: string }) {
  if (!RESEND_KEY) {
    // Log instead of throwing when no key — we still return OK for dev preview.
    console.log("[email] RESEND_API_KEY missing — would have sent:", opts.subject);
    return { ok: true, delivered: false as const };
  }
  const resend = new Resend(RESEND_KEY);
  const result = await resend.emails.send({
    from: FROM,
    to: TO,
    subject: opts.subject,
    html: opts.html,
  });
  if (result.error) throw new Error(result.error.message);
  return { ok: true, delivered: true as const };
}

export function renderInquiryEmail(fields: Record<string, string | undefined>) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v && v.length > 0)
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:8px 16px;font-family:monospace;font-size:12px;color:#8A8680;text-transform:uppercase;letter-spacing:0.1em;">${k}</td>
          <td style="padding:8px 16px;font-size:14px;color:#141416;">${escape(v as string)}</td>
        </tr>`
    )
    .join("");
  return `
    <div style="background:#F3EFE7;padding:32px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #E8E2D5;">
        <div style="background:#0A0A0B;padding:20px 24px;">
          <div style="color:#C8732B;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-family:monospace;">NuView · New inquiry</div>
          <div style="color:#F3EFE7;font-size:20px;margin-top:6px;">Project inquiry</div>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
    </div>
  `;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br/>");
}
