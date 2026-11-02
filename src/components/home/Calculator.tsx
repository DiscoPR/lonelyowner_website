"use client";

import { useId, useState } from "react";
import { formatDollars, missedJobCost, parseShopNumber } from "@/lib/missed-jobs";
import { missedJobsCopy } from "@/lib/site";

function keepAmount(value: string): string {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const [whole, ...rest] = cleaned.split(".");
  const dollars = (whole ?? "").slice(0, 7);
  if (rest.length === 0) return dollars;
  return `${dollars}.${rest.join("").slice(0, 2)}`;
}

export function Calculator() {
  const baseId = useId();
  const missedId = `${baseId}-missed`;
  const jobId = `${baseId}-job`;
  const [missed, setMissed] = useState("2");
  const [job, setJob] = useState("450");
  const cost = missedJobCost(parseShopNumber(missed), parseShopNumber(job));
  const yearly = formatDollars(cost.yearly);
  const monthly = formatDollars(cost.monthly);

  return (
    <section className="border-y border-cream/10 bg-shop" aria-labelledby="missed-jobs-title">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper">
          {missedJobsCopy.eyebrow}
        </p>
        <h2
          id="missed-jobs-title"
          className="mt-3 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl"
        >
          {missedJobsCopy.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/75">
          {missedJobsCopy.body}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <label htmlFor={missedId} className="block text-sm font-semibold text-cream">
                {missedJobsCopy.missedLabel}
              </label>
              <input
                id={missedId}
                inputMode="decimal"
                autoComplete="off"
                value={missed}
                onChange={(event) => setMissed(keepAmount(event.target.value))}
                className="mt-2 w-full rounded-sm border border-cream/25 bg-ink px-3 py-3 text-lg text-cream tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-hot"
              />
            </div>
            <div>
              <label htmlFor={jobId} className="block text-sm font-semibold text-cream">
                {missedJobsCopy.jobLabel}
              </label>
              <input
                id={jobId}
                inputMode="decimal"
                autoComplete="off"
                value={job}
                onChange={(event) => setJob(keepAmount(event.target.value))}
                className="mt-2 w-full rounded-sm border border-cream/25 bg-ink px-3 py-3 text-lg text-cream tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-hot"
              />
            </div>
          </div>

          <div
            className="bg-cream p-6 text-ink sm:p-8"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-copper">
              {missedJobsCopy.resultLabel}
            </p>
            <p className="mt-3 font-serif text-5xl tracking-tight break-words tabular-nums sm:text-6xl">
              {yearly}
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-soft">
              That&apos;s {monthly} {missedJobsCopy.monthlyTail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
