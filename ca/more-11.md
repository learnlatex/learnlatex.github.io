---
layout: "lesson"
lang: "ca"
title: "Més sobre: Formatar el text: fonts i espaiat"
description: "Aquesta lliçó explica com suprimir la identació del paràgraf."
toc-anchor-text: "Més sobre: Formatar el text: fonts i espaiat"
---

## Suprimir la identació d'un paràgraf

Si vols suprimir la identació d'un paràgraf, pots utilitzar `\noindent`. Això s'hauria d'utilitzar en _comptades_ ocasions; la majoria de les vegades serà LaTeX que ho gestionarà automàticament.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un paràgraf senzill, que hem omplert una mica només per tenir la certesa que pots veure l'efecte del que estem estudiant!

Un paràgraf senzill, que hem omplert una mica només per tenir la certesa que pots veure l'efecte del que estem estudiant!

\noindent Un paràgraf senzill, que hem omplert una mica només per tenir la certesa que pots veure l'efecte del que estem estudiant!
\end{document}
```
