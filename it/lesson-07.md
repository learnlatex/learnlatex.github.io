---
layout: "lesson"
lang: "it"
title: "Inserimento e collocazione sulla pagina di immagini esterne"
description: "Questa lezione mostra come inserire immagini esterne nel tuo documento, come cambiarne l'aspetto e come farle 'galleggiare' automaticamente fino al posto giusto nel PDF."
toc-anchor-text: "Inserire immagini"
toc-description: "Aspetto e collocazione delle immagini."
---

# Inserimento e collocazione sulla pagina di immagini esterne

<span
  class="summary">Questa lezione mostra come inserire immagini esterne nel tuo documento, come cambiarne l'aspetto e come metterle sulla pagina o o farle 'galleggiare' automaticamente.</span>

Per importare in LaTeX file grafici esterni, devi caricare
il pacchetto `graphicx`, che aggiunge a LaTeX il comando
`\includegraphics`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
Questa figura
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
è un PDF importato.
\end{document}
```

In un documento LaTeX puoi inserire file EPS, PNG, JPG, e PDF.
Se possiedi più di una versione di un file grafico, puoi scrivere
`esempio-imagine.png`, per esempio. (Se non metti alcuna estensione,
ll pacchetto `graphicx` tenterà di indovinarla.)

Avrai notato che qui abbiamo adoperato un nuovo ambiente, `center`, 
per mettere l'immagine centrata orizzontalmente sulla pagina.
Diremo qualcosa di più su spaziatura e posizionamento
[un po' più avanti](lesson-11).

## Modificare l'aspetto del file grafico

Il comando `\includegraphics` prevede molte opzioni per controllare
la grandezza e la forma delle immagini e per rifilare il materiale. 
Alcune di esse sono molto usate, per cui vale la pena conoscerle.

La cosa più ovvia da impostare è la `width` (larghezza) o la `height` 
(altezza) di un'immagine, che spesso vengono indicate relativamente
alla `\textwidth` o alla `\linewidth` e alla `\textheight` 
(altezza della gabbia del testo). La differenza tra `\textwidth` 
e `\linewidth` è sottile, tanto che spesso il risultato è lo stesso. 
`\textwidth` è la larghezza della gabbia del testo sulla pagina fisica, 
mentre `\linewidth` è la larghezza _corrente_, che potrebbe essere
localmente diversa dalla prima (tale differenza è più evidente 
dichiarando l'opzione di classe `twocolumn`). 
LaTeX ridimensionerà automaticamente l'immagine in modo rispettandone
le proporzioni.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Un po' di testo
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Puoi anche scalare le immagini con l'opzione `scale` o ruotarle
sulla pagina di un certo angolo con `angle`. 
Le altre cose di cui potresti avere bisogno sono il ritaglio 
(opzione `clip`) e il rifilo (opzione `trim`) di un'immagine.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Far ‘galleggiare‘ le immagini

Tradizionalmente, nella composizione dei documenti e specialmente 
di quelli tecnici e scientifici, le immagini e le tabelle possono finire 
più in là nel documento o essere raggruppate in pagine a loro
dedicate per riempire meglio lo spazio disponibile e non lasciare
grandi vuoti sulle pagine.
Immagini e tabelle di questo tipo prendono il nome di _oggetti galleggianti_
(_float_, in inglese).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % produce dummy text as filler

\begin{document}
\lipsum[1-4] % Just a few filler paragraphs

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{An example image}
\end{figure}

\lipsum[6-10] % Just a few filler paragraphs
\end{document}
```

Here LaTeX moves the graphic and the caption
away from the `Test location` text to the top of the second page,
because there isn't room for it on the bottom of the first page.
The `ht` influences where LaTeX can place the float; these two
letters mean that it can go where it is in the source (next to
`Test location`) or to the top of a page. You can use up to four position
specifiers

- `h` 'Here' (if possible)
- `t` Top of the page
- `b` Bottom of the page
- `p` A dedicated page only for floats

[Later](lesson-09), we will see how to cross-reference floats so you can point
to them from your text.

You'll probably spot that we've centered the image here using `\centering`
rather than the `center` environment. Inside a float, you should use
`\centering` if you want to horizontally center content; this avoids both
the float and `center` environment adding extra vertical space.

## Exercises

Try including an image you have created, replacing the 'standard' ones we have
used in the demonstration.

Explore what you can do using the `height`, `width`, `angle` and `scale` keys.

Use the `width` key to set the size of a graphic relative to `\textwidth` and
another graphic relative to `\linewidth`. Try out how they behave with or
without the `twocolumn` option.

Use `lipsum` to make a reasonably long demonstration, then try out placing
floats using the different position specifiers. How do different
specifiers interact?
