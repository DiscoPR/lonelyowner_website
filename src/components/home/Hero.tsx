import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { opsLeakPath } from "@/lib/ops-leak";
import { hero, heroCard, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="shop-grid relative overflow-hidden border-b border-cream/10">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(198,123,58,0.18),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-24">
        <div>
          <p className="max-w-xl text-xs font-semibold tracking-[0.14em] text-pretty text-copper sm:text-sm">
            {site.tradesLine}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:mt-4 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cream/78 sm:mt-6">{hero.body}</p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-start">
            <Link href={opsLeakPath} className="cta-primary w-full sm:w-auto">
              {hero.primaryCta}
            </Link>
            <CtaLink className="w-full sm:w-auto" variant="secondary">
              {hero.secondaryCta}
            </CtaLink>
          </div>

          <ul className="mt-5 space-y-2 sm:mt-6">
            {hero.checks.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-6 text-cream/85"
              >
                <span aria-hidden="true" className="text-copper">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="mx-auto w-full max-w-[22.5rem]">
          <div className="rounded-[2rem] border border-cream/20 bg-steel p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.55rem] bg-ink px-4 pt-5 pb-4">
              <p className="text-center text-xs font-semibold tracking-[0.16em] text-copper">
                {heroCard.time}
              </p>
              <div className="mt-4 rounded-2xl bg-cream p-4 text-ink shadow-sm">
                <p className="text-sm font-semibold">{heroCard.missed}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{heroCard.quote}</p>
              </div>
              <div className="mt-3 rounded-2xl border border-copper/40 bg-shop p-4">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-copper">
                  {heroCard.replyLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-cream">{heroCard.reply}</p>
                <div className="mt-4 flex gap-2" aria-hidden="true">
                  <span className="inline-flex min-h-11 flex-1 items-center justify-center rounded-sm bg-copper text-sm font-bold text-ink">
                    {heroCard.send}
                  </span>
                  <span className="inline-flex min-h-11 flex-1 items-center justify-center rounded-sm border border-cream/25 text-sm font-semibold text-cream">
                    {heroCard.edit}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-xs leading-5 text-muted">
                {heroCard.held}
              </p>
              <div
                aria-hidden="true"
                className="mx-auto mt-4 h-1 w-16 rounded-full bg-cream/20"
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
