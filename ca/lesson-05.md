---
layout: "lesson"
lang: "ca"
title: "Utilitzant els tipus de document per a canviar el disseny"
description: "Aquesta lliçó explica què és un tipus de document (_class_ en anglès) y com influeix en la seva apariència. Es citen també els principals tipus de documents disponibles en la distribució de TeX."
toc-anchor-text: "Tipus de document"
toc-description: "Configurant l'aparença general del document"
---

# Utilitzant els tipus de document per a canviar el disseny

<span
  class="summary">Aquesta lliçó explica què és un tipus de document (_class_ en anglès) y com influeix en la seva apariència. Es citen també els principals tipus de documents disponibles en la distribució de TeX.</span>

Segurament te n'hauràs adonat que tots els documents LaTeX que hem creat fins al moment començaven amb la línia `\documentclass`, i que de moment l'opció `\documentclass{article}` ha estat la més habitual. (En la [lliçó anterior](lesson-04) vam provar l'opció
`\documentclass{report}` per fer proves amb la comanda `\chapter`). Aquesta línia és obligatòria en tots els documents LaTeX, i quasi sempre serà la primera línia que inclouràs.

## Què és un tipus de document

El tipus de document elegit configura la disposició i el disseny del document, per exemple

- configura marges, fonts, espaiat, etc.
- si la secció capítol està disponible,
- si el títol ha d'estar en una pàgina a part.

Els tipus de document poden també afegir noves comandes de forma més general; això és important per a casos especials com ara crear les pàgines d'una presentació.

La línia de tipus de document pot utilitzar també _global options_: opcions que s'apliquen a tot el document. Aquestes opcions s'escriuen en claudàtors: `\documentclass[<options>]{<name>}`. Aquesta sintaxi, amb informació opcional que es proporciona en els claudàtors, s'utilitza en moltes comandes LaTeX.

## Els tipus de documents bàsics

LaTeX proporciona un conjunt de tipus estàndard, i tots ells tenen una aparença similar amb algunes variacions:

- `article`  
  documents curts sense capítols
- `report`  
  documents més llargs amb capítols, per a ser impressos en una sola cara
- `book`  
  documents més llargs amb capítols, per a ser impressos a dues cares, amb materials inicial i final (com per exemple un índex)
- `letter`  
  cartes sense seccions
- `slides`  
  per fer presentacions (veure més avall)

Els tipus `article`, `report` i `book` tenen una disponibilitat de comandes molt similar, com hem vist. Quan escrivim una `carta`, les comandes disponibles són una mica diferents.

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Una direcció\\Un carrer\\Una ciutat}

\opening{Benvolgut Sr o Sra,}

El Text el posem aquí

\closing{Atentament,}

\end{letter}

\end{document}
```

Fixa't com s'utilitza ``\\`` per a separar les línies de l'adreça; estudiarem el salt de línia [una mica més endavant](lesson-11). També fixa't com el tipus `letter` crea un nou entorn per a cada carta i té comandes especials.

Els tipus estàndard `article`, `report` i `book` prenen les opcions `10pt`, `11pt` i `12pt` per definir el tamany de la font, i `twocolumn` per fer un document a dues columnes.

## Tipus de documents enriquits

Els tipus principals són molt estables, però això vol dir també que són una mica conservadors tant en el disseny com en les comandes disponibles. Amb el temps, s'han anat escrivint un número considerable de tipus potents, que permeten canviar el disseny sense haver de fer-ho manualment (ho explicarem [una mica més endavant](lesson-11)).

La American Mathematical Society proporciona variants dels tipus estàndard (`amsart`, `amsbook`) amb un disseny similar al que utilitzen les publicacions i revistes matemàtiques.

Els tipus 'estesos' més populars i més importants són el conjunt KOMA-Script i el tipus 'memoir'. El KOMA-Script proporciona un conjunt de tipus amb cert paral·lelisme als estàndard: `scrartcl`, `scrreprt`, `scrbook`, i `scrlttr2`, mentre que el tipus `memoir` només proporciona un tipus que s'assembla a una extensió de `book`.

Aquests tipus sxtesos tenen moltes eines i possibilitats de personalització, que explorarem una mica en un exercici. Et pots preguntar com sabrem quin tipus d'eines i possibilitats proporcionen; en parlarem [en una propera lliçó](lesson-16), però si vols ja hi pots anar!

## Presentacions

El tipus de document `slides` va ser desenvolupat per fer presentacions de transparències els anys 1980s, i així doncs no tenen possibilitat de crear presentacions basades en PDF. Hi ha altres tipus més moderns que sí que ho permeten fer: són una mica especialitzades en comparació als documents LaTeX més generals, així que en parlem [en la informació addicional de la lliçó](more-05).

## Exercicis

Explora com canvia l'aparença i el disseny del document quan canvies el tipus de document entre els estàndars, el KOMA i el `memoir`.

```latex
\documentclass{article} % Canvia la classe aquí
\usepackage[T1]{fontenc}

\begin{document}

\section{Introducció}

Aquest és un document d'exemple amb una mica de 
text\footnote{i un peu de pàgina}. Aquest paràgraf és bastant llarg
doncs volem veure l'efecte de definir que el nostre
document tingui dues columnes.

\end{document}
```

Afegeix l'opció de tipus `twocolumn` i observa com canvia el disseny.

Canvia la `\section` per `\chapter` i observa com afecta les següents opcions de tipus quan utilitzes el tipus `scrreprt`.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
