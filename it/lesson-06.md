---
layout: "lesson"
lang: "it"
title: "Estendere LaTeX mediante pacchetti e definizioni"
description: "Questa lezione mostra come estendere le funzionalità di LaTeX per soddisfare le tue esigenze e come modificare l'aspetto dei documenti mediante diversi pacchetti, e ti mostra come puoi definire i tuoi comandi personali."
toc-anchor-text: "Estendere LaTeX"
toc-description: "Adoperare i pacchetti e le definizioni."
---

# Estendere LaTeX

<span
  class="summary">Questa lezione mostra come estendere le funzionalità di LaTeX per soddisfare le tue esigenze e come modificarne ulteriormente l'aspetto mediante diversi pacchetti e definizioni. Inoltre, ti mostra come definire i tuoi comandi personali.</span>

Dopo aver dichiarato una classe, nel preambolo del documento 
puoi modificare le funzionalità standard di LaTeX aggiungendo 
uno o più *pacchetti*. I pacchetti possono:

- cambiare il modo in cui certe parti di LaTeX funzionano
- aggiungere nuovi comandi a LaTeX
- cambiare l'aspetto del documento

## Modificare il funzionamento di LaTeX

L'utente ha ben poche possibilità di personalizzare 
il 'kernel' (o nucleo) di LaTeX. La naturale 
modularità del programma, però, prevede pacchetti 
aggiuntivi che permettono di risolvere problemi molto comuni.
Il primo consiste nell'adattare il comportamento di LaTeX alla 
lingua del documento per quanto riguarda sillabazione, punteggiatura, 
citazioni, uso delle virgolette, localizzazione, eccetera.
Lingue diverse hanno regole diverse, perciò è importante dire 
a LaTeX quale (o quali) adoperare. 
Questo aspetto è gestito dal pacchetto `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[italian]{babel}

\usepackage[width = 6cm]{geometry} % Per ottenere cesure a fine riga

\begin{document}

Questo è un bel po' di testo riempitivo che dimostrerà come LaTeX sillaba 
il materiale e che sarà in grado di darci almeno un punto di sillabazione.
Questo è un bel po' di testo riempitivo che dimostrerà come LaTeX sillaba 
il materiale e che sarà in grado di darci almeno un punto di sillabazione.

\end{document}
```

Prova a decommentare la riga (chiaramente ingannevole) che carica `babel` 
con l'opzione per l'italiano e osserva il risultato. 
(Le regole di sillabazione predefinite sono quelle dell'inglese americano.)

Il pacchetto `babel` fa molto più della semplice sillabazione, a seconda
della lingua caricata; se ti servono, ti diamo 
[alcuni dettagli aggiuntivi](more-06).

## Modificare l'aspetto del documento

Spesso è utile sapere come modificare alcuni aspetti del documento 
indipendentemente dalla classe dichiarata.
Quelli più ovvi sono i margini della pagina.
Nell'esempio qui sopra abbiamo caricato il pacchetto `geometry`,
ma ora ne faremo uno dedicato espressamente i margini (attenzione:
il PDF composto sarà di più pagine).

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Ehi, mondo!

Questo è il mio primo documento.

% ++++++++++++++++
\chapter{Capitolo Uno}
Introduzione al primo capitolo.

% ================
\section{Titolo del primo paragrafo}
Testo del primo paragrafo

Secondo capoverso.

\subsection{Sottoparagrafo del primo paragrafo}

Testo del sottoparagrafo.

% ================
\section{Secondo paragrafo}

Testo del secondo paragrafo.

\end{document}
```

You should see the effect here compared to not loading `geometry`.

## Aggiungere nuove funzionalità

One of LaTeX's strengths is that you can choose from thousands of packages,
including ones for writing mathematical text, for hyperlinking, for
sophisticated capabilities with color, etc. We will see some more common
packages in later lessons.

## Definire comandi personali

Sometimes you need a command specific to your document, either some
functionality not found in the available packages or simply a command
to enter a common expression that is used multiple times.

The following example shows a command to produce keywords with a
specific style applied.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

In the definition `[1]` denotes the number of arguments (here one)
and `#1` denotes the first argument that is supplied
(`apples` or `oranges` in this example). You may have up to nine
arguments, but it is usually best to have just one argument, or
sometimes none at all.

Defining commands does not just reduce the typing required to produce
a document. It helps to separate out the styling information. If it is
decided to use a different style for keywords, rather than having to
edit the entire document, you simply need to use a different
definition. Here we load the `xcolor` package to provide colors, and
use blue in place of bold in the formatting.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

Beware that defining too many commands or defining commands with
multiple arguments may make the document source harder  to understand
as it is using an unfamiliar syntax. The ability to define
document-specific commands should be used with care.

## Esercizi

Try out writing some text in other European languages and see how `babel`
affects hyphenation: you can probably find some text on the internet, and guess
the right options.

Try altering the margins in the `geometry` example. You can set the individual
`top`, `bottom`, `left` and `right` margins separately using a comma-separated
list.

Try loading the `lipsum` package and then add the command `\lipsum` to your
document. Can you guess why this package is useful for making examples?

Try altering the definition of `\kw` to achieve a different style.
