/**
 * Free Job Leak Audit page copy. There is no live scanner.
 * The form posts to POST /api/free-audit, the same route as the homepage.
 */

import { grokAccountNote } from "@/lib/site";

export const opsLeakPath = "/free-audit" as const;

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

export const opsLeakSteps = [
  {
    n: "01",
    title: "Paste your website",
    body: "Drop in the URL customers already use. We look at public pages: home, contact, service and quote forms, hours, and phones.",
  },
  {
    n: "02",
    title: "Confirm your email",
    body: "We send the Free Job Leak Audit to you. It is not a sales blast to your whole company list.",
  },
  {
    n: "03",
    title: "Get your leak report",
    body: "You get your top leaks and the first fix.",
  },
] as const;

export const opsLeakFit = [
  "Run HVAC, plumbing, docks and marine, trash and roll-off, construction, or a trade shop",
  "Own the business (or co-own) and still touch intake yourself",
  "Lose leads nights, weekends, or while you are on site",
  "Want help that answers, drafts, and routes. You still approve what goes to customers",
] as const;

export const opsLeakNotFit = [
  "Want a chatbot that auto-texts customers without you",
  "Need enterprise IT consulting",
  "Are looking for Instagram content bots",
] as const;

export const opsLeakTrust = [
  "Public pages only. No system access for the free audit.",
  "Owner-operator language. Written for shop owners, not marketing managers.",
  "Trades first. HVAC, plumbing, docks, roll-off, construction, shops.",
  "You approve what goes to customers.",
] as const;

export const opsLeakProcessTrust = [
  "We only review what a customer can already see.",
  "You get the report before anyone asks for money.",
  "Asking for the free audit does not start paid work.",
] as const;

export const opsLeakFaqs = [
  {
    q: "Is the Free Job Leak Audit really free?",
    a: "Yes. Paste your URL and email. You get the report. No card required.",
  },
  {
    q: "Do you need access to my CRM, phone system, or email?",
    a: "Not for the free audit. Public website pages only.",
  },
  {
    q: "Who is this for?",
    a: "Owner-operated trades: HVAC, plumbing, docks and marine, trash and roll-off, construction, and shops. If everything still hits your personal phone, you are the audience.",
  },
  {
    q: "Is this a live automated tool?",
    a: "No. We review public pages and email the Free Job Leak Audit. It is not a live scanner.",
  },
  {
    q: "Will you spam me?",
    a: "We email your report and relevant next steps. You can opt out. We do not sell your list.",
  },
  {
    q: "Can my competitor run this on my site?",
    a: "Anyone can paste a public URL. We do not share your emailed report with them. Treat public-page findings as public info.",
  },
  {
    q: "Do you build the bots for me?",
    a: `Yes. Front Desk is 3 bots for $297, one time. Full Crew is 7 bots for $500, one time. Full Crew is Front Desk plus follow-ups, scheduling and review requests. You approve what goes to customers. Built by hand. Live in 24 hours. If it is not live in 24 hours, you do not pay. Works with your website. Phone setup is scoped on your audit call. ${grokAccountNote}`,
  },
] as const;

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
