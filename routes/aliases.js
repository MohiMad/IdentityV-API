const express = require("express");
const router = express.Router();
const aliases = require("../aliases.json");

router.get("/", (req, res) => {
    res.send(aliases.characters);
});

module.exports = router;