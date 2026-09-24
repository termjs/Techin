// 1. "pasalinkTarpus"
// Kartais norisi teksta suspausti be jokiu tarpu.
// Uzduotis:
// Sukurk funkcija, kuri pagal duota eilute grazina visa jos turini, bet be tarpu.
// Pvz.:
// pasalinkTarpus("Labas diena") -> "Labasdiena"

// .split() ir .join() variantas
console.log("split ir join variantas");

function pasalinkTarpus1(str) {
  // padalinam eilute per tarpus ir vel sujungiam is atskiru elementu i viena
  return str.split(" ").join();
}

console.log(pasalinkTarpus1("Labas rytas visiems"));

// .replace() su regex variantas
console.log("\nreplace su regex variantas");

function pasalinkTarpus2(str) {
  // /\s/g surenka visus tarpo tipo simbolius visoje eiluteje
  return str.replace(/\s/g, "");
}

console.log(pasalinkTarpus2("Labas rytas visiems"));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function pasalinkTarpus3(str) {
  let rezultatas = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      rezultatas += str[i];
    }
  }

  return rezultatas;
}

console.log(pasalinkTarpus3("Labas rytas visiems"));
