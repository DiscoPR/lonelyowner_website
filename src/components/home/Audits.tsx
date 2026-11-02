import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { opsLeakPath } from "@/lib/ops-leak";
import { auditSection, offer } from "@/lib/site";

export function Audits() {
  return (
    <section
      id="audits"
      className="scroll-mt-20 border-y border-cream/10 bg-shop"
      aria-labelledby="audit-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2
          id="audit-title"
          className="max-w-3xl font-serif text-3xl tracking-tight text-cream sm:text-5xl"
        >
          {auditSection.title}
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col border border-cream/15 bg-cream p-6 text-ink sm:p-7">
            <h3 className="font-serif text-3xl">{offer.freeName}</h3>
            <p className="mt-2 font-serif text-4xl">{offer.freePrice}</p>
            <p className="mt-4 leading-7 text-ink-soft">{offer.freeDetail}</p>
            <Link href={opsLeakPath} className="cta-primary mt-7 w-full sm:mt-auto sm:w-auto">
              {auditSection.freeCta}
            </Link>
          </article>
          <article className="flex flex-col border border-cream/15 bg-sand/80 p-6 text-ink sm:p-7">
            <h3 className="font-serif text-3xl">{offer.auditName}</h3>
            <p className="mt-2 font-serif text-4xl">{offer.auditPrice}</p>
            <p className="mt-4 leading-7 text-ink-soft">{offer.auditDetail}</p>
            <CtaLink className="mt-7 w-full sm:mt-auto sm:w-auto">
              {auditSection.paidCta}
            </CtaLink>
          </article>
        </div>
      </div>
    </section>
  );
}
