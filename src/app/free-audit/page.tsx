import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { JsonLd } from "@/components/JsonLd";
import { MissedJobsCalculator } from "@/components/MissedJobsCalculator";
import {
  freeAudit,
  freeAuditBooking,
  freeAuditFaqJsonLd,
  freeAuditFaqs,
  freeAuditPath,
} from "@/lib/free-audit";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: freeAuditBooking.title,
  description: freeAudit.subhead,
  alternates: { canonical: `${site.url}${freeAuditPath}` },
  openGraph: {
    title: freeAudit.headline,
    description: freeAudit.subhead,
    url: `${site.url}${freeAuditPath}`,
  },
  twitter: {
    card: "summary_large_image",
    title: freeAudit.headline,
    description: freeAudit.subhead,
  },
};

export default function FreeAuditPage() {
  return (
    <div className="bg-ink">
      <JsonLd data={freeAuditFaqJsonLd()} />

      <section className="shop-grid border-b border-cream/10">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              {freeAuditBooking.title}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:text-6xl">
              {freeAudit.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/78">{freeAudit.subhead}</p>
            <div className="mt-8">
              <CtaLink href={freeAuditBooking.href} className="w-full whitespace-normal sm:w-auto">
                {freeAuditBooking.label}
              </CtaLink>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              {freeAudit.callTitle}
            </h2>
            <ol className="mt-6 grid gap-4">
              {freeAudit.callSteps.map((step, index) => (
                <li key={step} className="border border-cream/10 bg-ink/40 p-5">
                  <p className="font-serif text-sm tracking-[0.16em] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 leading-7 text-cream/78">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="border-b border-cream/10 bg-shop"
        aria-labelledby="missed-jobs-title"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2
            id="missed-jobs-title"
            className="max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl"
          >
            {freeAudit.mathTitle}
          </h2>
          <MissedJobsCalculator />
        </div>
      </section>

      <section className="paper-grid border-b border-ink/10 text-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
            {freeAudit.whoTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-soft">{freeAudit.who}</p>
        </div>
      </section>

      <section className="border-b border-cream/10 bg-ink" aria-labelledby="free-audit-faq-title">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <h2
            id="free-audit-faq-title"
            className="font-serif text-3xl tracking-tight sm:text-5xl"
          >
            FAQ
          </h2>
          <div className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
            {freeAuditFaqs.map((item) => (
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
        </div>
      </section>

      <section className="shop-grid" aria-labelledby="free-audit-close-title">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h2
            id="free-audit-close-title"
            className="font-serif text-3xl tracking-tight sm:text-5xl"
          >
            {freeAudit.bottom}
          </h2>
          <div className="mt-8">
            <CtaLink href={freeAuditBooking.href} className="w-full whitespace-normal sm:w-auto">
              {freeAuditBooking.label}
            </CtaLink>
          </div>
        </div>
      </section>
    </div>
  );
}
