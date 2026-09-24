// 16. "paverskiICamelCase"
// Programavime dazniausiai naudojamas camelCase stilius.
// Uzduotis:
// Sukurk funkcija, kuri eilute paverciai camelCase stiliumi.
// Pvz.:
// paverskiICamelCase("JavaScript Exercises") -> "JavaScriptExercises"
// paverskiICamelCase("JavaScript exercises") -> "JavaScriptExercises"
// paverskiICamelCase("JavaScriptExercises") -> "JavaScriptExercises"

// .split(), .map() ir .join() variantas
console.log("split, map ir join variantas");

function paverskiICamelCase1(str) {
  return str
    .split(" ")
    // kiekvieno zodzio pirma raide paverciam didziaja, likusia dali paliekam kaip yra
    .map((zodis) => zodis.charAt(0).toUpperCase() + zodis.slice(1))
    .join("");
}

console.log(paverskiICamelCase1("JavaScript Exercises"));
console.log(paverskiICamelCase1("JavaScript exercises"));
console.log(paverskiICamelCase1("JavaScriptExercises"));

// .replace() su regex variantas
console.log("\nreplace su regex variantas");

function paverskiICamelCase2(str) {
  return str
    .split(" ")
    .join("")
    .replace(/^\w/, (raide) => raide.toUpperCase());
}

console.log(paverskiICamelCase2("JavaScript Exercises"));
console.log(paverskiICamelCase2("JavaScript exercises"));
console.log(paverskiICamelCase2("JavaScriptExercises"));
