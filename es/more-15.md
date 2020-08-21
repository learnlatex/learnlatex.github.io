---
title: "Más sobre: Analizando los errores"
---

## Errores que ocurren al final de los entornos

Algunos entornos (en especial los alineamientos `amsmath` y las tablas `tabularx`)
escanean el cuerpo completo del entorno antes de procesar el contenido. Esto significa que
ningún error en el interior del entorno será indicado en la última línea del mismo. Sin embargo,
como vimos en la lección principal, la información contenida en el mensaje de error debería facilitarnos
la localización exacta del error.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

En este ejemplo, se indica un error en la línea 12:

```
l.12 \end{align}
```
{: .noedit :}

Aunque el verdadero error está en la línea 10, como se muestra en las líneas
de información del error:

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Errores ficticios debidos a errores cometidos con anterioridad

Cuando se utiliza LaTeX de forma interactiva, desde la línea de comando
es posible: parar el proceso al presentarse el primer error con `x`, editar
documento y volver a ejecutar LaTeX. Sin embargo, si se obvian los errores o
si utiliza un editor o un sistema en línea, entonces TeX intentará seguir; esto
sin embargo puede llevar consigo la aparición de nuevos errores.

Así que no se preocupe demasiado del _número_ de errores y concéntrese siempre
en resolver el primer error indicado en la lista.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

El error en este ejemplo es el guion bajo `_` que debe ser escrito como `\_`.

TeX se lo indica correctamente en el _primer_ mensaje de error

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Sin embargo al obviar este error y continuar, TeX sigue ejecutándose y 
añadira `$`en ese punto, de forma que `_` será interpretado, en modo matemático, como
un subíndice. El modo matemático continúa vigente hasta el siguiente símbolo `$` que indica
su final, con lo que el comando `\alpha` es interpretado en modo texto, generando un nuevo 
mensaje de error.

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Errores que no dan lugar a mensajes de error en la línea de comandos

Algunos errores, especialmente los errores que no se detectan hasta que se llega al final
del archivo no darán lugar a mensajes de error, sino a mensajes de alerta.

Si intenta el siguiente ejemplo, usando el servidor CGI de LaTeX, éste le dará un PDF por defecto;
para ver el mensaje de error en la lista de errores añada `%!TeX log`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Texto {\large un poco de texto más grande) texto de tamaño normal?

\end{document}
```

En este ejemplo, el grupo correspondiente al cambio de tamaño de letra ha sido cerrado
con un paréntesis `)`. Este error sólo es detectado al llegar al final del archivo,
cuando TeX se da cuenta de que hay un grupo que no ha sido cerrado. Se indica entonces
la línea en la que el grupo se ha abierto `{`. No se indica el verdadero error, ya que
el paréntesis `)` es interpretado como un "texto normal".
```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5, false);
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>
