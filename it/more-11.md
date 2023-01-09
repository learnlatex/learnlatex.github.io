---
layout: "lesson"
lang: "it"
title: "Di più su: Formattazione: font e spaziatura"
description: "This lesson shows how to suppress the paragraph indentation for a single paragraph."
toc-anchor-text: "Di più su: Formattazione: font e spaziatura"
---

## Eliminare il rientro di un capoverso

Se vuoi eliminare il rientro di un singolo capoverso, 
puoi dare `\noindent`.
Dovresti adoperarlo _molto_ raramente; la maggior parte 
delle volte, dovresti lasciare che LaTeX lo gestisca 
automaticamente.

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
