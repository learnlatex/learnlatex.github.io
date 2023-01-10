---
layout: "lesson"
lang: "it"
title: "Accedere alla documentazione e chiedere aiuto"
description: "Questa lezione mostra le principali fonti di documentazione per software e pacchetti relativi a LaTeX e come cercare aiuto quando sei nei guai."
toc-anchor-text: "Aiuto e documentazione"
toc-description: "Accedere alla documentazione e chiedere aiuto."
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

Esistono diversi forum online per porre domande su LaTeX; il più popolare 
oggi è forse [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Ogni volta che fai una domanda, è meglio prima levare dal tuo esempio 
tutto quello che non serve, fino a renderlo ciò che normalmente è 
noto come MWE (_Minimal Working Example_, ‘esempio minimo funzionante’). 
Questo non significa che il codice funzioni (altrimenti, non faresti
nemmeno la domanda!), ma piuttosto che hai fatto del tuo meglio per 
renderlo chiaro, autonomo e minimo. 
Quest'ultimo aggettivo significa che il codice che invierai per chiedere
aiuto dovrà contenere solo il minimo indispensabile per mostrare il problema.

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


### File di registro (o <code>log</code>)

È sempre bene avere a portata di mano il file di registro; questo viene creato da LaTeX 
a ogni esecuzione e ha lo stesso nome del file sorgente ma estensione `.log`.

<p 
  class="hint">A seconda dell'interfaccia desktop, potrebbe essere necessario ‘mostrare 
  le estensioni’ per capire quale dei file ausiliari è.</p>

Nel file di registro è sempre possibile visualizzare i messaggi di errore completi. 
I messaggi di errore di LaTeX cercano di essere utili, ma non sono gli stessi di quelli 
negli elaboratori di testi.

<p
  class="hint">Alcuni editor rendono anche difficile vedere il testo ‘completo’ 
  di un errore, che può nascondere i dettagli chiave.</p>

Per aiutarti a risolvere un problema, gli utenti LaTeX esperti ti chiederanno spesso 
una copia del file di registro.

### E adesso?

Infine, ti mostriamo una [galleria di piccoli esempi](./extra-01) 
che comprende una serie di aree tematiche non trattate in questa introduzione 
e alcuni pacchetti di LaTeX adatti a esse.
