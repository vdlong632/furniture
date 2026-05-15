/** Matches clinic `quoteDuration` / Settings “Default Screening Quote Duration”. */
export const DEFAULT_SCREENING_QUOTE_DAYS = 30;

export function screeningQuoteDays(clinic?: { quoteDuration?: number | null } | null): number {
  const n = clinic?.quoteDuration;
  if (n != null && Number.isFinite(Number(n)) && Number(n) > 0) {
    return Math.floor(Number(n));
  }
  return DEFAULT_SCREENING_QUOTE_DAYS;
}

export function offerValidLabel(clinic?: { quoteDuration?: number | null } | null): string {
  const d = screeningQuoteDays(clinic);
  return `Offer valid ${d} day${d === 1 ? '' : 's'}.`;
}
