---
layout: "lesson"
lang: "it"
title: "Impostare l'aspetto generale del documento"
description: "Questa lezione spiega che cos'è una classe di documento e in che modo può influire sull'aspetto di un documento. Inoltre, elenca le principali classi disponibili in una distribuzione di TeX."
toc-anchor-text: "Classi di documento"
toc-description: "Impostare l'aspetto generale del documento."
---

# Classi di documento

<span
  class="summary">Questa lezione spiega che cos'è una classe di 
  documento e in che modo può influire sull'aspetto generale di 
  un documento. Inoltre, elenca le principali classi disponibili 
  in una distribuzione di TeX.</span>

Forse hai già notato che tutti i documenti LaTeX creati 
fino a qui incominciano con la riga `\documentclass`, 
e che `\documentclass{article}` è stata di gran lunga 
la scelta prevalente. 
(Nella [lezione precente](lesson-04), tuttavia, abbiamo 
avuto bisogno di nominare `\documentclass{report}` per 
introdurre il comando `\chapter`.) 
Questa riga, chiamata in gergo _dichiarazione di classe_, 
è richiesta in _tutti_ i documenti LaTeX, 
ed è (quasi) sempre il primo comando che si dovrebbe dare
nel preambolo.

## Che cosa ‘fa’ una classe di documento

La classe di documento imposta la presentazione generale 
del documento. Per esempio, si occupa di quanto segue:

- dell'aspetto: margini, font, spaziature, eccetera
- di determinare se ci possono essere i capitoli oppure no
- di determinare se il titolo deve stare in una pagina a sé oppure no

Più in generale, le classi di documento possono 
definire nuovi comandi rispetto a quelli previsti da LaTeX 
standard: la cosa è particolarmente vera per le classi 
molto specialistiche, come quelle destinate alla 
creazione di videopresentazioni o lettere.

Nella riga della dichiarazione di classe puoi impostare 
anche le _opzioni globali_, cioè parametri che si applicano 
all'intero documento e si scrivono tra parentesi quadre: 
`\documentclass[<opzioni>]{<classe>}`. 
Questa sintassi, con le informazioni facoltative
tra parentesi quadre, è comune a numerosi comandi 
di LaTeX.

## Le classi standard

LaTeX è corredato di una serie di classi standard, 
il cui aspetto, abbastanza simile nel complesso, 
si differenzia per gli elementi seguenti:

- `article`  
  per brevi documenti senza capitoli
- `report`  
  per documenti più lunghi con capitoli, 
  pensati per la stampa su un solo lato del foglio
- `book`  
  per documenti più lunghi con capitoli, pensati per 
  la stampa in fronte e retro, con
  materiale iniziale e finale (come una prefazione e un
  indice, per esempio)
- `letter`  
  per la corrispondenza, senza suddivisione in sezioni
- `slides`  
  per videopresentazioni (ma vedi sotto)

Le classi `article`, `report` e `book` mettono 
a disposizione comandi molto simili,
come quelli che abbiamo già visto. 
Quando si scrive una `letter`, invece, i comandi 
sono un po' diversi:

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}

\begin{document}

\begin{letter}{Un destinatario\\Una strada\\Una città}

\opening{Caro signore, cara signora}

Qui ci va il testo della lettera.

\closing{Cordialmente,}

\end{letter}

\end{document}
```

Osserva come le righe dell'indirizzo sono separate con `\\`; 
i modi per interrompere una riga verranno descritti 
[un po' più avanti](lesson-11). 
Osserva anche come `letter` richieda comandi speciali 
e un nuovo ambiente (`letter`) per ogni lettera.

Le classi standard `article`, `report` e `book` 
prendono comunemente due opzioni: `10pt`, `11pt` 
e `12pt`, per cambiare il corpo del font; 
e `twocolumn`, per comporre il documento su due 
colonne.

## Classi più ricche di funzioni

Le classi principali sono molto stabili, il che 
le rende anche piuttosto conservative sia nell'aspetto, 
sia nella varietà di comandi disponibili.
Nel tempo, sono state scritte classi più potenti, che 
permettono di modificare l'aspetto del documento senza 
dover fare le cose a mano
(argomento di cui parleremo [un po' più avanti](lesson-11)).

L'American Mathematical Society fornisce le classi
`amsart` e `amsbook`, varianti delle classi standard 
con un aspetto più tradizionale, simile a quello 
adoperato nelle riviste di matematica.

Le due classi ‘estese’ più grandi e popolari sono 
la suite KOMA-Script e la classe `memoir`.
KOMA-Script è un insieme di classi ‘parallele’ 
alle classi standard: `scrartcl`, `scrreprt`, 
`scrbook` e `scrlttr2`, mentre la classe `memoir`,
unica, è più simile a un'estensione di `book`.

Queste classi estese possono essere personalizzate 
in molti modi, che esploreremo un po' in un esercizio. 
Se ti stai chiedendo come facciamo a conoscerli, 
lo scoprirai da te [in una lezione successiva](lezione-16), 
ma nulla ti vieta di darci un'occhiata anche adesso!

## Videopresentazioni

La classe `slides` è stata sviluppata verso la metà degli 
anni '80 del Novecento per produrre lucidi da proiezione, 
e quindi non offre alcuna funzionalità per creare
videopresentazioni interattive basate su file PDF.
Esistono però classi più recenti che fanno esattamente 
questo: siccome sono in qualche modo ‘specialistiche’ 
rispetto ai documenti LaTeX di carattere più generale, 
le abbiamo [descritte nella lezione di approfondimento](more-05).

## Esercizi

Fa' delle prove con le classi standard, quelle della suite 
KOMA e `memoir`, e osserva come cambia l'aspetto del documento.

```latex
\documentclass{article} % Cambia la classe qui
\usepackage[T1]{fontenc}

\begin{document}

\section{Introduzione}
Questo è un documento d'esempio con del testo
di prova\footnote{e una nota}. Questo capoverso 
è piuttosto lungo, dal momento che vogliamo 
mostrare l'effetto della composizione su due 
colonne.

\end{document}
```

Aggiungi l'opzione di classe `twocolumn` e osserva come cambia 
l'aspetto del documento.

Nell'esempio precedente cambia il comando `\section` 
in `\chapter` e scopri che effetto hanno le opzioni 
di classe seguenti quando adoperi la classe `scrreprt`:

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
