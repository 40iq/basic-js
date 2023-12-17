const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";
  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const elementToDelete = "deleteThisElement!!!";
  const result = arr.map((item) => item);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === doubleNext) {
      if (
        arr[i + 1] !== discardNext &&
        arr[i + 1] !== discardPrev &&
        arr[i + 1] !== doubleNext &&
        arr[i + 1] !== discardPrev &&
        i + 1 < arr.length
      ) {
        result[i] = arr[i + 1];
      } else {
        result[i] = elementToDelete;
      }
    } else if (arr[i] === doublePrev) {
      if (
        arr[i - 1] !== discardNext &&
        arr[i - 1] !== discardPrev &&
        arr[i - 1] !== doubleNext &&
        arr[i - 1] !== discardPrev &&
        i - 1 >= 0 &&
        result[i - 1] !== elementToDelete
      ) {
        result[i] = arr[i - 1];
      } else {
        result[i] = elementToDelete;
      }
    } else if (arr[i] === discardNext) {
      if (
        i + 1 < arr.length &&
        arr[i + 1] !== doubleNext &&
        arr[i + 1] !== doublePrev &&
        arr[i + 1] !== discardNext &&
        arr[i + 1] !== discardPrev
      ) {
        result[i + 1] = elementToDelete;
      }
      result[i] = elementToDelete;
      // console.log(result[i], i);
    } else if (arr[i] === discardPrev) {
      if (
        i - 1 >= 0 &&
        arr[i - 1] !== doubleNext &&
        arr[i - 1] !== doublePrev &&
        arr[i - 1] !== discardNext &&
        arr[i - 1] !== discardPrev
      ) {
        result[i - 1] = elementToDelete;
      }
      result[i] = elementToDelete;
    }
  }
  // console.log(result);
  return result.filter((item) => item !== elementToDelete);
}

// console.log(
//   transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
// );

module.exports = {
  transform,
};
