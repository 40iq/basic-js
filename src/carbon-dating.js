const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

/*                       _
    k = 0,693 / t(1/2)    \
                           |  ---> T = ln(No / N) * t(1/2) / 0.693
    T = ln(No / N) / k    /
                        ¯¯

    in this equation:         No === const MODERN_ACTIVITY;
                              N = sampleActivity                  -   because it's under the log expression we need
                                                                                               to check if this value positive,
                                                                                                      not equal 0, it's correct type (not string etc.)
                                                                                                            and if N > No
                                                                                                                                    
                              t(1/2) === const HALF_LIFE_PERIOD;
                              T - the return value we need aswell check if it's positive
*/
function dateSample(sampleActivity) {
  const calculatedSampleActivity = Number(sampleActivity);
  if (
    isNaN(calculatedSampleActivity) ||
    typeof sampleActivity !== "string" ||
    sampleActivity <= 0 ||
    calculatedSampleActivity > MODERN_ACTIVITY
  ) {
    return false;
  }

  let result =
    (Math.log(MODERN_ACTIVITY / calculatedSampleActivity) * HALF_LIFE_PERIOD) /
    0.693;
  result >= 0 ? (result = Math.ceil(result)) : (result = false);
  return result;
}

module.exports = {
  dateSample,
};
