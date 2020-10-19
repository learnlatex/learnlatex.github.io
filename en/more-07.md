---
lang: "en"
title: "More on: Including graphics and making things 'float'"
---

## Naming graphics files

LaTeX works on many computer platforms so
file names deserve some thought.
Safest is to name your graphics simply, in particular without spaces.
For example, if you want to organize your files by keeping all
graphics in a subdirectory, then something like
`\includegraphics[width=30pt]{pix/mom.png}`
is portable and future-proof.

Spaces in file names are traditionally somewhat problematic, but are now
generally supported. However, if you have spaces in the name, and you have
issues, you may wish to try removing the spaces as the first step.

Accented character support is somewhat variable; there are issues with some
systems, particularly on Windows. If you find issues with accented characters
in file names, try using only ASCII characters for a test.

## Storing graphics in a subdirectory

A common way to lay out source files is to put all graphics into a subdirectory.
You can then include the relative path, as is shown above; notice that the
`/` character is used to separate parts of the path _even on Windows_.

If you have a lot of graphics, you might want to set up the subdirectory
in advance. That can be done using `\graphicspath`, which needs a braced entry
for each subdirectory. For example, to include both `figs` and `pics`
subdirectories, we would have:

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Notice in particular the trailing `/` in these.

## Producing graphics

As discussed, LaTeX easily uses graphics from most sources, including plots from
scientific software. When you do that, you probably want to save as a PDF if you
can, as this is a scalable format. If you do need to create a bitmap, aim for
high resolution. You can make mouse-created graphics that include LaTeX snippets
with [Inkscape](https://inkscape.org/). An alternative that in addition extends
those drawing techniques to three dimensions is
[Asymptote](https://www.ctan.org/pkg/asymptote). These two produce their output
as files that you include in your document.

You can also create graphics such as drawings that are especially suited to
LaTeX, with very high precision as well as equations and labels that match your
document. You can draw graphics directly inside your document, which is
convenient although at the cost of more complex documents with larger
requirements, by using [Ti*k*Z](https://ctan.org/pkg/pgf). An alternative is
[PSTricks](https://ctan.org/pkg/pstricks-base).

## Placing floats

LaTeX's float placement is complex.
The most common request is to have the figure placed
in the output exactly where it lies in the input.
The `float` package will do that.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % dummy text for filler
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{An example image}
\end{figure}
\lipsum[8-15]
\end{document}
```

Note the `H` option, which puts the figure 'absolutely Here'.
However it is often not recommended to use `H`, because it may
create large portions of white space in your document.

## Other types of float

We will [see soon](lesson-08) that we can put tables in floats; they will go
into a `table` environment. However, we don't _have_ to put graphics in the
`figure` environment or tables in the `table` environment; this is just
convention.

You might want to have other types of floating environment; each type is
inserted independently. You can do that using the
[`trivfloat`](https://ctan.org/pkg/trivfloat) package. This provides a single
command, `\trivfloat`, to make new types of float.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % dummy text for filler
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{An example image}
\end{image}
\end{document}
```
