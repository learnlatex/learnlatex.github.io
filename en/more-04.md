---
lang: "en"
title: "More on: Logical structure"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "More on: Logical structure"
---

## Document titles

LaTeX offers some logical markup for the title of documents: three commands
to set up 'meta-data' and one to use it.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{A.~N.~Other \and D.~Nobacon}
\title{Some things I did}
\date{1st April 2020}
\maketitle

Some normal text.
\end{document}
```

As you can see, the commands `\author`, `\title` and `\date` save information,
and `\maketitle` uses it. You can also separate multiple authors with `\and`.
The commands `\author`, `\title` and `\date` need to come before `\maketitle`.
Here, we've given them in the document body: they can also be used in the
preamble, but if you use `babel` shortcuts they won't be active there.

The design provided by `\maketitle` depends on the document class (see [lesson
5](lesson-05)). There is a `titlepage` environment for when you want to do
custom design, but this is out of the scope of this introduction.  If you want
to do your own document designs you can either use a customisable class, such
as `memoir`, or start with one of LaTeX's base classes, like `book` and use it
as a starting point.

## Descriptive lists
In addition to the "ordered" and "unordered" types of lists, LaTeX provides
another one, less common: the "descriptive lists".

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Dog:] member of the genus Canis, which forms part of the wolf-like canids,
  and is the most widely abundant terrestrial carnivore.
\item[Cat:] domestic species of small carnivorous mammal. It is the only
  domesticated species in the family Felidae and is often referred to as the
  domestic cat to distinguish it from the wild members of the family.
\end{description}

\end{document}
```

## Exercises

Try setting up different `\author`, `\title` and `\date` information to test
out `\maketitle`. Which of them do you _have_ to give? Do the commands have to
have an author, a title and a date in them?

Make some descriptive lists, and nest some of them inside another ones (ordered,
unordered or descriptive).
