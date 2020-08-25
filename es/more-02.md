---
title: "Más sobre: Trabajando con LaTeX"
---

Para la mayoría de nuestros ejemplos, no usaremos el programa llamado `latex` sino
otro llamado `pdflatex`. Éste forma parte de una familia de programas que `derivan`
directamente de `latex`. Hemos elegido `pdflatex` porque es quizás el más ampliamente 
utilizado y produce directamente los ficheros en PDF.

## Formatos y motores

Como comentamos [precedentemente](more-01), LaTeX está construido a partir de un sistema
llamado TeX. A LaTeX le llamamos `formato`: conjunto de macros (instrucciones y comandos)
que TeX es capaz de comprender. Cuando ejecute `pdflatex`, estará _en realidad_ iniciando un
programa llamado `pdfTeX` con un `formato LaTeX` cargado previamente. A pdfTeX le
llamamos normalmente _motor_: un programa que entiende las instrucciones de TeX.

Hay tres motores de TeX que tienen un uso común hoy en día:

- pdfTeX
- XeTeX
- LuaTeX

Abordaremos [XeTeX y LuaTex más adelante](lesson-14): lo más importante que necesitamos
saber por ahora, es que son capaces de cargar sistemas de fuentes, cosa que pdfTex 
no puede hacer.

Si se encuentra en Japón, o necesita escribir en japonés, también puede utilizar
pTeX y upTeX. Son motores especializados en la composición tipográfica vertical. LuaTeX 
puede también hacer muchas de estas cosas, pero de momento upTeX, en especial, sigue
siendo el sistema más popular entre los japoneses.
