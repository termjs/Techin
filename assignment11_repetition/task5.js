// 5. „tvarkarastisSuPrioritetais“
// Kartais reikia nuspręsti, kas svarbiau: miegas ar JavaScript.
// Užduotis:
// Priimk masyvą objektų, pvz.:
// { uzduotis:"Kartoti JS", prioritetas:1 }
// Surūšiuok pagal prioritetą didėjančiai.
// Grąžink užduočių pavadinimus.
// Pvz.:
// → ["Kartoti JS","Pasportuoti"]

// .sort() ir .map() variantas
console.log("sort ir map modernus");

function tvarkarastisSuPrioritetais1(obj) {
  // surusiuojame didejanciai ir su map isimam tik pavadinimus
  return obj
    .sort((a, b) => a.prioritetas - b.prioritetas)
    .map((o) => o.uzduotis);
}

console.log(
  tvarkarastisSuPrioritetais1([
    { uzduotis: "Atsigerti alaus", prioritetas: 0.9 },
    { uzduotis: "Kartoti JS", prioritetas: 1 },
    { uzduotis: "Pasportuoti", prioritetas: 0.7 },
  ]),
);

// .sort() ir .map() tradicinis variantas
console.log("\nsort ir map tradicinis");

function tvarkarastisSuPrioritetais2(obj) {
  // naudoja tradicines funkcijas vietoj rodykliniu
  obj.sort(function (a, b) {
    return a.prioritetas - b.prioritetas;
  });
  return obj.map(function (o) {
    return o.uzduotis;
  });
}

console.log(
  tvarkarastisSuPrioritetais2([
    { uzduotis: "Atsigerti alaus", prioritetas: 0.9 },
    { uzduotis: "Kartoti JS", prioritetas: 1 },
    { uzduotis: "Pasportuoti", prioritetas: 0.7 },
  ]),
);

// .sort() ir for ciklas
console.log("\n.sort() ir for");

function tvarkarastisSuPrioritetais3(obj) {
  obj.sort((a, b) => a.prioritetas - b.prioritetas);
  let pavadinimai = [];
  // sukasi per visus objektus ir rankiniu budu ideda pavadinimus
  for (let i = 0; i < obj.length; i++) {
    pavadinimai.push(obj[i].uzduotis);
  }
  return pavadinimai;
}

console.log(
  tvarkarastisSuPrioritetais3([
    { uzduotis: "Atsigerti alaus", prioritetas: 0.9 },
    { uzduotis: "Kartoti JS", prioritetas: 1 },
    { uzduotis: "Pasportuoti", prioritetas: 0.7 },
  ]),
);

// .reduce() variantas
console.log("\nreduce variantas");

function tvarkarastisSuPrioritetais4(obj) {
  obj.sort((a, b) => a.prioritetas - b.prioritetas);
  // akumuliatorius (acc) surenka visus pavadinimus i viena masyva
  return obj.reduce((acc, o) => {
    acc.push(o.uzduotis);
    return acc;
  }, []);
}

console.log(
  tvarkarastisSuPrioritetais4([
    { uzduotis: "Atsigerti alaus", prioritetas: 0.9 },
    { uzduotis: "Kartoti JS", prioritetas: 1 },
    { uzduotis: "Pasportuoti", prioritetas: 0.7 },
  ]),
);
