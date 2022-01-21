// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime");
const packageJSON = require("../../../package.json");
const Utility = require("../Utility.js");

test("Properly retreives the current version from package.json file", () => {
    expect(Utility.getVersion()).toEqual(packageJSON.version);
});

test("Returns undefined if no express response parameter is provided", () => {
    expect(Utility.sendErrorMsg()).toBeUndefined();
});

test("Properly removes underscores from query parameters", () => {
    expect(Utility.replaceUnderscoresWithSpace("Hello_World")).toEqual("Hello World");
    expect(Utility.replaceUnderscoresWithSpace("Y_e_e_h_a_w")).toEqual("Y e e h a w");
    expect(Utility.replaceUnderscoresWithSpace()).toBeUndefined();
    expect(Utility.replaceUnderscoresWithSpace([0])).toBeUndefined();
});

test("Properly formats parameters into valid queries for id5.fandom.com", () => {
    expect(Utility.formatParam("hello_world")).toEqual("Hello_World");
    expect(Utility.formatParam("test string%20yes")).toEqual("Test_String_Yes");
    expect(Utility.formatParam()).toBeUndefined()
    expect(Utility.formatParam([0])).toBeUndefined();
});

test("Properly replaces <br> tags with ' & ' and completely removes other HTML tags from a string", () => {
    expect(Utility.removeTags("My friend<br>and I")).toEqual("My friend & and I");
    expect(Utility.removeTags("<h1>Hello & World</h1>")).toEqual("Hello & World");
    expect(Utility.removeTags()).toBeUndefined();
    expect(Utility.removeTags([0])).toBeUndefined();
});

test("scrape function returns undefined upon not finding a response", async () => {
    expect.assertions(1);

    return expect((await Utility.scrape("..."))).toBeUndefined();
});

test("Properly retreives the HTML page for id5.fandom.com/", async () => {
    expect.assertions(1);

    return expect((await Utility.scrape())).toMatch(/html/g);
});

test("Properly retreives the HTML page for id5.fandom.com/Cowboy", async () => {
    expect.assertions(1);

    return expect((await Utility.scrape("Cowboy"))).toMatch(/kevin/gi);
});

test("method getValueAtIndex properly returns the value at the specificed index even if negative", () => {
    const testArr = [1, 2, 3];

    expect(Utility.getValueAtIndex(testArr, 1)).toBe(2);
    expect(Utility.getValueAtIndex(testArr, -1)).toBe(3);
    expect(Utility.getValueAtIndex(testArr, 10)).toBeUndefined();
    expect(Utility.getValueAtIndex(testArr, "test")).toBeUndefined();
});

test("method findLastIndex properly returns the last occurance of the checker callback", () => {
    const testArr = [1, 2, 3, 1, 3, 2];

    expect(Utility.findLastIndex(testArr, "test")).toBeUndefined();
    expect(Utility.findLastIndex(testArr, (value) => value === 2)).toBe(testArr.length - 1);
    expect(Utility.findLastIndex(testArr, (value) => value === 1)).toBe(3);
});

test("indicateFactor returns undefined if no parameter is provided", () => {
    expect(Utility.indicateFactor()).toBeUndefined();
});

test("indicateFactor returns which factor the character belongs to", () => {
    expect(Utility.indicateFactor("Cowboy")).toEqual("survivors");
    expect(Utility.indicateFactor("Hell Ember")).toEqual("hunters");
});

test("indicateFactor returns undefined if the parameter provided isn't a valid character", () => {
    expect(Utility.indicateFactor("...")).toBeUndefined();
});

test("findPrefferedAlias returns undefined if no parameter if provided or if the type of the parameter isn't string", () => {
    expect(Utility.findPreferredAlias()).toBeUndefined();
    expect(Utility.findPreferredAlias([])).toBeUndefined();
});

test("findpreferredAlias returns undefined if the parameter isn't a valid character alias", () => {
    expect(Utility.findPreferredAlias("...")).toBeUndefined();
});

test("findPreferredAlias returns the best alias for a character that matches the fandom's requirements", () => {
    expect(Utility.findPreferredAlias("Freddy")).toEqual("lawyer");
    expect(Utility.findPreferredAlias("Violetta")).toEqual("soul_weaver");
});

test("findPrefferedAlias returns the same name if it matches the preffered alias", () => {
    expect(Utility.findPreferredAlias("luchino")).toEqual("luchino");
});
