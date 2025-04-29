---
layout: "lesson"
lang: "lt"
title: "Klaidų taisymas"
description: "Ši pamoka supažindina su keletu dažnų klaidų, pasitaikančių LaTeX dokumentuose, paaiškina, ką reiškia klaidų pranešimai ir kaip su jais dirbti."
toc-anchor-text: "Klaidų taisymas"
toc-description: "Ką daryti su nelauktais LaTeX pranešimais."
---

# Klaidų taisymas

<span
  class="summary">Ši pamoka supažindina su keletu dažnų klaidų, pasitaikančių LaTeX dokumentuose, ką reiškia klaidų pranešimai ir kaip su jais dirbti.</span>

Skirtingai nuo įprastų dokumentų ruošimo sistemų, LaTeX turi
redagavimo/paleidimo/peržiūros ciklą, labiau būdingą darbui su programavimo
kalbų kompiliatoriais, ir, kaip ir programavime, vartotojai gali klysti
koduodami, todėl jiems reikia žinoti, ką reiškia sistemos klaidų pranešimai.

## Dažnos klaidos

Šiame puslapyje pateikiame kelių įprastų klaidų pavyzdžius. Prie kiekvieno
pavyzdžio aptariame klaidos pranešimo formą.

Bus naudinga ne tik išbandyti pavyzdžius, bet ir bandyti taisyti dokumentus,
panaudojant redagavimo galimybę, ir taip pasitikrinti savo sugebėjimus
ištaisyti klaidas.


### pdflatex not found

Dažna pirmoji klaida, kurią žmonės mato paleisdami:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

Windows sistemoje ar

```
bash: pdflatex: command not found
```
{: .noedit :}

Linux sistemoje.

Tai ne TeX, bet operacinės sistemos pranešimas, sakantis, kad TeX yra
neįdiegtas arba nerastas.  Dažna klaida yra įdiegti redaktorius, pvz.,
TeXworks ar TeXShop, neįdiegus TeX sistemos, tokios kaip TeX Live ar MiKTeX.


### TeX klaidų pranešimų anatomija

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
```

Šis pavyzdys sukuria kelių eilučių pranešimą `.log` faile (žurnale):

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* Pirma eilutė, prasidedanti šauktuku `!`, nurodo bendrą klaidos pobūdį (šiuo
  atveju &ndash; neapibrėžta komanda).
* Pora kitų eilučių rodo įvesties eilutę, kurią TeX skaitė, o eilutės lūžis
  nurodo vietą, kurią TeX pasiekė. Neapibrėžta komanda yra paskutinis
  perskaitytas žetonas (_token_ TeX terminais), šiuo atveju žodis (komanda)
  `\textbold` prieš eilutės lūžį. Po eilutės lūžio yra pateikiami likę
  žetonai, `{hmmm}`, kurie galbūt buvo perskaityti kaip argumentas, bet TeX
  dar jų netvarkė.
* Toliau paprastai gali eiti keletas papildomų eilučių, atskleidžiančių
  platesnį klaidos vietos kontekstą.
* Galutinė eilutė prasideda nuo `l.`, po to eilutės numeris įvesties faile ir
  pati įvesties eilutė, kurią beskaitydamas TeX aptiko klaidą.
* Paskutinėje eilutėje yra tik `?`.  Jei TeX leidote interaktyviu režimu, tai
  po klaustuko galima TeX'ui įvesti kai kokias instrukcijas; tačiau dauguma
  redaktorių ir internetinių sistemų leidžia TeX neinteraktyviu režimu, kada
  TeX nesustoja ties klaidomis, tik jas išveda ir bando susitvarkyti su
  likusiu dokumentu.  Įvedę `s` po klaustuko, nurodysite TeX tęsti darbą šiuo
  režimu, net jei kvietėte jį interaktyviai.


Pastebėkime, kad TeX nemato klaidos apibrėžimo vietoje; ir iš tikrųjų, jei
\mycommand yra apibrėžta, bet nepanaudota, jokia klaida nebus aptikta.
Taigi, nors apie klaidą pranešama 8-toje eilutėje, „tikroji“ klaida yra
apibrėžime iš 4-tos eilutės, todėl svarbu pamatyti visą klaidos pranešimą.

Turėkite omenyje, kad kai kurie redaktoriai klaidų žurnale rodo tik vieną
santraukos eilutę.  Tai gali klaidinti, ypač jei ji atrodo kaip

`line 8: undefined command: ...\mycommand`

iš ko galima daryti išvadą, kad `\mycommand` neapibrėžta.


### Nesuporuoti skliaustai


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Čia klaida yra nesuporuotas `}`, panaudotas neprivalomam argumentui
nutraukti.  Šis skliaustas sutrikdo LaTeX parinkčių analizę, ir jūs gaunate
vidinės klaidos ne per daug naudingą pranešimą:

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Nors klaidos aprašymas nenaudingas, kitos dvi eilutės tiksliai parodo klaidos
vietą eilutės lūžiu, kuris žymi vietą iki kurios TeX perskaitė įvestį:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


### Trūkstami failai

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

Šis pavyzdys sukelia klaidą

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

**Pastaba:** tokią klaidą gali sukelti dvi skirtingos priežastys: paprasta
spausdinimo klaida, kaip čia, kuri gali būti ištaisyta, pakeičiant paketo
pavadinimą, arba tai, kad failo tikrai nėra ir jį reikia įdiegti naudojamoje
sistemoje.


### Tuščios eilutės išskirtoje matematikoje

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Šis pavyzdys sukelia kiek paslaptingą klaidą:

```
! Missing $ inserted.
```
{: .noedit :}

nors pataisymas yra paprastas: tuščios eilutės neleidžiamos matematinėse
aplinkose ir turėtų būti ištrintos.


## Pratimai

Bandykite ištaisyti pateiktų pavyzdžių klaidas.

Sukurkite mažus dokumentus su skirtingomis klaidomis ir atkreipkite dėmesį į
klaidų pranešimų formą.


<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
  }, false);
</script>
