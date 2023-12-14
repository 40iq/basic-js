const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const optionsExpressed = {};
  optionsExpressed.repeatTimes = options.repeatTimes || 1;
  optionsExpressed.separator = options.separator || "+";
  optionsExpressed.addition = options.addition;
  optionsExpressed.additionRepeatTimes = options.additionRepeatTimes || 1;
  optionsExpressed.additionSeparator = options.additionSeparator || "|";
  if (options.addition === undefined) {
    optionsExpressed.addition = "";
  }

  let result = "";

  for (let i = 0; i < optionsExpressed.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < optionsExpressed.additionRepeatTimes; j++) {
      result += optionsExpressed.addition;
      if (j + 1 < optionsExpressed.additionRepeatTimes) {
        result += optionsExpressed.additionSeparator;
      }
    }
    if (i + 1 < optionsExpressed.repeatTimes) {
      result += optionsExpressed.separator;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
