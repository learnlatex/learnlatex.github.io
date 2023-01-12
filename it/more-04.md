---
layout: "lesson"
lang: "it"
title: "Di più su: Struttura logica"
description: "Questa lezione mostra come impostare il titolo del documento e come comporre liste di definizioni."
toc-anchor-text: "Di più su: Struttura logica"
---

## Titoli del documento

LaTeX definisce alcuni markup logici per il titolo 
dei documenti: tre comandi impostano i ‘metadati’ 
e uno li adopera effettivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

\author{A.U.~Tore \and P.~Paperino} % nome e cognome dell'autore o degli autori
\title{Alcune cose notevoli}        % titolo del documento 
\date{\today}                       % data corrente (\today) o qualunque altra data;
                                    % per ometterla, scrivi \date{}
\maketitle                          % questo comando stampa il blocco dei dati precedenti

Un po' di testo.

\end{document}
```

Come puoi osservare, `\author`, `\title` e `\date` 
salvano le informazioni dichiarate nei
loro argomenti, e `\maketitle` le stampa. 
Se necessario, puoi anche separare il nome di 
più autori con `\and`.
I comandi `\author`, `\title` e `\date` vanno dati 
_prima_ di `\maketitle`.
Qui li abbiamo messi nel corpo del documento, ma 
si possono adoperare anche nel preambolo. 
Ricorda, però, che se hai attivato le scorciatoie 
di `babel`, non saranno attivi lì.

Il risultato creato da `\maketitle` dipende dalla 
classe di documento (vedi la [lezione 5](lesson-05)). 
LaTeX definisce un ambiente `titlepage` per creare 
una pagina per il titolo secondo i tuoi gusti, 
ma l'argomento esula dallo scopo di questa introduzione. 
Se vuoi progettare da capo i tuoi documenti, 
puoi appoggiarti a una classe personalizzabile come `memoir` 
o incominciare con una delle classi base di 
LaTeX (`book`, per esempio) e usarla come punto di partenza.

## Liste di definizioni

Oltre alle liste predefinite ‘ordinate’ e 
‘non ordinate’, LaTeX ne prevede un'altra, 
meno comune: la ‘lista di definizioni’.

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

Imposta diverse informazioni per `\author`, 
`\title` e `\date`, per provare `\maketitle`. 
Quali di esse _devi_ dichiarare? I comandi debbono 
per forza contenere un autore, un titolo e una data?

Crea delle liste di definizioni e annidane alcune 
dentro altre (ordinate, non ordinate o di definizioni).
