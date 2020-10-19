---
lang: "es"
title: "Extendendiendo LaTeX usando paquetes"
---

Después de haber definido el tipo de documento, en el preámbulo, usted podrá modificar 
las funcionalidades disponibles en LaTeX añadiendo uno o más *paquetes*. Éstos pueden:

- Cambiar el comportamiento de algunas partes de LaTeX.
- Añadir nuevos comandos en LaTeX.
- Cambiar el diseño de un documento.

## Cambiando el comportamiento de LaTeX

El "kernel" de LaTeX (el núcleo de LaTeX) es bastante limitado en cuanto a personalización
por parte del usuario y algunos paquetes adicionales tratan con ideas muy comunes. La primera
es cambiar el como LaTeX trata la composición tipográfica específica de cada idioma (separación
silábica, puntuación, símbolos, localización, etc.). Todos los idiomas tienen reglas diferentes, con lo
que es importante decir a LaTeX cuál es el que debe usar. De este tema se encarga
el paquete `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[spanish]{babel}

\usepackage[width = 6cm]{geometry} %Para forzar la separación silábica

\begin{document}

Esto es un texto de relleno para demostrar cómo LaTeX separa las sílabas de 
las palabras, y para que sea capaz de darnos al menos una separación silábica.
Esto es un texto de relleno para demostrar cómo LaTeX separa las sílabas de 
las palabras, y para que sea capaz de darnos al menos una separación silábica.

\end{document}
```

Pruebe a no comentar la (claramente engañosa) línea que carga el paquete `babel` y
vea cuál es su efecto (las reglas de separación silábica estandar son las del inglés US).

El paquete `babel` hace mucho más que separar sílabas, en función del idioma seleccionado;
damos [más detalles aquí](more-06) si los necesita.

## Cambiando el diseño

Es útil ser capaz de ajustar algunos aspectos del diseño, independientemente del
tipo de documento. El más obvio es la definición de los márgenes. Ya hemos 
usado el paquete `geometry` en un ejemplo anterior, pero veamos un ejemplo
específico sobre los márgenes.

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
¡Hey mundo!

Éste es un primer documento.


% ================
\chapter{Capítulo Uno}
Introducción al priñer capítulo.


\section{Título de la primera sección}
Texto del tema de la primera sección

Segundo párrafo.

\subsection{Subsección de la primera sección}

Texto del tema de la subsección.


% ================
\section{Segunda sección}

Texto de la segunda sección.

\end{document}
```

Debería fijarse aquí en el efecto que tiene el no cargar el paquete `geometry`.

## Añadiendo comandos

Una de los puntos fuertes de LaTeX es que puede elegir entre miles de paquetes,
incluyendo aquellos que permiten escribir: texto matemático, hipervínculos, hacer uso de
sofisticadas funciones relacionadas con el color, etc. Veremos algunos de las
paquetes más comunes en las siguientes lecciones. 

## Ejercicios

Pruebe a escribir un texto en otras lenguas europeas y vea como `babel` gestiona la
separación silábica: podrá seguramente encontrar un texto en internet, y adivinar
las opciones correctas.

Pruebe a cambiar los márgenes del ejemplo del paquete `geometry`. Puede definir
de forma separada los márgenes `top`, `bottom`, `left` y `right` usando una lista
separada por comas.

Pruebe a cargar el paquete `lipsum` y añada el comando `\lipsum` a su documento.
¿Puede adivinar por qué razón este paquete resulta útil para los ejemplos?
