---
layout: "lesson"
lang: "nl"
title: "Meer over: Logische structuur"
description: "Deze les laat zien hoe je de documenttitel instelt en hoe je beschrijvende lijsten maakt."
toc-anchor-text: "Meer over: Logische structuur"
---

## Documenttitels

LaTeX biedt logische opmaak voor de titel van documenten: drie commando's
om 'meta-data' in te stellen en één om die te gebruiken.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{I.~E.~Mand \and A.~N.~Ders}
\title{Dingen die ik heb gedaan}
\date{1 april 2020}
\maketitle

Doodnormale tekst.
\end{document}
```

Zoals je ziet, slaan de commando's `\author`, `\title` en `\date` informatie op, en `\maketitle` gebruikt die.
Je kan ook meerdere auteurs scheiden met `\and`.
De commando's `\author`, `\title` en `\date` moeten vóór `\maketitle` komen.
Hier hebben we ze in de documenttekst gezet;
ze kunnen ook in de preambule gebruikt worden, maar als je `babel`-shortcuts gebruikt, zijn die daar niet actief.

Het ontwerp dat `\maketitle` oplevert, hangt af van de documentklasse (zie [les 5](lesson-05)).
Er is een `titlepage`-omgeving voor wanneer je een eigen ontwerp wil maken, maar dat valt buiten het bestek van deze introductie.
Als je je eigen documentontwerpen wil maken, kan je een aanpasbare klasse gebruiken, zoals `memoir`, of beginnen met een van LaTeXs standaardklassen, zoals `book`, en die als basis gebruiken.

## Beschrijvende lijsten
Naast de "geordende" en "ongeordende" lijsttypen biedt LaTeX nog een ander, minder gebruikelijk type: de "beschrijvende lijsten".

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Hond:] lid van het geslacht Canis dat deel uitmaakt van de hondachtigen, en is het meest voorkomende landroofdier.
\item[Kat:] gedomesticeerde soort van een klein vleesetend zoogdier.
  Het is de enige gedomesticeerde soort in de familie Felidae en wordt vaak aangeduid als de huiskat om deze te onderscheiden van de wilde leden van de familie.
\end{description}

\end{document}
```

## Oefeningen

Probeer verschillende `\author`, `\title` en `\date`-informatie in te stellen om `\maketitle` te testen.
Welke daarvan _moet_ je opgeven?
Moeten de commando's een auteur, titel en datum bevatten?

Maak enkele beschrijvende lijsten en nest sommige daarvan binnen andere (geordende, ongeordende of beschrijvende).
