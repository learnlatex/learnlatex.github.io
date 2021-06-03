---
layout: "lesson"
lang: "ca"
title: "Matemàtiques"
description: "Aquesta lliçó ensenya el mode matemàtic de LaTeX, la manera com pots escriure i mostrar fórmules en línia, les extensions que proporciona el paquet amsmath, i com pots canviar les fonts de caràcter en el mode matemàtic."
toc-anchor-text: "Matemàtiques"
toc-description: "Mode i notació matemàtica."
---

# Matemàtiques

<span
  class="summary">Aquesta lliçó ensenya el mode matemàtic de LaTeX, la manera com pots escriure i mostrar fórmules en línia, les extensions que proporciona el paquet `amsmath`, i com pots canviar les fonts de caràcter en el mode matemàtic.</span>

Escriure complexes fórmules matemàtiques és una de les eines potents de LaTeX. En el 'mode matemàtic' pots posar marques d'una forma lògica.

## Mode matemàtic

En el mode matemàtic s'ignoren els espais i s'aplica un correcte espaiat entre caràcters (quasi sempre). Existeixen dues formes del mode matemàtic: inline (en línia) i display (en una línia a part).

* inline
* display

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Una frase amb expressió matemàtica inline: $y = mx + c$.
Una segona frase amb expressió matemàtica inline: $5^{2}=3^{2}+4^{2}$.

Un segon paràgraf que visulaitza una expressió matemàtica.
\[
  y = mx + c
\]
Fixa't com el paràgraf continua després de la visualització.
\end{document}
```

Potser hauràs vist fórmules matemàtiques de la forma 'LaTeX' en altres llocs, per exemple el sistema MathJax per escriure equacions dins de les pàgines web. Aquests sistemes sovint accepten petites variacions de la sintaxi de LaTeX, doncs de fet no acostumen a utilitzar LaTeX en segon pla.

<p class="hint">Tots aquests exemples tenen el format <i>correcte</i> de LaTeX. Si en un altre context veus un format una mica diferent, pot ser que no sigui relament LaTeX.</p>

### Mode matemàtic inline i notació matemàtica

Com has vist més amunt, el mode matemàtic inline utilitza el dòlar com a símbol de marques (`$...$`). També és possible utilitzar la notació `\( ... \)`. Expressions simples es poden entrar sense utilitzar marques especials, i pots comprovar que les fórmules estan espaiades de forma correcta i les lletres en cursiva.

El mode matemàtic inline restringeix  el tamany vertical de les expressions de manera que, en la mesura del possilbe, la fórmula no destorbi l'espaiat de línia del paràgraf.

Para atenció que _totes_ les expressions matemàtiques s'han de marcar com a tals, fins i tot si és un únic caràcter hauries d'utilitzar `... $2$ ...` i no pas `... 2 ...`, per exemple, o quan tens un número negatiu posaràs `... $-2$ ...`, doncs els números en la fórmula no tenen perquè tenir la mateixa font de caràcters que en el text (depenent de la classe de document). D'altra banda, tingues cura amb els símbols que apareixen en un text sense format i copiat d'una altra banda, com per exemple els valors monetaris que utilitzen el símbol `$`, o les noms de fitxer que utilitzen el símbol `_` (els quals s'hauran d'escriure com a `\$`iy `\_`, respectivament).

Podem afegir fàcilment superindex i subindex: s'escriuen utilitzant `^` i `_`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Superíndex $a^{b}$ i subíndex $a_{b}$.
\end{document}
```

(Pots trobar-te amb exemples on vegis super o subindex escrits sense claus, però tingues en compte que aquesta no és la sintaxi oficial i que la sortida pot formatar-se malament; utilitza sempre claus.)

Hi ha _moltes_ comandes de mode matemàtic específiques. Algunes molt senzilles, com per exemple `\sin` i `\log` per al sinus i el logaritme o `\theta` per a la lletra grega.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Una expressió matemàtica: $y = 2 \sin \theta^{2}$.
\end{document}
```

Ara i aquí no podem cobrir tots els aspectes de les comandes de mode matemàtic, però hi ha molts recursos en línia que llisten tot el conjunt estàndard. Pots cercar les comandes per escriure
símbols en mode matemàtic, utilitzant l'eina [Detexify](https://detexify.kirelabs.org/classify.html).


### Mode matemàtic display (en una línia a part)

Pots utilitzar les mateixes comandes per al mode display que les que has utilitzat per al mode inline. El mode matemàtic display està pensat per a equacions més llargues que són part d'un paràgraf, i per defecte queda centrat. S'ha de fer notar que els entorns matemàtics display no permeten que un paràgraf acabi amb text matemàtic, amb la qual cosa no disposaràs de línies en blanc dins del mode display.

El paràgraf ha d'haver començat _abans_ del display, per tant no deixis una línia en blanc abans de l'entorn matemàtic display. Si necessites vàries línies amb fórmules, no utilitzis entorns consecutius de display (la qual cosa provocaria un espaiat inconsistent); utilitza un entorn display multilínia com ara `align` del paquet `amsmath` descrit més endavant.

És particularment útil per fer integrals, per exemple:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un paràgraf amb una equació llarga
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Para atenció com hem utilitzat la notació de sub/superínex per posar els límits de la integral.

Aquí hem afegit un espaiat manual: `\,` que posa un petit espai abans del `dx` (i així no sembla un producte).

Sovint voldràs una equació enumerada, això ho podràs aconseguir utilitzar l'entorn `equation`. Provem d'utilitzar-ho en l'exemple anterior:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un paràgraf amb una equació llarga
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

El número de l'equació s'incrementa de forma automàtica i pot ser un simple número, com en aquest exemple, o pot estar prefixat pel número de la secció, per exemple (2.5) per a la 5a equació de la secció 2. Els detalls de com formatar es defineixen en la classe del document i ara no ho expliquem.

## El paquet `amsmath`

La notació matemàtica pot ser molt rica, i això significa que les eines disponibles al voltant del nucli de LaTeX no ho poden abastar tot. El paquet `amsmath` estén el suport del nucli per tal de cobrir la major part de les idees. A la [Guia d'Usuari d'`amsmath`](http://texdoc.org/pkg/amsmath) trobarem molts més exemples dels que podem mostrar en aquesta lliçó.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Resol la següent expressió recursiva for $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

L'entorn `align*` fa que les equacions s'alineïn a nivell dels símbols `&`, igual que en una taula. Fixa't com hem utilitzat `\quad`, per afegir una mica d'espai, i `\text` per tal d'incloure un text normal a l'interior del mode matemàtic. Hem utilitzat igualment una altra comanda del mode matemàtic, `\binom` per a un binomi.

Fixa't que aquí hem utilitzat `align*` i que en canvi no s'ha enumerat l'equació. La majoria dels entorns matemàtics enumeren per defecte les equacions, però les seves variants amb asterisc `*` fan que no s'enumerin.

El paquet té també d'altres entorns interessants, per exemple per treballar amb matrius:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Matrius AMS.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## Tipus de lletra (fonts) en el mode matemàtic

A diferència del text normal, canvis de font en el mode matemàtic responen sovint a un significat concret. Així doncs sovint s'escriuen de forma específica. Aquestes són comandes que podràs necessitar:

- `\mathrm`: roman (upright)
- `\mathit`: cursiva espaiat com a 'text'
- `\mathbf`: negreta
- `\mathsf`: sans serif
- `\mathtt`: mono espaiat (tipus màquina d'escriure)
- `\mathbb`: double-struck o doble impressió (blackboard bold) (disponible en el paquet `amsfonts`)

Cadascuna de les comandes agafa com a arguments lletres llatines, així per exemple podem escriure una matriu de la següent forma:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
La matriu $\mathbf{M}$.
\end{document}
```

Fixa't que el mode en cursiva matemàtic per defecte separa les lletres, i així doncs el podem utilitzar per escriure un producte de variables. Utilitza `\mathit` per posar en cursiva una paraula.

Les comandes de tipus de font `\math..`, utilitzen un tipus de lletra d'ús específic per a matemàtiques. Algunes vegades necessitem afegir una paraula que formi part d'una frase i necessitem utilitzar el tipus de font d'un text normal. Per fer-ho, utilitzarem `\text{...}` (disponible en el paquet `amsmath`) o tipus de lletra específics com `\textrm{..}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```

Si has de fer altres símbols en negreta [mira els detalls extra](more-10).

## Exercicis

Prova d'utilitzar alguns modes matemàtics de base: reutilitza els exemples i canvia entre els modes inline i display. Pots veure com canvia el resultat amb aquests canvis.

Intenta afegir d'altres lletres gregues, en minúscules i en majúscules. Hauries de ser capaç d'endevinar els seus noms.

Prova d'utilitzar les comandes per canviar el tipus de lletra: què passa quan intentes aniuar-los?

El mode matemàtic display és centrat per defecte; intenta afegir l'opció `[fleqn]` (justifica les
equacions a l'esquerra) en la definició del tipus de document dels exemples anteriors, per tal de veure quins efectes té en el resultat final. De la mateixa manera, les equacions s'enumeren normalment a la dreta. Prova d'afegir l'opció `[leqno]` (enumeració d'equacions a l'esquerra) en la definció del tipus de document.