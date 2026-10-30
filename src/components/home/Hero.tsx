import { AuditForm } from "@/components/home/AuditForm";
import { hero } from "@/lib/site";

export function Hero() {
  return (
    <section className="shop-grid relative overflow-hidden border-b border-cream/10">
      {/* TODO for Kevin: optional line "Report in [X]" once a turnaround is confirmed. Do not render a number until then. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(198,123,58,0.18),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-16">
        <div>
          <p className="text-sm font-medium tracking-wide text-copper">
            Free Job Leak Audit
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-cream/78">
            {hero.subhead}
          </p>
          <div className="mt-8">
            <a href="#audit-form" className="cta-primary w-full sm:w-auto">
              {hero.primaryCta}
            </a>
            <p className="mt-3 text-sm leading-6 text-cream/70">
              {hero.reassurance}
            </p>
            <a
              href="#grok-bots"
              className="mt-4 inline-flex text-sm font-semibold text-cream underline decoration-copper/70 underline-offset-4 hover:text-copper-hot"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <AuditForm />
      </div>
    </section>
  );
}
