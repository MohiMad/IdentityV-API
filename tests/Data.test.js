// Regenerator runtime is imported to ensure babel can convert async-functions successfully
require("regenerator-runtime/runtime");
const Data = require("../src/Data.js");

test("The data structure Data exists", () => {
    expect(Data).toBeDefined();
});

test("Default values are assigned", () => {
    expect(new Data()).toEqual({ status: 0, name: "Unnamed", description: "None", price: "N/A", });
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

    expect(new Data(...Object.values(dataFormat))).toEqual(dataFormat);
});
