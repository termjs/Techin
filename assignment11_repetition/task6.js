// 6. „susidarykToDo“
// To-do sąrašai visada prasideda rimtai ir baigiasi serialu.
// Užduotis:
// Susidaryk masyvą darbų.
// 1. Į pabaigą įdėk „Išgerti arbatos“.
// 2. Paskui išmesk pirmą darbą („anksti atsikelt“ taip ir neįvyks).
// 3. Grąžink likusius.

// .shift() ir .push() variantas
console.log("shift ir push");

function susidarykToDo1(arr) {
  arr.push("Išgerti arbatos");
  arr.shift();
  return arr;
}

console.log(
  susidarykToDo1([
    "Anksti atsikelt",
    "Paruošti buhalteriją",
    "Nusipirkti alaus",
    "Eiti programuoti",
  ]),
);

// .splice() variantas
console.log("\nsplice ir push");

function susidarykToDo2(arr) {
  arr.push("Išgerti arbatos");
  // .splice(nuo kurio indekso, kiek elementu istrinti)
  arr.splice(0, 1); // istriname 1 elementa is pirmos pozicijos
  return arr;
}

console.log(
  susidarykToDo2([
    "Anksti atsikelt",
    "Paruošti buhalteriją",
    "Nusipirkti alaus",
    "Eiti programuoti",
  ]),
);

// spread ir .slice() variantas
console.log("\nspread ir slice");

function susidarykToDo3(arr) {
  // .slice(1) nukopijuoja masyva nuo 1 indekso iki galo, taip atmesdamas 0 indeksa
  // naudojant spread (...), naujame masyve sujungiame ta dali su nauju tekstu
  return [...arr.slice(1), "Išgerti arbatos"];
}

console.log(
  susidarykToDo3([
    "Anksti atsikelt",
    "Paruošti buhalteriją",
    "Nusipirkti alaus",
    "Eiti programuoti",
  ]),
);

// .filter() variantas
console.log("\nfilter ir push");

function susidarykToDo4(arr) {
  // pasiliekame elementus, kuriu indeksas (i) nera lygus 0
  let likusieji = arr.filter((i) => i !== 0);
  likusieji.push("Išgerti arbatos");
  return likusieji;
}

console.log(
  susidarykToDo4([
    "Anksti atsikelt",
    "Paruošti buhalteriją",
    "Nusipirkti alaus",
    "Eiti programuoti",
  ]),
);
