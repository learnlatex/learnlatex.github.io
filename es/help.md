---
lang: "es"
title: "Usando el sitio web learnlatex.org"
permalink: /es/help
---

## Navegando por el sitio web

El curso consiste en 16 lecciones principales, a las que se puede acceder
desde el índice de la [página inicial](/).

Cada lección dispone de un enlace a otra lección, que permite profudizar 
sobre el mismo tema. Es posible abordar las 16 lecciones principales
_sin_ leer estas lecciones adicionales.

Al final del curso, hay una o más lecciones específicas del idioma usado
y una galería con ejemplos de algunos paquetes de LaTeX que no han sido
abordados en este curso.

## Ejecutando los ejemplos

Cada ejemplo contiene un pequeño documento de LaTeX completo, que se muestra 
en la página de la siguiente forma:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Example text.
\end{document}
```

El ejemplo esta completo. Sin embargo, puede que quiera editarlo para hacer
pequeños cambios, quizá como parte de los ejercicios propuestos al final de
cada lección.
El editor usado es [ACE](https://ace.c9.io/).

Haga lo que haga, editar o no el texto del ejemplo, hay tres maneras básicas de ejecutarlo.


1. Usar un servicio de **LaTeX en línea**. El botón <button style="padding:0 1px;font-size:90%">LaTeX Online</button> 
   enviará el código al servicio
   [LaTeX CGI](https://latexcgi.xyz/) [^1].
   
   El servicio LaTeX CGI fue desarrolado especifícamente para ser compatible con este sitio y
   en particular hace uso de [PDF.js](https://mozilla.github.io/pdf.js/)
   para permitir mostrar documentos PDF en dispositivos móviles y otros sistemas que no dispongan
   de lectores de archivos PDF.
   
   El documento PDF resultante (o la sección del registro de errores) será
   mostrado en línea, inmediatamente después del ejemplo. Un botón <button style="padding:0 1px;font-size:90%">Borrar 
   Salida</button> estará a su disposición para eliminar el resultado obtenido 
   (o también puede dejarlo y continuar con el resto de la lección).
   
   Note que **LaTeX Online** no le pedirá, ni iniciar sesión ni registrarse, por
   lo que es muy apropiado para los pequeños ejemplos, pero ni este sitio ni los
   sitios de `latexcgi`, `latexonline.cc` o `latex-on-http` dispodrá de herramientas
   para guardar su documento. Cualquier cambio que haga en el ejemplo
   se perderá al cambiar de página.

2. Usar el servicio **Overleaf**. El botón <button style="padding:0 1px;font-size:90%">Abrir en Overleaf</button>
   enviará el código a [Overleaf](https://www.overleaf.com/about).
   
   Si no tiene una cuenta, o si los datos de su cuenta no están guardados
   en su explorador, usted será redirigido a una página de inicio de
   sesión, para acceder a su cuenta o para registrarse en Overleaf. Este servicio
   es gratuito, pero le pedirá algunos detalles y aceptar los términos
   y condiciones del servicio.
   
   Si su cuenta de Overleaf ha sido guardada en su explorador, Overleaf
   abrirá una nueva pestaña de nuevo proyecto con el código del ejemplo.
   A partir de ese momento, podrá editarlo en Overleaf que ejecutará automáticamente
   LaTeX mostrándole el resultado de su documento o el registro de errores.
   
   Las funcionalidades de edición en Overleaf son mucho más avanzadas que las
   de este sitio web y podrá guardar su proyecto en su cuenta Overleaf, teniendo
   la posibilidad de volver más tarde a su código.

3. Si tiene un sistema TeX instalado localmente en su ordenador, puede copiar
   el texto del ejemplo, bien seleccionándolo o usando las teclas de acceso rápido
   en el editor (Ctrl-A Ctrl-C en Windows por ejemplo). Esto pondrá el código en el
   potapapeles de su sistema operativo. Usted podrá abrir entonces un archivo en blanco, en 
   su editor de LaTeX local y pegar el contenido del partapapeles.

## Eligiento el motor de {{ site.tex }}

Cuando se compilan los documentos de los ejemplos, el motor por 
defecto es `pdflatex` a menos que use el paquete `fontspec`
en cuyo caso se usará `xelatex`.

Puede forzar en uso de `pdflatex`, `xelatex`, `lualatex`, 
`platex` o `uplatex` añadiendo un comentario de la forma siguiente:

`% !TEX ` _culquier texto_ `lualatex`

el espacio inicial es opcional y la diferencia entre mayúsculas y minúsculas
se ignora, al igual que la parte _cualquier texto_ situada entre la primera y 
la última palabra.

Esto permire el uso de `% !TEX program=pdflatex` utilizado en algunos editores de TeX,
aunque el uso de `program=` no sea necesario y esté actualmente restringido
a especificar uno de los cinco motores disponibles en los
sistemas en línea que son usados.

Puede ver un ejemplo de un comentario usado para especificar el uso de LuaLaTex en
[uno de los ejemplos de este sitio](more-14).

Si se elige `platex` o `uplatex`, se usará el programa `dvipdfmx` para
producir el archivo PDF a partir del archivo DVI, que estas variantes generan.

## Eligiendo cómo mostrar la salida

Si usa un sistema de LaTeX en línea, el PDF resultante
de la ejecución del ejemplo se mostrará, por defecto, usando
[PDF.js](https://mozilla.github.io/pdf.js/). Esto permite disponer
de un comportamiento consistente en la mayor parte de los exploradores.

Si prefiere utilizar el lector PDF por defecto de su explorador (ya sea
uno propio a su explorador o un aplicación externa que haya configurado),
añada un comentario de la forma:

`% !TEX ` _cualquier texto_ `pdf`

El comportamiento por defecto puede ser cambiado explicitamente usando `pdfjs`
como argumento final. Para analizar los posibles problemas, en algunas ocasiones puede que quiera
ver el archivo log, aunque el documento genere un PDF sin
errores. Esto puede ser especificado usando `log` como argumento final en
el comentario anterior.

---

[^1]: Note que durante el desarrollo del sitio web hemos usado también 
      [LaTeX.Online](https://latexonline.cc/) y
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      y agradecemos a los desarrolladores de estos servicios por realizar las actualizaciones necesarias que 
	  han permitido que los ejemplos de esta web estén disponibles desde el principio.
