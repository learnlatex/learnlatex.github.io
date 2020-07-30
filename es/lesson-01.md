---
title: "¿Qué es LaTeX y cómo funciona?"
---

A diferencia de los procesadores de texto de uso común como Microsoft Word o LibreOffice Writer, LaTeX no es WYSIWYG (siglas inglesas de "Lo Que Ves Es Lo Que Obtienes"). Con
LaTeX se tiene texto sin formato y con marcadores o etiquetas. Estas etiquetas dan información a LaTeX sobre el significado lógico de los elementos del texto, similar a HTML.

Pongamos como ejemplo el elemento `<h2>` que indica una nueva sección en un documento HTML. LaTeX tiene también un comando para ello: `\section`. 

## El proceso de trabajo de {{ site.latex }}

Como los archivos de LaTeX no son el documento final sino más bien instrucciones sobre qué debe ser cada parte del documento, no se suele enviar a los demás el código LaTeX. En su lugar, después de escribir el _código fuente_ en LaTeX, se debe ejecutar LaTeX sobre el fichero (normalmente usando un programa llamado `pdflatex`) para generar el archivo PDF. Este PDF será el que enviará al resto.

La gente utiliza diferentes formas de describir este proceso. Como usar LaTeX es casi como programar, a este proceso se le llama "compilar" el documento, aunque el término "composición tipográfica" es más preciso.

## Múltiples ejecuciones de {{ site.latex }}

Para los documentos simples, sólo se necesitará compilar el código una vez para obtener el PDF. Pero, a medida que comience a añadir cosas más complicadas, como referencias cruzadas, citas, figuras o tabla de contenidos, deberá ejecutar LaTeX más de una vez. Se lo comentaremos cuando tenga que hacerlo.

## {{ site.latex }} o pdf{{ site.latex }} o...

En la [próxima lección](lesson-02), veremos que LaTeX no es un simple programa. Para no complicar las cosas, vamos a centrarnos en un programa particular de LaTeX, pdfLaTeX, que permite generar ficheros PDF. Más adelante en el curso veremos otros programas, y el por qué a usted le pude interesar usarlos.
