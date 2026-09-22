// 19. „apskaiciuokBalansoIndeksa“
// Ar tavo diena labiau „darbas“, ar „Netflix“?
// Užduotis:
// Priima 2 skaičius: darbasValandomis, poilsisValandomis.
// Apskaičiuok poilsis/darbas.
// 1 → "Idealus balansas"
// 0.5–1 → "Geras balansas"
// <0.5 → "Reikia atostogų"

// Ternary sprendimas
console.log("ternary variantas");

console.log("Ternary sprendimas be kintamojo (sunkiau skaitomas)");
function apskaiciuokBalansoIndeksa1(darbasValandomis, poilsisValandomis) {
  return poilsisValandomis / darbasValandomis >= 1
    ? "Idealus balansas"
    : poilsisValandomis / darbasValandomis >= 0.5
      ? "Geras balansas"
      : "Reikia atostogų";
}

console.log(apskaiciuokBalansoIndeksa1(8, 8));
console.log(apskaiciuokBalansoIndeksa1(10, 1));
console.log(apskaiciuokBalansoIndeksa1(15, 0));

// Sprendimas su if
console.log("\nif variantas");

function apskaiciuokBalansoIndeksa2(darbasValandomis, poilsisValandomis) {
  const indeksas = poilsisValandomis / darbasValandomis;

  if (indeksas === 1) return "Idealus balansas";
  if (indeksas >= 0.5 && indeksas < 1) return "Geras balansas";
  return "Reikia atostogų";
}

console.log(apskaiciuokBalansoIndeksa2(8, 8));
console.log(apskaiciuokBalansoIndeksa2(10, 1));
console.log(apskaiciuokBalansoIndeksa2(15, 0));
