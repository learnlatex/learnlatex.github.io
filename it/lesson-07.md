---
layout: "lesson"
lang: "it"
title: "Inserimento e collocazione sulla pagina di immagini esterne"
description: "Questa lezione mostra come inserire immagini esterne nel documento, come cambiarne l'aspetto e come farle ‘galleggiare’ automaticamente fino al posto ‘giusto’ nel PDF."
toc-anchor-text: "Inserimento delle immagini"
toc-description: "Impostare l'aspetto e la collocazione delle immagini."
---

# Inserimento e collocazione sulla pagina di immagini esterne

<span
  class="summary">Questa lezione mostra come inserire 
  immagini esterne nel documento, come cambiarne l'aspetto 
  e come metterle sulla pagina o farle ‘galleggiare’ 
  automaticamente.</span>

Per importare in LaTeX file grafici esterni, devi caricare
il pacchetto `graphicx`, che aggiunge ai comandi di LaTeX 
il comando `\includegraphics`, all'opera nell'esempio
seguente:

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

In un documento LaTeX puoi inserire file EPS, 
PNG, JPG, e PDF.
Se hai a disposizione più di una versione di uno
stesso file grafico, puoi caricarlo specificandone
l'estensione: `esempio-imagine.png`, per esempio. 
(Se non indichi alcuna estensione, 
`graphicx` tenterà di indovinarla.)

Avrai notato che qui abbiamo adoperato un nuovo 
ambiente, `center`, per centrare orizzontalmente
l'immagine sulla pagina.
Diremo qualcosa di più su spaziatura e 
posizionamento delle immagini [un po' più avanti](lesson-11).

## Modificare l'aspetto di un file grafico

Il comando `\includegraphics` prevede molte 
opzioni per controllare la grandezza e la forma 
delle immagini e per rifilarle. 
Alcune di esse sono molto usate, per cui vale 
la pena conoscerle.

La cosa più ovvia da impostare è la `width` 
(larghezza) o la `height` (altezza) di un'immagine, 
che spesso vengono indicate relativamente
alla `\textwidth` (o alla `\linewidth`) e alla 
`\textheight` (altezza della gabbia del testo). 
La differenza tra `\textwidth` e `\linewidth` 
è sottile, tanto che spesso il risultato è lo 
stesso. 
`\textwidth` è la larghezza della gabbia del 
testo sulla pagina fisica, 
mentre `\linewidth` è la larghezza _corrente_, 
che potrebbe essere localmente diversa dalla prima 
(tale differenza è più evidente se si è dichiarata 
l'opzione di classe `twocolumn`). 
LaTeX ridimensionerà automaticamente l'immagine 
rispettandone le proporzioni.

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

Puoi anche scalare le immagini con l'opzione `scale` 
o ruotarle sulla pagina di un certo angolo con `angle`. 
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

Tradizionalmente, nella composizione dei documenti 
e specialmente di quelli tecnici e scientifici, 
le immagini e le tabelle possono finire 
più in là nel documento o essere raggruppate in pagine 
a loro dedicate per riempire meglio lo spazio disponibile 
e non lasciare grandi vuoti sulle pagine.
Immagini e tabelle di questo tipo prendono il nome 
di _oggetti galleggianti_ (_float_, in inglese).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % genera testo fittizio come riempitivo

\begin{document}

\lipsum[1-4] % vogliamo solo qualche capoverso di riempimento

Prova di collocamento.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Un'immagine d'esempio}
\end{figure}

\lipsum[6-10] % ancora qualche capoverso di riempimento

\end{document}
```

Qui LaTeX sposta l'immagine e la didascalia
da sotto `Prova di collocamento` all'inizio della
seconda pagina, perché nella parte inferiore 
della prima non c'è abbastanza spazio.
L'opzione `ht` condiziona la posizione in cui
LaTeX può mettere l'immagine: con lo specificatore
`h` gli chiediamo di metterla esattamente nel punto
in cui sta nel sorgente (se possibile); con lo 
specificatore `t` gli chiediamo di metterla 
nella parte superiore di una pagina.
Puoi indicare fino a quattro specificatori di posizione:

- `h` qui (_here_) se possibile
- `t` all'inizio (_top_) di una pagina
- `b` alla fine (_bottom_) di una pagina
- `p` in una pagina di soli float

[Più avanti](lesson-09), vedremo come creare 
riferimenti incrociati che puntino ai float.

Probabilmente avrai notato che qui abbiamo centrato
l'immagine con `\centering` e non con l'ambiente
`center`. 
Per centrare orizzontalmente il contenuto
di un float, dovresti adoperare `\centering`,
per evitare che `center` aggiunga dell'ulteriore 
spazio verticale a quello già inserito dal float.

## Esercizi

Prova a inserire nel documento un'immagine creata 
da te, sostituendola a quelle ‘standard’ adoperate
negli esempi.

Esplora che cosa puoi fare con le chiavi 
`height`, `width`, `angle` e `scale`.

Adopera la chiave `width` per impostare la 
dimensione di un file grafico relativamente 
a `\textwidth` prima e a `\linewidth` poi. 
Osserva come si comportano con o senza 
l'opzione `twocolumn`.

Adopera `lipsum` per comporre un esempio 
ragionevolmente lungo, poi prova a inserire 
dei float con differenti specificatori di posizione. 
Come interagiscono tra loro?
