---
layout: "lesson"
lang: "ca"
title: "Referències creuades"
description: "Aquesta lliçó explica com fer referència a elements numerats dins d'un document, com ara figures, taules i seccions."
toc-anchor-text: "Referències creuades"
toc-description: "Fer referència a figures, taules, etc."
---

# Referències creuades

<span
  class="summary">Aquesta lliçó explica com fer referència a elements numerats dins d'un document, com ara figures, taules i seccions.</span>

Quan estàs escrivint un document, no importa el tamany, pots necessitar fer referència a elements numerats com ara figures, taules o equacions. Sortosament LaTeX ho fa automàticament. Només cal configurar-ho bé. 

## El funcionament de `\label` i `\ref`

Per fer que LaTeX recordi un punt del teu document has d'etiquetar-lo, i aleshores en podràs fer referència des d'altres posicions del document.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hola món!

Aquest és un primer document.

\section{Títol de la primera secció}

Text del material de la primera secció.


\subsection{Subsecció de la primera secció}
\label{subsec:labelone}

Text del material de la primera subsecció.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

En la subsecció~\ref{subsec:labelone} tenim l'equació~\ref{eq:labeltwo}.
\end{document}
```

Hi ha dues comandes `\label{...}`, una després de la subsecció i una altra dins de l'entorn de l'equació. Estan associades amb la comanda `\ref{...}` de la última frase. Quan executes LaTeX es guarda informació sobre les etiquetes en un fitxer auxiliar. Amb la comanda `\label{subsec:labelone}`, LaTeX sap que es correspon amb una subsecció i per tant es guarda el número de subsecció. Amb `\label{eq:labeltwo}`, LaTeX sap que l'entorn d'interès més proper és una equació, i es guarda la informació d'aquesta equació. Quan es demana per la referència, LaTeX la sap extreure del fitxer auxiliar.

Els elements `subsec:` i `eq:` no s'utilitzen a LaTeX; més aviat, LaTeX guarda una traça del que s'ha processat més recentment. Però quan estiguis editant, això et pot ajudar a recordar a què fa referència cada etiqueta.

Pot ser que vegis referències que es mostren, en el PDF de sortida, com un doble signe d'interrogació i en negreta, **??**. L'explicació d'això s'ha de cercar en el funcionament del fitxer auxiliar, i és que la primera vegada que es compila el document l'etiqueta encara no s'ha guardat. Executa LaTeX una segona vegada i veuràs que tot s'arregla (normalment executaràs LaTeX diverses vegades mentre estiguis editant el document, i per tant això no serà cap problema).

Fixa't en els caràcters (`~`) abans de les referències. Ningú vol un salt de línia entre la `subsecció` i el seu número, o entre l'`equació` i el seu número. Posar aquesta marca significa que LaTeX no farà un salt de línia.

## On posar un `\label`

La comanda `\label` sempre fa referència a l'última entitat que li hem posat número: una secció, una equació, un objecte flotant, etc. Això significa que `\label` sempre ha d'anar _després_ de l'objecte al qual vols fer referència. En particular, quan crees objectes flotants, el `\label` ha d'anar _després_ (o millor, _dins_), la comanda `\caption`, però sempre dins de l'entorn de l'objecte flotant.

## Exercicis

Prova d'afegir parts numerades (seccions, subseccions, llistes numerades) al document que estem editant i mira quantes vegades hem de compilar el document per tal de què la comanda `\label` funcioni.

Afegeix alguns objectes flotants i mira què passa quan poses el `\label` _abans_ del
`\caption` en comptes de fer-ho després; pots predir el resultat?

Què passa si poses el `\label` d'una equació _després_ de `\end{equation}`?
