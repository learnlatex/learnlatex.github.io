---
lang: "pt"
title: "Veja mais sobre: Trocando fontes e usando interpretadores Unicode"
toc-anchor-text: "Veja mais sobre: Trocando fontes e usando interpretadores Unicode"
---

## Lua

O interpretador LuaTeX dá acesso a fontes OpenType de forma similar ao XeTeX, e
a maior parte dos casos com o pacote `fontspec` funcionarão igualmente bem com
qualquer dos interpretadores.

No entanto, o LuaTeX também extende o TeX de outras formas, notavelmente
incluindo a linguagem de script Lua.  Isso pode ser usado para programar em um
estilo mais familar para pessoas acostumadas com linguagens de programação
'convencionais'.  O LuaTeX também oferece a possibilidade de acessar o
funcionamento interno do sistema TeX e modificar o funcionamento substituindo
partes dele por código escrito em Lua.

A programação em Lua não é abordada neste curso, mas um exemplo simples para
calcular 2π é mostrado aqui:

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

