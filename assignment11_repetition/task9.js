// 9. „atrinkPoilsioVeiklas“
// Po mokymosi dienos reikia poilsio. Bent jau truputį.
// Užduotis:
// Duotas masyvas:
// ["Mokytis JS", "Kartoti medžiagą", "Pietūs", "Pasivaikščioti", "Serialas", "Žaidimai"]
// Išfiltruok tik tas veiklas, kurių pavadinimas > 6 raidžių.
// Grąžink.
// Pvz:
// → ["Kartoti medžiagą","Pasivaikščioti","Serialas","Meditacija"]

// Standartinis, lengviausiai suprantamas su for loop
console.log("For loop #1");

function atrinkPoilsioVeiklas1(arr) {
  let newArr = [];
  // sukasi 6 kartus (jei naudot <= butu OOB)
  for (let i = 0; i < arr.length; i++) {
    // jei i elemento ilgis > 6
    if (arr[i].length > 6) {
      // pridedam i newArr masyva
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(
  atrinkPoilsioVeiklas1([
    "Mokytis JS",
    "Kartoti medžiagą",
    "Pietūs",
    "Pasivaikščioti",
    "Serialas",
    "Žaidimai",
  ]),
);

// Sutrumpintas for loop, tas pats performance pagal Big-O
console.log("\nFor loop #2");

function atrinkPoilsioVeiklas2(arr) {
  let newArr = [];
  // elementas priklausantis arr masyvui
  for (const element of arr) {
    // jei elemento ilgis > 6
    if (element.length > 6) {
      // prideda i newArr masyva
      newArr.push(element);
    }
  }

  return newArr;
}

console.log(
  atrinkPoilsioVeiklas2([
    "Mokytis JS",
    "Kartoti medžiagą",
    "Pietūs",
    "Pasivaikščioti",
    "Serialas",
    "Žaidimai",
  ]),
);

// forEach variantas
console.log("\nforEach ciklas");

function atrinkPoilsioVeiklas3(arr) {
  let newArr = [];
  // paima is arr masyvo kiekviena elementa eiles tvarka
  arr.forEach((element) => {
    // tikrina ar elemento ilgis > 6
    if (element.length > 6) {
      // prideda i newArr masyva
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(
  atrinkPoilsioVeiklas3([
    "Mokytis JS",
    "Kartoti medžiagą",
    "Pietūs",
    "Pasivaikščioti",
    "Serialas",
    "Žaidimai",
  ]),
);

// while variantas
console.log("\nwhile ciklas");

function atrinkPoilsioVeiklas4(arr) {
  let newArr = [];

  // vykdo, kol arr ilgis > 0
  while (arr.length > 0) {
    // jei ilgenis nei 6
    if (arr[0].length > 6) {
      // prideda pirma elementa prie newArr masyvo
      newArr.push(arr[0]);
    }
    // istrina pirma elementa is duoto masyvo
    arr.shift();
  }

  return newArr;
}

console.log(
  atrinkPoilsioVeiklas4([
    "Mokytis JS",
    "Kartoti medžiagą",
    "Pietūs",
    "Pasivaikščioti",
    "Serialas",
    "Žaidimai",
  ]),
);
