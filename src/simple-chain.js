const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    let chainItem;
    value !== undefined ? (chainItem = value) : (chainItem = "");

    if (this.result.length === 0) {
      this.result.push(`( ${chainItem} )`);
      return this;
    }

    this.result.push(`( ${chainItem} )`);

    return this;
  },

  removeLink(position) {
    if (isNaN(position) || !this.result[position - 1]) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.result.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    const chainResult = this.result.join("~~");
    this.result = [];
    return chainResult;
  },
};

module.exports = {
  chainMaker,
};
