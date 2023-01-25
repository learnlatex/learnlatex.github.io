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

Quando TeX e LaTeX hanno incominciato a essere 
adoperati su larga scala, erano in grado di gestire 
solo lingue europee (scritte con l'alfabeto
latino, cioè), sebbene fossero già capaci di adoperare, 
in una certa misura, altri alfabeti come quello greco 
e quello russo.

## Accenti e lettere accentate

All'inizio, gli accenti e le lettere accentate 
si digitavano con sequenze di controllo o macro, 
come `\c{c}` per ‘ç’ e `\'e` per ‘é’.
Mentre alcuni utenti continuavano a usare queste 
scritture perché più facili da digitare, altri 
desideravano inserire direttamente tali caratteri
tramite tasti dedicati direttamente dalla tastiera.

Prima di Unicode, LaTeX forniva il supporto per 
molti tipi di *codifica del file* che permettevano 
di scrivere nativamente un testo in varie lingue 
– per esempio, selezionando la codifica `latin1`, 
gli utenti francesi potevano scrivere ‘`déjà vu`’ 
e LaTeX traduceva internamente le lettere accentate 
nei relativi comandi TeX per produrre l'output corretto.

Questo approccio è ancora in uso nel moderno LaTeX 
quando si sceglie il motore `pdflatex`. 
Per impostazione predefinita, si presume che 
tutti i file siano Unicode (cioè, con codifica UTF-8) 
se non diversamente specificato. 
Sebbene limitato ai caratteri a 8-bit, questo motore
è in grado di supportare la maggior parte delle lingue 
europee.

## Selezione dei font

La selezione dei caratteri con `pdflatex` 
si appoggia al robusto schema di selezione 
dei font di LaTeX, e oggi una distribuzione 
standard contiene numerosi glifi pronti per 
l'uso. 
Per esempio, i caratteri TeX Gyre sono una 
suite di font di alta qualità basati su 
font di uso comune con cui la maggior parte 
delle persone ha familiarità: Times, Helvetica, 
Palatino e altri. 
Caricarli è semplice quanto caricare un pacchetto. 
Per un clone del Times, il corrispondente
nome TeX Gyre è Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

La grande maggioranza dei font per `pdflatex` sono 
accessibili mediante pacchetti. 
Per vederne una descrizione e qualche opzione,
puoi dare un'occhiata a
[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) 
o alla
[pagina di CTAN sui font](https://www.ctan.org/topic/font).  
Puoi anche cercare su Internet il font che desideri 
e verificare se ne esiste una versione in pacchetto 
compatibile con `pdflatex`. 
Se intendi adoperare un font proprietario, puoi cercarne 
un clone adatto, che nella maggior parte delle situazioni 
è abbastanza simile all'originale da fare al caso tuo.

## L'era Unicode

Siccome `pdflatex` è limitato alle codifiche 
di file e ai font a 8-bit, non è in grado di 
adoperare nativamente i moderni caratteri 
OpenType e destreggiarsi facilmente tra lingue
e alfabeti diversi (o ‘script’, per usare 
il termine tecnico). 
Esistono però due sostituti di pdfTeX in 
grado di farlo: XeTeX e LuaTeX, che 
prevedono un formato LaTeX.
Per adoperarli, di solito è sufficiente 
comporre il file con i motori 
`xelatex` e `lualatex` rispettivamente.

Con questi motori, la selezione dei font 
viene eseguita dal pacchetto `fontspec`, 
che per documenti semplici può essere
impostato così:
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

I comandi qui sopra selezionano il font 
TeX Gyre Termes, come nell'esempio di 
`pdflatex` più sopra. 
In particolare, questo approccio funziona 
per *qualunque* font OpenType. 
Alcuni font disponibili per `pdflatex` 
lo sono anche per `xelatex` e `lualatex` 
tramite i rispettivi pacchetti,  
ma ricorda che puoi sempre caricare 
qualsiasi font installato nel tuo
computer mediante `fontspec` 
come hai appena visto.

[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) 
elenca anche i font disponibili in 
formato OpenType, quindi puoi consultarlo
come risorsa per cercare i caratteri insieme alla 
[pagina di CTAN sui font](https://www.ctan.org/topic/font) 
nominato prima.

Dopo aver caricato il font da scelto, 
puoi scrivere il codice sorgente 
direttamente in Unicode semplice.
Ecco un esempio che mostra alcune 
lettere latine e greche insieme ad 
alcuni ideogrammi CJK:

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
  class="hint">Quando si passa da una lingua all'altra, di solito è importante modificare anche aspetti 
  come gli schemi di sillabazione e altri, e i pacchetti <code>babel</code> e <code>polyglossia</code> 
  forniscono robuste funzionalità per farlo.</p>
