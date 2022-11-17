export function percent(num: number, afterDot: number = 2): string {
  const zero = 0;
  return Number.isNaN(num)
    ? `${zero.toFixed(afterDot)}%`
    : `${(num * 100).toFixed(afterDot)}%`;
}
