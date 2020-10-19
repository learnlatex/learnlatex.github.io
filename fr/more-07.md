---
lang: "fr"
title: "Inclure des images et les faire « flotter » : pour aller plus loin"
---

## Nommer les fichiers d'images

LaTeX fonctionne sur de nombreuses plates-formes, les noms de fichiers méritent
donc une réflexion pour être portables d'un ordinateur à l'autre, surtout si
vous collaborez avec d'autres personnes. Le plus sûr est de nommer vos
graphiques simplement, en particulier sans espaces. Par exemple, si vous voulez
organiser vos fichiers en conservant tous les graphiques dans un sous-répertoire,
alors quelque chose comme `\includegraphics[width=30pt]{pics/mom.png}` est
portable et devrait le rester dans le temps.

Les espaces dans les noms de fichiers sont souvent problématiques, même s'ils
sont de mieux en mieux pris en charge. De façon générale, si vous rencontrez des
problèmes et que vous avez des espaces dans un nom de fichier, commencez par
supprimer ces espaces avant toute autre chose.

La prise en charge des caractères accentués est variable ; certains systèmes,
en particulier sous Windows, posent des problèmes. Si vous utilisez des noms de
fichiers contenant des caractères accentués et que vous rencontrez des problèmes,
faites un test en utilisant uniquement des caractères ASCII.


## Stocker les images dans un sous-répertoire

Une façon courante de ranger ses fichiers sources est de placer toutes les images
dans un sous-répertoire. Vous pouvez alors les inclure par leur chemin relatif,
comme illustré ci-dessus ; notez que le caractère `/` est utilisé pour séparer
des parties du chemin _même sous Windows_.

Si vous avez beaucoup d'images, vous souhaiterez peut-être définir à l'avance le
sous-répertoire les contenant. Cela se fait en utilisant `\graphicspath`, qui
nécessite une entrée pour chaque sous-répertoire, entre accolades `{...}`. Par
exemple, pour inclure les sous-répertoires `figs` et `pics`, on aurait :

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Notez que les noms de répertoires doivent se terminer par un `/` final.


## Produire des graphiques

Comme nous l'avons vu, il est facile d'inclure dans un document LaTeX des images
venant de la plupart des sources, y compris des graphiques de logiciels
scientifiques. Dans ce cas, enregistrez-les plutôt au format PDF si vous le
pouvez, car il s'agit d'un format pérenne et facile à manipuler (notamment, on
peut le mettre à l'échelle sans perte de qualité). Si vous passez par des bitmaps,
conservez une haute résolution. Vous pouvez dessiner des images à la souris qui
incluent des bouts de code LaTeX avec [Inkscape](https://inkscape.org/). Une
alternative qui étend ces techniques de dessin à trois dimensions est
[Asymptote](https://www.ctan.org/pkg/asymptote). Ces deux logiciels produisent
des fichiers que vous pourrez inclure dans votre document.

Vous pouvez également créer des dessins et graphiques parfaitement adaptés à
votre document LaTeX, utilisant la même police de caractères, éventuellement
avec des formules mathématiques et des `\labels` auxquels avec vous pourrez faire
référence en utilisant des packages LaTeX. Pour cela, vous pouvez dessiner
directement à l'intérieur de votre document, avec [Ti*k*Z](https://ctan.org/pkg/pgf)
ou son alternative, [PSTricks](https://ctan.org/pkg/pstricks-base). Attention,
c'est pratique et puissant, mais rend rapidement le code-source de vos documents
plus complexe.


## Positionner des flottants

Le placement des flottants LaTeX est complexe, et parfois frustrant. La demande
la plus courante consiste à placer l'image exactement là où elle se trouve dans
le fichier d'entrée. C'est ce que fait le package `float`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Pour avoir du texte de remplissage
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Une image d'exemple}
\end{figure}
\lipsum[8-15]
\end{document}
```

L'option `H` met l'image « absolument ici » (_**h**ere_). Cependant,
en règle générale, il est déconseillé d'utiliser `H`, car ça a tendance à
laisser de grands espaces vides dans votre document.


## D'autres types de flottants

Nous [allons bientôt voir](lesson-08) qu'on peut mettre des tableaux dans des
flottants, dans un environnement `table`. Cependant, rien n'oblige à mettre les
images dans des environnement `figures`, et les tableaux dans des environnements
`tables` ; c'est juste une convention.

On peut définir d'autres types de flottants ; chaque type est inséré
indépendamment. Ça se fait avec le package [`trivfloat`](https://ctan.org/pkg/trivfloat),
qui fournit une commande unique, `\trivfloat`, pour créer de nouveaux type
d'environnements de flottants.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Pour avoir du texte de remplissage
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Une image d'exemple}
\end{image}
\end{document}
```
