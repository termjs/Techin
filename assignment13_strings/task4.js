// 4. "suskaiciuokNeTarpus"
// Kartais reikia zinoti, kiek eiluteje yra realiu simboliu, be tarpu.
// Uzduotis:
// Sukurk funkcija, kuri pagal duota eilute grazina simboliu, kurie nera tarpai, skaiciu.
// Pvz.:
// suskaiciuokNeTarpus("Labas rytas") -> 10

// .replace() ir .length variantas
console.log("replace ir length variantas");

function suskaiciuokNeTarpus1(str) {
  // pasalinam visus tarpus ir tada matuojam ilgi
  return str.replace(/\s/g, "").length;
}

console.log(suskaiciuokNeTarpus1("Labas rytas"));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function suskaiciuokNeTarpus2(str) {
  let skaitiklis = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      skaitiklis++;
    }
  }

  return skaitiklis;
}

console.log(suskaiciuokNeTarpus2("Labas rytas"));

// .split() ir .filter() variantas
console.log("\nsplit ir filter variantas");

function suskaiciuokNeTarpus3(str) {
  return str.split("").filter((simbolis) => simbolis !== " ").length;
}

console.log(suskaiciuokNeTarpus3("Labas rytas"));
