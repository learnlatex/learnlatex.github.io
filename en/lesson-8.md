---
title: Tables
---

# Basic Tables

Tables in LaTeX are set using the `tabular` environment. In order to typeset a
`tabular` we have to tell LaTeX how many columns will be needed and how they
should be aligned. This is done in a mandatory argument &mdash; often referred
to as table preamble &mdash; to the `tabular` environment, in which you specify
the columns by using single letter names. The available column types are:

`l`
: left aligned column

`c`
: centred column

`r`
: right aligned column

`p{<width>}`
: a column with fixed width `<width>`, the text will be automatically line
wrapped and fully justified

The columns `l`, `c`, and `r` will have the natural width of the widest cell.
Each column has to be declared, so if you want three centred columns, you'd use
`ccc` in the table preamble. Spaces are ignored, so `c c c` is the same.

In a table body columns are separated using an ampersand `&` and a new row is
started using `\\`.

We got everything we need for our first little table. In the following code the
`&` and `\\` are aligned, this isn't necessary in LaTeX.

```tex
\begin{tabular}{lll}
Animal & Food  & Size   \\
dog    & meat  & medium \\
horse  & hay   & large  \\
frog   & flies & small  \\
\end{tabular}
```


## Adding Lines

A word of advice prior to introducing lines: Lines should be used really
sparsely in tables, especially vertical ones often look unprofessionally.

Nevertheless LaTeX got you covered if you need vertical lines. Those are part of
the column specification and hence should go into the preamble. To add a line
between two columns just add `|` between their specification. Please note that
vertical lines are only inserted if the cell to their left exists (except for a
vertical line left of the first column). Note how in the following example the
right most line will not appear in the last row.

```tex
\begin{tabular}{|l|ll|}
Animal  & Food  & Size   \\
dog     & meat  & medium \\
horse   & hay   & large  \\
frog    & flies & small  \\
microbe & ???
\end{tabular}
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


## Short Cuts and Changing Column Separations

The list of possible types in the preamble above only showed the column
alignments available, but LaTeX has two more things to offer in the preamble.
What is still missing is a way to change the horizontal space between two
columns to something arbitrary. This can be done with `@{<decl>}` which puts
`<decl>` between two columns instead of the usual horizontal space.

In case you're wondering now, by default each column has a horizontal space of
the length `\tabcolsep` padded on both sides, resulting in a total of
`2\tabcolsep` between columns &mdash; one from each column &mdash; and a single
`\tabcolsep` on both outer ends. If we want to change the space to say `1cm` we
could do so by using

```tex
\begin{tabular}{l@{\hspace{1cm}}ll}
Animal & Food  & Size   \\
dog    & meat  & medium \\
horse  & hay   & large  \\
frog   & flies & small  \\
\end{tabular}
```

The other thing still missing is `*{<num>}{<cols>}`. This is very handy if you
need multiple columns of the same type and don't want to specify them all. When
you're using `*{<num>}{<cols>}` in the preamble of a `tabular`, this behaves the
same as if you'd repeated `<cols>` `<num>` times. The contents of `<cols>` can
be a single column specifier like in the following example, or multiple things
like `*{3}{c|l@{\hspace{3cm}}}` which would then be the same as
`c|l@{\hspace{3cm}}c|l@{\hspace{3cm}}c|l@{\hspace{3cm}}`.

```tex
\begin{tabular}{*{3}{l}}
Animal & Food  & Size   \\
dog    & meat  & medium \\
horse  & hay   & large  \\
frog   & flies & small  \\
\end{tabular}
```


## Merging Cells

In LaTeX you can merge cells horizontally pretty easily. This is done by using
`\multicolumn{<num>}{<align>}{<content>}`. The first argument tells LaTeX how
many columns should be merged, the second argument is the cell type, which can
be anything legal in the preamble but _only a single column type_.

```tex
\begin{tabular}{*{3}{l}}
Animal  & Food  & Size   \\
dog     & meat  & medium \\
horse   & hay   & large  \\
frog    & flies & small  \\
microbe & \multicolumn{2}{c}{???} \\
\end{tabular}
```

Note that you have to specify vertical rules you want to apply to the right of
the `\multicolumn` in the `<align>` argument, _e.g._,
`\multicolumn{2}{c|}{stuff}`.
