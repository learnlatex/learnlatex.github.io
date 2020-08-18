---
title: "Formateando el texto: fuentes y espaciado"
---

## Espaciado entre párrafos

Ya hemos visto que una línea en blanco en su documento genera un nuevo párrafo 
en LaTeX. Esto se evidencia al comenzar el párrafo con una identación.
Una elección común es la de no identar los párrafos, sino en su lugar añadir 
una "línea en blanco" entre ellos. Esto lo podemos conseguir usando el paquete 
`parskip`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Un poco de texto de relleno
\begin{document}
\lipsum
\end{document}
```

## Forzando un salto de línea

En la mayoría de las situaciones, no debe forzar un salto de línea en LaTeX: casi 
seguro que lo quiere es un nuevo párrafo o usar `parskip`, como acabamos de ver, 
para añadir una "línea en blanco" entre párrafos.

Habrá _pocos_ lugares en los que use `\\` para comenzar una nueva línea sin 
que esto signifique comenzar un nuevo párrafo:

- Al terminar la fila de una tabla.
- En el interior de un entorno `center`.
- Al escribir una poesía (en el entorno `verse`).

Casi siempre, si no se encuentra en uno de esos casos, _no_ debe usar 
`\\`.

## Añadiendo un espacio explicitamente

Podemos añadir un pequeño espacio (de aproximadamente la mitad del ancho du un 
espacio normal) usando `\,`. En el modo matemático, existen también otros comandos: `\.`,
`\:` y `\;`, incluso uno para un espacio hacia atrás: `\!`.

En raras ocasiones, como por ejemplo al crear una página de título, necesitará 
añadir explicitamente un espacio horizontan o vertical. Puede usar en esos casos 
los comandos `\hspace` y `\vspace`, para crear un espacio horizontal y vertical, 
respectivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un poco de texto \hspace{1cm} más texto.

\vspace{10cm}

Aún un poco más texto.
\end{document}
```

## Indicando explicitamente el formato del texto

Vimos [ya hace un tiempo](lesson-03) que en la mayoría de las casos, el formato 
dado por la estructura lógica es el más conveniente. Pero en ocasiones, usted querrá 
poner un texto en negrita, en cursiva, con letras de espaciado fijo, etc. Hay dos 
tipos de comando para hacer esto: unos para pequeñas porciones de texto y otros 
para contenidos "más consecuentes" del cuerpo de un documento (frases, párrafos, etc.)

Para las pequeñas porciones de texto, usaremos `\textbf`, `\textit`, `\textrm`
, `\texttt` y `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Divirtámonos un poco con el estilo de letra: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced - letras de espaciado fijo} and \textsc{small caps - pequeñas mayúsculas}.
\end{document}
```

Para partes del texto del cuerpo de un documento, usaremos comandos que cambian 
el estilo del tipo de letra usado. Debido a ello, necesitaremos situar el comando
y el texto en un mismo _grupo_ ya que en caso contrario, el estilo se aplicará 
a todo el documento. Los entornos de LaTeX son grupos, al igual que las celdas de una 
tabla, fuera de estos casos particulares, pondremos nuestro contenido entre llaves 
`{...}` para explicitar la creación de un grupo. 

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Texto normal.

{\itshape

Este texto está en cursiva.

Así es como es: el efecto del cambio de estilo no se limita al párrafo.

}
\end{document}
```

Podemos fijar el tamaño de letra de una forma similar; estos comandos se aplican 
al contenido de un grupo, como los anteriores. Los tamaños que podemos fijar son 
relativos: `\huge`, `\large`, `\normalsize`, `\small` y `footnotesize` son los 
más comunes. Es importante terminar un párrafo _antes_ de volver a cambiar el tamaño
de letra; vea como añadimos aquí de forma explícita un `\par` (salto de párrafo).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

\begin{center}
{\itshape\large Un poco de texto\par}
Texto normal
{\bfseries\small Texto mucho más pequeño\par}
\end{center}

\end{document}
```

## Ejercicios

Haga pruebas para cambiar manualmente el formato del texto: cree un entorno `titlepage` 
e intente añadir diferentes tipos de espaciado y cambiar el estilo y tamaño del texto. 
¿Qué ocurre cuando combina cambios en el estilo y tamaño del texto? ¿Hay diferencias
con respecto al modo matemático?

¿Qué ocurre si cambia el tamaño de letra en el interior de un párrafo largo 
(utilice primero `\tiny` y luego `\huge`) pero sin usar `\par` antes de cerrar 
el grupo?
