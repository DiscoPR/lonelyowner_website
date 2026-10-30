/**
 * Homepage Free Job Leak Audit request.
 * Shared by the form and POST /api/free-audit. No secrets in this file.
 */

export const auditTrades = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Docks and marine",
  "Trash and roll-off",
  "Construction",
  "Auto and repair",
  "Cleaning",
  "Landscaping",
  "Other",
] as const;

export type AuditTrade = (typeof auditTrades)[number];

export type AuditLeadInput = {
  website: string;
  email: string;
  trade: string;
  phone: string;
  company: string;
};

export type AuditFieldErrors = {
  website?: string;
  email?: string;
  phone?: string;
  trade?: string;
};

export type AuditLead = {
  website: string;
  email: string;
  trade: string;
  phone: string;
  domain: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isIpAddress(hostname: string): boolean {
  const bare = hostname.replace(/^\[|\]$/g, "");
  if (bare.includes(":")) return true;
  return /^(?:\d{1,3}\.){3}\d{1,3}$/.test(bare);
}

export function normalizeAuditWebsite(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.length > 300) return null;
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.username || url.password) return null;
  const host = url.hostname.toLowerCase();
  if (!host.includes(".") || host.endsWith(".")) return null;
  if (
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".localhost") ||
    isIpAddress(host)
  ) {
    return null;
  }
  return url.toString();
}

export function auditDomain(website: string): string {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website;
  }
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function isAuditTrade(value: string): value is AuditTrade {
  return (auditTrades as readonly string[]).includes(value);
}

export function parseAuditLead(
  input: AuditLeadInput,
):
  | { ok: true; bot: true }
  | { ok: true; bot: false; lead: AuditLead }
  | { ok: false; errors: AuditFieldErrors } {
  if (oneLine(input.company)) {
    return { ok: true, bot: true };
  }

  const errors: AuditFieldErrors = {};
  const website = normalizeAuditWebsite(input.website);
  const email = oneLine(input.email).toLowerCase();
  const trade = oneLine(input.trade);
  const phone = oneLine(input.phone);

  if (!oneLine(input.website)) {
    errors.website = "Enter your business website.";
  } else if (!website) {
    errors.website = "Use a full website address, like https://yourshop.com.";
  } else if (
    auditDomain(website) === "yourshop.com" ||
    auditDomain(website) === "example.com" ||
    auditDomain(website) === "example-hvac.com"
  ) {
    errors.website = "Use your real shop website, not the sample.";
  }

  if (!oneLine(input.email)) {
    errors.email = "Enter the email where we should send the report.";
  } else if (!emailPattern.test(email) || email.length > 200) {
    errors.email = "Use a real inbox, like you@yourshop.com.";
  }

  if (trade && !isAuditTrade(trade)) {
    errors.trade = "Choose a trade from the list, or leave it blank.";
  }

  if (phone) {
    const digits = phone.replace(/\D/g, "");
    if (phone.length > 40 || digits.length < 10 || digits.length > 15) {
      errors.phone = "Use a real phone number, or leave it blank.";
    }
  }

  if (Object.keys(errors).length > 0 || !website) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    bot: false,
    lead: {
      website,
      email,
      trade: isAuditTrade(trade) ? trade : "",
      phone,
      domain: auditDomain(website),
    },
  };
}
