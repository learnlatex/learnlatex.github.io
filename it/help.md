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

Ogni lezione contiene un collegamento a una lezione di approfondimento
sullo stesso argomento.
Dovresti riuscire a seguire tutte le 16 lezioni _senza_ dover
leggere quelle aggiuntive.

Alla fine del corso, una o più lezioni danno indicazioni specifiche
sulla lingua adoperata nelle lezioni principali e, infine, una galleria 
di esempi mostra alcuni usi particolari di LaTeX
non descritti nel corso.

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

Ogni esempio è _completo_. Inoltre è _modificabile_, perché 
gli esercizi alla fine della lezione potrebbero chiederti 
di apportare loro qualche piccolo cambiamento.

L'editor integrato nel sito è [ACE](https://ace.c9.io/).

Puoi personalizzare l'aspetto dell'editor (impostando un 
tema scuro con testo chiaro su sfondo nero, per esempio) 
sulla pagina [Configurazione](settings).
Per sperimentare comodamente temi diversi, ti consigliamo 
di dare <kbd>Ctrl</kbd>+<kbd>,</kbd> 
(<kbd>⌘</kbd>+<kbd>,</kbd> su Mac)
mentre stai lavorando con gli esempi. 
Questa combinazione di tasti [ti mostrerà un pannello](javascript:acesettings()) 
nel quale potrai modificare tutte le impostazioni di ACE.

Il repository di ACE contiene una [pagina con le scorciatoie da tastiera](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts)
utili per risparmiare tempo.

#### Tre modi per comporre un esempio

* Mediante il servizio Overleaf
* Mediante il servizio TeXLive.net
* Mediante un sistema TeX installato sul disco

##### Il servizio Overleaf

Overleaf è uno dei servizi più apprezzati per lavorare con LaTeX online.
Il pulsante <button>Apri in Overleaf</button>, sotto all'esempio, invia 
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

A differenza dei documenti composti su TeXLive.net, Overleaf ti permette
di salvare il progetto nel tuo account per riprenderlo
più avanti.

##### Il servizio TeXLive.net

Il pulsante <button>Esegui in TeXLive.net</button>, sotto all'esempio, 
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

Nota bene che **TeXLive.net** non richiede né l'accesso né alcun
tipo di registrazione – il che lo rende molto comodo per lavorare
con esempi brevi – ma non ti permette in nessun modo di salvare
il documento. Abbandonando la pagina, perderai tutte le modifiche
apportate all'esempio.

##### Sistema TeX installato sul disco

Se hai installato un sistema TeX sul tuo disco, puoi copiare
il codice d'esempio, selezionandolo direttamente sulla pagina 
o mediante le scorciatoie da tastiera previste dall'editor
(<kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd>
in Windows, per esempio). 
In questo modo, il codice verrà memorizzato negli appunti
del sistema operativo in uso sulla tua macchina, pronto
per essere incollato in un documento vuoto aperto con il
tuo editor preferito.

### Risoluzione dei problemi

I nostri esempi richiedono un sistema TeX aggiornato.
Dal momento che funzionano tutti con entrambi i servizi online 
appena descritti, se la compilazione sul tuo sistema locale
non va a buon fine e ricevi dei messaggi d'errore, ti 
consigliamo di controllarne lo stato e, se è il caso,
di aggiornarlo.

---

## Scegliere il motore TeX

Per impostazione predefinita, i nostri codici d'esempio
vengono composti online con il motore `pdflatex`.

Puoi scegliere esplicitamente `latex`, `pdflatex`, `xelatex`, `lualatex`,
`platex` o `uplatex` mediante un commento speciale di questo tipo:

`% !TEX ` _testo_ `lualatex`

dove lo spazio all'inizio è facoltativo e maiuscole, 
minuscole e l'eventuale _testo_ tra la prima e 
l'ultima parola sono ignorati.

La cosa permette di scrivere `% !TEX program=pdflatex`, 
come alcuni editor TeX raccomandano, ma tieni presente 
che la stringa `program=` non è richiesta. 
Nota bene che, attualmente, i commenti speciali si limitano 
a specificare solo uno dei motori supportati dai sistemi TeX 
online consigliati nel nostro corso.
 
In una delle [pagine di approfondimento](more-14) di questo corso
puoi vedere un esempio di commento per impostare esplicitamente
la composizione con LuaLaTeX.

Specificando `platex` o `uplatex`, per produrre il PDF composto
a partire dal file DVI generato da queste varianti di TeX 
verrà lanciato automaticamente anche il programma `dvipdfmx`.
Analogamente, scegliendo `latex` saranno adoperati
`dvips` e `ps2pdf`.

Se in un commento speciale `% !TeX` non si specifica alcun
motore, il file sorgente viene composto con `pdflatex`, a meno
che non abbiate impostato un altro motore come predefinito nella
pagina [Configurazione](settings).

---

## Scegliere come visualizzare il risultato

Se scegliete il sistema TeXLive.net, il PDF
dell'esempio composto 
è visualizzato per impostazione predefinita con 
[PDF.js](https://mozilla.github.io/pdf.js/), che
garantisce un comportamento coerente sulla grande
maggioranza dei browser.

If you would prefer to use your browser's default PDF reader (either
its built in one, or an external application that you have configured)
then add a comment of the form:

`% !TEX ` _testo_ `pdf`

The default behavior can be explicitly specified by using `pdfjs` as
the final token. For debugging you may sometimes want the log file
returned, even if the document produces a PDF with
no errors. This can be specified by using `log` as the final token in
the comment.

As an alternative to using a `% !TeX` comment, you may specify the
site default return parameter on the [Site Settings](settings)
page. The Settings are specific to each browser, so for example you
may choose to use the default `pdfjs` setting on your mobile device,
but use `pdf` on your desktop browser to use its default PDF rendering.


---

## Output HTML (make4ht, LaTeXML, lwarp)

If using the TeXLive.net system, then additional return options,
`make4ht`, `LaTeXML` or `lwarp` may be specified. These return one or more HTML pages
in the frame within the page. It may be specified at the same time
as `xelatex` or `lualatex` as well as the default `pdflatex` processing.

To enable this output, add a comment of the form:


```
% !TeX make4ht
```
{: .noedit :}


Replacing `make4ht` by `LaTeXML` or `lwarp` to specify those systems.



Alternatively you may specify `make4ht`, `LaTeXML` or `lwarp` as the default return option
on the [Site Settings](settings) page.


If using a locally installed TeX system, the same output as the `make4ht` option may be obtained
by executing

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

with the addional option `-x` or `-l` if XeLaTeX or LuaLaTeX are specified.

When running locally, other configurations would be possible. See the [make4ht
manual](https://texdoc.org/pkg/make4ht).


For `LaTeXML` to run locally, you would need to install LaTeXML (it is not part of TeX Live or MiKTeX)
and use

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Many other LaTeXML configurations are possible,
[as described in the manual](https://dlmf.nist.gov/LaTeXML/manual/).


The `lwarp` configuration is not documented here, it is somewhat experimental and subject to change.
The current version can be seen at the
[source repository](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Durante lo sviluppo di questo sito abbiamo adoperato anche 
      [LaTeX.Online](https://latexonline.cc/) e
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http).
      Ringraziamo i loro sviluppatori per averli
      tenuti aggiornati così da permettere agli esempi in questo
      sito di essere disponibili un una fase iniziale.


