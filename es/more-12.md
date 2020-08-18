---
title: "Más sobre: Citas y referencias"
---

## Tratando con referencias en lengua no inglesa

El programa BibTeX ha sido escrito inicialmente para tratar con referencias en inglés.
Está muy limitado en el uso de caracteres acentuados y aún más en el uso de caracteres
no latinos. Al contrario, el programa Biber ha sido escrito desde sus inicios para
tratar con diferentes tipos de scripts correctamente.

Esto significa que si está ordenando su bibliografía y necesita hacerlo en un idioma
diferente del inglés, deberá hacer uso de `biblatex` y Biber, más que de `natbib` y 
BibTeX.

## Hipervínculos

Si carga el paquete `hyperref` (que hemos abordado [con anterioridad](more-09)), éste
convierte automáticamente sus citas en enlaces a la bibliografía. Esto es
particularmente útil para las URLs y DOIs (enlaces creados directamente a partir de las DOIs).
