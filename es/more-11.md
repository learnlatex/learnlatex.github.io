---
title: "Más sobre: Formateando el texto: fuentes y espaciado"
---

## Suprimiendo la identación de un único párrafo


If you want to suppress indentation for a single paragraph, you can use
`\noindent`.
This should be _very_ rarely used; most of the time, you should let LaTeX
handle this automatically.

Si quiere suprimir la identación de un único párrafo, puede usar el comado
`\noindent`.
Éste debe ser usado en _muy_ raras ocasiones; la mayor parte del tiempo. debe dejar que LaTeX se encargue automáticamente de ello. 

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un pequeño párrafo, en el que hemos puesto un poco de texto de relleno para
asegurarnos de que pueda ver el ¡efecto buscado!

Un pequeño párrafo, en el que hemos puesto un poco de texto de relleno para
asegurarnos de que pueda ver el ¡efecto buscado!

\noindent  Un pequeño párrafo, en el que hemos puesto un poco de texto de relleno para
asegurarnos de que pueda ver el ¡efecto buscado!
\end{document}
```