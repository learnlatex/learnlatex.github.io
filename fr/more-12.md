---
lang: "fr"
title: "Bibliographies et références biblio : pour aller plus loin"
---

## Le tri pour d'autres langues que l'anglais

Le programme BibTeX a été écrit principalement pour traiter des références en
anglais. Il est resté très limité dans sa gestion des caractères accentués, et
encore plus limité avec les lettres non-latines. En revanche, le programme Biber
a été écrit dès le départ pour gérer correctement toutes les langues, y compris
quand elles sont mélangées.

Donc si vous voulez trier votre bibliographie dans un ordre autre que l'ordre
anglais, vous avez vraiment intérêt à utiliser `biblatex` et Biber, plutôt que
`natbib` et BibTeX.


## Des hyperliens dans les bibliographies

Si vous chargez le package `hyperref`, [comme on l'a vu plus tôt](more-09), il
transformera automatiquement certaines parties de votre bibliographie en liens
hypertextes. C'est notamment utile pour les URL et les DOI.


## Les bonnes pratiques avec BibTeX peuvent dépendre des styles

La syntaxe globale des fichiers BibTeX est la même, que vous utilisiez la chaîne
BibTeX ou `biblatex`, mais les champs pris en charge (utilisés par le style) et
leur signification exacte peuvent non seulement varier entre BibTeX et `biblatex`,
mais aussi entre les différents styles BibTeX. Beaucoup de types d'entrées et de
champs sont communs à presque tous les styles, mais pas tous.

Par exemple l'URL : certains anciens styles BibTeX `.bst` (notamment les
« styles BibTeX standards », comme `plain.bst`, `unsrt.bst`&hellip;) sont
antérieurs à l'invention de l'URL et ne comportent pas de champ dédié à l'URL
d'une ressource en ligne. De nombreux styles plus récents possèdent, eux, un
champ `url` dédié. Une solution simple pour afficher l'URL avec les anciens
styles est d'utiliser le champ `howpublished`, mais avec les nouveaux styles,
il vaut bien sûr mieux utiliser le champ `url`, fait pour ça.

Pour mettre à profit tout le potentiel du style que vous aurez choisi, il vous
faudra découvrir l'ensemble des champs qu'il supporte et leur sémantique.
