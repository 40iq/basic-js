const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: "",

  getLength() {
    return this.result.split("~~").length;
  },

  addLink(value) {
    let chainItem;
    value ? (chainItem = value) : (chainItem = "");

    if (this.result === "") {
      this.result = `( ${chainItem} )`;
      return this;
    }

    this.result += `~~( ${chainItem} )`;

    return this;
  },

  removeLink(position) {
    if (
      isNaN(position) ||
      position < 1 ||
      position > this.result.split("~~").length
    ) {
      throw new Error("You can't remove incorrect link!");
    }

    this.result = this.result
      .split("~~")
      .map((item, index) => {
        if (index === position - 1) {
          return "";
        }
        return item;
      })
      .filter((item) => item.length > 0)
      .join("~~");

    return this;
  },

  reverseChain() {
    this.result = this.result.split("~~").reverse().join("~~");
    return this;
  },

  finishChain() {
    const chainResult = this.result;
    this.result = "";
    return chainResult;
  },
};

module.exports = {
  chainMaker,
};
