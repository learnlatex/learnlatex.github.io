---
title: Using document classes to influence design
---

One thing that may not be clear after
the prior lesson is the first line's
`article`.
This is a document *class*.
It gives the basic design of the document: margins, fonts,
spacing, etc.
For instance, LaTeX articles have no chapters and so the top-level
unit is `\section{..}`.

To get chapters, instead declare `\documentclass{book}`.

```latex
\documentclass{book}

\begin{document}
Hey world!

This is a first document.


% ================
\chapter{Chapter One}
Introduction to the first chapter.


\section{Title of the first section}
Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.


% ================
\section{Second section}

Text of the second section.

\end{document}
```

LaTeX has hundreds of document classes available.
Many journals offer one for download that suits their requirements,
and similarly many universities have one for dissertations.
