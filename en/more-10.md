---
title: "More on: Mathematics"
---


## Further amsmath alignments

In addition to the `align*` enviornment shown in the main lesson,
`amsmath` has several other display math constructs, notable `gather`
for multi-line displays that do not need alignment,and `multline` for
spiltting a larger single excpression over multiple lines, aligning the
first line to the left, and the last to the right.

```latex
\documentclass[a4paper]{article}

\usepackage{amsmath}

\begin{document}

Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

In addition there are variants of the alignments environments ending
in `ed` that make a subterm of a larger display for example `aligned` and
`gathered`.

# Bold Math
Standard LaTeX has two methods to give bold symbols in math. To make
an entire expression bold, use `\boldmath` before entering the
expression. The command `\mathbf` is also available to set individual
terms in upright bold roman.

```latex
\documentclass[a4paper]{article}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
\end{document}
```

If you want to access bold symbols (as would be used by `\boldmath`)
within an otherwise normal weight expression, then you can use the
command `\bm` from the `bm` package.

```latex
\documentclass[a4paper]{article}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y})=x^{2}-{\bm{y}}^{2}$
\end{document}
```

# Mathtools
The package `mathtools` includes `amsmath` but adds several additional
features, such as variants of the `amsmath` matrix environments that
allow the column alignment to be specified.
```latex
\documentclass[a4paper]{article}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2
\end{pmatrix*}
\]

\end{document}
```

# Unicode Math

As will be seen in [Lesson 14](lesson-14) There are variant TeX
engines that use OpenType fonts. By default these engines still use
classic TeX math fonts but you may use the `unicode-math` package
to use OpenType Math fonts. The details of this package are beyond
this course and we refer you to the
[package documentation](https://texdoc.net/pkg/unicode-math)
however we give a small example here.

```
% !TEX xelatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{texgyretermes-regular.otf}
\setmathfont{XITSMath-Regular.otf}

\begin{document}

One two three
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

\end{document}
```
