import { problems } from "@/lib/site";

export function Problem() {
  return (
    <section id="problem" className="paper-grid text-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          The leak
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
          The shop is busy. The office is still you.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
          Blue-collar work does not pause because you are on a ladder. The
          customer who cannot reach you books the next truck. That is not a
          software problem. That is a shop problem.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {problems.map((item) => (
            <article
              key={item.title}
              className="border border-ink/10 bg-cream/70 p-6 shadow-[0_1px_0_rgba(17,15,12,0.04)]"
            >
              <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
