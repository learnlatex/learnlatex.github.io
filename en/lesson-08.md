---
title: Tables
---


# Basic Tables

Tables in LaTeX are set using the `tabular` environment. This lesson will assume
you load the `array` package, which adds more functionality to LaTeX tables, and
which is only not built into the LaTeX kernel for historic reasons. So put the
following in your preamble and we're good to go:

<!-- {% raw %} -->
```tex
\usepackage{array}
```
<!-- {% endraw %} -->

In order to typeset a `tabular` we have to tell LaTeX how many columns will be
needed and how they should be aligned. This is done in a mandatory argument
&ndash; often referred to as table preamble &ndash; to the `tabular`
environment, in which you specify the columns by using single letter names. The
available column types are:

<!-- don't line wrap this table, markdown seems to not support this -->
type       | description
---        |:--
`l`        | left aligned column
`c`        | centred column
`r`        | right aligned column
`p{width}` | a column with fixed width `width`, the text will be automatically line wrapped and fully justified
`m{width}` | like `p`, but vertically centred compared to the rest of the row
`b{width}` | like `p`, but bottom aligned
`w{align}{width}` | prints the contents with a fixed `width`, silently overprinting if things get larger. You can choose the horizontal alignment using `l`, `c`, or `r`.
`W{align}{width}` | like `w`, but this will issue an overfull box warning if things get too wide.

The columns `l`, `c`, and `r` will have the natural width of the widest cell.
Each column has to be declared, so if you want three centred columns, you'd use
`ccc` in the table preamble. Spaces are ignored, so `c c c` is the same.

In a table body columns are separated using an ampersand `&` and a new row is
started using `\\`.

We got everything we need for our first little table. In the following code the
`&` and `\\` are aligned, this isn't necessary in LaTeX.

<!-- {% raw %} -->
```tex
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
```
<!-- {% endraw %} -->


## Adding Lines

A word of advice prior to introducing lines: Lines should be used really
sparsely in tables, especially vertical ones often look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines, instead you
should skip this section and read about [`booktabs`](#booktabs).

Nevertheless LaTeX got you covered if you need lines. Vertical lines are part of
the column specification and hence should go into the preamble. To add a line
between two columns just add `|` between their specification. Please note that
vertical lines are only inserted if the cell to their left exists (except for a
vertical line left of the first column). Note how in the following example the
right most line will not appear in the last row.

<!-- {% raw %} -->
```tex
\begin{tabular}{|l|ll|}
  Animal  & Food  & Size   \\
  dog     & meat  & medium \\
  horse   & hay   & large  \\
  frog    & flies & small  \\
  microbe & ???
\end{tabular}
```
<!-- {% endraw %} -->

Horizontal lines belong to a `tabular`'s body. In LaTeX there are two different
macros to add them, the first is `\hline` adding a line across the full width of
a `tabular`, the second is `\cline` which can be used to draw lines covering
only a specific range of columns.

`\cline` takes a mandatory argument that specifies the columns affected. It has
to be a range with a hyphen (`-`) as a separator between the first and the last
column number. You can specify multiple `\cline`s in the same row. Both a
`\hline` and a `\cline` have to be the first content of a new row (so directly
following `\\` or another `\hline` or `\cline`).


<!-- {% raw %} -->
```tex
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
```
<!-- {% endraw %} -->


## Short Cuts and other Preamble Content

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
```tex
\begin{tabular}{l !{:} l @{\hspace{1cm}} l}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
```
<!-- {% endraw %} -->

In addition to all the aforementioned preamble content, we can use a few other
things as well

<!-- don't line wrap this table, markdown seems to not support this -->
type | description
---  | :--
`*{num}{string}` | repeats `string` for `num` times in the preamble. With this you can define multiple identical columns.
`>{decl}` | this will put `decl` before the contents of every cell in the following column (this is useful, *e.g.*, to set a different font for this column)
`<{decl}` | this will put `decl` after the contents of each cell in the previous column

The following example uses an italic font for the first column. Remember our
example with putting a colon in between the first two columns? How about we also
append that colon to the first column, so that things don't look as clunky.

<!-- {% raw %} -->
```tex
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
```
<!-- {% endraw %} -->

Note that each cell is a local group, so `\itshape` doesn't affect the other
columns and the above will be in principle the same as `{\itshape Animal:}` for
the first cell.


## Merging Cells

In LaTeX you can merge cells horizontally pretty easily. This is done by using
`\multicolumn{num}{align}{content}`. The first argument tells LaTeX how
many columns should be merged, the second argument is the cell type, which can
be anything legal in the preamble but _only a single column type_.

<!-- {% raw %} -->
```tex
\begin{tabular}{*{3}{l}}
  Animal  & Food  & Size   \\
  dog     & meat  & medium \\
  horse   & hay   & large  \\
  frog    & flies & small  \\
  microbe & \multicolumn{2}{c}{???} \\
\end{tabular}
```
<!-- {% endraw %} -->

Note that you have to specify vertical rules you want to apply to the right of
the `\multicolumn` in the `align` argument, _e.g._, `\multicolumn{2}{c|}{stuff}`
&ndash; but remember, don't use vertical rules.