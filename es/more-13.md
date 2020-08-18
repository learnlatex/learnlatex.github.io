---
title: "Más sobre: Estructurando documentos largos"
---

## Realizando un índice de materias

En función del tipo de documento que esté escribiendo, puede que quiera incluir
un índice de materias. Hacerlo es casi como realizar una bibliografía, ya que se usan
archivos auxiliares. Afortunadamente, todo esto está automatizado en el paquete
`\imakeidx`. Necesitaremos hacer uso de tres instrucciones de LaTeX:

- El comando `\makeindex` que permite la creación de un índice de materias.
- El comando `\index` que etiqueta cada una de las entradas del índice de materias.
- El comando `\printindex` que hace que se imprima el índice de materias.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Algo de texto sobre Foo\index{foo}.
Más texto\index{baz!bar}.
Aún más texto\index{alpha@$\alpha$}.
Más texto sobre una parte diferente de baz\index{baz!wibble}.

\clearpage
Algo de texto sobre Foo\index{foo} de nuevo, en una página diferente.
Aún más texto\index{beta@$\beta$}.
Aún más texto\index{gamma@$\gamma$}.
\printindex
\end{document}
```

Hemos mostrado, en este ejemplo, dos tipos de indexación: la subdivisión, usando `!` y
el poder indicar algo diferente del "texto de la etiqueta" en la entrada del índice, usando `@`.
Existe una gran posibilidad de personalización del índice de materias; experimente
con el ejemplo para ver cómo funciona.
