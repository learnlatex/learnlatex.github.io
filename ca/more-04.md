---
layout: "lesson"
lang: "ca"
title: "Més sobre: Estructura lògica"
description: "Aquesta lliçó explica com configurar el títol del document, i com fer llistes descriptives."
toc-anchor-text: "Més sobre: Estructura lògica"
---

## Títols del document

LaTeX proporciona algunes marques lògiques per al títol dels documents: tres comandes per configurar les 'metadata' i una per utilitzar-les.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{A.~N.~Altre \and D.~Nobacon}
\title{Coses que he fet}
\date{1r april 2020}
\maketitle

Una mica de text.
\end{document}
```

Com pots veure, les comandes `\author`, `\title` i `\date` guarden informació, i `\maketitle` l'utilitza. També pots separar múltiples autors amb `\and`. Les comandes `\author`, `\title` i `\date` han d'estar abans del `\maketitle`. Aquí les hem escrit en el cos del document, però també es poden utilitzar en el preàmbul (però si utilitzes les dreceres de `babel` allà no seran actives).

El disseny que proporciona `\maketitle` depèn de la classe del document (veure [lesson
5](lesson-05)). Hi ha un entorn `titlepage` per quan vols fer un disseny a mida, però això està fora de l'àmbit d'aquesta introducció. Si vols definir els teus propis dissenys del document pots utilitzar una classe que es pugui personalitzar, com ara `memoir`, o començar amb una de les classes base de LaTeX, com per exemple `book` i utilitzar-la com a punt de partida.

## Llistes descriptives

A més a més dels tipus de llista "ordenats" i "desordenats", LaTeX encara en proporciona un altre, menys conegut: les "llistes descriptives".

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Gos:] membre del gènere Canis, que forma part dels cànids que deriven del llop, i és el carnívor terrestre més abundant.
\item[Gat:] espècie domèstica de petits mamífers carnívors. És la única espècie domèstica de la família dels Felins i se'l coneix normalment com a gat domèstic per distingir-lo dels membres salvatges de la família.
\end{description}

\end{document}
```

## Exercicis

Prova d'editar informació de diferents `\author`, `\title` i `\date` per provar la comanda `\maketitle`. Quines d'elles _has_ de definir? És necessari que aquestes comandes tinguin un autor, un títol o una data com a paràmetres?

Crea algunes llistes descriptives i afegeix-ne algunes a l'interior d'altres (numerada, no numerada o descriptiva).
