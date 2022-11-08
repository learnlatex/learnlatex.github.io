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

Incominciamo con un esempio che confronta due modi per 
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

La configurazione predefinita della classe `article` 
prevede paragrafi e sottoparagrafi numerati e con 
il titolo in nero. 
[Nella prossima lezione](lesson-05) ti mostreremo come
cambiare un po' questo aspetto.

LaTeX può suddividere i documenti in diversi livelli:

- `\chapter` (ma per questo servono `\documentclass{book}` o
  `\documentclass{report}`)
- `\section` (paragrafo)
- `\subsection` (sottoparagrafo)
- `\subsubsection` (sotto-sottoparagrafo)

Ma possiamo scendere a profondità ancora maggiori: il successivo 
livello verso il basso è `\paragraph`, ma la grande maggioranza 
delle volte non serve essere così dettagliati. 
(E sì: `\paragraph` è un comando di sezionamento, e _non_ un modo 
per incominciare un nuovo capoverso!)

A questo punto, potresti chiederti come si fa a scrivere il titolo
di un docmento. Esistono alcuni comandi speciali per farlo,
ma non tutti i documenti li adoperano, perciò
[li descriviamo nella lezione di approfondimento](more-04).

## Elenchi

Un'altra situazione in cui la marcatura logica si rivela vincente
è nella scrittura degli elenchi.
LaTeX conosce due tipi 
Ci sono due tipi comuni di elenchi integrati in LaTeX:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Elenco ordinato (numerato)
\begin{enumerate}
  \item Una voce
  \item Un'altra
  \item Però! Tre voci
\end{enumerate}

Elenco non ordinato
\begin{itemize}
  \item Una voce
  \item Un'altra
  \item Però! Tre voci
\end{itemize}

\end{document}
```

Osserva che ogni voce dell'elenco incomincia con `\item` 
e che il marcatore viene aggiunto da LaTeX automaticamente,
a seconda del tipo di elenco.

## Esercizi

Sperimenta differenti livelli di sezionamento. Adopera `\documentclass{report}`
invece di `\documentclass{article}` e aggiungi comandi `\chapter`. Che aspetto 
hanno? Prova `\paragraph` e (addirittura) `\subparagraph` per osservarli
all'opera: per impostazione predefinita, producono titoli _non_ numerati.

Componi alcuni elenchi e annida una lista dentro l'altra. Come cambia il formato
dei numeri o dei marcatori? LaTeX permette al massimo quattro livelli di annidamento,
ma se ti accorgi di doverne annidare di più, è segno che le liste non sono lo
strumento migliore: forse dovresti strutturare diversamente il tuo testo.

