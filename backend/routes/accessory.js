const express = require("express");
const router = express.Router();
const Utility = require("../src/Utility.js");
const Accessory = require("../src/Accessory.js");

router.get("/:name", async (req, res) => {
    const name = Utility.formatParam(req.params.name);

    const accessory = new Accessory(name);
    await accessory.scrapeData();
    
    const data = accessory.jsonifyData();

    if (!data) return Utility.sendErrorMsg(res);
    res.send(data);
});

module.exports = router;