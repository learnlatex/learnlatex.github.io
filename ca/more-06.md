---
layout: "lesson"
lang: "en"
title: "Més sobre: Estenent LaTeX utilitzant paquets"
description: "Aquesta lliçó explica més detalls sobre la càrrega de paquets, ensenya el paquet babel per a la selecció d'idiomes, i dóna més detalls sobre comandes creades per l'usuari."
toc-anchor-text: "Més sobre: Estenent LaTeX utilitzant paquets"
---

## Carregar diversos paquets

La comanda `\usepackage` pren una llista de paquets separats per comes, i així pots carregar-los tots de cop: per exemple `\usepackage{color,graphicx}`. Si estàs passant opcions a un paquet, aquestes opcions s'aplicaran a tots els paquets de la llista. D'altra banda, si carregues els paquets de forma separada posant-los en línies diferents, serà més fàcil comentar-los o descomentar-los quan et calgui. Per tant, aquesta serà la manera de preferència.

## El paquet `babel`

Ja hem explicat el paquet `babel` [en la secció principal de la lliçó](lesson-06) amb la finalitat d'elegir diferents patrons de separació sil·làbica. Però aquest paquet fa molt més que això, en funció de l'idioma que utilitzis. Per exemple, per l'alemany proporciona algunes abreviatures per a la creació de guions 'suaus' i també una forma ràpida d'escriure dièresi sense necessitat d'utilitzar un teclat alemany.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Utilitzem 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

Altres opcions de l'idioma poden provocar canvis en el disseny: per exemple, en la tradicional tipografia francesa, hi ha un espai en blanc abans d'alguns signes de puntuació com ara `:`, i aquest espai s'afegeix automàticament si carregues `babel` amb l'opció `french`.

## Opcions globals

Algunes vegades, vols que una opció estigui disponible en tots els paquets que has carregat. Això es fa afegint aquesta opció en la línia `\documentclass`: cada paquet pot 'veure' aquesta llista. Per passar l'idioma del document a tots els paquets:

```latex
\documentclass[ngerman]{article} % Utilitzem 'ngerman'
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

```latex
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

```latex
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
