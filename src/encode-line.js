const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split("");
  let result = "";
  let index = 1;
  for (let i = 0; i < arr.length; i += 1) {
    console.log(index, arr[i], result);
    if (arr[i] === arr[i + 1]) {
      index += 1;
    } else {
      if (index === 1) {
        result += arr[i];
      } else if (!arr[i + 1]) {
        result += `${index}${arr[i]}`;
      } else {
        result += `${index}${arr[i]}`;
        index = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
