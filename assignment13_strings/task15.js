// 15. "sukeistiRaides"
// Kartais norisi eilutes raidziu registra apversti priesinga.
// Uzduotis:
// Sukurk funkcija, kuri paima eilute su mazosiomis ir didziosiomis raidemis ir jas sukeicia vietomis
// (didziosios tampa mazosiomis, mazosios - didziosiomis).
// Pvz.:
// sukeistiRaides("AaBbc") -> "aAbBC"

// .split(), .map() ir ternary variantas
console.log("split, map ir ternary variantas");

function sukeistiRaides1(str) {
  return str
    .split("")
    .map((simbolis) =>
      simbolis === simbolis.toUpperCase()
        ? simbolis.toLowerCase()
        : simbolis.toUpperCase(),
    )
    .join("");
}

console.log(sukeistiRaides1("AaBbc"));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function sukeistiRaides2(str) {
  let rezultatas = "";

  for (let i = 0; i < str.length; i++) {
    let simbolis = str[i];

    if (simbolis === simbolis.toUpperCase()) {
      rezultatas += simbolis.toLowerCase();
    } else {
      rezultatas += simbolis.toUpperCase();
    }
  }

  return rezultatas;
}

console.log(sukeistiRaides2("AaBbc"));
