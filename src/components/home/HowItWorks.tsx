import { howItWorks } from "@/lib/site";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-cream/10 bg-shop"
      aria-labelledby="how-title"
    >
      <div id="start" className="scroll-mt-20" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2
          id="how-title"
          className="max-w-3xl font-serif text-3xl tracking-tight text-cream sm:text-5xl"
        >
          {howItWorks.title}
        </h2>
        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <li key={step.n} className="border border-cream/15 bg-ink p-6">
              <p className="font-serif text-sm tracking-[0.16em] text-copper">{step.n}</p>
              <h3 className="mt-3 text-balance font-serif text-2xl text-cream">{step.title}</h3>
              <p className="mt-3 leading-7 text-cream/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
