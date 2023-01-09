---
layout: "lesson"
lang: "it"
title: "Di più su: Font e motori Unicode"
description: "Questa lezione mostra un esempio di base in Lua per gli utenti che vogliono scrivere codice Lua nei loro documenti."
toc-anchor-text: "Di più su: Font e motori Unicode"
---

## Lua

Il motore LuaTeX permette di accedere ai font OpenType
in modo simile a quanto fa XeTeX, e il pacchetto 
`fontspec` funziona ugualmente bene con entrambi i motori
per la grande maggioranza delle esigenze.

LuaTeX estende TeX anche in altri modi, in particolare 
incorporando il linguaggio di scripting Lua. Questo può 
essere adoperato per programmare in uno stile più familiare 
alle persone abituate ai linguaggi di programmazione 
‘popolari’. 
Offre inoltre la possibilità di accedere al funzionamento 
interno del sistema TeX e modificarne il comportamento 
sostituendo nuovo codice scritto in Lua.

La programmazione in Lua non rientra tra gli scopi di questo corso,
ma ti mostriamo un semplice esempio per calcolare 2π.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

