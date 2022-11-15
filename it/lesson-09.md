---
layout: "lesson"
lang: "it"
title: "Riferimenti incrociati"
description: "Questa lezione mostra come riferirsi agli elementi numerati di un documento, come immagini, tabelle e sezioni."
toc-anchor-text: "Riferimenti incrociati"
toc-description: "Riferirsi a immagini, tabelle, eccetera."
---

# Riferimenti incrociati

<span
  class="summary">Questa lezione mostra come riferirsi agli elementi numerati di un documento, come immagini, tabelle e sezioni.</span>

Quando si scrive un documento, indipendentemente dalla sua lunghezza, si fa
spesso riferimento a elementi numerati come immagini, tabelle o equazioni.
Per fortuna, LaTeX è in grado di aggiungere automaticamente i numeri corretti:
dobbiamo solo imparare qualche semplice comando.

## Il meccanismo di `\label` e `\ref`

Per fare in modo che LaTeX ricordi un punto preciso nel tuo documento,
devi ‘etichettarlo’ e poi riferirti a esso da altri punti del lavoro.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Ciao, mondo!

Questo è il mio primo documento.

\section{Titolo del primo paragrafo}

Testo del primo paragrafo.

\subsection{Sottoparagrafo del primo paragrafo}
\label{subsec:etichetta-uno}

Testo del primo sottoparagrafo.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:etichetta-due}
\end{equation}

Nel sottoparagrafo~\ref{subsec:etichetta-uno} c'è l'equazione~\ref{eq:etichetta-due}.

\end{document}
```

Ci sono due comandi `\label{...}`, uno dopo il sottoparagrafo
e l'altro dentro l'ambiente matematico `equation`, che serve a
scrivere formule numerate.
Le etichette che costituiscono il loro argomento sono richiamate
nell'ultima frase con i due comandi `\ref{...}`.


When you run LaTeX, it saves information about the labels to an auxiliary file.
For `\label{subsec:labelone}`, LaTeX knows that it is now in a subsection and
so it saves the subsection's number.
For `\label{eq:labeltwo}`, LaTeX knows that the most recent environment
of interest is an equation so it saves the information for that equation.
When you ask for the reference, LaTeX gets it from the auxiliary file.

The `subsec:` and `eq:` aren't used by LaTeX;
rather, it just keeps track of what it has most
recently processed.
But when you are writing these help you remember what the label
is about.

You may see references that show in an output PDF
as boldface double question marks, **??**.
The explanation is that because of this auxiliary file work,
the first time that you compile a document the label has not
yet been saved.
Run LaTeX one more time and you'll be all set.
(Usually while writing you will run LaTeX several times anyway,
so in practice this is not a bother.)

Notice the tie (`~`) characters before the references.
You don't want a line break between `subsection` and its number, or
between `equation` and its number.
Putting in a tie means LaTeX won't break the line there.

## Dove va messo `\label`?

The `\label` command always refers to the previous numbered entity:
a section, an equation, a float, etc. That means that `\label` always has to
come _after_ the thing you want to refer to. In particular, when you create
floats, the `\label` has to come _after_ (or better, in), the `\caption` command,
but within the float environment.

## Esercizi

Try adding new numbered parts (sections, subsections, enumerated lists) to
the test document and finding out how many runs are needed to make `\label`
commands work.

Add some floats and see what happens when you put `\label` _before_ the
`\caption` instead of after; can you predict the result?

What happens if you put a `\label` for an equation _after_ the `\end{equation}`?
