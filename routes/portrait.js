const express = require("express");
const router = express.Router();
const Utility = require("../src/Utility.js");
const Portrait = require("../src/Portrait.js");



router.get("/:series/:name", async (req, res) => {
    const series = Utility.formatParam(req.params.series);
    const name = Utility.formatParam(req.params.name);
    const portrait = new Portrait(series, name);
    const data = await portrait.main();

    if (!data) return Utility.sendErrorMsg(res);

    res.send(data);
});

module.exports = router;