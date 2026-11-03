/**
 * /free-audit copy from the Nov 3, 2026 screen-share draft.
 * Approved claims on this page: Kit $997, Full Front Office $1,997,
 * live in 48 hours or you don't pay, and the client's own Grok plan
 * from $30 a month. Do not add other offers here.
 */

import { opsLeakPath } from "@/lib/ops-leak";
import { pricing, site } from "@/lib/site";

export const freeAuditPath = opsLeakPath;

export const freeAuditBooking = {
  label: "Book my free 20 minute look",
  href: site.calendly,
  title: "Free 20 minute Job Leak look",
} as const;

export const freeAudit = {
  headline: "Your phone rings while you're on a job. Who answers it?",
  subhead:
    "Book a free 20 minute screen share. We'll look at how your calls, texts and inbox get handled today, and show you where jobs slip away.",
  callTitle: "What happens on the call",
  callSteps: [
    "You share your screen, or just walk us through your phone. No prep, no passwords.",
    "We look at a normal week: missed calls, slow texts, emails that sat.",
    "You leave with your top leaks and the first fix, whether you hire us or not.",
  ],
  mathTitle: "Do the math with your own numbers",
  missedLabel: "Missed calls a week",
  shareLabel: "Share of those that would have booked",
  jobLabel: "Average job value",
  resultLabel: "Estimated lost work per month",
  emptyResult: "Enter your three numbers to see the estimate.",
  estimateNote: "This is an estimate using your own numbers.",
  formula: "Lost work per month = missed calls x share x job value x 4",
  compare: `Compare that to a one-time setup: Never-Miss-a-Job Kit ${pricing.kit.price}, or Full Front Office ${pricing.full.price}.`,
  caption:
    "These are your numbers, not ours. We'll check them together on the call.",
  pricesHeading: "One-time setup",
  prices: [
    { name: "Never-Miss-a-Job Kit", price: pricing.kit.price },
    { name: "Full Front Office", price: pricing.full.price },
  ],
  whoTitle: "Who it's for",
  who: "Owner-operated trades and local service shops in Broward: HVAC, plumbing, electrical, roofing, marine, roll-off, and anyone who can't answer the phone with a wrench in their hand.",
  bottom: "One missed call can be one lost job. Let's find yours.",
} as const;

export const freeAuditFaqs = [
  {
    q: "Is it really free?",
    a: "Yes. Twenty minutes, no card, no pitch deck. If there's nothing worth fixing, we'll tell you.",
  },
  {
    q: "Do I need new software?",
    a: "No. It works with your website and email, and we scope your phone and texts on the call. You pay for your own Grok plan, starting at $30 a month.",
  },
  {
    q: "What does it cost if I want the fix?",
    a: `A one-time setup: the Never-Miss-a-Job Kit is ${pricing.kit.price} and the Full Front Office is ${pricing.full.price}. It's live in 48 hours or you don't pay.`,
  },
  {
    q: "What do I need to have ready?",
    a: "Your phone, and a rough idea of how many calls you miss in a busy week.",
  },
] as const;

export function freeAuditFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: freeAuditFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
