---
title: "Votre premier document avec LaTeX: pour aller plus loin"
---

## Exécuter LaTeX

[Comme vu plus haut](lesson-02), les documents LaTeX sont simplement du texte en clair. Pour s'en rendre compte, essayez d'ouvrir votre premier document dans un simple éditeur de texte, par exemple sous Windows avec Notepad. Vous verrez le même texte que dans un éditeur LaTeX dédié, mais sans aucune mise en couleur des mots-clefs.

Vous pouvez également compiler votre document LaTeX en PDF sans votre éditeur ; cela signifie utiliser l'invite de commande (dans le terminal), mais ne vous inquiétez pas si vous n'êtes pas familier avec cela. Si vous *êtes familier*, vous pouvez naviguer jusqu'au répertoire contenant votre fichier source `.tex` et lancer 

`pdflatex first`

ou

`pdflatex first.tex`

pour compiler votre PDF. Notez que l'extension `.tex` est optionnelle : LaTeX supposera que les fichiers se terminent par `.tex`, sauf indication contraire de votre part.


## Caractères spéciaux

If you need to type in a special character, most of the time you can simply
use a backslash in front of it, so for example `\{` is used to print a literal
`{`. There are a few cases where you need to use a longer command instead:

Si vous avez besoin de taper un caractère spécial, la plupart du temps vous pouvez simplement utiliser une barre oblique inversée devant ce caractère, par exemple `\{` est utilisé pour imprimer un '{' littéral. Dans certains cas, vous devrez utiliser une commande plus longue :

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

Pour les trois derniers symboles, il n'y a pas de commandes courtes disponibles, car `\\` est utilisé pour indiquer un retour à la ligne et `\~` et `\^` sont utilisés pour produire des accents tilde et circonflexe lorsqu'on utilise uniquement des caractères ASCII en entrée.
