---
title: "Seleccionando fuentes y usando los motores Unicode"
---

Cuando TeX y LaTeX comenzaron a ser ampliamente utilizados, sólo eran capaces de tratar
con la mayoría de idomas europeos, aunque disponían de algunas funcionalidades para
usar otros alfabetos como el griego o el ruso.

En un principio, los acentos y letras acentuadas eran escritas usando secuencias
de control o macros como `\c{c}` para obtener "ç" y `\'e` para "é". Mientras que
algunas personas seguían utilizando estos métodos porque eran más fáciles de escribir
para ellos, otras querían poder utilizar las teclas de sus teclados para escribir
esos símbolos directamente.

Antes de Unicode, LaTeX soportaba muchos tipos de *codificación de archivos* que
permitían escribir directamente texto escrito de forma nativa en varios idiomas 
— por ejemplo, usando la codificación `latin1` los usuarios franceses podían escribir
"`déjà vu`" y LaTeX traducía directamente las letras acentuadas en comandos TeX para
producir la salida deseada.

Este método sigue en uso en el LaTeX moderno cuando usa el motor `pdflatex`. Por defecto,
todos los archivos se supone que utilizan Unicode (codificación UTF-8) a menos que
se especifique otra cosa. Aunque este motor de codificación está limitado a fuentes de
8 bits, la mayor parte de las lenguas europeas están soportadas.

La selección de la fuente de letra con `pdflatex` usa el robusto esquema de selección
de fuente de LaTeX y hoy en día existen muchas fuentes ya preparadas para su uso en la
distribución estandar de LaTeX. Por ejemplo, las fuentes TeX Gyre son un grupo de fuentes 
de alta calidad, basadas en fuentes comunes con las que gente ya está familiarizada, tales como
Times, Helvetica, Paladino y algunas otras. Cargar estas fuentes es tan sencillo como 
cargar un paquete con el nombre apropiado. Para una fuente de tipo Times, el nombre en
TeX Gyre es Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

En `pdflatex`, la mayorías de las fuentes son accesibles via paquetes. Puede echar
un vistazo al [Catálogo de Fuentes de LaTeX](https://www.tug.org/FontCatalogue/) o la
[página de CTAN que trata del tema "Fuentes"](https://www.ctan.org/topic/font) para ver 
algunas opciones disponibles. Puede también buscar en internet la fuente que desee y 
encontrar el paquete de la versión compatible con `pdflatex`. Si desea utilizar una
fuente registrada, puede buscar y usar una versión similar disponible, lo que en la mayoría
de las aplicaciones es bastante similar al uso de la original.

## La era Unicode

Al estar `pdflatex` limitado a codificaciones de archivo de 8 bits y a fuentes
de 8 bits, no puede usar de forma nativa las modernas fuentes OpenType que permiten
cambiar facilmente entre múltiples lenguas que usan diferentes alfabetos (o scripts,
para usar el término técnico). Existen dos alternativas a pdfTeX que usan de forma
nativa la entrada en Unicode y las fuentes modernas: XeTeX y LuaTeX. En LaTeX, estas
dos alternativas pueden utilizarse en su editor usando los motores `xelatex` y 
`luatex`, respectivamente.

En estos motores, la selección de fuente se realiza a través del paquete `fontspec` y 
en documentos simples su uso se asemejará a:

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

Estas líneas seleccionan la fuente TeX Gyre Termes, como en el ejemplo anterior en el
que utilizamos `pdflatex`. En particular, este método permite utilizar *cualquier* fuente
OpenType. Algunas de las fuentes disponibles en `pdflatex`, lo son también en `xelatex`
vía sus respectivos paquetes, o cargando cualquiera de las fuentes que haya cargado
en su ordenador, haciendo uso de `fontspec` como se mostró anteriormente.
[El Catálogo de fuentes de LaTeX](https://www.tug.org/FontCatalogue/) también contiene fuentes
de tipo OpenType, así que puede usarlo como recurso para buscar fuentes, al igual
que la [página de CTAN](https://www.ctan.org/topic/font) mencionada anteriormente.

Una vez seleccionada la fuente,
el texto de su documento puede ser escrito directamente en Unicode. Aquí tiene
un ejemplo que muestra algunas letras latinas y griegas e igualmente algunos ideogramas
CJK:

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

Cuando cambia entre idiomas, es generalmente importante cambiar también
cosas como los patrones de separación silábica y otros usos propios del idioma; y 
los paquetes `babel` y `polyglossia` aportan funcionalidades robustas para hacerlo. 
