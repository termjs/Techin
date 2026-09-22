// 11. „skaiciuokPuslapius“
// Kiek puslapių šiandien pavyks perskaityti iš dokumentacijos?
// Užduotis:
// Priimk skaičių X – kiek laiko turi (min).
// Naudodamas do…while, skaičiuok, kas 10 minučių perskaitai vieną puslapį.
// Grąžink kiek puslapių įveikei.
// Pvz:
// skaiciuokPuslapius(35) → 3

// Standartinis variantas su return
console.log("Return variantas");

function skaiciuokPuslapius1(laikas) {
  let puslapiai = 0;

  if (laikas < 10) return; // jei laikas < 10 nutraukiam funkcija

  do {
    laikas -= 10; // minusuojam 10 min nuo laiko ir issaugome reiksme
    puslapiai++; // pridedam +1 prie puslapiai kintamojo
  } while (laikas > 10); // kol laikas > 10

  return puslapiai;
}

console.log(skaiciuokPuslapius1(35));

// Break variantas
console.log("\nBreak variantas");

function skaiciuokPuslapius2(laikas) {
  let puslapiai = 0;

  do {
    // jei laiko neuztenka pilnam puslapiui stabdom cikla
    if (laikas < 10) {
      break;
    }

    laikas -= 10;
    puslapiai++;
  } while (laikas > 0);

  return puslapiai;
}

console.log(skaiciuokPuslapius2(35));

console.log("\nBlogas sprendimas be patikros");

// Blogas variantas, gal atrodo, kad apvalina ir todel gaunasi 4
// bet kodas veikia kitaip (do salyga visada pirmiau skaitoma nei while)

function skaiciuokPuslapius3(laikas) {
  let puslapiai = 0;
  do {
    // pradedama do dalis
    laikas -= 10; // 35 - 10 = 25           15 / 5 / -5
    puslapiai++; // 0 + 1 = 1               2 / 3 / 4
  } while (laikas > 0); // 25 > 0 = true    true / true / false

  return puslapiai; // 4
}

console.log(skaiciuokPuslapius3(35));
