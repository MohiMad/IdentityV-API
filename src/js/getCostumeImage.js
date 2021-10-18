const got = require("got");
const { errorStatus, formatName } = require("./static.js");

function matchURL(imgElement) {
    return imgElement.match(/(http|https)?:\/\/(\S+)(?=")/)[0];
}

function retreiveImgElement(res) {
    const match = res.match(/<img.*class="pi-image-thumbnail"/g);
    if (!match || match.length < 1) return null;

    return match[0];
}

module.exports = async function getCostumeImage(name) {
    const URL = `https://id5.fandom.com/wiki/${name}`;
    const response = await got(URL).catch(() => null);

    if (!response) return errorStatus();

    const imgElement = retreiveImgElement(response.body);

    if (!imgElement) return errorStatus(`No image found in URL ${URL}`);
    const link = matchURL(imgElement).replace(/\/revision.*\d+/, "");

    return JSON.parse(
        `{"status": 200, "name": "${formatName(name)}", "link": "${link}"}`);

}