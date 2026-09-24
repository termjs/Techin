// 21. "apkarpykTeksta"
// Ilgus tekstus dazniausiai reikia apkarpyti, kad tilptu i skirta vieta.
// Uzduotis:
// Sukurk funkcija, kuri apkarpo eilute, jei ji ilgesne nei nurodytas simboliu skaicius.
// Apkarpyta eilute baigiasi elipse "..." (numatytasis) arba nurodytais simboliais.
// Pvz.:
// apkarpykTeksta("We are doing JS string exercises.") -> "We are doing JS string exercises."
// apkarpykTeksta("We are doing JS string exercises.", 19) -> "We are doing JS ..."
// apkarpykTeksta("We are doing JS string exercises.", 15, "!!") -> "We are doing !!"

// .slice() variantas
console.log("slice variantas");

function apkarpykTeksta1(str, ilgis = str.length, galune = "...") {
  // jei eilute jau trumpesne arba lygi ribai, grazinam ja nepakeista
  if (str.length <= ilgis) return str;

  // apkarpom teksta tiek, kad kartu su galune tilptu i nurodyta ilgi
  return str.slice(0, ilgis - galune.length) + galune;
}

console.log(apkarpykTeksta1("We are doing JS string exercises."));
console.log(apkarpykTeksta1("We are doing JS string exercises.", 19));
console.log(apkarpykTeksta1("We are doing JS string exercises.", 15, "!!"));

// .substring() variantas
console.log("\nsubstring variantas");

function apkarpykTeksta2(str, ilgis = str.length, galune = "...") {
  if (str.length <= ilgis) return str;

  return str.substring(0, ilgis - galune.length) + galune;
}

console.log(apkarpykTeksta2("We are doing JS string exercises."));
console.log(apkarpykTeksta2("We are doing JS string exercises.", 19));
console.log(apkarpykTeksta2("We are doing JS string exercises.", 15, "!!"));
