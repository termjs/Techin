// 6. "arTaiEilute"
// Reikia patikrinti, ar duotas kintamasis yra eilute (string).
// Uzduotis:
// Sukurk funkcija, kuri patikrina, ar duota reiksme yra eilute.
// Pvz.:
// arTaiEilute("w3resource") -> true
// arTaiEilute([1, 2, 4, 0]) -> false

// typeof variantas
console.log("typeof variantas");

function arTaiEilute1(reiksme) {
  return typeof reiksme === "string";
}

console.log(arTaiEilute1("w3resource"));
console.log(arTaiEilute1([1, 2, 4, 0]));

// Object.prototype.toString variantas
console.log("\nObject.prototype.toString variantas");

function arTaiEilute2(reiksme) {
  // universalesnis budas, veikia ir su new String() objektais
  return Object.prototype.toString.call(reiksme) === "[object String]";
}

console.log(arTaiEilute2("w3resource"));
console.log(arTaiEilute2([1, 2, 4, 0]));
