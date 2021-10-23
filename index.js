const app = require("express")();
const static = require("./src/js/static.js");
const cors = require("cors");
const DataParser = require("./src/js/DataParser.js");

app.use(cors({ orgin: "*" }));

app.get("/", async (req, res) => {
    if (static.emptyQuery(req.query)) {
        app.engine('html', require('ejs').renderFile);
        res.render("index.html", { version: static.getVersion() });

        return;
    }

    const dataParser = new DataParser(static.formatQueryName(req.query.name));
    const data = await dataParser.scrapeAndParseData();

    //TODO: Add a new error code for rate limit error
    res.send(data || static.errorStatus());
});


app.listen(process.env.PORT || 3000);
