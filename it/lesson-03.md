---
layout: "lesson"
lang: "it"
title: "Struttura di base di un documento LaTeX"
description: "Questa lezione spiega la struttura di base di un documento LaTeX e come trasformarlo in un file PDF, e i principali caratteri speciali adoperati per controllare LaTeX."
toc-anchor-text: "Struttura del documento"
toc-description: "La struttura di base di un documento."
---

# Struttura di un documento LaTeX

<span
  class="summary">Questa lezione spiega la struttura di base di un documento LaTeX e come trasformarlo in un file PDF, e i principali caratteri speciali adoperati per controllare LaTeX.</span>

Il tuo primo documento LaTeX sarà molto semplice: l'idea è di mostrarti come 
appare un documento e come scriverlo con successo. È anche la tua prima
occasione per vedere [come adoperare gli esempi](help) qui su `learnlatex.org`.

Se stai lavorando con un'installazione locale di TeX, crea un nuovo file
con il tuo editor e registralo come `primo.tex`; poi, copia e incolla nel file 
il codice qui sotto oppure scrivilo tu direttamente.

Se stai lavorando con un sistema online, per provare l'esempio puoi 
semplicemente premere i bottoni <button>Esegui in TeXLive.net</button> o 
<button>Apri in Overleaf</button> sotto al codice!

<p
  class="hint">Ti suggeriamo di provare i servizi online anche se hai configurato LaTeX localmente: 
  è una buona occasione per vedere come funzionano le due cose.</p>

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Ciao, mondo!

Questo è il mio primo documento.
\end{document}
```

Salva le modifiche e trasformalo in un documento PDF. 
Se stai lavorando con un'installazione locale di TeX, l'esatto pulsante
da premere dipende dall'editor che hai scelto. 
Al termine della composizione, dovresti ottenere un file PDF
che contiene il testo qui sopra _più_ un numero di pagina:
LaTeX lo aggiunge automaticamente.

Visualizza il risultato `first.pdf` con il tuo visualizzatore
di PDF preferito.
Non sembra male, complimenti!

Vuoi un risultato in HTML anziché in PDF? La pagina
[Aiuto](./help) ti dice come fare.

## Cosa fare con gli errori

Gli errori capitano.
Innanzitutto, verifica che  ogni riga nel tuo file 
corrisponda _esattamente_ al testo nell'esempio qui sopra.
A volte, modifiche al sorgente apparentemente piccole 
producono grandi cambiamenti nel risultato, compreso 
l'arresto della composizione.
Se vedi che tutto è bloccato, prova a cancellare il 
documento e a copiare nuovamente il codice dall'esempio.

Se la composizione termina con un punto di domanda, puoi
uscirne dando `x` e `Invio`.

I messaggi di errore di LaTeX cercano di essere utili, ma 
non sono gli stessi dei messaggi negli elaboratori di testo.
Alcuni editor rendono anche difficile vedere il testo 
'completo' di un errore, che può nascondere i dettagli chiave
per risolvere il problema.

LaTeX crea sempre un registro di ciò che sta facendo: è un 
file di testo con estensione `.log`.
Potrai sempre vedere i messaggi di errore completi lì e, 
se hai un problema, gli esperti di LaTeX spesso ti chiederanno 
una copia di questo file.

<p
  class="hint">Diciamo di più su come gestire gli errori
  nella <a href="./lesson-15">lezione 15</a>.</p>

## Che cos'hai imparato finora

Il primo documento mostra le basi.
I documenti LaTeX sono un misto di testo e comandi.
I comandi incominciano con una barra rovescia
e a volte hanno un argomento tra parentesi graffe
(o, talvolta, argomenti facoltativi tra parentesi quadre).
Quindi, dicendo a LaTeX di comporre il tuo file,
ottieni un risultato in PDF .

Ogni documento LaTeX _deve_ contenere un `\begin{document}`
e un corrispondente `\end{document}`.
Tra questi due comandi si trova il *corpo del documento*, 
dove metterai i tuoi contenuti.
Qui il corpo è di due capoversi (in LaTeX separi i capoversi
con una o più righe vuote tra loro).
Prima di `\begin{document}` c'è il *preambolo del documento*,
che contiene il codice per impostare l'aspetto del documento.
Il comando `\usepackage`, descritto in una [lezione successiva](lesson-06),
è adoperato nella maggior parte degli esempi di questo sito
per impostare la codifica del font.

LaTeX ha altre coppie `\begin{...}` e `\end{...}`: sono
chiamate *ambienti*.
Devi abbinarli in modo che per ogni `\begin{x}` ci sia un `\end{x}`.
Se li annidi, allora devi verificare che ogni `\end{y} ... \end{x}`
corrisponda a `\begin{x} ... \begin{y}`, cioè che le dichiarazioni 
`\begin` e `\end` si corrispondano nell'ordine corretto.

Puoi aggiungere dei commenti a un file LaTeX incominciandoli con
`%`. Vediamoli all'opera per descrivere la struttura dell'esempio
seguente:

```latex
\documentclass[a4paper,12pt]{article} % Classe del documento con alcune opzioni
\usepackage[T1]{fontenc}
% Commento nel preambolo
\begin{document}
% Questo è un commento
Questo è   un semplice
documento\footnote{con una nota}.

Questo è un nuovo capoverso.
\end{document}
```

L'esempio è composto di due capoversi, ottenuti lasciando una riga vuota. 
Osserva inoltre che più spazi consecutivi vengono trattati come un solo spazio.

Talvolta potresti aver bisogno di uno spazio 'indivisibile' che non si perda
tra una riga e l'altra: in LaTeX lo ottieni 'legando' insieme due stringhe di 
testo con `~`.
La cosa sarà particolarmente utile quando incominceremo a creare i riferimenti
incrociati più avanti nel corso.

## Caratteri speciali

Probabilmente hai notato che``\``, `{` e `}` hanno un significato speciale
per LaTeX.
La barra rovescia ``\`` incomincia un'istruzione impartita a LaTeX: un 'comando'. 
Le parentesi graffe `{` e `}` sono usate per racchiudere gli _argomenti obbligatori_: 
sono informazioni richieste dai comandi.

Ci sono altri caratteri con un significato speciale: abbiamo appena visto che `~`
è uno spazio 'indivisibile', per esempio. Quasi tutti questi caratteri sono _molto_
inconsueti in un testo normale, motivo per cui sono stati scelti per veicolare
significati speciali.
Se hai bisogno di scrivere uno di questi caratteri speciali come testo normale,
puoi scoprire come fare nella [pagina di approfondimento di questa lezione](more-03).

## Esercizio

Sperimenta l'editor e il sistema di composizione online; premi il 
pulsante per comporre l'esempio, poi modificalo direttamente nella pagina
e componilo nuovamente.

Prova ad aggiungere del testo al tuo primo documento, componilo e osserva
i cambiamenti nel PDF. 
Scrivi capoversi differenti e aggiungi spazi variabili. Esplora le funzionalità
del tuo editor; clicca su un punto del sorgente e trova il modo di andare
alla riga corrispondente del PDF. 
Prova ad aggiungere alcuni spazi indivisibili e osserva come influenzano
l'interruzione delle righe.
