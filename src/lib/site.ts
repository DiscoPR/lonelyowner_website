import { opsLeakPath } from "@/lib/ops-leak";

export const site = {
  name: "Lonely Owner",
  domain: "lonelyowner.com",
  url: "https://lonelyowner.com",
  founder: "Kevin Andreosky",
  tagline: "AI audits and Grok bots",
  calendly: "https://calendly.com/trainedbykevin/letsmeet",
  primaryCtaLabel: "Book a Call",
  tradesLine:
    "HVAC, plumbing, docks and marine, trash and roll-off, construction, and shops.",
} as const;

export const navLinks = [
  { href: "/#audits", label: "Audits" },
  { href: "/#grok-bots", label: "Grok bots" },
  { href: "/#start", label: "Start" },
  { href: "/resources", label: "Resources" },
  { href: opsLeakPath, label: "Free audit" },
] as const;

export const offer = {
  auditName: "AI Opportunity Audit",
  auditPrice: "$999",
  auditAmount: "999",
  auditDetail:
    "A working session that shows where jobs leak and what to fix first. If you move forward, the $999 is credited toward the build.",
  freeName: "Free Ops Leak Score",
  freePrice: "$0",
  freeAmount: "0",
  freeDetail:
    "Paste your website. We look at public pages and email a 5-area summary. No payment. Not a live scanner.",
} as const;

export const grokGuarantee =
  "Built by hand. Live in 24 hours. If it is not live in 24 hours, you do not pay.";

export const grokAccountNote =
  "You need a Grok account to run the bots. Kevin walks you through setting one up.";

export const grokBots = {
  three: {
    name: "3 Grok Bots",
    price: "$297",
    amount: "297",
    detail: "A starter set for the office work that still lands on the owner.",
    bots: [
      "One catches every inquiry and books it onto your calendar",
      "One handles local SEO and Google visibility",
      "One sends a plain-English weekly report on what is working",
    ],
  },
  seven: {
    name: "Suite of 7 Grok Bots",
    price: "$500",
    amount: "500",
    detail:
      "The 3 bots above, plus 4 more for an owner-operated service business.",
    bots: [
      "Review requests and reputation",
      "Follow-up on quotes",
      "Social posts",
      "Inbox and calendar help",
    ],
  },
} as const;

export const faqs = [
  {
    q: "What are the two offers?",
    a: "An AI audit, or Grok bot setup. The audit is a free score or a $999 working session. Grok bots are a flat build: 3 for $297, or a suite of 7 for $500.",
  },
  {
    q: "What is the free audit?",
    a: "The Free Ops Leak Score. You paste your website. We review public pages and email a 5-area summary. It is not a live scanner, and it does not start paid work.",
  },
  {
    q: "What is the AI Opportunity Audit?",
    a: "A $999 working session on where jobs leak and what to fix first. If you move forward with a build, that $999 is credited toward it.",
  },
  {
    q: "What do I need for the Grok bots?",
    a: "A Grok account. Kevin walks you through setting one up. The bots are built by hand and live in 24 hours. If they are not live in 24 hours, you do not pay.",
  },
  {
    q: "Will a bot talk to my customers?",
    a: "Not unless you choose that later, and even then you stay in control. The default is simple: every bot drafts, the owner sends.",
  },
  {
    q: "Who is this for?",
    a: "Owner-operated trades. HVAC, plumbing, docks and marine, trash and roll-off, construction, and the shops that keep those crews moving.",
  },
] as const;

export const resourceJobs = [
  {
    title: "After-hours missed-call text",
    job: "Someone called after you locked up. The bot drafts a short text: we got the message, here is what we need, here is the next step.",
    owner: "You send it, or you tell the system not to. The customer never hears from a robot you did not approve.",
  },
  {
    title: "Estimate follow-up",
    job: "The quote left the truck three days ago. The bot drafts a plain follow-up with the number, the scope, and a yes-or-no ask.",
    owner: "You glance at it between jobs and hit send. No writing it from scratch in the driveway.",
  },
  {
    title: "We-are-on-the-way update",
    job: "Crew is running late or heading over. The bot drafts the customer text with the window and the tech name if you have it.",
    owner: "You send it before they call the other guy. Same message you would have typed if you had a free hand.",
  },
  {
    title: "Job recap for the file",
    job: "Work is done. The bot turns your notes into a clean recap: what was found, what was done, what is still open.",
    owner: "You correct a line if needed, then it lives in the job file instead of in your head.",
  },
  {
    title: "Review request after a good job",
    job: "The bot drafts a short ask for a review, with the link you already use. No guilt trip. No script that sounds like a chain.",
    owner: "You send it when the job actually went well. Bad jobs do not get a fake smile.",
  },
  {
    title: "Invoice reminder",
    job: "The bot drafts a polite, firm reminder with the amount, the job, and how to pay. Shop language, not collections theater.",
    owner: "You send it. You decide when a customer gets a second note.",
  },
  {
    title: "New customer intake",
    job: "A new call comes in. The bot drafts the intake: name, address, equipment, the problem in their words, and what you promised next.",
    owner: "You keep the facts on one card instead of a voicemail plus three texts.",
  },
  {
    title: "Parts and supplier email",
    job: "The bot drafts the order or the availability ask from your notes. Model numbers stay where you put them.",
    owner: "You send it to the house you already buy from. No new portal to log into from the truck.",
  },
  {
    title: "Warranty or callback reply",
    job: "A customer writes back about a callback. The bot drafts a calm reply that restates the issue and the next visit window.",
    owner: "You edit the tone if you need to, then send. You stay the voice of the shop.",
  },
  {
    title: "Seasonal reminder list",
    job: "Tune-ups, winterizations, spring startups. The bot drafts the reminder from last year's list.",
    owner: "You approve the batch. Nobody gets a message you did not see.",
  },
  {
    title: "Bid cover note",
    job: "The numbers are done. The bot drafts a short cover note that says what is included, what is not, and when you can start.",
    owner: "You send the bid as you. The bot does not negotiate.",
  },
  {
    title: "Crew or sub brief",
    job: "The bot turns the job into a one-page brief: address, access, scope, materials, and the customer ask.",
    owner: "You forward it to the person doing the work. Still your job. Less re-explaining in the morning.",
  },
] as const;

function offerJsonLd(input: {
  name: string;
  price: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "Offer",
    name: input.name,
    price: input.price,
    priceCurrency: "USD",
    description: input.description,
    url: input.url,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    description:
      "AI audits and Grok bot setup for owner-operated trades. Bots draft. The owner sends.",
    areaServed: "United States",
    makesOffer: [
      offerJsonLd({
        name: offer.freeName,
        price: offer.freeAmount,
        description: offer.freeDetail,
        url: `${site.url}${opsLeakPath}`,
      }),
      offerJsonLd({
        name: offer.auditName,
        price: offer.auditAmount,
        description: offer.auditDetail,
        url: `${site.url}/#audits`,
      }),
      offerJsonLd({
        name: grokBots.three.name,
        price: grokBots.three.amount,
        description: `${grokBots.three.detail} ${grokBots.three.bots.join(" ")} ${grokGuarantee} ${grokAccountNote}`,
        url: `${site.url}/#grok-bots`,
      }),
      offerJsonLd({
        name: grokBots.seven.name,
        price: grokBots.seven.amount,
        description: `${grokBots.seven.detail} ${[...grokBots.three.bots, ...grokBots.seven.bots].join(" ")} ${grokGuarantee} ${grokAccountNote}`,
        url: `${site.url}/#grok-bots`,
      }),
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
