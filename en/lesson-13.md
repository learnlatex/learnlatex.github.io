---
title: "Structuring longer documents"
---

<script>
preincludes = {
 "pre0": {
    "pre1": "pref.tex",
    "pre2": "chap1.tex",
    "pre3": "chap2.tex",
    "pre4": "append.tex",
    "pre5": "frontcover.tex",
    "pre6": "dedication.tex",
    "pre7": "copyright.tex",
    "pre8": "backcover.tex",
   }
}
</script>

This is the skeleton of a book.
It includes front and back covers, preface, table of contents,
chapters, and appendix, a bibliography, and an index.

<!-- pre0 {% raw %} -->
```latex
\documentclass[titlepage]{book}
\usepackage{makeidx}\makeindex % index
\usepackage{biblatex}          % bibliography
\addbibresource{document.bib} 

\title{Life at Sea}
\author{John Aubrey and Stephen Maturin}

\includeonly{% comment out lines to reduce output
  pref,
  chap1,
  chap2,
  append
  }

\begin{document}
\frontmatter
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\include{pref}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\addcontentsline{toc}{chapter}{Bibliography}
\printbibliography
\addcontentsline{toc}{chapter}{Index}
\printindex
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

LaTeX lets you split a large document into several files.
This simplifies editing, speeds processing, and lets multiple authors work
simultaneously.
The above file `document.tex` is referred to as the *root*.
It has four included files, `pref.tex`, `chap1.tex`, `chap2.tex`,
and `append.tex`.

Notice the `\includeonly{...}`.
If you compile the root document, and then use percent signs to
comment out all of the lines inside `\includeonly`
except for the one with `chap1` and compile again,
then your output will show only the material from the first chapter.
So it will be faster to compile and shorter to print.
In addition, the key advantage of `\includeonly` is that LaTeX will
use all of the cross reference information from other
included files.

The `\include{...}` command always starts a new page.
To bring in material without that page use `\input{...}`
(although you lose the referencing advantage of `\includeonly`).

Notice also that
in the preamble, the `\title{...}` and `\author{...}` commands remember the
information, and after the `\begin{document}` the `\maketitle`
puts that information into the output.
(Because of the first line's `[titlepage]` that will appear on a
separate page.)

The `\tableofcontents` command uses the information from
sectioning commands to populate the table of contents.
It has its own auxiliary file, so you may need to run
LaTeX twice to resolve the information.
Add information to that auxiliary file using the
`\addcontentsline{...}`.

The `\frontmatter`, `\mainmatter`, and `\backmatter` commands
affect the formatting.
For instance, `\frontmatter` changes the page numbering to
Roman numbers.
The `appendix` command changes the numbering to `A`, `B`, etc.,
so for instance in the first chapter after it the header says `Appendix A`. 



----

#### pref.tex
<!-- pre1 {% raw %} -->
```latex
\chapter*{Preface}
The preface text.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Introduction}
The first chapter text.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Something}
The second chapter text.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre4 {% raw %} -->
```latex
\chapter*{Appendix}
The first appendix text.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre5 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
\large
For \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
The back cover
\end{center}
```
<!-- {% endraw %} -->

----

