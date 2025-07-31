---
layout: "lesson"
lang: "nl"
title: "Tabellen"
description: "Deze les laat zien hoe je tabellen maakt in LaTeX, de uitlijning van cellen beïnvloedt, lijnen toevoegt aan de tabel en cellen samenvoegt."
toc-anchor-text: "LaTeX-tabellen"
toc-description: "Basisprincipes van werken met tabellen."
---

# Tabellen

<span
  class="summary">Deze les laat zien hoe je tabellen maakt in LaTeX, de uitlijning van cellen beïnvloedt, lijnen toevoegt aan de tabel en cellen samenvoegt.</span>

Tabellen in LaTeX worden gemaakt met de `tabular`-omgeving.
In deze les gaan we ervan uit dat je het `array`-pakket laadt, dat extra functionaliteit toevoegt aan LaTeX-tabellen, en dat om historische redenen niet standaard in de LaTeX-kern zit.
Zet dus het volgende in je preambule en we kunnen beginnen:

```latex
\usepackage{array}
```
{: .noedit :}

Om een `tabular` te zetten, moeten we LaTeX vertellen hoeveel kolommen er nodig zijn en hoe ze moeten worden uitgelijnd.
Dit gebeurt in een verplicht argument &ndash; vaak tabelpreambule genoemd &ndash; van de `tabular`-omgeving, waarin je de kolommen specificeert met namen die uit één letter bestaan, preambulesymbolen genaamd.
De beschikbare kolomtypes zijn:

<!-- don't line wrap this table, markdown seems to not support this -->

| type       | beschrijving |
| ---        |:-- |
| `l`        | links uitgelijnde kolom |
| `c`        | gecentreerde kolom |
| `r`        | rechts uitgelijnde kolom |
| `p{breedte}` | een kolom met vaste breedte `breedte`; de tekst wordt automatisch afgebroken en volledig uitgevuld |
| `m{breedte}` | zoals `p`, maar verticaal gecentreerd t.o.v. de rest van de rij |
| `b{breedte}` | zoals `p`, maar onderaan uitgelijnd |
| `w{uitlijning}{breedte}` | drukt de inhoud af met een vaste `breedte` en overschrijdt de kolom als die te klein is. Je kan de horizontale uitlijning kiezen met `l`, `c` of `r`. |
| `W{uitlijning}{breedte}` | zoals `w`, maar geeft een waarschuwing bij te brede inhoud. |

Daarnaast zijn er nog een paar andere preambulesymbolens beschikbaar die geen kolom definiëren maar toch handig kunnen zijn:

<!-- don't line wrap this table, markdown seems to not support this -->

| type | beschrijving |
| ---  | :-- |
| `*{aantal}{string}` | herhaalt `string` `aantal` keer in de preambule. Hiermee kan je meerdere identieke kolommen definiëren. |
| `>{decl}` | plaatst `decl` vóór de inhoud van elke cel in de volgende kolom (handig om bijvoorbeeld een ander lettertype te gebruiken) |
| `<{decl}` | plaatst `decl` ná de inhoud van elke cel in de vorige kolom |
| <span>`|`</span>  | voegt een verticale lijn toe |
| `@{decl}` | vervangt de ruimte tussen twee kolommen door `decl` |
| `!{decl}` | voegt `decl` toe in het midden van de bestaande ruimte |

Deze twee tabellen tonen alle beschikbare kolomtypes uit LaTeX en het `array`-pakket.
Een paar extra types uit andere pakketten worden besproken bij [Meer over dit onderwerp](more-08).

De kolommen `l`, `c` en `r` krijgen de natuurlijke breedte van de breedste cel.
Elke kolom moet worden aangegeven, dus als je drie gecentreerde kolommen wil, gebruik je `ccc` in de preambule. 
Witruimte wordt genegeerd, dus `c c c` is hetzelfde.

Binnen een tabel worden kolommen gescheiden met een ampersand `&` en wordt een nieuwe rij gestart met `\\`.

We hebben alles wat we nodig hebben voor onze eerste tabel.
In de volgende code zijn `&` en `\\` uitgelijnd.
Dit is niet nodig in LaTeX, maar vergemakkelijkt het lezen van de broncode.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

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

Als een tabelkolom veel tekst bevat, krijg je problemen als je alleen `l`, `c` of `r` gebruikt.
Bekijk wat er gebeurt in het volgende voorbeeld:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Dier & Beschrijving \\
  hond & De hond is een lid van het geslacht Canis, dat deel uitmaakt van de
         hondachtigen, en is het meest voorkomende landroofdier. \\
  kat  & De kat is een gedomesticeerde soort van kleine vleesetende zoogdieren.
         Het is de enige gedomesticeerde soort in de familie Felidae en wordt vaak de huiskat genoemd om haar te onderscheiden van de wilde soorten. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Het probleem is dat het `l`-type de inhoud in één regel zet met zijn natuurlijke breedte, zelfs als er een paginarand in de weg zit.
Om dit op te lossen gebruik je de `p`-kolom.
Deze behandelt de inhoud als paragrafen met opgegeven breedte
en lijnt deze bovenaan uit, wat meestal het gewenste gedrag is.
Vergelijk het resultaat hierboven met het volgende:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Dier & Beschrijving \\
  hond & De hond is een lid van het geslacht Canis, dat deel uitmaakt van de
         hondachtigen, en is het meest voorkomende landroofdier. \\
  kat  & De kat is een gedomesticeerde soort van kleine vleesetende zoogdieren.
         Het is de enige gedomesticeerde soort in de familie Felidae en wordt vaak de huiskat genoemd om haar te onderscheiden van de wilde soorten. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Als je tabel veel kolommen van hetzelfde type heeft, is het vervelend om dat telkens te herhalen.
Je kan `*{aantal}{string}` gebruiken om `string` `aantal` keer te herhalen.
Dus `*{6}{c}` is hetzelfde als `cccccc`.
Hier is de eerste tabel opnieuw met deze syntax:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Dier   & Voedsel & Grootte     \\
  hond   & vlees   & middelgroot \\
  paard  & hooi    & groot       \\
  kikker & vliegen & klein       \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Lijnen toevoegen

Vooraleer we lijnen introduceren: gebruik ze spaarzaam, vooral verticale, want die ogen snel onprofessioneel.
Voor nette tabellen gebruik je het best het `booktabs`-pakket.
Daarom behandelen we dat eerst.
De standaardlijnen staan beschreven bij [Meer over dit onderwerp](more-08).

`booktabs` biedt vier soorten lijnen.
Deze commando’s moeten altijd als eerste in een rij staan of na een andere lijn.
Drie daarvan zijn: `\toprule`, `\midrule` en `\bottomrule`.
Hun gebruik spreekt voor zich:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Dier  & Voedsel & Grootte     \\
  \midrule
  hond  & vlees   & middelgroot \\
  paard & hooi    & groot       \\
  kikker& vliegen & klein       \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Het vierde commando van `booktabs` is `\cmidrule`.
Dit tekent een lijn over de opgegeven kolommen in plaats van over de hele breedte van de tabel.
Gebruik een bereik in de vorm `{`_kolomnummer_`-`_kolomnummer_`}`.
Ook voor een enkele kolom moet je een bereik opgeven (namelijk tweemaal hetzelfde nummer).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Dier  & Voedsel & Grootte     \\
  \midrule
  hond  & vlees   & middelgroot \\
  \cmidrule{1-2}
  paard & hooi    & groot       \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  kikker& vliegen & klein       \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Je kan `\cmidrule` inkorten met een optioneel argument in haakjes:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Dier  & Voedsel & Grootte     \\
  \midrule
  hond  & vlees   & middelgroot \\
  \cmidrule{1-2}
  paard & hooi    & groot       \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  kikker& vliegen & klein       \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`r` en `l` betekenen dat de lijn **r**echts of **l**inks wordt ingekort.

Soms is een lijn te veel scheiding, maar wil je regels toch visueel onderscheiden.
Gebruik dan `\addlinespace` voor wat bijkomende witruimte:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Dier & Beschrijving \\
  \midrule
  hond & De hond is een lid van het geslacht Canis, dat deel uitmaakt van de
         hondachtigen, en is het meest voorkomende landroofdier. \\
  \addlinespace
  kat  & De kat is een gedomesticeerde soort van kleine vleesetende zoogdieren.
         Het is de enige gedomesticeerde soort in de familie Felidae en wordt vaak de huiskat genoemd om haar te onderscheiden van de wilde soorten. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Cellen samenvoegen

In LaTeX kan je cellen horizontaal samenvoegen met `\multicolumn`.
Gebruik het als eerste in een cel.
Het verwacht drie argumenten:

1. Het aantal te combineren cellen
2. De uitlijning van de samengevoegde cel
3. De inhoud van de samengevoegde cel

De uitlijning kan alles bevatten wat ook in de preambule van `tabular` mag, maar _slechts één kolomtype_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Dier           & Voedsel & Grootte            \\
  \midrule
  hond           & vlees   & middelgroot        \\
  paard          & hooi    & groot              \\
  kikker         & vliegen & klein              \\
  blauwbilgorgel & \multicolumn{2}{c}{onbekend} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Je kan `\multicolumn` ook gebruiken voor een enkele cel om speciale opmaak van de tabelpreambule te vermijden.
Hiermee centreer je bijvoorbeeld de kopregel:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Dier} & \multicolumn{1}{c}{Voedsel} & \multicolumn{1}{c}{Grootte} \\
  \midrule
  hond           & vlees   & middelgroot        \\
  paard          & hooi    & groot              \\
  kikker         & vliegen & klein              \\
  blauwbilgorgel & \multicolumn{2}{c}{onbekend} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Verticale samenvoeging van cellen wordt niet ondersteund in LaTeX.
Meestal kan je gewoon cellen leeg laten om je opzet duidelijk te maken aan de lezer zonder effectief een cel over verschillende regels te hebben.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Groep     & Dier   & Grootte     \\
  \midrule
  herbivoor & paard  & groot       \\
            & hert   & middelgroot \\
            & konijn & klein       \\
  \addlinespace
  carnivoor & hond   & middelgroot \\
            & kat    & klein       \\
            & leeuw  & groot       \\
  \addlinespace
  omnivoor  & kraai  & klein       \\
            & beer   & groot       \\
            & varken & middelgroot \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Oefeningen

Gebruik het eenvoudige tabelvoorbeeld om te experimenteren met tabellen.
Probeer verschillende uitlijningen met `l`, `c` en `r`.
Wat gebeurt er als je te weinig of te veel items in een rij hebt?
Experimenteer met het `\multicolumn`-commando om kolommen samen te voegen.
