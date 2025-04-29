---
layout: "page"
lang: "it"
title: "Adoperare il sito learnlatex.org"
description: "Questa pagina spiega com'è organizzato il sito learnlatex.org e come usarlo al meglio."
permalink: /it/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# Aiuto

## Navigare questo sito

Il corso è composto da 16 lezioni di base raggiungibili 
dall'[indice]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) 
presente nella [pagina iniziale](./).

Ogni lezione contiene un collegamento a una lezione di 
approfondimento sullo stesso argomento, raggiungibile 
cliccando su ‘Per saperne di più’ proprio sopra il titolo della 
lezione.
Dovresti riuscire a seguire tutte le 16 lezioni _senza_ 
dover leggere anche quelle aggiuntive.

Alla fine del corso, una lezione dà indicazioni 
specifiche sulla lingua adoperata nelle lezioni principali 
e, infine, una galleria di esempi mostra alcuni usi 
particolari di LaTeX non descritti nel corso.

---

## Esempi

### Comporre gli esempi

#### Sugli esempi e l'editor di questo sito

Gli esempi presenti nelle lezioni sono brevi documenti LaTeX
che sulla pagina appaiono così:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Testo d'esempio.

\end{document}
```

Ogni esempio è _completo_. Inoltre è _modificabile_, 
perché spesso gli esercizi alla fine della lezione 
ti chiedono di apportare loro qualche piccolo cambiamento.


L'editor integrato nel sito è

* [ACE](https://ace.c9.io/).

  Puoi personalizzarne l'aspetto (impostando un 
  tema scuro con testo chiaro su sfondo nero, per esempio) 
  sulla pagina [Configurazione](settings).
  Per sperimentare comodamente temi diversi, ti consigliamo 
  di dare <kbd>Ctrl</kbd>+<kbd>,</kbd> 
  (<kbd>⌘</kbd>+<kbd>,</kbd> su Mac)
  mentre stai lavorando con gli esempi. 
  Questa combinazione di tasti 
  [farà apparire un pannello](javascript:acesettings()) 
  nel quale potrai modificare tutte le impostazioni di ACE.
  
  Il repository di ACE contiene una [pagina con le scorciatoie da tastiera](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts)
  utili per risparmiare tempo.

* [CodeMirror6](https://codemirror.net/).


#### Tre modi per comporre un esempio

* Mediante il servizio Overleaf
* Mediante il servizio TeXLive.net
* Mediante un sistema TeX installato sul tuo disco

##### Il servizio Overleaf

Overleaf è uno dei servizi più apprezzati per lavorare con LaTeX 
on-line.
Il pulsante <button>Overleaf</button>, sotto all'esempio, invia 
il codice a [Overleaf](https://www.overleaf.com/about).

Se non possiedi un account su Overleaf o se i dettagli del tuo account 
non sono già  memorizzati nella cache del browser, verrai reindirizzato 
a una pagina nella quale potrai accedere al servizio o registrarti. 
Overleaf è gratuito, ma dovrai dare qualche informazione personale 
(in particolare, un indirizzo email valido) e accettarne termini e 
condizioni.

Se, invece, il tuo account Overleaf è già memorizzato nella cache del 
browser, Overleaf si aprirà in una nuova scheda, con un nuovo progetto 
contenente il codice d'esempio. A questo punto, potrai modificarlo 
direttamente in Overleaf, che lancerà automaticamente LaTeX sul codice, 
visualizzando subito dopo l'anteprima del PDF composto o gli eventuali 
errori.

A differenza dei documenti composti su TeXLive.net, Overleaf 
ti permette di salvare il progetto nel tuo account per 
riprenderlo più avanti.

##### Il servizio TeXLive.net

Il pulsante <button>TeXLive.net</button>, sotto all'esempio, 
invia il codice al servizio [TeXLive.net](https://texlive.net)[^1].

Il servizio TeXLive.net è stato sviluppato appositamente per questo sito
e, in particolare, adopera [PDF.js](https://mozilla.github.io/pdf.js/)
per mostrare i PDF sui dispositivi mobili e i browser sprovvisti
di un visualizzatore di PDF integrato.

Il PDF composto risultante (o una parte del registro degli errori) 
verrà mostrato sulla pagina subito sotto all'esempio. 
Con il pulsante <button>Elimina l'output</button> potrai 
eliminarlo (oppure puoi lasciarlo dov'è e proseguire con 
la lezione, che continua più sotto).

Nota bene che **TeXLive.net** non ti chiede né di autenticarti 
né di registrarti in alcun modo – il che lo rende molto comodo 
per lavorare con esempi brevi – ma non ti permette in nessun 
modo di salvare il documento. Abbandonando la pagina, perderai 
tutte le modifiche eventualmente apportate all'esempio.

##### Sistema TeX installato sul disco

Se hai installato un sistema TeX sul tuo disco, puoi copiare
l'esempio, selezionandolo direttamente sulla pagina 
o mediante le scorciatoie da tastiera previste dall'editor
(<kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd>
in Windows, per esempio). 
In questo modo, il codice verrà memorizzato negli appunti
del sistema operativo in uso sulla tua macchina, pronto
per essere incollato in un documento vuoto aperto con il
tuo editor preferito.

### Risoluzione dei problemi

I nostri esempi richiedono un sistema TeX aggiornato.
Dal momento che funzionano tutti con entrambi i servizi on-line 
appena descritti, se la compilazione sul tuo sistema locale
non va a buon fine e ricevi dei messaggi d'errore, ti 
consigliamo di controllarne lo stato e, se è il caso,
di aggiornarlo.

---

## Scegliere il motore TeX

Per impostazione predefinita, i nostri esempi
vengono composti on-line con il motore `pdflatex`.

Puoi scegliere esplicitamente `latex`, `pdflatex`, 
`xelatex`, `lualatex`, `platex` o `uplatex` 
mediante un commento speciale di questo tipo:

`% !TEX ` _testo_ `lualatex`

dove lo spazio all'inizio è facoltativo e maiuscole, 
minuscole e l'eventuale _testo_ tra la prima e 
l'ultima parola sono ignorati.

La cosa permette di scrivere `% !TEX program=pdflatex`, 
come alcuni editor TeX raccomandano, ma tieni presente 
che la stringa `program=` non è richiesta. 
Nota bene che, attualmente, i commenti speciali si limitano 
a specificare _solo uno_ dei motori supportati dai sistemi TeX 
on-line consigliati nel nostro corso.
 
In una delle [pagine di approfondimento](more-14) 
di questo corso c'è un esempio di commento per 
impostare esplicitamente la composizione con 
LuaLaTeX.

Specificando `platex` o `uplatex`, per produrre il PDF composto
a partire dal file DVI generato da queste varianti di TeX 
verrà lanciato automaticamente anche il programma `dvipdfmx`.
Analogamente, scegliendo `latex` saranno adoperati
`dvips` e `ps2pdf`.

Se in un commento speciale `% !TeX` non si specifica alcun
motore, il file sorgente viene composto con `pdflatex`, a meno
che non abbiate impostato un altro motore predefinito nella
pagina [Configurazione](settings).

---

## Scegliere il modo in cui visualizzare il risultato

Se scegliete il sistema TeXLive.net, il PDF
dell'esempio composto è visualizzato per 
impostazione predefinita con 
[PDF.js](https://mozilla.github.io/pdf.js/), che
garantisce un comportamento coerente sulla grande
maggioranza dei browser.

Se preferisci adoperare il lettore PDF predefinito 
del tuo browser (sia esso integrato o un'applicazione 
esterna che hai configurato), aggiungi un commento 
in questa forma:

`% !TEX ` _testo_ `pdf`

Il comportamento predefinito può essere specificato 
in modo esplicito adoperando `pdfjs` come token finale. 
Per il debug a volte potresti voler reinviare il file 
di registro, anche se il PDF è stato generato senza 
errori. 
Puoi richiederlo adoperando `log` come token finale 
nel commento.

In alternativa all'uso di un commento `% !TeX`, puoi 
specificare il parametro di ritorno predefinito del sito 
nella pagina delle [configurazioni](settings). 
Le impostazioni sono specifiche per ciascun browser, 
quindi, per esempio, puoi scegliere l'impostazione 
predefinita `pdfjs` sul tuo dispositivo mobile, 
ma `pdf` sul tuo browser desktop per 
adoperare il rendering PDF predefinito.

---

## Output HTML (make4ht, LaTeXML, lwarp)

Se adoperi TeXLive.net, puoi specificare ulteriori opzioni 
di ritorno: `make4ht`, `LaTeXML` o `lwarp`. 
Queste restituiscono una o più pagine HTML nel frame all'interno 
della pagina. 
Puoi specificarlo contemporaneamente a `xelatex` o `lualatex` 
così come al predefinito `pdflatex`.

Per abilitare questo output, aggiungi un commento nella forma:

```
% !TeX make4ht
```
{: .noedit :}

Sostituisci `make4ht` con `LaTeXML` o `lwarp` per specificare
altri sistemi.

In alternativa, puoi specificare `make4ht`, `LaTeXML` o 
`lwarp` come opzione di ritorno predefinita
sulla pagina delle [configurazioni](settings).

Se stai adoperando un sistema TeX installato localmente,
puoi ottenere lo stesso risultato prodotto dall'opzione
`make4ht` eseguendo

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

con l'opzione aggiuntiva `-x` o `-l` se hai specificato 
XeLaTeX o LuaLaTeX.

Durante l'esecuzione in locale, sarebbero possibili altre 
configurazioni. Consulta il 
[manuale di make4ht](https://texdoc.org/pkg/make4ht).

Affinché `LaTeXML` venga eseguito localmente, è necessario 
installare LaTeXML (se non è già parte di TeX Live o MiKTeX)
e usa

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Sono possibili molte altre configurazioni di LaTeXML,
[as described in the manual](https://dlmf.nist.gov/LaTeXML/manual/).


La configurazione di `lwarp` non è documentata qui, è in qualche modo 
sperimentale e soggetta a modifiche.
Puoi vederne la versione corrente nell'
[archivio del sorgente](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Durante lo sviluppo di questo sito abbiamo adoperato anche 
      [LaTeX.Online](https://latexonline.cc/) e
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http).
      Ringraziamo i loro sviluppatori per averli
      tenuti costantemente aggiornati, rendendo così disponibili
      agli utenti gli esempi di questo sito sin dalle sue
      fasi iniziali.


