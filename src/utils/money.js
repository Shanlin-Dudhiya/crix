// Rounds to 2 decimal places (cents/paise) the way currency should always
// be handled internally — prevents floating-point dust (e.g. 3998.9999999)
// from leaking into "is this fully paid?" comparisons.
export function round2(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}
