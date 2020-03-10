import castToString from "../cast/to/string";
import numberRanged from "../number/ranged";
import stringClearReferences from "./clearReferences";
import stringCompare from "./compare";
import stringSimilarity from "./similarity";

/**
 * Finds degree of similarity between two strings using Sørensen–Dice coefficient
 * @param {string} alpha
 * @param {string} beta
 * @param {Number} [minRating=0.85]
 * @returns {boolean}
 */
export default function stringIsSimilar(alpha: string, beta: string, minRating = 0.85): boolean {
  const strFirst = castToString(alpha).normalize();
  const strSecond = castToString(beta).normalize();
  if (stringCompare(strFirst, strSecond, false) === true) {
    return true;
  }
  const numInputRating = numberRanged(minRating, 1, 0, 1, false);
  const numSimilarity = stringSimilarity(strFirst, strSecond);
  stringClearReferences(strFirst);
  stringClearReferences(strFirst);
  return numSimilarity >= numInputRating;
}
