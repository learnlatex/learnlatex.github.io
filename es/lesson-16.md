---
title: "Accediendo a la documentación y buscando ayuda"
---

Existen varias formas de acceder a la documentación de los paquetes y tipos de documento.

## `texdoc`


Si ha instalado una distribution de TeX (_por ejemplo_ TeXLive o MikTeX) y ha incluido
la documentación durante la instalación, podrá acceder a la documentación guardada en 
su ordenador usando el comando `texdoc` en la línea de comandos. Por ejemplo:


`texdoc` < _pkg_ >


le permitirá acceder a la documentación del paquete `<pkg>`. Esta herramienta buscará
la documentación disponible y le mostrará la información de lo que más se aproxima a
su búsqueda. Puede obtener la lista y elegir entre el conjunto de resultados posibles 
utilizando el comando de la siguiente forma:

`texdoc -l` < _pkg_ >


## texdoc.net

Éste es un [sitio web](https://textdoc.net/) que funciona de forma similar al comando `textdoc`. Puede
buscar la documentación disponible tal y como lo haría usando el comando `texdoc -l` 
y elegir entre los resultados obtenidos.

## CTAN (Comprehensive TeX Archive Network)

[CTAN](https://www.ctan.org) es una Red Integral de Achivos de TeX. La mayoría de paquetes de LaTeX se publican
en este sitio web. Puede buscar un paquete y acceder a su documentación.
Normalmente los paquetes se guardan en la dirección `ctan.org/pkg/<pkg-name>`
y puede acceder al archivo README y a la documentación de los paquetes guardados en CTAN
utiliando esta dirección.

## Libros sobre LaTeX

Existen varios libros disponibles que pueden ayudarle a aprendar más sobre LaTeX.
En principio, le será muy útil un manual pensado para principintes, ya que
le dará muchós más detalles de los aspectos abordados aquí. Querrá igualmente
tener acceso a un manual de referencia más detallado y a más recomendaciones.

El equipo de LaTeX dispone de [una lista de libros](https://www.latex-project.org/help/books/)
escritos fundamentalmente por los miembros del equipo. Los más destacados son [Lamport's official
guide](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
y el detallado
[LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Otros libros dedicados al aprendizaje de LaTeX:

- [_Guide to
  LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) de Helmut
  Kopka y Patrick Daly: disponible en ebook
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) de
  Nicola Talbot: disponible de forma gratuita en ebook o en versión impresa de bajo coste.
- [_Using LaTeX to write a PhD
  thesis_](https://www.dickimaw-books.com/latex/thesis/) de
  Nicola Talbot: disponible de forma gratuita en ebook o en versión impresa de bajo coste.
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)
  by Stefan Kottwitz: disponible en ebook y en versión impresa
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) de
  Marc van Dongen: disponible en ebook y en versión impresa

## Obteniendo ayuda

Existen varios forums en línea en los que hacer preguntas sobre LaTeX; quizá el
más popular actualmente es [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Siempre que haga una pregunta, es mejor que primero clarifique su ejemplo: a esto
se le conoce como un "mímimo ejemplo funcional" (MWE, "minimal working exemple"). Esto
no significa que el código funcione (¡si así fuese, usted no haría la pregunta!), sino más
bien que usted ha hecho lo posible por clarificarlo, debe ser completo y conciso. Este último
termino significa mostrar unicamente el contenido necesario para entender el problema.

¿Como hacer un MWE? Normalmente, lo más fácil es empezar por:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

y añadir línea a línea hasta que muestre el problema encontrado. Puede
intentar "recortar" o "reducir" su documento, pero esto puede ser un proceso largo. 

Si necesita texto para mostrar saltos de página y otros efectos, use
paquetes como `lipsum` con el fin de generar párrafos de texto de relleno, 
esto le permitirá mostrar un documento pequeño.

Una de las cosas que debe estar presente es el archivo log; éste es creado por
LaTeX cada vez que se ejecuta. Tiene el mismo nombre que su documento pero con
la extensión `.log`. En función del sistema que utilice, quizás tenga que "mostrar
las extensiones" de los archivos para encontrarlo.
