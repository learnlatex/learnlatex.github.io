---
lang: "es"
title: "Más sobre: Matemáticas"
---


## Más alineaciones con `amsmath`

Además del entorno `align*` mostrado en la lección principal, 
`amsmath` dispone de otros métodos matemáticos de tipo display, cabe destacar `gather` 
para displays multilínea que no necesitan alineamiento, y `multiline` para
cortar y extender una expresión muy larga en varias líneas, justificando
la primera línea a la izquierda, y la última a la derecha. En todos los casos el uso
de `*` evita la enumeración de la ecuación.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### Columnas en alineamientos matemáticos

Los entornos de alineamiento `amsmath` están diseñados para trabajar con pares de columnas,
la primera columna de cada par será justificada a la derecha y la segunda 
justificada a la izquierda. Esto permite mostrar múltiples ecuaciones,
cada una justificada con respecto al símbolo de relación entre los miembros de las mismas.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned equations
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

Además, hay variantes de los entornos display que terminan en `ed` que permiten
crear una subparte de un display más largo, por ejemplo, `aligned` y
`gathered`. 

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned` acepta un argumento opcional de posición, similar al de `tabular`.
Esto es a menudo útil para alinear una fórmula inline con respecto a su primera fila;
compare los elementos de la lista del siguiente ejemplo:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## Negrita en Matemáticas 

El LaTeX estandard tiene dos métodos para obtener símbolos matemáticos en negrita. 
Para poner en negrita una expresión completa, use `\boldmath` antes de escribir
la expresión. El comando `\mathbf` es también disponible para poner en negrita
letras o palabras escritas con el tipo de letra Roman recto.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % mal uso de \mathbf
\end{document}
```

Si quiere escribir símbolos en negrita (como lo hace el comando `\boldmath`)
en otra expresión de grosor normal, debe usar el comando
`\bm` del paquete `bm`. Note que `\bm` funciona con símbolos como
`=` y las letras grigas (note en el ejemplo anterior que `\mathbf` no tiene
ningún efecto sobre `\pi`).

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Herramientas matemáticas

El paquete `mathstools` carga `amsmath` y añade algunas funcionalides
adicionales, como algunas variantes de los entornos para matrices de `amsmath`
que permiten indicar la justificación de las columnas.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## Unicode Math

Como veremos en la [lección 14](lesson-14), existe una variante del motor de TeX
que usa tipos de letra OpenType. Por defecto, estos motores utilizan aún
los tipos de letra clásicos de TeX en modo matemático, pero usted puede usar el 
paquete `unicode-math` para hacer uso de los tipos de letra de Matemáticas OpenType.
Los detalles de este paquete van más allá de los objetivos de este curso por lo que
le recomendamos leer la [documentación de este paquete](https://texdoc.net/pkg/unicode-math).
A pesar de ello, vamos a darle aquí un pequeño ejemplo de su uso:

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

Uno dos tres
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode Alfanumérico de Matemáticas
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
