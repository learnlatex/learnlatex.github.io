---
title: "Étendre les possibilités de LaTeX avec des packages : pour aller plus loin"
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
clavier allemand.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % 'ngerman' est l'option pour Babel

\begin{document}

H"ohe

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

H"ohe

\end{document}
```
