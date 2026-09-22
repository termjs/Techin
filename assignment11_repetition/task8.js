// 8. „simuliuokMiegoGrafika“
// Kad išmokt JS — reikia miego. Ir šiek tiek savikritikos.
// Užduotis:
// Priima 3 reikšmes: kiek miegojai vakar, šiandien, užvakar.
// Suskaičiuok vidurkį.
// Jei < 6 → "Vidurkis X – esi zombis"
// Jei 6–7 → "Vidurkis X – normaliai išsilaikei"
// Jei >7 → "Vidurkis X – miego karalius"
// Pvz.:
// simuliuokMiegoGrafika(5,7,8) → "Vidurkis 6.6 – normaliai išsilaikei"

// Ternary + .toFixed() variantas
console.log("Ternary operator + .toFixed()");

function simuliuokMiegoGrafika1(r1, r2, r3) {
  const vidurkis = ((r1 + r2 + r3) / 3).toFixed(1); // suapvalina į viršų ir palieka vieną sk po kablelio

  return vidurkis < 6
    ? `Vidurkis ${vidurkis} - esi zombis`
    : vidurkis >= 6 && vidurkis <= 7
      ? `Vidurkis ${vidurkis} - normaliai išsilaikei`
      : `Vidurkis ${vidurkis} - miego karalius`;
}

console.log(simuliuokMiegoGrafika1(5, 7, 8));

// If/else variantas su .floor()
console.log("\nIf/else + Math.floor()");

function simuliuokMiegoGrafika2(r1, r2, r3) {
  const vidurkis = Math.floor(((r1 + r2 + r3) / 3) * 10) / 10; // nukerta sk iki vieno sk po kablelio, bet nesuapvalina

  if (vidurkis < 6) {
    return `Vidurkis ${vidurkis} - esi zombis`;
  } else if (vidurkis >= 6 && vidurkis <= 7) {
    return `Vidurkis ${vidurkis} - normaliai išsilaikei`;
  } else if (vidurkis > 7) {
    return `Vidurkis ${vidurkis} - miego karalius`;
  }
}

console.log(simuliuokMiegoGrafika2(5, 7, 8));
