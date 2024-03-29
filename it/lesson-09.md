---
layout: "lesson"
lang: "it"
title: "Riferimenti incrociati"
description: "Questa lezione mostra come creare un riferimento agli elementi numerati di un documento, come immagini, tabelle e sezioni."
toc-anchor-text: "Riferimenti incrociati"
toc-description: "Riferimenti a immagini, tabelle, eccetera."
---

# Riferimenti incrociati

<span
  class="summary">Questa lezione mostra come creare un riferimento agli elementi numerati di un documento, come immagini, tabelle e sezioni.</span>

Quando si scrive un documento, non importa quanto 
lungo sia, spesso bisogna fare riferimento ad alcuni
suoi elementi numerati come le immagini, le tabelle o 
le formule matematiche.
Per fortuna, LaTeX è in grado di aggiungere 
automaticamente i numeri corretti:
dobbiamo solo imparare qualche semplice comando.

## Il meccanismo di `\label` e `\ref`

Per fare in modo che LaTeX ricordi un punto preciso 
nel documento, prima devi ‘etichettarlo’ con una
stringa di caratteri univoca e poi potrai 
riferirti a esso da altri punti del testo.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Ciao, mondo!

Questo è il mio primo documento.

\section{Titolo del primo paragrafo}

Testo del primo paragrafo.

\subsection{Sottoparagrafo del primo paragrafo}
\label{subsec:etichetta-uno}

Testo del primo sottoparagrafo.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:etichetta-due}
\end{equation}

Nel sottoparagrafo~\ref{subsec:etichetta-uno} 
c'è l'equazione~\ref{eq:etichetta-due}.

\end{document}
```

L'esempio contiene due comandi `\label{...}`, uno 
_dopo_ il sottoparagrafo e l'altro _dentro_ 
all'ambiente matematico `equation`, che serve a
scrivere formule numerate. 
Questo comando ‘attacca’ le etichette
ai due oggetti.
Nell'ultima frase, infine, ci sono i riferimenti  
veri e propri, che si ottengono mettendo le 
etichette degli oggetti nell'argomento del comando
`\ref{...}`.

Quando viene lanciato, LaTeX memorizza le 
informazioni relative alle etichette in un 
file ausiliario (con estensione `.aux`,
lo troverai nella cartella di lavoro).
Di `\label{subsec:etichetta-uno}` LaTeX sa 
che è l'etichetta di un sottoparagrafo, 
perciò registra nel file ausiliario 
il numero di questa sezione.
Di `\label{eq:etichetta-due}` LaTeX sa che 
è l'etichetta di una formula matematica 
numerata, perché l'ultimo elemento che 
produce un numero è l'ambiente `equation`, 
perciò registra nel file ausiliario il 
numero della formula.
Quando si richiede un riferimento incrociato 
con `\ref`, il programma stampa i numeri 
giusti prendendoli dal file `.aux`.

Per la verità, LaTeX ignora le stringhe 
`subsec:` e `eq:`, perché non le conosce: 
sono solo una convenzione per aiutarti
a ricordare a che cosa l'etichetta si riferisce.
Sei libero di adoperare qualunque altra 
convenzione.
LaTeX tiene solo una traccia di quanto ha 
elaborato più di recente.

Potrà capitarti di vedere nel PDF composto dei riferimenti 
incrociati in forma di due punti interrogativi in nero: **??**. 
Ciò accade perché la prima composizione del documento si limita
a scrivere le informazioni delle etichette sul file ausiliario 
_senza registrarle_. 
Basta lanciare LaTeX una seconda volta e tutto andrà a posto.
(A ogni modo, la cosa non costituisce un problema, perché 
quando scrivi un documento eseguirai LaTeX parecchie 
volte comunque.)

Osserva il carattere di tilde (`~`) prima del comando `\ref`.
Prendi la buona abitudine di mettercelo sempre: inserisce
uno ‘spazio indivisibile’ che impedisce a LaTeX di spezzare
su due righe un'espressione come _paragrafo 3.1_, per esempio.

## Dove va messo `\label`?

Il comando `\label` si riferisce _sempre_ all'elemento numerato 
immediatamente _precedente_: un paragrafo, una formula, un float, 
eccetera. 
Ciò significa che `\label` va dato
sempre _dopo_ l'elemento a cui vuoi riferirti. 
Con i float, in particolare, va dato _dopo_ 
(o, meglio, _dentro_) il comando `\caption`, 
ma dentro l'ambiente galleggiante.

## Esercizi

Aggiugi nuove sezioni numerate (paragrafi, 
sottoparagrafi, liste numerate) al codice d'esempio 
di questa lezione e scopri quante esecuzioni servono
a LaTeX per risolvere i riferimenti incrociati.

Aggiungi alcuni float e osserva che cosa succede
se metti `\label` _prima_ di `\caption` anziché 
dopo: sei in grado di prevedere il risultato?

Che cosa succede se etichetti una formula 
mettendo `\label` _dopo_ `\end{equation}`?
