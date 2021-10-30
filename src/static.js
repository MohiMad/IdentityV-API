const packageJSON = require("../package.json");
const got = require("got");

function jsonify(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = {
    getVersion() {
        return packageJSON.version;
    },
    throwError: (res, errCode = 404, msg = "Page not found!") => {
        return res.send(
            jsonify(
                {
                    status: errCode,
                    message: msg
                }
            )

        );
    },
    formatName: (name) => {
        return name?.replace("_", " ");
    },
    formatParam: (name) => {
        return name.split(/\-|\_|\%20|\s/g).map(elm => elm.charAt(0).toUpperCase() + elm.slice(1)).join("_")
    },
    removeHTMLTags: (str) => {
        return str?.replace("<br>", " & ").replace(/(<.+?>|<\/.+?>)/g, "");
    },
    scrape: async (param) => {
        const response = await got(`https://id5.fandom.com/wiki/${param}`).catch(() => null);
        if (!response) return;

        return response.body;
    },
    jsonify: jsonify
}