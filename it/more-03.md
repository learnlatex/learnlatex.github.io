---
layout: "lesson"
lang: "it"
title: "Di più su: Struttura di base di un documento"
description: "Questa lezione fornisce maggiori dettagli su come lanciare LaTeX, sui caratteri speciali di cui fa uso e su come inserirli nel PDF composto."
toc-anchor-text: "Di più su: Struttura di base di un documento"
---

## Lanciare LaTeX

Come abbiamo [descritto nel dettaglio prima](lesson-02), i documenti LaTeX 
consistono di testo puro. Per verificarlo, prova ad aprire il tuo primo documento 
in un semplice editor di testo, per esempio Notepad su Windows. 
Dovresti vedere lo stesso testo che vedi in un editor dedicato a LaTeX, 
ma senza l'evidenziazione della sintassi.

Puoi anche convertire un sorgente in PDF senza per forza
passare per l'editor: il prompt dei comandi o terminale ti permette di farlo
dalla riga di comando, quindi non preoccuparti se non hai familiarità con 
questo metodo. 
Se invece *lo sei*, puoi metterti nella directory contenente il tuo file sorgente 
`.tex` e dare

`pdflatex primo`

o

`pdflatex primo.tex`

per ottenere il tuo PDF composto. 
Nota che l'estensione `.tex` è facoltativa: LaTeX assumerà
che i file finiscano con `.tex` a meno che tu non specifichi diversamente.

## Caratteri speciali

If you need to type in a special character, most of the time you can simply
use a backslash in front of it, so for example `\{` is used to print a literal
`{`. There are a few cases where you need to use a longer command instead:

| Simbolo | Comando breve <br><small>(testo e matematica)</small> | Comando lungo <br><small>(solo testo)</small> |
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

For the last three symbols there are no short commands available,
because `\\` is used to indicate a linebreak and `\~` and `\^` are used
to produce tilde and circumflex accents when using only ASCII
characters as input.
