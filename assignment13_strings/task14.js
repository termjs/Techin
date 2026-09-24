// 14. "didziosiosZodziuRaides"
// Antrastese kiekvienas zodis dazniausiai prasideda didziaja raide.
// Uzduotis:
// Sukurk funkcija, kuri kiekvieno eilutes zodzio pirma raide pavercia didziaja.
// Pvz.:
// didziosiosZodziuRaides("js string exercises") -> "Js String Exercises"

// .split() ir .map() variantas
console.log("split ir map variantas");

function didziosiosZodziuRaides1(str) {
  return str
    .split(" ")
    .map((zodis) => zodis.charAt(0).toUpperCase() + zodis.slice(1))
    .join(" ");
}

console.log(didziosiosZodziuRaides1("js string exercises"));

// .replace() su regex variantas
console.log("\nreplace su regex variantas");

function didziosiosZodziuRaides2(str) {
  // \b\w zymi pirma kiekvieno zodzio raide
  return str.replace(/\b\w/g, (raide) => raide.toUpperCase());
}

console.log(didziosiosZodziuRaides2("js string exercises"));
