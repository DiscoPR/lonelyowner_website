import { CtaLink } from "@/components/CtaLink";
import { grokAccountNote, grokBots, grokGuarantee, site } from "@/lib/site";

function BotCard({
  eyebrow,
  name,
  price,
  detail,
  bots,
  muted,
}: {
  eyebrow: string;
  name: string;
  price: string;
  detail: string;
  bots: readonly string[];
  muted?: boolean;
}) {
  return (
    <article
      className={`border border-ink/15 p-7 text-ink ${muted ? "bg-sand/60" : "bg-cream shadow-sm"}`}
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-3xl">{name}</h3>
      <p className="mt-2 font-serif text-4xl">{price} flat</p>
      <p className="mt-4 leading-7 text-ink-soft">{detail}</p>
      <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-ink-soft">
        {bots.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-5 leading-7 text-ink-soft">{grokGuarantee}</p>
      <CtaLink className="mt-7 w-full sm:w-auto">{site.primaryCtaLabel}</CtaLink>
    </article>
  );
}

export function GrokBots() {
  return (
    <section id="grok-bots" className="border-y border-cream/10 bg-shop">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Grok bot setup
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-cream sm:text-5xl">
          Bots built by hand. Flat price. Live in 24 hours.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/72">
          For owner-operated service businesses. The bots draft. You send. No
          promised rankings, no promised job counts.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <BotCard
            eyebrow="Example set"
            name={grokBots.three.name}
            price={grokBots.three.price}
            detail={grokBots.three.detail}
            bots={grokBots.three.bots}
          />
          <BotCard
            eyebrow="Full shop set"
            name={grokBots.seven.name}
            price={grokBots.seven.price}
            detail={grokBots.seven.detail}
            bots={[...grokBots.three.bots, ...grokBots.seven.bots]}
            muted
          />
        </div>

        <p className="mt-8 max-w-3xl leading-7 text-cream/75">{grokAccountNote}</p>
      </div>
    </section>
  );
}
