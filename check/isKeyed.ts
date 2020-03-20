/**
 * @param {*} value
 * @return {boolean}
 */
export default function checkIsKeyed(value: any): boolean {
  return value instanceof Set || value instanceof Map;
}
