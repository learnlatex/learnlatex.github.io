---
lang: "es"
title: "Citas y referencias bibliográficas"
---
<script>
preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

## Bases de datos de referencias bibliográficas

En lo que respecta a las citas bibliográficas, aunque usted puede incluir las 
referencias de sus fuentes directamente, normalmente tomará esta información de uno
o más archivos externos. Esos archivos, son bases de datos de referencias que contienen
información en un formato de fácil tratamiento. Usar una o más bases de datos de 
referencias le permite reutilizar la información y le evita el tener que añadirla a mano.

A las bases de datos de referencias bibliográficas se les llama normalmente "archivos 
BibTeX" y tienen la extensión `.bib`. Contienen uno a más registros, uno por cada referencia
y en cada registro hay una serie de campos. Veamos un ejemplo.

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->

El primero es un registro de un artículo y el segundo de un libro; son de lejos los tipos 
de registro más comunes. Cada registro de la base de datos comienza con el símbolo `@` 
y todas las informaciones relacionadas con él van entre llaves.

Los diferentes campos necesarios son dados utilizando un formato de palabras clave, salvo
el primer campo, que corresponde a lo que se conoce como la "clave": el "nombre" del registro.
Como clave de registro puede utilizar lo que quiera, ya que es sólo una clave, pero aquí
hemos elegido usar el nombre de uno de los autores y el año: comúnmente se hace esta elección.

Los campos que necesite especificar dependerán del tipo de registro, pero la mayoría de
ellos son bastante obvios. Puede que haya notado que en el campo `author`, cada autor está 
separado por la partícula `and`. Esto es _esential_: el archivo _final_ necesita conocer quién
es cada uno de los autores. Puede que haya notado igualmente que en el título del artículo,
algunas partes están entre llaves; éstas se utilizan para evitar que se les aplique un cambio
de mayúsculas o minúsculas.

Editar manualmente los archivos `.bib` es bastante tedioso, por ello la mayoría de la gente
utiliza un editor específico. [JabRef](https://www.jabref.org) es ampliamente utilizado y es 
multiplataforma, pero hay otras aplicaciones disponibles.
Si la referencia contiene un DOI (Identificador de Objeto Digital), puede que quiera probar
a usar [doi2bib](https://doi2bib.org) para obtener fácilmente el registro BibTeX. Pero antes
¡asegúrese de disponer de la información correcta!

Aquí, usaremos para los ejemplos que siguen la base de datos simple 
que hemos definido más arriba: la hemos "guardado" con el nombre de 
`learnlatex.bib`.

## Transfiriendo información desde una base de datos

Para que la información bibliográfica sea transmitida a su documento, hay 
que seguir tres etapas. En primer lugar, use LaTeX para compilar su documento,
esta etapa creará un archivo con la lista de las referencias citadas en su
documento. En segundo lugar, ejecute un programa que lea la información de la
base de datos, seleccione las que usted use y las ordene. En último lugar, 
vuelva a compilar su documento, de esta forma LaTeX podrá usar la información
obtenida para poner las referencias a sus citas. Normalmente, necesitará compilar
al menos dos veces para obtener todas las referencias de su documento.

Para llevar a cabo la segunda etapa, existen dos sistemas ampliamente utilizados:
BibTex y Biber. Biber se usa siempre junto con un paquete de LaTeX llamado `biblatex`, 
mientras que BibTeX puede usarse sin que ser acompañado de ningún paquete o junto 
con el paquete `natbib`. 

Ejecutar una segunda herramienta, además de LaTeX, se lleva a cabo de diferentes maneras
en función del editor utilizado. En el caso de nuestros ejemplos en línea, disponemos de
una serie de scripts que se ejecutan "en segundo plano" y que lo hacen todo de una vez.
Puede que su editor tenga una opción del tipo "herramientas de usuario", o puede elegir
ejecutar BibTex o Biber usted mismo entre dos compilaciones de LaTeX.

El formato de las citas y referecias es independiente de su base de datos BibTeX y
se configura con lo que se conoce como un "estilo". Veremos que esto funciona de forma
ligeramente diferente en `natbib` y en `biblatex`, pero básicamente la idea principal es 
la misma: podemos elegir como se presentan las citas.

## El proceso de trabajo con `natbib`

Aunque es posible añadir citas en un documento de LaTeX sin cargar ningún 
paquete, lo que podrá hacer es bastante limitado. En lugar de ello, usaremos el paquete
`natbib` que permite crear diferentes tipos de citas y dispone de muchos
estilos posibles.

La estructura básica de una entrada se muestra en este ejemplo:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}
La demostración matemática es de \citet{Graham1995}, mientras que
hay un poco de Química en \citet{Thomas2008}.

Un par de citas entre paréntesis: \citep{Graham1995}
and then \citep[p.~56]{Thomas2008}.

\citep[Ver][pp.~45--48]{Graham1995}

Junto con \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

Puede ver que podemos citar los registros de una base de datos a partir de sus claves
de registro. El paquete `natbib` dispone de dos estilos de citas: las citas textuales y 
las citas entre paréntesis, `\citet` y `\citep`, respectivamente. El estilo de referencia
se selecciona en la línea `\bibliographystyle`; en nuestro ejemplo es el estilo `plainnat`.
La bibliografía es añadida gracias a la línea `\bibliography` que toma como argumento
la(s) base(s) de datos usada(s); si son varias, sus nombres son separados por comas.

Se puede añadir una referencia a la(s) página(s) de un registro, utilizando un argumento
opcional. Si damos dos argumentos opcionales, el primero se situará delante de la etiqueta
de la cita como una pequeña nota y el segundo irá tras la etiqueta como una referencia de 
página(s).

La configuración de nuestro ejemplo utiliza el estilo autor-año, pero podemos
hacer uso de las citas enumeradas. Esto se consigue añadiendo la opción `numbers` en la
línea correspondiente a `natbib`.

## El proceso de trabajo con `biblatex`

El paquete `biblatex` funciona de una forma ligeramente diferente que `natbib`, ya
que aunque las citas aparecen en el cuerpo del documento, la(s) base(s) de datos se 
selecciona(n) en el preámbulo. Existen algunos comandos para hacer esto.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % archivo con información de las referencias

\begin{document}
La demostración matemática es de \autocite{Graham1995}.

Algunos ejemplos de citas más complejas: \parencite{Graham1995} o
\textcite{Thomas2008} o posiblemente \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[Ver][45-48]{Graham1995}

Together \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

Note que `\addbibresource` _necesita_ conocer el nombre completo de la base de datos,
a diferencia de lo que ocurría con `natbib`, donde habíamos omitido la extension `.bib` al
usar `\bibliography`. Note igualmente que `biblatex` usa nombres más largos para
los comandos de citas, pero es más fácil adivinar cuál es su uso.

Al igual que antes, se puede añadir un pequeño texto antes y después de la cita 
usando los argumentos opcionales. Note que ahora, no se necesitan los prefijos
`p.~` o `pp.~` para citar las páginas, `biblatex` añade automáticamente
el prefijo adecuado.

En `biblatex`, el estilo de referencia es seleccionado al cargar el paquete. En este
ejemplo hemos usado `authoryear`, pero exite también un estilo `numeric` y muchos
otros estilos están disponibles.

## Ejercicios

Experimente con los ejemplos de `natbib` y `biblatex`. Con `natbib` necesitará
ejecutar LaTeX, luego BibTeX, LaTeX y de nuevo LaTeX; con `biblatex` deberá ejecutar LaTeX,
Biber y LaTeX. Investigue como hacer esto en su editor, o intente con Overleaf y
su editor de LaTeX en línea.

Vea lo que ocurre cuando crea nuevos registros en la base de datos y nuevas citas
en su documento. Añada una cita que no esté en su base de datos para ver lo que pasa.
Pruebe la opción `numeric` con ambos paquetes.
