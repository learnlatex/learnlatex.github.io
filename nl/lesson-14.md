---
layout: "lesson"
lang: "nl"
title: "Lettertypen selecteren en Unicode-engines gebruiken"
description: "Deze les geeft context over hoe LaTeX Unicode-invoer interpreteert en hoe dat invloed heeft op wat je typt en welke lettertypen je gebruikt. Leer over ondersteuning voor Unicode en OpenType-lettertypen."
toc-anchor-text: "Lettertypen & Unicode-engines"
toc-description: "Lettertypen en bestandscodering selecteren."
---

# Lettertypen en Unicode-engines

<span
  class="summary">Deze les geeft context over hoe LaTeX Unicode-invoer interpreteert en hoe dat invloed heeft op wat je typt en welke lettertypen je gebruikt. Leer over ondersteuning voor Unicode en OpenType-lettertypen.</span>

Toen TeX en LaTeX voor het eerst op grote schaal werden gebruikt, ondersteunden ze vooral Europese talen, hoewel er enige ondersteuning was voor andere alfabetten zoals Grieks en Russisch.

## Accenten en letters met accenten

Oorspronkelijk werden accenten en letters met accenten getypt met behulp van controlesequenties of macro’s zoals `\c{c}` voor ‘ç’ en `\'e` voor ‘é’.
Hoewel sommige mensen deze invoermethoden blijven gebruiken omdat ze gemakkelijker te typen zijn, wilden anderen graag direct symbolen typen met behulp van hun toetsenbord.

Voor de komst van Unicode bood LaTeX ondersteuning voor veel soorten *bestandscoderingen* waarmee tekst rechtstreeks in verschillende talen geschreven kon worden — bijvoorbeeld, met de `latin1`-codering konden Franse gebruikers ‘`déjà vu`’ schrijven en LaTeX zou de letters met accenten intern vertalen naar TeX-commando’s om de juiste uitvoer te genereren.

Deze aanpak wordt nog steeds gebruikt in LaTeX bij gebruik van de `pdflatex`-engine.
Standaard wordt verondersteld dat alle bestanden Unicode (UTF-8 gecodeerd) zijn, tenzij anders aangegeven.
Hoewel deze engine beperkt is tot 8-bit-lettertypen, kunnen de meeste Europese talen worden ondersteund.

## Lettertypekeuze

Het selecteren van een lettertype met `pdflatex` gebruikt het robuuste LaTeX-lettertypeselectiesysteem, en tegenwoordig zijn er veel lettertypen direct beschikbaar in een standaard LaTeX-distributie.
De TeX Gyre-lettertypen zijn bijvoorbeeld een reeks hoogwaardige lettertypen gebaseerd op bekende lettertypen zoals Times, Helvetica, Palatino, en andere.
Deze lettertypen kunnen eenvoudig worden geladen met een package met de juiste naam.
Voor een lettertype dat lijkt op Times, is de TeX Gyre-naam Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

Voor `pdflatex` zijn de meeste lettertypen toegankelijk via pakketten.
Je kan een kijkje nemen op [The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) of op de [CTAN-pagina over het onderwerp ‘Font’](https://www.ctan.org/topic/font) om enkele opties te zien.
Je kan ook op internet zoeken naar het lettertype dat je wil gebruiken en zoeken naar een versie die compatibel is met `pdflatex`.
Als je een propriëtair lettertype wil gebruiken, kan je zoeken naar een geschikte kloon die voor de meeste toepassingen voldoende op het origineel lijkt.

## Het Unicode-tijdperk

Aangezien `pdflatex` beperkt is tot 8-bit-bestandscoderingen en 8-bit-lettertypen, kan het niet standaard moderne OpenType-lettertypen gebruiken en eenvoudig schakelen tussen meerdere talen die verschillende alfabetten gebruiken (of ‘scripts’, in technische termen).
Er zijn twee vervangers voor pdfTeX die Unicode-invoer en moderne lettertypen standaard ondersteunen: XeTeX en LuaTeX.
Voor LaTeX worden deze doorgaans gebruikt via de engines `xelatex` en `lualatex`.

In deze engines wordt de lettertypekeuze geregeld door het `fontspec`-pakket, en voor eenvoudige documenten kan dat er eenvoudigweg als volgt uitzien:
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

Dit selecteert het TeX Gyre Termes-lettertype, net als in het `pdflatex`-voorbeeld hierboven.
Opmerkelijk is dat deze aanpak werkt voor *elk* OpenType-lettertype.
Sommige lettertypen die beschikbaar zijn voor `pdflatex`, zijn ook beschikbaar voor `xelatex` en `lualatex` via hun respectievelijke pakketten, of door elk lettertype te laden dat op je computer is geïnstalleerd met behulp van `fontspec` zoals hierboven getoond.

[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) toont ook lettertypen met OpenType-formats, zodat je die bron kan gebruiken om lettertypen op te zoeken, evenals de eerder genoemde [CTAN-pagina](https://www.ctan.org/topic/font).

Zodra een lettertype is geselecteerd, kan de invoer nu direct in gewone Unicode in een brondocument worden getypt.
Hier is een voorbeeld dat enkele Latijnse en Griekse letters toont, alsook enkele CJK-ideogrammen:

```latex
% !TEX xelatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p 
  class="hint">Bij het schakelen tussen talen is het meestal ook belangrijk om zaken zoals afbrekingspatronen aan te passen, en de pakketten <code>babel</code> en <code>polyglossia</code> bieden beide robuuste functies om dit te doen.</p>
