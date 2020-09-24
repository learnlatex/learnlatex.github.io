---
title: "Estructura lógica de un documento"
---

LaTex proporciona herramientas para concentrarse en la estructura lógica de su documento, y también
la capacidad de configurar directamente la apariencia del mismo. La mayor parte del tiempo, es mejor usar
métodos que se centren en la estructura, esto hace más fácil la reutilización o la modificación 
de la apariencia del documento cuando lo necesite.

## Un primer ejemplo

Empezaremos con un ejemplo que compara uno de los comandos de marcado lógico 
más comunes en LaTeX, `\emph`, con simplemente poner algo en cursiva (en la impresión,
ésta es la forma más usual de resaltar un texto).  

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Texto con \emph{énfasis y contenido \emph{anidado}}.

Texto en \textit{cursiva y contenido \textit{anidado}}.
\end{document}
```

Probablemente haya adivinado que `\textit` es un comando que pone un texto en cursiva, pero
_siempre_ pondrá el texto en cursiva, con lo que no funcionará con un texto anidado. Vea como
`\emph` _se comporta_ cuando está anidado. Hay también lugares en los que poner en énfasis
no es lo mismo que poner en cursiva el texto; por ejemplo, en las presentaciones, el uso del color es
normalmente una mejor opción. Con el marcador lógico, no deberá preocuparse de este detalle en el 
cuerpo del documeto.

Abordaremos [la edición manual del estilo del texto más adelante](lesson-11), pero de momento
añadamos `\textbf` a los comandos que conocemos: este comando pone el texto en negrita.

## Seleccionado comandos

Probablemente usted ya haya usado un procesador de texto, en el que para comenzar 
una sección, la mayor parte de la gente escribe el título de la sección, luego simplemente 
aumenta el tamaño del texto y lo pone en negrita, para a continuación añadir una nueva
línea. En LaTeX, el uso de marcadores lógicos es en realidad _más fácil_ que editar el
estilo del texto manualmente; podemos usar el comando `\section`. Este comando se encarga de 
los cambios de fuente, del espaciado vertical, etc., y mantiene la apariencia uniforme a lo 
largo del documento. 

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
¡Hey mundo!

Éste es un primer documento.

\section{Título de la primera sección}

Texto del contenido de la primera sección

Segundo párrafo.

\subsection{Subsección de la primera sección}

Texto del contenido de la subsección.

\section{Segunda sección}

Texto de la segunda sección.

\end{document}
```

Al usar el tipo de documento estándar `article`, LaTeX numerará las secciones y subsecciones
y pondrá los títulos en negrita. Veremos algunas pistas sobre cómo cambiar este diseño [en la
siguiente lección](lesson-05).

LaTeX puede estructurar el documento en bastantes niveles:

- `\chapter` (pero para poder utilizarlo debemos utilizar `\documentclass{book}` o
 `documentclass{report}`)
- `\section`
- `\subsection`
- `\subsubsection`

Podemos ir más lejos: el siguiente es `\paragraph`, pero casi siempre esto será ir
demasiado "lejos" en una sección (sí, `\paragraph` es un comando de sección, ¡_no_
una forma de comenzar un nuevo párrafo!).

Puede que se pregunte sobre el título del documento. Hay varios comandos especiales
para ello, pero no todos los documentos los usan, así que 
[lo abordaremos en la parte de más detalles sobre este tema](more-04).

## Listas

La otra situación muy común en la que utilizará marcadores lógicos es en la escritura 
de una lista. 

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Numerada
\begin{enumerate}
  \item Una entrada
  \item Otra
  \item ¡Guau! Tres entradas 
\end{enumerate}

No enumerada
\begin{itemize}
  \item Una entrada
  \item Otra
  \item ¡Guau! Tres entradas
\end{itemize}

\end{document}
```

Remarque `\item` sirve para iniciar cada entrada de la lista y añade automáticamente
el símbolo o número de lista a cada una de ellas.

## Ejercicios

Experimente usando las diferentes secciones. Intente usar '\documentclass{report}`
en lugar de `\documentclass{article}` y añada el comando `\chapter`. ¿Cómo se
presenta el documento? Intente usar el comando `\paragraph` e (incluso) el commando 
`\subparagraph` para ver cómo funcionan, estos comandos _no_ añaden ninguna numeración.

Cree algunas listas, y anide una lista en el interior de otra. ¿Cómo afecta esto al
formato de los números o símbolos? Sólo podrá llegar hasta cuatro niveles de anidamiento
con LaTeX standard. Necesitar más de cuatro listas anidadas ¡tiende a ser una mala
señal, de todas formas! 
