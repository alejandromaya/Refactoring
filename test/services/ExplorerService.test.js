const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");


describe('Test for ExplorerService', () => {
    test('Test for method filterByMission', () =>{
        const explorers1 = Reader.readJsonFile("explorers.json");
        const explorer = ExplorerService.filterByMission(explorers1, "node");
        expect(explorer).not.toBeUndefined();
    });
    test('Test for method getAmountOfExplorersByMission', () =>{
        const explorers1 = Reader.readJsonFile("explorers.json");
        const explorer = ExplorerService.getAmountOfExplorersByMission(explorers1, "node")
        expect(explorer).toBe(10);
    });
    test('Test for method getAmountOfExplorersByMission', () =>{
        const explorers1 = Reader.readJsonFile("explorers.json");
        const explorer = ExplorerService.getExplorersUsernamesByMission(explorers1, "node")
        expect(explorer).toStrictEqual(['ajolonauta1',
                               'ajolonauta2',
                               'ajolonauta3',
                               'ajolonauta4',
                               'ajolonauta5',
                               'ajolonauta11',
                               'ajolonauta12',
                               'ajolonauta13', 
                               'ajolonauta14',
                               'ajolonauta15']);
    });
});