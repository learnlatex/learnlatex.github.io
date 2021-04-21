---
layout: "lesson"
lang: "ca"
title: "Donar estructura a documents llargs"
description: "Aquesta lliçó explica com LaTeX permet dividir el teu document en documents més petits, i d'aquesta manera pots editar documents llargs d'una manera fàcil i ràpida."
toc-anchor-text: "Estructurar el codi font"
toc-description: "Dividir el codi font de forma estructurada."
---

# Estructurar documents llargs

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span
  class="summary">Aquesta lliçó explica com LaTeX permet dividir el teu document en documents més petits, i d'aquesta manera pots editar documents llargs d'una manera fàcil i ràpida.</span>

Quan estàs escrivint un document llarg, segurament voldràs separar el contingut del document en diversos arxius. Per exemple, és molt habitual tenir un arxiu principal `main`/`root` i altres arxius secundaris: un per cada capítol (en un llibre o una tesi) o per cada secció (en un article llarg).

## Estructurar els arxius font

LaTeX et permet separar el contingut de forma controlada. Hi ha dues comandes importants per fer-ho: `\input` i `\include`. Podem utilitzar `\input` per fer que el contingut d'un arxiu funcioni `com si fos escrit en aquest punt`, i per tant es pot utilitzar (essencialment) per inserir qualsevol tipus de contingut. La comanda `\include` s'utilitza únicament per als capítols: comença una nova pàgina i realitza alguns ajustaments interns. Però presenta un gran avantatge: ens permet seleccionar els capítols que volem incloure, i per tant ens podem centrar en una part del document més que en el document complet.

Un document llarg podria per tant semblar-se a alguna cosa similar a:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{Un llibre d'exemple}
\author{John Doe \i Joe Bloggs}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Fem un document sencer per tal de generar
% tots els fitxers auxiliars
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

Mirem alguns dels aspectes de l'exemple anterior. Els diferentss arxius a què es fa referència es troben al final d'aquesta pàgina.

## Utlitzar `\input`

La comada `\input` és apropiada per a parts d'un document llarg que _no_ siguin capítols independents. En l'exemple, l'hem utilitzat per separar la portada i la contraportada posterior, i així l'arxiu principal és més curt i concís; i així podem reutilitzar la portada i la contraportada en un altre document. L'hem utilitzat també en les seccions que 'no són capítols' i que es troben al principi del nostre 'llibre': com ara el prefaci. Això permet simplificar l'arxiu principal.

## Utilitzar `\include` i `\includeonly`

La comanda `\include` és apropiada per als capítols, motiu pel qual l'hem utilitzat aquí per incloure cada capítol; comença sempre amb una nova pàgina. Hem seleccionat els capítols que seran compilats amb la comanda `\includeonly`, que com s'ha vist pren com a argument una llista de noms d'arxiu separats por comes. Utilitzant `\includeonly` pots reduir el temps de compilació i produir un PDF 'selectiu' per a les revisions. A més a més, el principal avantatge de `\includeonly` és que LaTeX utilizarà tota la informació de les referències creuades dels arxius `.aux` que es corresponen als altres arxius inclosos en el document.

## Crear una taula de continguts

La comanda `\tableofcontents` utilitza la informació de les comandes de secció per omplir una taula de continguts. Té el seu propi fitxer auxiliar, amb extenxió `.toc`, i segurament hauràs de compilar LaTeX dues vegades per tal de resoldre tota la informació. La taula es genera automàticament a partir dels títols de les seccions. Hi ha comandes similars per `\listoffigures` i `\listoftables`, que funcionen prenent les etiquetes de les figures i taules, i que tenen com a extensió `.lof` i `.lot` respectivament.

## Dividir el document en parts

Les comandes `\frontmatter`, `\mainmatter`, i `\backmatter` afecten al format. Per exemple, `\frontmatter` canvia la numeració de les pàgines a números romans. La comanda `\appendix` canvia la numeració a `A`, `B`, etc., de manera que en el primer capítol després d'`\appendix`, la capçalera posarà `Appendix A`.

## Exercicis

Experimenta amb l'estrcutura de base del document de l'exemple, intenta afegir i treure parts amb `\includeonly` per tal de veure quin efecte té.

Afegeix alguns objectes flotants i crea un índex de taules i figures. Si utilitzes una instal·lació local de LaTeX, fixa't en quantes compilacions seran necessàries (el sistema en línia ja fa diverses compilacions 'en segon pla').

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Prefaci}
El text del prefaci. Veure \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introducció}
El text del primer capítol.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Alguna cosa}
El text del segon capítol.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
El text del primer apèndix.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
Per \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
La contraportada
\end{center}
```
<!-- {% endraw %} -->

----
