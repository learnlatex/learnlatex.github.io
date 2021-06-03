---
layout: "lesson"
lang: "ca"
title: "Taules"
description: "Aquesta lliçó explica com pots realitzar taules a LaTeX, canviar l'alineació de les cel·les, afegir regles a la taula, i combinar cel·les."
toc-anchor-text: "Taules a LaTeX"
toc-description: "Bases de com treballar amb taules."
---

# Taules

<span
  class="summary">Aquesta lliçó explica com pots realitzar taules a LaTeX, canviar l'alineació de les cel·les, afegir regles a la taula, i combinar cel·les.</span>

A LaTeX les taules es defineixen amb l'entorn `tabular`. Aquesta lliçó assumeix que tens carregat el paquet `array`, que afegeix moltes funcionalitats a les taules de LaTeX, i que no forma part del nucli per raons històriques. Així doncs posa el següent text en el preàmbul i mirem com funciona:

```latex
\usepackage{array}
```
{: .noedit :}

Per donar un format a l'entorn `tabular` li hem de dir a LaTeX quantes columnes necessitem i com han d'estar alineades. Això ho fem amb un argument obligatori &ndash; sovint referit com a preàmbul de la taula &ndash; en l'entorn `tabular`, on especifiquem les columnes utilitzant noms d'un sol caràcter, anomenats identificadors de preàmbul. Els tipus de columna disponibles són:

<!-- don't line wrap this table, markdown seems to not support this -->

| tipus       | descripció |
| ---        |:-- |
| `l`        | columna justificada a l'esquerra |
| `c`        | columna centrada |
| `r`        | columna justificada a la dreta |
| `p{width}` | columna amb una amplada fixa `width`; el text s'ajustarà automàticament a la línia |
| `m{width}` | igual que `p`, però centrat verticalment en comparació amb la resta de la fila |
| `b{width}` | igual que `p`, però posicionat a la part inferior de la cel·la |
| `w{align}{width}` | imprimeix el contingut amb una amplada `width` fixa, sobreimprimint si el text és massa llarg. Pots escollir l'alineació horitzontal amb `l`, `c`, o `r`. |
| `W{align}{width}` | igual que `w`, però mostra un missatge d'alerta si el text és massa ample. |

A més a més, també hi ha disponibles altres identificadors de preàmbul, que et poden ser de gran utilitat:

<!-- don't line wrap this table, markdown seems to not support this -->

| tipus | descripció |
| ---  | :-- |
| `*{num}{string}` | repeteix `string` un número de vegades `num` en el preàmbul. D'aquesta manera pots definir columnes idèntiques múltiples vegades. |
| `>{decl}` | posa `decl` abans del contingut en cada cel·la de la següent columna (això és útil, per exemple, per canviar la font en aquesta columna) |
| `<{decl}` | posa `decl` després del contingut en cada cel·la de la columna prèvia |
| <span>`|`</span>  | afegeix una regla vertical |
| `@{decl}` | reemplaça els espais entre dues columnes amb `decl` |
| `!{decl}` | afegeix `decl` enmig d'un espai |

Aquestes dues taules llisten totes les possibilitats de tipus de columna a LaTeX i en el paquet `array`. Alguns tipus de columna addicionals, disponibles en d'altres paquets, s'expliquen [més endavant](more-08).

Les columnes `l`, `c`, i `r` tindran l'amplada natural de la cel·la més ampla. Cada columna s'ha de declarar, de manera que si vols tres columnes centrades, escriuràs `ccc` en el preàmbul de la taula. Els espais s'ingnoren, així doncs `c c c` és el mateix.

En el cos de la taula les columnes estan separades utilitzant el símbol `&` i una nova fila comença amb `\\`.

Ja tenim tot el que necessitem per a la primera taula. En el següent codi hem alineat `&` i `\\`. Això no és necessari a LaTeX, però fer-ho ajuda a la legibilitat del codi.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animal & Menjar  & Tamany   \\
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
\end{tabular}
\end{document}
```

<!-- {% endraw %} -->

Si la columna d'una taula conté molt de text serà difícil aconseguir un bon disseny utilitzant només `l`, `c`, i `r`. Mira què passa en el següent exemple:

<!-- {% raw %} -->

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Descripció \\
  gos    & El gos és un membre del gènere Canis, que forma part dels
           cànids (igual que els llops), i és el carnívor terrestre
           més abundant. \\
  gat    & El gat és una espècie domèstica de mamífer carnívor petit. És la única
           espècie domesticada de la família Felidae (felins), i sovint s'anomena com a
           gat domèstic per distingir-lo dels membres salvatges de la
           família. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

El problema és que el tipus de columna `l` mostra el text en una sola fila amb la seva amplada natural, encara que es trobi amb el contorn de la pàgina. Per solucionar-ho pots utilitzar la columna `p`, que té per efecte escriure el contingut com a paràgraf amb l'amplada que has especificat com a argument i alinea verticalment a dalt de la cel·la (com és habitual). Compara el resultat de més amunt amb el següent:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Descripció \\
  gos    & El gos és un membre del gènere Canis, que forma part dels
           cànids (igual que els llops), i és el carnívor terrestre
           més abundant. \\
  gat    & El gat és una espècie domèstica de mamífer carnívor petit. És la única
           espècie domesticada de la família Felidae (felins), i sovint s'anomena com a
           gat domèstic per distingir-lo dels membres salvatges de la
           família. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Si la teva taula té moltes columnes del mateix tipus pot ser molest posar massa definicions de columna en el preàmbul. Pots fer les coses més senzilles utilitzant `*{num}{string}`, que fa repetir la cadena `string`  un número `num` de vegades. D'aquesta manera, `*{6}{c}` és equivalent a `cccccc`. Per veure-ho mostrem la primera taula de la lliçó amb aquesta notació:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Menjar  & Tamany   \\
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Afegir línies a les taules

Un petit consell abans d'introduir-nos amb les línies; en les taules les línies s'han d'utilitzar amb cura i normalment les línies verticals no són molt recomanables. De fet, per a les taules professionals millor no utilitzar cap de les línies estàndard; més aviat t'has de familiaritzar amb les que facilita el paquet `booktabs`, i per aquest motiu les explicarem ara, en primer lloc. Una explicació més completa sobre les línies estàndard s'explicara en la secció [més sobre](more-08).

`booktabs` proporciona quatre tipus diferents de línies. Cadascuna d'aquestes comandes s'ha d'utilitzar al principi de la línia o a continuació d'una altra regla. Tres de les regles són: `\toprule`, `\midrule`, i `\bottomrule`. Amb el seu nom queda clara la seva funció:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Menjar  & Tamany   \\
  \midrule
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

La quarta regla que proporciona `booktabs` és `\cmidrule`. Es pot utilitzar per dibuixar una línia que no s'estengui per tota l'amplada de la columna sinó només en determinades columnes. El format per saber en quines columnes hem de dibuixar la línia és: `{`_number_`-`_number_`}`. Fins i tot si només vols dibuixar la línia en una sola columna has d'especificar-ho com a rang (en aquest cas amb els dos números iguals).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Menjar  & Tamany   \\
  \midrule
  gos    & carn  & mitjà \\
  \cmidrule{1-2}
  cavall  & ufals   & gros  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  granota   & mosques & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Encara hi ha un altre ús útil de `\cmidrule`. Pots escurçar el principi o el final d'una línia o fins i tot amb un argument opcional entre parèntesi:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Menjar  & Tamany   \\
  \midrule
  gos    & carn  & mitjà \\
  \cmidrule{1-2}
  cavall  & ufals   & gros  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  granota   & mosques & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Hauràs endevinat que el nom de les regles `r` i `l` signifiquen respectivament **r**ight (`dreta`) i **l**eft (`esquerra`).

A vegades una línia pot implicar una forta separació, no desitjada, entre dues files, però a vegades sí que voldrem separar les línies d'alguna manera. En aquest cas pots utilitzar `\addlinespace` que afegirà un petit espai vertical entre les dues.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Descripció \\
  \midrule
  gos    & El gos és un membre del gènere Canis, que forma part dels
           cànids (igual que els llops), i és el carnívor terrestre
           més abundant. \\
  \addlinespace
  gat    & El gat és una espècie domèstica de mamífer carnívor petit. És la única
           espècie domesticada de la família Felidae (felins), i sovint s'anomena com a
           gat domèstic per distingir-lo dels membres salvatges de la
           família. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Combinar cel·les

A LaTeX pots combinar o fusionar cel·les horitzontalment utilitzant la comanda `\multicolumn`. És el primer que s'ha d'utilitzar dins de la cel·la. `\multicolumn` pren tres arguments:

1. El número de cel·les que s'han de combinar
2. La justificació de la cel·la combinada
3. El text de la cel·la combinada

La justificació pot tenir qualsevol opció vàlida del preàmbul de `tabular`, però _només_ un únic tipus de columna.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Menjar  & Tamany   \\
  \midrule
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota  & mosques & petit  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

També pots utilitzar `\multicolumn` dins d'una cel·la per prevenir l'aplicació de qualsevol coa que hagis definit en el preàmbul de la taula per a la columna actual. El següent exemple ho fa servir per centrar la capçalera de la taula:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Menjar} & \multicolumn{1}{c}{Tamany} \\
  \midrule
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

La combinació de cel·les verticalment no està suportat a LaTeX. Normalment n'hi ha prou en deixar les cel·les buides per donar al lector la idea correcta de què es vol expressar, sense haver de fer una fusió de files.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Grup     & Animal & Tamany   \\
  \midrule
  herbívor & cavall  & gros  \\
            & cabirol   & mitjà \\
            & conill & petit  \\
  \addlinespace
  carnívor & gos    & mitjà \\
            & gat    & petit  \\
            & lleó   & gros  \\
  \addlinespace
  omnívor  & corb   & petit  \\
            & ós   & gros  \\
            & porc    & mitjà \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Exercicis

Utilitza un exemple senzill de taula per començar a experimentar amb les taules. Prova diferents alineacions utilitzant els tipus de columna `l`, `c` i `r`. Què passa si tens massa poc elements en una fila de la taula? I què passa si en tens massa? Experimenta amb la comanda `\multicolumn` per fer combinació de columnes.
