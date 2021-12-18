const got = require("got");
const aliases = require("../aliases.json");
const Regex = require("./Regex.js");

class Utility {
    jsonify(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    getVersion() {
        return process.env.npm_package_version;
    }

    sendErrorMsg(res, errCode = 404, msg = "Page not found!") {
        return res?.send(
            this.jsonify(
                {
                    status: errCode,
                    message: msg
                }
            )

        );
    }

    replaceUnderscoresWithSpace(str) {
        return str?.replace?.(Regex.UNDERLINES, " ");
    }

    formatParam(name) {
        return name?.split?.(Regex.WORDS_CONNECTION_CHARACTERS).map(elm => elm.charAt(0).toUpperCase() + elm.slice(1)).join("_")
    }

    removeTags(str) {
        return str?.replace?.(Regex.HTML_LINEBREAKS, " & ")?.replace(Regex.HTML_OPENING_AND_CLOSING_TAGS, "");
    }

    async scrape(param) {
        const response = await got(`https://id5.fandom.com/wiki/${(param) ? param : ""}`).catch(() => null);
        if (!response) return;

        return response.body;
    }

    getValueAtIndex(arr, index) {
        if (isNaN(index)) return;
        return (index >= 0) ? arr[index] : arr[arr.length + index];
    }

    findLastIndex(arr, cb) {
        if (!Array.isArray(arr)) return;
        if (typeof cb != "function") return;

        for (var i = arr.length - 1; i >= 0; i--) {
            if (cb(arr[i])) return i;
        }
    }

    indicateFactor(name) {
        if (!name) return;

        const factors = Object.keys(aliases.characters);

        for (const factor of factors) {
            const charactersAliases = Object.values(aliases.characters[factor]);

            for (const characterAlias of charactersAliases) {
                const exists = characterAlias.some((value) => {
                    return value === name.toLowerCase().replace(Regex.WORDS_CONNECTION_CHARACTERS, "_")
                });

                if (exists) return factor;
            }
        }
    }

    findPreferredAlias(character) {
        if (typeof character != "string") return;
        character = character.toLowerCase().replace(Regex.WORDS_CONNECTION_CHARACTERS, "_");
        const factor = this.indicateFactor(character);
        if (!factor) return;

        for (const [preferredAlias, characterAliases] of Object.entries(aliases.characters[factor.toLowerCase()])) {
            if (characterAliases.includes(character)) return preferredAlias;
        }
    }
}

module.exports = new Utility();