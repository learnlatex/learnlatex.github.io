---
layout: "lesson"
lang: "it"
title: "Di più su: Estendere le funzionalità di LaTeX mediante pacchetti e definizioni"
description: "Questa lezione fornisce maggiori dettagli sul caricamento dei pacchetti, descrive il pacchetto babel per selezionare le lingue del documento e approfondisce l'argomento dei comandi personali."
toc-anchor-text: "Di più su: Estendere le funzionalità di LaTeX mediante pacchetti e definizioni"
---

## Loading multiple packages

Il comando `\usepackage` accetta un elenco di nomi di pacchetti 
separati con la virgola, così che se ne possono caricare più d'uno
in una volta sola: per esempio, `\usepackage{color,graphicx}`. 
In questo caso, tieni presente che le opzioni passate 
a un pacchetto verranno applicate a _tutti_ i pacchetti 
nell'elenco, cosa che potrebbe essere non sempre desiderabile. 
Inoltre, caricarli separatamente permette di commentarli
più facilmente: quindi, continueremo a caricare ogni 
pacchetto su una riga a sé.

## Il pacchetto `babel`

[Nella lezione principale](lesson-06) abbiamo descritto il pacchetto
`babel` come un modo per scegliere diversi schemi di sillabazione.
A seconda della lingua o delle lingue in cui si prevede di
scrivere, tuttavia, il pacchetto fa molto più di questo.
Con il tedesco, per esempio, fornisce alcune scorciatoie per 
generare trattini ‘morbidi’ e anche un modo per digitare 
rapidamente la dieresi senza bisogno di una tastiera 
tedesca. 
Nota bene, inoltre, come il titolo _Table of Contents_ 
normalmente generato dal comando `\tableofcontents` (in inglese) 
viene cambiato nel corrispondente tedesco _Inhaltsverzeichnis_.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Fa' attenzione: il nome dell'opzione è 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.


\end{document}
```

Altre impostazioni della lingua modificano l'aspetto del testo:
per esempio, la tipografia francese tradizionale prevede uno
spazio prima di alcuni segni di punteggiatura, come `:`,
spazio che LaTeX aggiunge automaticamente caricando `babel`
con l'opzione `french`.

## Opzioni globali

Quando si vuole passare un'opzione a _tutti_ i pacchetti 
caricati, è sufficiente dichiararla tra quelle di 
`\documentclass`: in questo modo, ogni pacchetto può ‘vedere’ 
questa lista di opzioni. 
Quindi, per passare la lingua di un documento a tutti i pacchetti, 
potremmo scrivere:

```latex
\documentclass[ngerman]{article} % Fa' attenzione: il nome dell'opzione è 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## Altre definizioni

Il comando `\newcommand` permette di definire comandi 
con un massimo di 9 argomenti, il primo dei quali può 
essere facoltativo.

Prendendo l'esempio dalla lezione principale, potremmo 
rendere facoltativo il colore, che per impostazione 
predefinita è il blu.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Qualcosa a proposito di \kw{mele} e \kw[red]{arance}.

\end{document}
```

Gli argomenti facoltativi sono racchiusi tra parentesi quadre
`[]` e, se omessi, LaTeX adopera il valore predefinito
specificato nella definizione.

## Il comando `\NewDocumentCommand`

Dall'ottobre 2020 è disponibile un sistema di definizione esteso, 
permesso nelle versioni precedenti di LaTeX dal pacchetto `xparse`, 
che usiamo qui per compatibilità.

Ripetiamo l'esempio precedente, adoperando questa volte 
`\NewDocumentCommand`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Richiesto solo per versioni di LaTeX anteriori a ottobre 2020
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Qualcosa a proposito di \kw{mele} e \kw[red]{arance}.

\end{document}
```

Esattamente come con `\newcommand`, `\NewDocumentCommand` 
accetta il comando che si sta definendo (`\kw`, in questo caso) 
e il corpo della definizione, adoperando per gli argomenti
la sintassi da `#1` a `#9`.
Tuttavia, c'è una differenza nel modo in cui gli argomenti 
vengono specificati.

A differenza di `\newcommand`, dove va indicato solo il numero
degli argomenti, fornendo eventualmente un valore predefinito
per il primo di essi, con `\NewDocumentCommand` ogni argomento 
è specificato da una lettera: quindi, un comando a due argomenti 
va specificato con `{mm}` anziché con `[2]`. 
Questo modo è leggermente più prolisso, ma permette di definire 
comandi di molte più forme differenti.
Qui diamo solo questo semplice esempio, in cui il primo argomento 
è facoltativo, con valore predefinito blu (`O{blue}`) e il secondo 
argomento è obbligatorio (`m`).

