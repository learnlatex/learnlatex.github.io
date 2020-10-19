---
lang: "es"
title: "Trabajando con LaTeX"
---

A diferencia de muchos programas, LaTeX no es una simple aplicación que contiene
"todo" en uno. En lugar de ello, tiene programas independientes que funcionan juntos.
Podemos clasificar estos programas en dos cosas que usted necesitará:

- Un _sistema TeX_
- Un editor de texto (a menudo específico para LaTeX)

## Distribuciones del sistema {{ site.tex }}

Lo esencial para trabajar con LaTeX es disponer de un sistema TeX. Un sistema TeX es
un conjunto de programas y archivos "en segundo plano", necesarios para que LaTeX
funcione, pero la mayor parte del tiempo no necesitará "ejecutarlos" directamente.   

Hay dos principales distribuciones del sistema TeX disponibles hoy en día,
[MiKTeX](https://www.miktex.org) y [TeX Live](https://tug.org/texlive). Ambas
disponibles para Windows, macOs y Linux.
MikTeX tiene un gran arraigo en Windows;
en macOS, TeX Live está incluida en una colección más amplia llamada [MacTeX](http://www.tug.org/mactex/).
[Cada distribución tiene sus ventajas](https://tex.stackexchange.com/questions/20036), y puede
que quiera echar un vistazo al [sitio web de LaTeX Project 
para obtener más información](https://www.latex-project.org/get/).

Como TeX Live está disponible en todas las plataformas habituales y presenta algunas
ventajas en cuanto a rendimiento, le recomendamos que si no sabe qué distribución instalar,
elija TeX Live.

## Editores

Los archivos de LaTeX son simplemente archivos de texto sin formato, con lo cual pueden ser 
editados por cualquier editor de texto. Sin embargo, es más conveniente utilizar
un editor de texto concebido para trabajar con LaTeX, ya que le ofrecerá funcionalidades
útiles como: compilar archivos, visualizar los PDF resultantes y resaltar la sintaxis. Una
funcionalidad verdaderamente útil en los editores modernos de LaTeX es SyncTex: el poder pulsar 
en su código fuente e ir a la posición correspondiente en el PDF resultante y viceversa.   

Existen muchos editores de LaTeX que podemos esperar encontrar aquí: 
[hay una lista completa en StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Un editor básico, [TeXworks](https://tug.org/texworks), está incluido en las distribuciones
TeX Live y MikTeX para Windows y Linux; y [TeXShop](https://pages.uoregon.edu/koch/texshop/)
forma parte de MacTeX.  

Sea cual sea el editor que elija, le recomentamos instalarlo _después_ de instalar el 
sistema TeX, de forma que el editor "localice" el sistema TeX y lo configure automáticamente. 

## Trabajando en línea

Hoy en día existen potentes sitios web que le permiten evitar la
instalación de un sistema TeX y de un editor de LaTeX. Estos sitios 
funcionan permitiéndole editar el archivo directamente en la página web, luego 
ejecutan LaTeX en segundo plano, y finalmente le muestran el resultado en PDF.

Algunos de estos sitios combinan LaTeX con otras funcionalidades similares a las 
de un procesador de textos, mientras que otros se focalizan en la visualización del 
código LaTeX y se asemejan a tener una instalación local de LaTeX. 

Hay sistemas que le permiten ejecutar LaTeX sin necesidad de registrarse. Nosotros
vamos a usar uno de ellos: 
[LaTeX CGI](https://latexcgi.xyz), que le permitirá
editar y probar los ejemplos que le daremos. Para actividades más complejas, los mejores
sistemas en línea requieren que se registre antes de usarlos. Esto le permitira a usted guardar
su trabajo y a los sitios web el evitar estar sobrecargados. Hemos configurado
algunos enlaces que le permiten editar los ejemplos usando [Overleaf](https://www.overleaf.com), 
uno de los mejores sitios en línea de LaTeX. Hay otros, por supuesto:  
[Papeeria](https://papeeria.com/) es uno de ellos.

## Ejercicio

Realice la instalación local de LaTeX _o_ cree una cuenta en un servicio de 
LaTeX en línea. Si utiliza una instalación local, necesitará instalar 
un editor; le recomendamos comenzar con TeXworks o TeX Shop (ver la lista 
más arriba), y luego probar otros editores hasta que _usted_ sepa con cuál 
trabaja mejor en LaTeX.

Será posible [compilar todos nuestros ejercicios en su explorador](help.md), pero queremos 
ayudarle a trabajar con documentos reales, por lo que ahora es un buen momento para que se prepare.
