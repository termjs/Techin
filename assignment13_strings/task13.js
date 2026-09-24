// 13. "didziojiPirmaRaide"
// Sakinio pradzia dazniausiai rasoma didziaja raide.
// Uzduotis:
// Sukurk funkcija, kuri eilutes pirma raide pavercia didziaja.
// Pvz.:
// didziojiPirmaRaide("js string exercises") -> "Js string exercises"

// .charAt() ir .slice() variantas
console.log("charAt ir slice variantas");

function didziojiPirmaRaide1(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(didziojiPirmaRaide1("js string exercises"));

// destrukturizacijos variantas
console.log("\ndestrukturizacijos variantas");

function didziojiPirmaRaide2(str) {
  const [pirma, ...likusi] = str;
  return pirma.toUpperCase() + likusi.join("");
}

console.log(didziojiPirmaRaide2("js string exercises"));
