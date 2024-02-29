/*
 * THIS IS AN ANTI-PATTERN; DO NOT USE THIS FILE ANYWHERE ELSE!
 */

export function pickRandom<T = unknown>(arr: Array<T>, count = 1) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
