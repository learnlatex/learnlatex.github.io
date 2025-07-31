---
layout: "lesson"
lang: "nl"
title: "Kruisverwijzingen"
description: "Deze les laat zien hoe je kan verwijzen naar genummerde elementen in een document, zoals figuren, tabellen en secties."
toc-anchor-text: "Kruisverwijzingen"
toc-description: "Verwijzen naar figuren, tabellen, enz."
---

# Kruisverwijzingen

<span
  class="summary">Deze les laat zien hoe je kan verwijzen naar genummerde elementen in een document, zoals figuren, tabellen en secties.</span>

Wanneer je een document van een zekere lengte schrijft, wil je waarschijnlijk verwijzen naar genummerde items zoals figuren, tabellen of vergelijkingen.
Gelukkig kan LaTeX automatisch de juiste nummers toevoegen; 
we hoeven alles alleen maar goed in te stellen.

## Het `\label`- en `\ref`-mechanisme

Om LaTeX een plek in je document te laten onthouden, moet je deze labelen, en er vervolgens op andere plekken naar verwijzen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}
Hallo wereld!

Dit is een eerste document.

\section{Titel van de eerste sectie}

Wat tekst in de eerste sectie.

\subsection{Subsectie van de eerste sectie}
\label{subsec:label-een}

Wat tekst in de eerste subsectie.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:label-twee}
\end{equation}

In subsectie~\ref{subsec:label-een} staat vergelijking~\ref{eq:label-twee}.
\end{document}
```

Er zijn twee `\label{...}`-commando’s, één na de subsectie en één binnen de vergelijkingomgeving.
Ze worden geassocieerd met de `\ref{...}`-commando’s in de laatste zin.
Wanneer je LaTeX uitvoert, slaat het informatie over de labels op in een hulpbestand.
Voor `\label{subsec:label-een}` weet LaTeX dat het zich op dat moment in een subsectie bevindt en slaat dus het nummer van de subsectie op.
Voor `\label{eq:label-twee}` weet LaTeX dat de meest recente relevante omgeving een vergelijking is, en slaat die informatie op.
Wanneer je om de verwijzing vraagt, haalt LaTeX die uit het hulpbestand.

De prefixen `subsec:` en `eq:` worden niet door LaTeX gebruikt; 
ze helpen jou als schrijver te onthouden waar het label over gaat.

Je kan verwijzingen tegenkomen in een PDF-uitvoer die verschijnen als vetgedrukte dubbele vraagtekens, **??**.
Dat komt doordat het label bij de eerste compilatie van het document nog niet is opgeslagen in het hulpbestand.
Voer LaTeX nogmaals uit en alles zal goed zijn.
(Meestal voer je LaTeX tijdens het schrijven meerdere keren uit, dus in de praktijk is dit geen probleem.)

Let op de tilde (`~`) vóór de verwijzingen.
Je wil geen regeleinde tussen `subsectie` en het nummer, of tussen `vergelijking` en het nummer.
Een tilde zorgt ervoor dat LaTeX de regel daar niet afbreekt.

## De plaatsing van een `\label`

Het `\label`-commando verwijst altijd naar het laatst genummerde element: een sectie, een vergelijking, een float, enzovoort.
Dat betekent dat `\label` altijd _na_ het element moet komen waar je naar wil verwijzen.
In het bijzonder, wanneer je floats maakt, moet het `\label` _na_ (of nog beter: _in_) het `\caption`-commando geplaatst worden, maar wel binnen de floatomgeving.

## Oefeningen

Probeer nieuwe genummerde onderdelen toe te voegen (secties, subsecties, genummerde lijsten) aan het testdocument en kijk hoeveel keer je LaTeX moet uitvoeren om de `\label`-commando’s correct te laten werken.

Voeg een aantal floats toe en kijk wat er gebeurt als je `\label` _voor_ het `\caption`-commando zet in plaats van erna;
kan je het resultaat voorspellen?

Wat gebeurt er als je een `\label` van een vergelijking _na_ `\end{equation}` plaatst?
