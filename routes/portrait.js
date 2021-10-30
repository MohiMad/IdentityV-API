const express = require("express");
const router = express.Router();
const static = require("../src/static.js");
const BadgeData = require("../src/BadgeData.js");
const Data = require("../src/Data.js");
const aliases = require("../aliases.json");

function formatSeriesToMatchFandomQuery(series) {
    if (!aliases.portraits[series]) {
        const portraitCategories = Object.values(aliases.portraits);

        for (portraitCategory of portraitCategories) {
            if (portraitCategory.includes(series.toLowerCase()))
                return Object.keys(aliases.portraits)[portraitCategories.indexOf(portraitCategory)];
        }
    }

    return series;
}

router.get("/:series/:name", async (req, res) => {
    const series = formatSeriesToMatchFandomQuery(static.formatParam(req.params.series));
    const name = static.formatParam(req.params.name).toLowerCase();

    const htmlBody = await static.scrape(series);

    if (!htmlBody) return static.throwError(res);

    const images = htmlBody.match(/https.+?\.png/g);

    const portrait = images.find((image) => {
        const characterAliases = aliases.characters;
        const characterArrays = Object.values(characterAliases);
        const index = characterArrays.indexOf(characterArrays.find((array) => array.includes(name)));
        const imageLink = image.toLowerCase();

        if (imageLink.includes(name)) return image;
        else if (characterAliases[name]?.some((value) => imageLink.includes(value))) return image;
        else if (characterAliases[Object.keys(characterAliases)[index]]?.some((value) => imageLink.includes(value))) return image;
    });

    if (!portrait) return static.throwError(res);

    const { essence, desription, price, rarity } = new BadgeData("PORTRAIT", htmlBody);

    const data = static.jsonify(new Data(
        200,
        `${series} ${name}`,
        null,
        essence,
        desription,
        price,
        rarity,
        portrait));

    res.send(data);
});

module.exports = router;