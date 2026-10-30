import { websiteScope } from "@/lib/site";

const withUs =
  "Website inquiries answered and followed up fast, and you approve what goes out.";

const rows = [
  {
    instead: "Voicemail",
    misses:
      "The caller gets a recording. Nobody answers, follows up, or books the job while you are on the tools.",
  },
  {
    instead: "An answering service",
    misses:
      "Someone may pick up, but the note still waits on you to follow up and book.",
  },
  {
    instead: "Hiring a front desk person",
    misses:
      "They cover the hours you staff. Nights, weekends, and days off still land on you.",
  },
  {
    instead: "Doing it yourself after hours",
    misses:
      "You get to it when the tools are down. Calls from the middle of the day sit until then.",
  },
] as const;

export function InsteadOf() {
  return (
    <section className="border-y border-cream/10 bg-ink" aria-labelledby="instead-title">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2
          id="instead-title"
          className="font-serif text-3xl tracking-tight sm:text-5xl"
        >
          Instead of...
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-cream/72">
          What shops do today, what that misses, and what you get here.
        </p>

        <div className="mt-8 hidden md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Instead of the usual ways a shop catches calls, what each misses, and what you get here.
            </caption>
            <thead>
              <tr className="border-b border-cream/15 text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                <th scope="col" className="w-[22%] py-3 pr-4 font-semibold">
                  Instead of
                </th>
                <th scope="col" className="w-[46%] py-3 pr-4 font-semibold">
                  What it misses
                </th>
                <th scope="col" className="py-3 font-semibold">
                  With us
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.instead} className="border-b border-cream/10 align-top">
                  <th scope="row" className="py-5 pr-4 font-serif text-xl font-normal text-cream">
                    {row.instead}
                  </th>
                  <td className="py-5 pr-6 leading-7 text-cream/75">{row.misses}</td>
                  <td className="py-5 leading-7 text-cream">{withUs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          {rows.map((row) => (
            <article key={row.instead} className="border border-cream/10 p-5">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                Instead of
              </h3>
              <p className="mt-2 font-serif text-2xl text-cream">{row.instead}</p>
              <h3 className="mt-4 text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                What it misses
              </h3>
              <p className="mt-2 leading-7 text-cream/75">{row.misses}</p>
              <h3 className="mt-4 text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                With us
              </h3>
              <p className="mt-2 leading-7 text-cream">{withUs}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl leading-7 text-cream/80">{websiteScope}</p>
      </div>
    </section>
  );
}
