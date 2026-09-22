// 10. „apverstiMokymosiTvarkarastį“
// Tvarkaraštis aukštyn kojomis – klasika.
// Užduotis:
// Masyvas mokymosi dalykų:
// ["JavaScript","Java","Python","C#","Duomenų bazės","HTML/CSS","Operacinės sistemos"]
// Apversk tvarką (reverse)
// Grąžink.

// .reverse() metodas
console.log("Trumpiausias variantas su .reverse()");
function apverstiMokymosiTvarkarasi1(arr) {
  return arr.reverse();
}

console.log(
  apverstiMokymosiTvarkarasi1([
    "JavaScript",
    "Java",
    "Python",
    "C#",
    "Duomenų bazės",
    "HTML/CSS",
    "Operacinės sistemos",
  ]),
);

// Galinis for loop
console.log("\nfor loop ciklas, bet atvirkščiai");

function apverstiMokymosiTvarkarasi2(arr) {
  let newArr = [];
  // ciklas prasideda nuo paskutinio elemento index ir eina atgal iki 0
  for (let i = arr.length - 1; i >= 0; i--) {
    // prideda "i" index elementa i newArr
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(
  apverstiMokymosiTvarkarasi2([
    "JavaScript",
    "Java",
    "Python",
    "C#",
    "Duomenų bazės",
    "HTML/CSS",
    "Operacinės sistemos",
  ]),
);

// forEach variantas
console.log("\nforEach variantas");

function apverstiMokymosiTvarkarasi3(arr) {
  let newArr = [];
  // eina per masyva is eiles ir kiekviena elementa stumia i newArr pradzia
  arr.forEach(function (dalykas) {
    newArr.unshift(dalykas);
  });

  return newArr;
}

console.log(
  apverstiMokymosiTvarkarasi3([
    "JavaScript",
    "Java",
    "Python",
    "C#",
    "Duomenų bazės",
    "HTML/CSS",
    "Operacinės sistemos",
  ]),
);

// short for variantas + .unshift()
console.log("\nshort for (for...of) variantas");

function apverstiMokymosiTvarkarasi4(arr) {
  let newArr = [];
  // paima pati elementa is eiles be indexu ir stumia i newArr pradzia
  for (let dalykas of arr) {
    newArr.unshift(dalykas);
  }

  return newArr;
}

console.log(
  apverstiMokymosiTvarkarasi4([
    "JavaScript",
    "Java",
    "Python",
    "C#",
    "Duomenų bazės",
    "HTML/CSS",
    "Operacinės sistemos",
  ]),
);

// for su newArr ir paskutinio elemento pasalinimu ir pridejimu
console.log("\nfor su newArr ir paskutinio elemento pasalinimu ir pridejimu");

function apverstiMokymosiTvarkarasi5(arr) {
  let tempArr = [...arr]; // nukopijuojam pradini masyva, kuri cikle tustinsime
  let newArr = [];

  // kol kopijoje yra elementu, isimame po viena is galo ir dedame i newArr
  while (tempArr.length > 0) {
    newArr.push(tempArr.pop()); // .pop() pasalina elementa is galo ir grazina ji tiesiai i .push()
  }

  return newArr;
}

console.log(
  apverstiMokymosiTvarkarasi5([
    "JavaScript",
    "Java",
    "Python",
    "C#",
    "Duomenų bazės",
    "HTML/CSS",
    "Operacinės sistemos",
  ]),
);
