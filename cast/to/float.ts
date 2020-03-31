/**
 * Typecast variable to float
 * @name castToFloat
 * @param {*} variable
 * @param {*} [onFail=0] The return value in case of failure
 * @returns {Number}
 * @example castToFloat("16.5"); // => 16.5
 */
export default function castToFloat<D>(variable: any, onFail: D | number = 0): D | number {
  const type = typeof variable;
  if (type === "boolean") {
    return Number(variable);
  }
  if (type === "string") {
    const temporary = Number.parseFloat(variable);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(variable)) {
    return Number.parseFloat(variable);
  }
  return onFail;
}