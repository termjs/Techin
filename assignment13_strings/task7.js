// 7. "arTuscia"
// Reikia patikrinti, ar eilute yra tuscia.
// Uzduotis:
// Sukurk funkcija, kuri patikrina, ar duota eilute yra tuscia.
// Pvz.:
// arTuscia("") -> true
// arTuscia("abc") -> false

// .length variantas
console.log("length variantas");

function arTuscia1(str) {
  return str.length === 0;
}

console.log(arTuscia1(""));
console.log(arTuscia1("abc"));

// grieztos lygybes variantas
console.log("\ngrieztos lygybes variantas");

function arTuscia2(str) {
  return str === "";
}

console.log(arTuscia2(""));
console.log(arTuscia2("abc"));
