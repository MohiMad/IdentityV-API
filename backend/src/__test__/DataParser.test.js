// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime/runtime");
const DataParser = require("../DataParser.js");
const Data = require("../Data.js");
const Regex = require("../Regex.js");

test("DataParser is defined", () => {
    expect(DataParser).toBeDefined();
});

test("scrapeData function returns undefined if the constructor is empty", async () => {
    const dp = new DataParser();

    expect((await dp.scrapeData())).toBeUndefined();
});

test("scrapeData returns undefined if the query leads to a 404 page", async () => {
    const dp = new DataParser("...");

    expect((await dp.scrapeData())).toBeUndefined();
});

test("jsonifyData method returns undefined if scrapeData isn't called", () => {
    //https://id5.fandom.com/wiki/Cowboy
    const dp = new DataParser("Cowboy");

    expect(dp.jsonifyData()).toBeUndefined();
});

test("jsonifyData returns a valid Data instance", async () => {
    //https://id5.fandom.com/wiki/Cowboy
    const dp = new DataParser("Cowboy");
    const data = (await dp.scrapeData()).jsonifyData();

    expect(typeof data).toEqual("object");
    expect(data.status).toBe(200);
    expect(data.link).toMatch(Regex.IMAGE);
});

test("jsonifyData allows customized data formatting", async () => {
    //https://id5.fandom.com/wiki/Cowboy
    const dp = new DataParser("Cowboy");
    await dp.scrapeData();

    const data = new Data(405, dp.name, null, "Season 6");
    expect(JSON.stringify(dp.jsonifyData(data))).toEqual(JSON.stringify(data));
});

