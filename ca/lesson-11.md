---
layout: "lesson"
lang: "ca"
title: "Formatant el text: fonts i espaiat"
description: "En aquesta lliçó s'explica com canviar l'espaiat dels elements del document i com afegir instruccions de format al codi font de LaTeX."
toc-anchor-text: "Fonts i espaiat"
toc-description: "Formatar el text per millorar la presentació visual."
---

# Formatant el text: fonts i espaiat

<span
  class="summary">En aquesta lliçó s'explica com canviar l'espaiat dels elements del document i com afegir instruccions de format al codi font de LaTeX.</span>

Ja hem vist que un salt de línia en el teu document genera un paràgraf a la sortida. Això es fa evident quan comencem el paràgraf amb una identació.

## Espaiat entre paràgrafs

Una elecció habitual és no identar els paràgrafs, sinó més aviat posar un salt de línia entre ells. Podem aconseguir-ho utilitzant el paquet `parskip`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Text de farciment
\begin{document}
\lipsum
\end{document}
```

## Forçar un salt de línia

La majoria de les vegades no cal forçar un salt de línia a LaTeX: quasi sempre que vols un salt de línia és perquè vols fer separació de paràgrafs, i el normal és utilitzar `parskip` com acabem de veure.

Però hi ha situacions en què voldràs utilitzar `\\` per provocar un salt de línia sense començar un nou paràgraf:

- Al final de les files d'una taula
- A dins de l'entorn `center`
- A l'escriure poesia (en l'entorn `verse`)

Quasi sempre, a no ser que estiguis en un d'aquests casos concrets, no utilitzaràs `\\`.

## Afegir un espai de forma explícita

Podem afegir un petit espai (d'aproximadament la meitat de l'ample de l'espai normal) utilitzant `\,`. En el mode matemàtic, existeix també altres comandes: `\.`, `\:` i `\;`, i fins i tot una comanda per l'espai cap a endarrere: `\!`.

En poques ocasions, com per exemple en crear una pàgina de títol, necessitaràs 
afegir explícitament un espai horitzontal o vertical. Pots utilitzar en aquests casos 
les comandes `\hspace` i `\vspace`, per tal de crear espais horizontals i verticals, 
respectivament.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Una mica de text \hspace{1cm} i més text.

\vspace{10cm}

Even more text.
\end{document}
```

## Formatar text de forma explícita

Vàrem explicar a la [lliçó 3](lesson-03) que sempre és preferible per al document utilitzar l'estructura lògica. Però algunes vegades voldràs que el teu text sigui en negreta, cursiva, mono-espaiat, etc. Hi ha dos tipus de comandes per fer-ho: unes per a trossos petits de text, i d'altres per a continguts en el cos del document (frases, paràgrafs, etc.)

Per a trossos petits de text utilitzarem `\textbf`, `\textit`, `\textrm`, `\textsf`,
`\texttt` i `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Anem a practicar amb les fonts: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

Per a parts del text en el cos d'un document, utilitzarem comandes que canvien l'estil del tipus de lletra a utilitzar. Per fer-ho necessitarem situar la comanda i el text en un mateix _grup_ ja que, en cas contrari, l'estil s'aplicaria a tot el document. Els entorns de LaTeX són grups, a l'igual que les cel·les d'una taula, i fora d'aquests casos particulars, posarem el nostre contingut entre claus `{...}` per explicitar la creació d'un grup.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

{\itshape

Aquest text és en cursiva.

El seu efecte no està limitat al paràgraf.

}
\end{document}
```

Podem canviar el tamany de la font de manera similar; aquestes comandes s'apliquen al contingut d'un grup, com els anteriors. Els tamanys es defineixen de forma relativa: `\huge`, `\large`, `\normalsize`, `\small` i `\footnotesize` són els més comuns. És important finalitzar el paràgraf
_abans_ de canviar una altra vegada al tamany original; fixa't com aquí afegim de forma explícita un `\par` (salt de paràgraf).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text normal.

\begin{center}
{\itshape\large Més text\par}
Text normal
{\bfseries\small Text encara més petit\par}
\end{center}

\end{document}
```

## Exercicis

Experimenta amb el format manual: crea un entorn `titlepage` i prova d'inserir diferents espaiats i canvis de font. Què passa quan combinem canvis de font? Com es comporta en relació al mode matemàtic?

Què passa si canviem el tamany de la font d'un paràgraf més gran (prova amb `\tiny` i després amb `\huge`) però sense utilitzar `\par` abans de tancar el grup?