// 12. „trumpinkDienosPlana“
// Neperdegti → svarbiausia taisyklė.
// Užduotis:
// Sudaryk savo dienos darbų masyvą, pvz.:
// ["Mokytis JS","Kartuoti","Sportuoti","Sutvarkyti kambarį","Paskaityti","Išnešti
// šiukšles"]
// Jei elementų > 5, nukirpk iki 5.
// Surikiuok abėcėlės tvarka.
// Grąžink.

// Paprasciausias sprendimas
console.log(".slice() + .sort()");

function trumpinkDienosPlana(arr) {
  let newArr = [];
  if (arr.length > 5) {
    newArr = arr.slice(0, 5);
    newArr.sort();
  }

  return newArr;
}

console.log(
  trumpinkDienosPlana([
    "Mokytis JS",
    "Kartuoti",
    "Sportuoti",
    "Sutvarkyti kambarį",
    "Paskaityti",
    "Išnešti šiukšles",
  ]),
);
