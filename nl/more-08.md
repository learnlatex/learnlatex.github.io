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

### Verticale lijnen

Soms moet je verticale lijnen gebruiken.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Dier   & Voedsel & Grootte     \\[2pt]
  hond   & vlees   & middelgroot \\
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Je zal merken dat het gedrag van `|` erg lijkt op `!{decl}`;
het voegt een verticale lijn toe tussen twee kolommen, waarbij de opvulling behouden blijft.
Er is echter een groot nadeel: verticale lijnen werken niet goed samen met de horizontale lijnen uit het `booktabs`-pakket.
Je kan wel de standaard LaTeX-lijnen gebruiken: `\hline` (wat overeenkomt met `\toprule`, `\midrule` en `\bottomrule`) en `\cline` (vergelijkbaar met `\cmidrule`).
Zoals hierboven getoond, zullen verticale lijnen ook over de extra witruimte van de optionele argumenten van `\\` worden getekend.

## `booktabs`-lijnen aanpassen

Alle `booktabs`-lijnen en ook `\addlinespace` ondersteunen een optioneel argument tussen blokhaken waarin je de lijndikte kan opgeven.
Daarnaast kan het inkorten van `\cmidrule` worden aangepast door een lengte in accolades op te geven na `r` of `l`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Dier   & Voedsel & Grootte     \\ \midrule[1pt]
  hond   & vlees   & middelgroot \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Getallen uitlijnen in kolommen

De uitlijning van getallen in tabellen kan geregeld worden via het kolomtype `S` uit het `siunitx`-pakket.

Een eenvoudig voorbeeld met twee uitgelijnde numerieke kolommen:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Waarden} & {Meer waarden} \\
\midrule
1         &   2.3456       \\
1.2       &   34.2345      \\
-2.3      &   90.473       \\
40        &   5642.5       \\
5.3       &   1.2e3        \\
0.2       &   1e4          \\
\bottomrule
\end{tabular}
\end{document}
```

Merk op dat elke niet-numerieke cel "afgeschermd" moet worden door deze tussen accolades te zetten.

Het `siunitx`-pakket biedt veel mogelijkheden om getallen op verschillende manieren op te maken;
zie de [pakketdocumentatie](https://texdoc.org/pkg/siunitx).

## De totale tabelbreedte specificeren

De breedte van een `tabular`-omgeving wordt automatisch bepaald op basis van de inhoud van de tabel.
Er zijn twee veelgebruikte methoden om een andere totale breedte op te geven.

Let op: het is bijna altijd beter om een tabel op te maken naar een opgegeven breedte zoals hieronder getoond (eventueel met een kleinere lettergrootte zoals `\small`) dan om een tabel te herschalen met `\resizebox` of vergelijkbare commando’s.
Die zorgen immers voor inconsistente lettergroottes en lijndiktes.

### `tabular*`

De `tabular*`-omgeving accepteert een extra _breedte_-argument dat de totale breedte van de tabel specificeert.
Rekbare ruimte moet aan de tabel toegevoegd worden met het commando `\extracolsep`.
Deze ruimte wordt toegevoegd tussen alle kolommen vanaf dat punt in de tabelpreambule.
Bijna altijd wordt hiervoor `\fill` gebruikt, een speciale ruimte die zich uitrekt tot de benodigde grootte.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

De `tabularx`-omgeving, voorzien door het gelijknamige pakket, heeft een vergelijkbare syntaxis als `tabular*`, maar in plaats van de kolomtussenruimte aan te passen, worden de breedtes van de kolommen aangepast via het nieuwe kolomtype `X`.
Dit is hetzelfde als `p{...}`, maar dan met een automatisch bepaalde breedte.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

In tegenstelling tot de andere vormen die in deze lessen zijn besproken, moet `tabularx` de tabel meerdere keren zetten met proefbreedtes om de uiteindelijke opmaak te bepalen.
Dit betekent dat er een aantal beperkingen zijn voor het gebruik van deze omgeving; zie de [pakketdocumentatie](https://texdoc.org/pkg/tabularx).

## TODO Multi-page tables
