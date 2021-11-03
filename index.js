const app = require("express")();
const Utility = require("./src/Utility.js");
const fs = require("fs");
const cors = require("cors");

app.use(cors({ orgin: "*" }));

app.get("/", async (req, res) => {
    app.engine('html', require('ejs').renderFile);
    res.render("index.html", { version: Utility.getVersion() });
});

fs.readdirSync("./routes").forEach((route) => {
    app.use(`/${route.replace(".js", "")}`, require(`./routes/${route}`));
});

app.listen(process.env.PORT || 3000);
