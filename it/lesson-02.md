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

Il fulcro del lavoro con LaTeX è avere un sistema TeX disponibile. Un sistema TeX è una
serie di programmi e file 'dietro le quinte' necessari per far funzionare LaTeX, ma che
non dovrai quasi mai 'eseguire' direttamente.

I principali sistemi TeX oggi disponibili sono due:
[MiKTeX](https://miktex.org/) e [TeX Live](https://tug.org/texlive). Entrambi
sono disponibili per Windows, macOS e Linux.
MiKTeX è fortemente votato a Windows;
su macOS, TeX Live is bundled into a larger collection chiamata [MacTeX](http://www.tug.org/mactex/).
There are [advantages to each
system](https://tex.stackexchange.com/questions/20036), and you might want to
look at [some more advice from the LaTeX
Project](https://www.latex-project.org/get/).

Dal momento che TeX Live è disponibile per tutte le comuni piattaforme e presenta 
alcuni vantaggi in termini di prestazioni, se non sei sicuro di quale sistema TeX
installare, ti consigliamo di scegliere TeX Live.

## Editor di testi

I file di LaTeX sono semplicemente puro testo, perciò li si può modificare con un 
editor di testi qualunque.
Tuttavia, è più conveniente adoperare un editor pensato per lavorare con LaTeX,
dato che fornisce funzionalità come la composizione dei file con un clic, 
visualizzatori di PDF integrati ed evidenziazione della sintassi.
Una funzionalità veramente utile presente in tutti i moderni editor per LaTeX
è SyncTeX, cioè la possibilità di fare clic su un punto del sorgente e andare 
direttamente al corrispondente punto del PDF, e viceversa.

Esistono molti più editor per LaTeX di quanti possiamo sperare di elencarne qui:
ce n'è un [elenco completo su
StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Un editor di base, [TeXworks](https://tug.org/texworks), è incluso nella TeX Live
e in MiKTeX su Windows e Linux, e [TeXShop](https://pages.uoregon.edu/koch/texshop/)
è incluso in MacTeX.

<p 
  class="hint">Qualunque sia l'editor da te scelto, ti consigliamo di installarlo <i>dopo</i> il sistema TeX, in modo che l'editor riesca a 'trovarlo' e a impostarsi correttamente.</p>

## Lavorare online

There are several powerful online sites that allow you to avoid
the need to install a TeX system and LaTeX editor at all. These websites
work by letting you edit your files in the webpage, then they run LaTeX
behind the scenes, and display the PDF that is produced.

Some of these sites combine LaTeX with features similar to a word processor,
whereas others are more focused on letting you see the LaTeX code and
so are closer to having a local installation.

There are systems that let you run LaTeX without needing to be logged in, and we
are using one of those,
[TeXLive.net](https://texlive.net), to let you
edit and test the examples we give. For more complete work, the best online
systems require that you register before you use them. That lets you save your
work but also helps the sites not get overloaded. We have set up links so you
can edit our examples using [Overleaf](https://www.overleaf.com), one of the
major websites for LaTeX online. There are of course others:
[Papeeria](https://papeeria.com/) is an example.

## Lavoro collaborativo

If you are planning to send your LaTeX sources to destinations which process
them, such as publishers, conference organisers or pre-print servers
(e.g. arXiv), you should check what restrictions they impose.

## Esercizio

Get yourself set up with a local LaTeX installation _or_ an account with
an online LaTeX service. If you are using a local installation, you'll need
to pick an editor too: we recommend starting with either TeXworks or TeX Shop
(see above), then looking at other editors later once you know how _you_
work best with LaTeX.

You'll be able to [run all of our other exercises in your browser](help.md), but we want
to help you get working with real documents, so now is a great time to get
yourself ready.
