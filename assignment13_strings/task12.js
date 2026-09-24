// 12. "parametrizuotiEilute"
// URL adresams reikalingos "svarios" eilutes be tarpu ir skyrybos zenklu.
// Uzduotis:
// Sukurk funkcija, kuri paverciai eilute parametrizuota forma (mazosiomis raidemis, su bruksneliais).
// Pvz.:
// parametrizuotiEilute("Robin Singh from USA.") -> "robin-singh-from-usa"

// .toLowerCase(), .replace() grandine
console.log("replace grandine variantas");

function parametrizuotiEilute1(str) {
  return str
    .toLowerCase()
    // pasalinam viska, kas nera raide, skaicius ar tarpas
    .replace(/[^a-z0-9\s]/g, "")
    // tarpus paverciam bruksneliais
    .trim()
    .replace(/\s+/g, "-");
}

console.log(parametrizuotiEilute1("Robin Singh from USA."));

// .split() ir .filter() variantas
console.log("\nsplit ir filter variantas");

function parametrizuotiEilute2(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(" ")
    // atmetam tuscius elementus, jei buvo keli tarpai is eiles
    .filter((zodis) => zodis.length > 0)
    .join("-");
}

console.log(parametrizuotiEilute2("Robin Singh from USA."));

// paprasciausias variantas - viskas, kas ne raide/skaicius, iskart tampa "-"
console.log("\npaprasciausias variantas");

function parametrizuotiEilute3(str) {
  return str
    .toLowerCase()
    // bet koki tarpu/skyrybos bloka pakeiciam vienu bruksneliu
    .replace(/[^a-z0-9]+/g, "-")
    // nuimam bruksnelius pradzioje/gale (pvz. del taskiuko sakinio gale)
    .replace(/^-+|-+$/g, "");
}

console.log(parametrizuotiEilute3("Robin Singh from USA."));
