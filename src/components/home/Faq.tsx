import { faqs, site, type HomeFaq } from "@/lib/site";

function Answer({ item }: { item: HomeFaq }) {
  if (!item.bookCall) {
    return <p className="mt-3 leading-7 text-ink-soft">{item.a}</p>;
  }

  const [before, after] = item.a.split("book a call");
  if (after === undefined) {
    return <p className="mt-3 leading-7 text-ink-soft">{item.a}</p>;
  }

  return (
    <p className="mt-3 leading-7 text-ink-soft">
      {before}
      <a
        className="font-semibold text-ink underline decoration-copper/70 underline-offset-4"
        href={site.calendly}
        target="_blank"
        rel="noopener noreferrer"
      >
        book a call
      </a>
      {after}
    </p>
  );
}

export function Faq() {
  return (
    <section id="faq" className="paper-grid text-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-serif text-3xl tracking-tight sm:text-5xl">
          Questions about the free audit
        </h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-serif text-xl text-ink">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 text-copper transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <Answer item={item} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
