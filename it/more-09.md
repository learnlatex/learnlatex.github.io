---
layout: "lesson"
lang: "it"
title: "Di più su: Riferimenti incrociati"
description: "Questa lezione mostra come trasformare riferimenti incrociati in collegamenti ipertestuali con il pacchetto hyperref."
toc-anchor-text: "Di più su: Riferimenti incrociati"
---

## Trasformare i riferimenti incrociati in collegamenti ipertestuali

Il pacchetto `hyperref` permette di trasformare 
i riferimenti incrociati in collegamenti
ipertestuali (è sufficiente caricarlo).
La grande maggioranza delle volte, `hyperref` 
va caricato nel preambolo del documento 
come _ultimo_ pacchetto.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}

\begin{document}

\section{Introduzione}
Un po' di testo emozionante con un riferimento~\ref{sec:prossimo}.

\section{Argomento successivo}
\label{sec:prossimo}

Ancora un po' di testo.

\end{document}
```

Abbiamo scelto di avere i collegamenti ipertestuali 
nello stesso colore del testo normale: prova a 
levare `hidelinks` e guarda che succede!
