---
title: "Su primer documento en LaTeX"
---

Nuestro primer documento va a ser muy sencillo: la idea es mostrarle
a qué se asemeja un documento y cómo componerlo correctamente. También será su
primera oportunidad para [ver cómo hacer uso de los ejemplos en `learnlatex.org`](help).

Si usa una instalación local de LaTeX, genere en su editor un nuevo archivo llamado
`first.tex` y luego, o bien corte y pegue el texto de aquí abajo, o escríbalo.
Si usa el sistema en línea, ¡le bastará con pulsar el botón "LaTeX Online" 
o "Abrir en Overleaf" que aparecen al final del código para probarlo!
Le sugerimos que pruebe las opciones en línea por más que disponga de una instalación de
LaTeX local; es una buena idea ver cómo funcionan las diferentes opciones.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
¡Hey mundo!

Éste es mi primer documento.
\end{document}
```

Guarde el archivo y compílelo para obtener un documento PDF; si usa una instalación
local de LaTeX, el botón exacto que debe seleccionar dependerá del editor que
haya elegido. Debería obtener un PDF que contenga el texto del ejemplo anterior
 _más_ un número de página; LaTeX lo añade automáticamente.

Vea el archivo de salida `first.pdf` con 
cualquier programa que prefiera para visualizar archivos PDF.
El resultado es estupendo; ¡felicitaciones!

## Tratando con errores

Es posible cometer errores.
Verifique que ha tecleado cada línea del archivo de texto, exactamente como está escrito
en el ejemplo anterior. Algunas veces, pequeños cambios en el archivo de entrada pueden 
dar lugar a grandes cambios en el resultado, o incluso impedir la aparición del documento final. 
Si está bloqueado, intente borrar el documento y corte y pegue las líneas del
ejemplo anterior. 

Si su compilación de LaTeX termina con un signo de interrogación, podrá salir
tecleando `x` y `<Enter>`.

Los mensajes de error de LaTeX intentan ser útiles, pero no son del mismo estilo que los
mensajes de los procesadores de texto. Además, algunos editores hacen que no sea fácil el 
poder ver el texto "completo" de un error, el cual puede ser clave para entenderlo. LaTeX siempre 
crea un registro con todo lo que hace; es un archivo de texto de extensión `.log`. Aquí
siempre podrá ver los mensajes de error completos, y si tiene algún problema, los usuarios 
expertos de LaTeX le pedirán a menudo este archivo de registro.

## Lo que ha obtenido

El primer documento muestra lo básico.
Los documentos LaTeX son una combinación de texto y comandos.
Los comandos comienzan con una barra invertida y a veces tienen argumentos
entre llaves
(o a veces tienen argumentos opcionales que se sitúan entre corchetes).
Obtiene como el PDF de salida al indicar a LaTeX que compile su archivo.

En todo documento LaTeX hay un `\begin{document}` y su correspondiente 
`\end{document}`.
Entre estos dos comandos se encuentra el _cuerpo del documento_ en donde irá su contenido.
En el ejemplo, el cuerpo del documento contiene dos párrafos (en LaTeX se puede separar
párrafos con una o más líneas en blanco).
Antes de `\begin{document}` se encuentra el _preámbulo del documento_,
que dispone del código para configurar el diseño del documento.
El comando `\usepackage` que será descrito en una [próxima lección](lesson-06) es usado en la mayoría 
de los ejemplos de este sitio para configurar la codificación de la fuente.

En LaTeX hay otros bloques `\begin{...}` y `\end{...}`; a éstos se les llaman
_entornos_.
Siempre debe verificar que cada `\begin{x}` tenga su correspondiente `\end{x}`.
Si los combina, debe tener un `\end{y} ... \end{x}` que
corresponda a un `\begin{x} ... \begin{y}`, es decir cada `\begin` debe tener su `\end` 
correspondiente, respetando el orden.

Podemos añadir comentarios en el archivo LaTeX comenzándolos con `%`; usémoslo
para mostrar la estructura del documento:

```latex
\documentclass[a4paper,12pt]{article} % El tipo de documento con las opciones
\usepackage[T1]{fontenc}
% Un comentario en el preámbulo
\begin{document}
% Esto es un comentario
Éste es   un simple
documento\footnote{con una nota al pie de página}.

Esto es un nuevo párrafo.
\end{document}
```

Puede ver más arriba que hemos obtenido dos párrafos: observe el uso de una
línea en blanco para conseguirlo. Además, fijése en que los espacios múltiples se comportan
como un espacio simple.

Puede que algunas veces quiera un espacio "fuerte" que impida el retorno de línea: 
en LaTeX podemos obtenerlo usando `~`, que "mantiene" dos partes del texto juntas. Esto
es particularmente útil cuando, más adelante en este curso, empecemos a crear referencias cruzadas. 

## Caracteres especiales

Seguramente ya ha notado que `\`, `{` y `}` tienen un significado especial para LaTeX.
El signo `\` comienza una instrucción de LaTeX: un "comando". Las llaves
`{` y `}` se usan para mostrar _argumentos obligatorios_: información necesaria para
los comandos. 

Hay otros caracteres con significado especial; acabamos de ver, por ejemplo, que 
`~` es un espacio "fuerte". Todos estos caracteres son _muy_ poco comunes en un texto
normal, razón por la cual han sido elegidos como caracteres especiales.
Si necesita mostrar uno de estos caracteres especiales, 
hemos incluido [información en la página de más detalles](more-03).

## Ejercicio

Haga pruebas con el editor y el compilador en línea; pulse el 
botón para compilar el código y edítelo en la página web para volver a 
compilarlo.

Intente añadir más texto a su primer documento, compílelo y vea los cambios en su
PDF. Escriba diferentes párrafos y añada diferentes espaciados. Explore el funcionamiento
de su editor; haga clic en el archivo fuente y busque cómo ir a la misma línea en 
su PDF. Intente añadir espacios fuertes y vea cómo influyen en el salto de línea.
