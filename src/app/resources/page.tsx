import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { opsLeakPath } from "@/lib/ops-leak";
import { grokBots, resourceJobs, site } from "@/lib/site";

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
            field. A Grok bot can draft every one of them. You still send.
            That is the rule. Setup is {grokBots.three.price} for 3 bots or{" "}
            {grokBots.seven.price} for 7, flat.{" "}
            <Link
              href="/#grok-bots"
              className="font-semibold text-copper underline decoration-copper/40 underline-offset-4 hover:text-copper-hot"
            >
              See setup prices
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink>{site.primaryCtaLabel}</CtaLink>
            <Link href={opsLeakPath} className="cta-secondary">
              Get your free Ops Leak Score
            </Link>
          </div>
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
            Start with a Free Job Leak Audit. If the report is useful, pick a
            flat setup and we turn the bots on.
          </p>
          <Link href="/#audit-form" className="cta-primary mt-6 w-full sm:w-auto">
            Get my free audit
          </Link>
        </div>
      </section>
    </div>
  );
}
