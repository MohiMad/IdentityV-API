const DataParser = require("./DataParser.js");
const aliases = require("../aliases.json");
const Data = require("./Data.js");


class Portrait extends DataParser {
    constructor(query, name) {
        super(query);
        this.query = this.formatSeriesToMatchFandomQuery(query);
        this.name = name?.toLowerCase();
        this.link;
        this.DESCRIPTION_INDEX = 0;
        this.ESSENCE_INDEX = 2;
        this.PRICE_INDEX = 3;
        this.RARITY_INDEX = -1;
    }

    async main() {
        await this.scrapeData();
        if (!this.htmlBody) return;

        this.link = this._getPortrait();

        if (!this.link) return;
        if (!this.badgeChildren) return;

        const data = new Data(
            200,
            `${this.query} ${this.name}`,
            null,
            this.badgeChildren.at(this.ESSENCE_INDEX),
            this.badgeChildren.at(this.DESCRIPTION_INDEX),
            this.badgeChildren.at(this.PRICE_INDEX),
            this.badgeChildren.at(this.RARITY_INDEX),
            this.link
        );

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

    _getPortrait() {
        if (!this.htmlBody) return;

        const images = this.__getAllImages();
        const aliasesArrays = Object.values(aliases.characters);
        const aliasesKeys = Object.keys(aliases.characters);
        const index = aliasesArrays.findIndex((arr) => arr.includes(this.name));

        const portrait = images.find((image) => {
            image = image.toLowerCase();

            return image.includes(this.name) ||
                aliases.characters[this.name]?.some((alias) => image.includes(alias)) ||
                aliases.characters[aliasesKeys[index]]?.some((value) => image.includes(value));
        });

        if (!portrait) return;
        return portrait;
    }

    __getAllImages() {
        const IMAGES_REGEX = /https.+?\.(png|jpg)/g;
        return this.htmlBody?.match(IMAGES_REGEX);
    }
}

module.exports = Portrait;