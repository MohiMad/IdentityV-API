const DataParser = require("./DataParser.js");
const aliases = require("../aliases.json");
const Data = require("./Data.js");
const Utility = require("./Utility.js");
const Regex = require("./Regex.js");

class Portrait extends DataParser {
    constructor(query, name) {
        super(query);
        this.query = this.formatSeriesToMatchFandomQuery(query);
        this.name = name?.toLowerCase();
        this.link;
        this.DESCRIPTION_INDEX = 0;
        this.ESSENCE_INDEX = 2;
        this.PRICE_INDEX = 3;
    }

    async main() {
        await this.setHTMLBody();
        if (!this.HTMLBody) return;
        this.setLinkToPortrait();
        if (!this.link) return;
        this.setBadgeChildren();
        if (!this.badgeChildren) return;

        const data = new Data()
            .setStatus(200)
            .setName(`${this.query} ${this.name}`)
            .setEssence(Utility.getValueAtIndex(this.badgeChildren, this.ESSENCE_INDEX))
            .setDescription(Utility.getValueAtIndex(this.badgeChildren, this.DESCRIPTION_INDEX))
            .setPrice(Utility.getValueAtIndex(this.badgeChildren, this.PRICE_INDEX))
            .setRarity(Utility.getValueAtIndex(this.badgeChildren, this.RARITY_INDEX))
            .setLink(this.link);

        return this.jsonifyData(data);
    }

    formatSeriesToMatchFandomQuery(query) {
        if (!query) return;

        if (!aliases.portraits[query]) {
            const portraitqueryAliases = Object.values(aliases.portraits);
            const validqueryFormats = Object.keys(aliases.portraits);

            const index = portraitqueryAliases.findIndex((queryAliases) => {
                return queryAliases.includes(query.toLowerCase());
            });

            return validqueryFormats[index];
        }

        return query;
    }

    setLinkToPortrait() {
        if (!this.HTMLBody) return;

        const images = this.__getAllImages();
        const characters = Object.assign(aliases.characters.survivors, aliases.characters.survivors);
        const aliasesArrays = Object.values(characters);
        const aliasesKeys = Object.keys(characters);
        const index = aliasesArrays.findIndex((arr) => arr.includes(this.name));

        const portrait = images.find((image) => {
            image = image.toLowerCase();

            return image.includes(this.name) ||
                characters[this.name]?.some((alias) => image.includes(alias)) ||
                characters[aliasesKeys[index]]?.some((value) => image.includes(value));
        });

        this.link = portrait;
    }

    __getAllImages() {
        return this.HTMLBody?.match(Regex.IMAGES);
    }
}

module.exports = Portrait;