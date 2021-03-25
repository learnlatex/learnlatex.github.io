---
layout: "lesson"
lang: "de"
title: "Mehr zu: LaTeX mit Paketen erweitern"
description: "Diese Lektion zeigt mehr Details zum Laden von Paketen, präsentiert das babel Paket zur Sprachauswahl und mehr Details zu benutzerdefinierten Befehlen."
toc-anchor-text: "Mehr zu: LaTeX mit Paketen und Definitionen erweitern"
---
## Mehrere Pakete laden

Dem Makro `\usepackage` kann man eine durch Kommata getrennte Liste von Paketnamen 
übergeben, so dass man mehrere Pakete auf einmal laden kann, z.B. mit 
`\usepackage{color,graphicx}`. Übergibt man zusätzliche Optionen werden diese an alle 
Pakete der Liste weitergereicht. Es is zudem leichter, Pakete auszukommentieren, wenn 
sie einzeln geladen werden. Daher bleiben wir im folgenden dabei, jedes Paket einzeln 
zu laden.

## Das Paket `babel`

Wir haben [in der Haupteinheit](lesson-06) das Paket `babel` als eine Möglichkeit 
vorgestellt, unterschiedliche Silbentrennungsmuster zu nutzen. Das Paket kann noch eine 
Menge mehr, abhängig von den verwendeten Sprachen. Für deutsche Texte stellt es 
beispielsweise Kürzel (shorthands) bereit, um bedingte Trennstriche ('soft' hyphens) 
anzugeben oder auch Umlaute auf nicht-deutschen Tastaturen schneller eingeben zu können.
Zusätzlich werden Begriffe wie _Table of Contents_, der automatisch durch 
`\tableofcontents` genutzt wird, ins Deutsche zu _Inhaltsverzeichnis_ übersetzt.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Beachte, dass die Option 'ngerman' heißt

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.


\end{document}
```

Andere Spracheinstellungen bewirken Änderungen des Layouts. So wird beispielsweise
in der traditionellen französischen Typographie vor einige Satzzeichen ein zusätzlicher 
Abstand gesetzt, z.B. bei `:`. Dieser Abstand wird automatisch ergänzt, sobald 
man `babel` mit der Option `french` lädt.

## Globale Optionen

Manchmal möchte man Optionen für alle geladenen Pakete angeben. Dies wird
erreicht, indem die Option in der `\documentclass`-Zeile gesetzt wird: jedes
Paket kann diese Liste nutzen. Um also die Dokumentsprache allen Paketen
mitzuteilen könnte man folgendes nutzen:

```latex
\documentclass[ngerman]{article} % Beachte, dass die Option 'ngerman' heißt
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## Mehr Definitionen

`\newcommand` erlaubt Befehle mit bis zu neun Argumenten, das erste kann
optional sein.

Ausgehend vom Beispiel in der Hauptlektion können wir die Farbe optional machen,
mit Blau als Standardwert.

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Irgendwas über \kw{Äpfel} und \kw[red]{Orangen}.

\end{document}
```

Optionale Argumente werden in `[]` gegeben und wenn sie ausgelassen werden, wird
der Standardwert aus der Definition verwendet.

## `\NewDocumentCommand`

Seit der Oktober 2020 LaTeX-Veröffentlichung ist ein erweitertes
Definitionssystem verfügbar. In älteren LaTeX-Versionen wurde dieses durch das
`xparse` Paket definiert, welches wir hier für die Kompatibilität auch
verwenden.

Wiederholen wir obiges Beispiel allerdings mit `\NewDocumentCommand`.

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\usepackage{xparse} % Nur für ältere LaTeX-Versionen notwendig
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Irgendwas über \kw{Äpfel} und \kw[red]{Orangen}.

\end{document}
```

Genau wie `\newcommand` erwartet `\NewDocumentCommand` den zu definierenden
Befehl (hier `\kw`) und die Definition unter Verwendung von `#1` bis `#9` für
die Argumente. Es gibt aber Unterschiede darin, wie die Argumente spezifiziert
werden.

Anders als für `\newcommand`, für das nur die Anzahl der Argument und optional
auch der Standardwert für das erste angegeben wird, wird für
`\NewDocumentCommand` jedes Argument durch einen Buchstaben gekennzeichnet, ein
Befehl der zwei Argumente erwartet wird also durch `{mm}` anstelle von `[2]`
erzeugt. Dies ist etwas ausführlicher, erlaubt aber auch flexiblere
Definitionen. An dieser Stelle soll aber obiges Beispiel mit einem optionalen
Argument mit `blue` als Standardwert (`O{blue}`) und einem weiteren
obligatorischen Argument (`m`, für 'mandatory') ausreichen.
