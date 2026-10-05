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
  opsLeakSample,
  opsLeakSteps,
  opsLeakTrust,
} from "@/lib/ops-leak";
import { offer, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Ops Leak Score for Trade Shops",
  description:
    "Paste your website. Get a free 5-area ops leak score for HVAC, plumbing, docks, roll-off, construction, and shops. See where jobs die after hours, then book the $999 AI Opportunity Audit.",
  alternates: { canonical: `${site.url}${opsLeakPath}` },
  openGraph: {
    title: "Where is your shop leaking jobs?",
    description:
      "Free Ops Leak Score for owner-operated trades. We email a 5-area summary. It is not a live scanner.",
    url: `${site.url}${opsLeakPath}`,
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
              Free Ops Leak Score
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:text-6xl">
              Where is your shop leaking jobs?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/78">
              Paste your business website. Get a free Ops Leak Score across 5
              areas that cost owner-operated trades money: after-hours calls,
              quote intake, owner bottleneck, scheduling friction, and trust
              gaps.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-cream/70">
              Built for HVAC, plumbing, docks and marine, trash and roll-off,
              construction, and one-owner shops. Not for SaaS. Not for agencies.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
              No credit card. No 40-page deck. A plain score summary, then you
              decide if the full audit is worth it.
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
            Your free Ops Leak Score covers 5 areas
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {opsLeakAreas.map((area, index) => (
              <li key={area.name} className="border border-cream/10 p-6">
                <p className="font-serif text-sm tracking-[0.16em] text-copper">
                  {String(index + 1).padStart(2, "0")} · 0 to 20
                </p>
                <h3 className="mt-3 font-serif text-2xl">{area.name}</h3>
                <p className="mt-3 leading-7 text-cream/72">{area.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl leading-7 text-cream/75">
            Each area gets a simple score from 0 to 20. The total is your Ops
            Leak Score out of 100. Higher means tighter ops. Lower means more
            jobs leaking.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
            Free scores are a diagnostic summary. This page does not run a live
            scanner. Full findings and a fix plan are in the paid audit.
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

      <section className="paper-grid border-b border-ink/10 text-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Preview only
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
            A sample score card. Not your score.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-ink-soft">
            Example shop: {opsLeakSample.domain}. These numbers are placeholders
            so you can see the layout. They are not a real client, and they are
            not a live scan.
          </p>

          <article className="mt-10 border border-ink/15 bg-cream p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Preview only. Not a real client score.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-serif text-5xl tracking-tight sm:text-6xl">
                  {opsLeakSample.total}
                  <span className="text-2xl text-ink-soft"> / 100</span>
                </p>
                <p className="mt-2 text-lg text-ink-soft">{opsLeakSample.band}</p>
              </div>
              <p className="max-w-sm text-sm leading-6 text-ink-soft">
                {opsLeakSample.takeaway}
              </p>
            </div>

            <ul className="mt-8 space-y-5">
              {opsLeakSample.areas.map((area) => (
                <li key={area.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl">{area.name}</h3>
                    <p className="shrink-0 font-semibold text-ink">
                      {area.score}/20
                    </p>
                  </div>
                  <div
                    className="mt-2 h-2 bg-sand"
                    role="img"
                    aria-label={`${area.name} sample score ${area.score} out of 20`}
                  >
                    <div
                      className="h-2 bg-copper"
                      style={{ width: `${(area.score / 20) * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{area.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 border border-ink/10 bg-sand/50 p-5">
              <h3 className="font-serif text-2xl">Biggest leak (sample)</h3>
              <p className="mt-2 leading-7 text-ink-soft">
                {opsLeakSample.biggestLeak}
              </p>
            </div>
          </article>
          <p className="mt-6 max-w-3xl leading-7 text-ink-soft">
            That is the free layer. The paid audit maps the fix to your shop.
          </p>
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
            do not need another AI strategy workshop. You need to know which
            ops leaks are costing real jobs, and a clear plan to plug them
            without hiring a full admin team.
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
            Paid audit
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
            Ready for the full picture?
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-soft">
            The free Ops Leak Score shows where you are leaking. The AI
            Opportunity Audit ({offer.auditPrice}) is the working session that
            maps the highest-priority fix to your shop, what a bot should
            handle, and what stays human.
          </p>
          <div className="mt-8 max-w-3xl border border-ink/15 bg-cream p-6 sm:p-8">
            <h3 className="font-serif text-2xl">
              What is in the paid audit
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
              <li>
                A deeper pass on the same 5 areas, with evidence from your
                public site and call notes if you book
              </li>
              <li>One primary recommendation, not a laundry list</li>
              <li>What to automate first, and what to leave alone</li>
              <li>
                A clear next step for implementation. You stay in control. Bots
                draft. You send.
              </li>
            </ul>
            <p className="mt-5 leading-7 text-ink-soft">
              Price: {offer.auditPrice}. Working session plus written findings.
              Often credited toward implementation if you continue. The free
              summary is the teaser. The {offer.auditPrice} audit is the
              deliverable.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <CtaLink>Book the AI Opportunity Audit</CtaLink>
              <CtaLink
                variant="secondary"
                className="!border-ink/25 !text-ink hover:!border-ink/50 hover:!bg-ink/5"
              >
                Book a short fit call first
              </CtaLink>
            </div>
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
              Free Ops Leak Score
            </Link>
            {" · "}
            AI Opportunity Audit ({offer.auditPrice})
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
