---
lang: "fr"
title: "Structure logique de votre document : pour aller plus loin"
---

## Titre du document

LaTeX offre un balisage logique pour le titre des documents : trois commandes
pour définir les « méta-données » et une pour les utiliser.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

\author{U.~N.~Tel \and M.~Illevache}
\title{Ma vie}
\date{1er avril 2020}

\maketitle

Du texte banal.
\end{document}
```

Comme vous pouvez le voir, les commandes `\author`, `\title` et `\date`
enregistrent les informations, et `\maketitle` les utilise. Vous pouvez
également séparer plusieurs auteurs avec `\and`. Les commandes `\author`,
`\title` et `\date` doivent évidemment précéder `\maketitle`. Ici, nous les
avons mises dans le corps du document ; elles peuvent aussi être utilisées
dans le préambule, mais si vous utilisez les raccourcis `babel`, elles ne seront
pas actives à cet endroit.

L'apparence de la sortie de `\maketitle` dépend de la classe du document
([voir la leçon 5](lesson-05)). Il existe un environnement `titlepage` pour
une mise en page personnalisée, mais ça dépasse la cadre de cette introduction.
Si vous voulez faire vos propres maquettes de documents, vous pouvez soit
utiliser une classe personnalisable, comme `memoir`, soit partir d'une des
classes de base de LaTeX, comme `book`, et l'adapter à vos besoins.


## Listes descriptives

Outre les types de listes « ordonnées » et « non ordonnées », LaTeX en fournit
une autre, moins courante : les « listes descriptives ».

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

\begin{description}
\item[Chien:] Le chien est un membre du genre Canis, qui fait partie des canidés
  proches du loup, et est le carnivore terrestre le plus répandu.
\item[Chat:] Le chat est une espèce domestique de petit mammifère carnivore.
  C'est la seule espèce domestiquée de la famille des Félins et on l'appelle
  souvent le chat domestique pour le distinguer des autres membres de la
  famille, tous sauvages.
\end{description}

\end{document}
```


## Travaux pratiques

Essayez de changer les informations passées à `\author`, `\title` and `\date` et
observez la sortie de `\maketitle`. Quels champs sont obligatoires? Toutes ces
commandes doivent-elles comporter un auteur, un titre ou une date dans leur
argument ?

Dressez des listes descriptives, et imbriquez certaines d'entre elles dans
d'autres (ordonnées, non ordonnées ou descriptives).
