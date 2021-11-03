const { scrape, jsonify, defineAtFunctionForArray } = require("./Utility.js");
const Data = require("./Data.js");

class DataParser {
    constructor(query) {
        this.query = query;
        this.htmlBody;
        this.badgeChildren;
        this.link;

        this.WEARER_INDEX;
        this.RARITY_INDEX;
        this.ESSENCE_INDEX;
        this.PRICE_INDEX;
        this.DESCRIPTION_INDEX;
        defineAtFunctionForArray();
    }

    async scrapeData() {
        this.htmlBody = await scrape(this.query).catch((e) => console.log(e));

        if (!this.htmlBody) return;
        this.link = await this._getImage();
        if (!this.link) return;

        this.badgeChildren = this._getBadgeChildren();

        return this;
    }

    async _getImage() {
        const LINK_REGEX = /(http|https)?:\/\/(\S+?)\.(png|jpg)/i;
        const imgElement = this.__retreiveImgElement(this.htmlBody);

        if (!imgElement) return;
        const link = imgElement.match(LINK_REGEX)?.[0];

        return link;
    }

    __retreiveImgElement() {
        const IMG_ELEMENT_REGEX = /<img.*class="pi-image-thumbnail"/;
        const match = this.htmlBody?.match(IMG_ELEMENT_REGEX);

        return match?.[0];
    }

    _getBadgeChildren() {
        const ALL_ELEMENTS_WITH_CLASS_PI_DATA_VALUE_REGEX = /(?<=class="pi-data-value pi-font">).+?(?=<\/div>)/g;
        return this.htmlBody?.match(ALL_ELEMENTS_WITH_CLASS_PI_DATA_VALUE_REGEX);
    }

    jsonifyData(data) {
        if (!this.badgeChildren) return;

        if (!data) {
            data = new Data(
                200,
                this.query,
                this.badgeChildren.at(this.WEARER_INDEX),
                this.badgeChildren.at(this.ESSENCE_INDEX),
                this.badgeChildren.at(this.DESCRIPTION_INDEX),
                this.badgeChildren.at(this.PRICE_INDEX),
                this.badgeChildren.at(this.RARITY_INDEX),
                this.link
            );
        }

        return jsonify(data);
    }
}

module.exports = DataParser;