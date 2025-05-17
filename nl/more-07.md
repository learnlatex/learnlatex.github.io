---
layout: "lesson"
lang: "nl"
title: "Meer over: Afbeeldingen invoegen en schikken"
description: "Deze les geeft meer details over hoe je afbeeldingsbestanden beter kan benoemen en opslaan voor gebruik met LaTeX, en hoe je zelf afbeeldingen kan maken vanuit LaTeX."
toc-anchor-text: "Meer over: Afbeeldingen invoegen en schikken"
---

## Afbeeldingsbestanden benoemen

LaTeX werkt op veel verschillende computerplatforms, dus bestandsnamen verdienen enige aandacht.
Het is het veiligst om je afbeeldingen een eenvoudige naam te geven, in het bijzonder zonder spaties.
Als je je bestanden wil organiseren door alle afbeeldingen in een submap te bewaren, dan is iets als  `\includegraphics[width=30pt]{pix/mom.png}`  overdraagbaar en toekomstbestendig.

Spaties in bestandsnamen zijn traditioneel wat problematisch, maar worden tegenwoordig meestal wel ondersteund.
Mocht je toch problemen ondervinden, probeer dan eerst de spaties uit de bestandsnaam te verwijderen.

Ondersteuning voor speciale tekens (zoals accenten) in bestandsnamen is wisselend, met name op Windows kunnen er problemen zijn.
Als je problemen ondervindt met geaccentueerde tekens in bestandsnamen, probeer dan eerst alleen ASCII-tekens te gebruiken als test.

## Afbeeldingen opslaan in een submap

Een gebruikelijke manier om bronbestanden te organiseren is door alle afbeeldingen in een submap te plaatsen.
Je kan dan het relatieve pad gebruiken, zoals hierboven getoond;
let op dat het teken `/` wordt gebruikt om onderdelen van het pad te scheiden, _ook op Windows_.

Als je veel afbeeldingen hebt, kan je submappen vooraf instellen met behulp van `\graphicspath`, dat invoer vereist voor elke submap, ingesloten met accolades.
Bijvoorbeeld, om de mappen `figs` en `pics` te gebruiken, doe je:

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Let hierbij vooral op de afsluitende `/` in elk pad.

## Afbeeldingen maken

Zoals besproken kan LaTeX eenvoudig afbeeldingen gebruiken van de meeste bronnen, inclusief grafieken uit wetenschappelijke software.
In dat geval kan je ze het beste als PDF opslaan, indien mogelijk, aangezien dit een schaalbaar format is.
Als je een bitmap nodig hebt, streef dan naar een hoge resolutie.
Je kan grafische bestanden maken die LaTeX-fragmenten bevatten gebruikmakend van de muis via [Inkscape](https://inkscape.org/).
Een alternatief dat ook tekenen in drie dimensies mogelijk maakt, is [Asymptote](https://www.ctan.org/pkg/asymptote).
Deze twee programma’s leveren uitvoerbestanden af die je kan opnemen in je document.

Je kan ook afbeeldingen maken zoals tekeningen die bijzonder geschikt zijn voor LaTeX, met zeer hoge precisie en met formules en labels die bij je document passen. 
Je kan tekeningen rechtstreeks in je document maken — handig, hoewel het je document wel complexer en zwaarder maakt — met behulp van [Ti*k*Z](https://ctan.org/pkg/pgf).
Een alternatief is [PSTricks](https://ctan.org/pkg/pstricks-base).

## Floats schikken

De plaatsing van floats in LaTeX is complex.
De meest voorkomende wens is dat een afbeelding precies op de plek in de uitvoer verschijnt waar die in de invoer staat.
Het `float`-pakket maakt dit mogelijk.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{graphicx}
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Een voorbeeldafbeelding}
\end{figure}
\lipsum[8-15]
\end{document}
```

Let op de `H`-optie, die de afbeelding _exact hier_ plaatst.
Het gebruik van `H` wordt echter vaak afgeraden, omdat het tot grote witruimtes in je document kan leiden.

## Andere soorten floats

We zullen [binnenkort zien](lesson-08) dat je tabellen ook in floats kan plaatsen;die komen dan in een `table`-omgeving.
Maar je _hoeft_ afbeeldingen niet in de `figure`-omgeving of tabellen in de `table`-omgeving te plaatsen; dit is slechts conventie.

Misschien wil je andere soorten zwevende omgevingen maken; elk type wordt onafhankelijk ingevoegd.
Dit kan met het pakket [`trivfloat`](https://ctan.org/pkg/trivfloat).
Dit biedt één enkel commando, `\trivfloat`, om nieuwe float-types te definiëren.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{graphicx}
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Een voorbeeldafbeelding}
\end{image}
\end{document}
```
