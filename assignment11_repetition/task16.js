// 16. „ieskokSavaitgalio“
// Kiekvienas mokinys nori rasti savaitgalį… net koduose.
// Užduotis:
// Sudaryk masyvą (7 reikšmės – kiekviena reikšmė, kiek minutėmis mokeisi kiekvieną savaitės dieną), pvz.:
// [180, 240, 300, 200, 400, 50, 60]
// Poilsio diena laikoma, jei minutės < 120.
// Jei bent viena tokia diena yra → "Puiku – rastas savaitgalis!"
// Jei nėra → "Reikia poilsio dienos!!!"

function ieskokSavaitgalio(arr) {
  let poilsis = "Reikia poilsio dienos!!!";
  for (let element of arr) {
    if (element < 120) {
      return (poilsis = "Puiku – rastas savaitgalis!");
    }
  }

  return poilsis;
}

console.log(ieskokSavaitgalio([180, 240, 300, 200, 400, 50, 60]));
