---
lang: "en"
title: "Structuring longer documents"
---

<script>
preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

## Structuring your sources

When you are writing a longer document, you’ll likely want to split up
the source into multiple files. For example, it's very common to have
one 'main'/'root' file, then one source file per chapter (for a book or thesis),
or per significant section (for a long article).

LaTeX allows us to split up sources in a controlled way. There are two important
commands here, `\input` and `\include`. We can use `\input` to make a file work
'as though it was typed in here', so it can be used for (essentially) any
material. The `\include` command works for chapters only: it starts a new page
and makes some internal adjustments. But it has a big advantage: it allows us to
be selective in which chapters to include, so you can work on part of your
document rather than the whole thing.

A longer document might therefore look something like the following:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{A Sample Book}
\author{John Doe \and Joe Bloggs}

\IfFileExists{append.aux}
{
\includeonly{
%  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Do a full document initially to generate
% all the aux files
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

We'll look at the various aspects of this file below. (The various support files
are at the end of this page.)

## Using `\input`

The `\input` command is good for parts of a long file that are _not_ separate
chapters. In the example, we have used it to separate out the front- and
backcovers, keeping the main file short and clear, and also meaning we could
re-use the covers in another document. We've also used it for the 'non-chapter'
sections at the start of our 'book': things like the preface. Again, this is
to help keep the main file clear.

## Using `\include` and `\includeonly`

The `\include` command is good for chapters, so we have used it for each full
chapter; it always starts a new page. We have selected which chapters will
actually be typeset using `\includeonly`, which as you can see takes a
comma-separated list of file names. When you use `\includeonly`, you can shorten
how long your typesetting takes and produce a 'selective' PDF for proofreading.
In addition, the key advantage of `\includeonly` is that LaTeX will use all of
the cross reference information from the `.aux` files of other included files.

## Creating a table of contents

The `\tableofcontents` command uses the information from sectioning
commands to populate the table of contents.  It has its own auxiliary
file, with extension `.toc`, so you may need to run LaTeX twice to
resolve the information. The table is generated automatically from the
section titles. There are similar commands for `\listoffigures` and
`\listoftables`, which work from the float environment captions, and
use files with extension `.lof` and `.lot` respectively.

## Splitting the document into parts

The `\frontmatter`, `\mainmatter`, and `\backmatter` commands
affect the formatting.
For instance, `\frontmatter` changes the page numbering to
Roman numbers.
The `\appendix` command changes the numbering to `A`, `B`, etc.,
so for instance in the first chapter after `\appendix`,
the header says `Appendix A`.

## Exercises

Experiment with the basic structure of the demonstration document,
try adding and removing entries for `\includeonly` and see the effect.

Add some floats and produce a list of figures and tables.
If using a locally installed LaTeX, do you see
how many LaTeX runs are required? (The online systems re-run LaTeX
"behind the scenes" so the additional required runs are not so obvious.)

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Preface}
The preface text. See \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introduction}
The first chapter text.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Something}
The second chapter text.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
The first appendix text.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
For \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
The back cover
\end{center}
```
<!-- {% endraw %} -->

----
