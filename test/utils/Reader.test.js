const Reader = require("./../../lib/utils/Reader");

describe("Test for Reader", () => {
    test("1. Read a JSON", () => {
        const explorer = Reader.readJsonFile("explorers.json");
        expect(explorer).not.toBeUndefined();
    });
});