// 4. „skaiciuokPertraukas“
// Pertraukos būtinos – mes ne robotai (dar).
// Užduotis:
// Mokinys mokosi X valandų.
// Naudodamas while, suskaičiuok, kiek 45 min. blokų telpa į bendrą laiką.
// Grąžink pertraukų kiekį.
// Pvz.:
// skaiciuokPertraukas(3) → 4

// klasikinio while variantas su atimtimi
console.log("while su atimtimi");

function skaiciuokPertraukas1(x) {
  let pertraukos = 0;
  // paverciame valandas i minutes
  x = x * 60;
  // suka tol, kol lieka laiko bent vienam pilnam 45min blokui
  while (x >= 45) {
    x -= 45;
    pertraukos++;
  }

  return pertraukos;
}

console.log(skaiciuokPertraukas1(3));

// while variantas su kintamuoju laiko sekimui
console.log("\nwhile su laiko pridedamu kintamuoju");

function skaiciuokPertraukas2(x) {
  let pertraukos = 0;
  let praejoMinutes = 45;
  let visosMinutes = x * 60;

  // sukames didindami praejusi laika, kol nevirsijame bendro laiko
  while (praejoMinutes <= visosMinutes) {
    pertraukos++;
    praejoMinutes += 45;
  }

  return pertraukos;
}

console.log(skaiciuokPertraukas2(3));
