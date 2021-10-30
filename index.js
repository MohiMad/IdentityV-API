const app = require("express")();
const static = require("./src/static.js");
const fs = require("fs");
const cors = require("cors");

app.use(cors({ orgin: "*" }));

app.get("/", async (req, res) => {
    app.engine('html', require('ejs').renderFile);
    res.render("index.html", { version: static.getVersion() });
});


fs.readdirSync("./routes").forEach((route) => {
    app.use(`/${route.replace(".js", "")}`, require(`./routes/${route}`));
});


app.listen(process.env.PORT || 3000);
