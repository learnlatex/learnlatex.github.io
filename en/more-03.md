---
lang: "en"
title: "More on: Your first LaTeX document"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "More on: Your first LaTeX document"
---

## Running LaTeX

As [detailed earlier](lesson-02), LaTeX documents are simply plain text. To see
this, try opening your first document in a simple text editor, for example
on Windows using Notepad. You should see the same text as in a dedicated LaTeX
editor, but without any highlight of keywords.

You can also convert to PDF without your editor; this means using the Command
Prompt/Terminal, so don't worry if you are not familiar with this. If you
*are*, you can navigate to the directory containing your `.tex` source file and
run

`pdflatex first`

or

`pdflatex first.tex`

to typeset your PDF. Notice that the `.tex` extension is optional: LaTeX will
assume files end with `.tex` unless you specify otherwise.

## Special characters

If you need to type in a special character, most of the time you can simply
use a backslash in front of it, so for example `\{` is used to print a literal
`{`. There are a few cases where you need to use a longer command instead:

| Symbol | Short Command (math and text) | Long Command (for text only) |
| `{`    | `\{`          | `\textbraceleft`  |
| `}`    | `\}`          | `\textbraceright` |
| `$`    | `\$`          | `\textdollar`     |
| `%`    | `\%`          |                   |
| `&`    | `\&`          |                   |
| `#`    | `\#`          |                   |
| `_`    | `\_`          | `\textunderscore` |
| ``\``  |               | `\textbackslash`  |
| `^`    |               | `\textasciicircum`|
| `~`    |               | `\textasciitilde` |

For the last three symbols there are no short commands available,
because `\\` is used to indicate a linebreak and `\~` and `\^` are used
to produce tilde and circumflex accents when using only ASCII
characters as input.
