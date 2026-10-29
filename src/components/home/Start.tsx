import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { opsLeakPath } from "@/lib/ops-leak";
import { site } from "@/lib/site";

export function Start() {
  return (
    <section id="start" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          How to start
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
          Free audit, or book a call.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="border border-cream/10 p-6">
            <p className="font-serif text-sm tracking-[0.16em] text-copper">01</p>
            <h3 className="mt-3 font-serif text-2xl">Start the free audit</h3>
            <p className="mt-3 leading-7 text-cream/72">
              Paste your website. We email the 5-area score. No card. Use it
              to decide if the paid audit is worth it.
            </p>
            <Link href={opsLeakPath} className="cta-primary mt-6 w-full sm:w-auto">
              Start the free audit
            </Link>
          </article>
          <article className="border border-cream/10 p-6">
            <p className="font-serif text-sm tracking-[0.16em] text-copper">02</p>
            <h3 className="mt-3 font-serif text-2xl">{site.primaryCtaLabel}</h3>
            <p className="mt-3 leading-7 text-cream/72">
              About 15 minutes with Kevin. Say if you want the paid audit, the
              Grok bots, or both.
            </p>
            <CtaLink className="mt-6 w-full sm:w-auto">{site.primaryCtaLabel}</CtaLink>
          </article>
        </div>
      </div>
    </section>
  );
}
