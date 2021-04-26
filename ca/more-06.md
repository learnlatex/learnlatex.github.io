---
layout: "lesson"
lang: "ca"
title: "Més sobre: Ampliant LaTeX utilitzant paquets"
description: "Aquesta lliçó explica més detalls sobre la càrrega de paquets, ensenya el paquet babel per a la selecció d'idiomes, i dóna més detalls sobre comandes creades per l'usuari."
toc-anchor-text: "Més sobre: Ampliant LaTeX utilitzant paquets"
---

## Carregar diversos paquets

La comanda `\usepackage` pren una llista de paquets separats per comes, i així pots carregar-los tots de cop: per exemple `\usepackage{color,graphicx}`. Si estàs passant opcions a un paquet, aquestes opcions s'aplicaran a tots els paquets de la llista. D'altra banda, si carregues els paquets de forma separada posant-los en línies diferents, serà més fàcil comentar-los o descomentar-los quan et calgui. Per tant, aquesta serà la manera de preferència.

## El paquet `babel`

Ja hem explicat el paquet `babel` [en la secció principal de la lliçó](lesson-06) amb la finalitat d'elegir diferents patrons de separació sil·làbica. Però aquest paquet fa molt més que això, en funció de l'idioma que utilitzis. Per exemple, per l'alemany proporciona algunes abreviatures per a la creació de guions 'suaus' i també una forma ràpida d'escriure dièresi sense necessitat d'utilitzar un teclat alemany.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Utilitzem 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

Altres opcions de l'idioma poden provocar canvis en el disseny: per exemple, en la tradicional tipografia francesa, hi ha un espai en blanc abans d'alguns signes de puntuació com ara `:`, i aquest espai s'afegeix automàticament si carregues `babel` amb l'opció `french`.

## Opcions globals

Algunes vegades, vols que una opció estigui disponible en tots els paquets que has carregat. Això es fa afegint aquesta opció en la línia `\documentclass`: cada paquet pot 'veure' aquesta llista. Per passar l'idioma del document a tots els paquets:

```latex
\documentclass[ngerman]{article} % Utilitzem 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## Més definicions

`\newcommand` permet definir fins a nou arguments a les comandes, la primera de les quals pot ser opcional.

Si agafem l'exemple de la lliçó principal, podem fer que el paràmetre color sigui opcional, i amb un valor per defecte de blau.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Alguna cosa sobre \kw{pomes} i \kw[red]{taronges}.

\end{document}
```

Els valors opcionals vénen delimitats per claudàtors `[]` i, si s'ometen, s'utilitza el valor per defecte que s'especifica en la definició.

## `\NewDocumentCommand`

A partir de la última versió d'octubre de 2020 de LaTeX hi ha disponible un nou sistema de definicions més complet. En les antigues versions es podia fer servir el nou sistema a través del paquet `xparse`, però ara ja no cal.

Repetim l'anterior exemple utilitzant `\NewDocumentCommand`

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Només necessari en antigues versions
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Alguna cosa sobre \kw{pomes} i \kw[red]{taronges}.

\end{document}
```

Igual que féiem amb `\newcommand`, `\NewDocumentCommand` agafa la definició de la comanda (en aquest cas `\kw`) i el cos de la definició, utilitzant `#1` a `#9` per als arguments, però la diferència està en com s'especifiquen els arguments.

A diferència de `\newcommand` on només es donen el número exacte d'arguments (amb la possibilitat de què el primer sigui un valor per defecte), amb `\NewDocumentCommand` cada argument s'especifica per una lletra de manera que una comanda amb dos arguments s'especifica amb `{mm}` en comptes de `[2]`. Aquesta sintaxi és una mica més carregada però permet més flexibilitat en la definició de les comandes. Aquí tan sols hem donat un senzill exemple on el primer argument és opcional, i té valor per defecte blau (`O{blue}`) i el segon argument és obligatori (`m`).
