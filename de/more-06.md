---
layout: "lesson"
lang: "de"
title: "Mehr zu: LaTeX mit Paketen erweitern"
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
`\tableofcontents` is changed to the German _Inhaltsverzeichnis_.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'

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

Sometimes, you want an option to be available to all of the packages you've
loaded. That is done by giving it on the `\documentclass` line: every package
can 'see' this list. So to pass the language of a document to all packages,
we might use:

```latex
\documentclass[ngerman]{article} % Notice that the option name is 'ngerman'
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

## More definitions

`\newcommand` allows commands with up to nine arguments, the first of which may be optional.

If we take the example from the main lesson, we could make the color
optional, defaulting to blue.

```
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Something about \kw{apples} and \kw[red]{oranges}.

\end{document}
```

Optional arguments are delimited with `[]` and if omitted, the default
value specified in the definition is used.

## `\NewDocumentCommand`

From the October 2020 LaTeX release, an extended definition system is available.
In older LaTeX releases this was available via the `xparse` package which we use
here for compatibility.

We can repeat the above example but using `\NewDocumentCommand`

```
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Only needed for older LaTeX releases
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Something about \kw{apples} and \kw[red]{oranges}.

\end{document}
```

Just as with `\newcommand`, `\NewDocumentCommand` takes the command
being defined (`\kw` here) and the definition body, using `#1` to `#9`
for the arguments, however the difference is in how the arguments are
specified.

Unlike `\newcommand` where just the number of arguments is given,
optionally supplying a default for the first, with
`\NewDocumentCommand` each argument is specified by a letter so a two
argument command would be specified by `{mm}` rather than `[2]`. This
is slightly more verbose but allows many more forms of commands to be
defined. Here we just give this simple example where the first
argument is optional, defaulting to blue (`O{blue}`) and the second
argument is mandatory (`m`).
