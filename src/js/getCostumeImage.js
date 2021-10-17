const got = require("got");
const { errorStatus } = require("./static.js");

function matchURL(imgElement) {
    return imgElement.match(/(http|https)?:\/\/(\S+)(?=")/g);
}

function retreiveImgElement(res) {
    const matches = res.match(/<img.*class="pi-image-thumbnail"/g);
    if (!matches || matches.length < 1) return null;

    return matches[0];
}

module.exports = async function getCostumeImage(image) {
    const link = `https://id5.fandom.com/wiki/${image}`;
    const response = await got(link).catch(e => console.log(e));

    if (!response) return errorStatus();

    const imgElement = retreiveImgElement(response.body);

    if (!imgElement) return errorStatus();

    return JSON.parse(
        `{"status": 200, "link": "${matchURL(imgElement)[0]}"}`);

}