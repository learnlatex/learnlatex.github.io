---
layout: "lesson"
lang: "lt"
title: "Ilgesnių dokumentų skaidymas"
description: "Ši pamoka parodo, kaip padalyti jūsų LaTeX dokumentą į mažesnius, lengviau tvarkomus failus, ir kaip tai palengvina ir pagreitina ilgo dokumento kūrimą."
toc-anchor-text: "Įvesties skaidymas"
toc-description: "Kaip logiškai valdomas dokumento skaidymas."
---

# Ilgesnių dokumentų skaidymas

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span
  class="summary">Ši pamoka parodo, kaip padalyti jūsų LaTeX dokumentą į mažesnius, lengviau tvarkomus failus, ir kaip tai palengvina ir pagreitina ilgo dokumento kūrimą.</span>

Kai jūs rašote ilgesnį dokumentą, tikriausiai norėsite padalyti jį į kelis
failus. Pavyzdžiui, labai įprasta turėti vieną pagrindinį (ar šakninį) failą,
po to po vieną įvesties failą kiekvienam (knygos, disertacijos ar ilgesnio
straipsnio) skyriui.


## Jūsų įvesties skaidymas

LaTeX sistemoje yra numatyta galimybė kontroliuojamu būdu suskaidyti įvestį:
dvi tam svarbios komandos yra `\input` ir `\include`.  Galime naudoti komandą
`\input`, kai norime, kad failas būtų tarsi „įvestas čia“, todėl ją galima
naudoti (iš esmės) bet kuriai medžiagai, kuri gali būti LaTeX failo dalis.
Komanda `\include` nepastebimai veikia tik skyriams: ji visada pradeda naują
puslapį ir atlieka keletą vidinių pakeitimų.  Tačiau ji turi didelį
privalumą: leidžia mums atrinkti tik norimus skyrius (paprastai vieną iš jų),
kad galėtumėme greičiau prasukti pro LaTeX tik dalį, o ne visą dokumentą.

Taigi ilgesnis dokumentas gali atrodyti taip:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{A Sample Book}
\author{John Doe \and Joe Bloggs}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Pirmą kartą visas dokumentas, kad
% susigeneruotų visi aux failai
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

Toliau apžvelgsime įvairius šio pavyzdžio aspektus. (Kiti reikalingi failai
yra šio puslapio pabaigoje.)


## `\input` naudojimas

Komanda `\input` tinka toms failo dalims, kurios nėra atskiri skyriai
(_chapters_).  Pavyzdyje mes ją panaudojome, kad atskirtume priekinį ir
galinį viršelius, taip išlaikydami pagrindinį failą trumpą ir aiškų ir
numatydami panaudoti viršelius ir kitam dokumentui.  Mes ją taip pat
panaudojome skyriuose (_chapters_) atskirti kai kuriuos mažesnius (ne
_chapters_) skyrius, pradedančius mūsų „knygą“, tokius, kaip pratarmė. Tai
vėlgi padeda išlaikyti pagrindinį failą aiškų.


## `\include` ir`\includeonly` naudojimas

`\include` komanda tinka _chapter_ tipo skyriams, todėl mes ją panaudojome
kiekvienam skyriui; ji visada pradeda naują puslapį.  Su komanda
`\includeonly` mes pasirinkome skyrius išvedimui, pateikdami jai, kaip
matote, kableliais atskirtą failų pavadinimų sąrašą.  Naudodami
`\includeonly` galite sutrumpinti LaTeX darbo laiką ir sukurti mažesnį PDF
dokumentą pasitikrinimui.  Be to, pagrindinis `\includeonly` privalumas yra
tame, kad LaTeX panaudos visą nuorodoms reikalingą informaciją ir iš kitų,
neįtrauktų skyrių `.aux` failų.


## Turinio lentelės sudarymas

Komanda `\tableofcontents` naudoja informaciją, išsaugotą skyrių komandų, kad
užpildytų turinio lentelę.  Ji turi savo pagalbinį failą su plėtiniu `.toc`
(_**t**able **o**f **c**ontents_), todėl, norint turėti aktualią informaciją,
gali tekti paleisti LaTeX du kartus.  Turinys generuojamas automatiškai iš
skyrių pavadinimų.  Dar yra panašios komandos `\listoffigures` ir
`\listoftables`, kurios surenka informaciją iš plaukiojančių aplinkų
antraščių (_captions_) ir tam naudoja atitinkamus pagalbinius failus su
plėtiniais `.lof` ir `.lot`.


## Dokumento dalys

Dokumentas skirstomas į pradinę (_front_), pagrindinę (_main_) ir galinę
(_back_) dalis, kurios pažymimos komandomis `\frontmatter`, `\mainmatter` ir
`\backmatter`.  Dar yra „priedų“ dalis (žymima `\appendix` komanda), kuri
paprastai būna prieš galinę dalį.  Dalių komandos daro įtaką išvesčiai.
Pavyzdžiui, `\frontmatter` keičia puslapių numeraciją į romėniškus
skaitmenis, `\appendix` keičia skyrių numeraciją į `A`, `B` ir t.t., taigi,
pavyzdžiui, pirmojo skyriaus po `\appendix` komandos antraštėje išvedama
`Appendix A`.


## Pratimai

Eksperimentuokite su bazine demonstracinio dokumento struktūra, taip pat
pabandykite pridėti ir pašalinti įrašus `\includeonly` komandos argumente ir
pamatykite efektus.

Pridėkite keletą plaukiojančių aplinkų ir sudarykite paveikslėlių ir lentelių
sąrašus.  Jei naudojate darbo vietoje įdiegtą LaTeX, ar matėte, kiek reikia
LaTeX paleidimų?  (Internetinės sistemos paleidinėja LaTeX „užkulisiuose“,
todėl reikalingi papildomi paleidimai nėra taip pastebimi.)

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```
<!-- {% endraw %} -->

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Preface}
The preface text. See \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introduction}
The first chapter text.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Something}
The second chapter text.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
The first appendix text.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
For \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
The back cover
\end{center}
```
<!-- {% endraw %} -->

----
