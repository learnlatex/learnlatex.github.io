---
layout: "lesson"
lang: "it"
title: "Estendere LaTeX mediante pacchetti e definizioni"
description: "Questa lezione mostra come estendere le funzionalità di LaTeX per soddisfare le tue esigenze e come modificare l'aspetto dei documenti mediante diversi pacchetti, e ti mostra come puoi definire i tuoi comandi personali."
toc-anchor-text: "Estendere LaTeX"
toc-description: "Adoperare i pacchetti e le definizioni."
---

# Estendere LaTeX

<span
  class="summary">Questa lezione mostra come estendere le funzionalità di LaTeX per soddisfare esigenze compositive particolari e come modificarne ulteriormente l'aspetto con i diversi pacchetti e le definizioni di comandi personali.</span>

Dopo aver dichiarato una classe, nel preambolo del documento 
puoi modificare le funzionalità standard di LaTeX aggiungendo 
uno o più *pacchetti*. I pacchetti possono:

- cambiare il modo in cui certe parti di LaTeX funzionano
- aggiungere nuovi comandi a LaTeX
- cambiare l'aspetto del documento

## Modificare il funzionamento di LaTeX

L'utente ha ben poche possibilità di personalizzare 
il 'kernel' (o nucleo) di LaTeX, ma grazie ai pacchetti
aggiuntivi, previsti dalla naturale 
modularità del programma, si possono risolvere alcuni
problemi comuni.
Il primo problema che ti troverai davanti è dato dalla lingua
del documento, alla quale dovrai adattare il comportamento di LaTeX 
per quanto riguarda sillabazione, punteggiatura, 
citazioni, uso delle virgolette, localizzazione, eccetera.
Lingue diverse hanno regole diverse, perciò è importante dire 
a LaTeX quale (o quali) adoperare. 
Questo aspetto è gestito dal pacchetto `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[italian]{babel}

\usepackage[width = 6cm]{geometry} % Per ottenere cesure a fine riga

\begin{document}

Questo è un bel po' di testo riempitivo che dimostrerà come LaTeX sillaba 
il materiale e che sarà in grado di darci almeno un punto di sillabazione.
Questo è un bel po' di testo riempitivo che dimostrerà come LaTeX sillaba 
il materiale e che sarà in grado di darci almeno un punto di sillabazione.

\end{document}
```

Prova a decommentare la riga (chiaramente ingannevole) che carica `babel` 
con l'opzione per l'italiano e osserva il risultato. 
(Le regole di sillabazione predefinite sono quelle dell'inglese americano.)

Il pacchetto `babel` fa molto più della semplice sillabazione, a seconda
della lingua caricata; se ti servono, ti diamo 
[alcuni dettagli aggiuntivi](more-06).

## Modificare l'aspetto del documento

Spesso è utile sapere come modificare alcuni aspetti del documento 
indipendentemente dalla classe dichiarata.
Quelli più ovvi sono i margini della pagina.
Nell'esempio qui sopra abbiamo caricato il pacchetto `geometry`,
ma ora ne faremo uno dedicato espressamente ai margini (attenzione:
il PDF composto sarà di più pagine).

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Ehi, mondo!

Questo è il mio primo documento.

% ++++++++++++++++
\chapter{Capitolo Uno}
Introduzione al primo capitolo.

% ================
\section{Titolo del primo paragrafo}
Testo del primo paragrafo

Secondo capoverso.

\subsection{Sottoparagrafo del primo paragrafo}

Testo del sottoparagrafo.

% ================
\section{Secondo paragrafo}

Testo del secondo paragrafo.

\end{document}
```

Ora commenta la riga che carica `geometry` e osserva come cambia il documento composto.

## Aggiungere nuove funzionalità

Uno dei punti di forza di LaTeX è la possibilità di scegliere tra migliaia di 
pacchetti, compresi quelli per la scrittura della matematica, per i collegamenti 
ipertestuali, per funzionalità sofisticate con i colori, eccetera. 
Nelle lezioni successive vedremo alcuni pacchetti più comuni.

## Definire comandi personali

Ti potrà succedere di aver bisogno di un comando specifico per il
tuo documento, o perché _quella_ funzionalità che ti serve non è
contemplata dai pacchetti disponibili, o, più semplicemente,
per inserire più facilmente nel testo un'espressione 
che devi scrivere numerose volte.

L'esempio seguente mostra come definire un comando per stampare 
parole chiave in uno stile specifico (il nero corsivo, in questo
caso).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\kw[1]{\textbf{\itshape #1}} % definizione del comando \kw

\begin{document}

Qualcosa a proposito di \kw{mele} e \kw{arance}.

\end{document}
```

Nella definizione, `[1]` il numero degli argomenti che
prenderà il comando (uno, in questo caso) e `#1` indica 
l'argomento che gli viene passato
(`mele` o `arance`, in questo esempio). 
Un comando può prendere fino a nove argomenti, ma di solito
è meglio definire comandi a un solo argomento, o talvolta
senza del tutto addirittura.


La definizione dei comandi non solo riduce la quantità di
caratteri da digitare. Cosa più utile, aiuta a separare 
il contenuto dalla forma. Se per qualche motivo si decide 
di volere le parole chiave in uno stile diverso, invece di 
modificare tutte le loro occorrenze nell'intero documento, 
basterà modificarne la definizione. 
Nell'esempio seguente carichiamo il pacchetto `xcolor` per 
aggiungere i colori e adoperiamo il blu anziché il nero.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Qualcosa a proposito di \kw{mele} e \kw{arance}.

\end{document}
```
Attenzione, però: definire troppi comandi o definirne con 
numerosi argomenti può rendere il file sorgente difficile
da comprendere, perché la sintassi non è familiare.
La possibilità di definire comandi _ad hoc_ per un documento,
quindi, dovrebbe essere sfruttata con parsimonia.

## Esercizi

Prova a scrivere del testo in altre lingue europee e osserva come `babel`
influisce sulla sillabazione: probabilmente puoi trovare del testo su Internet 
e indovinare le opzioni corrette da passare al pacchetto.

Prova a modificare i margini nell'esempio con `geometry`. Puoi impostare
separatamente i singoli margini `top`, `bottom`, `left` e `right` 
dichiarando le opzioni in un elenco e separandole con la virgola.

Prova a caricare il pacchetto `lipsum` e aggiungi al tuo documento 
il comando `\lipsum`. 
Riesci a indovinare perché questo pacchetto è utile per scrivere
esempi?

Prova a modificare la definizione di `\kw` per ottenere uno stile diverso.
