---
layout: "lesson"
lang: "it"
title: "Struttura di base di un documento LaTeX"
description: "Questa lezione spiega la struttura di base di un documento LaTeX e come trasformarlo in un file PDF, e i principali caratteri speciali adoperati per controllare LaTeX."
toc-anchor-text: "Struttura del documento"
toc-description: "La struttura di base di un documento."
---

# Struttura di un documento LaTeX

<span
  class="summary">Questa lezione spiega la struttura di base di un documento LaTeX e come trasformarlo in un file PDF, e i principali caratteri speciali adoperati per controllare LaTeX.</span>

Il tuo primo documento LaTeX sarà molto semplice: l'idea è di mostrarti come 
appare un documento e come scriverlo con successo. È anche la tua prima
occasione per vedere [come adoperare gli esempi](help) qui su `learnlatex.org`.

Se stai lavorando con un'installazione locale di TeX, crea un nuovo file
con il tuo editor e registralo come `primo.tex`; poi, copia e incolla nel file 
il codice qui sotto oppure scrivilo tu direttamente.

Se stai lavorando con un sistema online, per provare l'esempio puoi 
semplicemente premere i bottoni <button>Esegui in TeXLive.net</button> o 
<button>Apri in Overleaf</button> sotto al codice!

<p
  class="hint">Ti suggeriamo di provare i servizi online anche se hai configurato LaTeX localmente: 
  è una buona occasione per vedere come funzionano le due cose.</p>

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Ciao, mondo!

Questo è il mio primo documento.
\end{document}
```

Salva le modifiche e trasformalo in un documento PDF. 
Se stai lavorando con un'installazione locale di TeX, l'esatto pulsante
da premere dipende dall'editor che hai scelto. 
Al termine della composizione, dovresti ottenere un file PDF
che contiene il testo qui sopra _più_ un numero di pagina:
LaTeX lo aggiunge automaticamente.

Visualizza il risultato `first.pdf` con il tuo visualizzatore
di PDF preferito.
Non sembra male, complimenti!

Vuoi un risultato in HTML anziché in PDF? La pagina
[Aiuto](./help) ti dice come fare.

## Cosa fare con gli errori

Gli errori capitano.
Innanzitutto, verifica che  ogni riga nel tuo file 
corrisponda _esattamente_ al testo nell'esempio qui sopra.
A volte, modifiche al sorgente apparentemente piccole 
producono grandi cambiamenti nel risultato, compreso 
l'arresto della composizione.
Se vedi che tutto è bloccato, prova a cancellare il 
documento e a copiare nuovamente il codice dall'esempio.

Se la composizione termina con un punto di domanda, puoi
uscirne dando `x` e `Invio`.

I messaggi di errore di LaTeX cercano di essere utili, ma 
non sono gli stessi dei messaggi negli elaboratori di testo.
Alcuni editor rendono anche difficile vedere il testo 
'completo' di un errore, che può nascondere i dettagli chiave
per risolvere il problema.

LaTeX crea sempre un registro di ciò che sta facendo: è un 
file di testo con estensione `.log`.
Potrai sempre vedere i messaggi di errore completi lì e, 
se hai un problema, gli esperti di LaTeX spesso ti chiederanno 
una copia di questo file.

<p
  class="hint">Diciamo di più su come gestire gli errori
  nella <a href="./lesson-15">lezione 15</a>.</p>

## What you've got

The first document shows the basics.
LaTeX documents are a mixture of text and commands.
The commands start with a backslash
and sometimes have arguments in curly braces
(or sometimes optional arguments in square brackets).
Then you get an output PDF by telling LaTeX to typeset your file.

Every LaTeX document has a `\begin{document}` and a matching
`\end{document}`.
Between these two is the *document body*, where your content goes.
Here the body has two paragraphs (in LaTeX you separate paragraphs
with one or more blank lines).
Before `\begin{document}` is the *document preamble*,
which has code to set up the document layout.
The `\usepackage` command is described in a [later lesson](lesson-06)
it is used in most examples on this site to set up the font encoding.

LaTeX has other `\begin{...}` and `\end{...}` pairs; these are
called *environments*.
You must match them so that for every `\begin{x}` there has to be an `\end{x}`.
If you nest them, then you must have `\end{y} ... \end{x}` to match
`\begin{x} ... \begin{y}`, i.e. the `\begin` and `\end` statements matching
in order.

We can add comments to a LaTeX file by starting them with `%`; let's use
that to show the structure:

```latex
\documentclass[a4paper,12pt]{article} % The document class with options
\usepackage[T1]{fontenc}
% A comment in the preamble
\begin{document}
% This is a comment
This is   a simple
document\footnote{with a footnote}.

This is a new paragraph.
\end{document}
```

You can see above that we've got two paragraphs: notice the use of a blank  line
to do that. Also notice that multiple spaces are treated as a single space.

You might also sometimes want a 'hard' space that does not break over lines: in
LaTeX we can create that using `~`, 'tying' two pieces of text together. That's
particularly useful when we start creating cross-references later in the course.

## Special characters

You've probably spotted that ``\``, `{` and `}` have a special meaning to LaTeX.
A ``\`` starts an instruction to LaTeX: a 'command'. The curly brace characters
 `{` and `}` are used to show _mandatory arguments_: information that commands
 require.

There are some other characters with special meaning; we've just seen that `~`
is a 'hard' space, for example. Almost all of these characters  are _very_
uncommon in normal text, which is why they were chosen for special meanings.
If you do need to show one of these special characters, we've put some
[information in the further details page](more-03).

## Exercise

Experiment with the online editing and typesetting system; click the
button to typeset the content, then edit it in the webpage and re-typeset it.

Try adding text to your first document, typesetting and seeing the changes in
your PDF. Make some different paragraphs and add variable spaces. Explore how
your editor works; click on your source and find how to go to the same line  in
your PDF. Try adding some hard spaces and see how they influence line-breaking.
