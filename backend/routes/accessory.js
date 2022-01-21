const express = require("express");
const router = express.Router();
const Utility = require("../src/Utility.js");
const DataParser = require("../src/DataParser.js");

//TODO: Remove (duplicate)
router.get("/:name", async (req, res) => {
    const name = Utility.formatParam(req.params.name);

    const accessory = new DataParser(name);
    const accessoryDdata = (await accessory.scrapeData())?.jsonifyData();

    if (!accessoryDdata) return Utility.sendErrorMsg(res);
    res.send(accessoryDdata);
});

module.exports = router;