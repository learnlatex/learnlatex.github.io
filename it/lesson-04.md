---
layout: "lesson"
lang: "it"
title: "Struttura logica"
description: "Questa lezione mostra alcuni comandi di formattazione di base e li confronta con la formattazione semantica con comandi di sezionamento ed elenchi."
toc-anchor-text: "Struttura logica"
toc-description: "Struttura e presentazione visuale."
---

# Struttura logica

<span
  class="summary">Questa lezione mostra alcuni comandi di formattazione di base e li confronta con la formattazione semantica con comandi di sezionamento ed elenchi.</span>

LaTeX provides ways to concentrate on the logical structure of your document, as well as the
ability to directly set the appearance. Most of the time, it's much better to use
methods that focus on structure, as that makes it easy to reuse or alter
appearance when you have to.

## Struttura e presentazione visuale

We'll start with an example contrasting one of the most common logical markup
commands in LaTeX, `\emph`, with simply making something italic. (In print,
that's usually how things are emphasized.)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Testo con \emph{enfasi e contenuto \emph{annidato}}.

Testo in \textit{corsivo e contenuto \textit{annidato}}.
\end{document}
```

You can probably guess that `\textit` is a command to make text italic, but it
_always_ makes things italic, so it doesn't work for nested material. See how
`\emph` _does_ know about nesting. There are also places where the emphasis
isn't the same as italic; for example, in presentations color is usually a better
option. With logical markup, we don't have to worry about that detail in the
body of the document.

We will look at [manual formatting later](lesson-11), but for the moment we'll
add `\textbf` to commands we know: it makes text bold.

## Comandi di sezionamento

You probably have used a word processor, where  to start a section most people
enter the title text then simply make it bigger and bold, and follow it with a
new line. In LaTeX, using logical markup is actually _easier_ than doing the
formatting by hand; we can use the `\section` command. This handles the font
changes, vertical space, etc., and keeps the output uniform throughout the
document.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Ciao mondo!

Questo è un primo documento.

\section{Titolo del primo paragrafo}

Testo del primo paragrafo.

Secondo capoverso.

\subsection{Sottoparagrafo nel primo paragrafo}

Testo del sottoparagrafo.

\section{Secondo paragrafo}

Testo del secondo paragrafo.

\end{document}
```

Using the standard `article` setup, LaTeX numera i paragrafi e i sottoparagrafi
e stampa i titoli in nero. Penseremo a cambiare un po' il design [nella
prossima lezione](lesson-05).

LaTeX può suddividere i documenti in diversi livelli

- `\chapter` (ma per questo servono `\documentclass{book}` o
  `\documentclass{report}`)
- `\section`
- `\subsection`
- `\subsubsection`

Possiamo fare di più: the next one 'down' is `\paragraph`, but almost always that's
too much 'detail' in sections. (Yes, `\paragraph` is a section command, _not_ a
way to start a new paragraph!)

You might wonder about the title of a document. There are some special
commands for that, but not all documents use them, so we've
[covered that in the parallel extra lesson](more-04).

## Elenchi

The other very common place you'll want logical markup e nella scrittura
degli elenchi.
Ci sono due tipi comuni di elenchi integrati in LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Ordinato
\begin{enumerate}
  \item Una voce
  \item Un'altra
  \item Però! Tre voci
\end{enumerate}

Non ordinato
\begin{itemize}
  \item Una voce
  \item Un'altra
  \item Però! Tre voci
\end{itemize}

\end{document}
```

Nota bene che adoperiamo `\item` per incominciare ciascuna voce, e 
che in ogni tipo di elenco il marcatore viene aggiunto automaticamente.

## Esercizi

Sperimenta differenti livelli di sezionamento. Adopera `\documentclass{report}`
invece di `\documentclass{article}` e aggiungi comandi `\chapter`. How
do they look? Try out `\paragraph` and (even) `\subparagraph` to see they work:
by default, they _don't_ add numbers.

Componi alcuni elenchi e annida una lista dentro l'altra. How does the format of the
numbers or markers change? You can only go to four levels with standard LaTeX,
but more than four nested lists tends to be a bad sign anyway!
