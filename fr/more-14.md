---
title: "More on: Selecting fonts and using Unicode engines"
---




## Lua

The LuaTeX engine provides access to OpenType fonts in a similar way
to XeTeX, and most uses of the `fontspec` package work equally well
with either engine.

LuaTeX also extends TeX in other ways, notably by embedding the Lua
scripting language. This may be used for programming in a style more
familiar to people used to ‘mainstream’ programming languages. It also
offers the possibility to access inner workings of the TeX system and
modify the behaviour by substituting new code written in Lua.

Lua programming is not covered by this course but a simple example to
calculate 2π is shown here.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

