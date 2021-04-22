/**
 * @category Is
 * @name isString
 * @description Checks if a given value is string.
 * @param {*} value
 * @returns {Boolean}
 */
export function isString(value: any): value is string {
  if (typeof value === "string") {
    return true;
  }
  return Object.prototype.toString.call(String(value)) === "[object String]";
}
