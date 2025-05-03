---
layout: "lesson"
lang: "nl"
title: "Logische structuur"
description: "Deze les toont enkele basisopmaakcommando's en vergelijkt deze met semantische opmaak via sectiecommando's en lijsten."
toc-anchor-text: "Logische structuur"
toc-description: "Structuur en visuele presentatie."
---

# Logische structuur

<span
  class="summary">Deze les toont enkele basisopmaakcommando's en vergelijkt deze met semantische opmaak via sectiecommando's en lijsten.</span>

LaTeX biedt manieren om je te concentreren op de logische structuur van je document, evenals de mogelijkheid om direct het uitzicht van je document in te stellen.
Meestal is het veel beter om methodes te gebruiken die zich richten op de structuur omdat dat het makkelijker maakt het uitzicht aan te passen of te hergebruiken als dat nodig is.

## Structuur en visuele presentatie

We beginnen met een voorbeeld waarin een van de meest voorkomende logische opmaakcommando's in LaTeX, `\emph`, wordt vergeleken met simpelweg iets cursief zetten.
(In gedrukte tekst legt dit meestal nadruk op bepaalde zaken.)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
Tekst met \emph{nadruk en \emph{geneste} inhoud}.

Tekst in \textit{cursief and \textit{geneste} inhoud}.
\end{document}
```

Je raadt waarschijnlijk al dat `\textit` een commando is om tekst cursief te zetten, maar het maakt dingen _altijd_ cursief, dus het werkt niet voor geneste inhoud.
Merk op hoe `\emph` _wel_ weet hoe geneste nadruk werkt.
Er zijn ook situaties waar nadruk niet hetzelfde is als cursief;
in presentaties is kleur bijvoorbeeld vaak een betere optie.
Met logische opmaak hoeven we ons daar in de hoofdtekst van het document geen zorgen over te maken.

We zullen [handmatige opmaak later](lesson-11) bekijken, maar voor nu voegen we `\textbf` nog toe aan de commando's die we kennen: dit maakt tekst vetgedrukt.

## Sectiecommando's

Waarschijnlijk heb je ooit een tekstverwerker gebruikt waar je bij het beginnen van een sectie meestal de titel intypt, die vet en groter maakt, en dan een nieuwe regel start.
In LaTeX is het gebruik van logische opmaak eigenlijk _makkelijker_ dan handmatige opmaak;
we kunnen het `\section`-commando gebruiken.
Dit regelt de lettertypewijzigingen, verticale ruimte, enz., en houdt de uitvoer uniform in het hele document.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Hallo wereld!

Dit is een eerste document.

\section{Titel van de eerste sectie}

Tekst in de eerste sectie

Tweede paragraaf.

\subsection{Subsectie van de eerste sectie}

Tekst in de subsectie.

\section{Tweede sectie}

Tekst van de tweede sectie.

\end{document}
```

Bij gebruik van de standaard `article`-instelling nummert LaTeX de secties en subsecties automatisch en worden de titels vet weergegeven.
In de [volgende les](lesson-05) denken we na over het aanpassen van het ontwerp.

LaTeX kan documenten in meerdere niveaus opdelen:

- `\chapter` (voor hoofdstukken, maar dan moet je `\documentclass{book}` of
  `\documentclass{report}` gebruiken)
- `\section`
- `\subsection`
- `\subsubsection`

We kunnen nog verder gaan: de volgende laag is `\paragraph`, maar meestal is dat te gedetailleerd voor secties.
(Ja, `\paragraph` is een sectiecommando, _geen_ manier om een nieuwe paragraaf te starten!)

Je vraagt je misschien af hoe je de titel van een document instelt.
Daar zijn speciale commando's voor, maar niet alle documenten gebruiken die, dus dat wordt [behandeld in de aanvullende les](more-04).

## Lijsten

Een andere veelvoorkomende plek waar je logische opmaak wil gebruiken, is bij het maken van lijsten.
Er zijn twee veelgebruikte lijsttypen ingebouwd in LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Geordend
\begin{enumerate}
  \item Een item
  \item Nog een
  \item Wauw! Drie items
\end{enumerate}

Ongeordend
\begin{itemize}
  \item Een item
  \item Nog een
  \item Wauw! Drie items
\end{itemize}

\end{document}
```

Merk op dat we `\item` gebruiken om elk item te starten, en dat het markeringssymbool automatisch wordt toegevoegd, afhankelijk van het lijsttype.

## Oefeningen

Experimenteer met verschillende sectieniveaus.
Probeer `\documentclass{report}` in plaats van `\documentclass{article}` en voeg `\chapter`-commando's toe.
Hoe zien die eruit?
Probeer ook `\paragraph` en (zelfs) `\subparagraph` om te zien hoe ze werken: standaard voegen ze _geen_ nummers toe.

Maak een paar lijsten en nest een lijst in een andere.
Hoe verandert de opmaak van de nummers of symbolen?
Je kan standaard maar vier niveaus diep gaan in LaTeX, maar meer dan vier geneste lijsten is meestal toch al geen goed teken!
