---
layout: "lesson"
lang: "it"
title: "Di più su: Struttura di base di un documento"
description: "Questa lezione fornisce maggiori dettagli su come lanciare LaTeX su un file sorgente, sui caratteri speciali di cui fa uso e su come inserirli nel PDF composto."
toc-anchor-text: "Di più su: Struttura di base di un documento"
---

## Lanciare LaTeX

Come abbiamo [descritto nel dettaglio in una lezione precedente](lesson-02), 
i documenti LaTeX consistono di testo puro. 
Per verificarlo, apri il tuo primo documento 
con un semplice editor di testi, per esempio 
Notepad su Windows. 
Dovresti vedere la stessa cosa che vedi in un 
editor dedicato a LaTeX, ma senza l'evidenziazione 
della sintassi.

Puoi anche convertire un sorgente in PDF senza 
per forza passare per l'editor: il prompt dei 
comandi (su Windows) o terminale (su macOS e Linux) 
ti permette di farlo dalla riga di comando, quindi 
non preoccuparti se non hai familiarità con 
questo metodo. 
Se invece *ce l'hai*, mettiti nella ‘cartella di 
lavoro’ (quella che contiene il tuo file sorgente
`.tex`, cioè) e da'

`pdflatex primo`

o

`pdflatex primo.tex`

per ottenere il tuo PDF composto. 
Nota che l'estensione `.tex` è facoltativa: a meno
che tu non specifichi diversamente, LaTeX assumerà 
che i file sorgente finiscano con `.tex`.

## Caratteri speciali

Se hai bisogno di inserire un carattere speciale, 
la maggior parte delle volte basta premettergli 
una barra rovescia: per esempio, la scrittura 
`\{` è usata per stampare una parentesi graffa
aperta `{`.
In alcuni casi, però, bisogna adoperare un comando 
più lungo:

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

Per gli ultimi tre simboli non è disponibile un comando breve,
perché con `\\` si indica un'interruzione di riga 
e `\~` e `\^` si adoperano per produrre una tilde e un accento
circonflesso negli input scritti in soli caratteri ASCII.
