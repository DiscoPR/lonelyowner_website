import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="paper-grid text-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          FAQ
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl">
          Straight answers before you book.
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
              <p className="mt-3 leading-7 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
