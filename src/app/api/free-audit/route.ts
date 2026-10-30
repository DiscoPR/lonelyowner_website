import { NextResponse, type NextRequest } from "next/server";
import { sendAuditLead } from "@/lib/audit-email";
import { site } from "@/lib/site";
import {
  parseAuditLead,
  type AuditFieldErrors,
  type AuditLeadInput,
} from "@/lib/audit-lead";

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function wantsJson(request: NextRequest): boolean {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) return true;
  const accept = request.headers.get("accept") || "";
  return accept.includes("application/json");
}

async function readInput(request: NextRequest): Promise<AuditLeadInput | null> {
  const type = request.headers.get("content-type") || "";
  try {
    if (type.includes("application/json")) {
      const body: unknown = await request.json();
      if (!body || typeof body !== "object") return null;
      const record = body as Record<string, unknown>;
      return {
        website: asString(record.website),
        email: asString(record.email),
        trade: asString(record.trade),
        phone: asString(record.phone),
        company: asString(record.company),
      };
    }

    if (
      type.includes("application/x-www-form-urlencoded") ||
      type.includes("multipart/form-data")
    ) {
      const form = await request.formData();
      return {
        website: asString(form.get("website")),
        email: asString(form.get("email")),
        trade: asString(form.get("trade")),
        phone: asString(form.get("phone")),
        company: asString(form.get("company")),
      };
    }
  } catch {
    return null;
  }

  return null;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(body: unknown, status: number) {
  return Response.json(body, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

function htmlPage(body: string, status: number) {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Could not send the audit</title>
</head>
<body style="margin:0;padding:48px 20px;background:#110f0c;color:#f6f1e7;font-family:Georgia,serif;">
  <main style="max-width:36rem;margin:0 auto;">
    <h1 style="font-size:2rem;">We could not send that.</h1>
    ${body}
    <p><a style="color:#e39a52;" href="/#audit-form">Back to the form</a></p>
  </main>
</body>
</html>`;
  return new Response(html, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function htmlError(message: string, status: number) {
  return htmlPage(
    `<p style="font-size:1.125rem;line-height:1.6;">${escapeHtml(message)}</p>`,
    status,
  );
}

function htmlSendFailure(status: number) {
  const email = escapeHtml(site.kevinEmail);
  const calendly = escapeHtml(site.calendly);
  return htmlPage(
    `<p style="font-size:1.125rem;line-height:1.6;">Something went wrong sending your request. Email Kevin at <a style="color:#e39a52;" href="mailto:${email}">${email}</a> or <a style="color:#e39a52;" href="${calendly}">book a call</a>.</p>`,
    status,
  );
}

function thankYouRedirect(request: NextRequest) {
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = "/thank-you";
  redirectTo.search = "";
  redirectTo.hash = "";
  return NextResponse.redirect(redirectTo, 303);
}

function errorMessage(errors: AuditFieldErrors): string {
  return (
    errors.website ||
    errors.email ||
    errors.phone ||
    errors.trade ||
    "Check the form and try again."
  );
}

export async function POST(request: NextRequest) {
  const jsonResponse = wantsJson(request);
  const input = await readInput(request);

  if (!input) {
    const message = "Send the form again.";
    return jsonResponse
      ? json({ ok: false, message }, 400)
      : htmlError(message, 400);
  }

  const parsed = parseAuditLead(input);
  if (!parsed.ok) {
    return jsonResponse
      ? json({ ok: false, errors: parsed.errors }, 400)
      : htmlError(errorMessage(parsed.errors), 400);
  }

  if (!parsed.bot) {
    const sent = await sendAuditLead(parsed.lead);
    if (!sent.ok) {
      return jsonResponse
        ? json({ ok: false, message: sent.message }, sent.status)
        : htmlSendFailure(sent.status);
    }
  }

  if (!jsonResponse) return thankYouRedirect(request);
  return json({ ok: true }, 200);
}
