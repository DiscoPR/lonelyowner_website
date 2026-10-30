const lines = [
  "The phone rings while you're on a roof.",
  "A quote request sits in your inbox until Monday.",
  "You text customers back at 9 PM.",
] as const;

export function Pain() {
  return (
    <section className="paper-grid text-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Where jobs slip away
        </h2>
        <ul className="mt-8 space-y-6">
          {lines.map((line) => (
            <li key={line} className="font-serif text-3xl leading-tight sm:text-4xl">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
