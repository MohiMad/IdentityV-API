const { replaceUnderscoresWithSpace, removeTags, formatParam } = require("./Utility.js");

class Data {
    constructor() {
        this.status = 0;
        this.name = "Unnamed";
    }

    setStatus(status) {
        this.status = status;
        return this;
    }

    setName(name) {
        this.name = replaceUnderscoresWithSpace(formatParam(name));
        return this;
    }

    setWearer(wearer) {
        this.wearer = removeTags(wearer);
        return this;
    }

    setEssence(essence) {
        this.essence = removeTags(essence);
        return this;
    }

    setDescription(description) {
        this.description = removeTags(description);
        return this;
    }

    setPrice(price) {
        this.price = removeTags(price);
        return this;
    }

    setRarity(rarity) {
        this.rarity = removeTags(rarity);
        return this;
    }

    setLink(link) {
        this.link = link;
        return this;
    }

    setAdditionalProperties(object) {
        if(typeof object != "object") return;

        for (const [key, value] of Object.entries(object)) {
            this[key] = value;
        }

        return this;
    }
}

module.exports = Data;