---
title: Extending LaTeX using packages
---

After having declared a class, in the preamble
you can modify the document in relatively small ways by using
*packages*.

For example, we can change the margins with a new second line.

```latex
\documentclass{book}
\usepackage[margin=1in]{geometry}

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

One of LaTeX's strengths is that you can choose from
thousands of packages, including ones for writing
mathematical text, for hyperlinking, for sophisticated capabilities
with color, etc.
We will introduce some of these in later lessons.
