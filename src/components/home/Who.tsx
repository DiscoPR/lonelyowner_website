import { whoItIsFor } from "@/lib/site";

export function Who() {
  return (
    <section id="who" className="paper-grid text-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-serif text-3xl tracking-tight sm:text-5xl">
          Who it is for
        </h2>
        <p className="mt-6 text-lg leading-8 text-ink-soft">{whoItIsFor}</p>
      </div>
    </section>
  );
}
