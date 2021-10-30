class BadgeData {
    constructor(type, htmlBody) {
        this.type = type;
        this.htmlBody = htmlBody;
        this.data;
        this.wearerIndex;
        this.rarityIndex;
        this.essenceIndex;
        this.priceIndex;
        this.seriesIndex;
        this.desriptionIndex;

        this.wearer;
        this.rarity;
        this.essence;
        this.price;
        this.series;
        this.desription;

        this.setData();
        this.setIndexValues();
        this.setDataProperties();
    }

    setData() {
        this.data = this.htmlBody.match(/(?<=class="pi-data-value pi-font">).+?(?=<\/div>)/g);
    }

    setIndexValues() {
        switch (this.type) {
            //Setting default case for SKIN
            default:
                this.wearerIndex = 0;
                this.rarityIndex = 1;
                this.essenceIndex = 2;
                this.priceIndex = 3;
                this.seriesIndex = 4;
                this.desriptionIndex = this.data.length - 1;
                break;

            case "ACCESSORY":
                this.desriptionIndex = 0;
                this.wearerIndex = 1;
                this.rarityIndex = 2;
                this.essenceIndex = 3;
                this.seriesIndex = 4;
                this.priceIndex = this.data.length - 1;
                break;

            case "PORTRAIT":
                this.desriptionIndex = 0;
                this.essenceIndex = 2;
                this.priceIndex = 3;
                this.rarityIndex = this.data.length - 1;
                break;
        }
    }

    setDataProperties() {
        this.wearer = this.data[this.wearerIndex] || null;
        this.rarity = this.data[this.rarityIndex] || null;
        this.essence = this.data[this.essenceIndex] || null;
        this.price = this.data[this.priceIndex] || null;
        this.series = this.data[this.seriesIndex] || null;
        this.desription = this.data[this.desriptionIndex] || null;
    }
}

module.exports = BadgeData;