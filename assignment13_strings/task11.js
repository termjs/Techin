// 11. "apsaugotiEmail"
// El. pasto adresus reikia paslepti nuo pasalinio zvilgsnio.
// Uzduotis:
// Sukurk funkcija, kuri paslepia el. pasto adresa, kad jo negaletu pamatyti neautorizuotas vartotojas.
// Pvz.:
// apsaugotiEmail("robin_singh@example.com") -> "robin...@example.com"

// .split() ir .slice() variantas
console.log("split ir slice variantas");

function apsaugotiEmail1(email) {
  let [vardas, domenas] = email.split("@");
  // paliekam tik pirmus penkis simbolius is vardo dalies
  return `${vardas.slice(0, 5)}...@${domenas}`;
}

console.log(apsaugotiEmail1("robin_singh@example.com"));

// .replace() su regex variantas
console.log("\nreplace su regex variantas");

function apsaugotiEmail2(email) {
  // issaugom pirmus penkis simbolius grupeje ir pakeiciam like dali iki @
  return email.replace(/^(.{5}).+(@.+)$/, "$1...$2");
}

console.log(apsaugotiEmail2("robin_singh@example.com"));
