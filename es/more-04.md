---
title: "Más sobre: Estructura lógica de un documento"
---

## Título de un documento

LaTeX ofrece varios marcadores lógicos para definir los títulos de los documentos: 
hay tres comandos para definir los "metadatos" y uno para usarlos.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{A.~N.~Otro \and D.~Nobacon}
\title{Algunas cosas que hice}
\date{1 de abril de 2020}
\maketitle

Un poco de texto.
\end{document}
```

Como puede ver, los comandos `\author`, `\title` y `\date` guardan información, 
y `\maketitle` la usa. También puede separar varios autores con `\and`.
Los comandos `\author`, `\title` y `\date` deber preceder a `\maketitle`.
Aquí, los hemos puesto en el cuerpo del documento: pueden ser usados también en el
preámbulo, pero si utiliza los accesos rápidos de "babel" estos comados no estarán 
activos en esta zona. 

El diseño propuesto por `\maketitle` dependerá del tipo de documento (ver [lección
5](lesson-05)). Existe un entorno `titlepage` para cuando quiera personalizar su diseño, 
pero esto está fuera de los objetivos de esta introducción. Si desea realizar diseños personales
para su documento puede usar también un tipo de documento personalizable, como 
`memoir`, o comenzar con uno de los tipos de documento de base en LaTeX, como `book`
y usarlo como punto de partida.

## Listas descriptivas

Además de las listas "numeradas" y "no numeradas", LaTeX proporciona otro tipo, 
menos común: las "listas descriptivas"

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Perro:] miembro del género Canis, el cual forma parte de los cánidos derivados del lobo
 y es uno de los carnívoros terrestres más abundantes.
\item[Gato:] especie doméstica de pequeños mamíferos carnívoros. Es la única especie
domesticada de la familia de los félidos y es a menudo llamado gato doméstico, para diferenciarlo
de los miembros salvajes de la familia.
\end{description}

\end{document}
```

## Ejercicios

Pruebe a definir diferentes autores, títulos y fechas con `\author`, `\title` y `\date` 
con el fin de probar el comando `\maketitle`. ¿Cuáles _tiene_ usted que definir? ¿Estos
comandos tienen que tener un autor, un título o una fecha como parámetros?

Cree algunas listas descriptivas y anide algunas de ellas en el interior
de otras (numerada, no numerada o descriptiva).
