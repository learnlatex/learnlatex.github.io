---
layout: "lesson"
lang: "it"
title: "Di più su: Font e motori Unicode"
description: "Questa lezione mostra un esempio di base in Lua per gli utenti che vogliono scrivere codice Lua nei loro documenti."
toc-anchor-text: "Di più su: Font e motori Unicode"
---

## Lua

LuaTeX permette di accedere ai font OpenType
in modo simile a quanto fa XeTeX, e il pacchetto 
`fontspec` funziona ugualmente bene con entrambi
per la grande maggioranza delle esigenze.

LuaTeX estende TeX anche in altri modi, 
in particolare incorporando il linguaggio 
di scripting Lua. 
Questo può essere adoperato per programmare 
in uno stile più familiare a chi è abituato 
ai linguaggi di programmazione ‘popolari’. 
Offre inoltre la possibilità di accedere 
al funzionamento interno del sistema TeX e
di modificarne il comportamento 
sostituendo a quello originale nuovo codice 
scritto in Lua.

Anche se la programmazione in Lua non rientra 
tra gli argomenti di questo corso, ti mostriamo 
ugualmente un semplice esempio per calcolare 2π.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

