---
title: "Bổ sung: Định dạng font chữ và các khoảng cách"
---

## Hủy việc lùi đầu dòng đối với một đoạn văn bất kỳ

Nếu bạn muốn tắt chức năng lùi đầu dòng đối với một đoạn văn nào đó, bạn có thể
dùng `\noindent`. Chú ý rằng lệnh này không nên được sử dụng trong _hầu hết_
các trường hợp &ndash; bạn nên để LaTeX xử lý chúng một cách tự động.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
One small paragraph, which we have filled out a little to make sure you can
see the effect here!

One small paragraph, which we have filled out a little to make sure you can
see the effect here!

\noindent  One small paragraph, which we have filled out a little to make sure
you can see the effect here!
\end{document}
```
