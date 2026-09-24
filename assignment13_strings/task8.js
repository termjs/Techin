// 8. "eiluteIMasyva"
// Eilute reikia padalinti i atskirus zodzius.
// Uzduotis:
// Sukurk funkcija, kuri padalina duota eilute ir paverciai ja zodziu masyvu.
// Pvz.:
// eiluteIMasyva("Robin Singh") -> ["Robin", "Singh"]

// .split() variantas
console.log("split variantas");

function eiluteIMasyva1(str) {
  return str.split(" ");
}

console.log(eiluteIMasyva1("Robin Singh"));

// .split() su regex variantas (tvarko kelis tarpus is eiles)
console.log("\nsplit su regex variantas");

function eiluteIMasyva2(str) {
  // /\s+/ leidzia teisingai padalinti net jei tarp zodziu yra keli tarpai
  return str.split(/\s+/);
}

console.log(eiluteIMasyva2("Robin   Singh"));
