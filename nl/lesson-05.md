---
layout: "lesson"
lang: "nl"
title: "Documentklassen gebruiken om het uitzicht te beïnvloeden"
description: "Deze les legt uit wat een documentklasse is, hoe deze invloed heeft op de lay-out van een document, en somt de belangrijkste klassen op die je in een TeX-distributie kan vinden."
toc-anchor-text: "Documentklassen"
toc-description: "De algemene lay-out van het document instellen."
---

# Documentklassen

<span
  class="summary">Deze les legt uit wat een documentklasse is en hoe deze invloed heeft op de lay-out en het uitzicht van een document. Ze somt de belangrijkste klassen op die je in een TeX-distributie kan vinden.</span>

Je hebt misschien gemerkt dat alle LaTeX-documenten die we tot nu toe hebben gemaakt begonnen met een `\documentclass`-regel, en dat `\documentclass{article}` veruit de meest voorkomende keuze was.
(We hadden `\documentclass{report}` nodig in [de vorige les](lesson-04) om het `\chapter`-commando uit te proberen.)
Deze regel is verplicht in alle LaTeX-documenten en is (bijna) altijd het eerste commando dat je moet gebruiken.

## Wat een documentklasse doet

De documentklasse stelt de algemene lay-out van het document in, bijvoorbeeld:

- uitzicht: marges, lettertypes, witruimte, enzovoort
- of hoofdstukken beschikbaar zijn
- of de titel op een aparte pagina moet staan

Documentklassen kunnen ook nieuwe commando's toevoegen;
dat geldt vooral voor specialistische gevallen zoals het maken van presentatieslides.

De `\documentclass`-regel kan ook _globale opties_ instellen: dingen die van toepassing zijn op het hele document.
Deze worden tussen vierkante haken geplaatst: `\documentclass[<opties>]{<naam>}`.
Deze syntaxis, waarbij optionele informatie eerst tussen vierkante haken wordt gegeven, wordt bij veel LaTeX-commando's gebruikt.

## De standaardklassen

LaTeX wordt geleverd met een verzameling standaardklassen die er allemaal vergelijkbaar uitzien maar met enkele verschillen:

- `article`  
  korte documenten zonder hoofdstukken
- `report`  
  langere documenten met hoofdstukken, enkelzijdig gezet
- `book`  
  langere documenten met hoofdstukken, dubbelzijdig gezet, met voorwerk en
  nawerk (bijvoorbeeld een index)
- `letter`  
  correspondentie zonder secties
- `slides`  
  voor presentaties (maar zie hieronder)

De klassen `article`, `report` en `book` hebben vergelijkbare beschikbare commando's, zoals we al gezien hebben.
Bij het schrijven van een `letter` zijn de beschikbare commando's iets anders.

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}

\begin{letter}{Een Adres\\Een Straat\\Een Stad}

\opening{Geachte heer of mevrouw}

De tekst komt hier.

\closing{Met vriendelijke groet,}

\end{letter}

\end{document}
```

Merk op hoe ``\\`` wordt gebruikt om regels van het adres te scheiden;
we zullen [later](lesson-11) uitweiden over regeleinden.
Merk ook op hoe de `letter`-klasse een nieuwe omgeving voor elke brief maakt en speciale commando's heeft.

De standaardklassen `article`, `report` en `book` accepteren de opties `10pt`,
`11pt` en `12pt` om het lettertype te wijzigen, en `twocolumn` om een document in twee kolommen te zetten.

## Klassen met veel functionaliteit

De kernklassen zijn erg stabiel, maar daardoor ook vrij
conservatief qua uitzicht en beschikbare commando's.
In de loop der tijd zijn er krachtigere klassen geschreven die je het uitzicht laten aanpassen zonder dat je dat handmatig hoeft te doen (waarover we [later](lesson-11) meer vertellen).

De American Mathematical Society biedt varianten op de standaardklassen (`amsart`, `amsbook`) met een traditioneler uitzicht dat meer lijkt op wat je in wiskundige tijdschriften ziet.

De twee grootste en populairste 'uitgebreide' klassen zijn de KOMA-Scriptbundel en de `memoir`-klasse.
KOMA-Script biedt een aantal klassen die de standaardklassen nabootsen: `scrartcl`, `scrreprt`, `scrbook`, en `scrlttr2`, terwijl er voor `memoir` één klasse is die het meest lijkt op een uitbreiding van `book`.

Deze uitgebreide klassen hebben veel mogelijkheden voor aanpassingen, die we in een oefening zullen verkennen.
Je vraagt je misschien af hoe je kan weten welke aanpassingsmogelijkheden ze bieden;
dat behandelen we [in een latere les](lesson-16), maar je kan natuurlijk al eens vooruit springen!

## Presentaties

De `slides`-klasse is ontwikkeld in de jaren 80 voor het maken van fysieke dia's en heeft geen mogelijkheden voor interactieve PDF-presentaties.
Daarvoor bestaan moderne klassen die dat wel ondersteunen: deze zijn iets meer
gespecialiseerd dan gewone LaTeX-documenten, dus we hebben ze apart behandeld in de [aanvullende les](more-05).

## Oefeningen

Onderzoek hoe het veranderen van de documentklasse naar de standaardklassen, de KOMA-bundel of `memoir` het uitzicht van het document beïnvloedt.

```latex
\documentclass{article} % Verander de klasse hier
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}

\section{Inleiding}

Dit is een voorbeeld van een document met wat voorbeeldtekst\footnote{en een voetnoot}.
Deze paragraaf is vrij lang om eventueel het effect te kunnen zien van het gebruik van twee kolommen in het document.

\end{document}
```

Voeg de klasse-optie `twocolumn` toe en kijk hoe de lay-out verandert.

Verander de `\section` hierboven in `\chapter` en bekijk wat het effect is van de
volgende klasse-opties bij gebruik van de `scrreprt`-klasse:

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
