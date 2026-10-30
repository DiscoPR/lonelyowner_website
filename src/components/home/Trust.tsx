export function Trust() {
  return (
    <section className="border-y border-cream/10 bg-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Before it goes out
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
          You approve every message before it goes to a customer.
        </h2>
        <div className="mt-8 flex items-center gap-4">
          {/* TODO for Kevin: put your headshot in this slot. Leave it empty until a real photo is in the repo. Do not use a stand-in image. */}
          <div
            aria-hidden="true"
            className="h-16 w-16 shrink-0 border border-cream/25 bg-shop"
          />
          <p className="text-lg leading-8 text-cream/75">
            Kevin, based in Fort Lauderdale.
          </p>
        </div>
        {/*
          Future client quote. Leave this empty until a real client gives one.
          Do not invent a name, a trade, or a result.
          <figure>
            <blockquote><p></p></blockquote>
            <figcaption></figcaption>
          </figure>
        */}
        {/*
          Future guarantee line. Do not show a guarantee until Kevin writes one.
          <p></p>
        */}
      </div>
    </section>
  );
}
