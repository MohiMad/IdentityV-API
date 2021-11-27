require("regenerator-runtime/runtime");
const DataParser = require("./DataParser.js");

class Accessory extends DataParser {
    constructor(name) {
        super(name);
        this.DESCRIPTION_INDEX = 0;
        this.WEARER_INDEX = 1;
        this.PRICE_INDEX = -1;
    }
}

module.exports = Accessory;