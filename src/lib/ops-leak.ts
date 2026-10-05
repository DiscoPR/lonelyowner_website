/**
 * Free Ops Leak Score. Copy follows the approved landing draft.
 * There is no live scorer. v1 asks the visitor to email the request.
 * Contact details here are for that deliverable only. Do not render them
 * in the site header, footer, homepage, or JSON-LD.
 */

export const opsLeakPath = "/free-audit" as const;

export const opsLeakContact = {
  email: "kevin.andreosky@gmail.com",
  phoneDisplay: "732-232-5358",
  phoneHref: "tel:+17322325358",
} as const;

export const opsLeakTrades = [
  "HVAC",
  "Plumbing",
  "Docks & marine",
  "Trash & roll-off",
  "Construction",
  "Shop",
  "Other",
] as const;

export type OpsLeakTrade = (typeof opsLeakTrades)[number];

export const opsLeakAreas = [
  {
    name: "After-hours capture",
    body: "What happens when someone calls or fills a form when you are on a job?",
  },
  {
    name: "Quote and estimate intake",
    body: "Can a serious lead request a quote without hunting for your cell?",
  },
  {
    name: "Owner bottleneck",
    body: "How much of intake, follow-up, and triage still lands on one person?",
  },
  {
    name: "Scheduling and dispatch friction",
    body: 'Is booking, confirmations, and "when can you come?" still manual chaos?',
  },
  {
    name: "Trust and contact clarity",
    body: "Hours, phones, reviews, and contact paths that match, or contradict each other.",
  },
] as const;

/** Layout sample only. Not a client, and not a live score. */
export const opsLeakSample = {
  domain: "example-hvac.com",
  total: 52,
  band: "Moderate leak risk",
  takeaway: "Some paths work. One or two gaps still cost real leads.",
  biggestLeak:
    "After-hours and owner bottleneck. Jobs that come in when you are on a roof or a barge have nowhere clean to land.",
  areas: [
    {
      name: "After-hours capture",
      score: 8,
      note: 'Form open. No clear after-hours path beyond "call us."',
    },
    {
      name: "Quote and estimate intake",
      score: 11,
      note: "Estimate CTA exists. Phone optional. No SLA language.",
    },
    {
      name: "Owner bottleneck",
      score: 7,
      note: "Contact paths point to one inbox and one person.",
    },
    {
      name: "Scheduling and dispatch friction",
      score: 12,
      note: "Hours listed. No self-booking. Callback implied.",
    },
    {
      name: "Trust and contact clarity",
      score: 14,
      note: "Phone and hours mostly consistent. Reviews present but static.",
    },
  ],
} as const;

export const opsLeakSteps = [
  {
    n: "01",
    title: "Paste your website",
    body: "Drop in the URL customers already use. We look at public pages: home, contact, service and quote forms, hours, and phones.",
  },
  {
    n: "02",
    title: "Confirm your email",
    body: "We send the free score summary to you. It is not a sales blast to your whole company list.",
  },
  {
    n: "03",
    title: "Get your score summary",
    body: "The summary shows the 5 area scores, the biggest leak, and whether a full AI Opportunity Audit is worth booking.",
  },
] as const;

export const opsLeakFit = [
  "Run HVAC, plumbing, docks and marine, trash and roll-off, construction, or a trade shop",
  "Own the business (or co-own) and still touch intake yourself",
  "Lose leads nights, weekends, or while you are on site",
  "Want AI that drafts and routes. You still approve what goes to customers",
] as const;

export const opsLeakNotFit = [
  "Want a chatbot that auto-texts customers without you",
  "Need enterprise IT consulting",
  "Are looking for Instagram content bots",
] as const;

export const opsLeakTrust = [
  "Public pages only. No system access for the free score.",
  "Owner-operator language. Written for shop owners, not marketing managers.",
  "Trades first. HVAC, plumbing, docks, roll-off, construction, shops.",
  "The paid audit is a working session, not a 60-slide PDF graveyard.",
  "$999, credited toward implementation if you continue.",
] as const;

export const opsLeakProcessTrust = [
  "We only review what a customer can already see.",
  "You get a score summary before anyone asks for money.",
  "The full audit is credited toward implementation if you move forward.",
] as const;

export const opsLeakFaqs = [
  {
    q: "Is the Ops Leak Score really free?",
    a: "Yes. Paste your URL and email. You get the 5-area summary. No card required.",
  },
  {
    q: "Do you need access to my CRM, phone system, or email?",
    a: "Not for the free score. Public website pages only. A deeper look at your systems is optional in the paid audit if you choose to share.",
  },
  {
    q: "Who is this for?",
    a: "Owner-operated trades: HVAC, plumbing, docks and marine, trash and roll-off, construction, and shops. If everything still hits your personal phone, you are the audience.",
  },
  {
    q: "What do the scores mean?",
    a: "Each of 5 areas is scored 0 to 20. The total is out of 100. Higher means tighter ops. Lower means more jobs leaking: missed after-hours work, a weak quote path, or the owner as the bottleneck.",
  },
  {
    q: "Is this a live automated tool?",
    a: "No. This page does not show a live score. We review public pages and email the free score summary. The PDF is prepared for you. It is not a production scanner.",
  },
  {
    q: "What is the paid audit?",
    a: "The AI Opportunity Audit is $999. It is a working session that turns the leak map into a first fix and an implementation path. On this site that session is the One Call Audit. If you move forward, the $999 is credited toward implementation.",
  },
  {
    q: "Will you spam me?",
    a: "We email your score summary and relevant next steps. You can opt out. We do not sell your list.",
  },
  {
    q: "Can my competitor run this on my site?",
    a: "Anyone can paste a public URL. We do not share your emailed report with them. Treat public-page findings as public info.",
  },
  {
    q: "Do you build the bots for me?",
    a: "Audit first. Implementation is separate. The $999 is credited toward implementation if you continue.",
  },
] as const;

export type OpsLeakFieldErrors = {
  website?: string;
  email?: string;
};

export type OpsLeakRequest = {
  website: string;
  email: string;
  trade: string;
  domain: string;
  mailto: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeOpsLeakWebsite(raw: string): string | null {
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
    host.endsWith(".localhost")
  ) {
    return null;
  }
  return url.toString();
}

export function opsLeakDomain(website: string): string {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website;
  }
}

export function isOpsLeakTrade(value: string): value is OpsLeakTrade {
  return (opsLeakTrades as readonly string[]).includes(value);
}

export function buildOpsLeakMailto(input: {
  website: string;
  email: string;
  trade: string;
  domain: string;
}): string {
  const subject = `Ops Leak Score request for ${input.domain}`;
  const body = [
    "Free Ops Leak Score request",
    "",
    `Website: ${input.website}`,
    `Email for the summary: ${input.email}`,
    `Trade: ${input.trade || "Not provided"}`,
    "",
    "Please review public pages only and email the Ops Leak Score PDF.",
    "No live score was shown on the site.",
  ].join("\n");

  return `mailto:${opsLeakContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function parseOpsLeakSubmission(input: {
  website: string;
  email: string;
  trade: string;
  company: string;
}):
  | { ok: true; bot: true }
  | { ok: true; bot: false; request: OpsLeakRequest }
  | { ok: false; errors: OpsLeakFieldErrors } {
  if (input.company.trim()) {
    return { ok: true, bot: true };
  }

  const errors: OpsLeakFieldErrors = {};
  const website = normalizeOpsLeakWebsite(input.website);
  const email = input.email.trim().toLowerCase();
  const trade = input.trade.trim();

  if (!input.website.trim()) {
    errors.website = "Enter your business website.";
  } else if (!website) {
    errors.website = "Use a full website address, like https://yourshop.com.";
  } else if (
    opsLeakDomain(website) === "yourshop.com" ||
    opsLeakDomain(website) === "example.com"
  ) {
    errors.website = "Use your real shop website, not the sample.";
  }

  if (!input.email.trim()) {
    errors.email = "Enter the email where we should send the summary.";
  } else if (!emailPattern.test(email) || email.length > 200) {
    errors.email = "Use a real inbox, like you@yourshop.com.";
  }

  if (Object.keys(errors).length > 0 || !website) {
    return { ok: false, errors };
  }

  const cleanTrade = isOpsLeakTrade(trade) ? trade : "";
  const domain = opsLeakDomain(website);
  const request: OpsLeakRequest = {
    website,
    email,
    trade: cleanTrade,
    domain,
    mailto: buildOpsLeakMailto({
      website,
      email,
      trade: cleanTrade,
      domain,
    }),
  };

  return { ok: true, bot: false, request };
}

export function opsLeakFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: opsLeakFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
