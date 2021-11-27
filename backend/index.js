const express = require("express");
const app = express();
const Utility = require("./src/Utility.js");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

app.use(cors({ orgin: "*" }));

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "..", "build")));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "..", "build", "index.html"), {
        version: Utility.getVersion()
    });
});

fs.readdirSync("./routes").forEach((route) => {
    app.use(`/api/${route.replace(".js", "")}`, require(`./routes/${route}`));
});

app.listen(process.env.PORT || 3000);
