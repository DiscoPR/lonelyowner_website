import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { opsLeakPath } from "@/lib/ops-leak";
import { offer, site } from "@/lib/site";

export function Audits() {
  return (
    <section id="audits" className="paper-grid text-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          AI audits
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
          See the leak before you buy a build.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
          Start free. The paid audit is a working session, not a slide deck.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="border border-ink/15 bg-cream p-7 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Start here
            </p>
            <h3 className="mt-3 font-serif text-3xl">{offer.freeName}</h3>
            <p className="mt-2 font-serif text-4xl text-ink">{offer.freePrice}</p>
            <p className="mt-4 leading-7 text-ink-soft">{offer.freeDetail}</p>
            <Link href={opsLeakPath} className="cta-primary mt-7 w-full sm:w-auto">
              Start the free audit
            </Link>
          </article>
          <article className="border border-ink/15 bg-sand/60 p-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              The working session
            </p>
            <h3 className="mt-3 font-serif text-3xl">{offer.auditName}</h3>
            <p className="mt-2 font-serif text-4xl text-ink">{offer.auditPrice}</p>
            <p className="mt-4 leading-7 text-ink-soft">{offer.auditDetail}</p>
            <CtaLink className="mt-7 w-full sm:w-auto">{site.primaryCtaLabel}</CtaLink>
          </article>
        </div>
      </div>
    </section>
  );
}
