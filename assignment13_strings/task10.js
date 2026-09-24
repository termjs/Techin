// 10. "sutrumpintiVarda"
// Varda ir pavarde kartais patogu uzrasyti sutrumpinta forma.
// Uzduotis:
// Sukurk funkcija, kuri pavercia vardo ir pavardes eilute sutrumpinta forma.
// Pvz.:
// sutrumpintiVarda("Robin Singh") -> "Robin S."

// .split() ir sablonine eilute variantas
console.log("split ir sablonine eilute variantas");

function sutrumpintiVarda1(str) {
  let dalys = str.split(" ");
  // paimam pirma pavardes raide ir pridedam taska
  return `${dalys[0]} ${dalys[1][0]}.`;
}

console.log(sutrumpintiVarda1("Robin Singh"));

// .replace() su regex variantas
console.log("\nreplace su regex variantas");

function sutrumpintiVarda2(str) {
  // suranda tarpa, po kurio eina viena raide, ir palieka tik ta raide su tasku
  return str.replace(/\s(\w)\w*$/, " $1.");
}

console.log(sutrumpintiVarda2("Robin Singh"));
