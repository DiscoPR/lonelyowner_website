import { CtaLink } from "@/components/CtaLink";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="shop-grid relative overflow-hidden border-b border-cream/10">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(198,123,58,0.18),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <p className="text-sm font-medium tracking-wide text-copper">
          {site.tagline}
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:text-6xl">
          The after-hours call is a job. Voicemail is how you lose it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/78">
          You already paid for the truck, the crew, and the phone number. Lonely
          Owner shows a one-owner shop where work is leaking after hours, then
          builds simple systems so a missed call does not become someone else&apos;s
          job.
        </p>

        <div className="mt-9 flex flex-col items-start gap-5">
          <CtaLink>
            {site.primaryCtaLabel}
            <span aria-hidden="true">→</span>
          </CtaLink>
          <ul className="flex max-w-xl flex-col gap-2 text-sm text-cream/70 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li>15 minutes to see if it is a fit</li>
            <li>$50M+ closed by Kevin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
