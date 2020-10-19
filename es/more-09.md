---
lang: "es"
title: "Más sobre: Referencias cruzadas"
---

## Convirtiendo referencias cruzadas en enlaces

Usted puede convertir sus referencias cruzadas en hiperenlaces, usando el paquete `hyperref`.
En la mayoría de los casos, `hyperref` debe ser cargado después de los otros paquetes especificados
en el preámbulo del documento.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Un texto interesante con una referencia~\ref{sec:next}.

\section{El elemento siguiente}
\label{sec:next}

Más texto aquí.
\end{document}
```

Hemos elegido que los enlaces tengan el mismo color que el texto normal; pruebe a quitar
`hidelinks`y vea ¡por qué lo hemos hecho!
