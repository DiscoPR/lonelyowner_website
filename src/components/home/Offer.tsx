import { CtaLink } from "@/components/CtaLink";
import { offer, site } from "@/lib/site";

export function Offer() {
  return (
    <section id="offer" className="paper-grid text-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          The offer
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
          Start with the AI Opportunity Audit. See the leaks before you buy a
          monthly plan.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="border border-ink/15 bg-cream p-7 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Front and center
            </p>
            <h3 className="mt-3 font-serif text-3xl">{offer.auditName}</h3>
            <p className="mt-2 font-serif text-4xl text-ink">{offer.auditPrice}</p>
            <p className="mt-4 leading-7 text-ink-soft">{offer.auditDetail}</p>
            <CtaLink className="mt-7">{site.primaryCtaLabel}</CtaLink>
          </article>
          <article className="border border-ink/15 bg-sand/60 p-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              After you see it work
            </p>
            <h3 className="mt-3 font-serif text-3xl">Done-for-you support</h3>
            <p className="mt-2 font-serif text-4xl text-ink">{offer.dfyPrice}</p>
            <p className="mt-4 leading-7 text-ink-soft">{offer.dfyDetail}</p>
          </article>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border border-ink/10 bg-cream/80 p-6">
            <h3 className="font-serif text-2xl">Who this is for</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
              {offer.forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-ink/10 bg-cream/80 p-6">
            <h3 className="font-serif text-2xl">Who this is not for</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
              {offer.notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
