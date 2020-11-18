---
lang: "fr"
title: "Mise en forme du texte: fontes et espacements"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Fontes & espacements"
toc-description: "Mise en forme du texte."
---

## Espacement des paragraphes

Nous avons déjà vu qu'une ligne blanche dans votre saisie génèrera un nouveau
paragraphe en LaTeX. Conformément aux usages typographiques, ce nouveau
paragraphe commence par une indentation (ou retrait de paragraphe). Un autre
style possible est de ne pas avoir d'indentations pour les paragraphes, mais
plutôt d'avoir une « ligne blanche » entre eux. On peut obtenir ce résultat
en utilisant le package `parskip`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Pour avoir du texte de remplissage

\begin{document}
\lipsum
\end{document}
```

## Insérer un saut de ligne

La plupart du temps, il ne faut pas ajouter de force une coupure de ligne
dans LaTeX : en fait, c'est presque toujours d'un nouveau paragraphe dont
vous avez besoin, ou bien du package `parskip` pour apparaître une
« ligne blanche » entre les paragraphes, comme vu ci-dessus. 

Il y a seulement quelques endroits où l'usage de `\\` est conseillé pour
commencer une nouvelle ligne sans commencer un nouveau paragraphe :

- À la fin des lignes d'un tableau,
- Dans l'environnement `center`,
- En poésie (dans un environnement `verse`).

Presque toujours, si vous n'êtes pas dans un de ces cas particuliers,
**vous ne devriez pas** utiliser `\\`.


## Insérer une espace

On peut insérer une espace fine (d'environ la moitié de la largeur normale)
en utilisant `\,`. En mode mathématique, il y a aussi d'autres commandes :
`\.`, `\:` et `\;`, et une pour l'espace négative : `\!`.

Très rarement, par exemple lors de la création d'une page de titre, on a avoir
besoin d'ajouter un espace horizontal ou vertical explicite. Les commandes
`\hspace` and `\vspace` sont faite pour ça :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un peu de texte \hspace{1cm} encore du texte.

\vspace{10cm}

Et encore davantage de texte.
\end{document}
```


## Mettre en forme le texte de façon explicite

Nous avons vu [il y a quelque temps](lesson-03) que le plus souvent, il est
préférable de s'appuyer sur la structure logique du document. Mais il arrive
parfois que l'on veuille mettre le texte en gras, en italique, en interligne
simple, etc. Il existe deux types de commandes pour cela : une pour les textes
courts, et une pour le texte « courant ».

Pour les petits fragments de texte, nous utilisons les commandes `\textbf`,
`\textit`, `\textrm`, `\textsf`, `\texttt` et `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Let's have some font fun: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

Pour le texte courant, on utilise des commandes qui changent la police en cours ;
les commandes ici sont par exemple `\bfseries` et `\itshape`. Comme l'effet de
ces commandes n'a pas de fin prédéfinie, on doit les placer dans un _groupe_ si
on veut éviter qu'elles ne s'appliquent pas à l'ensemble du document. Les
environnements LaTeX sont des groupes, tout comme les cellules des tableaux, ou
bien on peut simplement utiliser les accolades `{...}` pour créer un groupe
explicite.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un peu de texte normal.

{\itshape

À partir d'ici, le texte est en italique.

Vous voyez: l'effet n'est pas limité à un paragraphe.

}
\end{document}
```

On peut régler la taille des caractères de la même manière, avec des commandes
qui s'appliquent « à partir d'ici ». Elles définissent des tailles relatives par
rapport à la taille de base : les plus courantes sont `\huge`, `\large`,
`\normalsize`, `\small` et `\footnotesize`. Il est important de terminer le
paragraphe _avant_ de modifier la taille de la police de caractères à nouveau ;
regardez comment nous ajoutons un `\par` explicite (coupure de paragraphe) ici :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Du texte normal.

\begin{center}
{\itshape\large Du texte mis en forme\par}
Normal à nouveau
{\bfseries\small Enfin du texte plus petit\par}
\end{center}

\end{document}
```


## Travaux pratiques

Expérimentez le formatage manuel : créez un environnement `titlepage`, pour une
page de titre et essayez d'insérer différents espaces et de modifier la police.
Que se passe-t-il lorsque vous combinez des changements de police ? En quoi
est-ce différent du mode mathématique ?

Que se passe-t-il si vous changez la taille de la police d'un grand paragraphe
(essayez avec `\tiny` puis avec `\huge`) mais que vous n'émettez pas de `\par`
final avant de fermer le groupe ?
