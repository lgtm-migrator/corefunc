/**
 * @category Object Keys
 * @name objectKeysSort
 * @description Sort keys if can and return new object instance.
 * @summary ```import { objectKeysSort } from "@corefunc/corefunc/object/keys/sort";```
 * @param {Object} objectLike Object to be sorted.
 * @param {Boolean=} [isDeep=true] Deep sort.
 * @param {Number=} [depth=8] Depth.
 * @returns {Object} New object with sorted keys.
 */
export function objectKeysSort<ObjectType extends Record<number | string | symbol, unknown>>(
  objectLike: ObjectType,
  isDeep: boolean = true,
  depth: number = 8,
): ObjectType {
  if (!objectLike || typeof objectLike !== "object" || Array.isArray(objectLike)) {
    return objectLike;
  }
  const keys = Object.keys(objectLike).sort((alpha, beta) => alpha.localeCompare(beta));
  if (!keys.length) {
    return objectLike;
  }
  try {
    if (isDeep) {
      return keys.reduce((sorted, key) => {
        if (objectLike[key] && typeof objectLike[key] === "object" && !Array.isArray(objectLike[key])) {
          if (depth > 0) {
            sorted[key] = objectKeysSort(objectLike[key] as ObjectType, true, depth - 1);
          } else {
            sorted[key] = objectLike[key];
          }
        } else {
          sorted[key] = objectLike[key];
        }
        return sorted;
      }, Object.create(Object.getPrototypeOf(objectLike))) as ObjectType;
    } else {
      return keys.reduce((sorted, key) => {
        sorted[key] = objectLike[key];
      }, Object.create(Object.getPrototypeOf(objectLike))) as ObjectType;
    }
  } catch {
    return objectLike;
  }
}
