import { opsLeakPath } from "@/lib/ops-leak";

export const site = {
  name: "Lonely Owner",
  domain: "lonelyowner.com",
  url: "https://lonelyowner.com",
  founder: "Kevin Andreosky",
  tagline: "Office help for owner-run trades",
  calendly: "https://calendly.com/trainedbykevin/letsmeet",
  primaryCtaLabel: "Book a call",
  tradesLine:
    "FOR OWNER-RUN HVAC, PLUMBING, MARINE, ROLL-OFF AND CONSTRUCTION SHOPS",
} as const;

export const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const hero = {
  title: "Every missed call is a job your competitor just booked.",
  body: "We set up your shop's front office so every call gets answered, every quote gets chased, and every happy customer leaves a review. Live in 48 hours, or you don't pay.",
  primaryCta: "Get my free Job Leak Score",
  secondaryCta: "Book a 15-min call",
  checks: [
    "Live in 48 hours or it's free",
    "Nothing goes out without your OK",
    "One flat setup price",
  ],
} as const;

export const heroCard = {
  time: "TONIGHT · 9:47 PM",
  missed: "Missed call: new customer",
  quote: '"AC stopped cooling. Can someone come out?"',
  replyLabel: "REPLY READY FOR YOU",
  reply:
    "Sorry we missed you! We can have a tech out tomorrow at 8 AM or 10 AM. Which works better?",
  send: "Send",
  edit: "Edit",
  held: "Held on your calendar: Tomorrow, 8:00 AM",
} as const;

export const pain = {
  title: "You didn't start a business to answer the phone at dinner.",
  body: "You're great at the work. The problem is everything around the work. That's where jobs slip away.",
  points: [
    {
      n: "01",
      title: "The call after 5 PM",
      body: "It goes to voicemail. They don't leave one. They call the next shop on Google.",
    },
    {
      n: "02",
      title: "The quote nobody chased",
      body: "You sent it. You meant to follow up. Two weeks later, somebody else got the job.",
    },
    {
      n: "03",
      title: "The review you never asked for",
      body: "The customer loved you. But they never got asked, so new customers never hear about it.",
    },
    {
      n: "04",
      title: "The Sunday at the kitchen table",
      body: "Emails, calendar, posts, paperwork. All of it lands on the owner. All of it eats your weekend.",
    },
  ],
} as const;

export const missedJobsCopy = {
  eyebrow: "DO THE MATH ON YOUR SHOP",
  title: "What are missed jobs costing you every year?",
  body: "Put in your own numbers. Most owners have never added this up. It's usually the most expensive line in the business, and it never shows up on a bill.",
  missedLabel: "Calls or leads missed per week",
  jobLabel: "Your average job ($)",
  resultLabel: "WALKING OUT THE DOOR EACH YEAR",
  monthlyTail:
    "a month, before a single referral those customers would have sent you.",
} as const;

export const pricing = {
  eyebrow: "THE FIX",
  title: "A front office that never clocks out.",
  body: "Built by hand for your shop. One flat price. It gets the office work ready, and you stay the boss. Nothing goes to a customer until you say so.",
  kit: {
    name: "The Never-Miss-a-Job Kit",
    audience:
      "For the owner who's losing work after hours and wants it stopped this week.",
    price: "$997",
    amount: "997",
    priceNote: "one-time setup",
    includes: [
      "Every call and web form answered and booked onto your calendar, day or night.",
      "Show up when locals search Google for what you do.",
      "A plain-English weekly report on what's bringing in work.",
    ],
    cta: "Get the Kit",
  },
  full: {
    badge: "THE FULL SET",
    name: "The Full Front Office",
    audience:
      "For the owner who wants the whole office off his plate, not just the phone.",
    price: "$1,997",
    amount: "1997",
    priceNote: "one-time setup",
    lead: "Everything in the Kit, plus:",
    includes: [
      "Every quote followed up, so no job dies in your inbox.",
      "Review requests after every job, so your reputation grows on its own.",
      "Social posts written for you that show off your real work.",
      "Inbox and calendar kept clean, so Sunday nights are yours again.",
    ],
    cta: "Get the Full Front Office",
  },
  both: "Both include: built by hand, live in 48 hours or you don't pay, and nothing goes out without your OK.",
  account:
    "To run it, you still need your own Grok plan, paid to Grok, starting at $30 a month. Kevin sets it up with you.",
} as const;

export const grokPlanNote =
  "You still need your own Grok plan, paid to Grok, starting at $30 a month.";

export const offer = {
  auditName: "Job Leak Audit",
  auditPrice: "$999",
  auditAmount: "999",
  auditDetail:
    "A working session with Kevin, not a slide deck. You leave knowing exactly where jobs leak and what to fix first. Every dollar is credited toward your build.",
  freeName: "Free Job Leak Score",
  freePrice: "$0",
  freeAmount: "0",
  freeDetail:
    "Paste your website. We review what customers see and email you a score on 5 areas where shops lose jobs. No card. No sales pitch.",
} as const;

export const auditSection = {
  title: "Not sure where you're leaking? Start free.",
  freeCta: "Get my free score",
  paidCta: "Book the audit",
} as const;

export const howItWorks = {
  title: "Three steps. Two days.",
  steps: [
    {
      n: "1",
      title: "Get your free score",
      body: "Paste your website. See where jobs are slipping. Takes two minutes.",
    },
    {
      n: "2",
      title: "15 minutes with Kevin",
      body: "Tell him how your shop runs. He tells you straight which setup fits, or if you don't need one.",
    },
    {
      n: "3",
      title: "Live in 48 hours",
      body: "Kevin builds it by hand and walks you through it. You approve, you hit send, you get back to work.",
    },
  ],
} as const;

export const guarantee = {
  eyebrow: "THE 48-HOUR GUARANTEE",
  title: "Live in 48 hours, or you don't pay.",
  body: "No fine print. If your setup isn't up and running within 48 hours of kickoff, you owe nothing. All the risk is on us.",
} as const;

export const finalCta = {
  title: "The next call comes in tonight. Be ready for it.",
  body: "Start with the free score. See what's slipping. Then decide.",
} as const;

export const faqs = [
  {
    q: "Will this talk to my customers without me?",
    a: "No. It gets the reply ready. You read it and hit send. If you ever want it to send on its own, that's your call, and you can change it any time.",
  },
  {
    q: "Do I have to learn new software?",
    a: "No. Kevin builds the whole thing for you and walks you through it. If you can answer a text, you can run it.",
  },
  {
    q: "What do I pay after setup?",
    a: "The setup is one flat price. You still need your own Grok plan, paid to Grok, starting at $30 a month. Kevin helps you open it on your call. You own it, not us.",
  },
  {
    q: "Do you promise a certain number of jobs?",
    a: "No. Anyone who promises you rankings or job counts is guessing. What we promise is that it's live in 48 hours, or you don't pay.",
  },
  {
    q: "What's the $999 audit for, if the score is free?",
    a: "The free score looks at what customers see from the outside. The audit is a working session on how your shop actually runs, and what to fix first. If you go ahead with a build, the full $999 comes off the price.",
  },
  {
    q: "Who is this for?",
    a: "Owner-run service businesses: HVAC, plumbing, docks and marine, trash and roll-off, construction, and the shops that keep those crews moving. If you're still the one answering the phone, it's for you.",
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
    description: hero.body,
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
        name: pricing.kit.name,
        price: pricing.kit.amount,
        description: `${pricing.kit.audience} ${pricing.kit.price} ${pricing.kit.priceNote}. ${pricing.kit.includes.join(" ")} ${pricing.both} ${pricing.account}`,
        url: `${site.url}/#pricing`,
      }),
      offerJsonLd({
        name: pricing.full.name,
        price: pricing.full.amount,
        description: `${pricing.full.audience} ${pricing.full.price} ${pricing.full.priceNote}. ${pricing.full.lead} ${pricing.full.includes.join(" ")} ${pricing.both} ${pricing.account}`,
        url: `${site.url}/#pricing`,
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
