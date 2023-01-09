---
layout: "lesson"
lang: "it"
title: "Di più su: Matematica"
description: "Questa lezione mostra ulteriori ambienti di allineamento di amsmath, come si scrive la matematica in nero, il pachetto mathtools, e l'uso di un input Unicode per la matematica."
toc-anchor-text: "More on: Mathematics"
---


## Ulteriori allineamenti di `amsmath`

Oltre all'ambiente `align*` descritto nella lezione principale,
`amsmath` definisce numerosi altri costrutti per la matematica
in display, in particolare `gather` per display su più righe
che non richiedono allineamento, e `multline`
per suddividere una singola espressione più lunga in più righe,
delle quali la prima è allineata a sinistra e l'ultima a destra.
In tutti i casi, la forma `*` omette la numerazione delle formule.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}

Gather:
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f \\
  x^2+x=10
\end{gather}

Multline:
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x \\
    + (f+a+b+c)
\end{multline*}

\end{document}
```

### Colonne negli allineamenti matematici

Gli ambienti di allineamento di `amsmath` sono progettati
per considerare le colonne a coppie, con la prima colonna di
ogni coppia allineata a destra e la seconda a sinistra.
Questo permette di mostrare più equazioni in una volta sola,
ciascuna allineata in riferimento al proprio simbolo
di relazione:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}

Equazioni allineate:
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

Inoltre esistono varianti degli ambienti per i display 
che terminano in `-ed`, che permettono di comporre
una ‘sottoformula’ da inserire in un display più grande. 
Per esempio, `aligned` e `gathered` sono rispettivamente 
varianti di `align` e `gather`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}

Aligned:
\[
\left.\begin{aligned}
  a &= b \\
  c &= d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
  b &= a \\
  d &= c
\end{aligned}\right.
\]

\end{document}
```
`aligned` accetta uno specificatore di posizione facoltativo
simile a quello di  `tabular`. Questo è spesso utile per 
allineare una formula matematica in linea alla sua riga 
superiore. 
Confronta le due voci dell'elenco nell'esempio seguente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}

\begin{itemize}
\item 
$\begin{aligned}[t]
a &= b\\
c &= d
\end{aligned}$
\item 
$\begin{aligned}
a &= b\\
c &= d
\end{aligned}$
\end{itemize}

\end{document}
```

## Bold Math
LaTeX standard prevede due modi per mettere in nero dei
simboli matematici. 
Per scrivere in nero un'intera espressione, basta dare
`\boldmath` prima dell'espressione.
È disponibile anche il comando `\mathbf` per mettere in
tondo nero singole lettere o singole parole.
The command `\mathbf` is also available to set individual
letters or words in upright bold roman.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}

$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % cattivo uso di \mathbf

\end{document}
```
Se desideri adoperare simboli in nero (come farebbe 
`\boldmath`) in un'espressione di peso normale, 
c'è il comando `\bm` dal pacchetto `bm`. 
Osserva che `\bm` funziona anche con simboli come `=` e
le lettere greche. (Il comando `\mathbf`, infatti, 
non ha effetto su `\pi` nell'esempio precedente.)

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Mathtools
Il pacchetto `mathtools` carica `amsmath` e aggiunge
diverse funzionalità supplementari, come le varianti 
degli ambienti di `amsmath` per le matrici, che 
permettono di specificare l'allineamento delle colonne.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10 & 11 \\
   1 &  2 \\
  -5 & -6
\end{pmatrix*}
\]

\end{document}
```

## Matematica Unicode

Come vedremo nella [lezione 14](lesson-14), 
esistono delle varianti dei motori TeX che 
adoperano font OpenType. 
Per impostazione predefinita, questi motori adoperano
ancora i classici font di TeX per la matematica, ma
è possibile comporre la matematica con font
OpenType grazie al pacchetto `unicode-math`.
I dettagli di questo pacchetto esulano dai limiti
di questo corso, perciò ti rimandiamo alla
[documentazione del pacchetto](https://texdoc.org/pkg/unicode-math).
Tuttavia, te ne diamo qui un piccolo esempio.

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

Uno due tre
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Matematica Unicode alfanumerica
\[
A + \symfrak{A} + \symbf{A} + \symcal{A} + \symscr{A} + \symbb{A}
\]

\end{document}
```
