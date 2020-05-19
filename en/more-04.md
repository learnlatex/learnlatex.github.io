---
title: "More on: Logical structure"
---

## Document titles

LaTeX offers some logical markup for the title of documents: three commands
to set up 'meta-data' and one to use it.

```latex
\documentclass{article}
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
custom design, but this is really out of the scope of this introduction.

## Exercise

Try setting up different `\author`, `\title` and `\date` information to test
out `\maketitle`. Which of them do you _have_ to give? Do they have to have  an
author, a title and a date in them?
