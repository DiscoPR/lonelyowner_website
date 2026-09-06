import { trades } from "@/lib/site";

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="border-y border-cream/10 bg-shop">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Who we help
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
          Blue-collar organizations run by an owner who still answers the phone.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/72">
          If the board, the bid, and the after-hours line still sit on one
          person, you are the shop we built this for. Crews welcome. Corporate
          procurement theater is not.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((trade) => (
            <article key={trade.name} className="border border-cream/10 bg-ink/40 p-6">
              <h3 className="font-serif text-2xl text-cream">{trade.name}</h3>
              <p className="mt-3 leading-7 text-muted">{trade.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
