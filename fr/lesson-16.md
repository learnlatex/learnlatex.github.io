---
layout: "lesson"
lang: "fr"
title: "Trouver de la documentation et demander de l'aide"
description: "Cette leçon présente les principales sources de documentation des logiciels et packages liés à LaTeX, et comment demander de l'aide lorsque vous êtes en difficulté."
toc-anchor-text: "Aide & documentation"
toc-description: "Trouver aide et documentation."
---

# Trouver de la documentation et demander de l'aide

<span class="summary">Cette leçon présente les principales sources de documentation des logiciels et packages liés à LaTeX, et comment demander de l'aide lorsque vous êtes en difficulté.</span>

Il y a différentes façons d'accéder à la documentation d'un package ou
d'une classe.


## `texdoc`

Si vous avez installé une distribution TeX (par exemple, TeXLive ou MikTeX) et
que vous avez choisi à l'installation d'avoir la documentation stockée
localement, alors vous pouvez y accéder en utilisant l'outil en ligne de
commande `texdoc`. Il suffit de taper la commande :

`texdoc` < _pkg_ >

qui ouvrira la documentation du package `<pkg>`. L'utilitaire recherchera la
documentation disponible et ouvrira ce qu'il pense être la correspondance la
plus pertinente pour votre demande. Vous aussi pouvez lister tous les résultats
valables qu'il trouve et choisir parmi eux en utilisant :

`texdoc -l` < _pkg_ >


## texdoc.org

Il s'agit d'[un site Web](https://texdoc.org/) qui fonctionne exactement comme
l'utilitaire `texdoc`. Vous pouvez rechercher la documentation disponible comme
vous le feriez avec `texdoc -l` et ensuite choisir parmi les résultats.


## CTAN

Le [CTAN](https://www.ctan.org) est le réseau global des archives TeX
(_Comprehensive TeX Archive Network_), c'est à dire un ensemble de serveurs
mettant à disposition de tous distributions, packages et documentations pour
LaTeX. La plupart des packages LaTeX y sont publiés. Vous pouvez rechercher sur
le site un package pour accéder à sa documentation. Habituellement, les packages
sont enregistrés dans `ctan.org/pkg/<pkg-name>` et vous pouvez accéder à leur
README et à leur documentation, et souvent trouver des exemples d'utilisations.


## Livres à propos de LaTeX

Il existe beaucoup de livres qui peuvent vous aider à en savoir plus sur LaTeX.
En tant que débutant, vous gagnerez beaucoup à consulter un guide structuré pour
vous mettre le pied à l'étrier, car ceux-ci peuvent donner beaucoup plus de
détails que ceux que nous avons couverts ici. Vous pouvez également choisir un
ouvrage avec plus de détails et de recommandations.


### Livres en français

Quelques manuels d'initiation :

- [_Initiation à LaTeX_](https://ctan.org/pkg/guide-latex-fr), par Adrien
Bouzigues, disponible sur CTAN. Ouvrage d'initiation à LaTeX. L'auteur s'adresse
à des débutants complets. Il utilise la distribution MikTeX et l'éditeur
Texmaker. Il donne des indications pour des utilisateurs de MS Windows ou de
Apple.
- [_LaTeX pour les linguistes_](https://hal.archives-ouvertes.fr/cel-02145840/document),
par Thomas Pellard. 120 pages, juin 2019.
- [_Nicolas Poulain, LaTeX pour les enseignants_](https://www.editions-ellipses.fr/accueil/378-latex-pour-les-enseignants-9782340036710.html),
éditions Ellipses, mars 2020.
- [_KOMA-script : typographie universelle avec (Xe)LaTeX_](https://framablog.org/2017/10/17/papiray-fait-du-komascript/),
par Markus Kohmet Raymond Rochedieu. Traduction et adaptation de la documentation
des classes KOMA-script (octobre 2017, Framasoft). Il s'agit d'un livre libre :
la version papier coûte 45 euros, et la version électronique peut être librement
téléchargée. La page web comporte également des pointeurs vers d'autres documentations
récentes en français, sur LaTeX et la typographie.

Vous trouverez sur le site de l'association GUTenberg [une liste assez complète
des ouvrages disponibles en français](https://www.gutenberg.eu.org/Bibliographie-sur-TeX-LaTeX-etc,126),
notamment des ouvrages plus avancés pour vous aider à progresser.


### Livres en anglais

Lorsque vous ferez une utilisation avancée de LaTeX, il pourra vous être utile
de vous tourner vers des documentations en anglais.


L'équipe LaTeX propose [une liste de livres](https://www.latex-project.org/help/books/)
en grande partie écrits par ses membres. Les plus remarquables sont
[le guide officiel par Leslie Lamport](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
et le [LaTeX Companion (3e édition)](https://www.informit.com/store/latex-companion-parts-i-ii-3rd-edition-9780138166489) (la [version française](https://www.leslibraires.fr/livre/915590-latex-companion-frank-mittelbach-michel-goossens-pearson) est une traduction de la deuxième édition, datant de 2004).


## Foire aux questions

La communauté LaTeX francophone maintient deux FAQ LaTeX collaboratives en
français :

- [une première](https://faq.gutenberg-asso.fr/), historique et toujours
  maintenue par l'[association GUTenberg](https://www.gutenberg-asso.fr/),
  groupe francophone des Utilisateurs de TeX, à nouveau très actif depuis 2020 ;
- [une seconde](https://www.latex-fr.net/) fork de la précédente (datant de
  début 2023).

Vous pourrez y trouver les réponses à vos questions, mais aussi y contribuer
pour que l'ensemble des utilisateurs bénéficient de votre expérience au fil de
vos expérimentations avec LaTeX.


## Demander de l'aide aux autres utilisateurs

Il existe divers forums en ligne pour poser des questions sur LaTeX ; le plus
populaire aujourd'hui est peut-être
[TeX - LaTeX StackExchange](https://tex.stackexchange.com) (en anglais).
En français, vous pouvez vous inscrire [à la liste GUT](https://www.gutenberg.eu.org/listes).

Chaque fois que vous posez une question, il est préférable de commencer par
donner un exemple clair : ce que l'on appelle communément un « exemple complet minimal »
(ECM ; en anglais _minimal working example_, MWE). Cela ne signifie pas que le
code fonctionne (sinon vous ne poseriez pas de question!), mais plutôt que vous
avez fait de votre mieux pour le rendre clair, autonome et minimal.
Ce dernier qualificatif signifie que vous avez juste assez de contenu pour
reproduire votre problème.

### Comment fournir un exemple complet minimal (ECM)?

Comment construire un ECM ? Généralement, le plus simple est de partir de :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Texte
\end{document}
```

puis d'ajouter des lignes une par une jusqu'à ce que vous ayez reproduit
le problème ciblé. Vous pouvez également partir de votre fichier réel
puis de le réduire progressivement, mais si votre document est déjà bien
avancé, la démarche peut être assez longue.

<p class="hint">Si vous avez besoin de plus de texte pour inclure des sauts de pages ou autres effets, alors des packages tels que <code>lipsum</code> peuvent être utilisés pour produire plusieurs paragraphes de texte dépourvu de sens, tout en gardant votre fichier de test très court.</p>


### Fichier journal (_aka_ `log`)

Vous devez garder sous la main votre fichier journal ; celui-ci est généré par
LaTeX à chaque exécution, et porte le même nom que votre fichier d'entrée mais
se termine par `.log`.

<p class="hint">Selon l'interface de votre bureau, vous devrez peut-être « afficher les extensions » pour savoir de quel fichier il s'agit.</p>

Dans ce fichier, vous aurez toujours la totalité des messages d'erreur. Les messages d'erreur de LaTeX s'efforcent d'être informatifs, mais il ne sont pas du même genre que ceux des traitements de textes.

<p class="hint">Certains éditeurs ne vous facilitent pas la vie, car ils cachent les messages d'erreur complets. Leur version résumée peut ne pas contenir tous les détails.</p>

Lorsque vous demandez de l'aide, les experts de LaTeX vous réclameront souvent
une copie de votre fichier de log.


### Et maintenant?

Pour finir, nous vous offrons une [gallerie de petits exemples en LaTeX](./extra-01),
qui illustrent des possibilités dans une vaste gamme de domaines non couverts
par cette introduction, et différents packages développés pour ces domaines.
