const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  names.forEach((item) => {
    index = 1;
    if (!result.includes(item)) {
      result.push(item);
      // console.log("item: ", item, "current result: ", result);
      return;
    }

    if (result.includes(item) && !result.includes(`${item}(${index})`)) {
      result.push(`${item}(${index})`);
      // console.log("item: ", item, "current result: ", result);
    } else {
      while (result.includes(`${item}(${index})`)) {
        index += 1;
      }
      result.push(`${item}(${index})`);
    }
  });
  // console.log("result:   ", result);
  return result;
}
// let a = ["file", "file", "image", "file(1)", "file"];
// renameFiles(a);

module.exports = {
  renameFiles,
};
