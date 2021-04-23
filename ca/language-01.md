---
layout: "lesson"
lang: "ca"
title: "Específic per a l'idioma anglès"
description: "Aquesta lliçó explica detalls específics referents a escriure documents LaTeX amb idioma anglès. Ens referim a la separació de guions, on les tradicions angleses i americanes són diferents."
next: "extra-01"
toc-anchor-text: "Específic per a l'idioma anglès"
toc-description: "Escriure amb LaTeX en anglès."
---

# Específic per a l'idioma anglès

<span
  class="summary">Aquesta lliçó explica detalls específics referents a escriure documents LaTeX amb idioma anglès. Ens referim a la separació de guions, on les tradicions angleses i americanes són diferents.</span>

## Separació de guions

LaTeX es va escriure pensant en l'idioma anglès, i per tant hi ha molts pocs assumptes problemàtics específics a aquest idioma. El principal és la separació de guions: les tradicions anglesa i americana són diferents. LaTeX va començar fent servir els patrons americans, però es pot canviar a la manera britància utilitzant `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[UKenglish]{babel}
\begin{document}
Some text
\end{document}
```
