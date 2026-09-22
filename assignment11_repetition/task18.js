// 18. „sujunkIrIsryskinkVeiklas“
// Kartais norisi, kad poilsis būtų MATOMAS akimis.
// Užduotis:
// Turi du masyvus:
// Darbas: ["Mokytis JS","Ateiti į pamokas","Kartotis"]
// Poilsis: ["Miegas","Serialai","Maistas"]
// 1. Sujunk abu.
// 2. Poilsio elementus paversk DIDŽIOSIOMIS RAIDĖMIS.
// 3. Grąžink masyvą.

// Modernus variantas
console.log(".map() + ternary variantas");
function sujunkIrIsryskinkVeiklas1(darbas, poilsis) {
  // sujungiam abu isskleistus masyvus
  let newArr = [...darbas, ...poilsis];

  // pereinam per visus elementus, jei elementas yra poilsio masyve
  // paverciam ji didziosiomis raidemis, kitu atveju paliekam koks yra
  return newArr.map((veikla) =>
    poilsis.includes(veikla) ? veikla.toUpperCase() : veikla,
  );
}

console.log(
  sujunkIrIsryskinkVeiklas1(
    ["Mokytis JS", "Ateiti į pamokas", "Kartotis"],
    ["Miegas", "Serialai", "Maistas"],
  ),
);

// Lengviausias suprasti naudojant for cikla
console.log("\nfor loop variantas");
function sujunkIrIsryskinkVeiklas2(darbas, poilsis) {
  let newArr = [...darbas, ...poilsis];

  // ciklas per sujungta masyva
  for (let i = 0; i < newArr.length; i++) {
    // jei elementas yra poilsio masyve
    if (poilsis.includes(newArr[i])) {
      newArr[i] = newArr[i].toUpperCase(); // pakeiciam ji i didziasias raides
    }
  }

  return newArr;
}

console.log(
  sujunkIrIsryskinkVeiklas2(
    ["Mokytis JS", "Ateiti į pamokas", "Kartotis"],
    ["Miegas", "Serialai", "Maistas"],
  ),
);
