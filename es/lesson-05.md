---
title: "Usando los tipos de documento para cambiar el diseño"
---

## Qué es un tipo de documento

Puede que ya haya notado que todos los documentos de LaTeX que hemos creado
han comenzado con la línea `\documentclass`, y que `\documentclass{article}`
ha sido la elección más común. (Hemos necesitado usar `\documentclass{report}` en
la [sección precedente](lesson-04) para utilizar el comando `\chapter`.) Esta línea
debe estar presente en todo documento de LateX y es (casi) siempre, el primer comando
que debe aparecer.

El tipo de documento elegido configura la disposición y el diseño del documento, por ejemplo

- configura: márgenes, fuentes, espaciado, etc.
- si la sección capítulo está disponible,
- si el título debe estar en una página aparte.

Los tipos de documento pueden también venir acompañados de nuevos comandos; esto es especialmente
cierto en los tipos de documento específicos como el que permite la creación de transparencias
de una presentación.

El comando de tipo de documento puede también configurar _opciones globales_: opciones
que se aplican a todo el documento. Estas opciones se escriben entre corchetes:
`\documentclss[<options>]{<name>}`. Esta sintaxis, con información opcional escrita
entre corchetes, es usada en muchos comandos de LaTeX.

## Los tipos de documentos básicos 

LaTeX dispone de una serie de tipos estandar, los cuales se asemejan entre sí, pero
presentan algunas variaciones:

- `article`: documentos cortos sin capítulos.
- `report`: documentos largos con capítulos, impresos a una sola cara.
- `book`: documentos largos con capítulo, impresos a dos caras, con material
inicial y final (como por ejemplo un índice de materias).
- `letter`: cartas sin secciones.
- `slides`: para presentaciones (ver más abajo).  

Los tipos de documento `article`, `report` y `book` disponen de comandos muy similares,
como ya hemos visto. Cuando escribimos una carta con `letter`, los comandos disponibles
difieren un poco.

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Una Dirección\\Una Calle\\Una Ciudad}

\opening{Estimado(a) señor(a):}

El contenido de la carta viene aquí

\closing{Atentamente,}

\end{letter}

\end{document}
```

Vea como ``\\`` es usado para separar las líneas de una dirección; abordaremos el
salto de línea [un poco más tarde](lesson-11). Vea igualmente que el tipo de documento
`letter` crea un nuevo entorno que permite escribir una carta y dispone de comandos específicos.

Los tipos de documento estandar `article`, `report` y `book` aceptan las opciones `10pt`,
`11pt` y `12pt` para cambiar el tamaño de la letra, y `twocolumn` para crear
un documento con dos columnas. 

## Tipos de documento enriquecidos

Los tipos de documentos de base son muy estables, pero esto significa también que
son bastante inmuables en cuanto a diseño y conjunto de comandos disponibles. A lo largo
del tiempo, se han creado otros tipos de documento más potentes, que permiten cambiar
el diseño del documento sin tener que hacer las cosas manualmente (cosa que abordaremos
[un poco más tarde](lesson-11)).

La American Mathematical Society aporta variantes de los tipos de documento estándar
(`amsart`, `amsbook`) con un diseño más tradicional, similar al usado en las
publicaciones de revistas de matemáticas.

Los dos tipos de documento más importantes y "extendidos" popularmente sont el 
paquete KOMA-Script y el tipo memoir. KOMA-Script ofrece una serie de tipos de documento 
con cierto paralelo a los estándar: `scrartcl`, `scrreprt` y `scrbook`, mientras que `memoir`
es más bien una extensión de `book`. 

Estos tipos de documento extendidos disponen de una gran cantidad de herramientas de personalización,
que exploraremos un poco en un ejercicio. Puede preguntarse cómo podemos saber cuáles son las
herramientas de que disponen, abordaremos este tema [en una lección posterior](lesson-15), ¡pero
usted siempre puede adelantarse!

## Presentaciones

El tipo de documento `slides` fue desarrollado para hacer diapositivas físicas 
a mediados de los 80, con lo que no dispone de funciones para crear presentaciones interactivas
en PDF. Existen otros tipos de documento más modernos que pueden hacelo: están de alguna manera
especializados si los comparamos con los documentos generales de LaTeX, así que [los abordaremos en el
apartado de más detalles](more-05).

## Ejercicios

Explore cómo el uso de los tipos de documento estándar, del paquete KOMA o del 
tipo `memoir` afecta a la presentación del documento.

```latex
\documentclass{article} % Cambie aquí el tipo de documento
\usepackage[T1]{fontenc}

\begin{document}

\section{Introduction}

Este es un documento de ejemplo con un texto 
de prueba\footnote{y una nota a pie de página}. Este párrafo
es un bastante largo ya que quizá queremos ver el efecto al pasar
a un documento de dos columnas.

\end{document}
```

Añada la opción `twocolumn` y vea como cambia la presentación del documento.

Cambie el comando `\section` por `\chapter` y vea el resultado que producen las
siguientes opciones al usar el tipo de documento `scrreprt`.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
