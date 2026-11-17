import { CtaLink } from "@/components/CtaLink";
import { workshop } from "@/lib/site";

export function Workshop() {
  return (
    <section
      id={workshop.id}
      className="paper-grid scroll-mt-20 text-ink"
      aria-labelledby="workshop-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="border border-ink/15 bg-cream p-6 sm:p-10">
          <h2
            id="workshop-title"
            className="max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl"
          >
            {workshop.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">{workshop.body}</p>
          <div className="mt-8">
            <CtaLink href={workshop.href} className="w-full sm:w-auto">
              {workshop.cta}
            </CtaLink>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-soft">{workshop.note}</p>
        </div>
      </div>
    </section>
  );
}
