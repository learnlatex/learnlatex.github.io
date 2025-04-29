---
layout: "lesson"
lang: "ca"
title: "Estructura bàsica d'un document LaTeX"
description: "En aquesta lliçó s'explica l'estructura bàsica d'un document LaTeX, i com generar el fitxer PDF resultant, així com els principals caràcters i marques especials utilitzats a LaTeX."
toc-anchor-text: "Estructura del document"
toc-description: "L'estructura bàsic a d'un document."
---

# Estructura d'un document LaTeX

<span
  class="summary">Aquesta lliçó explica l'estructura bàsica d'un document LaTeX, i com generar el fitxer PDF resultant, així com els principals caràcters i marques especials utilitzats a LaTeX.</span>

El teu primer document LaTeX el farem molt simple: la idea és ensenyar-te quina forma té un document font i com escriure'l correctament. També serà la teva primera oportunitat d'[utilitzar els exemples](help) de `learnlatex.org`.

Si estàs utilitzant una instal·lació local de LaTeX, amb el teu editor crea un nou fitxer anomenat `first.tex`, i fes un copy-paste del codi que se't proporciona a continuació, o bé pica'l.

Si estàs utilitzant un sistema online, senzillament clica a ‘Obre a Overleaf’ per tal de provar-lo!

<p 
  class="hint">Et suggerim de què provis les opcions online encara que hagis configurat LaTeX localment; aquesta és una bona oportunitat per veure com funcionen les diferents opcions.</p>

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hola món!

Aquest és un primer document.
\end{document}
```

Guarda el fitxer i converteix-lo a un document PDF; si estàs utilitzant una instal·lació local de LaTeX, l'opció que hauràs de prémer dependrà de l'editor que hagis triat. Hauràs d'obtenir un fitxer PDF que conté el text anterior i també el número de pàgina; LaTeX l'ha afegit automàticament.

Visualitza la sortida `first.pdf` amb el visor de PDFs que prefereixis. Sembla fantàstic! Per molts anys!

## Gestionar els errors

Els errors sovintegen. Comprova que has entrat cada línia del text anterior tal com està escrit. A vegades petits canvis en l'entrada donen lloc a grans canvis en el resultat, i fins i tot el document no funcionarà, no compilarà. Si no te'n surts, esborra tot el document i torna-ho a provar des del principi.

Si la teva compilació acaba amb un signe d'interrogació pots sortir teclejant `x` i `<Enter>`.

Els missatges d'error de LaTeX intenten ser d'ajuda, però no són els mateixos missatges que pots trobar en un processador de textos. Altres editors fan que sigui difícil veure el missatge complet de l'error, i podrien amagar la informació rellevant de l'error. LaTeX sempre crea un log d'allò que està fent; aquest és un fitxer amb l'extensió `.log`. Allà hi podràs trobar els missatges d'error complets, i si tens un problema, usuaris experts de LaTeX et podrien demanar una còpia del teu fitxer de log.

<p class="hint">Donem més informació sobre el tractament d'errors a la <a href="./lesson-15">lliçó 15</a>.</p>

## Allò que has obtingut

El primer document mostra allò bàsic. Els documents de LaTeX són una barreja de documents i comandes. Les comandes comencen amb una `barra invertida` (`backslash`) i sovint tenen arguments entre claus {}, o a vegades arguments opcionals dins de claudàtors []. Aleshores obtenim el PDF dient-li a LaTeX que imprimeixi el fitxer.

Tots els documents de LaTeX tenen un `\begin{document}` i el corresponent `\end{document}`.
Enmig dels dos hi ha el *document body*, on anirà tot el contingut.
Aquí el `cos`té dos paràgrafs (a LaTeX els paràgrafs es separen amb una o vàries línies de retorn de carro). Abans del `\begin{document}` hi ha el *document preamble* (_preàmbul_), que conté el codi per configurar la maquetació (el `layout`) del document. La comanda `\usepackage`, que es descriu en una [lliçó posterior](lesson-06), s'utilitza en la majoria d'exemples per configurar la codificació de la font.

LaTeX té d'altres parelles `\begin{...}` i `\end{...}`; s'anomenen *environments* (_entorns_).
Has d'aparellar-les de manera que per cada `\begin{x}` hi ha el corresponent `\end{x}`.
Si les nies, ha de ser de la forma `\end{y} ... \end{x}` per aparellar
`\begin{x} ... \begin{y}`, és a dir, les sentències `\begin` i `\end` s'han d'aparellar en ordre.

Podem afegir comentaris a un fitxer de LaTeX començant amb el caràcter `%`; anem a posar un exemple:

```latex
\documentclass[a4paper,12pt]{article} % La classe del document amb opcions
% Select T1 font encoding: suitable for Western European Latin scripts
\usepackage[T1]{fontenc}
% Un comentari en el preàmbul
\begin{document}
% Això és un comentari
Això és un document
senzill\footnote{amb un peu de pàgina}.

Aquest és un paràgraf nou.
\end{document}
```

Pots veure que tenim dos paràgrafs: fixa't que hem fet servir un salt de línia per fer-ho. També, múltiples espais en blanc s'han tractat com si fos un sol espai.

Pot ser que algunes vegades vulguis un espai 'fort' però que no hi hagi salt de línia: a LaTeX ho podem fer utilitzant `~`, que 'manté' dues parts del text juntes. Això és particularment útil quan, més endavant en aquest curs, comencem a crear referències creuades.

## Caràcters especials

Segurament ja has notat que els caràcters ``\``, `{` i `}` tenen un significat especial a LaTeX.
Una ``\`` comença una instrucció: una 'comanda'. Les claus `{` i `}` s'utilitzen per mostrar _arguments obligatoris_: informació necessària per a les comandes.

Hi ha d'altres caràcters amb significat especial; acabem de veure que `~`
és un espai més gran, per exemple. Quasi bé tots aquests caràcters són molt poc comuns en un text normal, i és aquest el motiu pel qual es van escollir per tenir un significat especial. Si necessites mostrar algun d'aquests caràcters especials, hem inclòs la [informació en la pàgina de més detalls](more-03).

## Exercici

Fes proves amb el compilador i l'editor en línia; Pitja el botó per compilar el codi, i edita'l a la pàgina web per tornar-lo a compilar.

Prova d'afegir text al teu primer document, picant-lo i veient els canvis en el teu PDF. Fes diferents paràgrafs i afegeix espaiat variable. Explora com el teu editor funciona; clica en la teva font i esbrina com anar a la mateixa línia en el teu PDF. Prova d'afegir espaiats 'forts' (amb `~`) i mira com influencia en els salts de línia.
