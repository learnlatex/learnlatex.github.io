---
layout: "lesson"
lang: "ca"
title: "Més sobre: Matemàtiques"
description: "En aquesta lliçó s'explica més sobre els entorns amsmath d'alineació, com fer text matemàtic en negreta, l'extensió matemàtica del paquet mathtools, i utilitzar entrada Unicode per a expressions matemàtiques."
toc-anchor-text: "Més sobre: Matemàtiques"
---


## Més alineacions amb `amsmath`

A més a més de l'entorn `align*` que hem ensenyat en la lliçó principal, `amsmath` disposa d'altres mètodes matemàtics de tipus display, entre d'altres destaquem `gather` per a displays multilínia que no necessiten alineació, i `multiline` per tallar i estendre una expressió molt llarga en diverses línies, justificant la primera línia a l'esquerra, i la última a la dreta. En tots els casos l'ús de `*` evita l'enumeració de l'equació.

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

### Columnes en alineacions matemàtiques

Els entorns d'alineació `amsmath` estan dissenyats per agafar parells de columnes amb la primera columna de cada parell justificat a la dreta i el segon justificat a l'esquerra. Això permet mostrar múltiples equacions cadascuna justificada respecte el símbol de relació entre els membres de les equacions.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Equacions alineades
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

A més a més, hi ha variants dels entorns display que finalitzen amb `ed` i que permeten crear una subpart d'un display més llarg, per exemple, `aligned` i `gathered`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
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

`aligned` pren un argument opcional de posició similar a `tabular`. Això sovint és últil quan volem alinear una fórmula matemàtica inline en la fila de dalt; compara els elemens de la llista en el següent exemple.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
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

## Negreta en Matemàtiques
El LaTeX estàndard té dos mètodes per tal de què els símbols matemàtics estiguin en negreta. Per fer que tota l'expressió estigui en negreta usarem `\boldmath` abans d'entrar l'expressió. La comanda `\mathbf` també està disponible per a posar negreta en caràcters o paraules de forma individual.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % mal ús de \mathbf
\end{document}
```

Si vols accedir a símbols en negreta (tal com s'utilitzaria amb `\boldmath`) dins d'una expressió matemàtica que utilitza caràcters normals, podem utilitzar la comanda `\bm` del paquet `bm`. Fixa't que `\bm` també treballa amb símbols com ara `=` o les lletres gregues. (Fixa't que `\mathbf` no té cap efecte sobre `\pi` en l'exemple anterior.)

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
El paquet `mathtools` carrega `amsmath` i afegeix algunes opcions addicionals, com ara algunes variants dels entorns per a matrius de `amsmath` que permeten indicar la justificació de les columnes.

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

## Unicode Math

Com veurem en la [Lliçó 14](lesson-14), hi ha variants del motor TeX que utilitzen fonts OpenType. Per defecte, aquests motors encara utilitzen les fonts clàssiques matemàtiques de TeX però hem d'utilitzar el paquet `unicode-math` si volem utilitzar les fonts OpenType. Els detalls d'aquest paquet sobrepassen el curs però aquí tens la [documentació](https://texdoc.org/pkg/unicode-math). Tanmateix, et donem un petit exemple.

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

Un dos tres
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Símbols matemàtics i alfanumèrics amb Unicode
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
