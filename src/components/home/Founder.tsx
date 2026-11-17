import { founder } from "@/lib/site";

export function Founder() {
  return (
    <section className="paper-grid text-ink" aria-labelledby="founder-title">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="founder-title"
          className="font-serif text-3xl tracking-tight sm:text-5xl"
        >
          {founder.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-ink-soft">{founder.body}</p>
      </div>
    </section>
  );
}
