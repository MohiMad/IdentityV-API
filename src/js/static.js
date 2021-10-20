const params = require("../json/params.json");
const packageJSON = require("../../package.json")

module.exports = {
    getVersion() {
        return packageJSON.version;
    },
    errorStatus: (msg = "Page not found!") => {
        return JSON.parse(`{"status": 404, "message": "${msg}"}`);
    },
    emptyQuery: (query) => {
        return !params.some(param => {
            return Object.keys(query).includes(param);
        });
    },
    formatName: (name) => {
        return name.replace("_", " ");
    },
    formatQueryName: (name) => {
        return name.split(/\%20|\s/g).map(elm => elm.charAt(0).toUpperCase() + elm.slice(1)).join("_")
    }
}