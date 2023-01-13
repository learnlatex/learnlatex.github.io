---
layout: "lesson"
lang: "it"
title: "Estendere LaTeX con pacchetti e definizioni"
description: "Questa lezione mostra come estendere le 
funzionalità di LaTeX per soddisfare le tue esigenze e 
come modificare l'aspetto dei documenti con i pacchetti. 
Inoltre, ti insegna a definire i tuoi comandi personali."
toc-anchor-text: "Estendere LaTeX"
toc-description: "Pacchetti di stile e definizioni di nuovi comandi."
---

# Estendere LaTeX

<span
  class="summary">Questa lezione mostra come estendere le funzionalità di LaTeX per soddisfare esigenze compositive particolari e come modificarne ulteriormente il risultato predefinito con i diversi pacchetti e le definizioni di comandi personali.</span>

Dopo aver dichiarato una classe, nel preambolo del documento 
puoi modificare le funzionalità standard di LaTeX aggiungendo 
uno o più *pacchetti*. I pacchetti possono:

- cambiare il modo in cui certe parti di LaTeX funzionano
- modificare l'aspetto del documento
- aggiungere nuovi comandi a LaTeX

## Modificare il funzionamento di LaTeX

L'utente ha ben poche possibilità di personalizzare 
il 'kernel' (o nucleo) di LaTeX, ma grazie ai pacchetti
aggiuntivi, previsti dalla naturale modularità del 
programma, si possono risolvere alcuni problemi comuni.
Il primo problema in cui ti imbatterai è la selezione 
della lingua del documento, alla quale dovrai adattare 
il comportamento di LaTeX in quanto a sillabazione, 
punteggiatura, stile delle citazioni, uso delle virgolette, 
localizzazione, eccetera.
Lingue diverse hanno regole diverse, perciò è importante dire 
a LaTeX quale (o quali) adoperare. 
Questo aspetto è gestito automaticamente dal pacchetto `babel`.

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

Prova a decommentare la (chiaramente ingannevole) 
riga che carica `babel` con l'opzione per l'italiano 
e osserva il risultato. 
(Nota che le regole di sillabazione predefinite sono quelle 
dell'inglese americano.)

A seconda della lingua impostata, il pacchetto `babel` 
fa molto più che sillabare semplicemente
il testo: se ti servono, ti diamo 
[alcuni dettagli aggiuntivi](more-06).

## Modificare l'aspetto del documento

Spesso è utile sapere come modificare alcuni aspetti 
del documento indipendentemente dalla classe dichiarata,
come i margini della pagina, per incominciare da quelli
più ovvi.
Nell'esempio qui sopra abbiamo caricato il pacchetto 
`geometry`, ma è meglio fare un esempio dedicato 
espressamente alla modifica dei margini (attenzione:
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
Testo del primo paragrafo.

Secondo capoverso.

%-----------------
\subsection{Sottoparagrafo del primo paragrafo}
Testo del sottoparagrafo.

% ================
\section{Secondo paragrafo}
Testo del secondo paragrafo.

\end{document}
```

Ora commenta la riga che carica `geometry` e osserva 
come cambia il documento composto.

## Aggiungere nuove funzionalità

Uno dei punti di forza di LaTeX è la possibilità di 
scegliere tra migliaia di pacchetti, tra i quali quelli 
per la scrittura della matematica, per i collegamenti 
ipertestuali, per funzionalità sofisticate come l'uso 
dei colori, eccetera. 
Nelle lezioni successive vedremo all'opera alcuni tra
i pacchetti più comuni.

## Definire comandi personali

Lavorando con LaTeX, ti potrà succedere di aver bisogno 
di un comando specifico per il tuo documento, o perché 
_quella_ funzionalità che ti serve non è contemplata 
dai pacchetti disponibili, o, più semplicemente,
per inserire più facilmente nel testo un'espressione 
che ricorre con una certa frequenza.

L'esempio seguente mostra come definire un comando che 
stampa il proprio argomento in uno stile specifico 
(il nero corsivo, in questo caso).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\kw[1]{\textbf{\itshape #1}} % definizione del comando \kw

\begin{document}

Qualcosa a proposito di \kw{mele} e \kw{arance}.

\end{document}
```

Nella definizione, `[1]` indica il numero 
degli argomenti del comando 
(uno, in questo caso) e `#1` 
il primo (e unico) argomento che gli viene 
passato (`mele` o `arance`, in questo 
esempio). 
Un comando può prendere fino a nove 
argomenti, ma di solito
è meglio definire comandi a un solo 
argomento, o talvolta
senza del tutto addirittura.


La definizione dei comandi non riduce solo 
la quantità di caratteri da digitare, ma 
cosa più utile, aiuta a separare 
il contenuto dalla forma. 
Se per qualche motivo a un certo punto si 
decide di volere le parole chiave in uno 
stile diverso, invece di modificare tutte 
le loro occorrenze nel documento, 
basterà modificarne la definizione nel 
preambolo. 
Nell'esempio seguente carichiamo il 
pacchetto `xcolor` per 
aggiungere i colori e adoperiamo 
il blu anziché il nero.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{xcolor}

\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Qualcosa a proposito di \kw{mele} e \kw{arance}.

\end{document}
```

Attenzione, però: definire troppi comandi 
o definirne con molti argomenti può rendere 
il file sorgente difficile da leggere, 
perché la sintassi non è familiare.
La possibilità di definire comandi 
_ad hoc_ per un documento, quindi, 
dovrebbe essere sfruttata con parsimonia.

## Esercizi

Prova a scrivere del testo in altre lingue 
europee e osserva come `babel` influisce 
sulla sillabazione: puoi 
trovare del testo a questo scopo su Internet 
e indovinare le opzioni corrette da 
passare al pacchetto.

Prova a modificare i margini impostati 
nell'esempio con `geometry`. 
Puoi impostare
separatamente i singoli margini `top`, 
`bottom`, `left` e `right` 
dichiarando le opzioni in un elenco e 
separandole con la virgola.

Prova a caricare il pacchetto `lipsum` 
e aggiungi al tuo documento il comando 
`\lipsum`. 
Riesci a indovinare perché questo pacchetto 
è utile per scrivere esempi?

Prova a modificare la definizione di `\kw` per ottenere uno stile diverso.
