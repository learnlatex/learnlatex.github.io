---
title: "Bổ sung: Tham chiếu chéo"
---

## Chuyển các tham chiếu chéo thành các đường dẫn

Bạn có thể chuyển các tham chiếu chéo thành các đường dẫn trong văn bản với gói
`hyperref`. Trong hầu hết các trường hợp, `hyperref` nên là gói lệnh được khai
báo *sau cùng*.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Some exciting text with a reference~\ref{sec:next}.

\section{Next thing}
\label{sec:next}

More text here.
\end{document}
```

Ta đã làm cho các đường dẫn có cùng màu với phần chữ xung quanh, thử bỏ
`hidelinks` để biết tại sao!
