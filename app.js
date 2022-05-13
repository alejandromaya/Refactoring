
const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers1 = Reader.readJsonFile("explorers.json");

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers1, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers1, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers1, "node"));

const explorer1 = {name: "Explorer1", score: 1};
const explorer = FizzbuzzService.applyValidationInExplorer(explorer1);
console.log(explorer);

/*const explorer1 = {name: "Explorer1", score: 1}
console.log(FizzbuzzService.applyValidationInExplorer(explorer1));
const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}
const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}
const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15));*/
