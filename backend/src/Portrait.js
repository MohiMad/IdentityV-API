const DataParser = require("./DataParser.js");
const staticData = require("../staticData.json");
const Data = require("./Data.js");

class Portrait extends DataParser {
    constructor(query, name) {
        super(query);
        this.query = this.formatSeriesToMatchFandomQuery(query);
        this.name = name?.toLowerCase();
    }

    async main() {
        await this.setHTMLBody();
        if (!this.HTMLBody) return;
        this.setLinkToPortrait();
        this.setBadgeChildren();
        if (!this.badgeChildren) return;

        const data = new Data()
            .setStatus(200)
            .setAdditionalProperties(this.badgeChildren)
            .setName(`${this.query} ${this.name}`)
            .setLink(this.link);

        return this.jsonifyData(data);
    }

    formatSeriesToMatchFandomQuery(query) {
        if (!query) return;

        if (!staticData.portraits[query]) {
            const portraitqueryAliases = Object.values(staticData.portraits);
            const validqueryFormats = Object.keys(staticData.portraits);

            const index = portraitqueryAliases.findIndex((queryAliases) => {
                return queryAliases.includes(query.toLowerCase());
            });

            return validqueryFormats[index];
        }

        return query;
    }

    setLinkToPortrait() {
        if (!this.HTMLBody) return;

        const images = this.getAllImagesInHTML_BODY();
        const characters = Object.assign(staticData.characters.survivors, staticData.characters.survivors);
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
}

module.exports = Portrait;