---
lang: "es"
title: "Más sobre: Incluyendo imágenes y haciendo que las cosas \"floten\""
---

## Nombrando los archivos de imágenes

LaTeX funciona en muchas plataformas así que merece 
la pena habrar sobre los nombres de los archivos.
Lo más seguro es nombrar sus imágenes de la manera más simple, sin usar espacios.
Por ejemplo, si desea organizar sus archivos guardando todas sus
imágenes en un subdirectorio, entonces le recomendamos algo del tipo 
`\includegraphics[width=30pt]{pix/mom.png}` 
será portable y a prueba de cambios en el futuro.  

La presencia de espacios en los nombres de archivo ha sido algo tradicionalmente problemático, pero 
actualmente es en general posible. Sin embargo, si hay espacios en un nombre, y tiene
problemas, usted debería intentar en primer lugar eliminar los espacios.

La aceptación de caracteres acentuados es algo variable; existen problemas con
algunos sistemas, en particular con Windows. Si encuentra problemas con nombres que
tienen caracteres acentuados, pruebe a usar únicamente caracteres ASCII.

## Guardando imágenes en un subdirectorio

Una forma común de preparar ficheros fuente es la de poner todas las imágenes en un subdirectorio.
Puede incluir entonces la dirección relativa de esas imágenes, como se ha mostrado más arriba; note que
el carácter `/` se usa para separar las partes de una dirección _incluso en Windows_.

Si tiene un gran número de imágenes, puede que quiera configurar de entrada 
el subdirectorio. Esto puede hacerse usando `\graphicspath`, comando que necesita un
argumento entre llaves por cada subdirectorio. Por ejemplo, para incluir los subdirectorios
`figs` y `pics`, debe escribir:

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Note en particular el uso de `/` para finalizar cada subdirectorio.

## Realizando imágenes

Como hemos comentado, LaTeX usa fácilmente imágenes de muchas fuentes, inclyendo los
gráficos de software científico. Cuando hace esto, usted problablemente puede gardarlas como un fichero PDF, 
ya que es un formato escalable. Si necesita crear un fichero bitmap, para 
obtener una alta resolución, puede realizar imágenes que incluyan fragmentos de LaTeX utilizando su ratón
con el programa [Inkscape](https://inkscape.org). Una alternativa, que permite además extender
las técnicas de dibujo a imagénes en tres dimensiones, es
[Asymptote](https://www.ctan.org/pkg/asymptote). Estas dos opciones producen su propio
archivo de imagen de salida que podrá incluir a posteriori en su documento. 

También puede crear imágenes, como dibujos especialmente adaptados para
LaTeX, con una muy precisión muy alta, al igual que las ecuaciones y las etiquetas que se
ajustan a su documento. Puede dibujar imágenes directamente en su documento, lo que
es conveniente a pesar del coste de tener documentos más complejos que necesitan más recursos,
usando [Ti*k*Z](https://ctan.org/pkg/pgf). Una alterativa es 
[PSTricks](https://ctan.org/pkg/pstricks-base).

## Situando objetos flotantes

El posicionamiento de objetos flotantes en LaTeX es complejo.
La necesidad más común es la de colocar una figura en el archivo de
salida, justo en el mismo sitio en el que se encuentra situada en el documento.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Texto de relleno
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Una ejemplo de imagen}
\end{figure}
\lipsum[8-15]
\end{document}
```

Note el uso de la opción `H`, que coloca la figura "estrictamente Aquí" (Aquí, Here en inglés). 
Sin embargo, a menudo se desaconseja el uso de `H`, ya que puede dejar
grandes espacios en blanco en su documento.

## Otros tipos de objetos flotantes

[Veremos pronto](lección-08) que podemos poner tablas en objetos flotantes; irán 
en el interior de un entorno `table`. Sin embargo, no _estamos_ obligados a poner las imágenes 
en el entorno `figure` o las tablas en el entorno `table`; esto es sólo una convención.

Puede que quiera disponer de otros entornos flotantes; cada tipo es incluido de forma
independiente. Puede hacer esto usando el paquete
[`trivfloat`](https://ctan.org/pkg/trivfloat). Este paquete dispone de un único 
comando, `trivfloat`, que permite crear nuevos tipos de objetos flotantes.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Texto de relleno
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Una imagen de ejemplo}
\end{image}
\end{document}
```
