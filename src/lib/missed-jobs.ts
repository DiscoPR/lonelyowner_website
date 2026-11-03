/** yearly = missed per week x average job x 52; monthly = yearly / 12. */

function nonNegative(value: number): number {
  if (!Number.isFinite(value) || value < 0) return 0;
  return value;
}

export function parseShopNumber(raw: string): number {
  const cleaned = raw.replace(/[$,\s]/g, "");
  if (cleaned === "" || cleaned === ".") return 0;
  return nonNegative(Number(cleaned));
}

export function missedJobCost(missedPerWeek: number, averageJob: number) {
  const yearly = nonNegative(missedPerWeek) * nonNegative(averageJob) * 52;
  return { yearly, monthly: yearly / 12 };
}

/**
 * Monthly estimate for the free-audit calculator.
 * sharePercent is 0 to 100. Values above 100 are treated as 100.
 * Result = missed calls x (share / 100) x job value x 4.
 */
export function lostWorkPerMonth(
  missedPerWeek: number,
  sharePercent: number,
  averageJob: number,
): number {
  const missed = nonNegative(missedPerWeek);
  const share = Math.min(nonNegative(sharePercent), 100) / 100;
  const job = nonNegative(averageJob);
  return missed * share * job * 4;
}

export function formatDollars(amount: number): string {
  const safe = Number.isFinite(amount) ? amount : 0;
  const cents = Math.round((safe + Number.EPSILON) * 100);
  const whole = cents % 100 === 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  }).format(cents / 100);
}
