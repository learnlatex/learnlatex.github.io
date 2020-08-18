---
title: "Matemáticas"
---

## El modo matemático

Puede escribir fórmulas matemáticas en LaTeX, de una forma lógica, en lo que se
conoce como "modo matemático". En el modo matemático, los espacios se ignoran y se
aplica (casi siempre) el espaciado correcto entre los caracteres. Existen dos formas
del modo matemático: inline (en línea) y display (en una línea aparte).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Una frase con una fórmula matemática en línea (inline): $y = mx + c$.
Una segunda frase con una fórmula matemática en línea (inline): $5^{2}=3^{2}+4^{2}$.


Un segundo párrafo con una formula matemática en una línea aparte (display).
\[
  y = mx + c
\]
Vea como el párrafo continua después de la ecuación escrita en una línea aparte (display)
\end{document}
```

Puede que haya visto fórmulas matemáticas de "estilo LaTeX" en otros sitios, por ejemplo,
el sistema MathJax permite escribir ecuaciones en páginas web. Estos sistemas aceptan a menudo
ligeras variaciones en la sintaxis de LaTeX, ya que de hecho no usan LaTeX "en segundo plano".
Nuestros ejemplos son todos de un LaTeX de sintaxis "correcta", así que si ve algo diferente
en otro contexto, puede que sea porque ese ejemplo no utiliza
realmente LaTeX.

## Modo matemático inline y notación matemática

Como pudo ver en el ejemplo anterior, el modo matemático inline está delimitado por dos
simbolos de dolar (`$...$`). También es posible usar la siguiente notación `\( ... \)`.
Las expresiones simples son introducidas sin marcadores especiales y el texto matemático
será espaciado correctamente y escrito en cursiva.

El modo matemático inline restrinje el tamaño vertical de la expresión 
matemática, de manera que la fórmula no afecte al espaciado de línea del 
párrafo. 

Note que _todo_ texto matemático debe ser delimitado como tal, incluso si sólo
utiliza un único carácter use `... $2$ ...` en lugar de `... 2 ...`, por ejemplo, 
cuando necesite escribir un número negativo y necesite obtener un signo menos, el escribir `... $-2$ ...`
puede que use dígitos que no tienen el mismo estilo de letra que los dígitos 
de texto (según el tipo de documento).
Por otro lado, tenga cuidado con los símbolos que aparecen en un texto sin formato copiado
de otro lugar, como por ejemplo los valores monetarios que usan el símbolo `$`, o los nombres de fichero
que usan el símbolo `_` (los cuales deben ser escritos como `\$` y `\_`, respectivamente).

Podemos fácilmente añadir superíndices y subíndices; estos se escriben usando `^` y
`_`, respectivamente


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Superíndices $a^{b}$ y subíndices $a_{b}$.
\end{document}
```

Puede que vea ejemplos de superíndices y subíndices simples sin llaves, pero no
corresponden a la sintaxis oficial y pueden dar lugar a error; use siempre 
llaves.

Hay _muchos_ comandos especiales en el modo matemático. Algunos de ellos son bastante
sencillos, por ejemplo `\sin` y `\log` para las funciones seno y logaritmo, o `\theta` para
escribir la letra griega correspondiente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un poco de matemáticas: $y = 2 \sin \theta^{2}$.
\end{document}
```

No podemos abordar aquí todos los comandos de LaTeX del modo matemático, pero
hay muchos recursos en línea que dan una lista de los recursos estandard. Puede buscar los comandos para escribir
símbolos en modo matemático, usando la herramienta [Detexify](https://detexify.kirelabs.org/classify.html)

## Matemáticas en modo display (en una línea aparte)

En el modo matemático display, puede usar exactamente los mismos comandos 
del modo inline. El modo matemático display es centrado por defecto y es adecuado
para ecuaciones largas que forman "parte de un párrafo". Note que
los entornos matemáticos display no permiten que un párrafo termine con texto 
matemático, con lo que no dispondrá de líneas en blanco dentro del modo 
display.

El párrafo debe comenzar siempre _antes_ que el entorno display, así que
no deje una línea en blanco previa al entorno matemático display. Si necesita
varias líneas de fórmulas matemáticas, no use entornos display consecutivos
(esto dará lugar a un espaciado incongruente); use un entorno display multilínea
como `align` del paquete `amsmath`descrito más adelante.

Esto es particualmente útil en el caso de integrales, por ejemplo:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un párrafo antes de una fórmula larga
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Note aquí, como la notación de superíndice et subíndice es usada para fijar los límites
de la integral.

Hemos añadido también aquí un espaciado manual: `\,` añade un pequeño espacio antes de 
`dx`, justo lo que necesitamos para que no parezca un producto.

A menudo querrá tener una ecuación enumerada, esto puede hacerlo usando el
entorno `equation`. Probemos a utilizarlo en el ejemplo anterior:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un párrafo previo a una fórmula larga
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

El número de la ecuación se incrementará automáticamente y puede ser un número
simple, como en este ejemplo, o tener como prefijo el número de la sección, 
así por ejemplo (2.5) será el número de la quinta ecuación de la sección número 2. 
Los detalles de este formato son configurados por el tipo de documento y no serán
descritos aquí.

## El paquete `amsmath`

La notación matemática es muy variada y esto significa que las herramientas
del núcleo de LaTeX no pueden cubrirlo todo. El paquete `amsmath`
extiende las posibilidades del núcleo para cubrir muchas más funciones.
La [Guía del Usuario `amsmath`](http://texdoc.net/pkg/amsmath)
dispone de muchos más ejemplos de los que podemos mostrarle en esta lección.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Resulva la siguiente relación de recurrencia para $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

El entorno `align*` hace que las ecuaciones se alineen al nivel de los símbolos `&`, 
al igual que en una tabla. Note como hemos usado `\quad`, para añadir un poco de
espacio, y `\text` para incluir un texto normal en el interior del modo matemático. Hemos
usado igualmente otro comando del modo matemático, `\binom` para un binomio.

Note que aquí hemos usado `align*` y que la ecuación no ha sido enumerada.
La mayoría de los entornos matemáticos enumeran por defecto las ecuaciones, pero sus variantes
con asterisco `*` hacen que no se enumeren.

El paquete tiene tambien otros entornos interesantes, por ejemplo
para matrices:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Matrices AMS.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```


## Tipos de letra en modo matemático

A diferencia del texto normal, el cambio de tipo de letra en el modo matemático a menudo lleva consigo un significado 
muy específico. A menudo es escrito de forma explícita. Una serie de comandos que necesitará
conocer:

- `\mathrm`: roman (upright)
- `\mathit`: en cursiva y espaciado como un "texto"
- `\mathbf`: en negrita
- `\mathsf`: sans serif
- `\mathtt`: mono espaciado (tipo máquina de escribir)
- `\mathbb`: double-struck o impresión doble (blackboard bold) (disponible en el paquete `amsfonts`)

Cada uno de estos comandos toma como argumentos letras latinas, así por ejemplo podemos
escribir una matriz de la siguiente forma:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
La matriz $\mathbf{M}$.
\end{document}
```

Note, que el modo en cursiva matemático por defecto separa las letras, con lo que
puede usarse para escribir un producto de variables. Use `\mathit` para poner en cursiva una palabra.

Los comandos de tipo de letra `\math..`, utilizan un tipo de letra de uso específico
para matemáticas. Algunas veces necesitamos añadir una palabra que forma parte
de una frase y necesitamos usar el tipo de fuente de un texto normal, para ello,
podemos usar `\text{...}` (disponible en el paquete `amsmath`) o tipos de letra
específicos como `\textrm{..}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{mal uso } tamaño  \neq \mathit{tamaño} \neq \mathrm{tamaño} $

\textit{$\text{mal uso } tamaño \neq \mathit{tamaño} \neq \mathrm{tamaño} $}

\end{document}
```

Si necesita poner en negrita otros símbolos, 
[vea la sección más sobre este tema](more-10).

## Ejercicios

Pruebe a utilizar algunos modos matemáticos de base: reutilice los ejemplos y cambie
entre los modos inline y display. Puede ver cómo afectan estos cambios al resultado.

Intente añadir otras letras griegas, en minúsculas y en mayúsculas. Debería
ser capaz de adivinar sus nombres.

Pruebe a utilizar los comandos para cambiar el tipo de letra: ¿qué ocurre
cuando intenta anidarlos?

El modo matemático display es centrado por defecto; intente añadir la opción `[fleqn]` (justifica las
ecuaciones a la izquierda) en la definición del tipo de documento de los ejemplos
anteriores, para ver qué efectos tiene en el resultado final. Del mismo modo, las ecuaciones
son enumeradas normalmente a la derecha. Pruebe a añadir la opción `[leqno]` (enumeración de ecuaciones
a la izquierda) en la definción del tipo de documento.
