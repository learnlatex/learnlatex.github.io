---
layout: "lesson"
lang: "it"
title: "Citazioni e riferimenti bibliografici"
description: "Questa lezione mostra i fondamenti delle basi di dati bibliografici. Imparerai come costruire i tuoi database bibliografici personali e come adoperarli nei documenti con i due principali metodi disponibili."
toc-anchor-text: "Citazioni e riferimenti bibliografici"
toc-description: "Lavorare con i database bibliografici."
---

# Citazioni e riferimenti bibliografici

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span
  class="summary">Questa lezione mostra i fondamenti delle basi di dati bibliografici. Imparerai come costruire i tuoi database bibliografici personali e come adoperarli nei documenti con i due principali metodi disponibili.</span>

Le fonti (o _riferimenti_) delle citazioni bibliografiche presenti 
nel tuo lavoro possono essere inserite nel documento direttamente, 
ma in linea generale ti consigliamo di scriverle in uno o più file 
esterni. 
Un file del genere si chiama _base di dati bibliografici_ 
(o _database bibliografico_) e contiene le informazioni in un 
formato facile da trattare per LaTeX.
Avere a disposizione uno o più di questi database ti permetterà
di riutilizzarne le informazioni, evitando di formattare il 
documento a mano.

## Basi di dati bibliografici

Nel gergo di LaTeX, un database bibliografico è un ‘file BibTeX’, 
con estensione `.bib`. 
Questi file contengono una o più voci (chiamate anche _record bibliografici_)
una per ogni fonte, e in ciascun record è presente una serie di _campi_ da
riempire.
Vediamone un esempio insieme.

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->

Il codice qui sopra contiene un record di tipo `article` (cioè, un articolo
apparso in una rivista) e un record di tipo `book` (cioè, un libro vero
e proprio): sono di gran lunga i record più comuni. 
Come puoi osservare, ogni tipo di record incomincia con `@` e le informazioni 
a completamento dei campi vanno racchiuse in una coppia di parentesi graffe.

I campi sono tutti nel formato `chiave=valore`, tranne la cosiddetta ‘chiave’,
cioè il ‘nome’ della citazione.
Come chiave puoi scrivere quello che vuoi, dato che è una semplice etichetta,
ma nell'esempio abbiamo scelto il cognome dell'autore seguito dall'anno:
è una soluzione comune ed efficace.

I campi esatti da riempire dipendono dal tipo di record, ma la grande maggioranza
di essi sono abbastanza ovvi. 
Forse hai notato che nel campo `author` ogni voce è separata dall'altra 
con `and`. È _essenziale_: the format of the _output_ needs to
know which author is which. 
Come hai osservato, anche nel titolo dell'articolo
alcune voci sono racchiuse in un'ulteriore coppia di graffe:
è una buona pratica per evitare modifiche indesiderate a maiuscole e minuscole.

Modificare a mano un file `.bib` è piuttosto noioso, perciò la maggior parte
degli utenti ricorre a un editor dedicato.
[JabRef](https://www.jabref.org) è largamente usato ed è multipiattaforma,
ma ne esistono molti altri.
Se il riferimento bibliografico contiene un DOI (_Digital Object Identifier_), 
puoi provare [doi2bib](https://doi2bib.org) per ottenere facilmente il record
in formato BibTeX.
Ma non dimenticarti di verificare che il record sia corretto e contenga tutte
le informazioni che ti servono!

In questa lezione adopereremo per le nostre dimostrazioni il breve database 
bibliografico dell'esempio precedente: lo abbiamo registrato come
`learnlatex.bib`.

## Trasferire le informazioni dal database

To get the information into your document there are three steps.
First, use LaTeX to compile your document, which creates a file with a
list of the references that your document cites.  Second, run a
program that takes information from the database of references, picks
out the ones that you use, and puts them in order.  Finally, compile
your document again so that LaTeX can use that information to resolve
your citations. Usually it will require at least two compilations to
resolve all the references.

For the second step, there are two systems in wide use: BibTeX and
Biber. Biber is only ever used with a LaTeX package called `biblatex`, whereas
BibTeX is used with either no packages at all or with `natbib`.

Running a second tool as well as LaTeX is handled in different ways by different
editors. For our online examples, there are some 'behind the scenes' scripts
that do everything in one go.
Your editor might have a single 'do stuff' button or you might have to
choose to run BibTeX or Biber manually between LaTeX runs.

The format of citations and references is independent of your BibTeX database,
and is set by what is known as a 'style'. We will see that these work slightly
differently in the BibTeX workflow and `biblatex`, but the general idea remains:
we can choose how citations appear.

## The BibTeX workflow with `natbib`

Whilst it is possible to insert citations into a LaTeX document without
any packages loaded, this is rather limited. Instead, we will use the
`natbib` package, which allows us to create different types of citation and
has a lot of styles available.

The basic structure of our input is as shown in this example.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}
The mathematics showcase is from \citet{Graham1995}, whereas
there is some chemistry in \citet{Thomas2008}.

Some parenthetical citations: \citep{Graham1995}
and then \citep[p.~56]{Thomas2008}.

\citep[See][pp.~45--48]{Graham1995}

Together \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

You can see that we can cite different entries in the database by giving their
key. The `natbib` package offers both textual and parenthetical citation styles,
`\citet` and `\citep`, respectively. The reference style is selected by the
`\bibliographystyle` line; here we've used the `plainnat` style. The
bibliography is actually inserted by the `\bibliography` line, which also picks
the database(s) to use; this is a comma-separated list of names.

Page references can be added to the citation with an optional argument.
If two optional arguments are given, the first goes in front of the citation
label for a short note and the second after the label for a page reference.

The setup above uses author-year style, but we can make use of numeric
citations. That is done by adding the `numbers` option to the `natbib` line.

## The `biblatex` workflow

The `biblatex` package works slightly differently to `natbib`, as we select
the databases in the preamble but print it in the document body. There are
some new commands for this.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % file of reference info

\begin{document}
The mathematics showcase is from \autocite{Graham1995}.

Some more complex citations: \parencite{Graham1995} or
\textcite{Thomas2008} or possibly \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Together \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

Notice that `\addbibresource` _requires_ the full database filename, whereas
we omitted the `.bib` for `\bibliography` with `natbib`. Also notice that
`biblatex` uses rather longer names for its citation commands, but these are
all quite easy to guess.

Again, short text before and after the citation can be inserted with
the optional arguments. Note that the page numbers need not be prefixed
with `p.~` or `pp.~` here, `biblatex` can automatically add the appropriate
prefix.


In `biblatex`, the reference style is picked when we load the package. Here,
we've used `authoryear`, but there is a `numeric` style and many others are
also available.

## Choosing between the BibTeX workflow and `biblatex`

Even though both the BibTeX workflow and `biblatex` get their input via BibTeX
files and can produce structurally similar output in the document, they use
completely different ways to produce this result. That means that there are
some differences between the two approaches that may help you choose which
one works best for you.

In the BibTeX workflow the bibliography style is ultimately decided
by a `.bst` file which you select with the `\bibliographystyle` command.
`biblatex` does not use `.bst` files and uses a different system.
If you are using a template that comes with a `.bst` file or are given a `.bst`
file for your project, you must use the BibTeX workflow and cannot use
`biblatex`.

The different approach `biblatex` takes implies that you can modify the output
of the bibliography and citation commands directly from your document preamble
using LaTeX-based commands. Modifications of BibTeX `.bst` styles on the other
hand usually require working with these external files and need knowledge of
the BibTeX programming language. Generally speaking, `biblatex` is said to be
easier to customize than the BibTeX workflow.

In `biblatex` it is generally easier to implement more elaborate citation
styles with a wider array of different citation commands. It also offers more
context-dependent features. Roughly speaking this is less interesting for
the styles common in many STEM subjects, but becomes relevant for some more
complex styles in some areas of the humanities.

BibTeX can only sort US-ASCII characters correctly and relies on workarounds
to provide US-ASCII-based sorting for non-US-ASCII characters.
With Biber `biblatex` offers full Unicode sorting capabilities. Thus `biblatex`
is usually a better choice if you want to sort your bibliography in a
non-ASCII/non-English order.

Having been around for much longer than `biblatex`, the BibTeX workflow is
more established than `biblatex`, meaning that many publishers and journals
expect bibliographies generated via the BibTeX workflow. Those publishers
cannot or generally do not accept submissions using `biblatex`.

The bottom line is: Check the author/submission guidelines if you are
submitting to a journal or publisher. If you are given a `.bst` file, you must
use the BibTeX workflow. If you want a relatively simple bibliography and
citation style and only need English US-ASCII-based sorting, the BibTeX workflow
should suffice. If you need a more complex citation style, non-English sorting
or want easier access to citation and bibliography style customisation features,
you will want to look into using `biblatex`.

## Exercises

Try out both the `natbib` and `biblatex` examples. For `natbib`, you'll need
to run LaTeX, BibTeX, LaTeX, LaTeX; for `biblatex`, it's LaTeX, Biber, LaTeX.
Find out how to do that in your editor, or try the Overleaf and TeXLive.net
automation.

See what happens when you create new database entries and new citations. Add
a citation that's not in the database and see how it appears. Experiment
with `natbib`'s `numeric` and `biblatex`'s `style=numeric` option.
