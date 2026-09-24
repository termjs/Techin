// 19. "iterptiEilute"
// Kartais i eilute reikia iterpti kita eilute konkrecioje vietoje.
// Uzduotis:
// Sukurk funkcija, kuri iterpia eilute i eilute nurodytoje pozicijoje (numatytoji - 1).
// Pvz.:
// iterptiEilute("We are doing some exercises.") -> "We are doing some exercises."
// iterptiEilute("We are doing some exercises.", "JavaScript ") -> "JavaScript We are doing some exercises."
// iterptiEilute("We are doing some exercises.", "JavaScript ", 18) -> "We are doing some JavaScript exercises."

// .slice() variantas
console.log("slice variantas");

function iterptiEilute1(str, iterpinys = "", pozicija = 1) {
  // jei iterpinio nera, grazinam originalia eilute nepakeista
  if (!iterpinys) return str;

  return str.slice(0, pozicija) + iterpinys + str.slice(pozicija);
}

console.log(iterptiEilute1("We are doing some exercises."));
console.log(iterptiEilute1("We are doing some exercises.", "JavaScript "));
console.log(iterptiEilute1("We are doing some exercises.", "JavaScript ", 18));

// .substring() variantas
console.log("\nsubstring variantas");

function iterptiEilute2(str, iterpinys = "", pozicija = 1) {
  if (!iterpinys) return str;

  return str.substring(0, pozicija) + iterpinys + str.substring(pozicija);
}

console.log(iterptiEilute2("We are doing some exercises."));
console.log(iterptiEilute2("We are doing some exercises.", "JavaScript "));
console.log(iterptiEilute2("We are doing some exercises.", "JavaScript ", 18));
