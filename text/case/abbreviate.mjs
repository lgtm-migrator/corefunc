/**
 * @category Text Case
 * @name textCaseAbbreviate
 * @description Builds abbreviated string from given string.
 * @param {string} text
 * @param {number=1} abbrLettersCount
 * @returns {string}
 */
export function textCaseAbbreviate(text, abbrLettersCount = 1) {
  const words = text.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").split(" ");
  return words.reduce((res, word) => {
    res += word.substr(0, abbrLettersCount);
    return res;
  }, "");
}
