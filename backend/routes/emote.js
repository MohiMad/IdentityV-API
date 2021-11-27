const express = require("express");
const router = express.Router();
const Utility = require("../src/Utility.js");
const Emote = require("../src/Emote.js");

async function response(req, res) {
    const series = Utility.formatParam(req.params.series);
    const name = Utility.formatParam(req.params.name);

    const emote = new Emote(series, name);
    const data = await emote.scrapeAndJsonifyData();

    if (!data) return Utility.sendErrorMsg(res);

    res.send(data);
}

router.get("/:series", response);

router.get("/:series/:name", response);

module.exports = router;