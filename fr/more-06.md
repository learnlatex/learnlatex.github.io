---
title: "Étendre les possibilités de LaTeX avec des packages et des définitions : pour aller plus loin"
---

## Charger plusieurs packages à la fois

La commande `\usepackage` prend une liste de packages séparés par des virgules,
ce qui permet d'en charger plusieurs en une seule fois :
`\usepackage{color,graphicx}` par exemple. Dans ce cas, si vous passez des
options à `\usepackage`, elles s'appliqueront à tous les package de la liste,
ce qui n'est pas forcément ce que vous voulez. De plus, il est sans doute plus
facile de commenter les packages s'ils sont chargés séparément. Nous nous en
tiendrons donc ici à charger chaque package sur une ligne séparée.


## Le package `babel`

Nous avons présenté le package `babel` [dans la leçon principale](lesson-06)
comme un moyen de choisir différents motifs de césure. Il fait beaucoup plus
que cela, selon la ou les langues utilisées. Par exemple, en allemand, il
fournit des raccourcis pour créer des traits d'union conditionnels, et aussi
un moyen de taper rapidement des _umlauts_ (trémas) sans avoir besoin d'un
clavier allemand. Observez aussi que le titre de la table des matières,
généré par la commande `\tableofcontents`, est changé en sa version allemande
_Inhaltsverzeichnis_.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.


\end{document}
```

D'autres paramètres linguistiques apportent des modifications à la mise en
forme : par exemple, dans la typographie française traditionnelle, il y a une
espace avant certains signes de ponctuation, comme `:`, et celle-ci est ajoutée
automatiquement si vous chargez `babel` avec l'option `french`.


## Options globales

Parfois, vous souhaitez qu'une option soit disponible pour tous les packages que
vous avez chargés. Pour ce faire, il suffit de le signaler sur la ligne
`\documentclass` : ainsi, chaque package peut « voir » cette liste. Donc, pour
passer la langue d'un document à tous les packages, on peut utiliser :

```latex
\documentclass[ngerman]{article} % 'ngerman' est l'option pour tous les packages
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## Davantage de définitions

`\newcommand` permet de définir des commandes ayant un maximum de neuf arguments,
le premier pouvant être optionnel.

En reprenant l'exemple de la leçon principale, on pourrait rendre la couleur
optionnelle, en utilisant du bleu par défaut:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Tout sur les \kw{pommes} et les \kw[red]{oranges}.

\end{document}
```

Les arguments optionnels sont délimités par `[]` et s'ils sont omis, la valeur
par défaut spécifiée dans la définition est utilisée.


## `\NewDocumentCommand`

À partir de la version de LaTeX d'octobre 2020, un nouveau système de définition
de commandes est intégré. Dans les versions précédentes, ce système était
disponible via le package `xparse`, que nous utilisons ici pour la compatibilité.

Voici l'exemple ci-dessus, réécrit en utilisant `\NewDocumentCommand` :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Only needed for older LaTeX releases
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Tout sur les \kw{pommes} et les \kw[red]{oranges}.

\end{document}
```

Tout comme `\newcommand`, `\NewDocumentCommand` prend le nom de la commande à
définir (ici `\kw`) puis la définition à proprement parler, en utilisant `#1` à
`#9` pour les arguments, mais la différence réside dans la façon dont les
arguments sont spécifiés.

Contrairement à `\newcommand` où seul le nombre d'arguments était précisé, en
fournissant éventuellement une valeur par défaut pour le premier, avec
`\NewDocumentCommand`, chaque argument est spécifié par une lettre. Ainsi, une
commande à deux arguments serait décrite par `{mm}` plutôt que par `[2]`. Cela
peut paraître plus verbeux mais permet de définir beaucoup plus de types de
commandes. Dans l'exemple ci-dessus, le premier argument est optionnel, par
défaut bleu (`O{blue}`), et le second argument est obligatoire (`m`, comme
_mandatory_).
