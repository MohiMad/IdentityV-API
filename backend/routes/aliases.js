const express = require("express");
const router = express.Router();
const staticData = require("../staticData.json");
const Utility = require("../src/Utility.js");

Object.keys(staticData.characters).forEach((subCategory) => {
    router.get(`/${subCategory}`, (req, res) => res.send(staticData.characters[subCategory]));

    router.get(`/${subCategory}/:name`, (req, res) => {
        const name = Utility.findPreferredAlias(req.params.name);

        const data = staticData.characters[subCategory]?.[name];

        if (!data) return Utility.sendErrorMsg(res);

        res.send(data);
    });
});

router.get("/portraits", (req, res) => {
    res.send(staticData.portraits);
});

router.get("/", (req, res) => {
    const characters = Object.assign(staticData.characters.survivors, staticData.characters.hunters);
    res.send(characters);
});

module.exports = router;