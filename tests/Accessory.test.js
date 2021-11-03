const Accessory = require("../src/Accessory.js");
const DataParser = require("../src/DataParser.js");

test("Accessory is defined", () => {
    expect(Accessory).toBeDefined();
});

test("Accessory class extends DataParser", () => {
    expect(Accessory.prototype instanceof DataParser).toBeTruthy();
});

test("Accessory's ESSENCE_INDEX and RARITY_INDEX are undefined upon initialisation with empty constructor", () => {
    const accss = new Accessory();

    expect(accss.ESSENCE_INDEX).toBeUndefined();
    expect(accss.RARITY_INDEX).toBeUndefined();
});

test("Accessory's ESSENCE_INDEX and RARITY_INDEX remain undefined when setChangingIndexProperties method is called with empty constructor", () => {
    const accss = new Accessory();
    accss.setChangingIndexProperties();

    expect(accss.ESSENCE_INDEX).toBeUndefined();
    expect(accss.RARITY_INDEX).toBeUndefined();
});

test("Valid accessory data is returned", async () => {
    //https://id5.fandom.com/wiki/Apple
    const accss = new Accessory("Apple");
    await accss.scrapeData();
    accss.setChangingIndexProperties();

    const data = accss.setChangingIndexProperties().jsonifyData();

    expect(typeof data).toEqual("object");
    expect(data.status).toBe(200);
    expect(data.name).toEqual("Apple");
    expect(data.price).toEqual("N/A");
    expect(data.wearer).toEqual("Evil Reptilian");
    expect(data.description).toEqual("An apple, Ryuk's favorite fruit");
    expect(data.rarity).toEqual("B-Tier (Blue)");
    expect(data.essence).toEqual("Death Note Crossover & Season 16 Essence 2");
    expect(data.link).toMatch(/(png|jpg)$/i);
});
