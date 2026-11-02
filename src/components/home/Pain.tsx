import { pain } from "@/lib/site";

export function Pain() {
  return (
    <section className="paper-grid text-ink" aria-labelledby="pain-title">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2
          id="pain-title"
          className="max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl"
        >
          {pain.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">{pain.body}</p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2">
          {pain.points.map((point) => (
            <li key={point.n} className="border border-ink/10 bg-cream p-6">
              <p className="font-serif text-sm tracking-[0.16em] text-copper">
                {point.n}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{point.title}</h3>
              <p className="mt-3 leading-7 text-ink-soft">{point.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
