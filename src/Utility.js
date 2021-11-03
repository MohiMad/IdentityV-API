const got = require("got");

function jsonify(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = {
    jsonify: jsonify,
    getVersion() {
        return process.env.npm_package_version;
    },
    sendErrorMsg: (res, errCode = 404, msg = "Page not found!") => {
        return res?.send(
            jsonify(
                {
                    status: errCode,
                    message: msg
                }
            )

        );
    },
    replaceUnderscoresWithSpace: (str) => {
        return str?.replace?.(/\_/g, " ");
    },
    formatParam: (name) => {
        return name?.split?.(/\-|\_|\%20|\s/g).map(elm => elm.charAt(0).toUpperCase() + elm.slice(1)).join("_")
    },
    removeTags: (str) => {
        return str?.replace?.(/\<br\>/g, " & ")?.replace(/(<.+?>|<\/.+?>)/g, "");
    },
    scrape: async (param) => {
        const response = await got(`https://id5.fandom.com/wiki/${(param) ? param : ""}`).catch(() => null);
        if (!response) return;

        return response.body;
    },
    defineAtFunctionForArray() {
        if (Array.prototype.at) return;

        Object.defineProperty(Array.prototype, "at", {
            value: function (index) {
                if(isNaN(index)) return;
                return (index >= 0) ? this[index] : this[this.length + index];
            }
        });
    }
}