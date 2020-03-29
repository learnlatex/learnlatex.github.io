---
title: More on: Including graphics and making things 'float'
---

### Graphics

The most commonly-used options for `\includegraphics` are
`width`, `height`, and `scale`.
For example,
`\includegraphics[width=1.5in]{...}`
makes the graphic 1.5 inches wide and
`\includegraphics[width=0.40\textwidth]{...}`
makes it forty percent of the width of the text.
The command `\includegraphics[scale=0.50]{...}` makes it half as large
as its nominal size.
A complete list of options, including ones to rotate or reflect
and to give a subpart of the image, is at
[the reference](https://latexref.xyz/_005cincludegraphics.html#g_t_005cincludegraphics).

LaTeX works on many computer platforms so
file names deserve some thought.
Safest is to name your graphics simply, in particular without spaces.
For example, if you want to organize your files by keeping all
graphics in a subdirectory, then something like
`\includegraphics[width=30pt]{pix/mom.png}`
is portable and future-proof.

LaTeX places graphics with the bottom left on the baseline.
So you may want to move them horizontally or vertically; this
has side-by-side graphics that are vertically centered.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{mwe}
\newcommand*{\vcenteredhbox}[1]{\begingroup
  \setbox0=\hbox{#1}\parbox{\wd0}{\box0}\endgroup}

\begin{document}
These two are centered and separated by a space.
\begin{center}
  \vcenteredhbox{\includegraphics[height=2cm]{example-image}}
  \qquad
  \vcenteredhbox{\includegraphics[height=1cm]{example-image}}
\end{center}
\end{document}
```
<!-- {% endraw %} -->


### Producing graphics

As discussed, LaTeX easily uses graphics from most sources,
including plots from scientific software.
You can also create graphics such as drawings that are
especially suited to LaTeX, with very high
precision as well as equations and labels that match your document.
One way is by using [MetaPost](https://www.ctan.org/pkg/metapost),
a derivative of the program that Knuth used to draw fonts.
An alternative that in addition extends those drawing techniques to three
dimensions is [Asymptote](https://www.ctan.org/pkg/asymptote).
These two put output into files that you include in your document.

You can draw graphics directly inside your document, which is convenient
although at the cost of more complex documents with larger
requirements, by using
[Ti*k*Z](https://www.ctan.org/pkg/pgf).
An alternative is [PSTricks](https://www.ctan.org/pkg/pstricks-base).

You can also make mouse-created graphics that include
LaTeX snippets with [Inkscape](https://inkscape.org/).


### Floats

LaTeX's float placement is complex.
The most common request is to have the figure placed
in the output exactly where it lies in the input.
The `float` package will do that.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{mwe}   % gives example-average.pdf
\usepackage{lipsum}  % dummy text for filler
\usepackage{float}  

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Example graphic}\label{fig:example-image}
\end{figure}
\lipsum[8-15]
\end{document}
```
<!-- {% endraw %} -->

Note the `H` option, which puts the figure Here.

You can get the same effect with the
[caption](https://ctan.org/pkg/caption) package.
<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{mwe}   % gives example-average.pdf
\usepackage{lipsum}  % dummy text for filler
\usepackage{caption}  

\begin{document}
\lipsum[1-7]
\begin{center}
  \includegraphics[width=0.25\textheight]{example-image}
  \captionof{figure}{Example graphic}\label{fig:example-image}
\end{center}
\lipsum[8-15]
\end{document}
```
<!-- {% endraw %} -->
This has the advantage that the package gives
you a great deal of flexibility with captions.

For more see the reference's sections on
[figure](https://latexref.xyz/figure.html#figure) and
[floats](https://latexref.xyz/Floats.html#Floats).
