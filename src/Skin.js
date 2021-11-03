const DataParser = require("./DataParser.js");

class Skin extends DataParser {
    constructor(name) {
        super(name);
        this.WEARER_INDEX = 0;
        this.RARITY_INDEX = 1;
        this.PRICE_INDEX = 3;
        this.DESCRIPTION_INDEX = -1;
        this.ESSENCE_INDEX = -2;
    }
}

module.exports = Skin;