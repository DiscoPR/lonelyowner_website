const steps = [
  "Your top leaks, ranked.",
  "Your biggest leak.",
  "The first fix.",
  "Pick a setup and we turn it on.",
] as const;

export function SampleReport() {
  return (
    <section className="border-b border-cream/10 bg-steel" aria-labelledby="sample-report-title">
      {/* TODO for Kevin: if every free audit includes phone screenshots, replace this strip with "Your site on a phone" and "Each leak circled". */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <h2
          id="sample-report-title"
          className="text-xs font-semibold tracking-[0.16em] text-copper uppercase"
        >
          Sample report. Not a real client.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-cream/70">
          This is the shape of the Free Job Leak Audit. It is not your shop.
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="border border-cream/10 bg-ink/40 p-4">
              <p className="font-serif text-sm tracking-[0.16em] text-copper">
                {index + 1}
              </p>
              <p className="mt-2 font-serif text-xl leading-7 text-cream">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
