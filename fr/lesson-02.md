---
title: "Travailler avec LaTeX"
---

Contrairement à de nombreux programmes informatiques, LaTeX n'est pas une
application unique. Au contraire, il est composé de plusieurs programmes
distincts qui fonctionnent ensemble. Il y a deux catégories indispensables :

- Un _système TeX_,
- Un éditeur de texte (plutôt un qui soit adapté à LaTeX).


## Les systèmes {{ site.tex }}

L'essentiel pour travailler avec LaTeX est de disposer d'un système TeX. Un
système TeX est un ensemble de programmes et de fichiers qui vont rester
« en coulisses » (vous n'aurez pas à les appeler directement), mais qui sont
nécessaires pour faire fonctionner LaTeX.

Il existe aujourd'hui deux grands systèmes TeX, [MiKTeX](https://www.miktex.org)
et [TeX Live](https://tug.org/texlive). Tous deux sont disponibles pour Windows,
MacOS et Linux. MiKTeX est tout de même plutôt orienté vers Windows ; pour
MacOS, TeX Live est inclus dans une collection plus vaste appelée
[MacTeX](http://www.tug.org/mactex/). Chaque système a
[ses avantages](https://tex.stackexchange.com/questions/20036), et vous pouvez
consulter quelques conseils supplémentaires
[sur le site du projet LaTeX](https://www.latex-project.org/get/).

Comme **TeX Live** est disponible sur toutes les plateformes courantes et qu'il
présente certains avantages en termes de performances, nous vous recommandons
de le choisir si vous ne savez pas trop quel système installer.


## Les éditeurs de texte

Les fichiers LaTeX sont simplement du texte brut, ils peuvent donc être ouverts
et modifiés avec n'importe quel éditeur de texte. Il est néanmoins plus pratique
d'avoir un éditeur conçu pour fonctionner avec LaTeX, car il offre des
fonctionnalités telles que la compilation de vos fichiers en un clic,
l'affichage intégré des fichiers PDF et la coloration syntaxique. Une
fonctionnalité très utile de tous les éditeurs LaTeX modernes est SyncTeX :
la possibilité de cliquer sur votre code source pour aller au point correspondant
dans le fichier PDF, ou l'inverse.

Il y a beaucoup plus d'éditeurs LaTeX que ce que nous pouvons espérer énumérer ici :
une liste quasiment exhaustive a été dressée
[sur StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Un éditeur de base, [TeXworks](https://tug.org/texworks), est inclus dans
TeX Live et MiKTeX sous Windows et Linux, et
[TeXShop](https://pages.uoregon.edu/koch/texshop/) est inclus dans MacTeX.

Quel que soit l'éditeur que vous choisissez, nous vous recommandons de
l'installer _après_ votre système TeX, afin que l'éditeur puisse « trouver » le
système TeX et se configurer correctement tout seul.


## Travailler par internet

Il existe aujourd'hui plusieurs sites web qui vous évitent d'installer un
système TeX et un éditeur LaTeX. Ces sites permettent d'éditer vos fichiers
directement dans la page web, puis ils exécutent LaTeX sur leur serveur et
affichent le PDF obtenu.

Certains de ces sites combinent LaTeX avec une interface similaire à celle d'un
traitement de texte, tandis que d'autres s'attachent davantage à vous permettre
de voir le code LaTeX et sont donc plus proches d'une installation locale.

Dans certains cas, ces systèmes vous permettent d'utiliser LaTeX sans avoir
besoin de vous connecter, et nous utilisons l'un d'entre eux,
[LaTeX CGI](https://latexcgi.xyz), pour vous permettre de modifier et tester les
exemples du présent tutoriel. Mais pour travailler sur un projet complet, les
meilleurs systèmes en ligne exigent que vous vous inscriviez avant de les
utiliser. Cela vous permet d'enregistrer votre travail mais aussi de ne pas
surcharger les sites. Nous avons mis en place des liens pour que vous puissiez
éditer nos exemples en utilisant [Overleaf](https://www.overleaf.com), l'un des
principaux sites web pour LaTeX en ligne. Il y en a bien sûr d'autres, par
exemple [Papeeria](https://papeeria.com/).


## Travaux pratiques

Mettez en place une installation LaTeX locale _ou_ un compte avec un service
LaTeX en ligne. Si vous utilisez une installation locale, vous devrez également
choisir un éditeur : nous vous recommandons de commencer par TeXworks ou
TeXShop (voir ci-dessus), puis de vous tourner vers d'autres éditeurs plus
tard, lorsque vous saurez comment _vous_ travaillez le mieux avec LaTeX.

Vous pourrez faire [tous nos exercices dans votre navigateur](help.md), mais
nous voulons vous préparer à travailler sur de vrais documents, c'est donc le
moment idéal pour tout mettre en place.
