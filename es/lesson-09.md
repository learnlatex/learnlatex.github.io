---
lang: "es"
title: "Referencias cruzadas"
---

## El funcionamiento de `\label` y `\ref`

Cuando esté escribiendo un documento, poco importa el tamaño del mimso, usted querrá hacer referencias
a elementos enumerados tales como las figuras, las tablas o las ecuaciones. Afortunadamente, LaTeX
puede añadir automáticamente los números correctos; sólo tenemos que ajustar algunas cosas. Para hacer que
LaTeX recuerde un punto de su documento, usted tiene que etiquetarlo y haciéndolo, podrá mencionarlo
en otro lugar.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
¡Hey mundo!

Éste es un primer documento.

\section{Título de la primera sección}

Texto del contenido de la primera sección.


\subsection{Subsección de la primera sección}
\label{subsec:labelone}

Texto del contenido de la primera subsección.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

En la subsección ~\ref{subsec:labelone} se encuentra la ecuación~\ref{eq:labeltwo}.
\end{document}
```

En el ejemplo, hay dos comandos `\label{...}`, uno después de la subsección y otro 
dentro del entorno de la ecuación.
Están asociados con los comandos `\ref{...}` de la última frase,
Cuando ejecuta LaTeX, éste guarda información sobre las etiquetas en un archivo auxiliar.
Con el comando `\label{subsec:labelone}`, LaTeX sabe que se encuentra en una subsección y que
por consiguiente, debe guardar el número de la subsección.
Con el comando `\label{eq:labeltwo}`, LaTeX sabe que el entorno de interés más reciente es
una ecuación y que por consiguiente, debe guardar información de esa ecuación.
Cuando usted pide información de la referencia, LaTeX va a buscarla en el archivo auxiliar.

Los elementos `subsec:` y `eq:` no son usados por LaTeX;
más bien, LaTeX sólo guarda una traza de lo que ha sido
procesado recientemente.
Pero cuando usted está escribiendo, ésto puede ayudarle a recordar a qué
hace referencia cada etiqueta.

Puede que vea referencias que son mostradas, en un PDF de salida,
como un doble signo de interrogación y en negrita, **??**.
La explicación de esto hay que buscarla en el funcionamiento del archivo auxiliar,
la primera vez que compila el documento la etiqueta aún no ha sido
guardada.
Ejecute LaTeX una vez más y verá que todo se arregla
(normalmente usted ejecutará LaTeX varias veces durante la escritura
de su documento, con lo que esto no será un problema).

Note el uso del carácter (`~`) antes de las referencias.
Usted no desea que haya un salto de línea entre la `subsección` y su número, o entre
la `equation` y su número.
El uso de este carácter indica a LaTeX que no debe poner un salto de línea en esa posición.

## Dónde poner `\label`

El comando `\label` siempre hace referencia al último elemento enumerado:
una sección, una ecuación, un objeto flotante, etc. Esto significa que `\label` debe ir siempre
_después_ del elemento al que quiere hacer referencia. En particular, cuando crea un objeto
flotante, el comando `\label` debe ir _después_ (o mejor aún en el interior), del comando `\caption`,
dentro del entorno del objeto flotante.

## Ejercicios

Pruebe a añadir nuevas partes enumeradas (secciones, subsecciones, listas enumeradas)
al documento de test y vea cuantas compilaciones son necesarias para hacer que los
comandos `\label` funcionen correctamente.

Añada algunos elementos flotantes y vea lo que ocurre cuando sitúa el comando `\label` _antes_ de
`\caption` en lugar de después; ¿puede predecir el resultado?

¿Qué ocurre si pone un `\label` en una ecuación _después_ de `\end{equation}`? 
