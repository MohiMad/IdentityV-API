const express = require("express");
const router = express.Router();
const Utility = require("../src/Utility.js");
const Skin = require("../src/Skin.js");

router.get("/:name", async (req, res) => {
    const name = Utility.formatParam(req.params.name);

    const skin = new Skin(name);
    const skinDdata = (await skin.scrapeData())?.jsonifyData();

    if (!skinDdata) return Utility.sendErrorMsg(res);
    res.send(skinDdata);
});

module.exports = router;