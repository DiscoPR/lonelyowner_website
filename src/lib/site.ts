export const site = {
  name: "Lonely Owner",
  domain: "lonelyowner.com",
  url: "https://lonelyowner.com",
  founder: "Kevin Andreosky",
  email: "kevin.andreosky@gmail.com",
  phoneDisplay: "732-232-5358",
  phoneHref: "tel:+17322325358",
  calendly: "https://calendly.com/trainedbykevin/letsmeet",
  primaryCtaLabel: "Book a 15-minute audit call",
  social: {
    youtube: "https://www.youtube.com/@LonelyOwner",
    facebook: "https://www.facebook.com/LonelyOwner",
  },
  webinar: {
    title: "AI Basics for Blue Collar Businesses",
    cadence: "Wednesday at noon Eastern",
  },
} as const;

export const navLinks = [
  { href: "/#problem", label: "The leak" },
  { href: "/#who-we-help", label: "Who we help" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#offer", label: "The audit" },
  { href: "/#webinar", label: "Webinar" },
  { href: "/resources", label: "Resources" },
] as const;

export const trades = [
  {
    name: "HVAC",
    blurb:
      "After-hours no-cool calls, seasonal tune-up lists, and estimates that sit in the truck.",
  },
  {
    name: "Plumbing",
    blurb:
      "Emergency calls while you are under a sink. Follow-up that waits until you get home.",
  },
  {
    name: "Docks and marine",
    blurb:
      "Seasonal rush, weather delays, and customers who call the next yard if nobody answers.",
  },
  {
    name: "Trash and roll-off",
    blurb:
      "Same-day box requests, missed pickups, and dispatch that lives in a text thread.",
  },
  {
    name: "Construction",
    blurb:
      "Bid follow-up, change orders, and the owner still running the office from the job.",
  },
  {
    name: "Shops and yards",
    blurb:
      "Service writers, parts orders, and the one person who knows where every job stands.",
  },
] as const;

export const problems = [
  {
    title: "The office is still you",
    body: "You are on a roof, in a crawl, or on a dock. The phone rings anyway. Whoever picks up keeps the work.",
  },
  {
    title: "After-hours goes to voicemail",
    body: "A no-heat call at 7:30 does not leave a polite message and wait. They call the next name on the list.",
  },
  {
    title: "Estimates die in the truck",
    body: "The number is on a notepad, in a text, or in your head. Follow-up happens when you remember, which is after they booked someone else.",
  },
  {
    title: "The shop runs on leftover attention",
    body: "Reviews, invoices, and we-are-on-the-way texts wait until you get home. Plenty of nights they never go out.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "The call",
    body: "Fifteen minutes. You talk through how jobs come in, where they stall, and what still sits on you. If it is not a fit, we say so.",
  },
  {
    n: "02",
    title: "AI Opportunity Audit",
    body: "We map the real leaks: missed calls, stale estimates, follow-up that never leaves the truck, and the jobs a bot can draft for you.",
  },
  {
    n: "03",
    title: "Build the systems",
    body: "We set up the pieces around work you already do. No science project. Tools that fit a shop, not a software demo.",
  },
  {
    n: "04",
    title: "You keep the calendar and the send button",
    body: "Bots draft. You send. Nothing talks to a customer until you say so. Ownership stays with the owner.",
  },
] as const;

export const offer = {
  auditName: "One Call Audit",
  auditPrice: "$999",
  auditDetail:
    "A paid working session that shows you where jobs are leaking and what to fix first. If you move forward, the $999 is credited toward implementation.",
  dfyPrice: "$297/mo",
  dfyDetail:
    "Done-for-you support is $297 a month after you have seen the systems work in your shop. That monthly plan starts after it is live and useful, not on a promise.",
  forWho: [
    "Owner-operated trades where you still run the phone, the board, or the pricing",
    "Shops that will get on a short call and talk about real jobs",
    "Owners who want help without handing the customer to a robot",
  ],
  notFor: [
    "Companies that want a chatbot answering customers with no owner in the loop",
    "Teams that will not change how the phone and follow-up work",
    "Anyone shopping a platform instead of a working shop system",
  ],
} as const;

export const faqs = [
  {
    q: "What is an AI Opportunity Audit?",
    a: "It is a working look at how jobs enter your shop and where they stall. We use that to show you which tasks a bot can draft for you, and which ones still need your name on them.",
  },
  {
    q: "What happens on the 15-minute call?",
    a: "We see if it is a fit. You describe a normal week. Kevin tells you whether an audit is worth it. If it is not, you leave with a clear no. No pitch deck.",
  },
  {
    q: "Why does the audit cost $999?",
    a: "It is paid work, not a free consult. You get a clear picture of the leaks and a plan. If you move into implementation, that $999 is credited toward the build.",
  },
  {
    q: "What is the $297 a month?",
    a: "That is done-for-you support after the systems are live and you can see them working. You do not start a monthly plan on a slide. You start it after it is useful in the shop.",
  },
  {
    q: "Will a bot talk to my customers?",
    a: "Not unless you choose that later, and even then you stay in control. The default is simple: every bot drafts, the owner sends.",
  },
  {
    q: "What kind of shops do you work with?",
    a: "Blue-collar, owner-operated trades. HVAC, plumbing, docks and marine, trash and roll-off, construction, and the shops that keep those crews moving.",
  },
  {
    q: "Do I have to learn a bunch of software?",
    a: "No. If a tool needs a training seminar, it does not belong in a one-owner shop. We build around how you already take jobs.",
  },
  {
    q: "How do I get into the Wednesday webinar?",
    a: `Use the same booking link as the audit call and note that you want ${site.webinar.title}. A dedicated registration page will replace that when it is ready.`,
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

export const resourcePreviewIds = [0, 1, 4, 5] as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: "+1-732-232-5358",
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    description:
      "AI Opportunity Audit and shop systems for owner-operated trades. Bots draft. The owner sends.",
    areaServed: "United States",
    sameAs: [site.social.youtube, site.social.facebook],
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
