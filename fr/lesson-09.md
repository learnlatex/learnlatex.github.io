---
title: "Références croisées"
---

## Étiquettes et références : comment fonctionnent `\label` et `\ref`?

Quand on rédige un document, quelle que soit sa longueur, on fait souvent
référence à des éléments tels que des figures, des tableaux ou des équations.
Heureusement, LaTeX peut ajouter automatiquement les bonnes références ;
il suffit de quelques commande simples. Pour que LaTeX se souvienne d'un endroit
dans votre document, vous devez l'« étiqueter », puis à d'autres endroits,
vous y ferez référence:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Bonjour tout le monde!

C'est mon premier document LaTeX.

\section{Titre de la première section}

Texte de la première section.


\subsection{Sous-section de la première section}
\label{subsec:etiquette1}

Texte de la sous-section.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:etiquette2}
\end{equation}

Dans la sous-section~\ref{subsec:etiquette1}, nous avons l'équation~\ref{eq:etiquette2}.
\end{document}
```

Il y a deux commandes `\label{...}` : l'une après la sous-section et l'autre
dans l'environnement de l'équation. Les commandes `\ref{...}` de la dernière
phrase utilisent les noms des étiquettes ainsi définies. Lorsqu'on l'exécute,
LaTeX enregistre les informations sur les étiquettes dans un fichier auxiliaire.
Pour `\label{subsec:labelone}`, LaTeX sait qu'il est maintenant dans une
sous-section et il enregistre donc le numéro de la sous-section.
Pour `\label{eq:labeltwo}`, LaTeX sait que l'environnement d'intérêt le plus
récent est une équation, il enregistre donc les informations relatives à cette
équation. Lorsqu'on demande la référence avec `\label{...}`, LaTeX l'obtient
à partir du fichier auxiliaire.

Les chaînes `subsec:` et `eq:` ne sont pas utilisées par LaTeX ; il s'agit juste
d'une convention pour vous aider à retrouver facilement ce à quoi vous faite
référence pendant que vous écrivez (vous pouvez choisir une autre convention).
LaTeX garde seulement une trace de ce qu'il a traité le plus récemment.

Parfois, vos références apparaissent dans la sortie PDF sous forme de doubles
points d'interrogation en gras, **??**. L'explication est qu'en raison de la
création de ce fichier auxiliaire, la première fois que vous compilez un
document, l'étiquette n'a pas encore été enregistrée. Lancez LaTeX une fois de
plus et vous serez prêt. (D'habitude, pendant l'écriture, vous lancerez LaTeX
plusieurs fois de toutes façons, donc en pratique, ce n'est pas un problème).

Remarquez les tildes (`~`) avant les références. La tilde représente une espace
qui ne sera jamais utilisée pour mettre une coupure de ligne (une
_espace insécable_). Ici, elle sert donc à empêcher LaTeX de mettre le mot
« sous-section » et son numéro sur deux lignes distinctes (ou « équation » et
son numéro), ce qui serait inesthétique.


## Où mettre les `\label`?

La commande `\label` se réfère toujours à l'entité numérotée précédente : une
section, une équation, un flottant, etc. Cela signifie que la commande `\label`
doit toujours venir **après** la chose à laquelle vous voulez faire référence.
En particulier, lorsque vous créez des flottants, le `\label` doit venir
**après** (ou mieux, dans), la commande `\caption`, mais à l'intérieur de
l'environnement du flottant.


## Travaux pratiques

Essayez d'ajouter de nouvelles parties numérotées (sections, sous-sections,
listes&hellip;) au document de test et comptez combien d'exécutions sont
nécessaires pour faire fonctionner les commandes `\label`.

Ajoutez des flottants et voyez ce qui se passe quand vous mettez `\label`
_avant_ la commande `\caption` au lieu d'après. Pouvez-vous prédire le résultat ?

Que se passe-t-il si vous mettez un `\label` pour une équation après le
`\end{equation}`?
