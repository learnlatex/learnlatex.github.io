---
layout: "lesson"
lang: "it"
title: "Di più su: Adoperare le classi di documento per influire sull'aspetto della pagina"
description: "Questa lezione offre informazioni su classi di documento per LaTeX più specialistiche."
toc-anchor-text: "Di più su: Adoperare le classi di documento per influire sull'aspetto della pagina"
---

## Classi specifiche per riviste

Molte riviste accademiche forniscono agli autori classi 
LaTeX dedicate da adoperare per inviare i contributi. 
In genere, queste classi impostano l'aspetto del documento
in modo che sia simile a quello della rivista finale, 
sebbene la cosa dipenda dall'uso dei font, eccetera. 
Se è disponibile una classe, di solito viene fornita 
direttamente dalla redazione, che dovrebbe fornire 
anche dettagli appropriati e informazioni sulle sue 
caratteristiche. 
Molte di queste sono disponibili anche su [CTAN](https://ctan.org) 
e nelle distribuzioni standard di TeX.

## Classi per videopresentazioni

Un ambito che richiede un trattamento speciale è la 
creazione di videopresentazioni. 
La classe `slides` è stata scritta per realizzare i ‘classici’
lucidi da proiezione, e non ha alcun supporto speciale per 
le videopresentazioni su schermo. 
Due classi di documento in particolare sono state sviluppate 
proprio a tal fine, e sono ampiamente utilizzate: 
`beamer` e `powerdot`. 
Poiché `beamer` è probabilmente quella più comune, 
ti daremo un esempio di come funziona:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}
  \frametitle{Un primo frame}
  Un po' di testo
\end{frame}

\begin{frame}
  \frametitle{Un secondo frame}
  Altro testo
  \begin{itemize}
    \item<1-> Primo item
    \item<2-> Secondo item
  \end{itemize}
\end{frame}

\end{document}
```

L'esempio mostra due idee importanti.
In primo luogo, `beamer` suddivide un documento in _frame_
(o quadri), ciascuno dei quali è in grado di generare 
più di una diapositiva (o pagina).
In secondo luogo, `beamer` aggiunge alla normale sintassi
di LaTeX alcune istruzioni per permettere di visualizzare
alcune parti del codice sorgente ‘un po' alla volta’.
Questa funzionalità è potente, ma più complicato di quanto 
non possiamo dire qui: per saperne di più, da' un'occhiata
a [questo post](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/).

## Una classe per immagini

In alcune occasioni è necessario creare un'immagine 
(che potrebbe anche essere ricca di testo) utilizzando LaTeX. 
Spesso potresti aver bisogno del semplice contenuto 
presente sulla ‘pagina’. 
Si può fare facilmente con la classe
[`standalone`](https://ctan.org/pkg/standalone),
che imposta automaticamente la dimensione della pagina
proprio a ridosso del contenuto in essa stampato.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
Un documento semplice: una scatola molto piccola!
\end{document}
```
