---
layout: "lesson"
lang: "it"
title: "Organizzare documenti lunghi"
description: "Questa lezione insegna a suddividere i tuoi sorgenti in file più brevi e maneggevoli, e mostra come questo può facilitare e rendere più rapida la creazione di un documento lungo."
toc-anchor-text: "Organizzare i sorgenti"
toc-description: "Suddividere i sorgenti in modo controllato."
---

# Organizzare documenti lunghi

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span
  class="summary">Questa lezione insegna come LaTeX permette di suddividere i tuoi sorgenti in file più brevi e maneggevoli, e come questo può facilitare e rendere più rapida la creazione di un documento lungo.</span>

Quando stai scrivendo un documento piuttosto lungo, probabilmente vorrai 
suddividere il sorgente in più file. 
Per esempio, è prassi molto comune avere un file 'principale' (o 'root') 
e un file sorgente per ciascun capitolo (per un libro o una tesi) 
o per ciascuna sezione significativa (per un lungo articolo).

## Organizzare i tuoi sorgenti

LaTeX ci permette di suddividere i sorgenti in modo controllato. 
Ci sono due comandi importanti al riguardo, `\input` e `\include`. 
Possiamo usare `\input` per far funzionare un file ‘come se fosse 
stato digitato qui’, quindi può essere adoperato (fondamentalmente) 
per qualunque materiale. 
Il comando `\include` funziona solo con i capitoli: incomincia una 
nuova pagina e apporta alcune modifiche interne. 
Ma ha un grande vantaggio: ci permette di selezionare i capitoli 
da includere, così, anziché lavorare sempre sull'intero documento,
puoi ‘lavorarne’ solo una parte alla volta.

Un documento piuttosto lungo potrebbe quindi avere un aspetto simile al 
seguente:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{Un libro}
\author{A.U.~Tore \and A.U.~Trice}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  frontespizio,
%  capitolo1,
  capitolo2,
%  appendice
  }
}
{
% All'inizio devi scrivere un documento completo
% per generare tutti i file ausiliari
}

\begin{document}
\frontmatter
\include{frontespizio}

% =========================
\mainmatter
\include{capitolo1}
\include{capitolo2}
\appendix
\include{appendice}

% ========================
\backmatter
\printbibliography
\newpage
\input{copertina-posteriore}
\end{document}
```
<!-- {% endraw %} -->

Di seguito esamineremo i vari aspetti di questo file. 
(I vari file di supporto si trovano alla fine di questa pagina.)

## Il metodo di `\input`

Il comando `\input` va bene per parti di un file lungo che _non_ suddiviso
in capitoli. 
Nell'esempio, lo abbiamo adoperato per separare la copertina anteriore e 
quella posteriore, mantenendo il file principale breve e chiaro, e questo 
significa anche che potremo riutilizzare le copertine in un altro documento. 
L'abbiamo adoperato anche per le sezioni del tipo ‘non capitolo’ all'inizio 
del nostro ‘libro’, come la prefazione. 
Di nuovo, questo serve a mantenere chiaro il file principale.

## Il metodo di `\include` e `\includeonly`

Il comando `\include` va bene per i capitoli, quindi lo abbiamo adoperato 
per ogni capitolo completo; fa incominciare un capitolo sempre 
su una pagina nuova. 
Abbiamo selezionato quali capitoli verranno effettivamente composti con 
`\includeonly`, che come puoi vedere prende come argomento una lista di 
nomi di file separati da virgole. 
Quando adoperi `\includeonly`, puoi ridurre il tempo necessario per la 
composizione e produrre un PDF 'selettivo' per la correzione di bozze. 
Inoltre, il vantaggio chiave di `\includeonly` è che LaTeX adopererà tutte 
le informazioni sui riferimenti incrociati dai file `.aux` di altri file inclusi.

## Generazione dell'indice

Il comando `\tableofcontents` adopera le informazioni dai comandi di 
sezionamento per popolare l'indice. 
Ha il proprio file ausiliario, con estensione `.toc`, quindi potrebbe 
essere necessario eseguire LaTeX due volte per risolvere le informazioni. 
La tabella viene generata automaticamente dai titoli delle sezioni. 
Esistono comandi simili per `\listoffigures` e `\listoftables`, 
che lavorano a partire dalle didascalie dell'ambiente `float` e 
usano rispettivamente file con estensione `.lof` e `.lot`.

## Suddivisione del documento in parti

I comandi `\frontmatter`, `\mainmatter` e `\backmatter` agiscono sulla 
formattazione. 
Per esempio, `\frontmatter` cambia la numerazione delle pagine in numeri 
romani. 
Il comando `\appendix` cambia la numerazione in `A`, `B`, ecetera. 
Così, per esempio, il titolo del primo capitolo dopo `\appendix` 
sarà `Appendice A`.

## Esercizi

Sperimenta con la struttura di base del documento d'esempio, prova 
ad aggiungere e rimuovere voci per `\includeonly` e osserva l'effetto.

Aggiungi alcuni ambienti galleggianti e genera un elenco di immagini e
un elenco di tabelle. 
Se adoperi una distribuzione locale di LaTeX, vedi quante esecuzioni 
di LaTeX servono? 
(I sistemi online rieseguono LaTeX ‘dietro le quinte’, quindi le esecuzioni 
aggiuntive richieste non sono così ovvie.)

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{copertina-anteriore}
\maketitle
\input{dedica}
\input{copyright}
\tableofcontents
\input{prefazione}
```

#### prefazione.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Prefazione}
Testo della prefazione. Vedi \cite{doody}.
```
<!-- {% endraw %} -->

#### capitolo1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introduzione}
Testo del primo capitolo.
```
<!-- {% endraw %} -->

#### capitolo2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Qualcosa}
Testo del secondo capitolo.
```
<!-- {% endraw %} -->

####  appendice.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendice}
Testo della prima appendice.
```
<!-- {% endraw %} -->

#### copertina-anteriore.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
Copertina anteriore
\end{center}
```
<!-- {% endraw %} -->

#### dedica.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
A \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2023 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### copertina-posteriore.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
Copertina posteriore
\end{center}
```
<!-- {% endraw %} -->

----
