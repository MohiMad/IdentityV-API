// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime/runtime");
const Portrait = require("../src/Portrait.js");
const DataParser = require("../src/DataParser.js");

test("Portrait class is defined", () => {
    expect(Portrait).toBeDefined();
});

test("Portrait class extends DataParser", () => {
    expect(Portrait.prototype instanceof DataParser).toBeTruthy();
});

test("Portrait constructor defines by-default-undefined constants", () => {
    const pt = new Portrait();
    
    expect(typeof pt.PRICE_INDEX).toBe('number');
    expect(typeof pt.DESCRIPTION_INDEX).toBe('number');
});

test("Portraits doesn't have a WEARER_INDEX constant", () => {
    const pt = new Portrait();

    expect(pt.WEARER_INDEX).toBeUndefined();
});


test("Portrait methods return undefined if the constructor is empty.", async () => {
    const pt = new Portrait();

    expect((await pt.main())).toBeUndefined();
    expect(pt.formatSeriesToMatchFandomQuery()).toBeUndefined();
    expect(pt.setLinkToPortrait()).toBeUndefined();
});

test("formatSeriesToMatchFandomQuery method matches aliases", () => {
    const pt = new Portrait();

    expect(pt.formatSeriesToMatchFandomQuery("BNW")).toEqual("Black-and-White_(Portrait)");
    expect(pt.formatSeriesToMatchFandomQuery("colorfulmemory")).toEqual("Colorful_Memory");
});

test("formatSeriesToMatchFandomQuery returns the same query if it already matches the fandom format", () => {
    const pt = new Portrait();
    expect(pt.formatSeriesToMatchFandomQuery("Black-and-White_(Portrait)")).toEqual("Black-and-White_(Portrait)");
});

test("method setLinkToPortrait retreives the right portrait based on the name", async () => {
    const pt = new Portrait("BNW", "Cowboy");
    (await pt.scrapeData()).setLinkToPortrait();

    expect(pt.link).toMatch(/https:.+?cowboy.+?\.(png|jpg)/i);
});

test("Portrait main method returns valid data", async () => {
    const doctorPortrait = new Portrait("BNW", "Emily");

    const data = await doctorPortrait.main();

    expect(typeof data).toEqual("object");
    expect(data.name).toEqual("Black And White (Portrait) Emily");
    expect(data.link).toMatch(/https:.+?doctor.+?\.(png|jpg)/i);
})