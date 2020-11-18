---
lang: "fr"
title: "Votre premier document avec LaTeX: pour aller plus loin"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Votre premier document avec LaTeX: pour aller plus loin"
---

## Exécuter LaTeX

[Comme vu précédemment](lesson-02), les documents LaTeX sont simplement du texte
en clair. Pour s'en rendre compte, essayez d'ouvrir votre premier document
dans un simple éditeur de texte, par exemple sous Windows avec Notepad. Vous
verrez le même texte que dans un éditeur LaTeX dédié, mais sans la mise en
couleur des mots-clefs.

Vous pouvez également compiler votre document LaTeX en PDF sans éditeur ;
cela signifie utiliser l'invite de commande (dans le terminal), mais ne vous
inquiétez pas si vous n'êtes pas familier avec cela. Si vous *êtes familier*,
vous pouvez naviguer jusqu'au répertoire contenant votre fichier source `.tex`
et lancer 

`pdflatex first`

ou

`pdflatex first.tex`

pour compiler votre PDF. Notez que l'extension `.tex` est optionnelle : LaTeX
supposera que les noms de fichiers se terminent par elle, sauf indication
contraire de votre part.


## Caractères spéciaux

Si vous avez besoin de taper un caractère spécial, la plupart du temps vous
pouvez simplement utiliser une barre oblique inversée devant ce caractère, par
exemple `\{` est utilisé pour obtenir un « { » littéral. Dans certains cas, vous
devrez utiliser une commande plus longue :

| Symbole | Commande courte (maths et texte) | Commande longue (texte seulement) |
| `{`     | `\{`            | `\textbraceleft`   |
| `}`     | `\}`            | `\textbraceright`  |
| `$`     | `\$`            | `\textdollar`      |
| `%`     | `\%`            |                    |
| `&`     | `\&`            |                    |
| `#`     | `\#`            |                    |
| `_`     | `\_`            | `\textunderscore`  |
| ``\``   |                 | `\textbackslash`   |
| `^`     |                 | `\textasciicircum` |
| `~`     |                 | `\textasciitilde`  |

Pour les trois derniers symboles, il n'y a pas de commandes courtes disponibles,
car `\\` est utilisé pour indiquer un retour à la ligne, et `\~` et `\^` sont
utilisés pour produire des accents tilde et circonflexe lorsqu'on utilise
uniquement des caractères ASCII en entrée.
