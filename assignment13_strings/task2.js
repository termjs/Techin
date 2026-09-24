// 2. "istrauktiSkaicius"
// Tekste pasitaiko skaiciu, kuriuos reikia isvel istraukti kaip viena skaiciu.
// Uzduotis:
// Sukurk funkcija, kuri pagal duota eilute grazina sveika skaiciu, sudaryta is tos eilutes skaitmenu.
// Pvz.:
// istrauktiSkaicius("k4s8p9a1r6a2s") -> 489162

// regex ir .join() variantas
console.log("regex match ir join variantas");

function istrauktiSkaicius1(str) {
  // /\d/g suranda visus atskirus skaitmenis kaip masyva
  let skaitmenys = str.match(/\d/g);

  // jei skaitmenu nera, grazinam NaN kaip ir Number() elgtusi
  if (!skaitmenys) return NaN;

  return Number(skaitmenys.join(""));
}

console.log(istrauktiSkaicius1("k4s8p9a1r6a2s"));

// for ciklo variantas
console.log("\nfor ciklo variantas");

function istrauktiSkaicius2(str) {
  let rezultatas = "";

  for (let i = 0; i < str.length; i++) {
    // isNaN patikrina ar simbolis yra skaitmuo
    if (!isNaN(str[i]) && str[i] !== " ") {
      rezultatas += str[i];
    }
  }

  return rezultatas === "" ? NaN : Number(rezultatas);
}

console.log(istrauktiSkaicius2("k4s8p9a1r6a2s"));

// .replace() variantas
console.log("\nreplace su regex variantas");

function istrauktiSkaicius3(str) {
  // pasalinam visus simbolius, kurie nera skaitmenys
  let rezultatas = str.replace(/\D/g, "");
  return rezultatas === "" ? NaN : Number(rezultatas);
}

console.log(istrauktiSkaicius3("k4s8p9a1r6a2s"));
