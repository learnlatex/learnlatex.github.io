---
layout: "lesson"
lang: "it"
title: "Di più su: Affrontare gli errori"
description: "Questa lezione mostra alcuni degli errori più comuni in LaTeX e spiega gli errori concatenati e gli errori silenziosi."
toc-anchor-text: "Di più su: Affrontare gli errori"
---

## Errori riportati alla fine degli ambienti

Alcuni ambienti (in particolare, gli allineamenti 
di `amsmath` e le tabelle di `tabularx`)
esaminano l'intero corpo dell'ambiente prima di
elaborarne il contenuto. 
Ciò significa che ogni errore presente _all'interno_
dell'ambiente verrà segnalato a livello dell'ultima
sua riga.
Tuttavia, come abbiamo visto nella lezione principale, 
la visualizzazione del contesto dell'errore da parte 
di TeX dovrebbe ancora permettere di individuarne 
la posizione.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Qui l'errore verrà segnalato a riga 12

```
l.12 \end{align}
```
{: .noedit :}

nonostante che l'errore vero e proprio (`\frak` anziché `\frac`)
si trovi a riga 10, come mostrato dalle righe di contesto:


```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Errori spuri causati da errori precedenti

Quando si chiama LaTeX in modo interattivo dalla riga di 
comando, è possibile interrompere l'elaborazione al primo 
errore con `x`, modificare il documento ed eseguire nuovamente
il programma. 
Tuttavia, se passi oltre l'errore o adoperi un editor o 
un sistema online che lo fa per te, TeX proverà a tornare
sui propri passi; la cosa, però, potrebbe portare alla 
segnalazione di molti altri errori.

Quindi non preoccuparti troppo del _numero_ di errori notificati,
e concentrati sempre sulla correzione del primo errore segnalato.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Text_word  $\alpha + \beta$.

More text.

\end{document}
```

Qui l'errore è il trattino basso `_`, che dovrebbe essere
inserito come `\_`.

TeX lo riporta correttamente con il _primo_ messaggio d'errore

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Tuttavia, se passi oltre la richiesta indicata dal `?`, 
TeX cerca di aggiustare aggiungendo un `$`, di modo che 
`_` venga visto come un pedice in modo matematico. 
Il modo matematico, poi, continua fino al `$` di chiusura,
così che il successivo `\alpha` viene letto in modo testo,
cosa che genera un altro errore

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Errori che non attivano una richiesta d'errore

Alcuni errori, in particolare quelli che non vengono rilevati 
fino alla fine del file, non generano una richiesta d'errore,
ma producono solo un avviso nel registro.

Se provi questo esempio compilandolo con TeXLive.net, otterrai
un PDF per impostazione predefinita; per vedere il messaggio
d'errore nel registro, devi aggiungere `%!TeX log`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Testo {\large un po' di testo grande) in corpo normale?

\end{document}
```

In questo esempio, la modifica del corpo del font è stata 
erroneamente terminata con `)` invece che con `}`. 
Questo non viene rilevato fino alla fine del file, quando 
TeX si accorge che c'è ancora un gruppo non chiuso. 
Il programma riporta qui la riga in cui è stato aperto 
il gruppo `{`. 
Non è in grado di rilevare l'errore effettivo, perché 
`)` è visto come ‘testo normale’.

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5, false);
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>
