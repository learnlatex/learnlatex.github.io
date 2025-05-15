---
layout: "lesson"
lang: "nl"
title: "Meer over: LaTeX uitbreiden met pakketten en definities"
description: "Deze les geeft meer details over het laden van pakketten, toont het babel-pakket voor taalinstellingen en geeft meer informatie over zelfgeschreven commando's."
toc-anchor-text: "Meer over: LaTeX uitbreiden met pakketten en definities"
---

## Meerdere pakketten laden

Het commando `\usepackage` accepteert een lijst van pakketten, gescheiden door komma’s, dus je kan er meerdere tegelijk laden: bijvoorbeeld `\usepackage{color,graphicx}`.
Als je opties meegeeft aan een pakket, worden die toegepast op elk pakket in de lijst.
Het is ook makkelijker om pakketten tijdelijk uit te schakelen als ze afzonderlijk worden geladen.
Daarom blijven we erbij elk pakket op een aparte regel te laden.

## Het `babel`-pakket

We hebben het `babel`-pakket [in de hoofdles](lesson-06) al laten zien als een manier om verschillende afbreekpatronen te kiezen.
Het doet echter veel meer, afhankelijk van de gebruikte taal of talen.
In het Duits bijvoorbeeld biedt het afkortingen om ‘zachte’ afbrekingen te maken en een manier om snel umlauten te typen zonder een Duits toetsenbord.
Let ook op dat de sectiekop _Table of Contents_, normaal gegenereerd door `\tableofcontents`, wordt aangepast naar het Duitse Inhaltsverzeichnis.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Let op dat de optie 'ngerman' is

\begin{document}

\tableofcontents

\section{"Über "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

Andere taalinstellingen brengen ontwerpwijzigingen met zich mee: in traditionele Franse typografie staat er bijvoorbeeld een spatie vóór sommige leestekens, zoals `:`, en dit wordt automatisch toegevoegd als je `babel` laadt met de optie `french`.

## Globale opties

Soms wil je dat een optie beschikbaar is voor alle pakketten die je hebt geladen.
Dat kan door de optie op te geven bij de `\documentclass`-regel: elk pakket kan deze lijst 'zien'.
Dus om de taal van een document door te geven aan alle pakketten, kunnen we het volgende gebruiken:

```latex
\documentclass[ngerman]{article} % Let op dat de optie 'ngerman' is
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Über "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind geel.

\end{document}
```

## Meer definities

`\newcommand` maakt het mogelijk om commando's te definiëren met maximaal negen argumenten, waarvan de eerste optioneel kan zijn.

Als we het voorbeeld uit de hoofdles nemen, kunnen we de kleur optioneel maken met blauw als standaardkeuze.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\sw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Iets over \sw{appels} en \sw[red]{peren}.

\end{document}
```

Optionele argumenten worden aangegeven met `[]`, en als ze worden weggelaten, wordt de standaardwaarde uit de definitie gebruikt.

## `\NewDocumentCommand`

Sinds de LaTeX-uitgave van oktober 2020 is er een uitgebreidere definitiestructuur beschikbaar.
In oudere LaTeX-versies was dit beschikbaar via het `xparse`-pakket, dat we hier gebruiken voor compatibiliteit.

We kunnen het bovenstaande voorbeeld herhalen, maar dan met `\NewDocumentCommand`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Alleen nodig voor oudere LaTeX-versies
\usepackage{xcolor}

\NewDocumentCommand\sw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Iets over \sw{appels} en \sw[red]{peren}.

\end{document}
```

Net als bij `\newcommand` neemt `\NewDocumentCommand` het te definiëren commando (`\sw` in dit geval) en de definitie, gebruikmakend van `#1` tot `#9` voor de argumenten.
Het verschil zit echter in hoe de argumenten worden gespecificeerd.

In tegenstelling tot `\newcommand`, waar alleen het aantal argumenten wordt gegeven (en eventueel een standaard voor de eerste), specificeer je bij `\NewDocumentCommand` elk argument met een letter.
Een commando met twee argumenten zou dus worden opgegeven met `{mm}` in plaats van `[2]`.
Dit is iets langer, maar maakt het mogelijk om veel meer soorten commandovormen te definiëren.
Hier gaven we een eenvoudig voorbeeld waarbij het eerste argument optioneel is en standaard op blauw staat (`O{blue}`), en het tweede verplicht is (`m`).
