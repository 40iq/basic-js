const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    const array = string.toUpperCase().split("");
    let keyCopy = key.toUpperCase().split("");
    const result = [];
    let currentKeyItem = 0;
    for (let i = 0; i < array.length; i++) {
      if (!this.alphabet.includes(array[i])) {
        result.push(array[i]);
      } else {
        let currentKeyItemIndex = this.alphabet.indexOf(
          keyCopy[currentKeyItem]
        );
        let currentItemIndex = this.alphabet.indexOf(array[i]);
        const encodedItem =
          this.alphabet[(currentItemIndex + currentKeyItemIndex) % 26];
        currentKeyItem++;
        if (currentKeyItem === keyCopy.length) {
          currentKeyItem = 0;
        }
        // console.log(encodedItem, currentItemIndex, currentKeyItemIndex);
        result.push(encodedItem);
      }
    }
    if (this.modification) {
      return result.join("");
    }
    return result.reverse().join("");
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    const array = string.toUpperCase().split("");
    let keyCopy = key.toUpperCase().split("");
    const result = [];
    let currentKeyItem = 0;
    for (let i = 0; i < array.length; i++) {
      if (!this.alphabet.includes(array[i])) {
        result.push(array[i]);
      } else {
        let currentKeyItemIndex = this.alphabet.indexOf(
          keyCopy[currentKeyItem]
        );
        let currentItemIndex = this.alphabet.indexOf(array[i]);
        const encodedItem =
          this.alphabet[(26 + currentItemIndex - currentKeyItemIndex) % 26];
        currentKeyItem++;
        if (currentKeyItem === keyCopy.length) {
          currentKeyItem = 0;
        }
        // console.log(encodedItem, currentItemIndex, currentKeyItemIndex);
        result.push(encodedItem);
      }
    }
    if (this.modification) {
      return result.join("");
    }
    return result.reverse().join("");
  }
}

// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
// console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
// console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
// console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
// console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
module.exports = {
  VigenereCipheringMachine,
};
