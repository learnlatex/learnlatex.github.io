---
layout: "lesson"
lang: "ca"
title: "Estructura lògica"
description: "Aquesta lliçó explica algunes comandes bàsiques per donar format al text, i les compara amb el format semàntic, les comandes de secció i les llistes."
toc-anchor-text: "Estructura lògica"
toc-description: "Estructura i presentació visual."
---

# Estructura lògica

<span
  class="summary">Aquesta lliçó explica algunes comandes bàsiques per donar format al text, i les compara amb el format semàntic, les comandes de secció i les llistes.</span>

LaTeX proporciona maneres per concentrar-se en l'estructura lògica del document, i també la capacitat de configurar directament l'aparença del document. La majoria de les vegades, és millor utilitzar mètodes que es focalitzin en l'estructura, doncs d'aquesta manera és més fàcil reutilitzar i modificar el disseny quan s'hagi de fer.

## Estructura i presentació visual

Començarem amb un exemple que compara una de les comandes de marcat lògic més comunes a LaTeX, `\emph`, per tal de posar la cursiva (en la impressió, aquesta és la manera més habitual de ressaltar un text).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Una mica de text en \emph{cursiva i contingut \emph{niat}}.

Una mica de text en \textit{cursiva i contingut \textit{niat}}.
\end{document}
```

Hauràs endevinat que `\textit` és la comanda per formatar text en cursiva, però _sempre_ fa que el text sigui en cursiva, és a dir, no va bé per material niat (`nesting`). Observa com `\emph` gestiona bé els niats. També podem trobar exemples en què _èmfasi_ no és el mateix que _itàlica_; per exemple, en presentacions en color normalment és millor opció. Amb el marcat lògic, no ens hem de preocupar sobre aquest nivell de detall en el cos del document.

Més endavant veurem el [manual de l'estil de text](lesson-11), però de moment afegirem `\textbf` a les comandes que per ara coneixem: és la negreta.

## Comandes de secció

Segurament hauràs utilitzat un processador de text, on comences una secció i la majoria de la gent posa un títol i el fa més gran i en negreta, i després continua amb un salt de línia. A LaTeX, utilitzem el marcat lògic, i això fa que les coses siguin més _fàcils_ cd fer; utilitzarem la comanda `\section`, que gestiona els canvis de font, l'espaiat vertical, etc., i així mantindrem una uniformitat en tot el doucument.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Hola món!

Aquest és un primer document.

\section{Títol de la primera secció}

Text del material de la primera secció

Segon paràgraf.

\subsection{Subsecció de la primera secció}

Text del material de la subsecció.

\section{Segona secció}

Text de la segona secció.

\end{document}
```

Utilitzant el tipus de document estàndard `article`, LaTeX enumera les seccions i subseccions
i posa els títols en negreta. Entrarem més en els canvis de disseny en la [propera lliçó](lesson-05).

LaTeX pot dividir un document en bastants nivells:

- `\chapter` (però necessitem `\documentclass{book}` o `\documentclass{report}` per fer-ho)
- `\section`
- `\subsection`
- `\subsubsection`

Podem anar més enllà: 'baixant' un nivell, el següent és `\paragraph`, però quasi sempre això serà anar massa lluny en el detall de les seccions. (Sí, `\paragraph` és una comanda de secció, _no_ una manera de començar un nou paràgraf!).

Pot ser que et preguntis sobre el títol del document. Hi ha algunes comandes especials per això, però no tots els documents les utilitzen, així que ho hem [tractat en una lliçó extra paral·lela](more-04).

## Llistes

Una altra situació molt comuna en què utilizaràs marcadors lògics és en l'edició d'una llista.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Ordenat
\begin{enumerate}
  \item Una entrada
  \item Una altra entrada
  \item Uau! Tres entrades
\end{enumerate}

Desordenat
\begin{itemize}
  \item Una entrada
  \item Una altra entrada
  \item Uau! Tres entrades
\end{itemize}

\end{document}
```

Fixa't que utilitzem `\item` per començar cada entrada, i que el marcador utilitzat per cada tipus de llista s'afegeix automàticament.

## Exercicis

Experimenta amb diferents nivells de secció. Prova d'utilitzar `\documentclass{report}`
en comptes de `\documentclass{article}` i afegeix la comanda `\chapter`. Com et sembla? Prova `\paragraph` i (fins i tot) `\subparagraph` per veure com funcionen: per defecte, no afegeixen numeració.

Fes algunes llistes, i nia una llista dins d'una altra. Com canvia el format de la numeració o del marcador de la llista? Amb LaTeX només pots anar fins a quatre nivells en les llistes niades, però de totes maneres necessitar més de quatre nivells seria un exemple de mal disseny!
