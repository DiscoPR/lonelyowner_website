import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { resourceJobs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop jobs a bot should draft",
  description:
    "Jobs a one-owner shop should hand to a bot. Every bot drafts. The owner sends.",
  alternates: { canonical: `${site.url}/resources` },
};

export default function ResourcesPage() {
  return (
    <div className="bg-ink">
      <section className="shop-grid border-b border-cream/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Resources
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl">
            Jobs a one-owner shop should hand to a bot
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/75">
            These are the tasks that steal the evening after a full day in the
            field. A bot can draft every one of them. You still send. That is
            the rule.
          </p>
          <CtaLink className="mt-8">{site.primaryCtaLabel}</CtaLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <ol className="grid gap-5">
          {resourceJobs.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-5 border border-cream/10 bg-shop p-6 md:grid-cols-[4rem_1fr]"
            >
              <p className="font-serif text-2xl text-copper">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl">{item.title}</h2>
                <p className="mt-3 leading-7 text-cream/75">{item.job}</p>
                <p className="mt-3 leading-7 text-muted">
                  <span className="font-semibold text-cream/90">Owner sends. </span>
                  {item.owner}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 border border-cream/10 p-6">
          <h2 className="font-serif text-2xl">Want these running in your shop?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-cream/72">
            The AI Opportunity Audit shows which of these you should turn on
            first. Fifteen minutes to see if it is a fit.
          </p>
          <CtaLink className="mt-6">{site.primaryCtaLabel}</CtaLink>
        </div>
      </section>
    </div>
  );
}
