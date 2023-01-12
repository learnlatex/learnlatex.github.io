---
layout: "lesson"
lang: "it"
title: "Ancora su: Lavorare con LaTeX"
description: "Questa lezione fornisce maggiori dettagli su che cosa sono LaTeX e i ‘motori’ su cui gira."
toc-anchor-text: "Ancora su: Lavorare con LaTeX"
---

Per comporre la grande maggioranza dei nostri esempi 
non adoperiamo il programma `latex`, ma il programma 
`pdflatex`. 
Questo fa parte di una famiglia di programmi correlati, 
tutti ‘discendenti’ di `latex`. 
Abbiamo scelto `pdflatex` per due motivi: perché è 
forse è il motore più adoperato e perché produce 
direttamente file PDF.

## Formati e motori

Come abbiamo descritto [prima](more-01), LaTeX è 
costruito sopra un sistema chiamato TeX. 
Chiamiamo LaTeX _formato_: una collezione di macro 
(istruzioni e comandi) che TeX comprende. 
Quando lanci `pdflatex`, _in verità_ stai lanciando 
un programma chiamato 'pdfTeX' con un ‘formato LaTeX’ 
precaricato. 
Di solito, noi chiamiamo pdfTeX _motore_: un programma che
comprende le istruzioni di TeX.

I motori comunenemente adoperati oggi sono tre:

- pdfTeX
- XeTeX
- LuaTeX

XeTeX e LuaTeX [verranno descritti più avanti](lesson-14): 
per il monento, la cosa principale da sapere è 
che questi motori sono in grado di caricare i font 
del sistema operativo, mentre pdfTeX no.

Se sei in Giappone o scrivi molto in giapponese, 
potresti imbatterti anche in pTeX e upTeX, due 
motori specializzati per la composizione verticale. 
Anche LuaTeX può fare molto di questo ma, al momento,
il motore di composizione più popolare in Giappone
è upTeX.
