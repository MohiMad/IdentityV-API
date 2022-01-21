// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime/runtime");
const Data = require("../Data.js");

test("The data structure Data exists", () => {
    expect(Data).toBeDefined();
});

test("Default values are assigned", () => {
    expect(new Data()).toEqual({ status: 0, name: "Unnamed" });
});

test("Constructor assigns values correctly", () => {
    const dataFormat = {
        status: 200,
        name: "My Name",
        wearer: "Me",
        essence: "None",
        description: "Yeehaw",
        price: "1000",
        rarity: "none",
        link: "http"
    }

    const data = new Data()
        .setStatus(200)
        .setName("My Name")
        .setWearer("Me")
        .setEssence("None")
        .setDescription("Yeehaw")
        .setPrice("1000")
        .setRarity("none")
        .setLink("http");

    expect(data).toEqual(dataFormat);
});

test("setAdditionalProperties returns undefined if the type parameter isn't an object", () => {
    const data = new Data();

    expect(data.setAdditionalProperties("test")).toBeUndefined();
});

test("setAdditionalProperties adds the object properties to the instance", () => {
    const data = new Data()
        .setName("Oof")
        .setAdditionalProperties({ hello: "world", yee: "haw" });

    expect(data).toEqual(
        {
            name: "Oof",
            hello: "world",
            yee: "haw",
            status: 0,
        });
});