---
title: "Les tableaux"
---

## Tableaux simples

En LaTeX, un tableau se construit dans un environnement `tabular`. Cette leçon
suppose que vous chargez le package `array`, qui ajoute des fonctionnalités aux
tableaux de base de LaTeX. Il n'est pas intégré dans le noyau LaTeX, mais c'est
uniquement pour des raisons historiques et vous avez intérêt à le charger dès
que vous utilisez des tableaux. Mettez donc ce qui suit dans votre préambule et
nous serons prêts à commencer :

```latex
\usepackage{array}
```
{: .noedit :}

Pour composer un tableau dans un environnement `tabular`, nous devons indiquer
à LaTeX combien de colonnes seront nécessaires et comment elles doivent être
alignées. Cela se fait dans un argument obligatoire de l'environnement &ndash;
souvent appelé _préambule_ du tableau &ndash; dans lequel vous spécifiez les
colonnes en utilisant des noms à une lettre (les _preamble-tokens_). Les types
de colonnes disponibles sont les suivants :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type       | description |
| ---        |:-- |
| `l`        | colonne alignée à gauche (_**l**eft_). |
| `c`        | colonne centrée (_**c**entered_). |
| `r`        | colonne alignée à droite (_**r**ight_). |
| `p{width}` | colonne de largeur fixée, égale à `width` ; le texte sera automatiquement justifié, avec des sauts de lignes si nécessaire. |
| `m{width}` | comme `p`, mais centré verticalement par rapport au reste de la ligne (_**m**iddle_). |
| `b{width}` | comme `p`, mais positionné en bas par rapport au reste de la ligne (_**b**ottom_). |
| `w{align}{width}` | fixe la largeur de la colonne à `width`, mais le contenu peut déborder s'il est trop grand. L'alignement horizontal `align` peut être `l`, `c`, or `r`, comme décrit ci-dessus. |
| `W{align}{width}` | comme `w`, mais vous aurez un avertissement en cas de débordement. |


En outre, il existe quelques autres _preamble-tokens_ qui ne définissent pas une
colonne mais s'avèrent utiles :

<!-- Don't line wrap this table, markdown seems to not support this. -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | répète `num` fois la chaîne `string` dans le préambule. Permet de définir plusieurs colonnes identiques. |
| `>{decl}` | ajoute la chaîne `decl` devant le contenu de chaque cellule de la colonne qui suit (permet par exemple de changer la police de cette colonne). |
| `<{decl}` | ajoute la chaîne `decl` après le contenu de chaque cellule de la colonne qui précède. |
| <span>`|`</span>  | trace un trait vertical. |
| `@{decl}` | remplace l'espace entre deux colonne par la chaîne `decl`. |
| `!{decl}` | ajout la chaîne `decl` au centre de l'espace entre deux colonnes. |

Ces deux tableaux répertorient tous les types de colonnes disponibles avec LaTeX
et le package `array`. Quelques types de colonnes supplémentaires, provenant
d'autres packages, sont présentés [en approfondissement](more-08) de cette leçon.

Les colonnes `l`, `c` et `r` auront la largeur naturelle de la cellule la plus
large. Chaque colonne doit être déclarée, donc si vous voulez trois colonnes
centrées, vous utiliserez `ccc` dans le préambule du tableau. Les espaces sont
ignorées, et `c c c` donne la même chose.

Dans le corps du tableau, les colonnes sont séparées par une esperluette `&` et
une nouvelle ligne est commencée avec `\\`. Il n'y a pas besoin de déclarer à
l'avance le nombre de lignes du tableau.

Nous avons maintenant tout ce qu'il faut pour construire notre premier tableau.
Dans le code suivant, les `&` et `\\` sont alignés. Ce n'est pas nécessaire en
LaTeX, mais ça aide à lire le code source et à débusquer les erreurs
éventuelles.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

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

Si une colonne de tableau contient beaucoup de texte, vous aurez du mal à avoir
un joli résultat avec seulement `l`, `c` et `r`. Regardez l'exemple suivant :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Cat    & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Le problème est qu'une colonne de type `l` déroule son contenu sur une seule
ligne, et prend sa largeur naturelle, même si la page n'est pas assez large.
Pour résoudre ce problème, vous pouvez utiliser une colonne de type `p`.
Celle-ci met son contenu sous forme d'un paragraphe avec la largeur que vous
spécifiez, et aligne ce paragraphe verticalement en haut et en bas. Comparez
le résultat de ce nouvel exemple avec le précédent :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Si votre tableau comporte de nombreuses colonnes du même type, vous pouvez vous
faciliter la vie en utilisant `*{nombre}{chaîne}`, qui répète `nombre` de fois
la `chaîne`. Ainsi, `*{6}{c}` est équivalent à `cccccc`. Pour vous montrer que
cela fonctionne, voici le premier tableau de cette leçon avec cette nouvelle
syntaxe :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal     & Nourriture & Taille \\
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Tirer des traits entre les lignes

Un conseil avant de parler des traits (ou _filets_) : ceux-ci doivent être
utilisés parcimonieusement dans les tableaux, et de façon générale, les filets
verticaux donnent un rendu peu professionnel. En fait, pour obtenir des tableaux
au look professionnel, il vaut mieux se passer des filets fournis en standard
par LaTeX, et utiliser à la place le package `booktabs`. C'est pourquoi nous en
parlons en premier lieu. Dans un souci d'exhaustivité, les filets standards sont
[présentées en approfondissement](more-08).

Le package `booktabs` propose quatre types de filets différents. Chacune de ces
commandes doit être utilisée au début d'une ligne, ou juste après un autre filet.
Les trois principales commandes sont : `\toprule` (pour le haut du tableau),
`\midrule` (pour le corps du tableau) et `\bottomrule` (pour le bas du tableau) :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
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

La quatrième commande fournie par `booktabs` pour tracer des filets est
`\cmidrule`. Elle peut être utilisée pour tracer un filet qui ne couvre pas
toute la largeur du tableau mais seulement une plage de colonnes spécifiée.
La plage de colonnes est entrée avec les numéros des colonnes :
`{`_numéro_`-`_numéro_`}`. Même si vous ne voulez dessiner le filet que pour
une seule colonne, vous devez la spécifier comme une plage (avec deux numéros
identiques : `{2-2}`).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  \cmidrule{1-2}
  cheval     & foin       & gros   \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  grenouille & mouches    & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


Il existe une autre fonctionnalité de `\cmidrule` qui contribue à un rendu de
qualité: on peut raccourcir le filet à chaque extrémité avec un argument
optionnel entre parenthèses :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  \cmidrule{1-2}
  cheval     & foin       & gros   \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  grenouille & mouches    & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Vous avez sans doute deviné que `r` et `l` signifient que le filet est raccourci
à son extrémité droite (_**r**ight_) et  gauche (_**l**eft_), respectivement.

Parfois, un trait serait une séparation trop forte entre deux lignes, mais vous
souhaitez quand même ajouter une forme de séparation pour aider à la lecture du
tableau. Dans ce cas, vous pouvez utiliser `\addlinespace` pour insérer un petit
peu plus d'espace entre les lignes.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  Chien  & Le chien est un membre du genre Canis, qui fait partie des Canidés
           proches du loup, et est le carnivore terrestre le plus
           répandu. \\
  \addlinespace
  Chat   & Le chat est une espèce domestique de petit mammifère carnivore. C'est
           la seule espèce domestiquée de la famille des Félins et on l'appelle
           souvent le chat domestique pour le distinguer des autres membres de la
           famille, tous sauvages. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Fusionner des cellules

En LaTeX, vous pouvez fusionner des cellules horizontalement en utilisant la
commande `\multicolumn`. Elle doit apparaître en premier dans une cellule.
`\multicolumn` prend trois arguments :

1. Le nombre de cellules à fusionner,
2. L'alignement de la cellule résultante,
3. Le contenu de la cellule résultante.

L'alignement peut contenir tout ce qui est autorisé dans le préambule d'un
tableau, mais _seulement un seul type de colonne_:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal     & Nourriture & Taille \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  snark      & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


Vous pouvez également utiliser `\multicolumn` sur une seule cellule pour empêcher
l'application de ce que vous avez défini dans le préambule du tableau pour la
colonne actuelle.  L'exemple suivant utilise cette méthode pour centrer la ligne
d'en-tête du tableau :

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Nourriture} & \multicolumn{1}{c}{Taille} \\
  \midrule
  chien      & viande     & moyen  \\
  cheval     & foin       & gros   \\
  grenouille & mouches    & petit  \\
  snark      & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


La fusion verticale des cellules n'est pas prise en charge par LaTeX. En général,
il suffit de laisser les cellules vides pour donner au lecteur une idée correcte
de ce que l'on veut dire, sans que les cellules s'étendent réellement sur
plusieurs lignes.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Groupe    & Animal    & Taille \\
  \midrule
  herbivore & cheval    & large  \\
            & chevreuil & medium \\
            & lapin     & small  \\
  \addlinespace
  carnivore & chien     & medium \\
            & chat      & small  \\
            & lion      & large  \\
  \addlinespace
  omnivore  & corneille & small  \\
            & ours      & large  \\
            & cochon    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Travaux pratiques

Utilisez le premier exemple ci-dessus pour expérimenter avec les tableaux.
Essayez différents alignements en utilisant les types de colonnes `l`, `c`
et `r`. Que se passe-t-il si vous avez trop peu d'éléments dans une ligne
de tableau ? Et si vous en avez trop ? Essayez la commande `\multicolumn`
pour étendre le contenu sur plusieurs colonnes.
