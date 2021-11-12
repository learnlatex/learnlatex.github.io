---
layout: "lesson"
lang: "lt"
title: "Vidinės nuorodos"
description: "Ši pamoka parodo, kaip kurti nuorodas į numeruotus dokumento elementus, tokius kaip paveiksliukai, lentelės ir skyriai."
toc-anchor-text: "Vidinės nuorodos"
toc-description: "Nuorodos į paveiksliukus, lenteles ir pan."
---

# Vidinės nuorodos

<span
  class="summary">Ši pamoka parodo, kaip kurti nuorodas į numeruotus dokumento elementus, tokius kaip paveiksliukai, lentelės ir skyriai.</span>

Rašant dokumentą, kuriame yra tokių elementų, kaip paveikslėliai, lentelės ar
lygtys, dažnai kyla poreikis paminėti tuos elementus.  Todėl tokie elementai
yra numeruojami, o juo minint rašomi jų numeriai (kuriamos nuorodos į juos).
Bet rašymo eigoje numeriai gali keisti, o tada reikia taisyti ir numerius, ir
nuorodas.  Laimei, LaTeX gali automatiškai sunumeruoti elementus ir taisyti
nuorodas į juos; mes tik turime juos teisingai susieti.

## `\label` ir `\ref` sąsaja

Norėdami, kad LaTeX atsimintų kažką (numerį) apie vietą jūsų dokumente,
turite ją pažymėti (_label_); tik tada kitose vietose galėsite ją nurodyti
(_refer_).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material for the first section.


\subsection{Subsection of the first section}
\label{subsec:labelone}

Text of material for the first subsection.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

In subsection~\ref{subsec:labelone} is equation~\ref{eq:labeltwo}.
\end{document}
```

Pavyzdyje panaudotos dvi `\label{...}` komandos, viena po skyrelio ir kita
lygties aplinkoje.  Jos siejasi su `\ref{...}` komandomis paskutiniame
sakinyje, nes jų argumentai (žymių vardai) tokie pat.

Kai leidžiate LaTeX, informacija apie žymes išsaugoma pagalbiniame
faile. Apie `\label{subsec:labelone}` LaTeX žino, kad ji yra po poskyrio
komandos, todėl išsaugo poskyrio numerį.  Apie `\Label{eq:labeltwo}` LaTeX
žino, kad naujausia numeruota aplinka yra lygties, todėl išsaugo informaciją
apie tą lygtį.  Kai paprašote sukurti nuorodą, LaTeX ją gauna iš pagalbinio
failo.

Priešdėlių `subsec:` ir `eq:` LaTeX nenaudoja, jam tai tik išsaugomų ir
kitame vykdyme ieškomų vardų dalys.  Bet kai jūs rašote, tinkami priešdėliai
primena apie pažymėtų elementų tipus ir padeda juos surasti tekste.

Išvesties PDF dokumente galite pamatyti nuorodas, rodomas kaip pastorintus
dvigubus klaustukus **??**.  Paaiškinimas yra tas, kad pirmo LaTeX vykdymo
metu žymių informacija dar nėra išsaugota. Paleiskite LaTeX dar kartą ir
viskas bus sutvarkyta (jei nesuklydote rašydami vardus).  (Rašant paprastai
LaTeX vis tiek leidžiamas kelis kartus, taigi, praktiškai tai netrukdo.)

Pastebėkite bangelės (`~`) ženklus prieš nuorodas.  Jūs nenorėsite, kad eilutė
lūžtų tarp elemento vardo ir jo skaičiaus. Įdėdami bangelę to išvengiate.

## Kur dėti `\label`

Komanda `\label` visada išsaugo informaciją apie ankstesnį numeruotą
subjektą: skyrių, lygtį, plaukiojantį elementą ir pan.  Tai reiškia, kad
`\label` visada turi būti _po to_ dalyko, į kurį norite nurodyti.  Ypač, kai
formuojate plaukiojančius elementus, `\label` turi eiti _po_ (arba, dar
geriau, viduje) komandos `\caption`, bet, kaip bebūtų, viduje
plaukiojančios aplinkos.

## Pratimai

Pabandykite į testinį dokumentą įtraukti naujas numeruotas dalis (skyrius,
poskyrius, numeruotus sąrašus) ir suraskite, kiek vykdymų reikia, kad
`\label` suveiktų.

Pridėkite keletą plaukiojančių aplinkų ir pažiūrėkite, kas atsitiks, kai
įkelsite `\label` _prieš_ `\caption` vietoje _po_.  Galite numatyti
rezultatą?

Kas nutiks, jei iškelsite `\label` iš lygties aplinkos po `\end{equation}`?
