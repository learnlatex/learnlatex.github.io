---
title: "Choisir des polices de caractères et utiliser Unicode"
---

Lorsque TeX et LaTeX ont commencé à être largement utilisés, ils ne traitaient
en général que les langues européennes, même s'il était déjà possible d'utiliser
d'autres alphabets par exemple pour le grec et le russe.


À l'origine, les accents et les lettres accentuées étaient saisis en utilisant
des séquences de contrôle ou des macros telles que `\c{c}` pour « ç » et `\'e`
pour « é ». Certaines personnes continuent à utiliser ces méthodes de saisie,
par habitude ou parce qu'elles sont plus commodes sur certains claviers,
mais ce n'est généralement plus utile, et on peut actuellement taper ces
symboles directement avec les touches de son clavier.

Avant Unicode, LaTeX fournissait déjà le support de nombreux types d'*encodage
de fichiers* qui permettaient d'écrire du texte dans différentes langues en
natif ; par exemple, en utilisant l'encodage `latin1` les utilisateurs français
pouvaient (et peuvent toujours) écrire `déjà vu` et LaTeX traduisait en interne
les lettres accentuées en commandes TeX pour produire la sortie correcte sans
la gymnastique précédente (`d\'ej\`a{} vu`), depuis longtemps inutile.

Cette approche est toujours utilisée en LaTeX moderne quand on utilise le moteur
`pdflatex`. Par défaut, tous les fichiers sont supposés être en Unicode (encodés
en UTF-8), sauf indication contraire. Bien que ce moteur soit limité aux polices
8&nbsp;bits, la plupart des langues européennes sont supportées.

La sélection des polices avec `pdflatex` utilise un mécanisme robuste, et de nos
jours il existe de nombreuses polices prêtes à l'emploi dans une distribution
LaTeX standard. Par exemple, les polices TeX Gyre sont une suite de polices
d'excellente qualité, dérivées de polices très répandues, comme Times, Helvetica,
Palatino, et d'autres. Charger ces polices est aussi simple que de charger
n'importe quel package, quand on connaît son nom, avec le nom approprié. Ainsi
avec TeX Gyre, pour avoir une police similaire à Times, il faut appeler
« Termes » :


```latex
\usepackage{tgtermes}
```
{: .noedit :}

Avec `pdflatex`, la plupart des polices sont accessibles par des packages. Vous
pouvez consulter le [Catalogue des polices LaTeX](https://www.tug.org/FontCatalogue/)
ou la [page CTAN sur le thème des polices](https://www.ctan.org/topic/font)
(en anglais) pour voir quelques options disponibles. Vous pouvez également
rechercher sur internet la police que vous souhaitez, et chercher ensuite une
version de package compatible avec `pdflatex`. Pour certaines polices
propriétaires, il existe un clone approprié, qui pour la plupart des applications
est assez similaire à l'original.


## L'ère Unicode

Comme `pdflatex` est limité aux encodages de fichiers et aux polices 8&nbsp;bits,
il ne peut pas utiliser nativement les polices OpenType modernes et passer
facilement d'une langue à l'autre en utilisant des différents alphabets (ou
« scripts », pour utiliser le terme technique). Il y a deux remplacements pour
pdfTeX qui utilisent nativement des entrées Unicode et les polices modernes :
XeTeX et LuaTeX. Pour LaTeX, elles sont généralement invoquées dans votre
éditeur en utilisant les moteurs `xelatex` et `lualatex` respectivement.

Avec ces moteurs, la sélection de la police est effectuée au moyen du package
`fontspec`, et pour les documents simples elle peut être aussi triviale ça :

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

Cela permet de sélectionner la police TeX Gyre Termes, comme dans l'exemple
`pdflatex` ci-dessus. Mais cette approche fonctionne pour **toutes** les polices
OpenType. De plus, les polices disponibles pour `pdflatex` restent disponibles
pour `xelatex` et `lualatex` grâce à leurs packages respectifs (ou en chargeant
la police avec `fontspec`, si vous l'avez installée sur votre ordinateur). Le
[Catalogue des polices LaTeX](https://www.tug.org/FontCatalogue/) donne la liste
des polices disponibles au format OpenType, vous pouvez donc l'utiliser pour
rechercher des polices, ainsi que la [page CTAN](https://www.ctan.org/topic/font)
mentionnée plus haut.

Après avoir sélectionné une police, le texte de votre document peut être saisi
directement en Unicode dans le code source. Voici un exemple présentant des
lettres latines et grecques ainsi que des idéogrammes CJK :

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}

\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

Lors du passage d'une langue à l'autre, il est important de modifier également
des éléments comme les motifs de césure, etc. Les packages `babel` et
`polyglossia` sont là pour s'occuper de ça de façon robuste.
