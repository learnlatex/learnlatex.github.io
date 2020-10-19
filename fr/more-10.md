---
lang: "fr"
title: "Écrire les mathématiques : pour aller plus loin"
---

## Plus d'alignements avec `amsmath`

En plus de l'environnement `align*` présenté dans la leçon principale, `amsmath`
propose plusieurs autres constructions pour les mathématiques « en exergue »,
notamment `gather` pour les affichages multi-lignes qui ne nécessitent pas
d'alignement, et `multline` pour fractionner une grosse expression sur plusieurs
 lignes, en alignant la première ligne à gauche, et la dernière à droite. Dans
tous les cas, la forme étoilée (avec `*`) supprime la numérotation des
équations.

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


### Les colonnes dans les alignements mathématiques

Les environnements d'alignement `amsmath` sont conçus pour considérer les
colonnes par paires, la première colonne de chaque paire étant alignée à droite
et la seconde à gauche. Cela permet d'afficher plusieurs équations, chacune
étant alignée sur son symbole de relation.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned equations
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

En outre, il existe des variantes des environnements mathématiques « en
exergue » se terminant par `ed`, qui permettent de composer une sous-formule
destinée à être incluse dans une formule plus grande. Par exemple, `aligned`
and `gathered` sont les variantes de `align` and `gather`, respectivement :

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

L'environnement `aligned` prend un argument optionnel similaire à `tabular`,
utile pour aligner une formule mathématique sur sa ligne supérieure. Comparez
par exemple les différents éléments de la liste :

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

## La gras en mode mathématique

En LaTeX standard, il y a deux façons de mettre en gras des symboles
mathématiques. Pour mettre une expression entière en gras, utilisez `\boldmath`
avant l'expression. La commande `\mathbf`, elle, est faite pour mettre des
lettres individuelles ou des mots en romain gras.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % bad use of \mathbf
\end{document}
```

Si vous souhaitez accéder à des symboles en gras (comme le ferait `\boldmath`)
dans une expression non-grasse, vous pouvez utiliser la commande `\bm` du package
`bm`. La commande `\bm` fonctionne également avec des symboles tels que `=` et
les lettres grecques (alors que `\mathbf` n'avait aucun effet sur `\pi` dans
l'exemple ci-dessus).


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

## Le package `mathtools`

Le package `mathtools` charge `amsmath` et ajoute des fonctionnalités
supplémentaires, telles que des environnements pour les matrices comme
ceux de `amsmath`, mais permettant de spécifier l'alignement des colonnes.

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

## Mathématiques et Unicode

Comme nous le verrons dans [la leçon 14](lesson-14), il existe des variantes de
moteurs TeX qui utilisent des polices OpenType. Par défaut, ces moteurs
utilisent toujours les polices mathématiques TeX classiques, mais vous pouvez
utiliser le package `unicode-math` pour utiliser des polices mathématiques
OpenType. Les détails de ce package ne sont pas couverts par ce cours et nous
vous renvoyons [à sa documentation](https://texdoc.net/pkg/unicode-math).
Cependant, voici un petit exemple :

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

One two three
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode Math Alphanumerics
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
