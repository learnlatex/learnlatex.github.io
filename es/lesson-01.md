---
layout: "lesson"
lang: "es"
title: "¿Qué es LaTeX y cómo funciona?"
description: "Esta lección explica las bases de lo qué es LaTeX y cómo funciona en comparación con los procesadores de texto comunes como Microsoft Word o LibreOffice Writer." 
toc-anchor-text: "Bases de LaTeX"
toc-description: "¿Qué es LaTeX y cómo funciona?"
---

# Bases de LaTeX

<span
  class="summary">Esta lección explica las bases de lo qué es LaTeX y cómo funciona en comparación con los procesadores de texto comunes como Microsoft Word o LibreOffice Writer.</span>

A diferencia de los procesadores de texto de uso común, como Microsoft Word o LibreOffice Writer, LaTeX no es WYSIWYG (siglas inglesas de «Lo Que Ves Es Lo Que Obtienes»). Con
LaTeX se tiene texto sin formato y con marcadores o etiquetas. Estas etiquetas dan información a LaTeX sobre el significado lógico de los elementos del texto, de forma similar a HTML.

Pongamos como ejemplo el elemento `<h2>` que indica una nueva sección en un documento HTML. LaTeX tiene también un comando para ello: `\section`. 

## El proceso de trabajo de LaTeX

Como los archivos de LaTeX no son el documento final, sino más bien las instrucciones sobre qué debe ser cada parte del documento, no se suele enviar a los demás el código LaTeX. En su lugar, después de escribir el _código fuente_ en LaTeX, se debe ejecutar LaTeX sobre el archivo fuente (normalmente usando un programa llamado `pdflatex`) para generar el archivo PDF. Este PDF será el que se envía a los demás.

La gente utiliza diferentes formas de describir este proceso. Como usar LaTeX es casi como programar, a este proceso se le llama «compilar» el documento, aunque el término «composición tipográfica» es más preciso.

## Múltiples ejecuciones de LaTeX

Para los documentos simples, sólo se necesitará compilar el código una vez para obtener el PDF. Pero, a medida que comience a añadir cosas más complicadas, como referencias cruzadas, citas, figuras o índices, deberá ejecutar LaTeX más de una vez. Se lo comentaremos cuando tenga que hacerlo.

## LaTeX o pdfLaTeX o...

En la [próxima lección](lesson-02), veremos que LaTeX no es un simple programa. Para no complicar las cosas, vamos a centrarnos en un programa particular de LaTeX, pdfLaTeX, que permite generar ficheros PDF. Más adelante, veremos otros programas y el por qué a usted le puede interesar usarlos.
