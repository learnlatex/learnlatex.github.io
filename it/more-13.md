---
layout: "lesson"
lang: "it"
title: "Di più su: Organizzare documenti lunghi"
description: "Questa lezione mostra come realizzare un indice analitico e come adoperare il pacchetto imakeidx per rendere il processo automatico."
toc-anchor-text: "Di più su: Organizzare documenti lunghi"
---

## Realizzare un indice analitico

A seconda del tipo di documento che stai scrivendo, potrebbe
servirti un indice analitico. 
È un po' come comporre una bibliografia, perché anche in questo
caso LaTeX adopera internamente dei file ausiliari. 
Fortunatamente, tutto il processo è reso automatico dal pacchetto 
`imakeidx`. 
Abbiamo bisogno di tre istruzioni per LaTeX:

- Il comando `\makeindex`, che abilita la creazione dell'indice
- Il comando `\index`, che contrassegna le voci dell'indice
- Il comando `\printindex`, che stampa l'indice

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}

\makeindex

\begin{document}

Un po' di testo su Foo\index{foo}.
Ancora testo\index{baz!bar}.
E ancora un po' di testo\index{alpha@$\alpha$}.
Ancora testo su una diversa parte di baz\index{baz!wibble}.

\clearpage
Ancora un po' di testo su Foo\index{foo}, su una pagina diversa.
E ancora un po' di testo\index{beta@$\beta$}.
E ancora un po' di testo\index{gamma@$\gamma$}.

\printindex

\end{document}
```

Qui abbiamo mostrato due caratteristiche dell'indicizzazione: 
la suddivisione di una voce mediante `!` e la stampa di qualcosa 
di diverso dal ‘testo ordinato alfabeticamente’ di una voce di 
indice mediante `@`. 
L'indice analitico permette un alto grado di personalizzazione:
prova l'esempio e guarda come funziona.
