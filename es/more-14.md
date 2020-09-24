---
title: "Más sobre: Seleccionando fuentes y usando los motores Unicode"
---

## Lua

El motor LuaTeX permite el uso de las fuentes OpenType de forma similar
a XeTeX y la mayoría del paquete `fontspec` funciona igualmente con
ambos paquetes.

LuaTeX amplia las posibilidades de LaTeX de otros modos, en especial integrando
el leguaje de programación Lua. Éste puede ser usado para programar en un
estilo más familiar, como el usado por los lenguages de programación más comunes.
Ofrece igualmente la posibilidad de acceder a los procesos internos del sistema
TeX y modificar su comportamiento, sustituyéndos por nuevo código escrito en Lua.

La programación en Lua no será abordada en este curso, sólo mostramos a continuación
un ejemplo para calcular 2π:

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

