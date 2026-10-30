import { grokBots, hero, setups } from "@/lib/site";

const tiers = [
  {
    ...setups.frontDesk,
    price: grokBots.three.price,
    bots: grokBots.three.bots,
    highlighted: false,
  },
  {
    ...setups.fullCrew,
    price: grokBots.seven.price,
    bots: [...grokBots.three.bots, ...grokBots.seven.bots],
    highlighted: true,
  },
] as const;

export function Pricing() {
  return (
    <section id="grok-bots" className="border-b border-cream/10 bg-shop">
      {/* TODO for Kevin: confirm whether a monthly fee follows the flat setup price. Do not write one-time, no monthly fee, or no contract until that is confirmed. */}
      {/* TODO for Kevin: do not claim the bots work with the shop's existing phone number until that is confirmed. */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Flat setup price
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-cream sm:text-5xl">
          Pick a setup.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-cream/72">
          Both buttons start with the free audit. The prices below are the flat
          setup price.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`p-6 text-ink sm:p-7 ${
                tier.highlighted
                  ? "border-2 border-copper bg-cream shadow-sm"
                  : "border border-ink/15 bg-cream/95"
              }`}
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                {tier.badge}
              </p>
              <h3 className="mt-3 font-serif text-3xl">{tier.name}</h3>
              <p className="mt-2 text-sm font-semibold tracking-wide text-ink-soft uppercase">
                {tier.countLabel}
              </p>
              <p className="mt-3 font-serif text-4xl">{tier.price} flat</p>
              <p className="mt-4 leading-7 text-ink-soft">{tier.tagline}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
                {tier.bots.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#audit-form" className="cta-primary mt-7 w-full">
                {hero.setupCta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
