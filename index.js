const app = require("express")();
const static = require("./src/js/static.js");
const cors = require("cors"); 
const getCostumeImage = require("./src/js/getCostumeImage.js");

app.use(cors({ orgin: "*" }));

app.get("/", async (req, res) => {
    if (static.emptyQuery(req.query)) {
        return res.sendFile(__dirname + "/src/html/index.html");
    }


    const data = await getCostumeImage(req.query.name);
    res.send(data);

});


app.listen(process.env.PORT || 3000);
