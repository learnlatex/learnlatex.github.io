---
layout: "lesson"
lang: "it"
title: "Di più su: Formattazione: font e spaziatura"
description: "Questa lezione mostra come eliminare il rientro di un singolo capoverso."
toc-anchor-text: "Di più su: Formattazione: font e spaziatura"
---

## Eliminare il rientro di un capoverso

Per eliminare il rientro di un singolo capoverso, 
c'è il comando `\noindent`.
Dovresti adoperarlo _molto_ raramente; la grande  
maggioranza delle volte, infatti, puoi lasciare 
che LaTeX lo gestisca automaticamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Un piccolo paragrafo, che abbiamo riempito un po' per assicurarci 
che possiate vedere l'effetto qui!

Un piccolo paragrafo, che abbiamo riempito un po' per assicurarci 
che possiate vedere l'effetto qui!

\noindent  Un piccolo paragrafo, che abbiamo riempito un po' per 
assicurarci che possiate vedere l'effetto qui!

\end{document}
```
