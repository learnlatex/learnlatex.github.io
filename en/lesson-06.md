---
lang: "en"
title: "Extending LaTeX using packages and definitions"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Extending LaTeX"
toc-description: "Using packages and definitions."
---

After having declared a class, in the preamble you can modify functionality in
LaTeX by adding one or more *packages*. These can

- Change how some parts of LaTeX work
- Add new commands to LaTeX
- Change document design

## Changing how LaTeX works

The LaTeX 'kernel' (the core of LaTeX) is rather limited in user customisation,
and so some add-on packages deal with very common ideas. The first is to
change how LaTeX deals with language-specific typesetting (hyphenation,
punctuation, quotations, localisation, etc.). Different languages have different
rules, so it's important to tell LaTeX which one to use. This is handled by the
`babel` package.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % To force hyphenation here

\begin{document}

This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.
This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.

\end{document}
```

Try un-commenting the (clearly misleading) line to load `babel` and see the
effect. (The standard hyphenation rules are US English.)

The `babel` package does a lot more than hyphenation, depending on the language
involved; we've given [some more details](more-06) if you need them.

## Changing design

It's useful to be able to adjust some aspects of design independent of the
document class. The most obvious one are the page margins. We've just used
the `geometry` package in the example above, but let's now have an example
specifically about margins.

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Hey world!

This is a first document.


% ================
\chapter{Chapter One}
Introduction to the first chapter.


\section{Title of the first section}
Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.


% ================
\section{Second section}

Text of the second section.

\end{document}
```

You should see the effect here compared to not loading `geometry`.

## Adding new functionality

One of LaTeX's strengths is that you can choose from thousands of packages,
including ones for writing mathematical text, for hyperlinking, for
sophisticated capabilities with color, etc. We will see some more common
packages in later lessons.


## Defining commands

Sometimes you need a command specific to your document, either some
functionality not found in the available packages or simply a command
to enter a common expression that is used multiple times.

The following example shows a command to produce keywords with a
specific style applied.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

In the definition `[1]` denotes the number of arguments (here one)
and `#1` denotes the first argument that is supplied
(`apples` or `oranges` in this example). You may have up to nine
arguments, but it is usually best to have just one argument, or
sometimes none at all.

Defining commands does not just reduce the typing required to produce
a document. It helps to separate out the styling information. If it is
decided to use a different style for keywords, rather than having to
edit the entire document, you simply need to use a different
definition. Here we load the `xcolor` package to provide colors, and
use blue in place of bold in the formatting.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

Beware that defining too many commands or defining commands with
multiple arguments may make the document source harder  to understand
as it is using an unfamiliar syntax. The ability to define
document-specific commands should be used with care.

## Exercises

Try out writing some text in other European languages and see how `babel`
affects hyphenation: you can probably find some text on the internet, and guess
the right options.

Try altering the margins in the `geometry` example. You can set the individual
`top`, `bottom`, `left` and `right` margins separately using a comma-separated
list.

Try loading the `lipsum` package and then add the command `\lipsum` to your
document. Can you guess why this package is useful for making examples?

Try altering the definition of `\kw` to achieve a different style.
