import { wordlist } from './words';
import { randomInt } from 'crypto';

/**
 *  Generates a UUID based on dictionary of medical words
 *
 * @export
 * @param {Number} wordcount number of words to put in uuid. Wordlist is 93k so each additonal word increases uniqueness by ~93k times
 * @param {boolean} [appendNumber=false] whether or not to add a 4-digit number at the end to additonally increase uniqueness by 10k
 * @returns
 */
export function uuid(wordcount: Number = 2, appendNumber: boolean = false) {
  const wordArray = (Array(wordcount)).fill(0);
  const randomWords = wordArray.map(() => {
    const index = randomInt(wordlist.length);
    return wordlist[index];
  })
  if (appendNumber) {
    randomWords.push(randomInt(1000, 9999).toString());
  }
  return randomWords.join('-');
}
