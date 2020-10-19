---
lang: "vi"
title: "Gõ tiếng Việt trong LaTeX"
next: "extra-01"
---

## Gõ tiếng Việt với pdf{{ site.latex }}

pdfLaTeX mặc định _không_ hỗ trợ tiếng Việt. Để có thể dùng tiếng Việt, bạn cần
phải sử dụng thêm các gói lệnh khác. Có hai gói lệnh thường dùng để hỗ trợ ta
làm việc này, đó là [`vntex`](https://ctan.org/pkg/vntex) và
[`babel`](https://ctan.org/pkg/babel-vietnamese). Nếu bạn đang viết một văn bản
chỉ trong tiếng Việt, bạn nên dùng `vntex`, còn nếu văn bản của bạn có thể có
nhiều ngôn ngữ khác nhau thì `babel` là lựa chọn phù hợp hơn.

Chú ý rằng `vietnam` hay `vntex` đều _chỉ_ hoạt động tốt ở pdfLaTeX. Ở
XeLaTeX hay LuaLaTeX bạn không nên dùng chúng.

### Sử dụng gói `vntex`

Gói `vntex` bao gồm một gói con là `vietnam`, và bạn có thể sử dụng một trong
hai gói. Điểm khác nhau duy nhất giữa chúng là mặc định thì `vntex` dùng UTF-8
còn `vietnam` dùng VISCII. Tuy nhiên, ta có thể dùng các tùy biến gói để sử dụng
những kiểu mã hóa input (input encoding) khác, như `viscii`, `tcvn` hay `utf8`.
Do đó, `\usepackage{vntex}` và `\usepackage[utf8]{vietnam}` có hiệu lực như
nhau.

Ví dụ sử dụng gói `vietnam`:

```latex
\documentclass{article}
\usepackage[utf8]{vietnam}
\begin{document}
Một dòng chữ tiếng Việt.
\end{document}
```

### Sử dụng gói `babel`

Như ta đã biết ở [một bài trước](more-06), gói `babel` có thể hỗ trợ việc sử
dụng của rất nhiều ngôn ngữ khác nhau, trong đó có cả tiếng Việt. Ta sử dụng tùy
biến `vietnamese` cho việc này.

```latex
\documentclass{article}
\usepackage[vietnamese]{babel}
\begin{document}
Một dòng chữ tiếng Việt.
\end{document}
```

## Sử dụng tiếng Việt với Xe{{ site.latex }} và Lua{{ site.latex }}

XeTeX và LuaTeX hỗ trợ các chữ cái tiếng Việt ngay từ đầu, do đó ta không cần
gói lệnh gì cả.

```latex
%!TEX xelatex
\documentclass{book}
\begin{document}
\chapter{Tiêu đề chương}
Một dòng chữ tiếng Việt.
\end{document}
```

Tuy nhiên, để ý rằng các từ "tự động" trong văn bản vẫn được viết bằng tiếng
Anh. Trong ví dụ trên, ta thấy LaTeX vẫn viết là Chapter 1 thay vì Chương 1. Để
hoàn toàn đưa văn bản của bạn thành một văn bản tiếng Việt, ta cần dùng `babel`,
như đã hướng dẫn ở phần trước:

```latex
%!TEX xelatex
\documentclass{book}
\usepackage[vietnamese]{babel}
\begin{document}
\chapter{Tiêu đề chương}
Một dòng chữ tiếng Việt.
\end{document}
```

## Lưu ý khi dùng `hyperref`

Gói lệnh `hyperref` mặc định không hỗ trợ các ký tự tiếng Việt có dấu. Để gói
này hoạt động trơn tru trong văn bản tiếng Việt của bạn, hãy sử dụng tùy biến
`unicode` cho gói. Ví dụ, chú ý các metadata của văn bản sau (tên PDF,
bookmark).

```latex
\documentclass{article}
\usepackage{vntex}
\usepackage[unicode]{hyperref}
\hypersetup{pdftitle={Tên văn bản PDF}}
\begin{document}
\section{Một tiêu đề mục}
Một dòng chữ tiếng Việt.
\end{document}
```
