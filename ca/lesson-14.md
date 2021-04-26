---
layout: "lesson"
lang: "ca"
title: "Seleccionar fonts i utilitzar els motors Unicode"
description: "Aquesta lliçó dona una idea de com LaTeX interpreta el text Unicode i com aixó afecta allò que estàs escrivint i les fonts que estàs utilitzant. També aprendràs sobre l'ús de les fonts Unicode i OpenType."
toc-anchor-text: "Motors de Fonts i Unicode"
toc-description: "Seleccionar fonts i la codificació."
---

# Seleccionar fonts i utilitzar els motors Unicode

<span
  class="summary">Aquesta lliçó dona una idea de com LaTeX interpreta el text Unicode i com aixó afecta allò que estàs escrivint i les fonts que estàs utilitzant. També aprendràs sobre l'ús de les fonts Unicode i OpenType.</span>

Quan TeX i LaTeX van començar a ser usats àmpliament només suportaven els idiomes europeus, d'entrada, encara que hi havia possibilitats d'utilitzar altres alfabets com el grec i el rus.

## Accents i lletres accentuades

Al principi, els accents i les lletres acentuades s'escrivien utilitzant seqüències de control o macros com ara `\c{c}` per obtenir 'ç' i `\'e` per a la 'é'. Mentre algunes persones seguien utilitzant aquests mètodes perquè els era més fàcil escriure, d'altres volien utilitzar les tecles dels seus teclats per escriure aquests símbols directament.

Abans de l'Unicode, LaTeX proporcionava suport per molts tipus de *codificació de fitxers* que permetien escriure text en diversos idiomes de forma nativa — per exemple, utilitzant la codificació `latin1` els usuaris francesos podien escriure ‘`déjà vu`’ i LaTeX internament traduïa els caràcters accentuats a comandes TeX que donaven la sortida correcta.

Aquest mètode segueix encara en ús quan utilitzem el motor `pdflatex`. Per defecte, ara s'assumeix que tots els fitxers tenen codificació Unicode (UTF-8) a no ser que s'especifiqui el contrari. Encara que aquest motor està limitat a fonts de 8 bits, la major part d'idiomes europeus el suporten.

## Seleccionar la font

Seleccionar font amb `pdflatex` permet un esquema de selecció molt robust, i avui dia hi ha moltes fonts disponibles en la distribució de LaTeX estàndard. Per exemple, les fonts Gyre de TeX són una col·lecció de fonts d'alta qualitat basades en les fonts habituals a les que la gent està acostumada, com són Times, Helvetica, Palatino i d'altres. Per carregar aquestes fonts és tan simple com carregar el paquet amb el nom adequat. Per a una font similar a Times, la Gyre de TeX s'anomena Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

Amb `pdflatex`, la majoria de les fonts es poden utilitzar via paquets. Pots donar una ullada al [Catàleg de Fonts de LaTeX](https://www.tug.org/FontCatalogue/) o a la pàgina de [CTAN cercant pel tema ‘Font’](https://www.ctan.org/topic/font) per veure algunes de les opcions. També pots cercar per Internet la font desitjada, i mirar si existeix una versió de paquet `pdflatex`. Si vols utilitzar una font propietària segurament existirà una font similar, que per a la majoria de les aplicacions serà prou similar a l'original.

## L'era Unicode

Com que `pdflatex` està limitat a fitxers amb codificació de 8 bits i fonts de 8 bits, no pot utilitzar de forma nativa les modernes fonts OpenType i canviar de forma fàcil entre diferents idiomes que utiltizen diferents alfabets (o scripts, si utilitzem el terme tècnic). Hi ha dos substituts per a pdfTeX que utilitzen les fonts modernes i Unicode de forma nativa: XeTeX i LuaTeX. A LaTeX, aquests dos paquets s'invoquen des de l'editor utilitzant els motors `xelatex` i `lualatex` respectivament.

En aquests motors, la selecció de la font la farem amb el paquet `fontspec`, i en documents simples tindria un aspecte similar a:

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

El que fem és seleccionar la font Gyre Termes de TeX, com féiem en l'exemple de `pdflatex` de més amunt. És de remarcar que fent-ho així funcionarà amb *qualsevol* font OpenType. Algunes fonts disponibles per a `pdflatex` també estan disponibles per a `xelatex` i `lualatex` utilitzant els paquets apropiats, o bé carregant qualsevol font que s'hagi instal·lat a l'ordinador utilitzant `fontspec` com s'ha mostrat més amunt.

[El Catàleg de Fonts de LaTeX](https://www.tug.org/FontCatalogue/) mostra totes les fonts disponibles amb format OpenType, així que pots utilitzar aquest recurs per cercar fonts, i també a la pàgina de [CTAN](https://www.ctan.org/topic/font) que hem esmentat abans.

Un cop hem seleccionat la font, podem escriure directament el text amb Unicode. Aquí hi ha un exemple que combina lletres gregues i llatines i també ideogrames CJK:

```latex
% !TEX xelatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p class="hint">Quan canviem entre idiomes és usual i important canviar altres aspectes com la separació sil·làbica i similars, i els paquets <code>babel</code> i <code>polyglossia</code> proporcionen una manera robusta de fer-ho.</p>
