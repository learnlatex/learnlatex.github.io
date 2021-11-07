---
layout: "lesson"
lang: "lt"
title: "Daugiau apie grafikos įdėjimą ir pozicionavimą"
description: "Ši pamoka paaiškina, kaip geriausia pavadinti ir išsaugoti grafikos failus, kuri bus naudojami su LaTeX, ir kaip jūs galite padaryti savo grafiką su LaTeX pagalba."
toc-anchor-text: "Daugiau apie grafikos įdėjimą ir pozicionavimą"
---

## Grafikos failų pavadinimai

LaTeX veikia daugelyje operacinių sistemų, todėl kuriant failų pavadinimus
raikia į kai ką atsižvelgti.  Saugiausia yra pavadinti savo grafiką kuo
paprasčiau,, nenaudojant tarpų. Pavyzdžiui, jei nusprendėte laikyti visą
grafiką pakatalogyje, tada jos įdėjimas kažkaip panašiai į
`\includegraphics[width=30pt]{pix/mom.png}`  yra pernešamas tarp sistemų ir
veiks ir ateityje.

Tarpai failų pavadinimuose tradiciškai yra šiek tiek problematiški, nors
dabar paprastai palaikomi.  Tačiau, jei pavadinime yra tarpų ir jums kyla
problemų, kaip pirmąjį žingsnį verta pabandyti pašalinti tarpus.

Akcentuotų raidžių padinimuose palaikymas ne visur vienodas; yra problemų kai
kuriose sistemose, ypač Windows.  Jei sitiksite problemą su akcentuotomis
raidėmis failų pavadinimuose, patikrinimui pabandykite naudoti tik ASCII
simbolius.


## Grafikos saugojimas pakatalogyje

Gana įprasta, tvarkant įvesties failus, sudėti visą grafiką į atskirą
pakatalogį.  Tada galite į komandą įtraukti santykinį kelią, kaip parodyta
aukščiau; pastebėkite, kad simbolis `/` atskiria kelio dalis naudojant LaTeX
_net ir Windows_ sistemose.

Jei turite daug grafikos, galbūt norėsite iš anksto (preambulėje) nustatyti
pakatalogį.  Tai galima padaryti su komanda `\graphicspath`, kuriai reikia
nurodyti kiekvieną pakatalogio vardą atskiruose skliaustuose. Pavyzdžiui, 
norėdami nurodyti du katalogus `figs` ir `pics`, turime rašyti:

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Atkreipkite dėmesį į galuose esančius `/`.


## Grafikos kūrimas

Kaip buvo aptarta, LaTeX lengvai naudoja grafiką daugeliu formatų, įskaitant
brėžinius, pagamintus mokslinėmis programomis.  Jei jūs tą darote, tai
geriausia išsaugoti, jei galima, PDF, nes tai yra kokybiškai
didinamas/mažinamas formatas.  Jei jums tenka išsaugoti binariniu formatu,
stenkitės tai daryti aukštesne skiriamąja geba (_resolution_).  Galite
sukurti grafikos elementus su kompiuterine pele, kartu įjungiant LaTeX
išvesties fragmentus, su [Inkscape](https://inkscape.org/), vektorinės
grafikos redaktoriumi.  Jam alternatyva, papildomai išplečianti piešimą trijų
matmenų efektais, yra [Asymptote](https://www.ctan.org/pkg/asymptote).  Abu
šie redaktoriai išveda failus, kuriuos galite naudoti savo dokumentuose.

Yra ir kiti būdai kurti grafiką, pavyzdžiui, brėžinius, kurie ypač dera su
LaTeX ir yra didelio tikslumo, taip pat gali apimti lygtis ir nuorodas,
atitinkančias jūsų dokumentą.  Galite programuoti grafiką tiesiogiai savo
dokumento viduje, o tai yra patogu, nors ir padaro dokumentą sudėtingesniu ir
su papildomais reikalavimais, naudojant  [Ti*k*Z](https://ctan.org/pkg/pgf).
Kita panaši alternatyva yra [PSTricks](https://ctan.org/pkg/pstricks-base).


## Plaukiojančių elementų išdėstymas

Plaukiojančių elementų dėliojimas su LaTeX nėra paprastas.  Dažniausias
autorių noras yra turėti grafikos elementą išvestyje ten, kur jis yra
įvestyje. Su paketu `float` tai padaryti lengviau.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % beprasmis tekstas užpildymui
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{An example image}
\end{figure}
\lipsum[8-15]
\end{document}
```

Atkreipkite dėmesį `H` parinktį, su kuria stengiamasi paveiksliuką išvesti
„absoliučiai čia“ (_**H**ere_).  Vis dėlto dažnai naudoti `H`
nerekomenduojama, nes tai gali palikti daug tuščių vietų jūsų dokumente.


## Kiti plaukiojančių elementų tipai

Mes [greitai pamatysime](lesson-08), kad lentelės irgi dedamos į
plaukiojančią `table` aplinką.  Vis dėlto reikia žinoti, kad mes
_neprivalome_ grafiką dėti tik į `figure` aplinką, o lenteles &ndash; į
`table`; tai tik susitarimo reikalas.

Galbūt kada nors norėsite kitų tipų plaukiojančių aplinkų, nepriklausomų nuo
jau esamų.  Jūs galite įvesti tokias naudodamiesi
[`trivfloat`](https://ctan.org/pkg/trivfloat) paketu.  Jis apibrėžia vieną
komandą `\trivfloat`, kuri kiekvieną kartą padaro naują plaukiojančios
komandos tipą.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % beprasmis tekstas užpildymui
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{An example image}
\end{image}
\end{document}
```
