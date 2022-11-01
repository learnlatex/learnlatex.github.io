---
layout: "lesson"
lang: "it"
title: "What LaTeX is and how it works"
description: "This lesson explains the basics of what LaTeX is and how it works in contrast to common word processors such as Microsoft Word or LibreOffice Writer."
toc-anchor-text: "LaTeX basics"
toc-description: "What LaTeX is and how it works."
---

# Princìpi fondamentali di LaTeX

<span
  class="summary">Questa lezione spiega i princìpi fondamentali di LaTeX: che cos'è e come funziona, 
  diversamente dai comuni elaboratori di testo come Microsoft Word o LibreOffice Writer.</span>

A differenza dei comuni elaboratori di testo come Microsoft Word o LibreOffice Writer, 
di solito LaTeX non è WYSIWYG ('What You See Is What You Get', in italiano 
'ciò che vedi è ciò che ottieni'). Con LaTeX, si prende del testo puro e lo si 
arricchisce con istruzioni di marcatura. Questo linguaggio di marcatura informa LaTeX
sul significato logico di determinati elementi del testo, analogamente a quanto
fa HTML.

Prendi per esempio l'elemento `<h2>`, che in un documento HTML incomincia una
nuova sezione. Anche LaTeX ha un comando per fare la stessa cosa: il comando 
`\section`.

## Il flusso di lavoro di LaTeX

Dal momento che i file di LaTeX non costituiscono il documento vero e proprio,
ma sono piuttosto istruzioni che informano su che cosa e come ciascuna parte del 
documento dovrebbe essere, di solito non sono questi a essere inviati ad altre 
persone. Dopo aver scritto il tuo _sorgente_ LaTeX, invece, lancerai
LaTeX sul file (normalmente adoperando un programma chiamato `pdflatex`) per
generare un file PDF. È questo PDF che poi manderai agli altri.

Persone diverse descrivono questo processo in modi diversi. 
Poiché usare LaTeX
è un po' come programmare, spesso si dice 'compilare' il documento, sebbene
'comporre' sia un termine più preciso.

## Esecuzioni multiple di LaTeX

Con i file semplici, per ottenere il PDF composto il file sorgente va composto
una volta soltanto. Ma appena incominci ad aggiungere cose più complicate, come 
riferimenti incrociati, citazioni, immagini e indici, potresti dover eseguire 
LaTeX più di una volta. Te lo diremo quando sarà il caso.

## LaTeX o pdfLaTeX o...

Nella [prossima lezione](lesson-02), vedremo che LaTeX non è un solo programma. 
Per semplificare le cose, per creare i tuoi PDF ci concentreremo su un particolare 
programma LaTeX, pdfLaTeX. Più avanti nel corso vedremo alcuni altri programmi 
e perché potresti volerli adoperare.
