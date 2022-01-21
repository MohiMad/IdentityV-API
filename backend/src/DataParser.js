const { scrape, jsonify, removeTags } = require("./Utility.js");
const Data = require("./Data.js");
const Regex = require("./Regex.js");

class DataParser {
    constructor(query) {
        this.query = query;
    }

    async scrapeData() {
        await this.setHTMLBody();
        if (!this.HTMLBody) return;
        await this.setLink();
        if (!this.link) return;
        this.setBadgeChildren();

        return this;
    }

    async setHTMLBody(query = this.query) {
        this.HTMLBody = await scrape(query);
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
        const fieldValues = this.HTMLBody?.match(Regex.DIVS_WITH_CLASS_PI_DATA_VALUE_PI_FONT);
        const fieldKeys = this.HTMLBody?.match(Regex.H3_ELEMENTS_WITH_CLASS_PI_DATA_LABEL_PI_SECONDARY);
        
        if(!fieldKeys || !fieldValues) return;
        
        this.badgeChildren = {};
        fieldKeys.forEach((key, index) => {
            this.badgeChildren[this._sanitizeKey(key)] = removeTags(fieldValues[index]);
        });
    }

    _sanitizeKey(key) {
        return key.toLowerCase().replace(Regex.WORDS_CONNECTION_CHARACTERS, "_").replace(/\(.\)/g, "");
    }

    jsonifyData(data) {
        if (!this.badgeChildren) return;

        if (!data) {
            data = new Data()
                .setStatus(200)
                .setName(this.query)
                .setLink(this.link)
                .setAdditionalProperties(this.badgeChildren)
        }

        return jsonify(data);
    }

    getAllImagesInHTML_BODY() {
        return this.HTMLBody?.match(Regex.IMAGES);
    }
}

module.exports = DataParser;