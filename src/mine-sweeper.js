const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = matrix.map((array) => array.map((item) => 0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          if (k === 0 && l === 0) {
            l++;
          }
          // if (i === 1 && j === 0) {
          //   console.log(
          //     matrix[i + k][j + l],
          //     i + k,
          //     j + l,
          //     "current checking elem = ",
          //     i,
          //     j
          //   );
          // }
          if (
            i + k >= 0 &&
            j + l >= 0 &&
            i + k < rows &&
            j + l < cols &&
            matrix[i + k][j + l]
          ) {
            result[i][j] += 1;
          }
        }
      }
    }
  }
  // console.log(result);
  return result;
}

// const a = [
//   [true, false, false, true, false],
//   [false, true, true, false, true],
//   [true, false, false, false, false],
//   [false, true, true, false, false],
//   [false, true, false, false, false],
//   [false, false, false, false, false],
// ];
// const a = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];

// minesweeper(a);

module.exports = {
  minesweeper,
};
