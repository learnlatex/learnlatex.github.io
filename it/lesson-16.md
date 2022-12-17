---
layout: "lesson"
lang: "it"
title: "Accedere alla documentazione e chiedere aiuto"
description: "Questa lezione mostra le principali fonti di documentazione per software e pacchetti relativi a LaTeX e come cercare aiuto quando sei nei guai."
toc-anchor-text: "Aiuto e documentazione"
toc-description: "Accessing help and documentation."
---

# Documentazione e assistenza

<span
  class="summary">Questa lezione mostra le principali fonti di documentazione per software e pacchetti relativi a LaTeX e come cercare aiuto quando sei nei guai.</span>

Esistono diversi modi per accedere alla documentazione di un pacchetto o di una classe.

## `texdoc`

Se nel tuo computer hai installato una distribuzione di TeX 
(_per esempio_, TeX Live o MiKTeX) completa della documentazione,
puoi accedere alla documentazione con `texdoc`,
uno strumento da riga di comando. 
Scrivendo nel terminale

`texdoc` < _pacchetto_ >

si aprirà la documentazione del pacchetto `<pacchetto>`. 
L'utilità cercherà la documentazione disponibile e aprirà ciò che 
ritiene sia la corrispondenza più vicina al termine di ricerca. 
Puoi elencare e scegliere tra tutti i risultati validi che trova scrivendo:

`texdoc -l` < _pacchetto_ >

## texdoc.org

È un [sito](https://texdoc.org/) che funziona in modo simile a `texdoc` 
appena visto. Puoi cercare la documentazione che hanno a disposizione proprio come faresti con `texdoc -l` e quindi scegliere tra i risultati

You can search
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

### How to provide a minimal working example (MWE)

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

<p 
  class="hint">If you need more text to show page breaking and other effects, then packages such as <code>lipsum</code> may be used to generate nonsense paragaraphs of text while keeping your test file small.</p>


### Log file

One thing you will want available is your log file; this is created by LaTeX
every time you run it, and has the same name as your input but ending `.log`.

<p 
  class="hint">Depending on your desktop interface, you might need to 'show extensions' to work out which file it is.</p>

In the log file, you can always see the full error messages. LaTeX's error messages try to be helpful, but they are not the same as messages in word processors.

<p 
  class="hint">Some editors also make it hard to see the 'full' text of an error, which can hide key details.</p>

If you have a problem, expert LaTeX users will often ask for a copy of your log file.

### Going further

Finally we offer a [gallery of small examples](./extra-01) showing a range of different subject areas not covered in this introduction, and different LaTeX packages in those areas.
