// 9. "apkarpykEilute"
// Kartais reikia paimti tik nurodyta kieki simboliu is eilutes pradzios.
// Uzduotis:
// Sukurk funkcija, kuri istraukia nurodyta simboliu skaiciu is eilutes.
// Pvz.:
// apkarpykEilute("Robin Singh", 4) -> "Robi"

// .slice() variantas
console.log("slice variantas");

function apkarpykEilute1(str, kiekis) {
  return str.slice(0, kiekis);
}

console.log(apkarpykEilute1("Robin Singh", 4));

// .substring() variantas
console.log("\nsubstring variantas");

function apkarpykEilute2(str, kiekis) {
  return str.substring(0, kiekis);
}

console.log(apkarpykEilute2("Robin Singh", 4));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function apkarpykEilute3(str, kiekis) {
  let rezultatas = "";

  for (let i = 0; i < kiekis; i++) {
    rezultatas += str[i];
  }

  return rezultatas;
}

console.log(apkarpykEilute3("Robin Singh", 4));
