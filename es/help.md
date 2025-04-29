---
layout: "page"
lang: "es"
title: "Usando el sitio web learnlatex.org"
description: "Esta página web explica el objetivo de learnlatex.org y cómo hacer el mejor uso de él"
permalink: /es/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  } 
</script>

# Help


## Navegando por el sitio web

El curso consiste en 16 lecciones principales, a las que se puede acceder
desde [índice]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) de la [página inicial](./).

Cada lección dispone de un enlace a otra lección, que permite profundizar 
sobre el mismo tema. Es posible abordar las 16 lecciones principales
_sin_ leer estas lecciones adicionales.

Al final del curso, hay una o más lecciones específicas del idioma usado
y una galería con ejemplos de algunos paquetes de LaTeX que no han sido
abordados en este curso.

---

## Ejemplos

### Ejecutando los ejemplos

Cada ejemplo contiene un pequeño documento de LaTeX completo, que se muestra 
en la página de la siguiente forma:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Example text.
\end{document}
```

Cada ejemplo contiene un código completo e independiente. Sin embargo, puede que quiera editarlo para hacer
pequeños cambios, quizá como parte de los ejercicios propuestos al final de cada lección.

* El editor usado es [ACE](https://ace.c9.io/).

  Puede configurar el tema usado en el editor (por ejemplo usando un
  teme oscuro, con el texto claro sobre fondo negro) en el apartado de [Configuración del sitio web](settings).
  Una manera adecuada de probar los diferentes temas disponibles es usando <kbd>Ctrl</kbd><kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> en Mac) cuando se encuentre 
  en el texto de alguno de los ejemplos del sitio web. [Esta combinación de teclas le mostrará un panel](javascript:acesettings()) que le permitirá cambiar todos los parámetros de ACE.

  El depósito de ACE dispone de una página [muy útil para conocer las teclas de acceso rápido del editor] https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).

* [CodeMirror6](https://codemirror.net/)

### Tres maneras de ejecutar un ejemplo

* Usando el servicio Overleaf
* Usando el servicio TeXLive.net
* Usando un sistema TeX instalado localmente

#### Usando el servicio Overleaf

Overleaf es uno de los servicios en línea más populares para editar textos en LaTeX. El 
botón <button>Abrir en Overleaf</button>, en la parte inferior de los ejemplos, enviará el
código a [Overleaf](https://www.overleaf.com/about).

Si no tiene una cuenta, o si los datos de su cuenta no están guardados
en su explorador, usted será redirigido a una página de inicio de
sesión, para acceder a su cuenta o para registrarse en Overleaf. Este servicio
es gratuito, pero le pedirá algunos detalles y aceptar los términos
y condiciones del servicio.
   
Si su cuenta de Overleaf ya ha sido guardada en su explorador, Overleaf
abrirá una nueva pestaña de nuevo proyecto con el código del ejemplo. 
A partir de ese momento, podrá editarlo en Overleaf que ejecutará 
automáticamente LaTeX mostrándole el resultado de su documento o el 
registro de errores.
   
A diferencia de lo que ocurre en TeXLive.net, con Overleaf tiene la posibilidad
de guardar el proyecto en su cuenta y volver a él más tarde. 

#### Usando el servicio TeXLive.net

El <button>Ejecutar en TeXLive.net</button>, en la parte inferior de los ejemplos, enviará el código al
servicio en línea [TeXLive.net](https://texlive.net)[^1].

El servicio TeXLive.net fue desarrollado específicamente para ser compatible con nuestro sitio web, y
hace uso en particular de [PDF.js](https://mozilla.github.io/pdf.js/) 
para permitir visualizar documentos PDF en dispositivos móviles y otros sistemas que no dispongan
de lectores de archivos PDF.

El documento PDF resultante (o la sección del registro de errores) será
mostrado en línea, inmediatamente después del ejemplo. Un botón <button>Borrar 
Salida</button> estará a su disposición para que pueda eliminar el resultado obtenido 
(o también puede dejarlo y continuar con el resto de la 
lección).
   
Note que **LaTeX Online** no le pedirá, ni iniciar sesión ni registrarse, por lo que es 
muy apropiado para los pequeños ejemplos, pero este sitio no dispone de herramientas
para guardar su documento. Cualquier cambio que haga en el ejemplo
se perderá al cambiar de página.

#### Usando un sistema TeX instalado localmente

Si tiene un sistema TeX instalado localmente en su ordenador, puede copiar
el texto del ejemplo, bien seleccionándolo o usando las 
teclas de acceso rápido en el editor 
(<kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd> en Windows 
por ejemplo). Esto pondrá el código en el portapapeles de su sistema operativo. 
Usted podrá abrir entonces un archivo en blanco, en su editor de LaTeX local 
y pegar en él, el contenido del portapapeles.

### En caso de problemas

Nuestros ejemplos deben ser usados utilizando una instalación de LaTeX actualizada. Todos ellos
funcionan los servicios en línea que ponemos a su disposición, así que si uno de nuestros 
ejemplos le da errores, quizá deba verificar si su sistema de LaTeX está 
actualizado

---

## Eligiento el motor de TeX

Cuando se compilan los los documentos de ejemplo, el motor usado por defecto es `pdflatex`.

Puede forzar en uso de `pdflatex`, `xelatex`, `lualatex`, 
`platex` o `uplatex` añadiendo un comentario de la forma siguiente:

`% !TEX ` _cualquier texto_ `lualatex`

donde el espacio inicial es opcional y la diferencia entre mayúsculas y minúsculasse ignora, 
al igual que la parte _cualquier texto_ situada entre la primera y la última palabra.

Esto permite el uso de `% !TEX program=pdflatex` utilizado en algunos editores de TeX,
aunque el uso de `program=` no sea necesario y esté actualmente restringido
a especificar uno de los cinco motores disponibles en los
sistemas en línea que son usados.

Puede ver un ejemplo de un comentario usado para especificar el uso de LuaLaTex en
[uno de los ejemplos de este sitio](more-14).

Si se elige el motor `platex` o `uplatex`, se usará el programa `dvipdfmx` para
producir el archivo PDF a partir del archivo DVI, que estas variantes generan.
De forma similar se usarán los programas `dvips` y `ps2pdf` si se especifica `latex`.

Si ningún motor de TeX es especificado en un comentario del tipo `% !TeX`, entonces se usará `pdflatex`
a menos que haya especificado un motor por defecto en el apartado de [Configuración del sitio web](settings). 

---

## Eligiendo cómo mostrar la salida

Si usa el sistema TeXLive.net, el PDF resultante
de la ejecución del ejemplo se mostrará, por defecto, usando
[PDF.js](https://mozilla.github.io/pdf.js/). Esto permite disponer
de un comportamiento consistente en la mayor parte de los exploradores.

Si prefiere utilizar el lector PDF por defecto de su explorador (ya sea
uno propio a su explorador, o un aplicación externa que haya configurado),
añada un comentario de la forma:

`% !TEX ` _cualquier texto_ `pdf`

El comportamiento por defecto puede ser cambiado explicitamente usando `pdfjs`
como argumento final. Para analizar los posibles problemas, en algunas ocasiones puede que quiera
ver el archivo log, aunque el documento genere un PDF sin
errores. Esto puede ser especificado usando `log` como argumento final en
el comentario anterior.

Una alternativa al uso del comentario`% !TeX`, consiste a especificar
el tipo de salida deseada en el apartado de [Configuración del sitio web](settings). 
La configuration es específica de cada explorador, así que por ejemplo usted
puede elegir usar por defecto `pdfjs` en su teléfono móvil,
y usar `pdf` en el explorador de su ordenador o computadora, para utilizar su visualizador PDF por defecto.


---

## Salida HTML (make4ht, LaTeXML, lwarp)

Si utiliza el sistema TeXLive.net, dispondrá de opciones de salida adicionales: 
`make4ht`, `LaTeXML` or `lwarp` podrán ser especificados. Estos devuelven como salida una o más páginas HTML
en un marco dentro de la misma página. Estas opciones pueden ser especificadas al mismo tiempo 
que los motores `xelatex` or `lualatex` o el motor por defecto `pdflatex`.

Para habilitar este formaro de salida, añada un comentario de la forma:


```
% !TeX make4ht
```
{: .noedit :}


Remplace `make4ht` por `LaTeXML` o `lwarp` para especificar estos sistemas.



De forma alternativa puede especificar `make4ht`, `LaTeXML` o `lwarp` como salida por defecto en el
apartado de [Configuración del sitio web](settings).


Si usa un sistema TeX instalado localmente, la misma salida que con la opción `make4ht` puede ser obtenida
ejecutando el siguiente comando

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

añadiendo como opción adicional `-x` o `-l` si XeLaTeX o LuaLaTeX son especificados.

Otras configuraciones son posibles si utiliza su sistema TeX instalado localmente. Consulte el [manual
make4ht](https://texdoc.org/pkg/make4ht).


Para ejecutar `LaTeXML` en su sistema locañ, debe instalar LaTeXML (no forma parte ni de TeX Live ni de MiKTeX)
y usar el siguiente comando

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Otras muchas configuraciones LaTeXML son posibles,
[como se comenta en su manual](https://dlmf.nist.gov/LaTeXML/manual/).


La configuración `lwarp` no la comentaremos aquí, está en experimentación y puede variar aún.
Puede consultar la versión actual en el
[depósito de origen](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Note que durante el desarrollo del sitio web hemos usado también 
      [LaTeX.Online](https://latexonline.cc/) y
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      y agradecemos a los desarrolladores de estos servicios por realizar las actualizaciones necesarias que 
      han permitido que los ejemplos de esta web estén disponibles desde el principio.
