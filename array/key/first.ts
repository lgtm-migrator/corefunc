/**
 * @name arrayKeyFirst
 * @param {Array} array
 * @returns {null|*}
 */
export default function arrayKeyFirst<T>(array: T[]): null | number {
  if (array.length) {
    return array.keys()[0];
  }
  return null;
}
