---
title: "Tablas"
---


## Tablas básicas

Las tablas se configuran en LaTeX usando el entorno `tabular`. En esta lección asumimos
que usted carga el paquete `array`, que añade más funcionalidades a las tablas de LaTeX 
y que no forma parte del núcleo de LaTeX únicamente por razones históricas. Así que ponga
la siguiente línea en su preámbulo y estaremos listos para empezar:

```latex
\usepackage{array}
```
{: .noedit :}

Para dar un formato al entorno `tabular` tenemos que decir a LaTeX cuántas columnas necesitaremos
y cómo deben ser alineadas. Esto se hace con un argumento obligatorio 
&ndash; a menudo llamado preámbulo de la tabla  &ndash; del entorno `tabular`
en el que se especifican las columnas usando nombres de un sólo carácter, llamados
identificadores de preámbulo. Los tipos de columna disponibles son:

<!-- don't line wrap this table, markdown seems to not support this -->

| tipo       | descripción |
| ---        |:-- |
| `l`        | columna justificada a la izquierda |
| `c`        | columna centrada |
| `r`        | columna justificada a la derecha |
| `p{width}` | columna con un ancho `width` fijo; el texto sera automáticamente ajustado a la línea y justificado |
| `m{width}` | como `p`, pero centrado verticalmente con respecto al resto del texto en la fila |
| `b{width}` | como `p`, pero ajustado verticalmente a la parte baja de la celda |
| `w{align}{width}` | imprime el contenido con un ancho `width` fijo, sobreimprimiendo si el texto es muy largo. Puede elegir el justificado horizontal `align` usando `l`, `c`, or `r`. |
| `W{align}{width}` | como `w`, pero dando lugar a un mensaje de alerta "overfull box warning" si el texto es demasiado grande. |

Además, otros identificadores de preámbulo adicionales están disponibles, estos no son para
definir columnas pero pueden serle de gran utilidad igualmente: 

<!-- don't line wrap this table, markdown seems to not support this -->

| tipo | descripción |
| ---  | :-- |
| `*{num}{string}` | repite `string` un número `num` de veces en el preámbulo. De esta forma puede definir múltiples columnas idénticas. |
| `>{decl}` | coloca `decl` antes del contenido de cada celda de la columna que sigue al identificador (útil, por ejemplo, para una fuente de letra diferente en esta columna) |
| `<{decl}` | coloca `decl` después del contenido de cada celda de la columna previa a la declaración |
| <span>`|`</span>  | añade una línea vertical |
| `@{decl}` | reemplaza el espacio existente entre dos columnas por `decl` |
| `!{decl}` | añade `decl` en el centro del espacio existente |

Estas dos tablas contienen todos los tipos de columna disponibles en LaTeX y en 
el paquete `array`. Otros tipos de columna, disponibles en otros paquetes, son
presentados en la [sección de más sobre este tema](more-08) de esta lección.

Las columnas `l`, `c` y `r` tendrán la anchura de la celda más ancha.
Cada columna debe ser declarada, con lo que si quiere tres columnas centradas, tendrá que
usar `ccc` en el preámbulo de la tabla. Los espacios son ignorados, con lo que `c c c` tiene el mismo efecto.

En el cuerpo de la tabla, las columnas se separan usando el símbolo `&` y una nueva fila
comienza con los símbolos `\\`.

Tenemos todo lo que necesitamos para construir nuestra primera tabla. En el siguiente código 
hemos alineado `&` y `\\`. Esto no es necesario en LaTeX, pero ayuda a la lectura
del código fuente.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

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

Si la columna de una tabla contine mucho texto, tendrá problemas para fijarlo
únicamente con `l`, `c` y `r`. Vea lo que ocurre en el siguiente ejemplo:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Descripción \\
  perro  & El perro es un miembro del género Canis, el cual forma parte 
           de los cánidos derivados del lobo y es uno de los carnívoros terrestres 
		   más abundantes. \\
  gato   & El gato es una especie doméstica de pequeños mamíferos carnívoros. Es la 
           única especie domesticada de la familia de los félidos y es a menudo llamado 
		   gato doméstico, para diferenciarlo de los miembros salvajes de la 
		   familia. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

El problema es que el tipo de columna `l` escribe el contenido de la celda en una única fila
con el ancho que le corresponde, aunque haya un borde 
de página de por medio. Para evitar este problema, puede usar la columna `p`. Este tipo de columna
escribe el contenido de la celda como un párrafo con el ancho especificado como argumento
y alinea verticalemente el texto a la parte alta de la celda &ndash; lo que usted querrá hacer
la mayoría de las veces. Compare el resultado del ejemplo anterior con siguiente:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Descripción \\
  perro  & El perro es un miembro del género Canis, el cual forma parte 
           de los cánidos derivados del lobo y es uno de los carnívoros terrestres 
		   más abundantes. \\
  gato   & El gato es una especie doméstica de pequeños mamíferos carnívoros. Es la 
           única especie domesticada de la familia de los félidos y es a menudo llamado 
		   gato doméstico, para diferenciarlo de los miembros salvajes de la 
		   familia. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Si su tabla tiene muchas columnas del mismo tipo puede ser engorroso el escribir las
definiciones de esas columnas en el preámbulo. Puede simplificar las cosas
usando `*{num}{string}`, que repite `string` un número `num` de veces.
De esta forma `*{6}{c}` es equivalente a `cccccc`. Para mostrale que estos funciona, aquí tiene
el primero ejemplo de tabla en esta lección usando esta nueva sintáxis que acaba de aprender:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal  & Comida & Tamaño  \\
  perro   & carne  & mediano \\
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Añadiendo líneas

Un pequeño consejo antes de introducir las líneas; en las tablas las líneas deben ser usadas
con parcimonia y normalmente las líneas verticales no parecen ser de un uso muy profesional. 
De hecho, para las tablas profesionales no debe usar ninguna de las líneas estándar; en su lugar
usted debe familiarizarse con las que le facilita el paquete `booktabs`, por esta razón las abordaremos
aquí en primer lugar. Para que completar esta lección, las líneas estándar serán
abordadas en la sección de [más información](more-08).

`booktabs` proporciona cuatro tipos diferentes de líneas. Cada uno de estos comandos
debe ser usado como el primer elemento de una fila o detrás de otra línea.
Tres de estos comandos son: `\toprule`, `\midrule` y 
`bottomrule` que son usados para situar una línea
en la parte alta, en las filas intermedias o en la parte baja de la tabla, respectivamente:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
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

El cuarto comando proporcionado por `booktabs` es `\cmidrule`. Puede ser usado para
dibujar una línea que no se extiendo a toda la fila de una tabla sino a un intervalo específico
de columnas de esa fila. Debe especificarse un intervalo de columas de la forma: `{`_number_`-`_number`}`.
Incluso si usted sólo desea dibujar una línea para una única columna
deberá especificarlo como un intervalo (siendo los extremos del intervalo el mismo número).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal  & Comida & Tamano  \\
  \midrule
  perro   & carne  & mediano \\
  \cmidrule{1-2}
  caballo & heno   & grande  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  rana    & moscas & pequeño \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Existe otro uso útil de `\cmidrule`. Puede acortar la línea o incluso terminarlo con
un argumento opcional entre paréntesis:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal  & Comida & Tamaño  \\
  \midrule
  perro   & carne  & mediano \\
  \cmidrule{1-2}
  caballo & heno   & grande  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  rana    & moscas & pequeño \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Quizá haya adivinado que `r` y `l` significan que la línea se acorta a la derecha **r**ight o 
a la izquierda **l**eft, respectivamente.

Algunas veces una línea puede implicar una fuerte separación entre dos líneas pero para
que la tabla sea clara usted quiere separar esas líneaa de alguna manera. En este caso
peude usar `\addlinespace` que añadirá un pequeño espacio vertical entre ambas.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  perro  & El perro es un miembro del género Canis, el cual forma parte 
           de los cánidos derivados del lobo y es uno de los carnívoros terrestres 
		   más abundantes. \\
  \addlinespace
  gato   & El gato es una especie doméstica de pequeños mamíferos carnívoros. Es la 
           única especie domesticada de la familia de los félidos y es a menudo llamado 
		   gato doméstico, para diferenciarlo de los miembros salvajes de la 
		   familia. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Fusionando celdas

En LaTeX puede fusionar celdas horizontalmente usando el comando `\multicolumn`. Debe
ser usado como el primer elemento de la celda. `\multicolumn` toma tres 
argumentos:

1. El número de celdas que deben ser fusionadas
2. La alineación de la celda fusionada
3. El contenido de la celda fusionada.

La alineación puede contener cualquier argumento válido de un preámbulo `tabular`, pero _sólo un único
tipo de columna_. 

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Comida  & Tamaño   \\
  \midrule
  perro    & carne  & mediano \\
  caballo  & heno   & grande  \\
  rana   & moscas & pequeño  \\
  fuath  & \multicolumn{2}{c}{desconocido} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Puede igualmente utilizar `\multicolumn`en una única celda para evitar que
se aplique lo que haya definido en el preámbulo para esa columna. 
El siguiente ejemplo usa este mñetodo para centrar la fila de la 
cabecera de la tabla:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Comida} & \multicolumn{1}{c}{Tamaño} \\
  \midrule
  perro   & carne  & mediano \\
  caballo & heno   & grande  \\
  rana    & moscas & pequeño \\
  fuath   & \multicolumn{2}{c}{desconocido} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Fusionar celdas verticalmente no está implementado en LaTeX.
Normalmente basta con dejar celdas vacías para dar una idea al lector
del significado deseado sin extender las celdas verticalmente.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Groupo    & Animal  & Tamaño  \\
  \midrule
  herbívoro & caballo & grande  \\
            & ciervo  & mediano \\
            & conejo  & pequeño \\
  \addlinespace
  carnívoro & perro   & mediano \\
            & gato    & pequeño \\
            & león    & grande  \\
  \addlinespace
  omnívoro  & cuervo  & pequeño \\
            & oso     & grande  \\
            & cerdo   & mediano \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Ejercicios

Use el primer ejemplo de esta lección para empezar a experimentar con las tablas. Pruebe
diferentes tipos de alineamiento usando los tipos de columna `l`, `c` y `r`. ¿Qué ocurre si
tiene pocos elementos en una fila de la tabla? ¿Y si tiene demasiados? Experimente el iso 
del comando `\multicolumn` para fusionar celdas de una columna.
