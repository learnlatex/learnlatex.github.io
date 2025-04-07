---
layout: "lesson"
lang: "it"
title: "Affrontare gli errori"
description: "Questa lezione descrive alcuni errori comuni nei documenti LaTeX, ne mostra il significato e insegna come evitarli."
toc-anchor-text: "Gestione degli errori"
toc-description: "Affrontare comportamenti inaspettati di LaTeX."
---

# Affrontare gli errori

<span
  class="summary">Questa lezione descrive alcuni errori comuni nei documenti LaTeX, ne mostra il significato e insegna come evitarli.</span>

A differenza di quanto accade in un comune 
elaboratore di testi, il ciclo 
modifica-esegui-visualizza proprio di 
LaTeX è più vicino a quello dei compilatori 
di linguaggi di programmazione. 
Come nella programmazione, infatti, gli utenti 
di LaTeX possono commettere ‘errori’ nella scrittura 
dei file sorgente, e quindi debbono saper 
gestire i relativi messaggi 
segnalati dal sistema.

## Errori comuni

Questa pagina contiene alcuni esempi di
errori comuni nella scrittura del codice
e dei relativi messaggi d'errore.
Di ogni messaggio, poi,
descriveremo brevemente la forma.

Ti raccomandiamo di provare gli 
esempi e di modificare il codice
direttamente nel browser 
per provare a correggere 
i documenti e verificare di 
essere in grado di risolvere gli errori.

### pdflatex non viene trovato

Un primo errore comune in cui
tipicamente gli 
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

su Linux e sistemi di tipo Unix.

Questo non è un errore segnalato
da TeX, ma del sistema operativo, 
il quale lamenta 
che TeX non è installato o non è 
stato trovato. 
Spesso, infatti, si 
installa un _editor_ come 
TeXworks o TeXShop senza avere 
installato un _sistema TeX_ come 
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
La composizione di questo codice produce 
un messaggio di 
più righe nel file di registro e nella
console del tuo editor, se attiva

```
! Undefined control sequence.
\miocomando ->\textbold 
                       {hmmm}
l.8 Il mio comando è adoperato qui: \miocomando
                                      .
? 
```
{: .noedit :}

Ecco che cosa significa.

* La prima riga, contrassegnata con `!`, informa sulla natura generale dell'errore (‘comando non definito’, in questo caso).
* La seconda coppia di righe mostra la riga che TeX stava elaborando, interrotta al punto in cui era arrivato quando ha individuato l'errore. Il comando non definito è l'ultimo token letto, quindi l'ultima parola prima dell'interruzione della riga: `\textbold`, qui. Dopo l'interruzione di riga vengono i token rimanenti `{hmmm}` che potrebbero essere stati letti come argomento ma non ancora eseguiti da TeX.
* In linea generale, a questo punto il messaggio potrebbe mostrare alcune righe aggiuntive di contesto.
* La riga successiva incomincia con una `l.`  seguita dal numero della riga (del sorgente) e dal testo in cui l'errore è stato individuato.
* L'ultima riga è un `?`. Se si adopera TeX in modo interattivo, a questo punto è possibile impartirgli istruzioni, ma la maggior parte degli editor e dei sistemi on-line esegue TeX in una modalità che non blocca la composizione di fronte a un errore, ma passa oltre e tenta di elaborare comunque il resto del documento. In modalità interattiva, digitando `s` nel prompt si chiederà a TeX di continuare in questa modalità. 

Osserva, a questo punto, che TeX non vede 
l'errore nel punto in cui il comando è stato 
definito: infatti, se 
`\miocomando` fosse solo definito 
ma non effettivamente adoperato, 
TeX non si lamenterebbe. 
Quindi, sebbene l'errore venga individuato 
alla riga 8, l'errore _vero_
sta nella definizione alla riga 4, quindi 
è importante esaminare l'intero 
messaggio di errore.

Fa' attenzione: alcuni editor mostrano 
un ‘riepilogo’ del 
registro degli errori lungo
una riga soltanto. 
La cosa può essere particolarmente fuorviante se 
mostrata come

`line 8: undefined command: ...\miocomando`

Infatti, sembra che il comando `\miocomando` 
non sia definito (quando, invece, lo è).


### Graffe spaiate

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```
Qui l'errore è la graffa di chiusura `}` 
dopo `leqno`: a questo punto del corso,
dovresti sapere che un argomento
facoltativo è racchiuso tra parentesi
quadre.
Perciò, l'analisi delle opzioni di LaTeX
fallisce, ma questa volta l'errore non è
così chiaro:

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Se la descrizione dell'errore non è utile, 
le due righe successive del messaggio ne mostrano 
con precisione la posizione 
mediante la solita interruzione della riga, 
che mostra fino a dove TeX aveva letto:

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

Osserva che questo stesso errore può essere 
dovuto a due cause diverse: o a un semplice 
errore di battitura come qui, eliminabile 
correggendo il nome del pacchetto; 
o al fatto che il file manca
davvero e pertanto deve essere installato 
nel sistema.

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

Produce l'errore un po' misterioso

```
! Missing $ inserted.
```
{: .noedit :}

Ma la spiegazione è semplice: negli ambienti 
matematici le righe vuote 
non sono ammesse. 
Per correggere l'errore, dunque, 
basta eliminarle.

## Esercizi

Prova a correggere gli errori nei codici d'esempio di questa pagina.

Scrivi piccoli documenti contenenti errori diversi e prendi nota  
della forma dei messaggi d'errore.

<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
  }, false);
</script>
