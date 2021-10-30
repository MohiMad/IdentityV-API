const { scrape, jsonify } = require("./static.js");
const BadgeData = require("./BadgeData.js");
const Data = require("./Data.js");


/**
 * DataParser is only adapted for type SKIN and ACCESSORY
 */
class DataParser {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.htmlBody;
    }

    async scrapeAndParseData() {
        this.htmlBody = await scrape(this.name).catch((e) => console.log(e));
        if (!this.htmlBody) return;
        const costumeImageLink = await this._getImage();

        if (!costumeImageLink) return;
        const { wearer, essence, description, price, rarity } = new BadgeData(this.type, this.htmlBody);

        return jsonify(
            new Data(
                200,
                this.name,
                wearer,
                essence,
                description,
                price,
                rarity,
                costumeImageLink
            ));
    }

    async _getImage() {
        const imgElement = this.__retreiveImgElement(this.htmlBody);

        if (!imgElement) return;
        const link = this.__matchURL(imgElement).replace(/\/revision.*\d+/, "");

        return link;
    }

    __matchURL(imgElement) {
        return imgElement.match(/(http|https)?:\/\/(\S+)(?=")/)[0];
    }

    __retreiveImgElement() {
        const match = this.htmlBody.match(/<img.*class="pi-image-thumbnail"/g);
        if (!match || match.length < 1) return;

        return match[0];
    }

}

module.exports = DataParser;