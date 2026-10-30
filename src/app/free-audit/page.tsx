import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { JsonLd } from "@/components/JsonLd";
import { OpsLeakForm } from "@/components/OpsLeakForm";
import {
  opsLeakAreas,
  opsLeakFaqJsonLd,
  opsLeakFaqs,
  opsLeakFit,
  opsLeakNotFit,
  opsLeakPath,
  opsLeakProcessTrust,
  opsLeakSteps,
  opsLeakTrust,
} from "@/lib/ops-leak";
import { grokBots, grokGuarantee, setups, site, websiteScope } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Job Leak Audit for Trade Shops",
  description:
    "Paste your website. We check it the way your customers do, on a phone, and show you where jobs slip away. Free for HVAC, plumbing, marine, roll-off, construction, and shops. No credit card.",
  keywords: [
    "Free Job Leak Audit",
    "owner operated trades",
    "HVAC",
    "plumbing",
    "marine",
    "roll-off",
    "construction",
    "shops",
  ],
  alternates: { canonical: `${site.url}${opsLeakPath}` },
  openGraph: {
    title: "More calls answered. More jobs booked.",
    description:
      "Free Job Leak Audit for owner-operated trades. We email a report after a look at public pages. It is not a live scanner. No credit card.",
    url: `${site.url}${opsLeakPath}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "More calls answered. More jobs booked.",
    description:
      "Free Job Leak Audit for owner-operated trades. We email a report after a look at public pages. No credit card.",
  },
};

export default function FreeAuditPage() {
  return (
    <div className="bg-ink">
      <JsonLd data={opsLeakFaqJsonLd()} />

      <section className="shop-grid border-b border-cream/10">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Free Job Leak Audit
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:text-6xl">
              More calls answered. More jobs booked.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/78">
              Paste your website. We check it the way your customers do, on a
              phone, and show you where jobs slip away: missed after-hours
              calls, a quote form nobody can find, no call button. Free. No
              credit card.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-cream/70">
              Built for HVAC, plumbing, docks and marine, trash and roll-off,
              construction, and one-owner shops. Not for SaaS. Not for agencies.
            </p>
          </div>
          <OpsLeakForm />
        </div>
      </section>

      <section className="border-b border-cream/10 bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            What you get
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
            Your Free Job Leak Audit shows your top leaks and the first fix
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {opsLeakAreas.map((area, index) => (
              <li key={area.name} className="border border-cream/10 p-6">
                <p className="font-serif text-sm tracking-[0.16em] text-copper">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{area.name}</h3>
                <p className="mt-3 leading-7 text-cream/72">{area.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">
            This page does not run a live scanner. We email the report after a
            look at public pages.
          </p>
        </div>
      </section>

      <section className="border-b border-cream/10 bg-shop">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl">
            Three steps. No fluff.
          </h2>
          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {opsLeakSteps.map((step) => (
              <li key={step.n} className="border border-cream/10 bg-ink/40 p-6">
                <p className="font-serif text-sm tracking-[0.16em] text-copper">
                  {step.n}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 leading-7 text-cream/72">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-cream/10 bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Who it is for
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
            Built for lonely owners
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
            You are the closer, the dispatcher, and the after-hours phone. You
            do not need another strategy workshop. You need to know which ops
            leaks are costing real jobs, and a clear plan to plug them without
            hiring a full admin team.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-cream/10 p-6">
              <h3 className="font-serif text-2xl">Good fit if you</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-cream/75">
                {opsLeakFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-cream/10 p-6">
              <h3 className="font-serif text-2xl">Not a fit if you</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-cream/75">
                {opsLeakNotFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cream/10 bg-steel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Plain trust, before any quote
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {opsLeakProcessTrust.map((item) => (
              <li key={item} className="border border-cream/10 bg-ink/30 p-5 leading-7">
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {opsLeakTrust.map((item) => (
              <li key={item} className="text-sm leading-6 text-cream/75">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="paper-grid text-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Setups
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
            Ready for the fix?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="border border-ink/15 bg-cream p-6 sm:p-8">
              <h3 className="font-serif text-2xl">{setups.frontDesk.name}</h3>
              <p className="mt-4 text-lg leading-8 text-ink-soft">
                {setups.frontDesk.countLabel} set up for {grokBots.three.price},
                one time. {setups.frontDesk.tagline}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
                {grokBots.three.bots.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="border border-ink/15 bg-sand/60 p-6 sm:p-8">
              <h3 className="font-serif text-2xl">{setups.fullCrew.name}</h3>
              <p className="mt-4 text-lg leading-8 text-ink-soft">
                {setups.fullCrew.countLabel} set up for {grokBots.seven.price},
                one time. {setups.fullCrew.tagline} You approve what goes to
                customers.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
                {[...grokBots.three.bots, ...grokBots.seven.bots].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-8 max-w-3xl leading-7 text-ink-soft">{grokGuarantee}</p>
          <p className="mt-3 max-w-3xl leading-7 text-ink-soft">{websiteScope}</p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <CtaLink href="/#grok-bots">See bot setups</CtaLink>
            <CtaLink
              variant="secondary"
              className="!border-ink/25 !text-ink hover:!border-ink/50 hover:!bg-ink/5"
            >
              {site.primaryCtaLabel}
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl">
            Straight answers before you send a URL.
          </h2>
          <div className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
            {opsLeakFaqs.map((item) => (
              <details key={item.q} className="faq-item group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-serif text-xl">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-copper transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-cream/72">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-muted">
            <Link className="underline decoration-copper/60 underline-offset-4 hover:text-cream" href="/">
              {site.name}
            </Link>
            {" · "}
            <Link className="underline decoration-copper/60 underline-offset-4 hover:text-cream" href={opsLeakPath}>
              Free Job Leak Audit
            </Link>
            {" · "}
            <Link className="underline decoration-copper/60 underline-offset-4 hover:text-cream" href="/#grok-bots">
              {setups.frontDesk.name} and {setups.fullCrew.name}
            </Link>
            {" · "}
            <a
              className="underline decoration-copper/60 underline-offset-4 hover:text-cream"
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fit call
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
