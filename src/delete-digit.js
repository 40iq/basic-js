const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let isTransformed = false;
  let numberArray = (n + "").split("");
  for (let i = 0; i < numberArray.length; i++) {
    if (Number(numberArray[i]) < numberArray[i + 1] && !isTransformed) {
      numberArray[i] = "";
      isTransformed = true;
    }
  }
  if (!isTransformed) {
    numberArray[numberArray.length - 1] = "";
  }
  return Number(numberArray.join(""));
}

module.exports = {
  deleteDigit,
};
