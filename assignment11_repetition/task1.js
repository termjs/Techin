// 1. „suskaiciuokDienosKrūvį“
// Šiandien viską norim suspėti: ir mokytis, ir dirbti, ir dar truputį pagyventi.
// Užduotis:
// Sukurk funkciją, kuri priima du skaičius: kiek valandų mokinys dirbo ir kiek mokėsi.
// 1. Suskaičiuok bendrą krūvį.
// 2. Jei > 10 val., grąžink:
// "Per stipriai varai! Šiandien: X val."
// Kitaip:
// "Gerai paskirstyta diena: X val."
// Pvz.:
// su skaiciuokDienosKrūvį(4, 7) → "Per stipriai varai! Šiandien: 11 val."

// ternary operatoriaus variantas
console.log("ternary variantas");

function suskaiciuokDienosKruvi1(sk1, sk2) {
  let suma = sk1 + sk2;

  // patikriname salyga viena eilute
  return suma > 10
    ? `Per stipriai varai! Šiandien: ${suma} val.`
    : `Gerai paskirstyta diena: ${suma} val.`;
}

console.log(suskaiciuokDienosKruvi1(4, 7));

// If/else variantas
console.log("\nif else variantas");

function suskaiciuokDienosKruvi2(sk1, sk2) {
  let suma = sk1 + sk2;

  // tradicine struktura lengvesniam skaitymui
  if (suma > 10) {
    return `Per stipriai varai! Šiandien: ${suma} val.`;
  } else {
    return `Gerai paskirstyta diena: ${suma} val.`;
  }
}

console.log(suskaiciuokDienosKruvi2(4, 7));

// Arrow funkcijos variantas vienoje eiluteje
console.log("\narrow function variantas");

// sutraukiame visa funkcija i eilute
const suskaiciuokDienosKruvi3 = (sk1, sk2) =>
  sk1 + sk2 > 10
    ? `Per stipriai varai! Šiandien: ${sk1 + sk2} val.`
    : `Gerai paskirstyta diena: ${sk1 + sk2} val.`;

console.log(suskaiciuokDienosKruvi3(4, 7));
