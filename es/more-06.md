---
title: "Más sobre: Extendendiendo LaTeX usando paquetes"
---

## Cargando varios paquetes

El comando `\usepackage` acepta como parámetro una lista de paquetes separados por comas,
así que puede cargar varios paquetes de una sola vez: `\usepackage{color,graphicx}` por ejemplo.
Si añade opciones a un paquete, estás se aplicarán a cada uno de los paquetes de la lista.
Es más fácil comentar los paquetes si se cargan uno a uno en líneas diferentes. Así que
acostumbrémonos a cargar un solo paquete por línea.

## El paquete `babel`

Ya mostramos el uso del paquete `babel` [en la sección principal de la lección](lesson-06) con el
fin de elegir diferentes patrones de separación silábica. Pero este paquete hace mucho más
que eso, en función del idioma usado. Por ejemplo, en alemán, proporciona algunas abreviaturas
para la creación de guiones "suaves" y también una forma rápida de escribir diéresis sin
necesidad de usar un teclado alemán.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Note que la nombre de la opción es 'ngerman'

\begin{document}

H"ohe

\end{document}
```

Otros ajustes asociados al idioma hacen que el diseño cambie: por ejemplo, en la
tipografía francesa tradicional, se deja un espacio antes de algunos signos de puntuación
como `:`, y este espacio es añadido automáticamente si usted carga `babel` con la opción
`french`.

## Opciones o parámetros globales

Algunas veces, le puede interesar que una opción o parámetro se aplique a todos los paquetes
que usted cargue. Esto es posible hacerlo, indicando esta opción en la línea `\documentclass`:
cada paquete puede "ver" esta lista de opciones. Por consiguiente, para pasar como opción
el idioma de un documento a todos los paquetes del mismo, debemos usar:

```latex
\documentclass[ngerman]{article} % Note que el nombre de la opción es 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

H"ohe

\end{document}
```
