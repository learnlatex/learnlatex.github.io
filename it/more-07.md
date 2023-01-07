---
layout: "lesson"
lang: "it"
title: "Di più su: Inclusione e collocamento di immagini esterne sulla pagina"
description: "Questa lezione fornisce dettagli su come nominare e archiviare 
meglio i file grafici da adoperare con LaTeX e su come creare file grafici 
con gli strumenti offerti da LaTeX."
toc-anchor-text: "Di più su: Inclusione e collocamento di immagini esterne sulla pagina"
---

## Assegnare un nome ai file grafici

LaTeX funziona su numerose piattaforme, perciò 
i nomi dei file meritano qualche riflessione. 
La cosa più sicura da fare è assegnare ai file
grafici nomi semplici, in particolare _senza spazi_.
Per esempio, se intendi organizzarli mantenendo
tutti i file grafici in una stessa sottocartella,
una cosa come `\includegraphics[width=30pt]{immagini/mamma.png}`
ti assicura la massima portabilità ed efficacia anche
nel lungo termine.

Tradizionalmente, gli spazi nei nomi dei file sono 
alquanto problematici, anche se ora sono in genere 
supportati. 
Tuttavia, se ci sono degli spazi nel nome e riscontri 
dei problemi, per prima cosa potresti provare 
a rimuoverli.

Anche il supporto dei caratteri accentati è alquanto 
variabile; ci sono problemi su alcuni sistemi, in particolare 
Windows. Se riscontri problemi con i caratteri accentati 
nei nomi dei file, fa' una prova adoperando solo 
caratteri ASCII.

## Archiviare i file grafici in una sottocartella

Un metodo diffuso per organizzare i file sorgente consiste 
nel mettere tutti i file grafici in una sottocartella e
richiamarli in seguito indicandone il percorso relativo, 
come si è mostrato sopra; si noti che per separare parti
del percorso si adopera il carattere `/` 
_anche su Windows_.

Se figure e immagini sono molte, una buona pratica è 
impostarne le sottocartelle in anticipo.
Lo si può fare con il comando `\graphicspath`, che richiede 
che ogni sottocartella sia a propria volta racchiusa tra
parentesi graffe. 
Per esempio, per includere entrambe le sottocartelle `figure` 
e `immagini`, avremmo:

<!-- {% raw %} -->
```latex
\graphicspath{{figure/}{immagini/}}
```
<!-- {% endraw %} -->

Osserva, in particolare, il `/` dopo il nome della cartella.

## Produrre file grafici

Come abbiamo visto, LaTeX è in grado di adoperare facilmente
file grafici provenienti dalla maggior parte delle fonti,
compresi i grafici prodotti da software scientifici.
In questo caso, ti consigliamo di salvarli come PDF, se
possibile, perché è un formato universale e facilmente
gestibile (in particolare, non perde in qualità scalandolo).
Dovendo passare per immagini bitmap, cerca di realizzarle
ad alta risoluzione.
Puoi creare immagini con il mouse che contengano frammenti
di codice LaTeX con [Inkscape](https://inkscape.org/). 
Un'alternativa che estende questo modo di disegnare
alle tre dimensioni è 
[Asymptote](https://www.ctan.org/pkg/asymptote). 
Questi due programmi producono file che potrai
inserire nel tuo documento.

Puoi anche realizzare veri e propri disegni che si adattano
a LaTeX con altissima precisione, oppure equazioni ed etichette
che si ‘immergono’ perfettamente nel testo del tuo documento.
È possibile disegnare direttamente nel codice sorgente 
(senza importare immagini dall'esterno, cioè), il che è 
comodo, anche se a costo di documenti più complessi e
pesanti, con [Ti*k*Z](https://ctan.org/pkg/pgf) o la sua
alternativa 
[PSTricks](https://ctan.org/pkg/pstricks-base).

## Collocare gli oggetti galleggianti

Il meccanismo con cui LaTeX mette gli oggetti galleggianti
sulla pagina è complesso. 
La richiesta più comune è quella di stamparli 
nell'output nel punto _esatto_ in cui si trovano 
nel sorgente. 
Per farlo, c'è il pacchetto `float`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % testo fittizio di riempimento
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Un'immagine d'esempio}
\end{figure}
\lipsum[8-15]
\end{document}
```

Osserva l'opzione `H`, che mette l'oggetto ‘qui, 
in ogni caso’ (_Here_).
Tuttavia, spesso se ne sconsiglia l'uso, perché potrebbero 
crearsi ampie porzioni di spazio bianco nel documento.

## Altri tipi di oggetti galleggianti

[Presto vedremo](lesson-08) che tra gli oggetti galleggianti
possiamo mettere anche le tabelle, che andranno
nell'ambiente `table`. 
Tuttavia, quello di mettere le immagini nell'ambiente `figure`
e le tabelle nell'ambiente `table` _non è un obbligo_, 
ma solo una convenzione.

Puoi definire altri tipi di ambiente galleggiante,
ciascuno dei quali viene inserito nel documento in
modo indipendente.
Per farlo, puoi adoperare il pacchetto
[`trivfloat`](https://ctan.org/pkg/trivfloat), che fornisce un unico
comando, `\trivfloat`, per creare nuovi tipi di oggetto galleggiante.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % testo fittizio di riempimento
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Un'immagine d'esempio}
\end{image}
\end{document}
```
