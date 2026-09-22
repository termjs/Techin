// 7. „penktadienioTvarkytojas“
// Ateina penktadienis → rimti darbai turi dingti, o likt tik smagūs.
// Užduotis:
// Du masyvai:
// Rimti darbai: ["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"]
// Smagūs darbai: ["Pyragas", "Pasivaikščiojimas", "Žaidimai"]
// 1. Sujunk masyvus.
// 2. Nukirpk visus rimtus darbus palikdamas tik smagius.
// 3. Grąžink tik smagių veiklų masyvą.
// Pvz:
// → ["Pyragas","Pasivaikščiojimas","Žaidimai"]

// isskleidimo ir .splice() variantas
console.log("Isskleidimas ir .splice()");

function penktadienioTvarkytojas1(arr1, arr2) {
  let darbai = [...arr1, ...arr2]; // sukuriam nauja masyvo kintamaji ir isskleidziam 1 ir 2-ta is savu masyvu
  darbai.splice(0, arr1.length); // nukerpam nuo pirmo elemento iki arr1 ilgio elemento

  return darbai;
}

console.log(
  penktadienioTvarkytojas1(
    ["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"],
    ["Pyragas", "Pasivaikščiojimas", "Žaidimai"],
  ),
);

// for loop variantas
console.log("\n.shift() ir for loop");

function penktadienioTvarkytojas2(arr1, arr2) {
  let darbai = [...arr1, ...arr2];

  // sukasi tiek kartu, kiek yra elementu arr1 masyve
  for (let i = 0; i < arr1.length; i++) {
    darbai.shift(); // kiekviena ciklo karta ismeta po viena nuo pradzios
  }

  return darbai;
}

console.log(
  penktadienioTvarkytojas2(
    ["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"],
    ["Pyragas", "Pasivaikščiojimas", "Žaidimai"],
  ),
);

// .filter() variantas
console.log("\nFiltravimas naudojant .filter()");

function penktadienioTvarkytojas3(arr1, arr2) {
  let darbai = [...arr1, ...arr2];
  return darbai.filter((darbas) => !arr1.includes(darbas)); // palieka tik tuos, kuriu nera arr1
}

console.log(
  penktadienioTvarkytojas3(
    ["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"],
    ["Pyragas", "Pasivaikščiojimas", "Žaidimai"],
  ),
);
