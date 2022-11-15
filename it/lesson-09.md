---
layout: "lesson"
lang: "it"
title: "Riferimenti incrociati"
description: "Questa lezione mostra come riferirsi agli elementi numerati di un documento, come immagini, tabelle e sezioni."
toc-anchor-text: "Riferimenti incrociati"
toc-description: "Riferirsi a immagini, tabelle, eccetera."
---

# Riferimenti incrociati

<span
  class="summary">Questa lezione mostra come riferirsi agli elementi numerati di un documento, come immagini, tabelle e sezioni.</span>

Quando si scrive un documento, indipendentemente dalla sua lunghezza, si fa
spesso riferimento a elementi numerati come immagini, tabelle o equazioni.
Per fortuna, LaTeX è in grado di aggiungere automaticamente i numeri corretti:
dobbiamo solo imparare qualche semplice comando.

## Il meccanismo di `\label` e `\ref`

Per fare in modo che LaTeX ricordi un punto preciso nel documento,
devi prima ‘etichettarlo’ e poi puoi riferirti a esso da altri punti 
del lavoro.

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

Nel sottoparagrafo~\ref{subsec:etichetta-uno} c'è l'equazione~\ref{eq:etichetta-due}.

\end{document}
```

Nell'esempio ci sono due comandi `\label{...}`, uno _dopo_ il sottoparagrafo
e l'altro _dentro_ l'ambiente matematico `equation`, che serve a
scrivere formule numerate.
L'ultima frase richiama le medesime etichette, questa volta come
argomento di altrettanti comandi `\ref{...}`.

Quando viene lanciato, LaTeX memorizza le informazioni relative 
alle etichette in un file ausiliario (con estensione `.aux`,
lo troverai nella cartella di lavoro).
Di `\label{subsec:etichetta-uno}` LaTeX sa che è l'etichetta 
di un sottoparagrafo, perciò registra nel file ausiliario 
il numero di questa sezione.
Di `\label{eq:etichetta-due}` LaTeX sa che è l'etichetta di 
una formula matematica numerata, perché l'ultimo elemento
che produce un numero è l'ambiente `equation`, perciò
registra nel file ausiliario il numero della formula.
Quando si richiede un riferimento incrociato con `\ref`,
il programma stampa i numeri giusti prendendoli dal file
`.aux`.

Per la verità, LaTeX ignora le stringhe `subsec:` e `eq:`,
perché non le conosce: sono solo una convenzione per aiutarti
a ricordare a cosa l'etichetta si riferisce.
Sei libero di adoperare un'altra convenzione, se credi.
LaTeX tiene traccia di quanto ha elaborato più di recente.

Potrà capitarti di vedere nel PDF composto dei riferimenti 
incrociati in forma di due punti interrogativi in nero: **??**. 
Ciò accade perché la prima composizione del documento si limita
a scrivere le informazioni delle etichette sul file ausiliario 
_senza salvarle_. 
Basta lanciare LaTeX una seconda volta e tutto andrà a posto.
(Ma la cosa non costituisce un problema, perché quando scrivi
un documento, eseguirai LaTeX parecchie volte comunque.)

Osserva il carattere di tilde (`~`) prima del comando `\ref`.
Prendi la buona abitudine di mettercelo sempre: inserisce
uno ‘spazio indivisibile’ che impedisce a LaTeX di spezzare
un'espressione _paragrafo 3.1_ su due righe, per esempio.

## Dove va messo `\label`?

Il comando `\label` si riferisce _sempre_ all'elemento numerato 
immediatamente precedente: un paragrafo, una formula, un oggetto 
galleggiante, eccetera. 
Il che significa che `\label` va dato
sempre _dopo_ l'elemento a cui vuoi riferirti. 
In particular, when you create floats, the `\label` has to come _after_ (or better, in), the `\caption` command,
but within the float environment.

## Esercizi

Try adding new numbered parts (sections, subsections, enumerated lists) to
the test document and finding out how many runs are needed to make `\label`
commands work.

Add some floats and see what happens when you put `\label` _before_ the
`\caption` instead of after; can you predict the result?

What happens if you put a `\label` for an equation _after_ the `\end{equation}`?
