---
layout: "lesson"
lang: "it"
title: "Specifiche linguistiche per l'italiano"
description: "Questa lezione illustra i dettagli specifici di tipo 
linguistico per comporre con LaTeX in italiano, con particolare 
attenzione sulla sillabazione."
next: "extra-01"
toc-anchor-text: "Specifiche linguistiche per l'italiano"
toc-description: "Comporre con LaTeX in italiano."
---

# Specifiche linguistiche per l'italiano

<span
  class="summary">Questa lezione illustra i dettagli specifici 
  di tipo linguistico per comporre con LaTeX in italiano, 
  con particolare attenzione sulla sillabazione.</span>

## Sillabazione

LaTeX è stato scritto per comporre documenti in inglese,
quindi gli utenti che compongono in altre lingue debbono
affrontare problemi specifici. 
Il problema principale è la sillabazione: per passare 
allo schema di sillabazione di una lingua diversa dall'inglese
basta dichiararlo come opzione al pacchetto `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[italian]{babel} % qui si dichiara la lingua del documento

\begin{document}

Un po' di testo in italiano.

\end{document}
```
