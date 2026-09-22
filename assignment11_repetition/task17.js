// 17. „ivertinkSavaite“
// Apibūdink savo savaitę vienu žodžiu per dieną.
// Užduotis:
// Masyvas 7 dienų įrašų (string tipo), pvz.:
// ["motyvuotas","tingus","tingus","normalus","motyvuotas","tingus","ramus"]
// Naudodamas for, suskaičiuok, kiek kartų buvo „tingus“.
// Grąžink tekstą:
// "Tinginystė užklupo X kartus."

function ivertinkSavaite(arr) {
  let tingus = arr.filter((a) => a === "tingus").length;
  return `Tinginystė užklupo ${tingus} kartus.`;
}

console.log(
  ivertinkSavaite([
    "motyvuotas",
    "tingus",
    "tingus",
    "normalus",
    "motyvuotas",
    "tingus",
    "ramus",
  ]),
);
