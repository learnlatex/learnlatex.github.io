---
layout: "lesson"
lang: "it"
title: "Specifiche linguistiche per l'italiano"
description: "Questa lezione mostra i dettagli specifici della lingua per comporre con LaTeX in italiano. L'attenzione è richiamata sulla sillabazione."
next: "extra-01"
toc-anchor-text: "Specifiche linguistiche per l'italiano"
toc-description: "Comporre con LaTeX in italiano."
---

# Specifiche linguistiche per l'italiano

<span
  class="summary">Questa lezione mostra i dettagli specifici della lingua per comporre con LaTeX in italiano. L'attenzione è richiamata sulla sillabazione.</span>

## Sillabazione

LaTeX è stato scritto per comporre documenti in inglese, 
quindi esistiono problemi specificamente linguistici che 
gli utenti di altre lingue debbono affrontare. 
Il principale è la sillabazione: per passare allo schema
di sillabazione di una lingua diversa dall'inglese
basta dichiararlo come opzione al pacchetto `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[italian]{babel} % qui si dichiara la lingua del documento

\begin{document}

Un po' di testo in italiano.

\end{document}
```
