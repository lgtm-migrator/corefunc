/**
 * Generate random string from latin characters and numbers
 * @param {Number} size
 * @param {String} possible
 * @return {String}
 */
module.exports = function generateString(
  size,
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
) {
  let index = 0;
  let text = "";
  for (index; index < size; index++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};