import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { opsLeakPath } from "@/lib/ops-leak";
import { finalCta, hero } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="shop-grid border-t border-cream/10" aria-labelledby="final-cta-title">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2
          id="final-cta-title"
          className="font-serif text-3xl tracking-tight sm:text-5xl"
        >
          {finalCta.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-cream/75">{finalCta.body}</p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-start">
          <Link href={opsLeakPath} className="cta-primary w-full sm:w-auto">
            {hero.primaryCta}
          </Link>
          <CtaLink className="w-full sm:w-auto" variant="secondary">
            {hero.secondaryCta}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
