import { CtaLink } from "@/components/CtaLink";
import { hero, weekSample, workshop } from "@/lib/site";

export function Hero() {
  return (
    <section className="shop-grid relative overflow-hidden border-b border-cream/10">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(198,123,58,0.18),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-24">
        <div>
          <p className="max-w-xl text-sm font-semibold text-pretty text-copper sm:text-base">
            {hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:mt-4 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cream/78 sm:mt-6">{hero.body}</p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-start">
            <CtaLink className="w-full sm:w-auto">{hero.primaryCta}</CtaLink>
            <CtaLink
              href={`#${workshop.id}`}
              className="w-full sm:w-auto"
              variant="secondary"
            >
              {hero.secondaryCta}
            </CtaLink>
          </div>

          <p className="mt-5 max-w-xl border border-cream/15 bg-cream/5 px-4 py-3 text-base leading-7 text-cream/90">
            {hero.freeOffer}
          </p>
        </div>

        <figure className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-sm border border-cream/20 bg-cream text-ink shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <figcaption className="border-b border-ink/10 px-5 py-4">
              <p className="font-serif text-2xl">{weekSample.title}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{weekSample.note}</p>
            </figcaption>
            <div className="border-b border-ink/10 p-5">
              <p className="text-sm font-bold">{weekSample.beforeLabel}</p>
              <ul className="mt-3 space-y-2">
                {weekSample.before.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-ink-soft"
                  >
                    <span aria-hidden="true" className="text-ink/40">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sand/70 p-5">
              <p className="text-sm font-bold">{weekSample.afterLabel}</p>
              <ul className="mt-3 space-y-2">
                {weekSample.after.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-ink">
                    <span aria-hidden="true" className="text-copper">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
