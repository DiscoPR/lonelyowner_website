import { CtaLink } from "@/components/CtaLink";
import { pricing } from "@/lib/site";

function Includes({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 leading-7 text-ink-soft">
          <span aria-hidden="true" className="text-copper">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="paper-grid scroll-mt-20 text-ink"
      aria-labelledby="pricing-title"
    >
      <div id="grok-bots" className="scroll-mt-20" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper">
          {pricing.eyebrow}
        </p>
        <h2
          id="pricing-title"
          className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl"
        >
          {pricing.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">{pricing.body}</p>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <article className="flex flex-col border border-ink/15 bg-cream p-6 shadow-sm sm:p-7">
            <h3 className="font-serif text-3xl">{pricing.kit.name}</h3>
            <p className="mt-3 leading-7 text-ink-soft">{pricing.kit.audience}</p>
            <p className="mt-4 font-serif text-4xl text-ink">
              {pricing.kit.price}{" "}
              <span className="font-sans text-lg font-semibold text-ink-soft">
                {pricing.kit.priceNote}
              </span>
            </p>
            <Includes items={pricing.kit.includes} />
            <div className="mt-auto pt-7">
              <CtaLink className="w-full">{pricing.kit.cta}</CtaLink>
            </div>
          </article>

          <article className="relative flex flex-col border-2 border-copper bg-cream p-6 shadow-sm sm:p-7">
            <p className="absolute -top-3 right-5 bg-copper px-2.5 py-1 text-[11px] font-bold tracking-[0.14em] text-ink">
              {pricing.full.badge}
            </p>
            <h3 className="font-serif text-3xl">{pricing.full.name}</h3>
            <p className="mt-3 leading-7 text-ink-soft">{pricing.full.audience}</p>
            <p className="mt-4 font-serif text-4xl text-ink">
              {pricing.full.price}{" "}
              <span className="font-sans text-lg font-semibold text-ink-soft">
                {pricing.full.priceNote}
              </span>
            </p>
            <p className="mt-5 font-semibold text-ink">{pricing.full.lead}</p>
            <Includes items={pricing.full.includes} />
            <div className="mt-auto pt-7">
              <CtaLink className="w-full">{pricing.full.cta}</CtaLink>
            </div>
          </article>
        </div>

        <p className="mt-8 max-w-3xl leading-7 text-ink-soft">{pricing.both}</p>
        <p className="mt-3 max-w-3xl leading-7 text-ink-soft">{pricing.account}</p>
      </div>
    </section>
  );
}
