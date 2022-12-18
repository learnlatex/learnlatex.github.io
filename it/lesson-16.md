---
layout: "lesson"
lang: "it"
title: "Accedere alla documentazione e chiedere aiuto"
description: "Questa lezione mostra le principali fonti di documentazione per software e pacchetti relativi a LaTeX e come cercare aiuto quando sei nei guai."
toc-anchor-text: "Aiuto e documentazione"
toc-description: "Accessing help and documentation."
---

# Documentazione e assistenza

<span
  class="summary">Questa lezione mostra le principali fonti di documentazione per software e pacchetti relativi a LaTeX e come cercare aiuto quando sei nei guai.</span>

Esistono diversi modi per accedere alla documentazione di un pacchetto o di una classe.

## `texdoc`

Se nel tuo computer hai installato una distribuzione di TeX 
(_per esempio_, TeX Live o MiKTeX) completa della documentazione,
puoi accedere alla documentazione con `texdoc`,
uno strumento da riga di comando. 
Scrivendo nel terminale

`texdoc` < _pacchetto_ >

si aprirà la documentazione del pacchetto `<pacchetto>`. 
L'utilità cercherà la documentazione disponibile e aprirà ciò che 
ritiene sia la corrispondenza più vicina al termine di ricerca. 
Puoi elencare e scegliere tra tutti i risultati validi che trova scrivendo:

`texdoc -l` < _pacchetto_ >

## texdoc.org

È un [sito](https://texdoc.org/) che funziona in modo simile a `texdoc` 
appena visto. Puoi cercarvi la documentazione disponibile 
proprio come faresti con `texdoc -l` e quindi scegliere tra i risultati.

## CTAN

[CTAN](https://www.ctan.org) (_Comprehensive TeX Archive Network_) è 
la ‘rete completa di archivi di TeX’, cioè un insieme di server sparsi
per il mondo che contengono programmi, pacchetti e documentazione su 
TeX e LaTeX. 
Siccome la grande maggioranza dei pacchetti per LaTeX viene pubblicata lì
(di solito un pacchetto si trova in `ctan.org/pkg/<nome-pacchetto>`)
per accedere a documentazione e file README basta cercarli su CTAN.

## Libri su LaTeX

Esistono numerosi libri che possono aiutarti a saperne di più su LaTeX. 
Essendo tu alle prime armi, guadagnerai molto da una guida per principianti 
strutturata, in quanto può fornirti molti più dettagli di quanti ne 
abbiamo trattato qui. 
Puoi scegliere anche un manuale di riferimento con dettagli e consigli
ancora più specifici e particolareggiati.

Il LaTeX team ha stilato [un eleno di libri](https://www.latex-project.org/help/books/)
scritti in gran parte dai loro membri. I più notevoli sono 
[la guida ufficiale di Lamport](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
e l'esauriente
[LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Altri libri mirati all'apprendimento di LaTeX includono

- [_Guide to
  LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) di Helmut
  Kopka e Patrick Daly: disponibile come e-book
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) di
  Nicola Talbot: disponibile come e-book liberamente scaricabile o 
  in una versione a stampa a basso costo
- [_Using LaTeX to write a PhD
  thesis_](https://www.dickimaw-books.com/latex/thesis/) di
  Nicola Talbot: disponibile come e-book liberamente scaricabile o 
  in una versione a stampa a basso costo
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)
  di Stefan Kottwitz: disponibile come e-book e in una versione a stampa
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) di
  Marc van Dongen: disponibile come e-book e in una versione a stampa

## Ricevere aiuto

There are various online forums for asking LaTeX questions; perhaps the most
popular today is [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Whenever you ask a question, it's best to first get your example clear: what is
normally known as a 'minimal working example' (MWE). This doesn't mean the code
works (as you wouldn't be asking otherwise!), but rather it means you've done
your best to make it clear, self-contained and minimal. The latter means
having only enough content to show the issue.

### Come fornire un esempio minimo compilabile (MWE, _Minimal Working Example_)

Come si costruisce un MWE? Di solito, è più semplice incominciare da

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

e aggiungi una riga dopo l'altra finché non mostri il problema. 
Vivecersa, puoi provare a ‘ridurre’ il sorgente, ma può essere 
una cosa lunga.

<p 
  class="hint">Se hai bisogno di più testo per mostrare interruzioni di pagina e altri effetti, 
  puoi adoperare pacchetti come <code>lipsum</code>, che permette di generare capoversi di 
  testo fittizio mantenendo breve il tuo file d'esempio.
</p>


### Log file

One thing you will want available is your log file; this is created by LaTeX
every time you run it, and has the same name as your input but ending `.log`.

<p 
  class="hint">Depending on your desktop interface, you might need to 'show extensions' to work out which file it is.</p>

In the log file, you can always see the full error messages. LaTeX's error messages try to be helpful, but they are not the same as messages in word processors.

<p 
  class="hint">Some editors also make it hard to see the 'full' text of an error, which can hide key details.</p>

If you have a problem, expert LaTeX users will often ask for a copy of your log file.

### Going further

Finally we offer a [gallery of small examples](./extra-01) showing a range of different subject areas not covered in this introduction, and different LaTeX packages in those areas.
