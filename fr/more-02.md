---
lang: "fr"
title: "Travailler avec LaTeX : pour aller plus loin"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Travailler avec LaTeX : pour aller plus loin"
---

Pour la plupart de nos exemples, nous n'utilisons pas le programme `latex`
lui-même mais plutôt `pdflatex`. Il fait partie d'une famille de programmes
apparentés, qui sont tous des « descendants » de `latex`. Nous avons choisi
`pdflatex` parce que c'est peut-être le système le plus utilisé et qu'il produit
directement des fichiers PDF.


## Formats et moteurs

Comme [décrit plus haut](more-01), LaTeX est construit par-dessus un système
appelé TeX. Nous appelons LaTeX un « format » : une collection de macros
(instructions et commandes) que TeX comprend. Lorsque vous lancez `pdflatex`,
vous lancez _en réalité_ un programme appelé « pdfTeX » avec un « format LaTeX »
préchargé. Nous appelons pdfTeX un _moteur_, c'est à dire un programme qui
comprend les instructions TeX.

Il y a trois moteurs courants en usage aujourd'hui :

- pdfTeX,
- XeTeX,
- LuaTeX.

Nous aborderons [XeTeX et LuaTeX plus tard](lesson-14) : tout ce que nous devons
savoir pour l'instant est qu'ils sont capables de charger les polices du système
d'exploitation, alors que pdfTeX ne peut pas le faire.

Si vous êtes au Japon, ou si vous écrivez beaucoup de japonais, vous pouvez
aussi rencontrer pTeX et upTeX. Ce sont des moteurs spécialisés pour la
composition verticale. LuaTeX peut faire beaucoup de choses, mais pour le
moment, upTeX est le système le plus populaire pour le japonais.
