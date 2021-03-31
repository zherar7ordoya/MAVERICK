const chalk = require("chalk");
const log = console.info;

console.table([
  {
    Fecha: new Date("2021-03-27T00:00-0300").toDateString(),
    Bitácora: "Veo la presentación de KeystoneJS",
  },
  {
    Fecha: new Date("2021-03-29T00:00-0300").toDateString(),
    Bitácora: "Uso «colors», pero no tiene anaranjado",
  },
  {
    Fecha: new Date("2021-03-31T00:00-0300").toDateString(),
    Bitácora: "Uso «chalk» con excelentes resultados",
  }
]);

log("\n");
log(
  chalk
    .rgb(0, 255, 255)
    .bold("                 ╔═╗╔═╗╦═╗╔═╗╦═╗╔╦╗╔═╗\\│/╔╦╗╔═╗╦═╗╔╦╗╔═╗╦ ╦╔═╗")
);
log(
  chalk
    .rgb(255, 255, 0)
    .bold("                 ║ ╦║╣ ╠╦╝╠═╣╠╦╝ ║║║ ║─ ─ ║ ║ ║╠╦╝ ║║║ ║╚╦╝╠═╣")
);
log(
  chalk
    .rgb(255, 144, 0)
    .bold("                 ╚═╝╚═╝╩╚═╩ ╩╩╚══╩╝╚═╝/│\\ ╩ ╚═╝╩╚══╩╝╚═╝ ╩ ╩ ╩")
);
log("\n");
