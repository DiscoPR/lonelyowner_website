import { opsLeakPath } from "@/lib/ops-leak";

export const hero = {
  headline: "More calls answered. More jobs booked.",
  subhead:
    "Get a free audit of your website. We show you where jobs slip away, then set up simple bots that answer, follow up and help you book the job. One-time flat price. You approve what goes to customers.",
  primaryCta: "Get my free audit",
  secondaryCta: "See setup prices",
  reassurance: "Free. No card. Just your website.",
  formSubmit: "Send my free audit",
  setupCta: "Start with a free audit",
} as const;

export const whoItIsFor =
  "Built for owner-run service shops. If you run the trucks, answer the phone and still do the estimates, this is for you. HVAC, plumbing, electrical, roofing, docks and marine, trash and roll-off, construction, auto and repair, cleaning, landscaping, and other local service shops. Not for SaaS. Not for agencies.";

export const setups = {
  frontDesk: {
    name: "Front Desk",
    countLabel: "3 bots",
    tagline: "Never miss a call or a quote request.",
    badge: "Easy start",
  },
  fullCrew: {
    name: "Full Crew",
    countLabel: "7 bots",
    tagline: "Front Desk plus follow-ups, scheduling and review requests.",
    badge: "Best value",
  },
} as const;

export const site = {
  name: "Lonely Owner",
  domain: "lonelyowner.com",
  url: "https://lonelyowner.com",
  founder: "Kevin Andreosky",
  tagline: hero.headline,
  calendly: "https://calendly.com/trainedbykevin/letsmeet",
  kevinEmail: "kevin.andreosky@gmail.com",
  primaryCtaLabel: "Book a Call",
  tradesLine:
    "HVAC, plumbing, docks and marine, trash and roll-off, construction, and shops.",
} as const;

export const navLinks = [
  { href: "/#grok-bots", label: "Setup prices" },
  { href: "/#who", label: "Who it is for" },
  { href: "/#faq", label: "Questions" },
  { href: "/resources", label: "Resources" },
  { href: opsLeakPath, label: "Free audit" },
] as const;

export const grokGuarantee =
  "Built by hand. Live in 24 hours. If it is not live in 24 hours, you do not pay.";

export const websiteScope =
  "Works with your website. Phone setup is scoped on your audit call.";

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

export type HomeFaq = {
  q: string;
  a: string;
  bookCall?: boolean;
};

export const faqs: readonly HomeFaq[] = [
  {
    q: "Is this AI?",
    a: "Yes, under the hood. You approve what goes to customers.",
  },
  {
    q: "Do I need new software?",
    a: `No. Works with your website. Phone setup is scoped on your audit call. You do not need to buy a new office system to ask for the free audit or to start a setup. ${grokAccountNote}`,
  },
  {
    q: "What if my shop is tiny?",
    a: "This is built for a shop of one as much as a small crew. If you run the trucks, answer the phone, and still do the estimates, you are the fit.",
  },
  {
    q: "How fast are the bots live?",
    a: grokGuarantee,
  },
  {
    q: "What do I get from the free audit?",
    a: "You send your website. We email your Free Job Leak Audit.",
  },
  {
    q: "Who reads my info?",
    a: "Kevin reads the website, email, and any trade or phone you send. We use them to review public pages, email your Free Job Leak Audit, and follow up if you ask about setup. We do not sell that information, and this site does not keep its own database of those requests. If you would rather talk first, book a call.",
    bookCall: true,
  },
];

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
      "Free Job Leak Audit and one-time bot setup for owner-operated trades. You approve what goes to customers.",
    areaServed: "United States",
    makesOffer: [
      offerJsonLd({
        name: "Free Job Leak Audit",
        price: "0",
        description: hero.subhead,
        url: `${site.url}/#audit-form`,
      }),
      offerJsonLd({
        name: setups.frontDesk.name,
        price: grokBots.three.amount,
        description: `${setups.frontDesk.countLabel}. ${grokBots.three.price} one time. ${setups.frontDesk.tagline} ${grokBots.three.bots.join(" ")} ${grokGuarantee} ${websiteScope}`,
        url: `${site.url}/#grok-bots`,
      }),
      offerJsonLd({
        name: setups.fullCrew.name,
        price: grokBots.seven.amount,
        description: `${setups.fullCrew.countLabel}. ${grokBots.seven.price} one time. ${setups.fullCrew.tagline} ${[...grokBots.three.bots, ...grokBots.seven.bots].join(" ")} ${grokGuarantee} ${websiteScope}`,
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
