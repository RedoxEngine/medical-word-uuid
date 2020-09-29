// Generates an integer in [min, max) range where min is inclusive and max is
// exclusive.
const randomBytes = require('crypto').randomBytes;
const RAND_MAX = 0xFFFF_FFFF_FFFF;

export function randomInt(min: number, max?: number) {
  // Detect optional min syntax
  // randomInt(max)
  // randomInt(max, callback)

  if (!max) {
    max = min;
    min = 0;
  }


  // First we generate a random int between [0..range)

  const range = max - min;

  const excess = RAND_MAX % range;
  const randLimit = RAND_MAX - excess;

  // Sync API
  while (true) {
    const x = randomBytes(6).readUIntBE(0, 6);
    // If x > (maxVal - (maxVal % range)), we will get "modulo bias"
    if (x > randLimit) {
      // Try again
      continue;
    }
    const n = (x % range) + min;
    return n;
  }
}
