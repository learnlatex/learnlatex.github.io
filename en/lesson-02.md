---
title: Working with LaTeX
---

Unlike many computer programs, LaTeX is not a single application containing
'everything' in one. Instead, there are separate programs which work together.
We can divide those up into two things you actually entered

- A _TeX system_
- A LaTeX-specific editor

## TeX systems

The core of working with LaTeX is having a TeX system available. This is a set
of 'behind the scenes' programs and files that actually make LaTeX work, but
most of the time you don't directly 'run' this.

There are two major TeX systems available today,
[MiKTeX](https://www.miktex.org) and [TeX Live](https://tug.org/texlive). Both
are available for Windows, MacOS and Linux, but MiKTeX has a strong background
on Windows. There are [advantages to each
system](https://tex.stackexchange.com/questions/20036), and you might want to
look at [some more advice from the LaTeX
Project](https://www.latex-project.org/get/).

## Editors

LaTeX files are simple plain text, so can be edited with any text editor.
However, it's most convenient to have a editor that is designed to work with
LaTeX, as they provide features like one-click compilation of your files,
build-in PDF viewers and syntax highlighting. A really useful feature in all
modern LaTeX editors is  SyncTeX: the ability to click on your source and go
straight to your PDF, or back the other way.

There are many more LaTeX editors that we can hope to list here: there is a
[comprehensive list on
StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
A basic editor, [TeXworks](https://tug.org/texworks), is included in TeX Live
and MiKTeX on Windows and Linux.

Whichever editor you pick, we recommend you install it _after_ your TeX system,
so that the editor can 'find' the TeX system and set itself up correctly.

## Working on-line

There are several powerful on-line sites nowadays that mean you can avoid
the need to install a TeX system and LaTeX editor at all. These websites
work by letting you edit your files in the webpage, then they run LaTeX
behind the scenes and let you see the PDF.

Some of these sites combine LaTeX with features similar to a word processor,
whereas others are more focussed on letting you see the LaTeX code and
so are closer to having a local installation.

There are systems that let you run LaTeX without needing to be logged in, and we
are using one of those, [latexonline.cc](https://latexonline.cc), to let you
edit and test the examples we give. For more complete work, the best on-line
systems require that you register before you use them. That lets you save your
work but also helps the sites not get overloaded. We have set up links so you
can edit our examples using [Overleaf](https://www.overleaf.com), one of the
major websites for LaTeX on-line. There are of course others:
[Papeeria](https://papeeria.com/) is an example.
