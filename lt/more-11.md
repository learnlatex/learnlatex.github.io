---
layout: "lesson"
lang: "lt"
title: "Daugiau apie formatavimą: šriftai ir tarpai"
description: "Ši pamoka parodo, kaip išvengti pirmos eilutės atitraukimo vienoje pastraipoje."
toc-anchor-text: "Daugiau apie formatavimą: šriftai ir tarpai"
---

## Įtraukos panaikinimas vienoje pastraipoje

Jei norite panaikinti įtrauką vienoje pastraipoje, galite naudoti komandą
`\noindent`.  Tai turėtų būti _labai_ retai naudojama; didumoje atvejų turite
leisti LaTeX valdyti tai automatiškai.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
One small paragraph, which we have filled out a little to make sure you can
see the effect here!

One small paragraph, which we have filled out a little to make sure you can
see the effect here!

\noindent  One small paragraph, which we have filled out a little to make sure
you can see the effect here!
\end{document}
```
