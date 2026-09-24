// 18. "kartotiEilute"
// Kartais reikia eilute pakartoti kelis kartus is eiles.
// Uzduotis:
// Sukurk funkcija, kuri sujungia duota eilute n kartu (numatytoji reiksme - 1).
// Pvz.:
// kartotiEilute("Ha!") -> "Ha!"
// kartotiEilute("Ha!", 2) -> "Ha!Ha!"
// kartotiEilute("Ha!", 3) -> "Ha!Ha!Ha!"

// .repeat() variantas
console.log("repeat variantas");

function kartotiEilute1(str, kiekis = 1) {
  return str.repeat(kiekis);
}

console.log(kartotiEilute1("Ha!"));
console.log(kartotiEilute1("Ha!", 2));
console.log(kartotiEilute1("Ha!", 3));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function kartotiEilute2(str, kiekis = 1) {
  let rezultatas = "";

  for (let i = 0; i < kiekis; i++) {
    rezultatas += str;
  }

  return rezultatas;
}

console.log(kartotiEilute2("Ha!"));
console.log(kartotiEilute2("Ha!", 2));
console.log(kartotiEilute2("Ha!", 3));
