// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime/runtime");
const Emote = require("../Emote.js");
const DataParser = require("../DataParser.js");
const Regex = require("../Regex.js");

test("The Emote class exists", () => {
    expect(Emote).toBeDefined();
});

test("The Emote class extends DataParser", () => {
    expect(Emote.prototype instanceof DataParser).toBeTruthy();
});

test("The methods setLink and setpreview successfully set the properties link and preview", async () => {
    const emote = new Emote("Dance", "Doctor");
    await emote.setHTMLBody();
    emote.setBadgeChildren();

    expect(emote.link).toBeUndefined();
    expect(emote.preview).toBeUndefined();

    emote.setLink();
    emote.setPreview();

    expect(emote.link).toBeDefined();
    expect(emote.preview).toBeDefined();
});

test("scrapeAndJsonifyData returns general data if the parameter 'name' is missing", async () => {
    const emote = new Emote("Confused");
    const data = await emote.scrapeAndJsonifyData();

    expect(typeof data).toEqual("object");
    expect(data.status).toBe(200);
    expect(data.name).toEqual("Confused");
    expect(data.link).toMatch(Regex.IMAGE);
    expect(data.preview).toBeUndefined();
});

test("scrapeAndJsonifyData returns valid Emote data when name is provided", async () => {
    // https://id5.fandom.com/wiki/Provoke
    const emote = new Emote("Provoke", "Cowboy");
    const data = await emote.scrapeAndJsonifyData();

    expect(typeof data).toEqual("object");
    expect(data.name).toEqual("Provoke Cowboy");
    expect(data.description).toEqual("Provoke Emote, exclusive to cowboy");
    expect(data.cost).toEqual("N/A");
    expect(data.rarity).toEqual("C-Tier (Blue Blueprint)");
    expect(data.link).toMatch(Regex.IMAGE);
    expect(data.preview).toMatch(Regex.GIF);
});

test("scrapeAndJsonifyData returns valid Emote data despite using an alias for the character", async () => {
    // https://id5.fandom.com/wiki/Provoke
    const emote = new Emote("Provoke", "Freddy");
    const data = await emote.scrapeAndJsonifyData();

    expect(typeof data).toEqual("object");
    expect(data.name).toEqual("Provoke Freddy");
    expect(data.description).toEqual("Provoke Emote, exclusive to lawyer");
    expect(data.cost).toEqual("N/A");
    expect(data.rarity).toEqual("C-Tier (Blue Blueprint)");
    expect(data.link).toMatch(Regex.IMAGE);
    expect(data.preview).toMatch(Regex.GIF);
});