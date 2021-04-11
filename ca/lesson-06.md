---
layout: "lesson"
lang: "ca"
title: "Estenent LaTeX utilitzant paquets i definicions"
description: "Aquesta lliçó explica com pots estendre i adaptar LaTeX a les teves necessitats i canviar la seva aparença utilitzant els paquets i definicions. Es mostra igualment com pots definir les teves pròpies comandes."
toc-anchor-text: "Estenent LaTeX"
toc-description: "Utilitzant paquets i definicions."
---

# Estenent LaTeX

<span
  class="summary">Aquesta lliçó explica com pots estendre i adaptar LaTeX a les teves necessitats i canviar la seva aparença utilitzant els paquets i definicions. Es mostra igualment com pots definir les teves pròpies comandes.</span>

Després d'haver declarat un tipus, en el preàmbul pots modificar la funcionalitat afegint un o més *packages*. Aquests poden

- Com funciona algunes parts de LaTeX
- Afegir noves comandes a LaTeX
- Canviar el disseny del document

## Canviar com funciona LaTeX

El 'kernel' de LaTeX (el nucli LaTeX) és bastant limitat quant a les possibilitats de personalització, i per això alguns paquets extra afegeixen possibilitats comunes. El primer és la possibilitat de canviar la manera com LaTeX es comporta amb caràcters específics del llenguatge (guionets i separació sil·làbica, signes de puntuació, cometes, localització, etc.). Diferents idiomes tenen diferents regles, així doncs és important dir-li a LaTeX quina has d'utilitzar. Això ho gestiona el paquet `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[catalan]{babel}

\usepackage[width = 6cm]{geometry} % To force hyphenation here

\begin{document}

This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.
This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.

\end{document}
```

Prova de descomentar la línia que carrega `babel` i mira el seu efecte. (Les regles estàndard de separació sil·làbica son les de l'anglès US.)

El paquet `babel` fa molt més que la separació sil·làbica, depenent de quin llenguatge estem parlant; et donem [més detalls](more-06) en cas que els necessitis.

## Canviar el disseny

És útil la possibilitat d'ajustar alguns aspectes del disseny amb independència del tipus de document. El més obvi són els marges de pàgina. En l'exemple anterior acabem d'utilitzar el paquet `geometry`, però anem a fer ara un exemple centrat en els marges.

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Hey world!

This is a first document.


% ================
\chapter{Chapter One}
Introduction to the first chapter.


\section{Title of the first section}
Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.


% ================
\section{Second section}

Text of the second section.

\end{document}
```

Pots veure el seu efecte evitant de carregar el paquet `geometry`.

## Afegir nova funcionalitat

Un dels punts forts de LaTeX és que pots escollir entre milers de paquets, incloent els que et permeten escriure fórmules matemàtiques, hiperenllaços, capacitats sofisticades relacionades amb el color, etc. Treballarem amb altres paquets comuns en properes lliçons.

## Definir comandes

A vegades necessites una comanda específica per al teu document, potser alguna funcionalitat que no es troba en els paquets específics, o potser una comanda per entrar una expressió comuna que utilitzes moltes vegades.

El següent exemple mostra una comanda que aplica un format i estil a les paraules 'apples' i 'oranges', cosa que pot suposar un estalvi de temps important si aquesta funcionalitat es fa servir moltes vegades.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

En la definició `[1]` significa el número d'arguments (en aquest cas un) i `#1` significa el primer argument que es proporciona (`apples` o `oranges` en aquest exemple). Pots tenir fins a 9 arguments.

Definir comandes no només serveix per reduir el número de tecles a picar, sinó sobretot una manera fàcil d'aplicar estils. Pots tenir 'keywords' amb diferents estils, en comptes d'haver d'editar el document sencer. En l'exemple carreguem el paquet `xcolor` per proporcionar colors, i formatem les paraules que volem destacar amb blau i itàlica.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

Tingues en compte que definir massa comandes o comandes amb molts arguments pot fer que el document font sigui difícil d'entendre. La possibilitat de definir comandes específiques per al document s'ha d'utilitzar amb compte i sense abús.

## Exercicis

Prova d'escriure text amb altres llengües europees i observa com `babel` afecta la separació sil·làbica: pots trobar exemples de text a internet, i endevina les opcions correctes.

Prova d'alterar els marges en l'exemple on hem utilitzat `geometry`. Pots definir els marges amb `top`, `bottom`, `left` i `right`, separant les opcions amb coma.

Prova de carregar el paquet `lipsum` i afegeix la comanda `\lipsum` al teu document. Pots endevinar per què aquest exemple és útil per fer exemples?

Prova de fer modificacions en la definició de `\kw` per obtenir diferents estils.
