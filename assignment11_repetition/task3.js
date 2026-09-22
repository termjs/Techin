// 3. „sudarykMotyvaciniPlana“
// Motyvaciją kartais reikia rašyti ranka… arba JavaScript’u.
// Užduotis:
// Turi masyvą darbų, pvz.: ["Kartoti JS", "Sportuoti", "Perskaityti dokumentacią"]
// Naudodamas for, sudaryk naują masyvą:
// "Kartoti JS – Aš galiu!".
// Pvz.:
// → ["Kartoti JS – Aš galiu!", "Sportuoti – Aš galiu!", "Perskaityti dokumentacią - Aš
// galiu!"]

// for...of ciklo variantas
console.log("for of variantas");

function sudarykMotyvaciniPlana1(arr) {
  let newArr = [];
  // sukasi per visus masyvo elementus tiesiogiai
  for (let element of arr) {
    element += " – Aš galiu!";
    newArr.push(element);
  }

  return newArr;
}

console.log(
  sudarykMotyvaciniPlana1([
    "Kartoti JS",
    "Sportuoti",
    "Perskaityti dokumentacią",
  ]),
);

// klasikinis for ciklas su indeksais
console.log("\nklasikinis for variantas");

function sudarykMotyvaciniPlana2(arr) {
  let newArr = [];
  // sukasi per masyvo indeksus nuo 0 iki ilgio ribos (OOB apsauga)
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i]} – Aš galiu!`);
  }

  return newArr;
}

console.log(
  sudarykMotyvaciniPlana2([
    "Kartoti JS",
    "Sportuoti",
    "Perskaityti dokumentacią",
  ]),
);

// modernus .map() variantas
console.log("\nmodernus map variantas");

function sudarykMotyvaciniPlana3(arr) {
  // transformuoja kiekviena elementa pridedant teksto galune
  return arr.map((elementas) => `${elementas} – Aš galiu!`);
}

console.log(
  sudarykMotyvaciniPlana3([
    "Kartoti JS",
    "Sportuoti",
    "Perskaityti dokumentacią",
  ]),
);
