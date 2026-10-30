import type { AuditLead } from "@/lib/audit-lead";
import { site } from "@/lib/site";

const sendFailureMessage = `Something went wrong sending your request. Email Kevin at ${site.kevinEmail} or book a call.`;

const defaultTo = "kevin.andreosky@gmail.com";

export type AuditEmailResult =
  | { ok: true }
  | { ok: false; status: number; message: string };

function leadText(lead: AuditLead): string {
  return [
    "Free Job Leak Audit request",
    "",
    `Website: ${lead.website}`,
    `Email: ${lead.email}`,
    `Trade: ${lead.trade || "Not provided"}`,
    `Phone: ${lead.phone || "Not provided"}`,
    "",
    "Review public pages only and email the Free Job Leak Audit.",
  ].join("\n");
}

/**
 * Sends the lead with Resend's HTTP API.
 * Requires RESEND_API_KEY and AUDIT_FROM_EMAIL.
 * AUDIT_TO_EMAIL is optional.
 */
export async function sendAuditLead(lead: AuditLead): Promise<AuditEmailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.AUDIT_FROM_EMAIL?.trim();
  const to = process.env.AUDIT_TO_EMAIL?.trim() || defaultTo;
  const missing: string[] = [];
  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!from) missing.push("AUDIT_FROM_EMAIL");

  if (missing.length > 0) {
    console.error(
      `Free Job Leak Audit form is not configured. Missing ${missing.join(", ")}.`,
    );
    return {
      ok: false,
      status: 503,
      message: sendFailureMessage,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: `Free Job Leak Audit: ${lead.domain}`.slice(0, 180),
        text: leadText(lead),
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error(`Free Job Leak Audit email failed with status ${response.status}.`);
      return {
        ok: false,
        status: 502,
        message: sendFailureMessage,
      };
    }

    return { ok: true };
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    console.error(
      timedOut
        ? "Free Job Leak Audit email timed out."
        : "Free Job Leak Audit email request failed.",
    );
    return {
      ok: false,
      status: 502,
      message: sendFailureMessage,
    };
  }
}
