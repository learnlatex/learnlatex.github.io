---
layout: "lesson"
lang: "it"
title: "Organizzare documenti lunghi"
description: "Questa lezione insegna a suddividere i tuoi sorgenti in file più brevi e maneggevoli, e mostra come questa pratica può facilitare e rendere più rapida la creazione di un documento lungo."
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
  class="summary">Questa lezione insegna come LaTeX permette di suddividere i tuoi sorgenti in file più brevi e maneggevoli, e come questa pratica può facilitare e rendere più rapida la creazione di un documento lungo.</span>

Quando stai scrivendo un documento piuttosto 
lungo, probabilmente troverai comodo spezzare 
il sorgente in più file. 
Per esempio, è prassi molto comune avere un file 
'principale' (o 'root') e un file per ciascun 
capitolo (di un libro o di una tesi, per esempio) 
o per ciascuna sezione significativa (di un 
articolo più lungo del normale, per esempio).

## Organizzare i tuoi sorgenti

LaTeX permette di suddividere i sorgenti in modo 
controllato. 
I comandi importanti da conoscere a questo proposito
sono due: `\input` e `\include`. 
Il comando `\input` chiede a LaTeX di considerare 
il contenuto di un file ‘come se fosse stato 
digitato qui’, quindi può essere adoperato 
(in linea di principio) per includere nel documento 
materiale di qualunque tipo. 
Il comando `\include`, invece, funziona solo con 
i capitoli: infatti, stampa il proprio contenuto
sempre in una pagina nuova e apporta alcune 
modifiche interne. 
Ma presenta un grande vantaggio: permette di 
selezionare i capitoli da comporre, così, 
anziché lavorare sempre sull'intero documento, 
puoi concentrarti su una parte alla volta.

Un documento lungo potrebbe quindi avere 
un aspetto simile al seguente:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{A Sample Book}
\author{John Doe \and Joe Bloggs}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Do a full document initially to generate
% all the aux files
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

Di seguito esamineremo i diversi elementi di 
questo file. 
(I vari file di supporto si trovano alla fine 
di questa pagina.)

## Il metodo di `\input`

Il comando `\input` va bene per isolare parti di 
un file lungo _non_ suddiviso in capitoli. 
Nell'esempio, lo abbiamo adoperato per 
la copertina anteriore e quella posteriore, 
mantenendo il file principale asciutto e chiaro. 
Ciò significa anche che potremo riutilizzare 
le stesse copertine in un altro documento,
se vogliamo. 
L'abbiamo adoperato anche per le sezioni del tipo 
‘non capitolo’ all'inizio del nostro libro, 
come la prefazione. 
Di nuovo, questo accorgimento snellisce
il file principale, evidenziandone la struttura.

## Il metodo di `\include` e `\includeonly`

Dato che il comando `\include` va bene 
per i capitoli, lo abbiamo adoperato per ogni 
capitolo completo. 
Il comando fa incominciare un capitolo sempre 
su una pagina nuova. 
Come avrai osservato, abbiamo selezionato 
quali capitoli verranno 
effettivamente composti scrivendone i nomi,
separati con la virgola,
nell'argomento del comando `\includeonly`. 
Questo comando presenta i seguenti vantaggi sostanziali:
- permette di ridurre il tempo necessario per la 
composizione e di produrre un PDF 'selettivo' 
(utile per la correzione delle bozze, per esempio);
- risolve i riferimenti incrociati, anche se rimandano a file non compresi nella composizione;
- numera correttamente le pagine.

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
