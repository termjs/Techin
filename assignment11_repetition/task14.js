// 14. „sudarykBalansoAtaskaita“
// Darbas + Poilsis = Balansas.
// Užduotis:
// Turi du masyvus:
// Darbas: ["Mokytis","Kartoti","Testuoti"]
// Poilsis: ["Pietūs","Pasivaikščiojimas","Miegas"]
// Sujunk abu masyvus ir grąžink tekstą:
// "Dienos balansas: X veiklų."

function sudarykBalansoAtaskaita(darbas, poilsis) {
  let newArr = [...darbas, ...poilsis];
  return `Dienos balansas: ${newArr.length} veiklų.`;
}

console.log(
  sudarykBalansoAtaskaita(
    ["Mokytis", "Kartoti", "Testuoti"],
    ["Pietūs", "Pasivaikščiojimas", "Miegas"],
  ),
);
