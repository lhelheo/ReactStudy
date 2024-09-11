export function formatToPercentage(
  number: number | undefined,
  digits: number = 2,
): string {
  if (!number) return "0.00%";
  const percentage = number * 100;
  return `${percentage.toFixed(digits)}%`;
}
