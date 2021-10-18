const params = require("../json/params.json");

module.exports = {
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