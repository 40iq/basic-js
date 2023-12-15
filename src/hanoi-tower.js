const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //  turns = 2(^n) - 1;
  //  speed = speed(turns per hours) = speed/3600(turns per sec);
  //  time = turns / speed; |seconds|

  const result = {};
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.floor((result.turns * 3600) / turnsSpeed);

  if (isNaN(result.seconds) || result.seconds < 0) {
    return null;
  }
  return result;
}

module.exports = {
  calculateHanoi,
};
