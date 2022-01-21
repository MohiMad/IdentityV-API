const express = require("express");
const router = express.Router();
const Utility = require("../src/Utility.js");
const Character = require("../src/Character.js");

router.get("/:name", async (req, res) => {
    const name = Utility.findPreferredAlias(req.params.name);

    const character = new Character(name);
    const characterDdata = await character.scrapeAndJsonifyData();

    if (!characterDdata) return Utility.sendErrorMsg(res);
    res.send(characterDdata);
});

module.exports = router;