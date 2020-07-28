---
title: "¿Qué es LaTeX y cómo funciona?"
---

A diferencia de los procesadores de texto de uso común como Microsoft Word o LibreOffice
Writer, LaTeX no es WYSIWYG (siglas inglesas de 'lo que ves es lo que obtienes'). Con
LaTeX se tiene texto sin formato y con marcadores o etiquetas. Estas etiquetas
dan información a LaTeX sobre el significado lógico de los elementos del texto,
tal y como ocurre en HTML.

Pongamos como ejemplo el elemento "<h2>" que inica una nueva sección en un documento
HTML. LaTeX tiene también también un comando para ello; podría usarse el comando "\section". 

## El proceso de trabajo de {{ site.latex }}

Como los ficheros de LaTeX no son el propio documento final, sino más bien las
instrucciones sobre lo que parte debe ser, no se suele enviar a los demás el 
fichero LaTeX en sí mismo. En su lugar, después de escribir el fichero _fuente_ 
en LaTeX, se debe ejecutar LaTeX sobre el fichero (normalmente usando un programa
llamado "pdflatex") para generar el fichero PDF. Será este PDF el que enviará.

La gente utiliza diferentes formas de describir este proceso. Como usar LaTeX es casi
como programar, a este proceso se le llama a menudo 'compilar' el documento, aunque 
el término "composición tipográfica" es más preciso.

## Múltiples ejecuciones de {{ site.latex }}

Para los documentos simples, sólo necesitará componer tipográficamente su fichero
una vez para obtener el PDF. Pero, una vez que comience a añadir cosas más complicadas,
como referencias cruzadas, citas, figuras, índices, deberá ejecutar LaTeX más
de una vez. Se lo comentaremos cuando tenga que hacerlo.

## {{ site.latex }} o pdf{{ site.latex }} o ...

En la [próxima lección](lesson-02), vamos a ver que LaTeX no es un simple
programa. Para no complicar las cosas, vamos a centrarnos en un programa particular
de LaTeX, pdfLaTeX, que permite generar ficheros PDF. Más adelante en el curso, veremos 
otros programas, y el por qué a usted le pude interesar usarlos.  
