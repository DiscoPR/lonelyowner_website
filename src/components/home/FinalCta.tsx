import { hero } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="border-t border-cream/10 bg-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl">
          {hero.headline}
        </h2>
        <a href="#audit-form" className="cta-primary mt-8 w-full sm:w-auto">
          {hero.primaryCta}
        </a>
      </div>
    </section>
  );
}
