---
layout: "lesson"
lang: "it"
title: "Selezione dei font e uso dei motori Unicode"
description: "Questa lezione descrive come LaTeX interpreta un input in Unicode e come questo influenza ciò che scrivi e i font che adoperi. Inoltre, dà informazioni su Unicode e sul supporto ai font OpenType."
toc-anchor-text: "Font e motori Unicode"
toc-description: "Selezione dei font e della codifica del file."
---

# Font e motori Unicode

<span
  class="summary">Questa lezione descrive come LaTeX interpreta un input in Unicode e come questo influenza ciò che scrivi e i font che adoperi. Inoltre, dà informazioni su Unicode e sul supporto ai font OpenType.</span>

Quando TeX e LaTeX hanno incominciato a essere adoperati su larga scala, 
erano in grado di gestire solo lingue europee (scritte con l'alfabeto
latino, cioè) sebbene esistesse una certa capacità di adoperare altri 
alfabeti come il greco e il russo.

## Accenti e lettere accentate

All'inizio, gli accenti e le lettere accentate si digitavano con 
sequenze di controllo o macro, come `\c{c}` per ‘ç’ e `\'e` per ‘é’.
Mentre alcune persone continuano a usare questi metodi di input 
perché possono essere più facili da digitare, altri volevano 
poter adoperare i tasti delle loro tastiere per inserire direttamente 
tali simboli.

Prima di Unicode, LaTeX forniva il supporto per molti tipi di *codifica 
del file* che permettevano di scrivere nativamente un testo in varie 
lingue – per esempio, selezionando la codifica `latin1`, gli utenti 
francesi potevano scrivere ‘`déjà vu`’ e LaTeX traduceva internamente 
le lettere accentate nei comandi TeX per produrre l'output corretto.

Questo approccio è ancora in uso nel moderno LaTeX quando si sceglie 
il motore `pdflatex`. Per impostazione predefinita, si presume che 
tutti i file siano Unicode (codifica UTF-8) se non diversamente 
specificato. Sebbene questo motore sia limitato ai caratteri a 8-bit, 
la maggior parte delle lingue europee può essere supportata.

## Selezione dei font

La selezione dei font font con `pdflatex` si appoggia al robusto 
schema di selezione dei font di LaTeX e oggi una distribuzione 
standard di LateX contiene numerosi caratteri pronti per l'uso. 
Per esempio, i caratteri TeX Gyre sono una suite di font di 
alta qualità basati su font di uso comune con cui la maggior parte 
delle persone ha familiarità: Times, Helvetica, Palatino e altri. 
Caricarli è semplice quanto caricare un pacchetto con il nome 
appropriato. Per un clone del Times, il nome di TeX Gyre è Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

La grande maggioranza dei font per `pdflatex` sono accessibili
mediante pacchetti. Puoi dare un'occhiata a
[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) o a
[CTAN page on the ‘Font’ topic](https://www.ctan.org/topic/font) 
per vedere qualche opzione.  
Puoi anche cercare su Internet il font che desideri e guardare
se ne esiste una versione in pacchetto compatibile con `pdflatex`. 
Se intendi adoperare un font proprietario, puoi cercarne un clone 
adatto, che nella maggior parte delle situazioni è abbastanza simile 
all'originale da fare al caso tuo.

## L'era Unicode

Siccome `pdflatex` è limitato a codifiche di file a 8-bit e font 
a 8-bit, non è in grado di adoperare nativamente i moderni caratteri 
OpenType e passare facilmente tra più lingue che utilizzano alfabeti 
diversi (o ‘script’, per usare il termine tecnico). 
Esistono due sostituti di pdfTeX che adoperano nativamente input 
Unicode e font moderni: XeTeX e LuaTeX. 
Per LaTeX, questi vengono tipicamente richiamati nel tuo editor usando 
rispettivamente i motori `xelatex` e `lualatex`.

Con questi motori, la selezione dei font viene eseguita dal pacchetto
`fontspec`, e per documenti semplici la cosa si risolve facilmente
come segue:
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

I comandi qui sopra selezionano il carattere TeX Gyre Termes, 
come nell'esempio di `pdflatex` più in alto. 
In particolare, questo approccio funziona per *qualunque* font 
OpenType. Alcuni font disponibili per `pdflatex` sono disponibili 
anche per `xelatex` e `lualatex` tramite i rispettivi pacchetti, 
oppure è possibile caricare qualsiasi font installato nel proprio
computer mediante `fontspec` come hai appena visto.

[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) elenca
anche i font disponibili in formato OpenType, quindi puoi consultarlo
come risorsa per cercare i caratteri insieme a 
[CTAN page](https://www.ctan.org/topic/font) nominato prima.

Dopo aver selezionato un font, l'input può ora essere digitato nel
sorgente direttamente in Unicode semplice. 
Ecco un esempio che mostra alcune lettere latine e greche 
insieme ad alcuni ideogrammi CJK:

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

<p 
  class="hint">When switching between languages it is usually important to also change things like hyphenation patterns and so on, and the <code>babel</code> and <code>polyglossia</code> packages both provide robust features to do this.</p>
