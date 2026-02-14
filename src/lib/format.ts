export function formatNumber(n: number): string {
  if (!Number.isFinite(n)) return '';
  // Keep it simple & locale-friendly
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 8 }).format(n);
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

