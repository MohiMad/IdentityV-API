const params = require("../json/params.json");

module.exports = {
    errorStatus: () => {
        return JSON.parse(`{"status": 404}`);
    },
    emptyQuery: (query) => {
        return !params.some(param => {
            return Object.keys(query).includes(param);
        });
    }
}