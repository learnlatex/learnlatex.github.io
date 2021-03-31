---
layout: "lesson"
lang: "de"
title: "Mehr zu: Mathematik"
description: "Diese Lektion zeigt weitere amsmath Umgebungen, wie mathematische Inhalte fett gesetzt werden können, das Erweiterungspaket mathtools und die Verwendung von Unicode-Eingaben im Mathematikmodus"
toc-anchor-text: "Mehr zu: Mathematik"
---

## Weitere amsmath Umgebungen

Zusätzlich zur `align*` Umgebung aus der Hauptlektion bietet `amsmath` weitere
Konstrukte für alleinstehende Gleichungen, insbesondere `gather` für mehrzeilige
Gleichungen, die keiner Ausrichtung bedürfen, und `multiline`, um einen längeren
Ausdruck auf mehrere Zeilen aufzuteilen, wobei die erste Zeile links
und die weiteren rechts ausgerichtet werden. Für diese Umgebungen kann die
`*`-Form verwendet werden, um die Gleichungsnummern auszulassen.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

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

### Spalten in mathematischen Ausrichtungen

Die `amsmath` Umgebungen mit Ausrichtung sind so gestaltet, dass sie Spalten
paarweise erwarten, wobei die erste Spalte jedes Paares rechtsbündig und die
zweite linksbündig ausgegeben wird. Dies ermöglicht die Darstellung mehrerer
Gleichungen mit der Ausrichtung am Relationssymbol.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{amsmath}
\begin{document}
Ausgerichtete Gleichungen
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}
\end{document}
```

Zusätzlich gibt es Varianten der Mathematikumgebungen, die auf `ed` enden, um
einen größeren Term in einer größeren Gleichung zu setzen. Beispielsweise sind
`aligned` und `gathered` Varianten von `align` und `gather`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
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

`aligned` kann ein optionales Argument zur Positionierung ähnlich wie `tabular`
erhalten. Dies ist häufig nützlich um eine Gleichung im Text an der obersten
Zeile auszurichten; vergleiche folgende Elemente einer Liste.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
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

## Fett gesetzte Symbole

LaTeX selbst bietet zwei Methoden zum fetten Satz von mathematischen Symbolen.
Um einen ganzen Ausdruck fett zu setzen, kann `\boldmath` vor diesem verwendet
werden. Der Befehl `\mathbf` setzt einzelne Zeichen oder Wörter aufrecht, fett
und mit Serifen.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}
$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % schlechte Verwendung von \mathbf
\end{document}
```

Wenn einzelne fette Symbole (wie sie von `\boldmath` verwendet würden) bei
ansonsten normaler Schriftstärke benötigt werden, kann der Befehl `\bm` aus dem
`bm` Paket verwendet werden. Dieser funktioniert auch mit Symbolen wie `=` und
griechischen Buchstaben. (Man beachte, dass in obigen Beispiel `\mathbf` keine
Auswirkungen auf `\pi` hatte.)

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

## Das Paket mathtools

Das `mathtools` Paket lädt `amsmath` und fügt weitere Fähigkeiten hinzu, wie
etwa Varianten der Matrixumgebungen, die es erlauben, die Spaltenausrichtung zu
bestimmen.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
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

## Unicode im Mathematikmodus

Wie wir in [Lektion 14](lesson-14) sehen werden, gibt es TeX-Enginevarianten,
die OpenType-Schriftarten verwenden. Standardmäßig nutzen diese Engines
weiterhin die klassischen mathematischen TeX-Schriften, durch die Nutzung des
`unicode-math` Pakets können aber auch OpenType-Mathematikschriften verwendet
werden. Details zu diesem Paket gehen über diese Lektion hinaus, weshalb hier
auf die [Dokumentation](https://texdoc.org/pkg/unicode-math) verwiesen wird. Ein
kleines Beispiel soll aber nicht vorenthalten werden.

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage[ngerman]{babel}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

Eins zwei drei
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Alphanumerische Unicode Mathematik
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
