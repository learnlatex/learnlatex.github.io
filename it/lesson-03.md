---
layout: "lesson"
lang: "it"
title: "Struttura di base di un documento LaTeX"
description: "Questa lezione spiega la struttura di base di un documento LaTeX, come trasformarlo in un file PDF e i principali caratteri speciali adoperati per controllare LaTeX."
toc-anchor-text: "Struttura del documento"
toc-description: "La struttura di base di un documento."
---

# Struttura di un documento LaTeX

<span
  class="summary">Questa lezione spiega la struttura di base di un documento LaTeX, come trasformarlo in un file PDF e i principali caratteri speciali adoperati per controllare LaTeX.</span>

Il tuo primo documento LaTeX sarà molto semplice: l'idea è 
mostrarti come appare un documento e come scriverlo con 
successo. 
È anche la tua prima occasione per vedere 
[come lavorare con gli esempi](help) di `learnlatex.org`.

Se stai lavorando con un'installazione locale di TeX, 
crea un nuovo file con il tuo editor e registralo come 
`primo.tex`; poi, copia e incolla nel file 
il codice qui sotto oppure scrivicelo tu direttamente.

Se stai lavorando con un sistema on-line, per provare 
l'esempio puoi semplicemente premere i bottoni 
<button>TeXLive.net</button> o <button>Overleaf</button> 
sotto al codice!

<p
  class="hint">Ti suggeriamo di provare i servizi 
  on-line anche se hai configurato LaTeX localmente: 
  è una buona occasione per vedere come funzionano 
  le due cose.</p>

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Ciao, mondo!

Questo è il mio primo documento.

\end{document}
```

Salva le modifiche e trasformalo in un documento PDF. 
Se stai lavorando con un'installazione locale di TeX, 
l'esatto pulsante da premere per comporre il codice 
dipende dall'editor che hai scelto. 
Al termine della composizione, dovresti ottenere 
un file PDF che contiene il testo qui sopra _più_ 
un numero di pagina: LaTeX lo aggiunge automaticamente.

Visualizza il risultato `primo.pdf` con il tuo 
visualizzatore di PDF preferito.
Non male, complimenti!

Se vuoi un risultato in HTML anziché in PDF, la pagina
[Aiuto](./help) ti dice come fare.

## Cosa fare con gli errori

Gli errori capitano a tutti.
Innanzitutto, verifica che ogni riga nel tuo file 
corrisponda _esattamente_ al testo nell'esempio qui sopra.
A volte, modifiche apparentemente esigue al sorgente  
producono cambiamenti sensibili nel risultato, compreso 
l'arresto della composizione.
Se vedi che tutto è bloccato, prova a cancellare il 
documento e a copiare nuovamente il codice dall'esempio.

Se la composizione si arresta mostrando un messaggio
che termina con con un punto di domanda, puoi
uscirne dando `x` e `Invio`.

I messaggi di errore di LaTeX cercano di essere utili, 
ma non sono dello stesso genere dei messaggi dei 
comuni elaboratori di testo.
In alcuni editor è anche difficile vedere il testo 
'completo' di un errore, che può nascondere i 
dettagli chiave per risolvere il problema.

LaTeX crea sempre un registro di ciò che sta facendo: 
è un file di testo con estensione `.log`.
Potrai sempre vedere i messaggi di errore completi lì 
e, se hai un problema, gli esperti di LaTeX spesso ti 
chiederanno una copia di questo file.

<p
  class="hint">Puoi saperne di più su come gestire gli errori
  nella <a href="./lesson-15">lezione 15</a>.</p>

## Che cos'hai imparato finora

Il primo documento ti ha mostrato le basi del lavoro
con LaTeX.
I documenti LaTeX sono un misto di testo e comandi.
I comandi incominciano con una barra rovescia (`\`)
e a volte hanno un argomento _obbligatorio_ tra 
parentesi graffe (`{...}`) o, talvolta, argomenti 
_facoltativi_ tra parentesi quadre (`[...]`).
Infine, dopo aver lanciato LaTeX sul codice sorgente, 
otterrai il risultato composto in forma di file PDF .

Ogni documento LaTeX _deve_ contenere la stringa
`\begin{document}` (che indica l'inizio del documento) 
e una stringa corrispondente `\end{document}` 
(che ne indica la fine).
Tra questi due comandi si trova il *corpo del documento*, 
cioè tutti i contenuti che LaTeX comporrà.
Nell'esempio qui sopra, il corpo del documento è formato 
da due capoversi (in LaTeX, per separare i capoversi
basta lasciare una o più righe vuote tra l'uno e l'altro).
La parte prima di `\begin{document}` si chiama 
*preambolo del documento* e contiene il codice per 
impostare l'aspetto del documento.
Il comando `\usepackage`, descritto in una 
[lezione successiva](lesson-06), è adoperato nella 
maggior parte degli esempi di questo sito per impostare 
la codifica del font.

La sintassi di LaTeX prevede altre coppie del tipo 
`\begin{...}` e `\end{...}`: vengono chiamate *ambienti*.
Queste coppie di comandi vanno abbinate con grande cura,
in modo che per ogni `\begin{x}` ci sia un `\end{x}`.
Se li annidi (cioè se inserisci un ambiente all'interno
di un altro ambiente), allora devi verificare che _ogni_ 
`\end{y} ... \end{x}` corrisponda a `\begin{x} ... \begin{y}`: 
in altre parole, le dichiarazioni di apertura e chiusura
degli ambienti _debbono_ corrispondersi nel medesimo ordine.

LaTeX permette di aggiungere al codice dei _commenti_, cioè
appunti, promemoria e altro testo utile, per esempio, per 
descrivere un frammento di codice particolarmente complesso,
o a qualunque altro scopo.
I commenti si scrivono facendoli precedere dal segno di 
percento `%`.
Vediamoli all'opera per descrivere la struttura dell'esempio
seguente:

```latex
\documentclass[a4paper,12pt]{article} % Dichiarazione di classe con alcune opzioni
% Select T1 font encoding: suitable for Western European Latin scripts
\usepackage[T1]{fontenc}
% Commento nel preambolo

\begin{document}

% Commento nel corpo del documento
Ecco un            semplice
documento\footnote{con una nota nel piè di pagina.}

Questo è   un nuovo capoverso.

\end{document}
```

L'esempio è composto di due capoversi, 
come si vede dalla riga vuota tra le due frasi. 
Osserva inoltre (nel PDF composto) che più spazi 
consecutivi vengono considerati _un solo_ spazio.

Talvolta potrebbe servirti uno spazio ‘indivisibile’ 
che non si perda tra una riga e l'altra: in LaTeX 
si ottiene ‘legando’ insieme due parole con `~`.
La cosa tornerà particolarmente utile quando più avanti
nel corso impareremo come si creano i riferimenti 
incrociati.

## Caratteri speciali

Probabilmente hai notato che i tre caratteri 
`\`, `{` e `}` hanno per LaTeX un significato 
speciale.
La barra rovescia `\` incomincia un _comando_, 
cioè un'istruzione impartita a LaTeX. 
Le parentesi graffe `{` e `}` vengono adoperate per 
racchiudere gli _argomenti obbligatori_, cioè 
informazioni richieste obbligatoriamente dai comandi.

Ci sono altri caratteri con un significato speciale: 
abbiamo appena visto che `~` indica uno spazio 
‘indivisibile’, per esempio. 
Quasi tutti questi caratteri sono _molto_
inconsueti in un testo normale, motivo per cui 
sono stati scelti per veicolare significati 
particolari.
Se hai bisogno di scrivere uno di questi caratteri
come testo normale, puoi scoprire come fare nella 
[pagina di approfondimento di questa lezione](more-03).

## Esercizio

Sperimenta l'editor e il sistema di composizione 
on-line; premi il pulsante per comporre l'esempio, 
poi modificalo direttamente sulla pagina e 
componilo nuovamente.

Aggiungi del testo al tuo primo documento, componilo 
e osserva i cambiamenti nel PDF. 
Scrivi ulteriori capoversi e aggiungi spazi variabili. 
Esplora le funzionalità del tuo editor; clicca su un 
punto del sorgente e trova il modo di andare alla 
riga corrispondente del PDF. 
Inserisci alcuni spazi indivisibili e osserva come 
influenzano l'interruzione delle righe.
