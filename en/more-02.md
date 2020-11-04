---
lang: "en"
title: "More on: Working with LaTeX"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "More on: Working with LaTeX"
---

For most of our examples, we don't use a program called `latex` but instead
one called `pdflatex`. This is one of a family of related programs, all
of which are 'descendants' of `latex`. We have chosen `pdflatex` because
it is perhaps the most widely-used system and directly produces PDF files.

## Formats and engines

As described [earlier](more-01), LaTeX is built on a system called TeX. We
call LaTeX a 'format': a collection of macros (instructions and commands) that
TeX understands. When you run `pdflatex`, you are _actually_ starting a
program called 'pdfTeX' with a pre-loaded 'LaTeX format'. We normally call
pdfTeX an _engine_: a program that understands TeX instructions.

There are three engines in common use today:

- pdfTeX
- XeTeX
- LuaTeX

We will cover [XeTeX and LuaTeX later](lesson-14): the main thing we need to
know now is that they are capable of loading operating system fonts, whereas
pdfTeX can't do that.

If you are in Japan, or writing lots of Japanese, you might also come across
pTeX and upTeX. These are specialised engines for vertical typesetting. LuaTeX
can also do a lot of this, but at the moment upTeX, in particular, is still
the most popular system for Japanese.
