const isAnagram = require(".");

describe("isAnagram function", () => {
    it("should return correct boolean if parameters are anagrams", () => {
        expect(isAnagram("haddda", "adhdda")).toBe(true);
        expect(isAnagram("ha", "ah")).toBe(true);
        expect(isAnagram("h a2", "2 ha")).toBe(true);

        expect(isAnagram("ha", "hh")).toBe(false);
        expect(isAnagram("ewver1r", "hsth")).toBe(false);
        expect(isAnagram("h a 2", "a h 1")).toBe(false);
    });
});
