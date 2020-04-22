---
title: Using document classes to influence design
---

## What a document class does

You might have noticed that all of the LaTeX documents we have created
so far have started with a `\documentclass` line, and that
`\documentclass{article}` has been the far most common choice. (We needed
`\documentclass{report}` in [the previous lesson](lesson-04) to try out the
`\chapter` command.) This line is required in all LaTeX documents, and is
(almost) always the first command you should have.

The document class sets up the general layout of the document, for example

- design: margins, fonts, spacing, etc.
- whether chapters are available
- if the title should be on a separate page

Document classes can also add new commands more generally: that's particularly
true for specialist cases like creating presentation slides.

The document class line can also set _global options_: things that apply to
the document as a whole. These are given in square brackets:
`\documentclass[<options>]{<name>}`. This syntax, with optional information
given first in square brackets, is used in many LaTeX commands.

## The base classes

LaTeX is supplied with a set of standard classes, all of which look similar
but with some variations:

- `article`: short documents without chapters
- `report`: longer documents with chapters, single-sided printing
- `book`: longer documents with chapters, double-sided printing, with
  front- and back-matter (for example an index)
- `letter`: correspondence with no sections
- `slides`: for presentations (but see below)

The `article`, `report` and `book` classes have very similar commands available,
as we've already seen. When writing a `letter`, the commands available are
a bit different

```latex
\documentclass{letter}
\begin{document}

\begin{letter}{Some Address\\Some Street\\Some City}

\opening{Dear Sir or Madam,}

The text goes Here

\closing{Yours,}

\end{letter}

\end{document}
```

See how ``\\`` is used to separate lines of the address: we'll look at line
breaking [a bit later](lesson-09). Also see how the `letter` class creates  a
new environment for each letter and has specialised commands.

The standard `article`, `report` and `book` classes take the options `9pt`,
`10pt` and `11pt` to change font size, and `twocolumn` to make a two-column
document.

## Function-rich classes

The core classes are very stable, but that means they are also quite
conservative in both design and the range of commands available. Over time, a
number of more powerful classes have been written, that let you alter the design
without having to do things manually (which we'll mention [a bit
later](lesson-09)).

The two largest and most popular 'extended' classes are the KOMA-script bundle
and the memoir class. KOMA-Scipt offers a set of classes which 'parallel' the
standard ones: `scrartcl`, `scrreprt` and `scrbook`, while there is a single
`memoir` class that is most like an extension of `book`.

These extended classes have lots of customisation hooks, which we'll explore a
bit in an exercise.

## Presentations classes

One area that needs a lot of specialism is creating presentations. The `slides`
class was written for making 'classical' printed slides, and it does not
have any special support for on-screen presentations. There are two classes
that have been developed to do just that, and that are widely used:
`beamer` and `powerdot`. As `beamer` is probably the more common one, we will
give you an example of how it works:

```latex
\documentclass{beamer}
\begin{document}

\begin{frame}{A first frame}
  Some text
\end{frame}

\begin{frame}{A second frame}
  Different text
  \begin{itemize}[<+->]
    \item First item
    \item Second item
  \end{itemize}
\end{frame}

\end{document}
```

This shows two important ideas:. First, `beamer` divides a document into frames, each
of which can make more than one slide (page). Second, `beamer` adds to the
normal LaTeX syntax to allow parts of the source to appear 'a bit at a time'.
We've given some [more information](more-05) on this syntax in the extra
lesson support.

## Exercises

Explore how changing the document class between the standard ones, the KOMA
bundle and `memoir` affects the appearance of

```latex
\documentclass{article} % Change the class here

\begin{document}

\section{Introduction}

This is a sample document with some dummy
text\footnote{and a footnote}. This paragraph is quite
long as we might want to see the effect of making the
document have two columns.

\end{document}
```

Add the option `twocolumn` and see how the layout changes.

Change the `\section` above for `\chapter` and find out what effect the
following class options have when using the `scrreprt` class.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
