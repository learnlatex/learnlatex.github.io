---
lang: "en"
title: "Tables"
---


## Basic tables

Tables in LaTeX are set using the `tabular` environment. This lesson will assume
you load the `array` package, which adds more functionality to LaTeX tables, and
which is not built into the LaTeX kernel only for historic reasons. So put the
following in your preamble and we're good to go:


```latex
\usepackage{array}
```
{: .noedit :}

In order to typeset a `tabular` we have to tell LaTeX how many columns will be
needed and how they should be aligned. This is done in a mandatory argument
&ndash; often referred to as the table preamble &ndash; to the `tabular`
environment, in which you specify the columns by using single-letter names,
called preamble-tokens. The available column types are:

<!-- don't line wrap this table, markdown seems to not support this -->

| type       | description |
| ---        |:-- |
| `l`        | left aligned column |
| `c`        | centered column |
| `r`        | right aligned column |
| `p{width}` | a column with fixed width `width`; the text will be automatically line wrapped and fully justified |
| `m{width}` | like `p`, but vertically centered compared to the rest of the row |
| `b{width}` | like `p`, but bottom aligned |
| `w{align}{width}` | prints the contents with a fixed `width`, silently overprinting if things get larger. You can choose the horizontal alignment using `l`, `c`, or `r`. |
| `W{align}{width}` | like `w`, but this will issue an overfull box warning if things get too wide. |

In addition, a few other preamble-tokens are available which don't define a
column but might be useful as well:

<!-- don't line wrap this table, markdown seems to not support this -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | repeats `string` for `num` times in the preamble. With this you can define multiple identical columns. |
| `>{decl}` | this will put `decl` before the contents of every cell in the following column (this is useful, e.g., to set a different font for this column) |
| `<{decl}` | this will put `decl` after the contents of each cell in the previous column |
| <span>`|`</span>  | add a vertical rule |
| `@{decl}` | replace the space between two columns with `decl` |
| `!{decl}` | add `decl` in the center of the existing space |

These two tables list all the available column types from LaTeX and the `array`
package. A few additional column types, from different packages, are presented
in the [further details page](more-08) for this lesson.

The columns `l`, `c`, and `r` will have the natural width of the widest cell.
Each column has to be declared, so if you want three centered columns, you'd use
`ccc` in the table preamble. Spaces are ignored, so `c c c` is the same.

In a table body columns are separated using an ampersand `&` and a new row is
started using `\\`.

We have everything we need for our first table. In the following code the
`&` and `\\` are aligned. This isn't necessary in LaTeX, but helps reading the
source.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
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
<!-- {% endraw %} -->

If a table column contains a lot of text you will have issues to get that
right with only `l`, `c`, and `r`. See what happens in the following example:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

The issue is that the `l` type column typesets its contents in a single row at
its natural width, even if there is a page
border in the way. To overcome this you can use the `p` column. This
typesets its contents as paragraphs with the width you specify as an argument
and vertically aligns them at the top &ndash; which you'll want most of the
time. Compare the above outcome to the following:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

If your table has many columns of the same type it is cumbersome to put that
many column definitions in the preamble.  You can make things easier
by using `*{num}{string}`, which repeats the `string`  `num` times.
So `*{6}{c}` is equivalent to `cccccc`. To show you that it works here is the first
table of this lesson with the newly learned syntax:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Adding rules (lines)

A word of advice prior to introducing rules; lines should be used really
sparsely in tables, and normally vertical ones look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines; instead you
should get familiar with the facilities of the `booktabs` package, which is why
it is covered here first. For the sake of completeness the standard
lines are shown in the [more-info](more-08) page.

`booktabs` provides four different types of lines. Each of those commands has to
be used as the first thing in a row or following another rule.
Three of the rule commands are: `\toprule`, `\midrule`, and
`\bottomrule`. From their names the intended place of use should be clear:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

The fourth rule command provided by `booktabs` is `\cmidrule`. It can be used to
draw a rule that doesn't span the entire width of the table but only a specified
column range. A column range is entered as a number span: `{`_number_`-`_number_`}`.
Even if you only want to draw the rule for a single
column you need to specify that as a range (with both numbers matching).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

There is another useful feature of `\cmidrule`. You can shorten it on either end
with an optional argument enclosed in parentheses:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

You may have guessed that `r` and `l` mean the rule is shortened on its **r**ight
and **l**eft end, respectively.

Sometimes a rule would be too much of a separation for two rows but to get
across the meaning more clearly you want to separate them by some means. In this
case you can use `\addlinespace` to insert a small skip.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  \addlinespace
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Merging cells

In LaTeX you can merge cells horizontally by using the `\multicolumn` command. It
has to be used as the first thing in a cell. `\multicolumn` takes three
arguments:

1. The number of cells which should be merged
2. The alignment of the merged cell
3. The contents of the merged cell

The alignment can contain anything legal in a `tabular`'s preamble, but _only a
single column type_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

You can also use `\multicolumn` on a single cell to prevent the
application of whatever you defined in the table preamble for the
current column.  The following uses this method to center the
table's head row:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Merging cells vertically isn't supported by LaTeX.
Usually it suffices to leave cells empty to give the reader the
correct idea of what was meant without explicitly making cells span rows.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Exercises

Use the simple table example to start experimenting with tables. Try out
different alignments using the `l`, `c` and `r` column types. What happens if
you have too few items in a table row? How about too many? Experiment with the
`\multicolumn` command to span across columns.
