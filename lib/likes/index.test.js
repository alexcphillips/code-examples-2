const likes = require(".");

describe("likes function", function () {
    it("should return correct text", () => {
        expect(likes([])).toBe("no one likes this");
        expect(likes(["Augustus"])).toBe("Augustus likes this");
        expect(likes(["Augustus", "Woodrow"])).toBe(
            "Augustus and Woodrow like this"
        );
        expect(likes(["Augustus", "Woodrow", "July"])).toBe(
            "Augustus, Woodrow and July like this"
        );
        expect(likes(["Augustus", "Woodrow", "July", "Newt"])).toBe(
            "Augustus, Woodrow and 2 others like this"
        );
    });
});
