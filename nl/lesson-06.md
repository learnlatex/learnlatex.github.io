---
layout: "lesson"
lang: "nl"
title: "LaTeX uitbreiden met pakketten en definities"
description: "Deze les toont hoe je LaTeX naar believen kan uitbreiden en hoe je de opmaak verder kan aanpassen met pakketten en eigen commando’s."
toc-anchor-text: "LaTeX uitbreiden"
toc-description: "Pakketten en eigen commando’s gebruiken."
---

# LaTeX uitbreiden

<span class="summary">
Deze les toont hoe je LaTeX naar believen kan uitbreiden en hoe je de opmaak verder kan aanpassen met pakketten en eigen commando’s.
</span>

Nadat je een klasse hebt gekozen, kan je in de preambule de functionaliteit van LaTeX aanpassen door één of meer *pakketten* toe te voegen.
Deze kunnen:

- De werking van LaTeX veranderen
- Nieuwe commando’s toevoegen
- De opmaak van het document aanpassen

## De werking van LaTeX aanpassen

LaTeXs 'kernel' (de kern van LaTeX) biedt weinig directe aanpassingsmogelijkheden, dus veelgebruikte functies zijn beschikbaar via extra pakketten.
Het eerste dat we bespreken levert ondersteuning voor taalspecifieke typografie (zoals woordafbreking, interpunctie, aanhalingstekens, lokalisatie).
Verschillende talen hebben verschillende regels, dus het is belangrijk dat je LaTeX vertelt welke regels te gebruiken.  
Hiervoor gebruik je het `babel`-pakket.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[dutch]{babel}

\usepackage[width = 7cm]{geometry} % Om afbreking te forceren

\begin{document}

Dit is allemaal opvultekst om te tonen hoe LaTeX woorden splitst 
en zou voldoende moeten zijn om ten minste één woordafbreking af
te dwingen.
Dit is allemaal opvultekst om te tonen hoe LaTeX woorden splitst 
en zou voldoende moeten zijn om ten minste één woordafbreking af
te dwingen.

\end{document}
```

Probeer de regel met `babel` in te schakelen en kijk wat er verandert.
(De standaardafbrekingsregels zijn gebaseerd op Amerikaans-Engels.)

Het `babel`-pakket doet meer dan alleen afbreking; lees eventueel [meer over dit onderwerp](more-06).

## Opmaak aanpassen

Soms wil je opmaak aanpassen, onafhankelijk van de documentklasse.
Een veelgebruikte aanpassing is de paginamarge.  
In het vorige voorbeeld gebruikten we het `geometry`-pakket al kort;
hieronder volgt een uitgebreider voorbeeld.

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Hallo wereld!

Dit is een eerste document.

% ================
\chapter{Hoofdstuk één}
Introductie van het eerste hoofdstuk.

\section{Titel van de eerste sectie}
Tekst van de eerste sectie.

Tweede alinea.

\subsection{Subsectie van de eerste sectie}

Tekst van de subsectie.

% ================
\section{Tweede sectie}

Tekst van de tweede sectie.

\end{document}
```

Je ziet het effect als je `geometry` weglaat.

## Nieuwe functionaliteit toevoegen

Een van de grote sterktes van LaTeX is het enorme aanbod aan pakketten.
Er zijn pakketten voor wiskunde, hyperlinks, kleurgebruik en nog veel meer.  
We bekijken enkele daarvan in latere lessen.

## Commando’s definiëren

Soms wil je een commando maken dat specifiek is voor jouw document, bijvoorbeeld omdat wat je nodig hebt niet voorkomt in bestaande pakketten of gewoonweg om lange, vaak voorkomende uitdrukkingen sneller in te voeren

Hieronder maken we een commando dat sleutelwoorden in een specifieke stijl weergeeft.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\sw[1]{\textbf{\itshape #1}}

\begin{document}

Iets over \sw{appels} en \sw{peren}.

\end{document}
```

Het getal `[1]` geeft aan dat het commando één argument accepteert, en `#1` is dat argument (`appels` of `peren` hierboven).
Je kan tot negen argumenten gebruiken, maar het is het best er meestal slechts één of helemaal geen te bezigen.

Commando’s maken het document niet alleen makkelijker om te typen, maar helpen ook de stijlinformatie en de eigenlijke tekst te scheiden.
Als je later een andere stijl wil voor sleutelwoorden, dan hoef je slechts de definitie te wijzigen en niet elk sleutelwoord in het hele document.
We gebruiken hier het `xcolor`-pakket dat kleuren voorziet en zetten sleutelwoorden in het blauw in plaats van het vet.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\sw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Iets over \sw{appels} en \sw{peren}.

\end{document}
```

Let wel op: te veel eigen commando’s of commando's met te veel argumenten kunnen het bronbestand moeilijk leesbaar maken omdat hun syntax ongebruikelijk is.
Gebruik ze dus met mate.

## Oefeningen

Probeer tekst in andere Europese talen te typen en zie wat `babel` doet met woordafbreking.
Zoek bijvoorbeeld wat tekst op het internet en gok de bijhorende `babel`-optie.

Pas de marges aan in het `geometry`-voorbeeld.
Je kan de boven-, onder-, linker- en rechtermarge apart instellen via de opties `top`, `bottom`, `left` en `right` in een door komma's gescheiden lijst.

Laad het `lipsum`-pakket en gebruik `\lipsum` in je document.
Kan je raden waarom dit pakket handig is bij het maken van voorbeelden?

Verander de definitie van `\sw` om een andere opmaakstijl toe te passen.
