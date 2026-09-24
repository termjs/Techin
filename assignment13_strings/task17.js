// 17. "isCamelCase"
// Kartais camelCase eilute reikia paversti atgal i paprasta forma.
// Uzduotis:
// Sukurk funkcija, kuri paverciai camelCase eilute atgal, atskirdama zodzius nurodytu simboliu
// (numatytasis - tarpas).
// Pvz.:
// isCamelCase("helloWorld") -> "hello world"
// isCamelCase("helloWorld", "-") -> "hello-world"
// isCamelCase("helloWorld", "_") -> "hello_world"

// .replace() su regex variantas
console.log("replace su regex variantas");

function isCamelCase1(str, skirtukas = " ") {
  // pries didziaja raide ideda nurodyta skirtuka ir paverciam mazaja
  return str.replace(/([A-Z])/g, `${skirtukas}$1`).toLowerCase();
}

console.log(isCamelCase1("helloWorld"));
console.log(isCamelCase1("helloWorld", "-"));
console.log(isCamelCase1("helloWorld", "_"));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function isCamelCase2(str, skirtukas = " ") {
  let rezultatas = "";

  for (let i = 0; i < str.length; i++) {
    let simbolis = str[i];

    if (
      simbolis === simbolis.toUpperCase() &&
      simbolis !== simbolis.toLowerCase()
    ) {
      rezultatas += skirtukas + simbolis.toLowerCase();
    } else {
      rezultatas += simbolis;
    }
  }

  return rezultatas;
}

console.log(isCamelCase2("helloWorld"));
console.log(isCamelCase2("helloWorld", "-"));
console.log(isCamelCase2("helloWorld", "_"));
