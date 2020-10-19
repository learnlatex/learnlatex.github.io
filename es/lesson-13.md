---
lang: "es"
title: "Estructurando documentos largos"
---

<script>
preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

## Estructurando sus archivos fuente

Cuando escriba un documento largo, seguramente querrá separar el contenido del
del documento en varios archivos. Por ejemplo, es muy común el tener
un archivo principal "main"/"root" y otros archivos secundarios: uno por cada capítulo
(en un libro o una tesis) o por cada sección (en un artículo largo).

LaTeX le permite separar su contenido de forma controlada. Hay dos comandos importantes
para hacer esto: `\input` e `\include`. Podemos usar `\input` para hacer que el contenido
de un archivo funcione "como si estuviese escrito en ese punto", con lo que puede ser 
usado (esencialmente) para insertar cualquier tipo de contenido. El comado `\include` 
se usa únicamente para capítulos: comienza una nueva página y realiza algunos ajustes
internos. Pero presenta una gran ventaja: nos permite seleccionar los capítulos que
queremos incluir, con lo que podemos trabajar en una parte del documento más que con
el documento completo.

Un documento largo tendrá una apariencia similar al siguiente ejemplo:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{Un libro de ejemplo}
\author{John Doe \and Joe Bloggs}

\IfFileExists{append.aux}
{
\includeonly{
%  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Compile inicialmente el documento completo para generar
% todos los ficheros .aux
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

Veamos algunos de los aspectos del ejemplo precedente. Los diferentes archivos de 
soporte utilizados se encuentran al final de esta página.

## Usando `\input`

El comado `\input` es apropiado para partes de un documento largo que _no_ sean capítulos
independientes. En el ejemplo, lo hemos usado para separar la portada y la cubierta 
posterior, haciendo que el archivo principal sea más corto y conciso; y pudiendo
reutilizar la portada y la contraportada en otro documento. Lo hemos utilizado también
con las secciones que "no son capítulos" de por sí y que se encuentran al principio de 
nuestro "libro": como el prefacio. De nuevo, esto permite simplificar el archivo 
principal.

## Usando `\include` e `\includeonly`

El comando `\include` es apropiado para los capítulos, razón por la que lo hemos utilizado aquí
para incluir cada capítulo; comienza siempre con una nueva página. Hemos seleccionado los
capítulos que van a ser compilados con el comando `\includeonly`, que como ha visto
toma como argumento una lista de nombres de archivo separados por comas. Al usar
`\includeonly` puede reducir el tiempo de compilación y producir un PDF "selectivo" para
revisiones. Además, la principal ventaja de `\includeonly` es que LaTeX utilizará toda
la información de las referencias cruzadas de los archivos `.aux` correspondientes a los 
otros archivos incluidos en el documento.

## Creando un índice

El comando `\tableofcontents` usa la infomación de los comandos de sección
para construir el índice. Posee su propio archivo auxiliar, con la extensión
`.toc`, así que puede que necesite ejecutar LaTeX dos veces para que todo
funcione correctamente. El índice se genera automáticamente a partir de los
títulos de las secciones. Existen comandos similares como `\listoffigures` (índice de
figuras) o `\listoftables` (índice de tablas), que utilizan las leyendas de los entornos
flotantes y que usan las extensiones `.lof` y `.lot`, respectivamente.

## Dividiendo el documento en partes

Los comandos `\frontmatter`, `\mainmatter` y `\backmatter` 
afectan a la edición del documento.
Por ejemplo, `\frommatter` cambia la numeración de las páginas
a números romanos.
El comando `\appendix` cambia la numeración a `A`, `B`, etc.,
así por ejemplo el primer capítulo, despuès de `\appendix`, tiene
como título `Apéndice A`.

## Ejercicios

Experimente con la estrcutura de base del documento del ejemplo,
intente añadir y quitar partes en `\includeonly` para ver el efecto que tiene.

Añada algunos objetos flotantes y cree un índice de tablas y figuras.
Si usa una instalación local de LaTeX, vea ¿cuántas compilaciones son necesarias? (El
sistema en línea compila varias veces LaTeX "en segundo plano" así que no notará
las compilaciones sucesivas necesarias).

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Prefacio}
El contenido del prefacio. Vea \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introducción}
El contenido del primer capítulo.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Otra cosa}
El contenido del segundo capítulo.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Apéndice}
El contenido del primer apéndice.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
La portada
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
Para \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
La contraportada
\end{center}
```
<!-- {% endraw %} -->

----
