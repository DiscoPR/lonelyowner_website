import { grokAccountNote, grokBots, grokGuarantee, hero, setups, websiteScope } from "@/lib/site";

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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          One-time flat price
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-cream sm:text-5xl">
          Pick a setup.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-cream/72">
          Both buttons start with the free audit. Front Desk is 3 bots for{" "}
          {grokBots.three.price} one time. Full Crew is 7 bots for{" "}
          {grokBots.seven.price} one time.
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
              <p className="mt-3 font-serif text-4xl">{tier.price} one time</p>
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
        <p className="mt-8 max-w-2xl leading-7 text-cream">{grokAccountNote}</p>
        <p className="mt-3 max-w-2xl leading-7 text-cream">{grokGuarantee}</p>
        <p className="mt-3 max-w-2xl leading-7 text-cream/72">{websiteScope}</p>
      </div>
    </section>
  );
}
