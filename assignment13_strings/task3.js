// 3. "gautiAkronima"
// Ilgus pavadinimus patogu sutrumpinti iki akronimo.
// Uzduotis:
// Sukurk funkcija, kuri pagal duota eilute grazina jos akronima (pirma kiekvieno zodzio raide, didziaja).
// Pvz.:
// gautiAkronima("java script exercises") -> "JSE"

// .split() ir .map() variantas
console.log("split ir map variantas");

function gautiAkronima1(str) {
  return str
    .split(" ")
    // is kiekvieno zodzio paimam tik pirma raide ir paverciam didziaja
    .map((zodis) => zodis[0].toUpperCase())
    .join("");
}

console.log(gautiAkronima1("java script exercises"));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function gautiAkronima2(str) {
  let zodziai = str.split(" ");
  let akronimas = "";

  for (let i = 0; i < zodziai.length; i++) {
    akronimas += zodziai[i][0].toUpperCase();
  }

  return akronimas;
}

console.log(gautiAkronima2("java script exercises"));

// .reduce() variantas
console.log("\nreduce variantas");

function gautiAkronima3(str) {
  return str.split(" ").reduce((acc, zodis) => acc + zodis[0].toUpperCase(), "");
}

console.log(gautiAkronima3("java script exercises"));
