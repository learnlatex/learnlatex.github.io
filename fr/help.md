---
layout: "page"
lang: "fr"
title: "Utiliser le site learnlatex.org"
description: "Cette page présente le site learnlatex.org lui-même et explique la meilleure façon de l'utiliser."
permalink: /fr/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# Aide

## Naviguer sur ce site web

Ce cours se compose de 16 leçons principales, accessibles à partir de la
[table des matières]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }})
de [la page d'accueil](./).

Chaque leçon a un lien avec vers une leçon d'approfondissement sur le même
sujet. Il est possible de suivre les 16 leçons _sans lire les leçons
d'approfondissement_.

À la fin du cours, il y a une leçon spécifique au français, et enfin une
galerie d'exemples de packages illustrant des utilisations de LaTeX
non couvertes par ce cours.

---

## Les exemples

### Exécuter les exemples

Chaque exemple est constitué d'un petit document LaTeX complet, qui apparaît
dans la page sous cette forme :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Texte d'exemple.
\end{document}
```

L'exemple est complet. Cependant, vous pouvez le modifier à votre guise pour
tester des choses, éventuellement dans le cadre d'un exercice proposé en fin de
leçon.

L'éditeur utilisé est

* [ACE](https://ace.c9.io/).

  Vous pouvez personnaliser le thème utilisé dans cet éditeur (par exemple en
  choisissant un thème sombre, affichant le texte en clair sur fond sombre) sur
  la page [Paramètres du site](settings). Un moyen pratique de tester différents
  thèmes est d'utiliser <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> sur Mac)
  lorsque vous êtes sur n'importe quel exemple du site. [Cela affiche une fenêtre](javascript:acesettings())
  qui vous permet de modifier tous les paramètres de ACE.

  Le site web de ACE propose une [page très utile avec ses raccourcis claviers](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).

* [CodeMirror6](https://codemirror.net/).


#### Trois façons d'exécuter un exemple

Que le code-source de l'exemple ait été modifié ou non, il existe trois manières
de l'exécuter :

* Utiliser le service Overleaf,
* Utiliser un service LaTeX en ligne,
* Utiliser votre installation locale de TeX.


##### Utiliser le service Overleaf

Overleaf est un des services les plus apprécié pour travailler par le web avec
LaTeX. The bouton <button>Ouvrir dans Overleaf</button>, présent sous l'exemple,
soumet le code à [Overleaf](https://www.overleaf.com/about).

Si vous n'avez pas encore de compte, ou si les détails de votre compte n'ont
pas déjà été enregistrés dans votre navigateur, vous serez redirigé vers une
page de connexion où vous pourrez vous connecter ou vous inscrire sur
Overleaf. Ce service est gratuit, mais vous devrez donner quelques
informations personnelles (notamment une adresse mail) et accepter les
conditions générales d'utilisation.

Si votre compte Overleaf est déjà en cache dans votre navigateur, alors une
page web Overleaf s'ouvrira dans un nouvel onglet, avec un nouveau projet
contenant le code de l'exemple. À partir de là, vous pourrez le modifier dans
Overleaf, qui lancera automatiquement LaTeX sur votre code en affichant le
résultat ou le journal des erreurs.

Overleaf a des fonctionnalités beaucoup plus évoluées que notre site web
pour l'édition des documents, et vous pouvez enregistrer vos projets dans
votre compte Overleaf pour y revenir plus tard.

##### Utiliser un service LaTeX en ligne

Le bouton <button>LaTeX Online</button>, présent sous l'exemple,
soumet le code au service [TeXLive.net](https://texlive.net)[^1].

Le serveur _TeXLive.net_ a été mis en place spécialement pour supporter ce
site, et utilise notamment [PDF.js](https://mozilla.github.io/pdf.js/) pour
afficher les fichiers PDF sur les navigateurs mobiles ou autres, dépourvus de
lecteur PDF intégré.

Le document PDF résultant (ou une partie du journal des erreurs)
sera affiché dans la page, immédiatement sous l'exemple. Un bouton
<button>Fermer l'affichage</button> apparaîtra pour que vous puissiez effacer
cette sortie (ou la laisser en place et suivre le reste de la leçon).

Notez que **TeXLive.net** ne nécessite ni connexion ou ni inscription
d'aucune sorte, ce qui est très pratique pour les petits exemples, mais
ni ce site ni les sites `latexcgi`, `latexonline.cc` ou `latex-on-http`
ne proposent de mécanisme pour enregistrer votre document. Toute modification
que vous auriez apportée à l'exemple est perdue quand vous quittez la page.

##### Utiliser une installation locale de TeX

Si vous avez un système TeX installé localement, vous pouvez copier le code
de l'exemple à partir de la page, soit en le sélectionnant explicitement,
soit en utilisant les raccourcis clavier de l'éditeur (ctrl-A ctrl-C dans
Windows par exemple). Lancez alors votre éditeur local, et collez le code
de l'exemple dans un document vierge.


### En cas de problème&hellip;

Nos exemples sont basés sur une installation LaTeX à jour. Tous fonctionnent 
avec tous nos systèmes de démonstration en ligne, aussi si vous obtenez
des erreurs avec les exemples fournis, vous devriez vérifier si votre système
LaTeX est à jour.

---

## Choisir le moteur TeX

Quand vous compilerez les exemples par _LaTeX Online_, c'est le moteur `pdflatex`
qui sera utilisé par défaut, sauf si l'exemple charge le package `fontspec`,
auquel cas `xelatex` sera utilisé.

Vous pouvez forcer le choix de `latex`, `pdflatex`, `xelatex`, `lualatex`,
`platex` ou `uplatex` en ajoutant dans le document un commentaire de la forme :

`% !TEX ` _any text_ `lualatex`

où l'espace blanc au début est facultatif et la casse sans importance.
_Tout texte_ entre le premier et le dernier mot est également ignoré. Cela
permet d'écrire `% !TEX program=pdflatex`, comme demandé par certains éditeurs
TeX, mais ne nécessite pas la chaîne `programme=`. Cette syntaxe est
actuellement limitée à la seule spécification d'un des six moteurs listés
ci-dessus.

Par exemple dans les exemples [de cette leçon](more-14), vous pouvez voir un tel
commentaire utilisé pour spécifier LuaLaTeX.

Si `platex` ou `uplatex` est demandé, alors le programme `dvipdfmx` sera
automatiquement lancé ensuite pour produire le résultat en PDF à partir
du fichier DVI généré par ces variantes.

Si aucun moteur n'est spécifié par un commentaire `% !TeX`, alors c'est `pdflatex`
qui sera utilisé, à moins que vous n'ayez choisi un autre moteur par défaut sur
la [page de choix des paramètres](settings).

---

## Choisir comment afficher le résultat

Si vous utilisez _LaTeX Online_, la sortie PDF sera affichée par défaut en
utilisant [PDF.js](https://mozilla.github.io/pdf.js/). Ce choix permet d'obtenir
un comportement cohérent sur le plus grand nombre de navigateurs.

Si vous préférez utiliser le lecteur PDF de votre navigateur (qu'il soit intégré
ou qu'il s'agisse d'une application externe que vous avez configurée), ajoutez
un commentaire de cette forme :

`% !TEX ` _any text_ `pdf`

Le comportement par défaut peut également être explicitement spécifié en
utilisant `pdfjs` dans le commentaire ci-dessus. Pour le débogage, vous pouvez
parfois souhaiter que le fichier journal soit renvoyé, même si le document
produit un PDF sans erreur. Cela peut être demandé en utilisant `log` dans ce
commentaire.

Au lieu d'utiliser un commentaire `% !TeX`, vous pouvez choisir le comportement
par défaut sur la [page de choix des paramètres](settings). Ces paramètres sont
spécifiques à chaque navigateur. Par exemple, vous pouvez choisir d'utiliser
le paramètre par défaut `pdfjs` sur votre tablette, mais utiliser `pdf` sur
votre ordinateur de bureau pour utiliser son lecteur PDF par défaut.

---

## Sortie en HTML (make4ht, LaTeXML, lwarp)

Si vous utilisez le service TeXLive.net, des options de retour en plus sont
proposées: `make4ht`, `LaTeXML` et `lwarp`. Elles retournent une ou plusieurs
pages HTML, affichées dans la page courante. Ces options peuvent être spécifiés
en même temps que `xelatex` ou `lualatex`, ou encore le moteur par défaut
`pdflatex`.

Pour activer cette option de sortie, ajoutez un commentaire de la forme :

```
% !TeX make4ht
```
{: .noedit :}


Remplacez `make4ht` par `LaTeXML` ou `lwarp` le cas échéant.

Vous pouvez aussi spécifier `make4ht`, `LaTeXML` ou `lwarp` comme option par
défaut sur la [page de choix des paramètres](settings).

Si vous utilisez un système TeX installé localement, le même résultat que
l'option `make4ht` peut être obtenu en exécutant

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

Avec les options supplémentaires `-x` or `-l` si vous utilisez XeLaTeX ou
LuaLaTeX, respectivement. D'autres options existent, n'hésitez pas à consulter
le [manuel de make4ht](https://texdoc.org/pkg/make4ht).


Pour exécuter localement `LaTeXML`, vous aurez d'abord besoin d'installer LaTeXML
(qui ne fait partie ni de TeX Live ni de MiKTeX) et d'utiliser ces commandes:

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Bien d'autres options sont possibles pour LaTeXML, vous les retrouverez
[dans le manuel](https://dlmf.nist.gov/LaTeXML/manual/).


La configuration de `lwarp` n'est pas décrite ici, car le projet est expérimental
et encore sujet à des changements. La version actuelle peut être récupérée depuis
son [dépôt Git](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Pendant le développement de ce site web, nous avons également utilisé
      [LaTeX.Online](https://latexonline.cc/) et
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http) et nous
      remercions chaleureusement les développeurs de ces services de les avoir
      adaptés à nos besoins pour permettre à nos exemples de fonctionner dès
      les premières phases de développement de _learnlatex.org_.
