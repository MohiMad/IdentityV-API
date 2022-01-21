require("regenerator-runtime");
const Character = require("../Character.js");
const Regex = require("../Regex.js");

test("The Character class exists", () => {
    expect(Character).toBeDefined();
});

test("ScrapeAndJsonifyData returns null if the character name is not provided", async () => {
    const c = new Character();
    const data = await c.scrapeAndJsonifyData();

    expect(data).toBeUndefined();
});


test("Hunters have an \"abilities\" property", async () => {
    const violinist = new Character("Violinist");

    expect((await violinist.scrapeAndJsonifyData()).abilities).toBeDefined();
});


test("The method _getTraitOrAbilityImage has a fallback on finding the image if it fails to find it by searching through all images in the document.", async () => {
    const luchino = new Character("Luchino");

    const data = await luchino.scrapeAndJsonifyData();

    // Normally without the fallback if statement, the method fails to find the corresponding image for the "Preying Leap" ability
    expect(data.abilities[0].link).toMatch(Regex.IMAGE);
});


test("Character returns valid data", async () => {
    const cowboy = new Character("Cowboy");

    const data = await cowboy.scrapeAndJsonifyData();
    expect(typeof data).toEqual("object");
    expect(data.status).toBe(200);
    expect(data.name).toEqual("Kevin Alonso");
    expect(data.gender).toContain("Male");
    expect(Array.isArray(data.likes)).toBeTruthy();
    expect(Array.isArray(data.dislikes)).toBeTruthy();
    expect(Array.isArray(data.external_traits)).toBeTruthy();
    expect(data.birthday).toEqual("December 27");
    expect(data.age).toEqual("35");
    expect(data.tool).toEqual("Lasso");
});