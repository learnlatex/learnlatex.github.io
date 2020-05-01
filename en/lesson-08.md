---
title: Tables
---


## Basic tables

Tables in LaTeX are set using the `tabular` environment. This lesson will assume
you load the `array` package, which adds more functionality to LaTeX tables, and
which is only not built into the LaTeX kernel for historic reasons. So put the
following in your preamble and we're good to go:

```latex
\usepackage{array}
```

In order to typeset a `tabular` we have to tell LaTeX how many columns will be
needed and how they should be aligned. This is done in a mandatory argument
&ndash; often referred to as table preamble &ndash; to the `tabular`
environment, in which you specify the columns by using single letter names. The
available column types are:

<!-- don't line wrap this table, markdown seems to not support this -->

| type       | description |
| ---        |:-- |
| `l`        | left aligned column |
| `c`        | centred column |
| `r`        | right aligned column |
| `p{width}` | a column with fixed width `width`, the text will be automatically line wrapped and fully justified |
| `m{width}` | like `p`, but vertically centred compared to the rest of the row |
| `b{width}` | like `p`, but bottom aligned |
| `w{align}{width}` | prints the contents with a fixed `width`, silently overprinting if things get larger. You can choose the horizontal alignment using `l`, `c`, or `r`. |
| `W{align}{width}` | like `w`, but this will issue an overfull box warning if things get too wide. |

The columns `l`, `c`, and `r` will have the natural width of the widest cell.
Each column has to be declared, so if you want three centred columns, you'd use
`ccc` in the table preamble. Spaces are ignored, so `c c c` is the same.

In a table body columns are separated using an ampersand `&` and a new row is
started using `\\`.

We got everything we need for our first little table. In the following code the
`&` and `\\` are aligned: this isn't necessary in LaTeX, but helps reading the
source.

```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```


## Adding lines

A word of advice prior to introducing lines: lines should be used really
sparsely in tables, and normally vertical ones often look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines, instead you
should skip this section and read about
[`booktabs`](#tables-in-printing-quality-with-the-booktabs-package).

Nevertheless, LaTeX has got you covered if you need lines. Vertical lines are part of
the column specification and hence should go into the preamble. To add a line
between two columns just add `|` between their specification. Please note that
vertical lines are only inserted if the cell to their left exists (except for a
vertical line left of the first column). Note how in the following example the
right most line will not appear in the last row.

```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{|l|ll|}
  Animal  & Food  & Size   \\
  dog     & meat  & medium \\
  horse   & hay   & large  \\
  frog    & flies & small  \\
  microbe & ???
\end{tabular}
\end{document}
```

Horizontal lines belong to a `tabular`'s body. In LaTeX there are two different
macros to add them, the first is `\hline` adding a line across the full width of
a `tabular`, the second is `\cline` which can be used to draw lines covering
only a specific range of columns.

`\cline` takes a mandatory argument that specifies the columns affected. It has
to be a range with a hyphen (`-`) as a separator between the first and the last
column number. You can specify multiple `\cline`s in the same row. Both a
`\hline` and a `\cline` have to be the first content of a new row (so directly
following `\\` or another `\hline` or `\cline`).


```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  \hline
  \hline
  Animal & Food  & Size   \\
  \hline
  dog    & meat  & medium \\
  \cline{1-2}
  horse  & hay   & large  \\
  \cline{1-1}\cline{3-3}
  frog   & flies & small  \\
  \hline
  \hline
\end{tabular}
\end{document}
```


## Shortcuts and other preamble content

The list of possible types in the preamble above only showed the column
alignments available, but LaTeX has more things to offer in the preamble. What
is still missing is a way to change the horizontal space between two columns to
something arbitrary. This can be done with

type        | description
---         | :--
`@{decl}` | replace the space between two columns with `decl`
`!{decl}` | add `decl` in the centre of the existing space

In case you're wondering now, by default each column has a horizontal space of
the length `\tabcolsep` padded on both sides, resulting in a total of
`2\tabcolsep` between columns &ndash; one from each column &ndash; and a single
`\tabcolsep` on both outer ends. If we want to put a colon between the first
two columns and change the space between the latter two to `1cm` we could do so
by using

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{l !{:} l @{\hspace{1cm}} l}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(We'll see `\hspace` [again shortly](lesson-11): you might guess that it adds a
horizontal space.)

In addition to all the aforementioned preamble content, we can use a few other
things as well

<!-- don't line wrap this table, markdown seems to not support this -->

type | description
---  | :--
`*{num}{string}` | repeats `string` for `num` times in the preamble. With this you can define multiple identical columns.
`>{decl}` | this will put `decl` before the contents of every cell in the following column (this is useful, e.g., to set a different font for this column)
`<{decl}` | this will put `decl` after the contents of each cell in the previous column

The following example uses an italic font for the first column. Remember our
example with putting a colon in between the first two columns? How about we also
append that colon to the first column, so that things don't look as clunky.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape` makes all the following text italic, but it's effect is 'contained'
by the table cell. We will look at manual font formatting [in a few lessons
time](lesson-11).

## Merging cells

In LaTeX you can merge cells horizontally pretty easily. This is done by using
`\multicolumn{num}{align}{content}`. The first argument tells LaTeX how
many columns should be merged, the second argument is the cell type, which can
be anything legal in the preamble but _only a single column type_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal  & Food  & Size   \\
  dog     & meat  & medium \\
  horse   & hay   & large  \\
  frog    & flies & small  \\
  microbe & \multicolumn{2}{c}{???} \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Note that you have to specify vertical rules you want to apply to the right of
the `\multicolumn` in the `align` argument, e.g., `\multicolumn{2}{c|}{stuff}`
&ndash; but remember, don't use vertical rules.


## Formal tables with the `booktabs` package

In this section we will briefly introduce the `booktabs` package, which aids
the author in the creation of beautifully typeset tables. "Beautiful" means
in this context that the table is well-readable.

Let us start with a simple table:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{@{} lll @{}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Using the `\toprule`, `\midrule` and `\bottomrule` commands from the `booktabs` package we can add some
horizontal lines.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll @{}} \toprule
  Animal & Food  & Size   \\ \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

By default `\toprule` and `\bottomrule` are slightly thicker than the
`\midrule`. The thickness of the lines can be adjusted via the optional
parameter of these commands:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll @{}} \toprule[2pt]
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Even more, one can set a left and right indent for the `\midrule`, so
that this line is a little bit shorter than the `\toprule` and
`\bottomrule` of the table.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Food  & Size   \\ \cmidrule[1pt](rl){1-3}
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

The package also provides commands to increase or decrease the height
of a row. In the following example we increase the height of the
last row by 0.5 em, which is half of the width of the capital 'M'
in the currently used font.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll @{}} \toprule[2pt]
  Animal & Food  & Size   \\ \cmidrule[1pt](rl){1-3}
  dog    & meat  & medium \\
  horse  & hay   & large  \\ \addlinespace[0.5em]
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->
