const express = require("express");
const app = express();
const Utility = require("./src/Utility.js");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const staticData = require("./staticData.json");

app.use(cors({ orgin: "*" }));

app.set('views', path.join(__dirname, "..", "build")); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static("build"));


// app.use("/public", express.static("public"));

fs.readdirSync(path.join(__dirname, "/routes")).forEach((route) => {
    app.use(`/api/${route.replace(".js", "")}`, require(path.join(__dirname, `/routes/${route}`)));
});

staticData.redirections.forEach(({ route, redirectTo }) => {
    app.get(`/api/${route}/:name`, function (req, res) {
        res.redirect(`/api/${redirectTo}/${req.params.name}`);
    });
});

app.get("/version", (req, res) => res.json({ version: Utility.getVersion() }));

app.get("/*", (req, res) => {
    res.render(path.join(__dirname, "..", "..", "..", "...", "build/index.html"));
});

app.listen(process.env.PORT || 3000);

module.exports = app;
