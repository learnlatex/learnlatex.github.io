---
lang: "en"
title: "Accessing documentation and getting help"
---


There are several ways to access the documentation of a package or class.

## `texdoc`

If you've installed a TeX distribution (_e.g._, TeXLive or MikTeX) and included
the documentation when you installed it you can access the locally saved
documentation using the `texdoc` command line tool. Using:


`texdoc` < _pkg_ >


will open the documentation of package `<pkg>`. The utility will search the
available documentation and open what it thinks is the closest match to your
search term. You can list and choose from among all the viable results it finds
using:


`texdoc -l` < _pkg_ >


## texdoc.net

This is a [website](https://texdoc.net/) which works similarly to the `texdoc` utility. You can search
for documentation they have available just like you would do with `texdoc -l`
and then choose from among the results.


## CTAN

[CTAN](https://www.ctan.org) is the Comprehensive TeX Archive Network. Most LaTeX packages are published
there. You can search the site for a package to access its
documentation. Usually the packages are saved in `ctan.org/pkg/<pkg-name>`
and you can access the README and documentation of the packages stored on CTAN
there.

## Books on LaTeX

There are several books available that can help you learn more about LaTeX.
As a beginner, you will gain a lot from a structured beginners guide, as
those can give a lot more detail than we've covered here. You might also
want access to a reference with more detail and recommendations.

The LaTeX team have [a list of books](https://www.latex-project.org/help/books/)
largely written by members. The most notable are [Lamport's official
guide](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
and the comprehensive
[LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Other books aimed at learning LaTeX include

- [_Guide to
  LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) by Helmut
  Kopka and Patrick Daly: available as an e-book
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) by
  Nicola Talbot: available as a free e-book or low-cost printed edition
- [_Using LaTeX to write a PhD
  thesis_](https://www.dickimaw-books.com/latex/thesis/) by
  Nicola Talbot: available as a free e-book or low-cost printed edition
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)
  by Stefan Kottwitz: available as an e-book and in print
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) by
  Marc van Dongen: available as an e-book and in print

## Getting help

There are various online forums for asking LaTeX questions; perhaps the most
popular today is [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Whenever you ask a question, it's best to first get your example clear: what is
normally known as a 'minimal working example' (MWE). This doesn't mean the code
works (as you wouldn't be asking otherwise!), but rather it means you've done
your best to make it clear, self-contained and minimal. The latter means
having only enough content to show the issue.

How do you construct a MWE? Normally easiest is to start from

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

and add lines one at a time until you show the issue. You can try to
'cut down' your real file, but that can be a long process.

If you need more text to show page breaking and other effects, then
packages such as `lipsum` may be used to generate nonsense paragaraphs
of text while keeping your test file small.


One thing you will want available is your log file; this is created by LaTeX
every time you run it, and has the same name as your input but ending `.log`.
Depending on your desktop interface, you might need to 'show extensions' to
work out which file it is.
