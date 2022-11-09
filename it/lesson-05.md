---
layout: "lesson"
lang: "it"
title: "Impostare l'aspetto generale del documento"
description: "Questa lezione spiega che cos'è una classe di documento e in che modo può influire sull'aspetto di un documento, ed elenca le principali classi disponibili in una distribuzione di TeX."
toc-anchor-text: "Classi di documento"
toc-description: "Impostare l'aspetto generale del documento."
---

# Classi di documento

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

## Le classi standard

LaTeX è corredato di una serie di classi standard, il cui aspetto si differenzia
per gli elementi seguenti:
LaTeX is supplied with a set of standard classes, all of which look similar
but with some variations:

- `article`  
  brevi documenti senza capitoli
- `report`  
  documenti più lunghi con capitoli, per la stampa su un solo lato del foglio
- `book`  
  documenti più lunghi con capitoli, per la stampa in fronte e retro, with front- and
  back-matter (come un indice, per esempio)
- `letter`  
  corrispondenza senza suddivisione in sezioni
- `slides`  
  per videopresentazioni (ma vedi sotto)

Le classi `article`, `report` e `book` mettono a disposizione comandi molto simili,
come quelli che abbiamo già visto. Quando si scrive una `letter`, i comandi 
sono un po' diversi:

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Un destinatario\\Una strada\\Una città}

\opening{Caro signore, cara signora}

Qui ci va il testo della lettera

\closing{Cordialmente,}

\end{letter}

\end{document}
```

Osserva come le righe dell'indirizzo sono separate con ``\\``; descriveremo
i modi per interrompere una riga [un po' più avanti](lesson-11). 
Osserva anche come la classe `letter` crea un nuovo ambiente (`letter`) per ogni lettera 
e richiede comandi speciali.

Le classi standard `article`, `report` e `book` prendono due opzioni: `10pt`,
`11pt` e `12pt` per cambiare il corpo del font, e `twocolumn` per comporre
il documento su due colonne.

## Classi più ricche di funzioni

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

## Videopresentazioni

The `slides` class was developed for making physical slides in the mid-1980s, so
doesn't have any features for creating interactive PDF-based presentations.
There are modern classes that do exactly that: they are somewhat specialist
compared to general LaTeX documents, so we've [covered them in the additional
information](more-05).

## Esercizi

Explore how changing the document class between the standard ones, the KOMA
bundle and `memoir` affects the appearance of the document.

```latex
\documentclass{article} % Cambia la classe qui
\usepackage[T1]{fontenc}

\begin{document}

\section{Introduzione}

This is a sample document with some dummy
text\footnote{e una nota}. Questo capoverso è piuttosto
lungo, dal momento che vogliamo mostrare l'effetto
della composizione su due colonne.

\end{document}
```

Aggiungi l'opzione di classe `twocolumn` e osserva come cambia l'aspetto del documemnto.

Cambia il `\section` sopra in `\chapter` and find out what effect the
following class options have when using the `scrreprt` class.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
