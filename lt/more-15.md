---
layout: "lesson"
lang: "lt"
title: "Daugiau apie klaidas"
description: "Ši pamoka parodo dar keletą bendrų LaTeX klaidų ir paaiškina apie sujungtas ir tylias klaidas."
toc-anchor-text: "Daugiau apie klaidas"
---

## Klaidos pranešamos aplinkų gale

Kai kurios aplinkos (ypač `amsmath` lygiavimo ar `tabularx` lentelės) pirmiau
nuskaito visą aplinką, o paskui apdoroja turinį.  Tai reiškia, kad apie bet
kurią klaidą iš aplinkos yra pranešama, kai skaitymas yra sustojęs
paskutinėje eilutėje.  Tačiau, kaip buvo aiškinta pagrindinėje pamokoje, TeX
rodomas klaidos kontekstas vis tiek turėtų nuvesti prie klaidos vietos.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Čia apie klaidą bus pranešta 12-toje eilutėje:

```
l.12 \end{align}
```
{: .noedit :}

Nors tikroji klaida yra 10-oje eilutėje, kaip matyti iš konteksto eilučių:

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Netikros klaidos dėl ankstesnių klaidų

Kai kviečiate LaTeX interaktyviai iš komandinės eilutės, vykdymą galima
nutraukti įrinkus `x`, kai jis sustoja radęs pirmą klaidą, tada paredaguoti
dokumentą ir vėl paleisti LaTeX iš naujo.  Tačiau jei leidžiate LaTeX
neinteraktyviu režimu arba naudojate redaktorių ar internetinę sistemą, kuri
tai daro už jus, tada TeX bando tęsti vykdymą ir po klaidos; tačiau tai gali
privesti prie dar keleto naujų klaidų pranešimų.

Taigi, per daug nesijaudinkite dėl klaidų pranešimų _skaičiaus_ ir visada
susitelkite į pirmosios klaidos ištaisymą.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

Klaida čia yra pabraukimo brūkšnys `_`, kuris turėtų būti surinktas kaip `\_`.
TeX apie tai praneša teisingai _pirmuoju_ klaidos pranešimu:

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Tačiau jei po klaidos tęsiama toliau, tada TeX persijungia į matematikos
režimą pridėdamas `$`, nes `_ ` yra apatinio indekso dėjimo ženklas
matematikoje.  Toks skaitymo režimas tęsiasi iki kito `$`, kuris išjungia šį
režimą, tada teksto režimu nuskaityta tolesnė komanda `\alpha` sukuria kitą klaidą.

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Klaidos, kurios nesuaktyvina klaidos užklausos

Kai kurios klaidos, ypač tos, apie kurias nepranešama iki failo skaitymo
pabaigos, nesuaktyvina užklausos eilutės, o tiesiog įrašo perspėjimą `.log`
žurnale.

Jei išbandysite šį pavyzdį naudodami TeXLive.net serverį, jis standartiškai
parodys PDF; pamatyti klaidos pranešimą žurnale galima pridėjus komentarą
`%!TeX log`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

Šiame pavyzdyje šrifto dydžio pakeitimo zona buvo klaidingai baigta su `)`, o
ne su `}`.  Tai liko nepastebėta iki pat failo pabaigos, kai TeX nustatė, kad
yra vis dar neuždaryta grupė.  Jis tada praneša apie eilutę, kurioje grupė
prasidėjo po `{`.  Jis negali aptikti tikrosios klaidos, nes `)` yra laikomas
„normaliu tekstu“.

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
  rlselectline('pre0',10);
  rlselectline('pre3',5);
  rlselectline('pre6',6);
  }, false);
</script>
