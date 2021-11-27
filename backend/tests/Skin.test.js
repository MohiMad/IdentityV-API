// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime/runtime");
const Skin = require("../src/Skin.js");
const DataParser = require("../src/DataParser.js");
const Regex = require("../src/Regex.js");

test("Skin class is defined", () => {
    expect(Skin).toBeDefined();
});

test("Skin class extends DataParser", () => {
    expect(Skin.prototype instanceof DataParser).toBeTruthy();
});

test("Skin constructor defines by-default-undefined constants", () => {
    const skin = new Skin();

    expect(typeof skin.WEARER_INDEX).toBe('number');
    expect(typeof skin.PRICE_INDEX).toBe('number');
    expect(typeof skin.DESCRIPTION_INDEX).toBe('number');
});

test("Properly returns a Data instance for a skin", async () => {
    //https://id5.fandom.com/wiki/Whiplash
    const skin = new Skin("Whiplash");

    expect(typeof (await skin.scrapeData()).jsonifyData()).toBe('object');
});

test("Properly retreives data for the skin", async () => {
    //https://id5.fandom.com/wiki/White_Tentacle
    const skin = new Skin("White Tentacle");
    const data = (await skin.scrapeData()).jsonifyData();

    expect(typeof data).toEqual("object");
    expect(data.status).toBe(200);
    expect(data.name).toEqual("White Tentacle");
    expect(data.wearer).toEqual("The Ripper");
    expect(data.price).toEqual("1388 Echoes & 4888 Fragments");
    expect(data.description).toEqual("Even the mutated abberation fog city can't stand the original color. He is eager for a little scarlet to adorn himself with.");
    expect(data.rarity).toEqual("A-Tier (Purple)");
    expect(data.essence).toEqual("Season 1 & Lantern Deals");
    expect(data.link).toMatch(Regex.IMAGE);
    
});