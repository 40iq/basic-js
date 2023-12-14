const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let string1;
  let string2;
  if (s1.length > s2.length) {
    string1 = s1;
    string2 = s2;
  } else {
    string1 = s2;
    string2 = s1;
  }
  let result = 0;

  for (let i = 0; i < string1.length; i += 1) {
    if (string2.includes(string1[i])) {
      result += 1;

      if (string2.indexOf(string1[i]) === 0) {
        string2 = string2.slice(1, string2.length);
      } else if (string2.indexOf(string1[i]) === string2.length - 1) {
        string2 = string2.slice(0, string2.length - 1);
      } else {
        string2 =
          string2.slice(0, string2.indexOf(string1[i] - 1)) +
          string2.slice(string2.indexOf(string1[i]), string2.length);
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
