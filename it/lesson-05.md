---
layout: "lesson"
lang: "it"
title: "Impostare l'aspetto generale del documento"
description: "Questa lezione spiega che cos'è una classe di documento e in che modo può influire sull'aspetto di un documento, ed elenca le principali classi disponibili in una distribuzione di TeX."
toc-anchor-text: "Classi di documento"
toc-description: "Impostare l'aspetto generale del documento."
---

# Document classes

<span
  class="summary">Questa lezione spiega che cos'è una classe di documento e in che modo può influire sull'aspetto generale di un documento. Inoltre, elenca le principali classi disponibili in una distribuzione di TeX.</span>

Forse hai notato che tutti i documenti LaTeX che abbiamo creato fino a ora
incominciano con la riga `\documentclass`, e che `\documentclass{article}` 
è stata di gran lunga la scelta più comune. (Nella [lezione precente](lesson-04)
abbiamo avuto bisogno di `\documentclass{report}` per provare
il comando `\chapter`.) Questa riga è richiesta in tutti i documenti LaTeX, 
ed è (quasi) sempre il primo comando che dovresti dare.

## Che cosa fa una classe di documento

La classe di documento imposta la presentazione generale del documento, per esempio:

- l'aspetto: margini, font, spaziature, eccetera
- se ci sono o non ci sono capitoli
- se il titolo deve stare in una pagina a sé

Più in generale, le classi di documento possono aggiungere nuovi comandi
a quelli previsti da LaTeX standard: la cosa è particolarmente vera per 
le classi molto specialistiche, come quelle destinate alla creazione
di videopresentazioni o lettere.

Nella riga della classe di documento puoi impostare anche le _opzioni globali_: 
sono parametri che si applicano al documento nel suo complesso e si
scrivono tra parentesi quadre: `\documentclass[<opzioni>]{<classe>}`. 
Questa sintassi, con le informazioni facoltative
messe tra parentesi quadre, è adoperata in numerosi comandi di LaTeX.

## The base classes

LaTeX is supplied with a set of standard classes, all of which look similar
but with some variations:

- `article`  
  short documents without chapters
- `report`  
  longer documents with chapters, single-sided printing
- `book`  
  longer documents with chapters, double-sided printing, with front- and
  back-matter (for example an index)
- `letter`  
  correspondence with no sections
- `slides`  
  for presentations (but see below)

The `article`, `report` and `book` classes have very similar commands available,
as we've already seen. When writing a `letter`, the commands available are
a bit different

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Some Address\\Some Street\\Some City}

\opening{Dear Sir or Madam,}

The text goes Here

\closing{Yours,}

\end{letter}

\end{document}
```

See how ``\\`` is used to separate lines of the address; we'll look at line
breaking [a bit later](lesson-11). Also see how the `letter` class creates  a
new environment for each letter and has specialized commands.

The standard `article`, `report` and `book` classes take the options `10pt`,
`11pt` and `12pt` to change font size, and `twocolumn` to make a two-column
document.

## Function-rich classes

The core classes are very stable, but that means they are also quite
conservative in both design and the range of commands available. Over time, a
number of more powerful classes have been written, that let you alter the design
without having to do things manually (which we'll mention [a bit
later](lesson-11)).

The American Mathematical Society provide variants of the standard
classes (`amsart`, `amsbook`) with a more traditional design closer to
that used in mathematics journal publications.

The two largest and most popular 'extended' classes are the KOMA-Script bundle
and the memoir class. KOMA-Script offers a set of classes which 'parallel' the
standard ones: `scrartcl`, `scrreprt`, `scrbook`, and `scrlttr2`, while there is
a single `memoir` class that is most like an extension of `book`.

These extended classes have lots of customisation hooks, which we'll explore a
bit in an exercise. You might wonder how we can know about the hooks they
provide; we will cover that [in a later lesson](lesson-16), but you can always
jump ahead!

## Presentations

The `slides` class was developed for making physical slides in the mid-1980s, so
doesn't have any features for creating interactive PDF-based presentations.
There are modern classes that do exactly that: they are somewhat specialist
compared to general LaTeX documents, so we've [covered them in the additional
information](more-05).

## Exercises

Explore how changing the document class between the standard ones, the KOMA
bundle and `memoir` affects the appearance of the document.

```latex
\documentclass{article} % Change the class here
\usepackage[T1]{fontenc}

\begin{document}

\section{Introduction}

This is a sample document with some dummy
text\footnote{and a footnote}. This paragraph is quite
long as we might want to see the effect of making the
document have two columns.

\end{document}
```

Add the class option `twocolumn` and see how the layout changes.

Change the `\section` above to `\chapter` and find out what effect the
following class options have when using the `scrreprt` class.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
