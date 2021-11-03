require("regenerator-runtime/runtime");
const DataParser = require("./DataParser.js");

class Accessory extends DataParser {
    constructor(name) {
        super(name);
        this.DESCRIPTION_INDEX = 0;
        this.WEARER_INDEX = 1;
        this.PRICE_INDEX = -1;
        this.RARITY_INDEX;
        this.ESSENCE_INDEX;
    }

    setChangingIndexProperties() {
        if(!this.badgeChildren) return;

        this.RARITY_INDEX = this.badgeChildren.indexOf(this.badgeChildren.find(value => value.includes("Tier")));
        this.ESSENCE_INDEX = this.badgeChildren.indexOf(this.badgeChildren.find(value => /crossover|essence/i.test(value)));
        return this;
    }
}

module.exports = Accessory;