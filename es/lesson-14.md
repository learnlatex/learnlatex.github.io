---
title: "Seleccionando fuentes y usando los motores Unicode"
---

When TeX and LaTeX first started being widely used they largely only handled
European languages out of the box, although there was some capability for using
other alphabets such as Greek and Russian.

Cuando TeX y LaTeX comenzaron a ser ampliamente utilizados, sólo eran capaces de tratar
con la mayoría de idomas europeos, aunque disponían de algunas funcionalidades para
usar otros alfabetos como el griego o el ruso.

Originally, accents and accented letters were typed using control sequences or
macros such as `\c{c}` for ‘ç’ and `\'e` for ‘é’. While some people continue to
use these input methods because they can be easier to type, others wanted to be
able to use the keys on their keyboards to input such symbols directly.

En un principio, los acentos y letras acentuadas eran escritas usando secuencias
de control o macros como `\c{c}` para obtener "ç" y `\'e` para "é". Mientras que
algunas personas seguían utilizando estos métodos porque eran podían ser más fáciles
de escribir, otras querían poder utilizar las teclas de sus teclados para escribir
esos símbolos directamente.

Before Unicode, LaTeX provided support for many types of *file encoding* that
allowed text to be written in various languages natively — for example, using
the `latin1` encoding French users could write ‘`déjà vu`’ and LaTeX would
internally translate the accented letters into TeX commands to produce the
correct output.

Antes de Unicode, LaTeX soportaba muchos tipos de *codificación de archivos* que
permitían escribir directamente texto escrito de forma nativa en varios idiomas 
— por ejemplo, usando la codificación `latin1` los usuarios franceses podían escribir
"`déjà vu`" y LaTeX traducía directamente las letras acentuadas en comandos TeX para
producir la salida deseada.

This approach is still in use in modern LaTeX when using the `pdflatex` engine.
By default all files are assumed to be Unicode (UTF-8 encoded) unless otherwise
specified. Although this engine is limited to 8-bit fonts, most European
languages can be supported.

Este método está en uso en el LaTeX moderno cuando usa el motor `pdflatex`. Por defecto,
todos los archivos se supone que utilizan Unicode (codificación UTF-8) a menos que
se especifique otra cosa. Aunque este motor de codificación está limitado a fuentes de
8 bits, la mayor parte de las lenguas europeas están soportadas.

Font selection with `pdflatex` uses the robust LaTeX font selection scheme, and
nowadays there are many fonts ready-to-use in a standard LaTeX distribution. For
example, the TeX Gyre fonts are a suite of high-quality fonts based on common
fonts that most people are familiar with such as Times, Helvetica, Palatino, and
others. To load these fonts, it is as simple as loading a package with the
appropriate name. For a Times lookalike, the TeX Gyre name is Termes:

La selección de la fuente de letra con `pdflatex` usa el robusto esquema de selección
de fuente de LaTeX y hoy en día existen muchas fuentes ya preparadas para su uso en la
distribución estandar de LaTeX. Por ejemplo, las fuentes TeX Gyre son un grupo de fuentes 
de alta calidad basadas en fuentes comunes con la gente ya está familiarizada, tales como
Times, Helvetica, Paladino y algunas otras. Cargar estas fuentes es tan sencillo como 
cargar un paquete con el nombre apropiado. Para una fuente de tipo Times, el nombre en
TeX Gyre es Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

For `pdflatex`, most fonts are accessible through packages.  You can have a look
at [The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) or the
[CTAN page on the ‘Font’ topic](https://www.ctan.org/topic/font) to see some
options.  You can also search on the Internet for the font you want, and look
for a `pdflatex`-compatible package version.  If you want to use a proprietary
font, you can search for a suitable clone, which for most applications is
similar enough to the original.

En `pdflatex`, la mayorías de las fuentes son accesibles via paquetes. Puede echar
un vistazo al [Catálogo de Fuentes de LaTeX](https://www.tug.org/FontCatalogue/) o la
[página de CTAN que trata del tema ‘Fuentes’](https://www.ctan.org/topic/font) para ver 
algunas opciones disponibles. Puede también buscar en internet la fuente que desee y 
encontrar el paquete de la versión compatible con `pdflatex`. Si desea utilizar una
fuente de registrada, puede buscar una versión similar disponible lo que en la mayoría
de las aplicaciones es bastante similar al uso de la original.

## La era Unicode

As `pdflatex` is limited to 8-bit file encodings and 8-bit fonts, it cannot
natively use modern OpenType fonts and easily switch between multiple languages
that use different alphabets (or scripts, to use the technical term). There are
two replacements for pdfTeX that natively use Unicode input and modern fonts:
XeTeX and LuaTeX. For LaTeX, these are typically invoked in your editor using
the engines `xelatex` and `lualatex` respectively.

Al estar `pdflatex` limitado a codificaciones de archivo de 8 bits y a fuentes
de 8 bits, no puede usar de forma nativa las modernas fuentes OpenType que permiten
cambiar facilmente entre múltiples lenguas que usan diferentes alfabetos (o scripts,
para usar el término técnico). Existen dos alternativas a pdfTeX que usan de forma
nativa la entrada en Unicode y las fuentes modernas: XeTeX y LuaTeX. En LaTeX, estas
dos alternativas pueden utilizarse en su editor usando los motores `xelatex` y 
`luatex`, respectivamente.

In these engines, font selection is performed by the `fontspec` package, and for
simple documents can look as easy as:

En estos motores, la selección de fuente se realiza a través del paquete `fontspec` y 
en documentos simples su uso se asemejará a:

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

This selects the TeX Gyre Termes font, as in the `pdflatex` example above.
Notably, this approach works for *any* OpenType font.  Some fonts available for
`pdflatex` are also available to `xelatex` and `lualatex` through their
respective packages as well, or by loading any font you have installed on your
computer by using `fontspec` as shown above.
[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) also shows fonts
with OpenType formats available, so you can use that as a resource for looking
up fonts, as well as the [CTAN page](https://www.ctan.org/topic/font) mentioned
earlier.

Estas líneas seleccionan la fuente TeX Gyre Termes, al igual que en el ejemplo precedente
el que usamos `pdflatex`. En particular, este método permite utilizar *cualquier* fuente
OpenType. Algunas de las fuentes disponibles en `pdflatex` lo son también en `xelatex`
vía sus respectivos paquetes, o cargando cualquiera de las fuentes que haya cargado
en su ordenador haciendo uso de `fontspec` como se mostró anteriormente.
[El Catálogo de fuentes de LaTeX](https://www.tug.org/FontCatalogue/) también contiene fuentes
de tipo OpenType, asñi que puede usarlo como recurso para buscar fuentes, al igual
que la [página de CTAN](https://www.ctan.org/topic/font) mencionada anteriormente.
earlier.

Having selected a font,
input can now be typed directly in plain Unicode into a source document. Here is
an example showing some Latin and Greek letters as well as some CJK ideographs:

Una vez seleccionada la fuente,
el texto de su documento puede ser escrito directamente en Unicode. Aquí tiene
un ejemplo que muestra algunas letras latinas y griegas e igualmente algunos ideogramas
CJK

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

When switching between languages it is usually important to also
change things like hyphenation patterns and so on, and the `babel` and
`polyglossia` packages both provide robust features to do this.

Cuando cambia entre idiomas, es generalmente importante cambiar también
cosas como los patrones de separación silábica y otros usos propios del idioma; y 
los paquetes `babel` y `polyglossia` aportan funcionalidades robustas para hacerlo. 
