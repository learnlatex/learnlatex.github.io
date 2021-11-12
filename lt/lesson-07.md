---
layout: "lesson"
lang: "lt"
title: "Paveiksliukų įdėjimas ir pozicionavimas"
description: "Ši pamoka parodo, kaip į savo dokumentą galite įdėti išorinius grafikos failus, kaip pakeisti jų dydį ir kaip pasiekti, kad jie automatiškai „nuplauktų“ į tinkamą vietą išeities dokumente."
toc-anchor-text: "Grafikos panaudojimas"
toc-description: "Grafikos formavimas ir pozicionavimas."
---

# Grafikos įdėjimas ir pozicionavimas

<span
  class="summary">Ši pamoka parodo, kaip galite įdėti į savo dokumentą išorinius grafikos failus, pakeisti jų dydį, juos pozicionuoti ar leisti jiems „dreifuoti“ tekste automatiškai.</span>

Norėdami įdėti į dokumentą paveiksliuką, išsaugotą grafikos faile, naudokite
`graphicx` paketą, kuris apibrėžia komandą `\includegraphics`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
This picture
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
is an imported PDF.
\end{document}
```

Galite įtraukti EPS, PNG, JPG ir PDF formatų failus. Jei turite paruošę tą
patį paveiksliuką daugiau nei vienu formatu, galite rašyti, pavyzdžiui
`example-image.png`. (`graphicx` paketas bandys atspėti pavadinimo išplėtimą,
jei jūs jo neužrašysite.)


Pastebėkite, kad čia panaudojome naują aplinką `center` tam, kad
horizontaliai centruoti paveiksliuką teksto srityje. [Šiek tiek
vėliau](lesson-11), daugiau papasakosime apie tarpus ir padėties nustatymą.


## Grafikos dydžio ir formos keitimas

Komanda `\includegraphics` turi daug parametrų, valdančių įdedamų paveiksliukų
dydį, formą ar apkarpymą. Su dažniausiai naudojamais tarp jų verta
susipažinti.

Akivaizdžiausi dalykai, kuriuos reikia nustatyti, yra grafikos plotis
(`width`) ir aukštis (`height`), kuriuos taipogi galima išreikšti per teksto
plotį (`\textwidth`) ar eilutės ilgį (`\linewidth`) ir teksto srities aukštį
(`\textheight`).  Dažnai skirtumo tarp teksto pločio (`\textwidth`) ir
eilutės ilgio (`\linewidth`) nėra, bet ne visada. Eilutės _tam tikroje
vietoje_ gali būti ne per visą teksto srities plotį (pavyzdžiui, įjungus
klasės nustatymą `twocolumn`, kuris išveda tekstą dviem kolonėlėmis per
puslapį). LaTeX automatiškai keičia paveiksliuko dydį, išlaikydamas pastovų
aukščio ir pločio santykį.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Some text
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Galite išreikštu būdu nurodyti paveiksliukų didinimą ar mažinimą su parametru
`scale`, arba pasukimo kampą su `angle`. Kitas dalykas, kurio jums gali
prireikti, yra apkirpimas, nurodomas su parametrais `clip` ir `trim`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Leidimas paveiksliukams „plaukti“

Tradiciškai leidyboje grafika gali būti „nepririšta kietai“ prie tam tikros
teksto vietos, ypač tai liečia techninę literatūrą, t.y., gali „plaukioti“
teksto atžvilgiu, kad nebūtų per didelių tarpų ar pan.  Tokie dokumento
elementai vadinami *plaukiojančiais*.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % pagamina beprasmį tekstą kaip užpildą

\begin{document}
\lipsum[1-4] % Tik keletas užpildytų pastraipų

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{An example image}
\end{figure}

\lipsum[6-10] % Dar keletas užpildytų pastraipų
\end{document}
```

Šiame pavyzdyje LaTeX perkelia grafiką ir jos antraštę toliau nuo jos įdėjimo
vietos įvesties dokumente, į antro puslapio viršų, nes nepakanka vietos pirmo
puslapio apačioje. Nustatymai `ht` reguliuoja, kur LaTeX gali „prišvartuoti“
plaukiojantį elementą; šios dvi raidės leidžia „čia“ (`here`), t.y., įvesties
vietoje teksto atžvilgiu, arba puslapio viršuje (`top`).  Galite naudoti iki
keturių vietos indikatorių:

- `h` (_**h**ere_), „čia“ (jei įmanoma)
- `t` (_**t**op_) (kito) puslapio (ar kolonėlės) viršuje
- `b` (_**b**ttom_) puslapio apačioje
- `p` (_**p**age_) tik plaukiojantiems elementams skirtame puslapyje

[Vėliau](lesson-09) pamatysime, kaip sukurti nuorodas į plaukiojančius elementus iš savo teksto.

Tikriausiai pastebėjote, kad paveiksliuką sucentravome su `\centering`
komanda, bet ne su `center` aplinka. Viduje plaukiojančio elemento (kurį
sukuria `figure` aplinka), geriau naudoti `\centering` komandą horizontaliam
turinio centravimui; taip išvengsite papildomų vertikalių tarpų, kuriuos
`center` aplinka prideda prie plaukiojančios aplinkos tarpų.

## Pratimai

Pabandykite įdėti savo paveiksliuką, pakeisdami „standartinius“, kuriuos
naudojome pavyzdžiuose.

Ištirkite, ką galite padaryti naudodamiesi parametrais `height`, `width`,
`angle` ir `scale`.

Panaudokite `width` parametrą nustatydami vieno paveiksliuko dydį, išreikštą
per `\textwidth`, o kito -- per `\linewidth`. Pabandykite, kaip jie veikia su
ir be `twocolumn` nustatymo.

Panaudokite `lipsum` paketą sukurdami pakankamai ilgą demonstraciją, kurioje
būtų matyti, kaip plaukiojantys elementai pozicionuojami vietos
indikatoriais.  Kaip skirtingi indikatoriai veikia vienas kitą?

