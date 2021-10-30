const { formatName, removeHTMLTags } = require("./static.js");

class Data {
    constructor(status, name, wearer, essence, description, price, rarity, link) {
        this.status = status;
        this.name = formatName(name);
        this.wearer = removeHTMLTags(wearer);
        this.essence = removeHTMLTags(essence);
        this.description = removeHTMLTags(description);
        this.price = price;
        this.rarity = rarity;
        this.link = link;
    }
}

module.exports = Data;