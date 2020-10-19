---
lang: "fr"
title: "Quelques particularités pour le français"
next: "extra-01"
---

Les leçons précédentes vous ont déjà inculqué les notions essentielles,
y compris pour composer des documents en français.
Mais nous souhaitons insister sur deux points, pour que vous ne soyiez pas
influencé par les documentations obsolètes que vous ne manquerez pas de
rencontrer sur internet, et qui véhiculent encore des idées datant de
l'époque où LaTeX ne supportait nativement que l'anglais.


## Motifs de césures

Pour composer dans un langage autre que l'anglais américain, prenez
le réflexe de charger le package `babel`, avec le nom de la langue que
vous utilisez (éventuellement plusieurs séparés par des virgules):


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[french]{babel}

\begin{document}
Du texte.
\end{document}
```

`Babel` s'occupe de modifier pour vous tout ce qu'il faut pour respecter
les règles typographiques de la langue que vous lui demandez, notamment :

- les emplacements des coupures de mots en fin de lignes (dits « motifs de césure »),
- l'espacement autour des signes de ponctuation,
- les titres par défaut des annexes (table des matières, bibliographie&hellip;).

En mode `french`, il vous fournit également une façon de taper les guillemets
français, avec `\og` (_ouvrir les guillemets_) et `\fg` (_fermer les guillemets_),
avec les bons espacements autour d'eux :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[french]{babel}

\begin{document}
Cyrano répond au Vicomte :
\og{}Vous\dots{} vous avez un nez\dots{} heu\dots{} un nez\dots{} très grand.\fg{}
\end{document}
```


Notez au passage la bonne façon de composer les points de suspension, avec `\dots`.


## Caractères accentués

Aux débuts de LaTeX, `é` se composait avec une macro spécifique pour ajouter
l'accent: `\'{e}`.

**Cette gymnastique est depuis longtemps inutile** et vous pouvez utiliser les
touches accentuées de votre clavier:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[french]{babel}

\begin{document}
Dès Noël, où un zéphyr haï me vêt de glaçons würmiens, je dîne d'exquis rôtis de bœuf au kir, à l'aÿ d'âge mûr, et cætera.
\end{document}
```

Cependant, le système de macros reste utilisable _si besoin_, notamment
si vous avez à saisir des langues pour lesquelles votre clavier
n'est pas prévu:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[french]{babel}

\begin{document}
\begin{tabular}{ll}
\hline
\`{a} & accent grave \\
\'{e} & accent aigu \\
\^{i} & accent circonflexe \\
\"{o} & tréma \\
\~{u} & tilde \\
\={o} & surligné \\
\.{o} & point \\
\u{o} & \\
\v{o} & \\
\H{o} & tréma hongrois \\
\t{oo} &\\
\c{c} & cédille\\
\d{o} & point au-dessous \\
\b{o} & souligné \\
\r{o} & anneau, ring \\
\k{o} & ogonek \\
\hline
\OE{}, \oe{} & O, E dans l'O \\
\AE{}, \ae{} & A, E dans l'A \\
\hline
\end{tabular}
\end{document}
```
