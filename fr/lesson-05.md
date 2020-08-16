---
title: "Utiliser les classes de documents pour changer l'apparence"
---

## Qu'est-ce qu'une classe de document?

Vous avez peut-être remarqué que tous les documents LaTeX que nous avons écrits
jusqu'à présent ont commencé par une ligne `\documentclass`, et que
`\documentclass{article}` a été le choix le plus courant (nous avons eu besoin
de `\documentclass{report}` dans [la leçon précédente](lesson-04) pour tester la
commande `\chapter`). Cette ligne est requise dans tous les documents LaTeX, et
est presque toujours la première commande à avoir.

La « classe de document » définit la présentation générale du document, notamment :
- l'apparence : marges, polices de caractères, espacements, etc.
- s'il y a des chapitres ou non,
- si le titre doit figurer sur une page séparée&hellip;

De façon plus général, les classes de documents peuvent également ajouter de
nouvelles commandes ; c'est particulièrement vrai pour les classes très
spécialisées comme celles destinées la création de diaporamas ou de lettres.

La ligne définissant classe de document peut également configurer des
_options globales_ : des paramètres qui s'appliquent au document dans son
ensemble. Ces options sont indiquées entre crochets :
`\documentclass[<options>]{<nom>}`. Cette syntaxe, avec les informations
optionnelles données en premier entre crochets, est utilisée dans de nombreuses
commandes LaTeX.


## Les classes de base

LaTeX est fourni avec un ensemble de classes standards, qui se ressemblent
beaucoup mais avec quelques variations :

- `article` : documents courts sans chapitres,
- `report` (rapport) : documents plus longs avec des chapitres, impression en recto seul,
- `book` (livre) : documents plus longs avec des chapitres, impression en recto-verso,
  avec des annexes au début et à la fin (par exemple un index),
- `letter` (lettre) : correspondance sans section,
- `slides` (diapositives) : pour les diaporamas (mais voir ci-dessous).

Les classes `article`, `report` et `book` proposent des commandes très similaires,
comme nous l'avons déjà vu. Pour l'écriture d'un document de classe `letter`,
les commandes disponibles sont un peu différentes :

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}

\begin{document}

\begin{letter}{Some Address\\Some Street\\Some City}

\opening{Dear Sir or Madam,}

The text goes Here

\closing{Yours,}

\end{letter}

\end{document}
```

Regardez comment ``\\`` est utilisé pour séparer les lignes de l'adresse ; nous
verrons plus tard [comment se fait la séparation des lignes](lesson 11).
La classe `lettre` demande qu'on crée un nouvel environnement `letter` pour
chaque lettre et propose des commandes spécialisées.

Les classes standards `article`, `report` et `book` acceptent les options
`10pt`, `11pt` et `12pt` pour changer la taille de la police, et `twocolumn`
pour composer un document sur deux colonnes.


## Classes plus riches

Les classes de base sont très stables, mais cela implique qu'elles sont assez
conservatrices tant dans leur conception que dans la gamme des commandes
disponibles. Au fil du temps, un certain nombre de classes plus puissantes ont
été écrites, qui permettent de modifier l'apparence des documents sans devoir
faire les choses manuellement (ce que nous verrons
[un peu plus tard](lesson-11)).

L'_American Mathematical Society_ (AMS) fournit des variantes des classes
standards (`amsart`, `amsbook`) avec une conception plus traditionnelle, plus
proche de celle utilisée dans les publications des journaux de mathématiques.

Les deux classes « étendues » les plus polyvalentes et populaires sont le
package KOMA-Script et la classe `memoir`. KOMA-Script offre un ensemble de
classes parallèles aux classes standards : `scrartcl`, `scrreprt` et `scrbook`,
tandis que la classe `memoir`, unique, ressemble davantage à une extension de
la classe `book`.

Ces classes étendues ont de nombreuses possibilités de personnalisation, que
nous allons explorer un peu en travaux pratiques. Vous vous demandez peut-être
comment connaître toutes ces possibilités ; nous en parlerons
[dans une leçon ultérieure](lesson-15), mais vous pouvez toujours prendre de
l'avance !


## Diaporamas

La classe `slides` a été développée pour la réalisation de vraies diapositives
24&times;36 du milieu des années 80, elle ne dispose donc pas de fonctionnalités
pour la création de présentations interactives au format PDF. Il existe des
classes modernes qui font exactement cela : elles sont quelque peu spécialisées
par rapport aux documents LaTeX courants, c'est pourquoi nous les avons
couvertes [en approfondissement](more-05).


## Travaux pratiques

Faites des essais et découvrez comment le changement de classe entre celles
standards, celles du package KOMA-Script et `memoir` affecte l'apparence du
document.

```latex
\documentclass{article} % Changez la classe ici
\usepackage[T1]{fontenc}

\begin{document}

\section{Introduction}

Ceci est un exemple de document avec un texte sans
intérêt\footnote{et une note de bas de page}. Ce paragraphe
est assez long car nous aimerions voir comment rend
ce document quand il est composé sur deux colonnes.

\end{document}
```

Ajoutez l'option de classe `twocolumn` et regardez comment elle change la mise
en page.

Changez la commande `\section` ci-dessus en `\chapitre` et observez l'effet des
options de classe suivantes sur l'utilisation de la classe `scrreprt` :

- `chapterprefix`,
- `headings=small`,
- `headings=big`,
- `numbers=enddot`.
