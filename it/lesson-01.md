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
  class="summary">This lesson explains the basics of what LaTeX is and how it works in contrast to common word processors such as Microsoft Word or LibreOffice Writer.</span>

Unlike common word processors come Microsoft Word o LibreOffice Writer, LaTeX
usually does not provide WYSIWYG ('What You See Is What You Get', in italiano 
'ciò che vedi è ciò che ottieni'). With LaTeX
one takes plain text and enriches it with markup. This markup tells LaTeX
about the logical meaning of certain elements of the text, similar to the way
HTML does.

Prendi per esempio l'elemento `<h2>`, che in un documento HTML indica una
nuova sezione.
Anche LaTeX ha un comando per questo; qui si adopererebbe il comando `\section`.

## Il flusso di lavoro di LaTeX

Dal momento che i file di LaTeX non costituiscono il documento vero e proprio,
ma sono piuttosto istruzioni che informano su che cosa ciascuna parte del 
documento dovrebbe essere, di solito non sono questi a essere inviati ad altre 
persone. Dopo aver scritto il tuo _sorgente_ LaTeX, invece, lancerai
LaTeX sul file (normalmente adoperando un programma chiamato `pdflatex`) per
generare un file PDF. È questo PDF che poi manderai agli altri.

Persone diverse descrivono questo processo in modi diversi. 
Poiché usare LaTeX
è un po' come programmare, spesso si dice 'compilare' il documento, sebbene
'comporre' sia un termine più preciso.

## Multiple LaTeX runs

For simple files, you only need to typeset your file once to get the completed
PDF. But once you start adding more complicated things, like cross-references,
citations, figures, and tables of contents, you might need to run LaTeX more
than once. We'll tell you when that's the case.

## LaTeX or pdfLaTeX or ...

In the [next lesson](lesson-02), we are going to see that LaTeX is not a
single program. To keep things simple, we are going to focus on one particular
LaTeX Program, pdfLaTeX, for creating your PDFs. We will look at some other
programs, and why you might want to use them, later in the course.
