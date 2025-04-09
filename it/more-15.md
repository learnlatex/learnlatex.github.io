---
layout: "lesson"
lang: "it"
title: "Di più su: Affrontare gli errori"
description: "Questa lezione mostra alcuni degli errori più comuni di LaTeX, spiega gli errori concatenati e gli errori silenziosi."
toc-anchor-text: "Di più su: Affrontare gli errori."
---

## Errori segnalati alla fine degli ambienti

Con alcuni ambienti (in particolare, con 
`tabularx` e con quelli di `amsmath` per 
gli allineamenti delle formule) TeX
esamina l'intero corpo dell'ambiente 
prima di elaborarne il contenuto. 
Ciò significa che ogni errore presente 
_dentro_ l'ambiente verrà segnalato a 
livello dell'ultima sua riga.
Tuttavia, come abbiamo visto nella 
lezione principale, il messaggio d'errore
visualizza anche un po' di contesto,
ciò che dovrebbe permettere di individuare
la posizione corretta dell'errore.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2} \\
\beta  &= \frak{2}{3} \\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Qui l'errore verrà segnalato a riga 11

```
l.12 \end{align}
```
{: .noedit :}

nonostante che l'errore vero e proprio 
(`\frak` anziché `\frac`)
si trovi a riga 9, come mostrato dalle 
righe di contesto:


```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Errori spuri causati da errori precedenti

Quando si lancia LaTeX in modo interattivo 
dalla riga di comando, è possibile interrompere 
l'elaborazione al primo errore con `x`, modificare 
il documento ed eseguirne una nuova composizione. 
Tuttavia, se decidi di ignorare temporaneamente 
l'errore o adoperi un editor o un sistema on-line 
che lo fa per te, TeX proverà a tornare
sui propri passi; la cosa, però, potrebbe causare 
una serie di numerosi altri errori.

Quindi non preoccuparti troppo del _numero_ di 
errori notificati, e concentrati sempre sulla 
correzione del _primo_ errore segnalato.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Parola_parola  $\alpha + \beta$.

Ancora testo.

\end{document}
```

Qui l'errore è il trattino basso `_`, 
che dovrebbe essere inserito come `\_`.

TeX lo riporta correttamente con il _primo_ 
messaggio d'errore

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Tuttavia, se ignori la richiesta indicata dal `?`, 
TeX cerca di aggiustare le cose aggiungendo un `$`, 
di modo che `_` venga visto come un pedice 
in modo matematico. 
Il modo matematico, poi, continua fino al `$` 
di chiusura, ma in questo modo il successivo 
`\alpha` viene letto nel modo testuale,
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


## Errori che non generano un messaggio d'errore

Alcuni errori, in particolare quelli che non 
vengono rilevati fino alla fine del file, non 
generano un vero messaggio d'errore,
ma producono solo un avviso nel file di registro.

Se componi l'esempio seguente con 
TeXLive.net, otterrai correttamente il PDF
finale; per vedere il messaggio
d'errore nel registro, devi aggiungere
`%!TeX log` prima della dichiarazione di classe.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Testo {\large un po' di testo grande) in corpo normale?

\end{document}
```

Qui la modifica del corpo del font è stata 
erroneamente terminata con `)` invece che con `}`. 
TeX non rileva la cosa se non alla fine del file, 
quando si accorge che c'è ancora un gruppo non chiuso,
e nel messaggio la riga (la numero 6) in cui è 
stato aperto il gruppo con `{`. 
TeX non è in grado di rilevare l'errore effettivo, 
perché vede `)` come ‘testo normale’.

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 6 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
  rlselectline('pre0',10);
  rlselectline('pre3',5);
  rlselectline('pre6',6);
  }, false);
</script>
