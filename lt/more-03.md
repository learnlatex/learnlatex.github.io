---
layout: "lesson"
lang: "en"
title: "More on: Basic LaTeX document structure"
description: "This lesson gives more detail on how to run LaTeX, and the special characters it uses and how to insert them in the output PDF."
toc-anchor-text: "More on: Basic LaTeX document structure"
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

| Symbol | Short Command <br><small>(math and text)</small> | Long Command <br><small>(for text only)</small> |
| --- | --- | --- |
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
