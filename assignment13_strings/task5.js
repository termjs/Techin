// 5. "pasalinkTrumpesnes"
// Reikia atsirinkti tik pakankamai ilgas eilutes is masyvo.
// Uzduotis:
// Sukurk funkcija, kuri pagal duota eiluciu masyva ir skaitine reiksme grazina masyva,
// kuriame yra tik tos eilutes, kuriu ilgis yra didesnis arba lygus duotai reiksmei.
// Pvz.:
// pasalinkTrumpesnes(["as", "labas", "diena"], 4) -> ["labas", "diena"]

// .filter() variantas
console.log("filter variantas");

function pasalinkTrumpesnes1(arr, ilgis) {
  // paliekam tik tas eilutes, kuriu ilgis atitinka salyga
  return arr.filter((eilute) => eilute.length >= ilgis);
}

console.log(pasalinkTrumpesnes1(["as", "labas", "diena"], 4));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function pasalinkTrumpesnes2(arr, ilgis) {
  let rezultatas = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= ilgis) {
      rezultatas.push(arr[i]);
    }
  }

  return rezultatas;
}

console.log(pasalinkTrumpesnes2(["as", "labas", "diena"], 4));

// .reduce() variantas
console.log("\nreduce variantas");

function pasalinkTrumpesnes3(arr, ilgis) {
  return arr.reduce((acc, eilute) => {
    if (eilute.length >= ilgis) acc.push(eilute);
    return acc;
  }, []);
}

console.log(pasalinkTrumpesnes3(["as", "labas", "diena"], 4));
