---
title: Selecting fonts and using Unicode engines
---


XeLaTeX example

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}

\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

