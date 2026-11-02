import { guarantee } from "@/lib/site";

export function Guarantee() {
  return (
    <section className="border-y border-cream/10 bg-ink" aria-labelledby="guarantee-title">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper">
          {guarantee.eyebrow}
        </p>
        <h2
          id="guarantee-title"
          className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl"
        >
          {guarantee.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-cream/75">{guarantee.body}</p>
      </div>
    </section>
  );
}
