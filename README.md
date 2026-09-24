# 🚀 TECHIN JavaScript modulis

Repo talpinamos visos **JavaScript modulio** užduotys, atliktos [TECHIN](https://www.techin.lt/) kurse. Visas kelias nuo `console.log("Hello World")` iki realaus kodo.

> Fork'ink laisvai, pasidaryk savo variantą, pasiūlyk PR — visada galima patobulinti!

---

## 📂 Turinys

<!-- AUTO-TABLE:START -->
| #   | Aplankas                                               | Tema                              | Užduočių kiekis |
| --- | ------------------------------------------------------ | --------------------------------- | --------------- |
| 01  | [`assignment01_variables`](./assignment01_variables) | Kintamieji (variables) | 10 |
| 02  | [`assignment02_math`](./assignment02_math) | Matematiniai veiksmai (Math) | 7 |
| 03  | [`assignment03_ternary`](./assignment03_ternary) | Ternary operatorius | 10 |
| 04  | [`assignment04_if`](./assignment04_if) | `if / else` sąlygos | 17 |
| 05  | [`assignment05_switch`](./assignment05_switch) | `switch` konstrukcija | 10 |
| 06  | [`assignment06_functions`](./assignment06_functions) | Funkcijos (pagrindai) | 5 |
| 07  | [`assignment07_functions2`](./assignment07_functions2) | Funkcijos (pratęsimas) | 20 |
| 08  | [`assignment08_loops1`](./assignment08_loops1) | Ciklai `for` / `while` | 10 |
| 09  | [`assignment09_loops2`](./assignment09_loops2) | Ciklai (pratęsimas, `do...while`) | 17 |
| 10  | [`assignment10_arrays`](./assignment10_arrays) | Masyvai (arrays) | 19 |
| 11  | [`assignment11_repetition`](./assignment11_repetition) | Kartojimo užduotys | 19 |
| 12  | [`assignment12_dates`](./assignment12_dates) | Datos ir laikas | 10 |
| 13  | [`assignment13_strings`](./assignment13_strings) | (TODO: pavadinimas) | 21 |
<!-- AUTO-TABLE:END -->

<!-- AUTO-TOTAL:START -->
**Iš viso:** 13 temos, 175 atskirų užduočių failų.
<!-- AUTO-TOTAL:END -->

> Lentelė ir suma aukščiau generuojama automatiškai — žr. [Auto turinio atnaujinimas](#-auto-turinio-atnaujinimas).

---

## 🛠️ Kaip paleisti

Kiekviename aplanke (jei yra) rasi `index.html`, kuris susieja `task*.js` failus. Tiesiog atsidaryk failą naršyklėje ir žiūrėk rezultatus per **Developer Console** (`F12` → `Console`):

```bash
git clone https://github.com/termjs/Techin.git
cd Techin/assignment10_arrays
# atidaryk index.html naršyklėje arba paleisk su Live Server
```

Kai kurie aplankai (`assignment08_loops1`, `assignment10_arrays` ir t.t) neturi `index.html` — juos patogiausia paleisti per Node.js:

```bash
node task1.js
```

---

## 🔄 Auto turinio atnaujinimas

Lentelė ir bendra suma skyriuje "📂 Turinys" generuojama automatiškai iš realaus repo turinio (`scripts/update-readme.js` skaičiuoja `task*.js` failus kiekviename aplanke). Naujus aplankus (`assignmentXX_*` arba `pasikartojimasXX`) skriptas aptinka pats ir įrašo į `scripts/topics.json` (tik pavadinimą reikia įrašyti ranka).

Paleisti ranka:

```bash
node scripts/update-readme.js
```

Kad tai vyktų automatiškai prieš kiekvieną `git commit`, vieną kartą įjunk repo hooks:

```bash
git config core.hooksPath githooks
```

---

## 🤝 Contributing

Geek'ų dienoraštis, bet jei matai ką patobulinti (švaresnį kodą, geresnį sprendimą, naujų edge case'ų) — **fork'ink, taisyk, siųsk PR**. Visada įdomu pamatyti kreivarankių sprendimo variantus tai pačiai užduočiai.

---

![hackerman](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnF6aTVoMmNuc3R5b3M5a3V6NDc2bnc5NTIxdHl2MWdjZ3BodGxiOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpYQJwcWAlLulEHEcy/giphy.gif)

---

<sub>Nupirkti kavos ar alaus, ačiū. ☕</sub>
