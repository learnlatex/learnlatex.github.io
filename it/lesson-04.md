---
layout: "lesson"
lang: "it"
title: "Struttura logica"
description: "Questa lezione mostra alcuni comandi di formattazione di base e li confronta con la formattazione semantica mediante comandi di sezionamento ed elenchi."
toc-anchor-text: "Struttura logica"
toc-description: "Struttura e presentazione visuale."
---

# Struttura logica

<span
  class="summary">Questa lezione mostra alcuni comandi di formattazione di base e li confronta con la formattazione semantica mediante comandi di sezionamento ed elenchi.</span>

LaTeX ti permette sia di concentrarti sulla struttura logica del documento,
sia di impostarne direttamente l'aspetto.
Il più delle volte è molto meglio applicare metodi che si concentrano
sulla struttura, perché rendono più facile riutilizzare o modificare
l'aspetto del documento al bisogno.

## Struttura e presentazione visuale

Incominciamo con un esempio che confronta due modi di 
evidenziare un testo: il primo adopera uno dei comandi di 
marcatura logica più comuni in LaTeX, `\emph`; il secondo
adopera il comando `\textit{...}`, che stampa il proprio 
argomento in corsivo. Nei documenti stampati, infatti, 
il corsivo serve a evidenziare qualcosa.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Testo con \emph{enfasi e contenuto \emph{annidato}}.

Testo in \textit{corsivo e contenuto \textit{annidato}}.
\end{document}
```

Probabilmente avrai indovinato che il comando 
`\textit` mette il testo in corsivo, ma lo fa _sempre_, 
perciò non funziona se il testo da evidenziare è annidato 
in un altro testo.
Il corsivo non è l'unico mezzo per evidenziare del
testo: per esempio, nelle videopresentazioni è meglio
adoperare il colore.
Grazie alla marcatura logica, non dovrai preoccuparti
di questi dettagli nel corpo del documento.

Parleremo della [formattazione manuale più tardi](lesson-11), 
ma per ora aggiungiamo `\textbf` ai comandi che già
conosci: mette il testo <b>in nero</b>.

## Comandi di sezionamento

Probabilmente hai adoperato almeno una volta un elaboratore di testo, 
con il quale per incominciare una sezione la maggior parte degli utenti 
scrive il titolo, ne ingrandisce corpo e spessore mettendolo in nero 
e lo fa seguire da una riga vuota. 
In LaTeX, la marcatura logica è uno strumento molto _più facile_ 
di questa formattazione manuale: basta dare il comando `\section`, 
che si occupa di modificare la dimensione dei caratteri e di inserire 
lo spazio verticale necessario prima e dopo il titolo, 
garantendo un risultato uniforme in tutto il documento.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Ciao mondo!

Questo è un primo documento.

\section{Titolo del primo paragrafo}

Testo del primo paragrafo.

Secondo capoverso.

\subsection{Sottoparagrafo nel primo paragrafo}

Testo del sottoparagrafo.

\section{Secondo paragrafo}

Testo del secondo paragrafo.
\end{document}
```

Con la configurazione predefinita della classe `article`, 
LaTeX numera i paragrafi e i sottoparagrafi e ne stampa 
il titolo in nero. 
[Nella prossima lezione](lesson-05) ti mostreremo come
cambiare un po' questo aspetto.

LaTeX può suddividere i documenti in diversi livelli

- `\chapter` (ma per questo servono `\documentclass{book}` o
  `\documentclass{report}`)
- `\section` (paragrafo)
- `\subsection` (sottoparagrafo)
- `\subsubsection` (sotto-sottoparagrafo)

Ma possiamo scendere a profondità maggiori: il successivo livello
verso il basso è `\paragraph`, but almost always that's
too much 'detail' in sections. (Sì: `\paragraph` è un comando di sezionamento, e _non_ un modo per incominciare un nuovo capoverso!)

You might wonder about the title of a document. There are some special
commands for that, but not all documents use them, so we've
[covered that in the parallel extra lesson](more-04).

## Elenchi

The other very common place you'll want logical markup e nella scrittura
degli elenchi.
Ci sono due tipi comuni di elenchi integrati in LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Ordinato
\begin{enumerate}
  \item Una voce
  \item Un'altra
  \item Però! Tre voci
\end{enumerate}

Non ordinato
\begin{itemize}
  \item Una voce
  \item Un'altra
  \item Però! Tre voci
\end{itemize}

\end{document}
```

Nota bene che adoperiamo `\item` per incominciare ciascuna voce, e 
che in ogni tipo di elenco il marcatore viene aggiunto automaticamente.

## Esercizi

Sperimenta differenti livelli di sezionamento. Adopera `\documentclass{report}`
invece di `\documentclass{article}` e aggiungi comandi `\chapter`. How
do they look? Try out `\paragraph` and (even) `\subparagraph` to see they work:
by default, they _don't_ add numbers.

Componi alcuni elenchi e annida una lista dentro l'altra. How does the format of the
numbers or markers change? You can only go to four levels with standard LaTeX,
but more than four nested lists tends to be a bad sign anyway!
