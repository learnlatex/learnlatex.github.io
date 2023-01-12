---
layout: "lesson"
lang: "it"
title: "Lavorare con LaTeX"
description: "Questa lezione spiega che cos'è un sistema TeX e quali sono i sistemi più diffusi, elenca alcuni tra gli editor di testi normalmente adoperati con LaTeX e i sistemi on-line che integrano un editor."
toc-anchor-text: "Lavorare con LaTeX"
toc-description: "I sistemi TeX e gli editor di testi per LaTeX."
---

# Lavorare con LaTeX

<span
  class="summary">Questa lezione spiega che cos'è 
  un sistema TeX e quali sono i sistemi più diffusi, 
  elenca alcuni tra gli editor di testi normalmente 
  adoperati con LaTeX e i sistemi on-line che integrano 
  un editor.</span>

A differenza di molti programmi per computer, LaTeX non 
è una sola applicazione che contiene in sé ‘tutto ciò che
serve’, ma è una serie di programmi separati
che lavorano insieme.
Le ‘cose’ di cui hai effettivamente bisogno sono due:

- un _sistema TeX_
- un _editor di testi_ (ti consigliamo un editor specifico per LaTeX)

## Sistemi LaTeX

Il fulcro del lavoro con LaTeX è avere a disposizione 
un _sistema TeX_. 
Un sistema TeX è una serie di programmi e file che 
lavorano 'dietro le quinte' e servono a far 
funzionare LaTeX, ma dei quali non dovrai preoccuparti:
quasi mai, infatti, ti verrà chiesto di 
‘eseguirli’ direttamente.

I principali sistemi TeX oggi disponibili 
sono due: [MiKTeX](https://miktex.org/) 
e [TeX Live](https://tug.org/texlive), 
entrambi disponibili per Windows, macOS e Linux.
MiKTeX è fortemente votato a Windows;
gli utenti di macOS di solito installano TeX Live
in una versione personalizzata per Mac nota come
[MacTeX](http://www.tug.org/mactex/).
Ogni sistema 
[presenta vantaggi particolari](https://tex.stackexchange.com/questions/20036): 
per saperne un po' di più, ti consigliamo
di dare un'occhiata ai [consigli pubblicati dal LaTeX
Project](https://www.latex-project.org/get/).

Dal momento che TeX Live è disponibile per tutte le 
più comuni piattaforme e presenta alcuni vantaggi 
in termini di prestazioni, se non sei sicuro di quale 
sistema TeX installare, ti consigliamo di scegliere
senz'altro TeX Live.

## Editor di testi

I file di LaTeX sono file di puro testo, perciò 
puoi modificarli con un editor di testi qualunque.
Tuttavia, è più conveniente adoperarne uno pensato 
per lavorare con LaTeX, perché di solito mette a
disposizione funzionalità specifiche come la 
composizione dei file con un clic, un visualizzatore 
di PDF integrato e l'evidenziazione della sintassi.
Una funzionalità veramente utile presente in tutti 
i moderni editor per LaTeX è offerta da SyncTeX, 
cioè la possibilità di fare clic su un punto del 
sorgente e andare direttamente al corrispondente 
punto del PDF, e viceversa.

Esistono molti più editor per LaTeX di quanti possiamo 
sperare di elencarne qui: ce n'è un 
[elenco completo su 
StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
[TeXworks](https://tug.org/texworks), un editor
di base ma adatto a chi muove i primi passi, 
è incluso in TeX Live e in MiKTeX su Windows 
e Linux; [TeXShop](https://pages.uoregon.edu/koch/texshop/)
è incluso in MacTeX.

<p 
  class="hint">Qualunque sia l'editor da te scelto, 
  ti consigliamo di installarlo <i>dopo</i> 
  aver installato il sistema TeX, 
  in modo che l'editor riesca a ‘trovarlo’ e ad 
  autoimpostarsi correttamente.</p>

## Lavorare on-line

Esistono diversi potenti siti on-line grazie 
ai quali puoi evitare di installare nel tuo
computer un sistema TeX e un editor per LaTeX.
Questi siti ti permettono di modificare i file 
direttamente nella pagina web, e poi eseguono 
LaTeX dietro le quinte e visualizzano il PDF 
composto.

Alcuni di essi combinano LaTeX con funzionalità 
simili a quelle di un elaboratore di testi, 
mentre altri sono più votati 
alla visualizzazione del codice LaTeX e perciò 
sono più simili a un'installazione locale.

Ci sono sistemi on-line che ti permettono di eseguire 
LaTeX senza doverti autenticare: ne stiamo adoperando uno,
[TeXLive.net](https://texlive.net), con il quale puoi
modificare e verificare gli esempi delle lezioni. 
Per lavorare a progetti più completi, tuttavia, 
i migliori sistemi on-line ti chiedono di registrarti 
prima di poterli adoperare.
Il vantaggio è duplice: puoi salvare il tuo lavoro ed 
eviti di sovraccaricare i siti.

Se vuoi provare un servizio appartenente alla seconda
categoria, puoi modificare e comporre i nostri codici
con [Overleaf](https://www.overleaf.com), uno dei
principali siti per lavorare con LaTeX on-line
(trovi il pulsante relativo sotto a ogni esempio). 
Ce ne sono altri, naturalmente, come per esempio
[Papeeria](https://papeeria.com/).

## Lavoro collaborativo

Se hai intenzione di inviare i tuoi sorgenti LaTeX a destinatari
che li elaborano, come editori, organizzatori di conferenze o
server di prestampa (come arXiv, per esempio) 
If you are planning to send your LaTeX sources to destinations which process
them, such as publishers, conference organisers or pre-print servers
(e.g. arXiv), dovresti controllare quali restrizioni impongono.

## Esercizio

Preparati con un'installazione di LaTeX locale _o_ un account su 
un servizio LaTeX online. Nel primo caso dovrai procurarti anche
un editor: ti raccomandiamo di incominciare con TeXworks o TeXShop
(vedi sopra) e di dare un'occhiata ad altri editor solo quando hai
capito qual è il modo migliore di lavorare con LaTeX _per te_.

Sarai in grado di [svolgere tutti gli altri nostri esercizi direttamente nel tuo browser](help.md), 
ma dato che vogliamo aiutarti a lavorare con documenti reali, ora è
il momento giusto per prepararti.
