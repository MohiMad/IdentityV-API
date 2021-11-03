// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime/runtime");
const packageJSON = require("../package.json");
const { getVersion, replaceUnderscoresWithSpace, formatParam, removeTags, scrape, defineAtFunctionForArray, sendErrorMsg } = require("../src/Utility.js");

test("Properly retreives the current version from package.json file", () => {
    expect(getVersion()).toEqual(packageJSON.version);
});

test("Returns undefined if no express response parameter is provided", () => {
    expect(sendErrorMsg()).toBeUndefined();
});

test("Properly removes underscores from query parameters", () => {
    expect(replaceUnderscoresWithSpace("Hello_World")).toEqual("Hello World");
    expect(replaceUnderscoresWithSpace("Y_e_e_h_a_w")).toEqual("Y e e h a w");
    expect(replaceUnderscoresWithSpace()).toBeUndefined();
    expect(replaceUnderscoresWithSpace([0])).toBeUndefined();
});

test("Properly formats parameters into valid queries for id5.fandom.com", () => {
    expect(formatParam("hello_world")).toEqual("Hello_World");
    expect(formatParam("test string%20yes")).toEqual("Test_String_Yes");
    expect(formatParam()).toBeUndefined()
    expect(formatParam([0])).toBeUndefined();
});

test("Properly replaces <br> tags with ' & ' and completely removes other HTML tags from a string", () => {
    expect(removeTags("My friend<br>and I")).toEqual("My friend & and I");
    expect(removeTags("<h1>Hello & World</h1>")).toEqual("Hello & World");
    expect(removeTags()).toBeUndefined();
    expect(removeTags([0])).toBeUndefined();
});

test("scrape function returns undefined upon not finding a response", async () => {
    expect.assertions(1);

    return expect((await scrape("..."))).toBeUndefined();
});

test("Properly retreives the HTML page for id5.fandom.com/", async () => {
    expect.assertions(1);

    return expect((await scrape())).toMatch(/html/g);
});

test("Properly retreives the HTML page for id5.fandom.com/Cowboy", async () => {
    expect.assertions(1);

    return expect((await scrape("Cowboy"))).toMatch(/kevin/gi);
});

test("Properly defines at method for type array", () => {
    defineAtFunctionForArray();
    const testArr = [1, 2, 3];
    expect([].at).toBeTruthy();
    expect(testArr.at(1)).toBe(2);
    expect(testArr.at(-1)).toBe(3);
    expect(testArr.at(10)).toBeUndefined();
    expect(testArr.at("test")).toBeUndefined();
});