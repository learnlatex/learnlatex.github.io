---
title: "Más sobre: Usando los tipos de documento para cambiar el diseño"
---

## Tipos de documento específicos para revistas

Muchas revistas académicas proporcionan tipos de documentos de LaTeX
para el envío de artículos. Estos configuran el diseño para que se asemeje al de la 
revista final, aunque esto depende del tipo de letra usado, etc. Si hay
un tipo de documento disponible, éste será proporcionado por la oficina
editorial que le dará todos los detalles de las funciones disponibles.
Muchos de ellos están también disponibles en CTAN y en las distribuciones
estándar de TeX.

## Tipos de documento para presentaciones de diapositivas

Un tema que necesita un tratamiento especial, es el de la creación de diapositivas. El tipo de
documento `slides` fue desarrollado par crear las "clásicas" diapositivas a imprimir, y no tiene 
ningún soporte especial para las presentaciones digitales. Se han desarrollado dos tipos de documento, sólo para ello
y ambos son ampliamente utilizados: `beamer` y `powershot`. Como `beamer`es probablemente el más
común, le mostramos un ejemplo de cómo utilizarlo:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}{Una primer marco}
  Un poco de texto
\end{frame}

\begin{frame}{Una segundo marco}
  Un texto diferente
  \begin{itemize}
    \item<1-> Un primer elemento de la lista
    \item<2-> Un segundo elemento
  \end{itemize}
\end{frame}

\end{document}
```

Este ejemplo muestra dos ideas importantes. En primer lugar,`beamer` divide el documento
en marcos, cada uno de las cuales puede disponer de más de una diapositiva (página). En segundo
lugar, `beamer` añade al LaTex de base una sintaxis, que permite que diferentes partes del texto 
aparezcan "de forma progresiva". Esto es potente, pero también más complicado de lo que podemos 
enseñarle aquí: échele un vistazo al [artículo de este blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) para
más información.

## Un tipo de documento para imágenes

Hay ocasiones en la que necesitará crear una imagen (que puede contener un texto denso)
usando LaTeX. A menudo, es el único contenido que desea mostrar en la "página". Hacer esto
es sencillísimo haciendo uso del tipo de documento [`standalone`](https://ctan.org/pkg/standalone).
Configura automáticamente el tamaño de la página para enmarcar el contenido a imprimir.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
Un simple documento: ¡esto será un marco muy pequeño!
\end{document}
```
