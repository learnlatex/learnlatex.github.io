---
layout: "lesson"
lang: "it"
title: "Di più su: Struttura logica"
description: "Questa lezione mostra come impostare il titolo del documento e come comporre liste di definizioni."
toc-anchor-text: "Di più su: Struttura logica"
---

## Titoli del documento

LaTeX definisce alcuni markup logici per il titolo dei documenti: 
tre comandi per impostare i ‘metadati’ e uno per adoperarli.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{A.U.~Tore \and P.~Paperino}
\title{Alcune cose che ho fatto}
\date{21 dicembre 2022}
\maketitle

Un po' di testo normale.
\end{document}
```

Come puoi osservare, i comandi `\author`, `\title` e `\date` salvano le 
informazioni, e `\maketitle` le adopera. 
Se necessario, puoi anche separare il nome di più autori con `\and`.
I comandi `\author`, `\title` e `\date` vanno dati prima di `\maketitle`.
Qui li abbiamo messi nel corpo del documento: si possono adoperare anche 
nel preambolo, ma se adoperi le scorciatoie di `babel`, non saranno attivi lì.

Il risultato creato da `\maketitle` dipende dalla classe di documento 
(vedi la [lezione 5](lesson-05)). 
Esiste un ambiente `titlepage` per quando vuoi creare una pagina per il titolo
secondo i tuoi gusti, ma l'argomento esula dallo scopo di questa introduzione. 
Se vuoi progettare da te i tuoi documenti, puoi appoggiarti a una classe 
personalizzabile, come `memoir`, o incominciare con una delle classi base di 
LaTeX, come `book` e usarla come punto di partenza.

## Liste di definizioni
Oltre alle liste ‘ordinate’ e ‘non ordinate’, 
LaTeX ne definisce un'altra, meno comune: la ‘lista di definizioni’.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Cane:] membro del genere Canis, che fa parte dei canidi simili ai 
  lupi, ed è il carnivoro terrestre più diffuso.
\item[Gatto:] specie domestiche di piccoli mammiferi carnivori. È l'unica
  specie addomesticata nella famiglia dei felidi ed è spesso indicato come 
  ‘gatto domestico’, per distinguerlo dai membri selvatici della famiglia.
\end{description}

\end{document}
```

## Esercizi

Prova a impostare diverse informazioni per `\author`, `\title` e `\date`,
per provare `\maketitle`. Quali di esse _devi_ dare? I comandi debbono 
per forza contenere un autore, un titolo e una data?

Crea delle liste di definizioni e annidane alcune dentro altre 
(ordinate, non ordinate o di definizioni).
