// 15. „numeruokJS Dalykus“
// JS kelias ilgas. Bet kai jis sunumeruotas, tada lengviau.
// Užduotis:
// Masyvas:
// ["Kintamieji","Ciklai","Masyvai","Funkcijos","Objektai"]
// Sukurk: "1. Kintamieji", "2. Ciklai" ir t. t.

function numeruokJS(arr) {
  let newArr = [];
  for (const [index, element] of arr.entries()) {
    newArr.push(`${index + 1}. ${element}`);
  }

  return newArr;
}

console.log(
  numeruokJS(["Kintamieji", "Ciklai", "Masyvai", "Funkcijos", "Objektai"]),
);
