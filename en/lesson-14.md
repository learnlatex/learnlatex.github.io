---
title: "Selecting fonts and using Unicode engines"
---


Xe\LaTeX\ example

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}

\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

Lua\LaTeX\ example

```latex
%!TEX lualatex
\newfontfamily\cjkfont{FandolSong-Regular.otf}

\begin{document}

$\pi \approx \directlua{
print('##: ' .. math.pi)
tex.print{math.pi}
}$

\end{document}
```
