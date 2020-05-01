---
title: "More on: Tables"
---

## Numeric Alignment of Columns

The alignment of numbers in tables can be handled by the column type `S` 
that is provided by the `siunitx` package.

A simple example with two aligned numeric columns would be:

```latex
\documentclass{article}
\usepackage{booktabs,siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Values} &  {More Values} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
2.3      &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    e4 \\
\bottomrule
\end{tabular}
\end{document}
```

The package provides many possibilities for formatting the numbers in different ways, see the [package documentation](https://texdoc.net/pkg/siunitx).


## Specifying the total table width

The width of a `tabular` environment is automatically determined based on the contents of the table. There are two commonly used mechanisms to specify the total width.

### `tabular*`

The `tabular*` environment takes an additional _width_ argument that specifies the total width of the table. Stretchy space must be added to the table using the `\extracolsep` command, this space is added between all columns from that point in the preamble, It is almost always used with `\fill` a special space that stretches to be as large as necessary.

```latex
\documentclass{article}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

The `tabularx` environment, provided by the package of
the same name, has a similar syntax to `tabular*` but instead of
adjusting the inter-column space, adjusts the widths of columns
specified by a new column type, `X`. This is equivalent to a
specification of `p{...}` for an automatically determined width.

```latex
\documentclass{article}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

Unlike the other forms discussed in these lessons, `tabularx` needs to
typeset the table several times with trial widths to determine the
final setting, this means that there are several restrictions on the
use of the environment, see the [package documentation](https://texdoc.net/pkg/tabularx).

## Multi-page tables

A `tabular` forms an unbreakable box so it can not be split over more
than one page, and is often placed in a floating `table` environment.

Several packages provide variants with similar syntax that do allow
page breaking. Here we show use of the longtable package.

```
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array,longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Entry & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
A Wider Entry & b\\  
\end{longtable}

\end{document}
```

`longtable` is notable in that it that it preserves the column widths
over all the pages of the table, however in order to achieve this it
may take several runs of LaTeX so that wide entries encountered later
in the table  can affect the column widths in earlier pages.

## Table notes

threeparttable



## Defining new column types

`\newcolumntype`
