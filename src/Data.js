const { replaceUnderscoresWithSpace, removeTags, formatParam } = require("./Utility.js");

class Data {
    constructor(status, name, wearer, essence, description, price, rarity, link) {
        this.status = status || 0;
        this.name = replaceUnderscoresWithSpace(formatParam(name)) || "Unnamed";
        this.wearer = removeTags(wearer);
        this.essence = removeTags(essence);
        this.description = removeTags(description) || "None";
        this.price = removeTags(price) || "N/A";
        this.rarity = removeTags(rarity);
        this.link = link;
    }
}

module.exports = Data;