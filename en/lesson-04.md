---
title: Logical structure
---

LaTeX provides ways on the logical structure of your document, as well as the
ability to directly set the appearance. Most of the time, it's much better to
methods that focus on structure, as that makes it easy to reuse or alter
appearance when you have to.

## A first example

We'll start with an example contrasting one of the most common logical mark-up
commands in LaTeX, `\emph`, with simply making something italic. (In print,
that's usually how things are emphasised.)

```latex
\document{article}
\begin{document}
Some text with \emph{empahsis and \emph{nested} content}.

Some text in \textit{italic and \textit{nested} content}.
\end{document}
```

You can probably guess that `\textit` is a command to make text italic, but it
_always_ makes things italic, so it doesn't work for nested material. See how
`\emph` _does_ know about nesting. There are also places where emphasis  isn't
the same as italic, for example in presentations color is usually a better
option. With logical mark-up, we don't have to worry about that detail in the
body of the document.

## Sectioning commands

You probably have used a word processor, where  to start a section most people
enter the title text then simply make it bigger and bold, and follow it with a
new line. In LaTeX, using logical mark-up is actually _easier_ than doing the
formatting by hand: we can use the `\section` command. This handles the font
changes, vertical space, etc., and keeps the output uniform throughout the
document.

```latex
\documentclass{article}
\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.

\section{Second section}

Text of the second section.

\end{document}
```

Using the standard `article` set up, LaTeX numbers the sections and subsections
and includes the titles in boldface. We'll think a bit about changing design [in
the next lesson](lesson-05).

LaTeX can divide up documents into quite a few levels

- `\chapter` (but we need `\documentclass{report}` for this)
- `\section`
- `\subsection`
- `\subsubsection`

We can go further: the next one 'down' is `\paragraph`, but almost always that's
too much 'detail' in sections. (Yes, `\paragraph` is a section command, _not_ a
way to start a new paragraph!)

## Lists

The other very common place you'll want logical mark-up is writing lists.
There are two common types of list built-in to LaTeX.

```latex
\document{article}
\begin{document}

Ordered
\begin{enumerate}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{enumerate}

Unordered
\begin{itemize}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{itemize}

\end{document}
```

Notice that we use `\item` to start each entry, and that the marker used  for
each type of list is added automatically.

## Exercises

Experiment with different sectioning levels. Try using `\documentclass{report}`
instead of `\documentclass{article}` and adding `\chapter` commands. How
do they look? Try out `\paragraph` and (even) `\subparagraph` to see they work:
as standard they _don't_ add numbers.

Make some lists, and nest one list inside another. How does the format of the
numbers or markers change? You can only go to four levels with standard LaTeX,
but more than four nestings tends to be a bad sign anyway!
