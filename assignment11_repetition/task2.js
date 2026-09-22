// 2. „atrinkPoilsioDienas“
// Visiems reikia poilsio, net ir JavaScript mokiniams.
// Užduotis:
// Turi masyvą, pvz.:
// ["Pirmadienis: 5h mokymosi", "Antradienis: 2h mokymosi", ...]
// 1. Išfiltruok tik tas dienas, kuriose valandų < 3. Užuomina: valandas gali ištraukti naudodamas
// parseInt(...).
// 2. Prie kiekvienos pridėk humoristinį sakinį:
// " – pagaliau pailsėjai bent truputį!"
// 3. Grąžink naują masyvą.
// Pvz.:
// atrinkPoilsioDienas(["Pirmadienis: 5h","Antradienis: 2h"]) → ["Antradienis: 2h – pagaliau
// pailsėjai bent truputį!"]

// for...of variantas su .split()
console.log("for of ir split variantas");

function atrinkPoilsioDienas1(arr) {
  let newArr = [];

  for (const element of arr) {
    // splits padalina teksta ties dvitaskiu, o parseInt() paima pirma skaiciu is antros dalies
    let valandos = parseInt(element.split(":")[1]);

    if (valandos < 3) {
      newArr.push(element + " – pagaliau pailsėjai bent truputį!");
    }
  }

  return newArr;
}

console.log(
  atrinkPoilsioDienas1([
    "Pirmadienis: 5h mokymosi",
    "Antradienis: 2h mokymosi",
  ]),
);

// modernus .filter() ir .map() variantas
console.log("\nfilter ir map grandine");

function atrinkPoilsioDienas2(arr) {
  return (
    arr
      // pirmiausia atrenkame tik tas dienas, kurios atitinka salyga
      .filter((elementas) => parseInt(elementas.split(":")[1]) < 3)
      // tada prie atrinktu dienu pridedame teksto galune
      .map((elementas) => `${elementas} – pagaliau pailsėjai bent truputį!`)
  );
}

console.log(
  atrinkPoilsioDienas2([
    "Pirmadienis: 5h mokymosi",
    "Antradienis: 2h mokymosi",
  ]),
);

// klasikinis for variantas su regex
console.log("\nklasikinis for ir regex variantas");

function atrinkPoilsioDienas3(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // /\d+/ suranda bet koki skaiciu tekste be jokio split karpymo
    let valandos = parseInt(arr[i].match(/\d+/)[0]);

    if (valandos < 3) {
      newArr.push(`${arr[i]} – pagaliau pailsėjai bent truputį!`);
    }
  }

  return newArr;
}

console.log(
  atrinkPoilsioDienas3([
    "Pirmadienis: 5h mokymosi",
    "Antradienis: 2h mokymosi",
  ]),
);
