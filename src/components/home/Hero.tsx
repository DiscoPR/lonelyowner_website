import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { opsLeakPath } from "@/lib/ops-leak";
import { grokBots, offer, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="shop-grid relative overflow-hidden border-b border-cream/10">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(198,123,58,0.18),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
        <p className="text-sm font-medium tracking-wide text-copper">
          Owner-operated trades
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:text-6xl">
          AI audits and Grok bots for the owner who still runs the shop.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/78">
          Two offers. We find where jobs leak, or we set up Grok bots that
          draft the office work. You still send.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-start">
          <Link href={opsLeakPath} className="cta-primary w-full sm:w-auto">
            Start the free audit
          </Link>
          <CtaLink className="w-full sm:w-auto" variant="secondary">
            {site.primaryCtaLabel}
          </CtaLink>
        </div>

        <div className="mt-6 grid max-w-3xl gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          <Link
            href="/#audits"
            className="border border-cream/15 p-4 transition-colors hover:border-copper sm:p-5"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              AI audits
            </p>
            <p className="mt-2 font-serif text-2xl text-cream">
              Free, or {offer.auditPrice}
            </p>
            <p className="mt-2 hidden text-sm leading-6 text-cream/70 sm:block">
              A score on public pages, or a working session.
            </p>
          </Link>
          <Link
            href="/#grok-bots"
            className="border border-cream/15 p-4 transition-colors hover:border-copper sm:p-5"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Grok bots
            </p>
            <p className="mt-2 font-serif text-2xl text-cream">
              {grokBots.three.price} or {grokBots.seven.price} flat
            </p>
            <p className="mt-2 hidden text-sm leading-6 text-cream/70 sm:block">
              3 bots, or a suite of 7. Built by hand.
            </p>
          </Link>
        </div>

        <p className="mt-5 max-w-xl text-sm leading-6 text-cream/70">
          {site.tradesLine}
        </p>
      </div>
    </section>
  );
}
