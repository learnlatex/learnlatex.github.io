---
lang: "fr"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "More on: Tables"
---

## D'autres options dans le préambule des tableaux

La leçon principale n'ayant pas couvert tous les options disponibles pour les
en-têtes de tableaux, quelques autres sont expliquées ici avec des exemples.
N'hésitez pas à revoir le début de la leçon pour avoir en tête toutes les
possibilités existantes. Les courtes descriptions fournies devraient suffire
à comprendre ce que font les différents types de colonnes `m`, `b`, `w`, et
`W` après que vous ayez compris `l`, `c`, `r`, et `p`. Si ce n'est pas le cas,
utilisez les exemples pour expérimenter un peu. Il restera ensuite à voir les
autres « _preamble-tokens_ » disponibles, bien pratiques : `>`, `<`, `@`, `!` et `|`.


### Mettre en forme une colonne

`>` et `<` peuvent être utilisés pour insérer des éléments avant et après le
contenu de chaque cellule d'une colonne. Vous pouvez donc les utiliser pour
_ajouter des commandes_ qui changent la mise en forme de la colonne. Par exemple,
ceci mettra en italique la première colonne et insérera un deux-points après :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape` met tout le texte qui suit en italique, mais son effet est limité à
la cellule du tableau. Nous examinerons le formatage manuel des polices
[dans quelques leçons](lesson-11).

Souvent la première ligne d'un tableau est considérée comme un en-tête, et mise
en forme différemment du reste. Pour obtenir ce résultat, on peut utiliser
`\multicolumn`. Pensez aussi que cette commande peut être utilisée pour modifier
l'alignement d'une seule cellule ici :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Modifier l'espacement des colonnes

Par défaut, LaTeX flanque chaque colonne d'un peu d'espace de chaque côté pour
la séparer des autres et rendre le tableau esthétique. Cet espace est défini par
la longueur `\tabcolsep`. Comme chaque colonne a cet espace de chaque côté, il y
a un `\tabcolsep` à chaque extrémité du tableau, et deux `\tabcolsep` entre les
différentes colonnes (un venant de chaque colonne). La largeur de cet espace
peut être changée avec `\setlength` :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Cet espace peut être remplacé par n'importe quoi, avec `@`. Cela supprimera
l'espace des deux colonnes voisines (ou celui à chaque extrémité du tableau),
et mettra à la place ce qui lui est passé en argument :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Nous verrons `\hspace` [très bientôt](lesson-11) ; vous devinez qu'il ajoute un
espacement horizontal).

Dans le préambule du tableau, `!` fait quelque chose d'assez similaire. La
différence est qu'il _ajoute_ son argument au centre de l'espace entre deux
colonnes, au lieu de le remplacer.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Filets verticaux

L'utilisation de filets verticaux dans les tableaux est plutôt découragée
par les règles typographiques usuelles. Mais il peut arriver qu'on en ait
besoin :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal     & Nourriture & Taille \\[2pt]
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Le comportement de `|` est assez similaire à celui de `!{arg}` : il ajoute un
filet vertical entre deux colonnes en laissant intact l'espacement initial.
Il a cependant un inconvénient : ces filets verticaux ne fonctionnent pas avec
les filets horizontaux de `booktabs`. Vous pouvez cependant l'utiliser avec
les filets horizontaux fournis par LaTeX, par les commandes `\hline`
(correspondant to `\toprule`, `\midrule` et `\bottomrule`) et `\cline` (qui se
comporte comme `\cmidline`). Comme on le voit, les filets verticaux couvrent
bien tout espace ajouté par l'argument optionnel de `\\`.


## Personnaliser les filets de `booktabs`

Tous les filets fournis par le package `booktabs`, ainsi que `\addlinespace`,
acceptent un argument optionnel entre crochets pour spécifier l'épaisseur du
trait. En outre, le petit retrait de `\cmidrule` peut être personnalisé en
spécifiant une longueur entre accolades après `r` ou `l`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal     & Nourriture & Taille \\ \midrule[1pt]
  chien      & viande     & moyen  \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Alignement des nombres dans les colonnes

L'alignement des nombres dans les tableaux peut être géré par le type de colonne
`S`, fourni par le package `siunitx`.

Voici un exemple simple avec deux colonnes numériques alignées :

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}

\begin{document}

\begin{tabular}{SS}
\toprule
{Quelques valeurs} & {D'autres valeurs} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}

\end{document}
```

Notez que toute cellule non numérique doit être « protégée » en la mettant entre
accolades.

Le package `siunitx` offre de nombreuses possibilités de formatage des nombres
de différentes manières ;
[voir sa documentation](https://texdoc.net/pkg/siunitx).


## Fixer la largeur totale d'un tableau

La largeur d'un environnement `tabular` est automatiquement déterminée en
fonction du contenu du tableau. Il existe deux mécanismes principaux pour
spécifier une largeur totale différente de cette largeur naturelle.

Notez qu'il vaut toujours mieux de formater le tableau à une largeur fixée comme
ci-dessous (en utilisant une taille de police telle que `\small` si nécessaire)
plutôt que de mettre à l'échelle un tableau avec `\resizebox` ou commandes
similaires, qui produiront des tailles de police et des épaisseurs de traits
incohérentes.


### `tabular*`

L'environnement `tabular*` prend un argument supplémentaire (_width_) qui fixe
la largeur totale du tableau. Pour donner de l'élasticité à l'ensemble, un
espace extensible doit être ajouté à la table en utilisant la commande
`\extracolsep`. Cet espace est ajouté entre toutes les colonnes à partir de ce
point dans le préambule. Il est presque toujours utilisé avec `\fill`, un espace
spécial qui s'étire pour être aussi large que nécessaire.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

L'environnement `tabularx`, fourni par le package du même nom, a une syntaxe
similaire à `tabular*` mais au lieu d'ajuster l'espace inter-colonne, il ajuste
la largeur des colonnes spécifiées par un nouveau type de colonne, `X`. C'est
équivalent à une spécification `p{...}` mais sa largeur est déterminée
automatiquement.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

À la différence des autres packages abordés dans cette leçon, `tabularx` doit
compiler le tableau plusieurs fois, en essayant différentes largeurs, pour
déterminer le réglage final. Ça implique plusieurs restrictions sur
l'utilisation de l'environnement ;
[voir sa documentation](https://texdoc.net/pkg/tabularx).


## Les tableaux sur plusieurs pages

Un environnement `tabular` forme une boîte incassable, il doit donc être
suffisamment petit pour tenir sur une page, et est souvent placé dans un
environnement `table` pour en faire un flottant.

Plusieurs packages fournissent des variantes avec une syntaxe similaire, mais
permettant des sauts de page. Nous présentons ici le package `longtable` :

```latex
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
aa & bb\\
Entry & b\\
a & b\\
a & b\\
a & b\\
a & b\\
a & bbb\\
a & b\\
a & b\\
a & b\\
a & b\\
a & b\\
a & b\\
a & b b b b b b\\
a & b b b b b\\
a & b b\\
A Wider Entry & b\\
\end{longtable}

\end{document}
```

Le package `longtable` est remarquable parce qu'il préserve la largeur des
colonnes sur toutes les pages du tableau ; cependant, pour y parvenir, il faut
parfois plusieurs exécutions de LaTeX, pour que les éventuelles grandes
cellules rencontrées tardivement dans le tableau puissent affecter la largeur
des colonnes depuis la première page.


## Notes de bas de tableau

Il est assez courant d'avoir besoin de notes de bas de tableau, avec des appels
de note dans le tableau. Le package `threeparttable` simplifie la composition
de ce genre de tableaux, en faisant en sorte que les notes soient placées dans
un bloc de la même largeur que le tableau lui-même. Reportez-vous
[à sa documentation](https://texdoc.net/pkg/threeparttable) pour plus de détails,
mais voici un exemple simple :


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{Un exemple}
   \begin{tabular}{ll}
    Voyelles          & A noir\tnote{1}\\
    Mon rêve familier & Je fais souvent ce rêve\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] Arthur Rimbaud.
   \item [2] Paul Verlaine.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Composer dans des colonnes étroites

Les paramètres par défaut pour les sauts de ligne supposent des colonnes
relativement larges pour avoir une certaine souplesse dans le choix des sauts de
ligne. L'exemple suivant montre quelques approches possibles. Le premier tableau
montre l'étirement des espaces entre les mots et TeX avertit de l'existence de
lignes mal remplies. L'utilisation de `\raggedright` évite généralement ce
problème mais peut donne des longueurs de lignes très irrégulières, et une
apparence déchiquetée au paragraphe. La commande `\RaggedRight` du package
`ragged2e` est un compromis ; elle permet une certaine irrégularité dans la
longueur des lignes, mais elle insérera aussi une coupure de mot si nécessaire,
comme le montre le troisième tableau.

Notez l'utilisation de `\arraybackslash` ici, qui réinitialise la définition de
`\\` pour terminer la ligne du tableau.

Une autre technique, comme le montre le quatrième tableau, consiste à utiliser
une police plus petite afin que les colonnes ne soient pas aussi étroites par
rapport à la taille du texte.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more hard to hyphenate words.
\end{tabular}

\end{table}

\end{document}
```

## Définir de nouveaux types de colonnes

Comme l'a montré [la leçon principale](lesson-08), le package`\array` permet des
constructions comme `>{\bfseries}c` pour formater une colonne centrée en gras.
On peut définir un nouveau type de colonne, avec `\newcolumntype` pour encapsuler
cette définition :

```latex
\newcolumntype{B}{>{\bfseries}c}
```
qui permettra l'utilisation de `B` dans les préambules de tableaux pour spécifier
une colonne centrée en gras.


## Astuces pour diviser une cellule dans sa hauteur

Souvent, plutôt que de faire en sorte qu'une cellule s'étende sur plusieurs
lignes, il est préférable d'utiliser une seule ligne dans laquelle certaines
cellules sont divisées verticalement par l'utilisation d'environnements
`\tabular` imbriqués :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

L'alignement vertical peut être contrôlé par un argument optionnel de
l'environnement `\tabular` ; cet argument peut valoir `t`, `c`, ou `b` pour
avoir un alignement eu haut (_**t**op_), au milieu (_**c**entered_) ou en bas
(_**b**ottom_) respectivement et s'utilise de cette façon :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Espacement des lignes dans les tableaux

Dans la leçon principale, nous avons présenté `\addlinespace` du package
`booktabs`, qui sert à ajouter de l'espace entre des lignes spécifiques.

Il y a aussi deux paramètres généraux qui contrôlent l'espacement des lignes :
`\arraystretch` et `\extrarowheight` (ce dernier du package `array`).

```latex
\renewcommand\arraystretch{1.5}
```
augmentera de 50% l'espace entre les lignes.

Souvent, surtout quand on utilise `\hline`, il est préférable de simplement augmenter la hauteur des lignes, sans augmenter leur profondeur en-dessous de la ligne de base. Cet exemple illustre le paramètre `\extrarowheight` :

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
Carré & $x^2$ \\
\hline
Cube  & $x^3$ \\
\hline
\end{tabular}
\end{center}

\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Carré & $x^2$ \\
\hline
Cube  & $x^3$ \\
\hline
\end{tabular}
\end{center}
\end{document}
```
