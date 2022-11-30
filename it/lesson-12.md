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

Le fonti (o _riferimenti bibliografici_) delle citazioni bibliografiche 
presenti nel tuo lavoro possono essere inserite nel documento direttamente, 
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
Se hai osservato il codice con attenzione, ti sarai accorto che nel campo 
`author` ogni voce è separata dall'altra con `and`. 
Farlo è _essenziale_: il formato del PDF composto ha bisogno di conoscere
gli autori uno per uno. 
Come hai osservato, anche nel titolo dell'articolo
alcune voci sono racchiuse in un'ulteriore coppia di graffe:
è una buona pratica per evitare modifiche indesiderate a maiuscole e minuscole.

Modificare a mano un file `.bib` è piuttosto noioso, perciò la maggior parte
degli utenti gestisce le bibliografie con un editor dedicato.
[JabRef](https://www.jabref.org) è largamente usato ed è multipiattaforma,
ma ne esistono molti altri.
Se il riferimento bibliografico contiene un DOI (_Digital Object Identifier_), 
puoi provare [doi2bib](https://doi2bib.org) per ottenere facilmente il record
in formato BibTeX.
Ma non dimenticarti di verificare che il record sia corretto e contenga tutte
le informazioni che ti servono!

In questa lezione adopereremo per le nostre dimostrazioni il breve database 
bibliografico dell'esempio precedente: lo abbiamo registrato con il nome
`learnlatex.bib`.

## Trasferire le informazioni dal database

Per trasferire le informazioni dal database bibliografico al tuo
documento, devi seguire tre passaggi.
Innanzitutto, devi comporre il tuo lavoro con LaTeX una prima volta:
nella cartella di lavoro comparirà un file contenente la lista
dei riferimenti bibliografici citati nel documento.
Poi, devi eseguire un programma che estrae dal database
dei riferimenti le fonti delle citazioni
presenti nel documento e le mette in ordine.
Infine, devi comporre nuovamente il documento, in modo che LaTeX
possa adoperare queste informazioni per ‘risolvere’ le citazioni.
Di solito, per risolvere tutti i riferimenti servono due
composizioni consecutive.

Per quanto riguarda il secondo passaggio, ci sono due sistemi
ampiamente adoperati: BibTeX e Biber. 
Biber si adopera sempre e solo in coppia con il pacchetto `biblatex`, 
mentre BibTeX si adopera o senza pacchetti o con il pacchetto `natbib`.

L'esecuzione di un secondo strumento oltre a LaTeX viene gestita 
in modi diversi dai diversi editor. 
Per i nostri esempi online, ci sono alcuni script che fanno tutto e
in una volta sola ‘dietro le quinte’. 
Il tuo editor potrebbe avere un singolo pulsante del tipo ‘fai cose’ 
oppure potresti scegliere di eseguire BibTeX o Biber a mano tra un'esecuzione e 
l'altra di LaTeX.

L'aspetto delle citazioni e dei riferimenti bibliografici è indipendente 
dal tuo database BibTeX, ed è definito da ciò che si chiama 'stile'. 
Vedremo che funzionano in modo leggermente diverso a seconda che si adoperi 
BibTeX o `biblatex`, ma il concetto di fondo rimane:
possiamo scegliere l'aspetto delle citazioni nel documento.

## Il flusso di lavoro di BibTeX con `natbib`

Sebbene sia possibile inserire citazioni bibliografiche in un documento
LaTeX senza caricare alcun pacchetto, i limiti della cosa diventano
presto evidenti.
Adopereremo, invece, il pacchetto `natbib`, che permette di creare 
diversi tipi di citazione e mette a disposizione numerosi stili.

L'esempio seguente mostra la struttura di base del nostro input.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}
La galleria di esempi matematici è presa da \citet{Graham1995},
mentre c'è un po' di chimica in \citet{Thomas2008}.

Alcune citazioni tra parentesi: \citep{Graham1995}
e \citep[p.~56]{Thomas2008}.

\citep[Vedi][pp.~45–48]{Graham1995}

Citazione multipla: \citep{Graham1995,Thomas2008}.

\bibliographystyle{plainnat} % stile delle citazioni nel corpo del documento
\bibliography{learnlatex}    % database bibliografico senza l'estensione
\end{document}
```

Come puoi osservare, si possono citare le diverse fonti
presenti nel database bibliografico mediante la loro
chiave.
Il pacchetto `natbib` mette a disposizione due stili
di citazione: testuale (comando `\citet`) e tra
parentesi (comando `citep`).
Lo stile dei riferimenti si seleziona con il comando
`\bibliographystyle`: qui abbiamo scelto `plainnat`.
Infine, la bibliografia vera e propria è inserita
con il comando `\bibliography`, nel cui argomento
va scritto il nome con cui si è registrato il
database bibliografico, _senza l'estensione_ .bib`.
Se i database sono più d'uno, vanno elencati 
separandoli con la virgola.

Eventuali riferimenti al numero di pagina possono essere
aggiunti alle citazioni bibliografiche come argomento
facoltativo.
Se gli argomenti facoltativi sono due, il primo 
verrà stampato prima della citazione (di solito 
serve per brevi note) e il secondo, con il riferimento
alle pagine, dopo l'etichetta.

Le impostazioni qui sopra adoperano lo stile autore-anno.
ma si può scegliere anche lo stile numerico: basta
passare l'opzione `numbers` al pacchetto `natbib`.

## Il flusso di lavoro di `biblatex`

Il pacchetto `biblatex` lavora in modo leggermente diverso da
`natbib`, dato che database bibliografico e stile di citazione
vanno specificati nel preambolo, mentre nel corpo del documento
va dato solo il comando per stampare la bibliografia.
Per farlo, dovrai imparare alcuni comandi nuovi.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex} % impostazioni di biblatex
\addbibresource{learnlatex.bib} % database bibliografico con l'estensione

\begin{document}
La galleria di esempi matematici è presa da \autocite{Graham1995}.

Alcune citazioni più complesse: \parencite{Graham1995} o
\textcite{Thomas2008} o anche \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Citazione multipla: \autocite{Thomas2008,Graham1995}.

\printbibliography
\end{document}
```

Osserva che `\addbibresource` richiede il nome del database completo
dell'estensione, che invece va omessa con `\bibliography` di `natbib`. 
Ancora, nota che `biblatex` adopera nomi piuttosto lunghi per i suoi
comandi di citazione, il cui significato è tuttavia abbastanza facile
da indovinare.

Di nuovo, si possono inserire brevi testi prima e dopo la citazione
mediante gli argomenti facoltativi.
Ossera che l'indicazione del numero delle pagine non richiede
esplicitamente `p.~` o `pp.~`: `biblatex` aggiunge automaticamente
il prefisso opportuno.

Con `biblatex`, lo stile di citazione va specificato come opzione
al pacchetto, nel preambolo.
Qui abbiamo scelto `authoryear`, ma sono disponibili anche lo stile
`numeric` e molti altri.

## Scegliere tra BibTeX e `biblatex`

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

## Esercizi

Try out both the `natbib` and `biblatex` examples. For `natbib`, you'll need
to run LaTeX, BibTeX, LaTeX, LaTeX; for `biblatex`, it's LaTeX, Biber, LaTeX.
Find out how to do that in your editor, or try the Overleaf and TeXLive.net
automation.

See what happens when you create new database entries and new citations. Add
a citation that's not in the database and see how it appears. Experiment
with `natbib`'s `numeric` and `biblatex`'s `style=numeric` option.
