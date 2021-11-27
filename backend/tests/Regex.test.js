const Regex = require("../src/Regex.js");

test("IMAGE expression matches only one image", () => {
    expect("https://test/test.png\nhttps://test//test.png".match(Regex.IMAGE).length).toBe(1); 
});

test("IMAGES expression matches multiple images with .png or .jpg extensions", () => {
    const toMatchStr = `https://test/idk.png\nhttps://test1.png\nhttps//test/idk.jpg`;
    expect(toMatchStr.match(Regex.IMAGES).length).toBe(3);
});

test("GIF matches one gif link only", () => {
    const toMatchStr = "https://test/test.gif\n...http://test.testss/gif"
    expect(toMatchStr.match(Regex.GIF).length).toBe(1);
});

test("GIFS matches multiple gifs", () => {
    const toMatchStr = "https://test/test.gif\n...http://test.testss.gif"
    expect(toMatchStr.match(Regex.GIFS).length).toBe(2);
});

test("WORDS_CONNECTION_CHARACTERS matches all occurances of _ - \s and %20", () => {
    expect("Y e_hA-w%20 My Name Is_Mo-hi".replace(Regex.WORDS_CONNECTION_CHARACTERS, "")).toEqual("YehAwMyNameIsMohi");
});

