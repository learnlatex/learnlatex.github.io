---
layout: "lesson"
lang: "nl"
title: "Meer over: Wiskunde"
description: "Deze les laat meer amsmath-uitlijnomgevingen zien, hoe je wiskunde vet zet, het wiskunde-uitbreidingspakket mathtools, en het gebruik van Unicode-invoer voor wiskunde."
toc-anchor-text: "Meer over: Wiskunde"
---

## Verdere `amsmath`-uitlijningen

Naast de `align*`-omgeving die in de hoofdles werd getoond, heeft `amsmath` verschillende andere wiskundige weergaveomgevingen, met name `gather` voor meerregelige weergaven zonder uitlijning, en `multline` voor het splitsen van een grotere, enkele uitdrukking over meerdere regels, waarbij de eerste regel links en de laatste rechts wordt uitgelijnd.
In alle gevallen onderdrukt de `*`-vorm standaard de vergelijkingnummers.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{amsmath}

\begin{document}

Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### Kolommen in wiskundige uitlijning

De `amsmath`-uitlijnomgevingen zijn ontworpen om kolomparen te gebruiken waarbij de eerste kolom rechts wordt uitgelijnd en de tweede links.
Dit maakt het mogelijk om meerdere vergelijkingen te tonen die netjes bij hun gelijkheidstekens uitgelijnd staan.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{amsmath}
\begin{document}
Uitgelijnde vergelijkingen
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

Daarnaast zijn er varianten van de weergaveomgevingen die eindigen op `ed` en die een subterm binnen een grotere weergave mogelijk maken.
`aligned` en `gathered` zijn bijvoorbeeld varianten van respectievelijk `align` en `gather`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned` accepteert een optioneel positioneel argument, vergelijkbaar met `tabular`.
Dit is handig om een inline wiskundige formule uit te lijnen op de bovenste rij; vergelijk de items in de lijst in het volgende voorbeeld.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## Vetgedrukte wiskunde

Standaard voorziet LaTeX twee methoden om symbolen vet te zetten in de wiskundemodus.
Gebruik `\boldmath` vóór je de uitdrukking invoert om een volledige uitdrukking vet te maken.
Het commando `\mathbf` is ook beschikbaar om individuele letters of woorden in vetgedrukt rechtop romeins te zetten.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % fout gebruik van \mathbf
\end{document}
```

Als je vetgedrukte symbolen (zoals gebruikt door `\boldmath`) wil gebruiken binnen een uitdrukking met voor de rest een normaal gewicht, dan kan je het commando `\bm` gebruiken uit het `bm`-pakket.
Merk op dat `\bm` ook werkt met symbolen zoals `=` en Griekse letters.
(`\mathbf` heeft bijvoorbeeld geen effect op `\pi`.)

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Mathtools

Het pakket `mathtools` laadt `amsmath` en voegt extra functies toe, zoals varianten van de `amsmath` matrixomgevingen waarbij de kolomuitlijning kan worden gespecificeerd.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## Unicode-wiskunde

Zoals je zal zien in [Les 14](lesson-14), zijn er varianten van TeX-engines die OpenType-lettertypen gebruiken.
Standaard gebruiken deze engines nog steeds klassieke wiskundige TeX-lettertypen, maar je kan het `unicode-math`-pakket gebruiken om OpenType-wiskundige lettertypen te gebruiken.
De details van dit pakket vallen buiten de opzet deze lessen, zie de [pakketdocumentatie](https://texdoc.org/pkg/unicode-math).
We geven hier wel een klein voorbeeld.

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage[dutch]{babel}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

Eén twee drie
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Alfanumerieke Unicode-wiskundetekens
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
