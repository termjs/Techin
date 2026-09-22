// 13. „skaiciuokAtideliojimą“
// Nes visi kartais atidėliojam. Net labai...
// Užduotis:
// Priima masyvą minučių per kelias dienas, kiek atidėliojai, pvz.: [20, 30, 40]
// Suskaičiuok sumą.
// Jei > 100 → "Uff... atidėliojimo per daug: X min"
// Kitaip → "Pakenčiama: X min"

function skaiciuokAtideliojima(arr) {
  let atideta = 0;
  for (let element of arr) {
    atideta += element;
  }

  return atideta > 100
    ? `Uff... atidėliojimo per daug: ${atideta} min`
    : `Pakenčiama: ${atideta} min`;
}

console.log(skaiciuokAtideliojima([20, 30, 40]));
console.log(skaiciuokAtideliojima([120, 20, 50]));
