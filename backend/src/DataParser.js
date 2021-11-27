const { scrape, jsonify, getValueAtIndex, findLastIndex } = require("./Utility.js");
const Data = require("./Data.js");
const Regex = require("./Regex.js");

class DataParser {
    constructor(query) {
        this.query = query;
        this.HTMLBody;
        this.badgeChildren;
        this.link;

        this.WEARER_INDEX;
        this.RARITY_INDEX;
        this.ESSENCE_INDEX;
        this.PRICE_INDEX;
        this.DESCRIPTION_INDEX;
    }

    async scrapeData() {
        await this.setHTMLBody();
        if (!this.HTMLBody) return;
        await this.setLink();
        if (!this.link) return;
        this.setBadgeChildren();
        this.setChangingIndexProperties();

        return this;
    }

    async setHTMLBody(query = this.query) {
        this.HTMLBody = await scrape(query);
    }

    setChangingIndexProperties() {
        this.RARITY_INDEX = this.badgeChildren?.findIndex((value) => /tier/i.test(value));
        this.ESSENCE_INDEX = findLastIndex(this.badgeChildren, (value) => /crossover|essence|season|treasure|spheres/i.test(value));
    }

    async setLink() {
        const imgElement = this._retreiveImgElement();

        if (!imgElement) return;

        this.link = imgElement.match(Regex.IMAGE)?.[0];
    }

    _retreiveImgElement() {
        const match = this.HTMLBody?.match(Regex.IMG_ELEMENT_WITH_CLASS_PI_IMAGE_THUMBNAIL);

        return match?.[0];
    }

    setBadgeChildren() {
        this.badgeChildren = this.HTMLBody?.match(Regex.DIVS_WITH_CLASS_PI_DATA_VALUE_PI_FONT);
    }

    jsonifyData(data) {
        if (!this.badgeChildren) return;

        if (!data) {
            data = new Data()
                .setStatus(200)
                .setName(this.query)
                .setWearer(getValueAtIndex(this.badgeChildren, this.WEARER_INDEX))
                .setEssence(getValueAtIndex(this.badgeChildren, this.ESSENCE_INDEX))
                .setDescription(getValueAtIndex(this.badgeChildren, this.DESCRIPTION_INDEX))
                .setPrice(getValueAtIndex(this.badgeChildren, this.PRICE_INDEX))
                .setRarity(getValueAtIndex(this.badgeChildren, this.RARITY_INDEX))
                .setLink(this.link);
        }

        return jsonify(data);
    }
}

module.exports = DataParser;