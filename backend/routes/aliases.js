const express = require("express");
const router = express.Router();
const aliases = require("../aliases.json");
const Utility = require("../src/Utility.js");

Object.keys(aliases.characters).forEach((subCategory) => {
    router.get(`/${subCategory}`, (req, res) => res.send(aliases.characters[subCategory]));

    router.get(`/${subCategory}/:name`, (req, res) => {
        const name = Utility.findPreferredAlias(req.params.name);

        const data = aliases.characters[subCategory]?.[name];

        if (!data) return Utility.sendErrorMsg(res);

        res.send(data);
    });
});

router.get("/portraits", (req, res) => {
    res.send(aliases.portraits);
});

router.get("/", (req, res) => {
    const characters = Object.assign(aliases.characters.survivors, aliases.characters.hunters);
    res.send(characters);
});

module.exports = router;