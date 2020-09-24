---
title: "Más sobre: Tablas"
---


## Los otros contenidos del preámbulo

Como en la lección principal no hemos abordado todos los identificadores disponibles, unos pocos
serán explicados con ejemplos aquí. Puede que quiera volver al principio de la lección sobre 
las tablas, para obtener un visión general de los elementos disponibles. Las breves descripciones
dadas en la lección principal, deberían ser suficientes para que comprendra el significado de los 
tipos de columna `m`, `b`, `w` y `W` si usted ha entendido los tipos `l`, `c`, `r` y `p`. Si no es 
así, quizá quiera experimentar con ellos antes de empezar. Lo que queda por profundizar son los otros
indicadores de preámbulo `>`, `<`, `@`, `!` y `|`.

### Dando estilo a una columna

Como `>` y `<` se pueden usar para colocar elementos antes y después del contenido de una
celda en un columna, usted puede usarlos para añadir comandos que afecten a la apariencia
de esa columna. Por ejemplo, si quiere poner en cursiva la primera columna y situar dos puntos
después del contenido de cada celda de esa columna, puede hacer lo siguiente:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  Animal  & Comida & Tamaño  \\
  \midrule
  perro   & carne  & mediano \\
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`itshape` pone en cursiva el texto que le precede, pero su efecto esta "limitado"
a la celda en cuestión. Abordaremos el cambio manual del tipo letra [en una de las
próximas lecciones](lesson-11).

Puede que quiera que la primera celda no se vea afectada, ya que es parte de la
cabecera de la tabla. Podemos usar en este caso el comando `\multicolumn`. Recuerde que
puede ser usado para cambiar la alineación de una única celda, como se muestra en el siguiente ejemplo:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Comida  & Tamaño   \\
  \midrule
  perro   & carne  & mediano \\
  caballo & heno   & grqnde  \\
  rana    & moscas & pequeño \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Manipulando el espacio entre columnas

Normalmente LaTeX completa cada columna con un espacio a ambos lados, para dar a las columnas un 
aspecto equilibrado y separarlas convenientemente. Este espacio es definido con el ancho `tabcolsep`. Debido
a que cada columna es completada a ambos lados, se tiene una separación de un ancho `tabcolsep`
en cada lateral de la tabla y una separación de un ancho de `2\tabcolsep` entre dos columnas &ndash;, 
uno por cada columna. Puede ajustar este espacio al ancho que desee usando `\setlenght`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  Animal  & Comida & Tamaño  \\
  perro   & carne  & mediano \\
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Puede cambiar este espacio por cualquier cosa arbitraria usando `@`. Esto reemplaza
el espacio de relleno entre dos columnas o el espacio lateral y pone en su lugar lo 
que usted especifique como argumento:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal  & Comida & Tamaño  \\
  perro   & carne  & mediano \\
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Veremos `\hspace` [de nuevo próximamente](lesson-11); quizás adivine que este comando
añade un espacio horizontal.

El indicador de preámbulo `!` hace algo similar. La diferencia es que este último 
_añade_ el argumento en el centro del espacio entre dos columnas.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal  & Comida & Tamaño  \\
  perro   & carne  & mediano \\
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Líneas verticales

En algunas ocasiones tendrá que utilizar líneas verticales.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal  & Comida & Tamaño  \\[2pt]
  perro   & carne  & mediano \\
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Quizá haya notado que el comportamiento de `|` se asemeja bastante al de `!{decl}`; añade
una línea vertical entre dos columnas dejando el espacio de relleno entre ellas. Pero su uso 
tiene un gran inconveniente; las líneas verticales no funcionaran si usted utiliza las líneas 
horizontales del paquete `booktabs`. En lugar de éstas, podrá utilizar las líneas horizontales
proporcionadas por LaTeX; éstas son `\hline` (que corresponde a `\toprule`, `\midrule` y 
`\bottomrule`) y `\cline` (que tiene el mismo uso que `\cmidrule`). Como mostramos anteriormente, 
las líneas verticales se añadirán a cualquier espacio especificado en los argumentos opcionales a `\\`. 

## Personalizando las líneas del paquete `booktabs`

Todas las líneas del paquete `booktabs` y el comando `\addlinespace` aceptan un argumento
adicional entre corchetes con el que puede especificar el grosor de la línea o espacio horizontal. Además, 
el recorte de línea proporcionado por `\cmidrule` puede personalizarse especificando
el ancho entre corchetes después de las opciones `r` o `l`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal  & Comida & Tamaño  \\ \midrule[1pt]
  perro   & carne  & mediano \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Alineación de números en columnas

La alineación de los números en las tablas puede ser gestionada por el tipo de columna `S`
que proporciona el paquete `siunitx`.

Un ejemplo simple de dos columnas numéricas alineadas:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Valores} &  {Otros valores} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

Note que cualquier celda no numérica debe ser "protegida" escribiendo su contenido entre llaves. 

El paquete `siunitx` proporciona muchas funcionalidades para cambiar el formato de los números
de formas diferentes; vea la [documentación de este 
paquete](https://texdoc.net/pkg/siunitx).

## Especificando el ancho total de la tabla

El ancho del entorno `tabular` es determinado automáticamente a partir
del contenido de la tabla. Existen dos mecanismos usados frecuentemente
para especificar un ancho total diferente del automático.

Note que es casi siempre preferible cambiar el ancho de la tabla,
como lo hacemos más abajo (quizás usando un tamaño de letra como `small` si es
necesario), que cambiar la escala de la tabla con `\resizebox` y otros
comandos similares, que darán lugar a incongruencias en el tamaño de la letra y el grosor
de las líneas.

### `tabular*`

El entorno `tabular*` toma un argumento adicional de _ancho_ que especifica
el ancho total de la tabla. Un espacio ajustable puede ser añadido a la tabla
usando el comando `\extracolsep`. Este espacio, se añade entre todas las columnas
presentes en el preámbulo a partir de ese punto. Este comando se usa casi siempre
junto con `\fill`, un espacio especial que se ajusta de manera a ser lo más largo 
posible.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

El entorno `tabularx`, proporcionado por el paquete del mismo
nombre, posee una sintaxis similar a la de `tabular*` pero en lugar
de ajustar el espacio entre columnas, ajusta el ancho de las columnas
definidas con un nuevo tipo, `X`. Este tipo de columna es equivalente al
especificado con `p{...}` pero con un ancho determinado automáticamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

A diferencia de otras formas discutidas en estas lecciones, `tabularx` necesita
construir la tabla varias veces, probando diferentes anchos para determinar la
configuración final. Esto implica que hay una serie de restricciones en el uso
de este entorno; vea la [documentación de este paquete](https://texdoc.net/pkg/tabularx).

## Tablas multipágina

Un entorno `tabular` crea un bloque indivisible, con lo que debe ser lo suficientemente
pequeño como para ajustarse a una página y es a menudo situado en un entorno flotante
`table`.

Varios paquetes disponen de variantes con sintaxis similar, que permiten
dividir la tabla en un cambio de página. Mostramos aquí el uso del paquete `longtable`:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{Una tabla larga}\\
Lado izquierdo & Lado derecho\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Entrada & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
Una entrada más larga & b\\  
\end{longtable}

\end{document}
```

`longtable` es remarcable, ya que conserva el ancho de las columnas de la tabla
en todas las páginas; sin enbargo, para conseguir esto puede que tenga que
ejecutar LaTeX en varias ocasiones, para hacer que las entradas más anchas que se
ecuentren más adelante en la tabla, puedan tener un efecto en el ancho de las columnas
de las primeras páginas.

## Notas al pie de tabla

Es bastante común el necesitar símbolos en una tabla para hacer referencia a
notas al pie de tabla. El paquete `threeparttable` simplifica las anotaciones en 
este tipo de tablas, haciendo que las notas al pie se situén en el mismo bloque
que la propia tabla. Le invitamos a ver la [documentación de este paquete](https://texdoc.net/pkg/threepqrttable) para
más detalles, pero veamos aquí un ejemplo simple:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{An Example}
   \begin{tabular}{ll}
    Una entrada & 42\tnote{1}\\
    Otra entrada & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] la primera nota al pie.
   \item [2] la segunda nota al pie.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Composición tipográfica en columnas estrechas

La configuración por defecto del salto de página, asume que las líneas relativamente
largas disponen de cierta flexibilidad para elegir el salto de línea. El siguiente
ejemplo se muestran algunas de las aproximaciones posibles. La primera tabla muestra
el ajuste del espacio entre palabras y TeX le dará un mensaje de aviso de tipo "Underfull lines"
(líneas que dejan espacios en blanco). El uso de `\raggedright` normalmente impide
este problema, pero puede dar lugar a líneas "muy irregulares". El comando
`\RaggedRight` del paquete `ragged2e` es un compromiso; permite cierta irregularidad entre
el ancho de las líneas, pero también divide una palabra con un guión cuando es necesario, tal y 
como se muestra en la tercera tabla.

Note el uso de `\arraybackslash` aquí, esto resetea la definición de `\\`
que determina el fin de una fila de la tabla.

Una técnica alternativa, que se muestra en la cuarta tabla, es el uso
de un tamaño de letra más pequeño, de forma que las columnas no sean tan estrechas
con respecto al tamaño del texto.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
Uno & Un texto largo en un párrafo estrecho, con un poco más de texto.\\
Dos & Otro texto largo diferente en un párrafo estrecho, con algunas palabras más para que sean divididas con guión.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
Uno & Un texto largo en un párrafo estrecho, con un poco más de texto.\\
Dos & Otro texto largo diferente en un párrafo estrecho, con algunas palabras más para que sean divididas con guión.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
Uno & Un texto largo en un párrafo estrecho, con un poco más de texto.\\
Dos & Otro texto largo diferente en un párrafo estrecho, con algunas palabras más para que sean divididas con guión.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
Uno & Un texto largo en un párrafo estrecho, con un poco más de texto.\\
Dos & Otro texto largo diferente en un párrafo estrecho, con algunas palabras más para que sean divididas con guión.
\end{tabular}

\end{table}

\end{document}
```

## Definiendo nuevos tipos de columna

Como hemos demostrado en la [lección principal](lesson-08), el paquete `array` permite
asociaciones del tipo `>{\bfseries}c` para definir columnas centradas y en negrita.
A menudo, es conveniente definir un nuevo tipo de columnas para simplificar este
tipo de uso, por ejemplo la siguiente definición: 

```latex
\newcolumntype{B}{>{\bfseries}c}
```

permitiría el uso de `B` en el preámbulo de una tabla para especificar
una columna centrada y en negrita.

## Trucos verticales

A menudo, en lugar de extender una celda en múltiples filas, es mejor tener una
única fila que se dvida verticalmente en varias celdas, mediante el uso de entornos 
`tabular` anidados.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  El contenido & está & aquí \\
  El contenido & está & aquí \\
  El contenido & está & aquí \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Note que puede controlar el alineamiento vertical mediante un argumento opcional
del entorno `tabular`; puede usar `t`, `c` o `b` para alinear su texto a la parte alta,
para centralo o para alinearlo a la parte baja, respectivamente:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  El contenido & está & aquí \\
  El contenido & está & aquí \\
  El contenido & está & aquí \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Espacio entre líneas de una tabla

En la lección principal mostramos el uso de `\addlinespace` del paquete `booktabs`,
que es útil para añadir un espacio extra entre líneas específicas.

Hay dos parámetros generales para controlar el espacio entre líneas:
`\arraystretch` y `\extrarowheight` (este último del paquete `array`).
Así, por ejemplo la línea:

```latex
\renewcommand\arraystretch{1.5}
```

aumentará el espaciado de la línea de base en un 50%.

A menudo, especialmente al usar `\hline` es mejor aumentar únicamente
la altura de las columnas, sin incrementar la profundidad de la línea de base.
El siguiente ejemplo muestra el uso del parámetro `\extrarowheight`. 

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Al cuadrado& $x^2$\\
\hline
Al cubo& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Al cuadrado& $x^2$\\
\hline
Al cubo& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
