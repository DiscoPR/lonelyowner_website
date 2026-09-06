import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          How it works
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">
          Call. Audit. Build. You keep ownership.
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="border border-cream/10 p-6">
              <p className="font-serif text-sm tracking-[0.16em] text-copper">
                {step.n}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 leading-7 text-cream/72">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
