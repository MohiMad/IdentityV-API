const got = require("got");
const { formatName } = require("./static.js");


class DataParser {
    constructor(name) {
        this.name = name;
        this.URL = `https://id5.fandom.com/wiki/${this.name}`;
        this.htmlBody;
    }

    async scrapeAndParseData() {
        this.htmlBody = await this._retrieveData().catch((e) => console.log(e));
        if (!this.htmlBody) return;

        const costumeImageLink = await this._getCostumeImage();
        const costumeDescription = this._getCostumeDescription();

        if (!costumeImageLink || !costumeDescription) return;

        return JSON.parse(
            `{
                "status": 200, 
                "name": "${formatName(this.name)}", 
                "description": "${costumeDescription}", 
                "link": "${costumeImageLink}"
            }`);
    }

    async _retrieveData() {
        const response = await got(this.URL).catch(() => null);
        if (!response) return;

        return response.body;
    }

    _getCostumeDescription() {
        const allOccurrences = this.htmlBody.match(/(?<=class="pi-data-value pi-font">).+?(?=<\/div>)/g);
        //Last occurance is the div containing the desription inside the badge
        const description = allOccurrences[allOccurrences.length - 1].replace(/(<a.+?>|<\/a>)/g, "");

        return description;
    }

    async _getCostumeImage() {
        const imgElement = this._retreiveImgElement(this.htmlBody);

        if (!imgElement) return;
        const link = this._matchURL(imgElement).replace(/\/revision.*\d+/, "");

        return link;
    }

    _matchURL(imgElement) {
        return imgElement.match(/(http|https)?:\/\/(\S+)(?=")/)[0];
    }

    _retreiveImgElement() {
        const match = this.htmlBody.match(/<img.*class="pi-image-thumbnail"/g);
        if (!match || match.length < 1) return null;

        return match[0];
    }

}

module.exports = DataParser;