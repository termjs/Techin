// 20. "zmoniskasFormatas"
// Skaicius grazu uzrasyti su tinkama galune (1st, 2nd, 3rd, 4th).
// Uzduotis:
// Sukurk funkcija, kuri suformatuoja skaiciu i zmogui suprantama eilute su tinkama galune.
// Pvz.:
// zmoniskasFormatas() -> undefined
// zmoniskasFormatas(1) -> "1st"
// zmoniskasFormatas(8) -> "8th"
// zmoniskasFormatas(301) -> "301st"
// zmoniskasFormatas(402) -> "402nd"

// switch operatoriaus variantas
console.log("switch operatoriaus variantas");

function zmoniskasFormatas1(skaicius) {
  if (skaicius === undefined) return undefined;

  // 11, 12, 13 visada baigiasi "th", nepaisant paskutinio skaitmens
  let paskutiniDu = skaicius % 100;

  if (paskutiniDu >= 11 && paskutiniDu <= 13) {
    return `${skaicius}th`;
  }

  switch (skaicius % 10) {
    case 1:
      return `${skaicius}st`;
    case 2:
      return `${skaicius}nd`;
    case 3:
      return `${skaicius}rd`;
    default:
      return `${skaicius}th`;
  }
}

console.log(zmoniskasFormatas1());
console.log(zmoniskasFormatas1(1));
console.log(zmoniskasFormatas1(8));
console.log(zmoniskasFormatas1(301));
console.log(zmoniskasFormatas1(402));

// objekto ir ternary variantas
console.log("\nobjekto ir ternary variantas");

function zmoniskasFormatas2(skaicius) {
  if (skaicius === undefined) return undefined;

  let paskutiniDu = skaicius % 100;
  let galunes = { 1: "st", 2: "nd", 3: "rd" };

  // jei paskutiniai du skaitmenys yra 11-13, arba nera specialios galunes, naudojam "th"
  let galune =
    paskutiniDu >= 11 && paskutiniDu <= 13 ? "th" : galunes[skaicius % 10] || "th";

  return `${skaicius}${galune}`;
}

console.log(zmoniskasFormatas2());
console.log(zmoniskasFormatas2(1));
console.log(zmoniskasFormatas2(8));
console.log(zmoniskasFormatas2(301));
console.log(zmoniskasFormatas2(402));
