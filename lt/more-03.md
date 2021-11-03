---
layout: "lesson"
lang: "lt"
title: "Daugiau apie pagrindinę LaTeX dokumento struktūrą"
description: "Ši pamoka pateikia daugiau detalių apie LaTeX veikimą, apie jo naudojamas specialias raides ir apie jų gavimą išvesties PDF."
toc-anchor-text: "Daugiau apie pagrindinę LaTeX dokumento struktūrą"
---

## LaTeX veikimas

Kaip išsamiai [aprašyta anksčiau](lesson-02), LaTeX dokumentai yra
perskaitomi kaip paprastas tekstas.  Norėdami tuo įsitikinti, pabandykite
atverti savo pirmąjį dokumentą paprastoje teksto rengyklėje, pavyzdžiui,
Windows Notepad.  Turėtumėte pamatyti tą patį tekstą, kaip ir specializuotame
LaTeX redaktoriuje, aišku, be jokių raktinių žodžių paryškinimo.

Jūs taip pat galite gauti PDF be jūsų specialaus redaktoriaus; tam tereikia
komandinės eilutės aplinkos (terminalo), bet nesijaudinkite, jei nesate su
ja susipažinę.  Jei visgi *esate*, galite joje pereiti į katalogą su jūsų
`.tex` įvestimi ir paleisti

`pdflatex first`

arba

`pdflatex first.tex`

tam, kad pagaminti jūsų PDF.  Pastebėkite, kad `.tex` plėtinys komandoje neprivalomas:
LaTeX mano, kad failų vardai baigiasi `.tex`, jei nenurodytas kitas plėtinys.


## Specialios raidės

Jei jums reikia išvestyje gauti simbolį, kurį LaTeX traktuoja kaip specialų,
dažniausiai pakanka priešais jį įrinkti pasvirąjį brūkšnį `\`, pvz., `\{`
išves figūrinį skliaustą `{`.  Yra keletas atvejų, kai vietoj to reikia
naudoti ilgesnę komandą:

| Simbolis | Trumpa komanda <br><small>(mat. ir tekste)</small> | Ilga komanda <br><small>(tik tekstui)</small> |
| --- | --- | --- |
| `{`    | `\{`          | `\textbraceleft`  |
| `}`    | `\}`          | `\textbraceright` |
| `$`    | `\$`          | `\textdollar`     |
| `%`    | `\%`          |                   |
| `&`    | `\&`          |                   |
| `#`    | `\#`          |                   |
| `_`    | `\_`          | `\textunderscore` |
| ``\``  |               | `\textbackslash`  |
| `^`    |               | `\textasciicircum`|
| `~`    |               | `\textasciitilde` |

Paskutiniams trims simboliams nėra trumpų komandų, nes komanda `\\` laužia
eilutę, o `\~` ir `\^` deda akcentus, atitinkami bangelę (_tilde_) ir
kepurėlę (_circumflex_).
