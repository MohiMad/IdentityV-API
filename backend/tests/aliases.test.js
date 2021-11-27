const aliases = require("../aliases.json");

test("Alisases file exists", () => {
    expect(aliases).toBeDefined();
});

test("Alisases file consists of an object with properties", () => {
    expect(typeof aliases).toEqual("object");
});

test("characters property exists", () => {
    expect(aliases.characters).toBeDefined();
});

test("portraits property exists", () => {
    expect(aliases.portraits).toBeDefined();
});