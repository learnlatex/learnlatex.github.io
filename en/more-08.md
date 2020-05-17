---
title: "More on: Tables"
---

## Numeric alignment of columns

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

The package provides many possibilities for formatting the numbers in
different ways; see the [package
documentation](https://texdoc.net/pkg/siunitx).


## Specifying the total table width

The width of a `tabular` environment is automatically determined based
on the contents of the table. There are two commonly used mechanisms
to specify the total width.

Note that it is almost always preferable to format the table to a
specified width as below (perhaps using a font size such as `\small` if
necessary) rather than scaling a table with `\resizebox` and similar
commands which will produce inconsistent font sizes and rule widths.

### `tabular*`

The `tabular*` environment takes an additional _width_ argument that
specifies the total width of the table. Stretchy space must be added
to the table using the `\extracolsep` command. This space is added
between all columns from that point in the preamble. It is almost
always used with `\fill` a special space that stretches to be as large
as necessary.

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
final setting. This means that there are several restrictions on the
use of the environment; see the
[package documentation](https://texdoc.net/pkg/tabularx).

## Multi-page tables

A `tabular` forms an unbreakable box so it must be small enough to fit
on one page, and is often placed in a floating `table` environment.

Several packages provide variants with similar syntax that do allow
page breaking. Here we show use of the `longtable` package.

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

`longtable` is notable in that it preserves the column widths
over all pages of the table; however in order to achieve this it
may take several runs of LaTeX so that wide entries encountered later
in the table can affect the column widths in earlier pages.

## Table notes

It is quite common to need footnote-like marks in a table refering to
notes under the table. The `threeparttable` package simplifies the
markup for such tables, arranging that the notes are set in a
block the same width as the table. Refer to the
[package documentation](https://texdoc.net/pkg/threeparttable)
for full details, but we show a simple example here.
```latex
\documentclass{article}
\usepackage{array,threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Typesetting in narrow columns

The default line breaking settings assume relatively long lines to
give some flexibility in choosing linebreaks. The following example
shows some possible approaches. The first table shows interword spacing
stretched and TeX warning about Underfull lines. Using `\raggedright`
usually avoids this problem but may leave some lines ‘too ragged’. The
`\RaggedRight` command from the `ragged2e` package is a compromise,
which allows some raggedness in the line lengths, but will also
hyphenate where necessary, as shown in the third table.

Note the use of `\arraybackslash` here, which resets the definition of
`\\` so that it ends the table row.

An alternative technique, as shown in the fourth table, is to use a
smaller font so that the columns are not so narrow relative to the
text size.

```latex
\documentclass[a4paper]{article}
\usepackage{array,ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate woords.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate woords.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate woords.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate woords.
\end{tabular}

\end{table}

\end{document}
```

## Defining new column types

As demonstrated in the main lesson, the array package allows
constructs such as `>{\bfseries}c`  to denote a bold centered column.
It is often convenient to define a new column type to encapsulate such
use, for example

```latex
\newcolumntype{B}{>{\bfseries}c}
```
would allow the use of `B` in tabular preambles to specify a bold
centered column.


## Line spacing in tables

In the main lesson we demonstrated `\addlinespace` from the `booktabs`
package, which is useful for adding extra space between specific lines.

There are two general parameters that control line spacing,
`\arraystretch` and `\extrarowheight` (the latter from the `array`
package).

```latex
\renewcommand\arraystretch{1.5}
```

Will increase the baseline spacing by 50%.


Often, especially when using `\hline`, it is better just to increase
the height of rows, without increasing their depth below the baseline.
The following example demonstrates the `\extrarowheight` parameter.

```latex
\documentclass[a4paper]{article}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
