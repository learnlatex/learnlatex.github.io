---
title: "Étendre les possibilités de LaTeX avec des packages"
---

Après avoir déclaré une classe, dans le préambule, vous pouvez modifier les
fonctionnalités de LaTeX en ajoutant un ou plusieurs _packages_ (ou « paquets »).
Ceux-ci peuvent :

- modifier la façon dont certaines parties de LaTeX fonctionnent,
- changer l'apparence du document,
- ajouter de nouvelles commandes à LaTeX,


## Modifier le fonctionnement de LaTeX

Le « noyau » de LaTeX (son cœur) est assez limité quant à la personnalisation
par l'utilisateur, mais LaTeX est modulaire par nature, et des packages
complémentaires résolvent les problèmes courants. Le premier problème est de
s'adapter aux différentes langues humaines, pour prendre en compte les
spécificités de la coupure des mots en fin de ligne, de la ponctuation, des
citations, de la localisation, etc.). Les différentes langues ont des règles
différentes, et il est important de dire à LaTeX lesquelles utiliser. C'est le
package `babel` qui s'occupe de tout ça, avec des options pour chaque langue :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % Pour obtenir des césures en fin de lignes

\begin{document}

Voici beaucoup de texte de remplissage pour démontrer comment le LaTeX s'occupe des
coupures de mots en fin de ligne; pour ça, il nous faut au moins un point de césure.
Voici beaucoup de texte de remplissage pour démontrer comment le LaTeX s'occupe des
coupures de mots en fin de ligne; pour ça, il nous faut au moins un point de césure.

\end{document}
```

Décommentez la ligne pour charger `babel` en mode français et observez les
conséquences. Les règles de césure par défaut sont en anglais américain.

Le package `babel` fait bien plus que de la césure, selon la langue concernée ;
nous [approfondissons ici](more-06), si vous en avez besoin.


## Changer l'apparence du document

Il est utile de pouvoir ajuster certains aspects de l'apparence indépendamment
de la classe du document. Le plus évident est celui des marges des pages. Nous
avons déjà utilisé le package `geometry` dans l'exemple ci-dessus, mais testons
maintenant un exemple dédié aux marges (attention, le fichier PDF contiendra
plusieurs pages) :

```latex
\documentclass{book}
\usepackage[T1]{fontenc}

\usepackage[margin=1in]{geometry}

\begin{document}
Bonjour tout le monde!

C'est mon premier document LaTeX.

% ================
\chapter{Chapitre un}
Introduction du premier chapitre.


\section{Titre de la première section}
Texte de la première section.

Second paragraphe.

\subsection{Sous-section de la première section}

Texte de la sous-section.


% ================
\section{Seconde section}

Texte de la seconde section.

\end{document}
```

Observez le rendu avec et sans le package `geometry`.


## Ajouter des commandes

L'un des points forts de LaTeX est que vous avez des milliers de packages à
votre disposition, notamment pour la rédaction de textes mathématiques, pour
les hyperliens, pour l'utilisation avancée de la couleur, etc. Nous verrons
quelques packages courants dans les prochaines leçons.


## Travaux pratiques

Essayez d'écrire un texte dans d'autres langues européennes et voyez comment
`babel` peut changer les césures : vous pouvez chercher du texte sur internet,
et deviner les bonnes options.

Essayez de modifier les marges dans l'exemple avec `geometry`. Vous pouvez
définir séparément les marges `top` (supérieure), `bottom` (inférieure), `left`
(gauche) et `right` (droite) en utilisant une liste séparée par des virgules.

Essayez de charger le package `lipsum` et ajoutez ensuite la commande `\lipsum`
à votre document. Vous devinez pourquoi ce package est utile pour concevoir des
exemples ?
