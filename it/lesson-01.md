---
layout: "lesson"
lang: "it"
title: "Che cos'è LaTeX e come funziona"
description: "Questa lezione spiega le nozioni fondamentali di LaTeX: che cos'è e come funziona, 
  diversamente dai comuni elaboratori di testo come Word di Microsoft o Writer di LibreOffice."
toc-anchor-text: "Nozioni fondamentali di LaTeX"
toc-description: "Che cos'è LaTeX e come funziona."
---

# Nozioni fondamentali di LaTeX

<span
  class="summary">Questa lezione spiega le nozioni fondamentali di LaTeX: che cos'è e come funziona, 
  diversamente dai comuni elaboratori di testo come Word di Microsoft o Writer di LibreOffice.</span>

A differenza dei comuni elaboratori di testi 
come Word di Microsoft o Writer di LibreOffice, 
di solito LaTeX non è WYSIWYG (_What You See Is 
What You Get_,  ‘ciò che vedi è ciò che ottieni’). 
Con LaTeX, si prende del testo non formattato 
(_plain text_) e lo si arricchisce con istruzioni 
di marcatura. Questo linguaggio di marcatura informa LaTeX
sul significato logico di determinati elementi del testo, 
analogamente a quanto fa HTML.

Prendiamo, per esempio, l'elemento `<h2>`, che 
in un documento HTML segnala l'inizio di una nuova sezione. 
Anche LaTeX ha un comando per fare la stessa cosa: 
il comando `\section`.

## Il flusso di lavoro di LaTeX

Dal momento che i file di LaTeX (di solito li riconosci
dall'estensione `.tex`) non costituiscono 
il documento vero e proprio, ma sono piuttosto istruzioni 
che informano su che cosa e come ciascuna parte del 
documento dovrebbe essere, di solito non sono questi 
a essere inviati ad altre persone. 
Dopo aver scritto il tuo _sorgente_ LaTeX, invece, 
lancerai su di esso LaTeX (normalmente adoperando 
un programma chiamato `pdflatex`) per generare un file PDF
(il documento composto o finale). 
È questo PDF che poi condividerai con gli altri utenti.

Questo processo viene descritto in modi diversi.
Poiché adoperare LaTeX è un po' come programmare, 
spesso si dice _compilare_ il documento, sebbene
_comporre_ sia un termine più preciso.

## Esecuzioni multiple di LaTeX

Con i file semplici, per ottenere il PDF finale 
il file sorgente va composto una volta soltanto. 
Ma appena incominci ad aggiungere cose più complicate, 
come riferimenti incrociati, citazioni, immagini e 
indici, potresti dover eseguire LaTeX più di una volta. 
Te lo diremo quando sarà il caso.

## LaTeX o pdfLaTeX o...

Nella [prossima lezione](lesson-02) vedremo che LaTeX 
non è un solo programma. 
Per semplificare le cose, per creare i tuoi PDF 
ci concentreremo su un particolare 
programma LaTeX, pdfLaTeX. 
Più avanti nel corso vedremo alcuni altri programmi 
e perché in particolari circostanze potrebbero
fare al caso tuo.
