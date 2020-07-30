---
title: "Su primer documento en LaTeX"
---

Nuestro primer documento va a ser muy sencillo: la idea es mostrarle
a qué se asejema un documento y como componerlo correctamente. También será su
primera oportunidad para [ver cómo hacer uso de los ejemplos en `learnlatex.org`](help).

Si usa una instalación local de LaTeX, cree en su editor un nuevo fichero llamado
`first.tex`, luego, bien corte y pegue el texto de aquí abajo, o escríbalo.
Si usa el sistema en línea, ¡le bastará con hacer clic en el botón "LaTeX Online" 
o "Abrir en Overleaf", que aparecen al final del código para probarlo!
Le sugerimos que pruebe las opciones en línea, aunque disponga de una instalación de
LaTeX local; es una buena idea ver como funcionan las diferentes opciones.
```latex
\documentclass{article}

\begin{document}
¡Hola mundo!

Éste es mi primer documento.
\end{document}
```
Guarde el fichero y compílelo para obtener un documento PDF; si usa una instalación
local de LaTeX, el botón exacto que debe seleccionar dependerá del editor que
haya elegido. Debería obtener un fichero PDF que contenga el texto del ejemplo anterior
 _más_ un número de página; LaTeX la añade automáticamente.

Vea el fichero de salida `first.pdf` con 
cualquier programa que prefiera para visualizar ficheros PDF.
El resultado es estupendo; ¡Felicitaciones!

## Tratando con los errores

En caso de error.
Verifique que ha tecleado cada línea del fichero de texto, exactamente como está escrita
en el ejemplo anterior. Algunas veces, pequeños cambios en el fichero de entrada pueden 
dar lugar a grandes cambios en el resultado, o includo impedir la aparición del documento final. 
Si está bloqueado, intente borrar el documento y corte y pegue las líneas del
ejemplo anterior. 

Si su compilación de LaTeX termina con un signo de interrogación, podrá salir
tecleando `x` y `<Enter>`.

Los mensajes de error de LaTeX intentan ser útiles, pero no son del mismo estilo que los
mensajes de los procesadores de texto. Además, algunos editores hacen que no sea fácil el 
poder ver el texto "completo" de un error, el cual puede dar detalles clave. LaTeX siempre 
crea un fichero log con todo lo que hace; es un fichero de texto de extension `.log`. Aquí
siempre podrá ver los mensajes de error completos, y si tiene algún problema, los usuarios 
expertos de LaTeX le pedirán a menudo este fichero log.

## Qué hemos obtenido

El primer documento muestra lo básico.
Los documentos de LaTeX son una combinación de texto y comandos.
Los comandos comienzan con una barra invertida
(y a veces tienen argumentos que se sitúan entre corchetes).
Obtiene como salida el PDF diciendo a LaTeX que compile su fichero.

En todo documento de LaTeX hay un `\begin{document}` y su correspondiente 
`\end{document}`.
Entre estos dos comandos se encuentra el *cuerpo del documento*, donde irá su contenido.
En el ejemplo, el cuerpo del documento contiene dos párrafos (en LaTeX se puede separar
párrafos con una o más líneas en blanco).
Antes de `\begin{document}` se encuentra el *preámbulo del documento*,
que dispone del código para configurar el diseño de la página.

En LaTeX hay otros bloques `\begin{...}` y `\end{...}; a éstos se les llama
*entornos*.
Debe verificar siempre que cada `\begin{x}` tiene su correspondiente `\end{x}`.
Si introduce uno en el interior de otro, debe tener un `\end{y} ... \end{x}` que
corresponda a un `\begin{x} ... \begin{y}`, es decir cada `\begin` debe tener su `\end` 
correspondiente, respetando el orden.

Podemos añadir comentarios en el fichero LaTeX comenzándolos con `%`; usémoslo
para mostrar la estructura del documento.
```latex
\documentclass[a4paper,12pt]{article} % El tipo de documento con las opciones
% Un comentario en el preámbulo
\begin{document}
% Esto es un comentario
Éste es un   un simple
documento\footnote{con una nota a pie de página}.

Esto es un nuevo párrafo.
\end{document}
```

Puede ver más arriba que hemos obtenido dos párrafos: dése cuenta del uso de una
línea en blanco para conseguirlo. Note igualmente que los espacios múltiples se comportan
como un espacio simple.

Puede que algunas veces quiera un espacio "fuerte" que impida el retorno de línea: 
en LaTeX podemos obtenerlo usando `~`, esto "mantiene" dos partes del texto juntas. Esto
es particularmente útil cuando empecemos a crear referencias cruzadas más adelante en este curso. 

## Caracteres especiales

Seguramente ya ha notado que ``\``, `{` y `}` tienen un significado especial para LaTeX.
El signo ``\`` comienza una instrucción de LaTeX: un "comando". Los corchetes
`{` y `}` se usan para mostrar _argumentos obligatorios_: información necesaria para
los comandos. 

Hay otros caracteres con significado especial; acabamos de ver, por ejemplo, que 
`~` es un espacio "fuerte". Todos estos caracteres son _poco_ comunes en un texto
normal, razón por la cual han sido elegidos como caracteres especiales, damos más
[detalles en la página de más información de esta lección](more-03). 

## Ejercicio

Haga pruebas con el editor y el compilador en línea; haga clic en el 
botón para compilar el contenido, y edítelo en la página web para volver a 
compilarlo.

Intente añadir más texto a su primer documento, compílelo y vea los cambios en su
PDF. Escriba diferentes párrafos y añada diferentes espaciados. Explore el funcionamiento
de su editor; haga clic en el fichero fuente y busque cómo ir a la misma línea en 
su PDF. Intente añadir espacios fuertes y vea como influyen en el retorno de línea.
