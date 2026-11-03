"use client";

import { useId, useState } from "react";
import { freeAudit } from "@/lib/free-audit";
import { formatDollars, lostWorkPerMonth, parseShopNumber } from "@/lib/missed-jobs";

function keepAmount(value: string): string {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const [whole, ...rest] = cleaned.split(".");
  const dollars = (whole ?? "").slice(0, 7);
  if (rest.length === 0) return dollars;
  return `${dollars}.${rest.join("").slice(0, 2)}`;
}

function keepPercent(value: string): string {
  const cleaned = keepAmount(value);
  if (cleaned === "" || cleaned === ".") return cleaned;
  const amount = Number(cleaned);
  if (!Number.isFinite(amount)) return "";
  if (amount > 100) return "100";
  return cleaned;
}

function isComplete(value: string): boolean {
  if (value.trim() === "" || value === ".") return false;
  return Number.isFinite(parseShopNumber(value));
}

const fieldClass =
  "min-h-12 w-full min-w-0 bg-transparent px-3 py-3 text-lg text-cream tabular-nums outline-none";

export function MissedJobsCalculator() {
  const baseId = useId();
  const missedId = `${baseId}-missed`;
  const shareId = `${baseId}-share`;
  const jobId = `${baseId}-job`;
  const shareHintId = `${baseId}-share-hint`;
  const jobHintId = `${baseId}-job-hint`;
  const noteId = `${baseId}-note`;
  const formulaId = `${baseId}-formula`;
  const [missed, setMissed] = useState("");
  const [share, setShare] = useState("");
  const [job, setJob] = useState("");

  const complete = isComplete(missed) && isComplete(share) && isComplete(job);
  const monthly = complete
    ? lostWorkPerMonth(
        parseShopNumber(missed),
        parseShopNumber(share),
        parseShopNumber(job),
      )
    : null;
  const monthlyLabel = monthly === null ? null : formatDollars(monthly);

  return (
    <div className="mt-10">
      <fieldset className="w-full min-w-0 border-0 p-0">
        <legend className="sr-only">{freeAudit.mathTitle}</legend>
        <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label htmlFor={missedId} className="block text-sm font-semibold text-cream">
            {freeAudit.missedLabel}
          </label>
          <div className="mt-2 rounded-sm border border-cream/25 bg-ink focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-copper-hot">
            <input
              id={missedId}
              inputMode="decimal"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              value={missed}
              onChange={(event) => setMissed(keepAmount(event.target.value))}
              className={fieldClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor={shareId} className="block text-sm font-semibold text-cream">
            {freeAudit.shareLabel}
            <span className="sr-only">, percent</span>
          </label>
          <div className="mt-2 flex items-center rounded-sm border border-cream/25 bg-ink focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-copper-hot">
            <input
              id={shareId}
              inputMode="decimal"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-describedby={shareHintId}
              value={share}
              onChange={(event) => setShare(keepPercent(event.target.value))}
              className={fieldClass}
            />
            <span aria-hidden="true" className="pr-3 text-cream/70">
              %
            </span>
          </div>
          <p id={shareHintId} className="mt-2 text-sm leading-6 text-muted">
            Percent, from 0 to 100.
          </p>
        </div>
        <div>
          <label htmlFor={jobId} className="block text-sm font-semibold text-cream">
            {freeAudit.jobLabel}
            <span className="sr-only">, dollars</span>
          </label>
          <div className="mt-2 flex items-center rounded-sm border border-cream/25 bg-ink focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-copper-hot">
            <span aria-hidden="true" className="pl-3 text-cream/70">
              $
            </span>
            <input
              id={jobId}
              inputMode="decimal"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-describedby={jobHintId}
              value={job}
              onChange={(event) => setJob(keepAmount(event.target.value))}
              className={fieldClass}
            />
          </div>
          <p id={jobHintId} className="sr-only">
            Dollars.
          </p>
        </div>
        </div>
      </fieldset>

      <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
        <output
          htmlFor={`${missedId} ${shareId} ${jobId}`}
          aria-live="polite"
          aria-atomic="true"
          aria-describedby={`${formulaId} ${noteId}`}
          className="block bg-cream p-6 text-ink sm:p-8"
        >
          <span className="block text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            {freeAudit.resultLabel}
          </span>
          {monthlyLabel ? (
            <span className="mt-3 block font-serif text-5xl tracking-tight break-words tabular-nums sm:text-6xl">
              {monthlyLabel}
            </span>
          ) : (
            <span className="mt-3 block max-w-sm text-lg leading-8 text-ink-soft">
              {freeAudit.emptyResult}
            </span>
          )}
          <span className="mt-4 block text-sm leading-6 text-ink-soft">
            {freeAudit.estimateNote}
          </span>
        </output>

        <div className="border border-cream/10 p-6 sm:p-8">
          <h3 className="font-serif text-2xl">{freeAudit.pricesHeading}</h3>
          <dl className="mt-4 space-y-4">
            {freeAudit.prices.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-4">
                <dt className="leading-6 text-cream/80">{item.name}</dt>
                <dd className="shrink-0 font-serif text-2xl tabular-nums">{item.price}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-8 max-w-3xl space-y-3 leading-7 text-cream/75">
        <p id={formulaId}>{freeAudit.formula}</p>
        <p>{freeAudit.compare}</p>
        <p id={noteId}>{freeAudit.caption}</p>
      </div>
    </div>
  );
}
