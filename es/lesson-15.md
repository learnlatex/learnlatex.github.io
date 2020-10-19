---
lang: "es"
title: "Analizando los errores"
---

A diferencia de un típico procesador de textos, LaTeX dispone de un ciclo
Editar/Ejecutar/Ver similar al de los compiladores de los lenguages de programación; 
al igual que en programación, el usuario puede cometer errores al escribir su documento
y por consiguiente, necesitará tratar con los mensajes de error dados por el sistema. 

Esta página da ejemplos de algunos de los errores más comunes.

Cada ejemplo viene acompañado de una explicación sobre la forma del
mesaje de error.

Puede ser instructivo el probar los ejemplos, pero también el editarlos
para intentar solucionar los errores presentes en el documento y verificar
si es capaz de resolverlos.

## pdflatex not found

Un primer error muy común con el que se encuentra mucha gente al comenzar es:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

en Windows o

```
bash: pdflatex: command not found
```
{: .noedit :}

en Linux.

No se trata de un error de TeX sino de un error del sistema operativo que indica que
TeX no está instalado, o que no ha sido encontrado. Un error común es el de instalar
un _editor_ de TeX como TeXworks o TeXShop pero sin instalar un sistema TeX
como TeX Live o MiKTeX.

## Anatomía de un mensaje de error de {{ site.tex }}

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

Mi comando es usado aquí \mycommand.

\end{document}
```

El ejemplo anterior da lugar a un mesaje de varias líneas en el archivo log.

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* La primera línea, etiquetada con el símbolo `!` indica el tipo general de error (comando no definido en este caso).
* El segundo par de líneas muestra la línea que TeX estaba procesando, con un salto de página que marca el lugar
  que TeX ha alcanzado antes de encontrarse con el error. El comando no definido es la útima parte de código leída, así que la
  última palabra antes del salto de página es `textbold`. Tras el salto de línea aparece el código `{hmmm}`que ha sido probablemente
  leído como un argumento, pero que no ha sido aún ejecutado por TeX.
* A partir de este punto, puede haber, en general, algunas líneas adionales que añaden más información sobre mensaje de error.
* La última línea de esta parte comienza con `l.`, seguida de un número de línea y de la línea de código en la que el error ha
  sido detectado.
* La última línea es un `?`. Si usa TeX de forma interactiva, es posible introducir
  instrucciones de TeX en este punto, pero la mayoría de los editores y sistemas en línea
  ejecutan TeX en un modo que no se para al encontrar errores, sino que los pone de
  lado e intenta procesar el resto del documento. Escribir `s` en la línea de comandos indicará 
  a TeX que debe continuar en este modo, si se encuentra en el modo interactivo.

Note que TeX no ve el error en la parte en la que se realiza la definición; 
de hecho si el comado \mycommand hubiese sido definido, pero no usado, no habríamos
obtenido ningún error. Así que aunque se indique que el error es en la línea
8, el "verdadero" error se encuentra en la definición de la línea 4, por consiguiente
es importante leer el mensaje de error completo.

Tenga en cuenta que algunos editores muestran "resumenes" de una línea de cada error
encontrado. Esto puede ser particularmente engañoso si el error se muestra como:

`line 8: undefined command: ...\mycommand`

ya que lleva a pensar que el comando `\mycommand` no está definido.

## Error en el uso de llaves {}


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

En este ejemplo el error es debido al uso de `}` para cerrar
los argumentos opcionales. La llave de cierre hace que LaTeX
no pueda pasar los argumentos y usted obtiene un error interno
no muy útil:
```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Aunque la descripción del error no sea muy útil, las dos siguientes
líneas indican de forma más precisa la localización del error, al utilizar
el salto de línea para indicar hasta que punto TeX ha llegado:
```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


## Archivos no encontrados

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

En este ejemplo se produce el error:

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Nota: el mismo error puede ser debido a dos causas diferentes: un simple
error tipográfico (como en este ejemplo) que puede ser corregido escribiendo
correctamente el nombre del paquete; o un archivo que no se encuentra y necesita
ser instalado en el sistema.

## Líneas en blanco en el módo matemático display

```
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Produce el ligeramente misterioso error
```
! Missing $ inserted.
```
{: .noedit :}

Pero resolverlo es muy simple, las líneas en blanco no están
permitidas en los entornos matemáticos por lo que deben ser
eliminadas.

## Ejercicios

Escriba pequeños documentos con diferentes errores y fíjese en la forma de los mensajes de error.

<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(2, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(2, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(2, 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(6, 0, false);
  }, false);
</script>
