<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{pgfplots}
\pgfplotsset{width=7cm,compat=1.17}

\begin{document}

\begin{tikzpicture}
\begin{axis}[]
      % density of Normal distribution:
      \addplot [
            red,
            domain=-3e-3:3e-3,
            samples=201,
      ]
            {exp(-x^2 / (2e-3^2)) / (1e-3 * sqrt(2*pi))};
\end{axis}
\end{tikzpicture}

\end{document}
```
<!-- {% endraw %} -->
