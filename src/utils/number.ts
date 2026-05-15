export function formatCurrency(amount?: number): string {
  if (!amount) return '0';
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

export function formatCompact(value: number): string {
  if (value >= 1_000_000) return `${+(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${+(value / 1_000).toFixed(1)}K`;
  return value.toLocaleString('en-US');
}
