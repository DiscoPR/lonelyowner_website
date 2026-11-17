export const site = {
  name: "Lonely Owner",
  domain: "lonelyowner.com",
  url: "https://lonelyowner.com",
  founder: "Kevin Andreosky",
  tagline: "Less time on busywork",
  calendly: "https://calendly.com/trainedbykevin/letsmeet",
  primaryCtaLabel: "Get a free time check",
  tradesLine: "For trades shop owners in South Florida",
} as const;

export const workshop = {
  id: "dec-1-class",
  title: "Free class Dec 1: how to get your time back without hiring",
  body: "Tuesday, Dec 1, 2026, 6:30 to 7:45 PM at the Broward County Main Library, 4th floor (Creation Station). Free. 15 seats. No tech skills needed.",
  note: "This event is not sponsored by Broward County Libraries.",
  cta: "Save your seat",
  href: "https://broward.libnet.info/event/17734390",
} as const;

export const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: `/#${workshop.id}`, label: "Dec 1 class" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const hero = {
  eyebrow: site.tradesLine,
  title: "Spend less time on busywork. More time on jobs.",
  body: "We set up simple tools that do the busywork for you, like texting customers back, sending quotes, and booking jobs.",
  primaryCta: site.primaryCtaLabel,
  secondaryCta: "Free class Dec 1",
  freeOffer:
    "We look at your week for free and show you what to hand off. Keep the plan whether you hire us or not.",
} as const;

export const weekSample = {
  title: "A sample week",
  note: "This is an example. It is not from a real shop, and it is not a promise.",
  beforeLabel: "Before: you do it",
  afterLabel: "After: handed off",
  before: [
    "Text customers back",
    "Write quotes",
    "Book the jobs",
    "Follow up on quiet quotes",
    "Ask for reviews",
  ],
  after: [
    "Texts ready for you",
    "Quotes written for you",
    "Jobs on your calendar",
    "Follow-ups ready for you",
    "Review notes ready for you",
  ],
} as const;

export const founder = {
  title: "Hi, I'm Kevin.",
  body: "I help South Florida trades owners spend less time on busywork. I set things up with you and show you how it works. You stay in charge.",
} as const;

export const pricing = {
  title: "If you want us to set it all up",
  body: "You can keep that plan and do it yourself. Or we can set it up with you.",
  kit: {
    name: "The Never-Miss-a-Job Kit",
    homeName: "Basic setup",
    audience: "For the owner who wants help with texts, quotes, and booking.",
    price: "$997",
    amount: "997",
    priceNote: "one-time setup",
    includes: [
      "Customers get a text back, and the job goes on your calendar.",
      "Your shop shows up when people nearby search Google for your work.",
      "A short weekly note on where new work came from.",
    ],
    cta: "Get the basic setup",
  },
  full: {
    badge: "THE FULL SET",
    name: "The Full Front Office",
    homeName: "Full setup",
    audience: "For the owner who wants the rest of the busywork handled too.",
    price: "$1,997",
    amount: "1997",
    priceNote: "one-time setup",
    lead: "Everything in the basic setup, plus:",
    includes: [
      "Follow-ups on quotes, so you do not have to remember each one.",
      "A short note asking happy customers for a review.",
      "Posts about your real jobs, written for you.",
      "A tidy inbox and calendar.",
    ],
    cta: "Get the full setup",
  },
  both: "Both are paid once. If it is not running in 48 hours, you do not pay. Nothing goes to a customer until you say so.",
  account:
    "To run it, you still need your own Grok plan. You pay Grok, starting at $30 a month. Kevin sets it up with you.",
} as const;

export const grokPlanNote =
  "You still need your own Grok plan, paid to Grok, starting at $30 a month.";

export const offer = {
  auditName: "Job Leak Audit",
  auditPrice: "$999",
  auditAmount: "999",
  auditDetail:
    "A working session with Kevin, not a slide deck. You leave knowing exactly where jobs leak and what to fix first. Every dollar is credited toward your build.",
  freeName: "Free time check",
  freePrice: "$0",
  freeAmount: "0",
  freeDetail: hero.freeOffer,
} as const;

export const howItWorks = {
  title: "How it works",
  steps: [
    {
      n: "1",
      title: "We look at your week.",
      body: "You walk through a normal week with Kevin.",
    },
    {
      n: "2",
      title: "We show you what to hand off.",
      body: "You see the busywork a simple tool can do.",
    },
    {
      n: "3",
      title: "You decide.",
      body: "Keep the plan whether you hire us or not.",
    },
  ],
} as const;

export const finalCta = {
  title: "Spend less time on busywork. More time on jobs.",
  body: "We look at your week for free and show you what to hand off. Keep the plan whether you hire us or not.",
} as const;

export const faqs = [
  {
    q: "Will this text my customers without me?",
    a: "No. We get the text ready. You read it and you send it. If you ever want some texts to send on their own, that is your choice. You can change it any time.",
  },
  {
    q: "Do I have to learn something new?",
    a: "No. Kevin sets it up with you and shows you how it works. If you can send a text, you can use it.",
  },
  {
    q: "What do I pay if I want you to set it up?",
    a: "The basic setup is $997, paid once. The full setup is $1,997, paid once. You also need your own Grok plan. You pay Grok, starting at $30 a month. Kevin helps you open it. You own it.",
  },
  {
    q: "Is the time check really free?",
    a: "Yes. We look at your week and show you what to hand off. You keep the plan whether you hire us or not.",
  },
  {
    q: "Do you promise a set number of hours back?",
    a: "No. We will not make up a number. Your week is your own. We show you the chores you can hand off, and you decide.",
  },
  {
    q: "Who is this for?",
    a: "Owners of trades shops in South Florida who still do the busywork themselves. That includes HVAC, plumbing, pool, roofing, docks and seawall, marine, and construction.",
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
    areaServed: "South Florida",
    makesOffer: [
      offerJsonLd({
        name: offer.freeName,
        price: offer.freeAmount,
        description: offer.freeDetail,
        url: site.calendly,
      }),
      offerJsonLd({
        name: pricing.kit.homeName,
        price: pricing.kit.amount,
        description: `${pricing.kit.audience} ${pricing.kit.price} ${pricing.kit.priceNote}. ${pricing.kit.includes.join(" ")} ${pricing.both} ${pricing.account}`,
        url: `${site.url}/#pricing`,
      }),
      offerJsonLd({
        name: pricing.full.homeName,
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
