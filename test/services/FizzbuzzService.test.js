const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe('Test for FizzbuzzService Class', () =>{
    test('1. Test for score: 1', () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer).toStrictEqual({ name: "Explorer1", score: 1, trick: 1 });
    });
    test('2. Test for score: 3', () =>{
        const explorer2 = {name: "Explorer2", score: 3};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer2);
        expect(explorer).toStrictEqual({name: "Explorer2", score: 3, trick: "FIZZ"});
    });
    test('2. Test for score: 5', () =>{
        const explorer3 = {name: "Explorer3", score: 5};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer).toStrictEqual({name: "Explorer3", score: 5, trick: "BUZZ"});
    });
    test('2. Test for score: 15', () =>{
        const explorer4 = {name: "Explorer4", score: 15};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer4);
        expect(explorer).toStrictEqual({name: "Explorer4", score: 15, trick: "FIZZBUZZ"});
    });
});