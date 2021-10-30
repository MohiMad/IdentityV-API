const express = require("express");
const router = express.Router();
const static = require("../src/static.js");
const DataParser = require("../src/DataParser.js");

router.get("/:name", async (req, res) => {
    const name = static.formatParam(req.params.name);

    const dataParser = new DataParser(name, "ACCESSORY");
    const data = await dataParser.scrapeAndParseData();

    if (!data) return static.throwError(res);
    res.send(data);
});

module.exports = router;