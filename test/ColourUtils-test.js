var _colourUtils = require("../src/utils/ColourUtils");

describe("ColourUtils", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("contains spec with an expectation", function() {
        expect(_colourUtils.hexToRgb("#ff00ff", 1)).toEqual("rgba(255,0,255,1)");
        expect(_colourUtils.hexToRgb("#ff0000", .1)).toEqual("rgba(255,0,0,0.1)");
        expect(_colourUtils.hexToRgb("#cccccc", 0.5)).toEqual("rgba(204,204,204,0.5)");
    });
});