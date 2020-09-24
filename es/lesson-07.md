---
title: "Incluyendo imágenes y haciendo que las cosas \"floten\""
---

## Incluyendo imágenes

Para importar imágenes en LaTeX, use el paquete `graphicx`, 
que añade el comando `\includegraphics` a LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
Esta imagen
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
es un PDF importado.
\end{document}
```

Puede insertar ficheros EPS, PNG, JPG y PDF.
Si dispone de varias versiones de una misma imagen entonces puede escribir,
por ejemplo, `exemple-image.png`. (El paquete `graphicx` tratará de adivinar 
la extensión si usted no se la da.)

Se habrá dado cuenta de que hemos usado aquí un nuevo entorno, `center` que centra
la imagen horizontalmente en la página. [Un poco más adelante](lesson-11), hablaremos más 
sobre el espaciado y el posicionamiento.

## Cambiando la apariencia de la imagen

El comando `\includegraphics` dispone de muchas opciones para controlar
el tamaño y la forma de las imágenes incluidas, pudiendo incluso recortarlas.
Algunas de estas opciones son muy usadas, así que vamos a ocuparnos de ellas.

La opción más obvia es la de definir la anchura `width` y la altura `height` de una
imagen, las cuales se dan de forma relativa con respecto al ancho `\textwidth` y al 
alto `\textheight` de la zona de texto. LaTeX ajustará la escala de la imagen automáticamente
para que la proporción de las dimensiones de la imagen sea la correcta.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Un poco de texto.
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Puede también cambiar la escala `scale` de las imágenes o hacerlas rotar de un ángulo dado con `angle`.
La otra cosa que podrá hacer es recortar una imagen con `clip` y `trim`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Haciendo que las imágenes floten

En la composición tipográfica tradicional, y en particular en los documentos técnicos,
las imágenes pueden moverse a otro lugar en el documento.
A esto se le llama un *objeto flotante*. La imágenes se incluyen normalmente como objetos
flotantes para evitar grandes espacios en blanco en una página.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % Produce un texto de relleno

\begin{document}
\lipsum[1-4] % Unos párrafos de relleno

Localización de test.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Un ejemplo de imagen}
\end{figure}

\lipsum[6-10] % Unos párrafos de relleno
\end{document}
```

En este ejemplo, LaTeX mueve la imagen y la leyenda de la imagen, desde la `Localización
test` hasta la parte alta del segundo párrafo, ya que no hay espacio para ella al final de
la página. La opción `ht` tiene un efecto sobre en qué lugar LaTeX puede situar esta imagen flotante; estas
dos letras significan que puede ir cerca de su posición inicial (cerca de `Localización test`)
o en la parte alta de la página. Puede usar hasta cuatro especificadores de posición:

- `h` "Aquí" (si es posible).
- `t` En la parte alta de la página.
- `b` En la parte baja de la página.
- `p` En una página dedicada exclusivamente a objetos flotantes.

[Más adelante](lesson-09), veremos como hacer referencias cruzadas a estos objetos flotantes
de forma a poder citarlos en el texto.

Habrá notado que hemos centrado la imagen usando el comando `\centering` en lugar del
entorno `center`. En el interior de un objeto flotante, debe usar `\centering` si quiere
centrar horizontalmente el contenido; esto impide que tanto el objeto flotante como el 
entorno `center` añadan un espacio vertical extra.

## Ejercicios

Trate de insertar una imagen que usted haya creado, reemplace las imágenes "estándar"
que hemos empleado en el ejemplo.

Explore lo que puede hacer usando como opción las palabras clave `height`, `width`, 
`angle` y `scale`.

Use el paquete `lipsum` para realizar un documento suficientemente largo, luego intente
situar imágenes flotantes usando los diferentes especificadores de posición. ¿Cómo inteactúan
los diferentes especificadores? 
