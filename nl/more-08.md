---
layout: "lesson"
lang: "nl"
title: "Meer over: Tabellen"
description: "Deze les laat meer manieren zien om een tabel aan te passen door een kolom op te maken, afstanden en lijnen te wijzigen, en extra pakketten die uitbreidingen bieden voor tabellen."
toc-anchor-text: "Meer over: Tabellen"
---


## Andere inhoud van de preambule

Aangezien de les niet alle beschikbare preambulesymbolen heeft behandeld, worden er hier nog een paar uitgelegd met voorbeelden.
Je kan eventueel de tabellen aan het begin van de les nog eens bekijken om een overzicht te krijgen van wat beschikbaar is.
De korte beschrijvingen daar zouden voldoende moeten zijn om te begrijpen wat de verschillende kolomtypes `m`, `b`, `w` en `W` doen zodra je `l`, `c`, `r` en `p` begrijpt.
Zo niet, dan kan je er wat mee experimenteren.
Wat nog ontbreekt zijn de andere handige preambulesymbolen `>`, `<`, `@`, `!` en `|`.

### Een kolom opmaken

Aangezien `>` en `<` gebruikt kunnen worden om iets voor of na de celinhoud van een kolom te plaatsen, kan je deze gebruiken om opdrachten toe te voegen die het uiterlijk van een kolom beïnvloeden.
Als je bijvoorbeeld de eerste kolom cursief wil zetten en er een dubbele punt achter wil, dan kan je het volgende doen:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  Dier   & Voedsel & Grootte     \\
  \midrule
  hond   & vlees   & middelgroot \\
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape` maakt alle volgende tekst cursief, maar het effect blijft beperkt binnen de cel.
We bekijken handmatige lettertype-opmaak [over een paar lessen](lesson-11).

Je wil misschien niet dat de eerste rij wordt opgemaakt omdat dit de kop van de tabel is.
Hiervoor kan je `\multicolumn` gebruiken.
Onthoud dat je hiermee de uitlijning van een enkele cel kan aanpassen, zoals hieronder getoond.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Dier} & Voedsel & Grootte \\
  \midrule
  hond   & vlees   & middelgroot \\
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Afstand tussen kolommen aanpassen

Normaal gesproken voegt LaTeX witruimte toe aan beide zijden van elke kolom om het overzichtelijk te houden en kolommen visueel te scheiden.
Deze ruimte wordt gedefinieerd met de lengte `\tabcolsep`.
Omdat elke kolom aan beide zijden ruimte krijgt, krijg je één `\tabcolsep` aan elk uiteinde van de tabel, en `2\tabcolsep` tussen twee kolommen &ndash; één van elke kolom.
Je kan deze ruimte aanpassen met `\setlength`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  Dier   & Voedsel & Grootte     \\
  hond   & vlees   & middelgroot \\
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Je kan deze ruimte ook aanpassen met `@`.
Dit verwijdert de standaard opvulling tussen twee kolommen of aan de randen, en zet in plaats daarvan de inhoud van het argument tussen de kolommen:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Dier   & Voedsel & Grootte     \\
  hond   & vlees   & middelgroot \\
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(We zullen `\hspace` [binnenkort](lesson-11) bespreken; je kan waarschijnlijk al raden dat het horizontale witruimte toevoegt.)

Het `!`-symbool in de preambule doet iets soortgelijks.
Het verschil is dat dit inhoud _toevoegt_ in het midden van de ruimte tussen twee kolommen.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Dier   & Voedsel & Grootte     \\
  hond   & vlees   & middelgroot \\
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### TODO Vertical rules