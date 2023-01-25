---
layout: "lesson"
lang: "it"
title: "Affrontare gli errori"
description: "Questa lezione mostra alcuni errori comuni nei documenti LaTeX, che cosa significano e come evitarli."
toc-anchor-text: "Gestione degli errori"
toc-description: "Affrontare comportamenti di LaTeX inaspettati."
---

# Affrontare gli errori

<span
  class="summary">Questa lezione mostra alcuni errori comuni nei documenti LaTeX, che cosa significano e come evitarli.</span>

A differenza di un comune elaboratore di testi, 
LaTeX presenta un ciclo modifica-esegui-visualizza 
più vicino al modo di lavorare con i compilatori 
di linguaggi di programmazione. 
Come nella programmazione, gli utenti possono 
commettere errori nei loro input e quindi 
debbono saper gestire i messaggi di errore 
segnalati dal sistema.

## Errori comuni

Questa pagina contiene alcuni esempi di
errori comuni, per ciascuno dei quali
una breve descrizione fornisce le 
informazioni essenziali
circa la forma del messaggio d'errore.

Ti raccomandiamo di provare gli 
esempi e di modificare il codice
direttamente nel browser 
per provare a correggere 
i documenti e verificare di 
essere in grado di risolvere gli errori.

### pdflatex non viene trovato

Un primo errore comune in cui gli 
utenti alle prime armi si imbattono
è il seguente:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

su Windows, o

```
bash: pdflatex: command not found
```
{: .noedit :}

su Linux.

Questo non è un errore di TeX ma del 
sistema operativo, il quale lamenta 
che TeX non è installato o non è 
stato trovato. 
Un errore comune, infatti, è 
installare un _editor_ come 
TeXworks o TeXShop senza avere 
installato un sistema TeX come 
TeX Live o MiKTeX.

### Anatomia di un messaggio d'errore di TeX

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\miocomando{\textbold{hmmm}}

\begin{document}

Il mio comando è adoperato qui: \miocomando.

\end{document}
```
Questo codice produce un messaggio di più righe nel file
di registro.

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* La prima riga, contrassegnata con `!`, informa sulla natura generale dell'errore (comando non definito, 
  in questo caso).
* La seconda coppia di righe mostra la riga che TeX stava elaborando, interrotta al punto in cui TeX
  era arrivato quando ha individuato l'errore. Il comando non definito è l'ultimo token letto, quindi 
  l'ultima parola prima dell'interruzione di riga, `\textbold` qui. Dopo l'interruzione di riga ci 
  sono i token rimanenti `{hmmm}` che potrebbero essere stati letti come argomento ma non ancora eseguiti 
  da TeX.
* In linea generale, a questo punto potrebbero esserci alcune righe aggiuntive, che mostrano più contesto 
  del messaggio d'errore.
* L'ultima riga incomincia con una `l.` seguita dal numero della riga e dal testo della riga del sorgente 
  dove l'errore è stato individuato.
  
* L'ultima riga è un `?`. Adoperando TeX in modo interattivo, a questo punto è possibile impartirgli 
  istruzioni, ma la maggior parte degli editor e dei sistemi online esegue TeX in una modalità che 
  non si ferma agli errori, ma passa oltre e tenta di elaborare comunque il resto del documento. 
  In modalità interattiva, digitando `s` nel prompt si chiederà a TeX a continuare in questa modalità. 

Osserva, a questo punto, che TeX non vede l'errore nel punto in cui 
il comando è stato definito; e infatti, se `\mycommand` fosse solo definito 
ma non adoperato, TeX non lamenterebbe alcun errore. 
Quindi, sebbene l'errore sia individuato alla riga 8, l'errore ‘reale’ 
sta nella definizione alla riga 4, quindi è importante esaminare l'intero 
messaggio di errore.

Fa' attenzione che alcuni editor mostrano un ‘riepilogo’ di una riga del 
registro degli errori. La cosa può essere particolarmente fuorviante se 
mostrata come

`line 8: undefined command: ...\mycommand`

dato che fa sembrare il comando `\mycommand` non definito.


### Graffe spaiate


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```
Qui l'errore è un `}` adoperato per chiudere l'argomento facoltativo e non 
corrispondente al `[` d'apertura. 
La parentesi graffa di chiusura fa fallire l'analisi delle opzioni di LaTeX 
e si ottiene un errore interno e non così utile:

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Mentre la descrizione dell'errore non è utile, le due righe successive mostrano 
con precisione la posizione dell'errore mediante l'interruzione della riga, 
che mostra fino a che punto TeX aveva letto:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


### File mancanti

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```
Questo codice produce l'errore

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Osserva che questo stesso errore può essere dovuto a due cause 
diverse: o a un semplice errore di battitura come qui, eliminabile 
correggendo il nome del pacchetto; o al fatto che il file manca
davvero e deve essere installato nel sistema.

### Righe vuote nella matematica in display

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Produce l'errore un po' misterioeo

```
! Missing $ inserted.
```
{: .noedit :}

Ma la correzione è semplice: negli ambienti matematici le righe vuote 
non sono ammesse, e vanno eliminate.

## Esercizi

Prova a correggere gli errori nei codici d'esempio di questa pagina.

Scrivi piccoli documenti contenenti errori diversi e prendi nota  
della forma dei messaggi d'errore.

<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(3, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(3, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3  , 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(7, 0, false);
  }, false);
</script>
