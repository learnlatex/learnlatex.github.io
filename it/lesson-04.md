---
layout: "lesson"
lang: "it"
title: "Struttura logica"
description: "Questa lezione mostra alcuni comandi di formattazione di base e li confronta con la formattazione semantica ottenuta con i comandi di sezionamento e gli ambienti per gli elenchi."
toc-anchor-text: "Struttura logica"
toc-description: "Struttura e presentazione visuale."
---

# Struttura logica

<span
  class="summary">Questa lezione mostra alcuni comandi di formattazione di base e li confronta con la formattazione semantica ottenuta con i comandi di sezionamento e gli ambienti per gli elenchi.</span>

LaTeX permette sia di concentrarsi sulla struttura logica 
del documento, sia di impostarne direttamente l'aspetto.
Il più delle volte è meglio mantenere una certa separazione
tra contenuto e aspetto, privilegiando una marcatura che
descrive la struttura del documento, perché rende più 
facile riutilizzarne o modificarne l'aspetto
al bisogno.

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

Probabilmente avrai già indovinato da te che 
il comando  `\textit` mette il proprio argomento 
in corsivo, ma il punto è che lo fa _sempre_,
perciò non funziona se il testo da evidenziare 
è annidato in un altro testo. 
Al contrario, `\emph` tiene conto del contesto
ed evidenzia in tondo un testo annidato in
un altro testo in corsivo
Tieni presente che il corsivo non è l'unico 
mezzo per evidenziare del testo: per esempio, 
nelle videopresentazioni è meglio adoperare 
il colore.
Grazie alla marcatura logica, non dovrai 
preoccuparti di questi dettagli nel corpo 
del documento.

Parleremo della [formattazione manuale](lesson-11) 
più avanti, ma per ora aggiungiamo ai comandi che già
conosci `\textbf`: mette il proprio argomento <b>in nero</b>.

## Comandi di sezionamento

Probabilmente hai adoperato almeno una volta un 
elaboratore di testi, con il quale la maggior
parte degli utenti per incominciare 
una sezione scrive il titolo, ne ingrandisce 
corpo e spessore mettendolo in nero 
e lo fa seguire da una riga vuota. 
In LaTeX, la marcatura logica è uno strumento 
molto _più facile_ di questa formattazione 
manuale: basta dare il comando `\section`, 
che modifica il corpo del font e inserisce 
lo spazio verticale opportuno prima e dopo 
il titolo, garantendo un risultato uniforme 
in tutto il documento.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Ciao, mondo!

Questo è il mio primo documento.

\section{Titolo del primo paragrafo}

Testo del primo paragrafo.

Secondo capoverso.

\subsection{Sottoparagrafo del primo paragrafo}

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

LaTeX è in grado di suddividere i documenti a diversi 
livelli:

- `\chapter` (questo comando è ammesso solo con 
  `\documentclass{book}` o `\documentclass{report}`)
- `\section` (paragrafo)
- `\subsection` (sottoparagrafo)
- `\subsubsection` (sotto-sottoparagrafo)

Ma possiamo scendere a profondità ancora maggiori: 
il successivo livello verso il basso è `\paragraph`, 
anche se la grande maggioranza delle volte non serve 
essere così dettagliati. 
(E sì: `\paragraph` è un comando di sezionamento, 
e _non_ un modo per incominciare un nuovo capoverso!)

A questo punto, potresti chiederti come si fa a scrivere 
il titolo di un documento. 
Esistono alcuni comandi speciali per farlo,
ma non tutti i documenti li adoperano, perciò
li descriviamo [nella lezione di approfondimento](more-04).

## Liste

Un'altra situazione in cui la marcatura logica si rivela 
vincente è nella composizione delle liste.
LaTeX conosce due tipi di liste di base:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Lista ordinata (o numerata)
\begin{enumerate}
  \item Una voce
  \item Un'altra voce
  \item Però! Tre voci
\end{enumerate}

Lista non ordinata (o ‘puntata’)
\begin{itemize}
  \item Una voce
  \item Un'altra voce
  \item Però! Tre voci
\end{itemize}

\end{document}
```

Osserva che ogni voce dell'elenco incomincia con 
`\item` e che il marcatore viene aggiunto
automaticamente da LaTeX, a seconda del tipo di lista.

## Esercizi

Sperimenta differenti livelli di sezionamento. 
Dichiara `\documentclass{report}`
invece di `\documentclass{article}` e adopera 
comandi `\chapter`. 
Che aspetto hanno le sezioni nel documento
composto? 
Prova `\paragraph` e (addirittura) 
`\subparagraph` per osservarli
all'opera: nota che per impostazione predefinita 
producono titoli _non_ numerati.

Componi alcune liste e annidane una dentro l'altra. 
Come cambia il formato
dei numeri o dei marcatori? Tieni presente che 
LaTeX permette al 
massimo quattro livelli di annidamento.
Dunque, se ti accorgi di doverne usare di più, 
è segno che le liste non sono lo
strumento migliore per visualizzare i tuoi 
dati e forse è meglio strutturare diversamente 
il testo.

