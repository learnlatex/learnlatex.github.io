---
layout: "lesson"
lang: "ca"
title: "Més sobre: Estuctura bàsica d'un document LaTeX"
description: "Aquesta lliçó proporciona més detalls de com executar LaTeX, dels caràcters especials que utilitza i de com inserir-los en el PDF de sortida."
toc-anchor-text: "Més sobre: Estuctura bàsica d'un document LaTeX"
---

## Executar LaTeX

Com es comenta [prèviament](lesson-02), els documents de LaTeX són de text pla. Per veure-ho, prova d'obrir el teu primer document amb un editor de text senzill, per exemple a Windows tens el Notepad. Podràs veure el mateix text que en un editor pensat per a LaTeX, però sense ressaltar les paraules clau.

També pots convertir a PDF sense utilitzar un editor; això significa utilitzar el terminal de comandes, no et preocupis si no hi estàs familiaritzat. Però si estàs avesat a utilitzar el terminal, pots navegar al teu directori on tens el document font `.tex` i executa:

`pdflatex first`

or

`pdflatex first.tex`

per tal de generar el PDF. Fixa't que l'extensió `.tex` és opcional: LaTeX assumeix que els fitxers acaben amb `.tex` a no ser que s'especifiqui el contrari.

## Caràcters especials

Si has d'entrar un caràcter especial, en la majorai dels casos pots utilitzar la contrabarra davant del caràcter, per exemple amb `\{` imprimiràs el caràcter de la clau `{`. D'altra banda hi ha alguns casos en què hauràs de fer servir una comanda més llarga:

| Símbol | Comanda Curta <br><small>(matemàtiques i text)</small> | Comanda llarga <br><small>(només per a text)</small> |
| --- | --- | --- |
| `{`    | `\{`          | `\textbraceleft`  |
| `}`    | `\}`          | `\textbraceright` |
| `$`    | `\$`          | `\textdollar`     |
| `%`    | `\%`          |                   |
| `&`    | `\&`          |                   |
| `#`    | `\#`          |                   |
| `_`    | `\_`          | `\textunderscore` |
| ``\``  |               | `\textbackslash`  |
| `^`    |               | `\textasciicircum`|
| `~`    |               | `\textasciitilde` |

Per als tres últims símbols no hi ha cap comanda curta disponible, doncs `\\` s'utilitza per provocar un salt de línia i `\~` i `\^` s'utilitzen per obtenir la 'ñ' i l'accent circumflex quan només s'utilitza ASCII com a entrada.
