---
layout: "lesson"
lang: "it"
title: "Lavorare con LaTeX"
description: "Questa lezione spiega che cos'è un sistema TeX e quali di essi sono i più comuni, elenca alcuni tra gli editor di testi normalmente adoperati con LaTeX e i sistemi online che integrano un editor."
toc-anchor-text: "Lavorare con LaTeX"
toc-description: "I sistemi TeX e gli editor di testi per LaTeX."
---

# Lavorare con LaTeX

<span
  class="summary">Questa lezione spiega che cos'è un sistema TeX e quali di essi sono i più comuni, elenca alcuni tra gli editor di testi normalmente adoperati con LaTeX e i sistemi online che integrano un editor.</span>

A differenza di molti programmi per computer, LaTeX non è una singola applicazione 
che contiene 'tutto' in sé. Al contrario, ci sono programmi separati che lavorano 
insieme. Possiamo suddividerli nelle due 'cose' di cui hai effettivamente bisogno:

- un _sistema TeX_
- un editor di testi (spesso uno specifico per LaTeX)

## Sistemi LaTeX

Il fulcro del lavoro con LaTeX è avere a disposizione un _sistema TeX_. 
Un sistema TeX è una serie di programmi e file 'dietro le quinte' necessari 
per far funzionare LaTeX, ma che non dovrai quasi mai 'eseguire' direttamente.

I principali sistemi TeX oggi disponibili sono due:
[MiKTeX](https://miktex.org/) e [TeX Live](https://tug.org/texlive). 
Di entrambi esistono versioni per Windows, macOS e Linux.
MiKTeX è fortemente votato a Windows;
su macOS, TeX Live is bundled into a larger collection chiamata 
[MacTeX](http://www.tug.org/mactex/).
There are [advantages to each
system](https://tex.stackexchange.com/questions/20036), and you might want to
look at [some more advice from the LaTeX
Project](https://www.latex-project.org/get/).

Dal momento che TeX Live è disponibile per tutte le comuni piattaforme e presenta 
alcuni vantaggi in termini di prestazioni, se non sei sicuro di quale sistema TeX
installare, ti consigliamo di scegliere TeX Live.

## Editor di testi

I file di LaTeX sono semplicemente puro testo, perciò puoi modificarli con un 
qualunque editor di testi.
Tuttavia, è più conveniente adoperare un editor pensato per lavorare con LaTeX,
dato che fornisce funzionalità come la composizione dei file con un clic, 
un visualizzatore di PDF integrato e l'evidenziazione della sintassi.
Una funzionalità veramente utile presente in tutti i moderni editor per LaTeX
è offerta da SyncTeX, cioè la possibilità di fare clic su un punto del sorgente 
e andare direttamente al corrispondente punto del PDF, e viceversa.

Esistono molti più editor per LaTeX di quanti possiamo sperare di elencarne qui:
ce n'è un [elenco completo su
StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Un editor di base, [TeXworks](https://tug.org/texworks), è incluso nella TeX Live
e in MiKTeX su Windows e Linux, e [TeXShop](https://pages.uoregon.edu/koch/texshop/)
è incluso in MacTeX.

<p 
  class="hint">Qualunque sia l'editor da te scelto, ti consigliamo di installarlo <i>dopo</i> il sistema TeX, in modo che l'editor riesca a 'trovarlo' e a impostarsi correttamente.</p>

## Lavorare online

Esistono diversi potenti siti online che ti permettono di evitare 
la necessità di installare un sistema TeX e un editor per LaTeX. 
Questi siti funzionano permettendoti di modificare i tuoi file 
direttamente nella pagina web, poi eseguono LaTeX dietro le quinte 
e visualizzano il PDF prodotto.

Alcuni di questi siti combinano LaTeX con funzionalità simili a 
quelle di un elaboratore di testo, mentre altri sono più focalizzati 
sul permetterti di vedere il codice LaTeX e quindi sono più vicini 
ad avere un'installazione locale.

Ci sono sistemi che ti permettono di eseguire LaTeX senza 
dover effettuare l'accesso, e ne stiamo adoperando uno,
[TeXLive.net](https://texlive.net), per permetterti di
modificare e verificare gli esempi che ti diamo. 
Per un lavoro più completo, i migliori sistemi online 
ti chiedono di registrarti prima di poterli adoperare.
La cosa ti permette di salvare il tuo lavoro, ma evita 
anche di sovraccaricare i siti.

Abbiamo impostato i collegamenti per permetterti di modificare
i nostri esempi con [Overleaf](https://www.overleaf.com), uno dei
principali siti per lavorare con LaTeX online. 
Ce ne sono altri, naturalmente:
[Papeeria](https://papeeria.com/) ne è un esempio.

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
