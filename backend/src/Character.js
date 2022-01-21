const DataParser = require("./DataParser.js");
const Data = require("./Data.js");
const Utility = require("./Utility.js");
const Regex = require("./Regex.js");


class Character extends DataParser {
    constructor(query) {
        super(query);
        this.query = Utility.findPreferredAlias(query);
    }

    async scrapeAndJsonifyData() {
        await this.scrapeData();
        if (!this.badgeChildren) return;

        this._sanitizeBadgeChildren();
        this.modifyAbilitesAndTraitsInBadgeChildren();


        const data = new Data()
            .setStatus(200)
            .setName(this.query)
            .setAdditionalProperties(this.badgeChildren);


        return Utility.jsonify(data);
    }

    _sanitizeBadgeChildren() {
        ["external_traits", "abilities"].forEach((property) => {
            if (this.badgeChildren[property]) {
                this.badgeChildren[property] = this.badgeChildren[property].split(Regex.ABILITIY_SEPARATORS);

            }
        });

        ["likes", "dislikes"].forEach((property) => {
            if (this.badgeChildren[property]) {
                this.badgeChildren[property] = this.badgeChildren[property].split(", ")
            }
        });

        Object.entries(this.badgeChildren).forEach(([key, value]) => {
            this.badgeChildren[key] = (typeof value === "string") ? value.replace(Regex.HTML_ENTITIES, "") : value;
        });

        return this;
    }

    modifyAbilitesAndTraitsInBadgeChildren() {
        ["external_traits", "abilities"].forEach((property) => {
            if (this.badgeChildren[property]) {
                this.badgeChildren[property] = this.badgeChildren[property]
                .map((value, index) => {
                    const image = this._getTraitOrAbilityImage(value, index);

                    return {
                        name: value,
                        link: image
                    }
                });
            }
        });
    }

    _getTraitOrAbilityImage(trait, index) {
        let traitImage;
        trait = trait.replace(Regex.WORDS_CONNECTION_CHARACTERS, "_");
        const TRAIT_GALLERY_ELEMENT = new RegExp(`id="${trait}.+?</div>`, "i");

        traitImage = this.getAllImagesInHTML_BODY().find(img => {
            return img.toLowerCase().replace(Regex.WORDS_CONNECTION_CHARACTERS, "")
                .includes(trait.toLowerCase().replace(Regex.WORDS_CONNECTION_CHARACTERS, ""))
        });

        if (!traitImage) {
            const galleryElement = this.HTMLBody.match(TRAIT_GALLERY_ELEMENT)?.[0];
            if (!galleryElement) return;

            traitImage = galleryElement.match(Regex.IMAGE)?.[index];
        }

        return traitImage;
    }
}

module.exports = Character;