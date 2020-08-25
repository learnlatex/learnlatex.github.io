---
title: "Bổ sung: Mở rộng LaTeX bằng các gói lệnh"
---

## Khai báo nhiều gói lệnh khác nhau

Lệnh `\usepackage` nhận một danh sách các gói lệnh phân cách bằng dấu phẩy, do
đó bạn có thể khai báo nhiều gói chỉ bằng một lệnh:
`\usepackage{color,graphicx}`. Nếu bạn cho thêm tùy biến vào `\usepackage`, tùy
biến này sẽ được áp dụng cho tất cả các gói lệnh trong danh sách này.

## Gói `babel`

Ta đã xét gói `babel` trong [bài chính](lesson-06) như một cách để chọn những
quy tắc hyphenation khác nhau. Tuy nhiên, gói này có thể làm nhiều hơn vậy, phụ
thuộc vào ngôn ngữ được sử dụng. Ví dụ, trong tiếng Đức, gói này cung cấp những
công cụ để tạo ra 'soft' hyphen, cũng như khả năng gõ các umlauts mà không cần
có một bàn phím hỗ trợ tiếng Đức.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Chú ý rằng tùy biến là 'ngerman'

\begin{document}

H"ohe

\end{document}
```

Những ngôn ngữ khác sẽ có những thay đổi khác. Ví dụ, trong tiếng Pháp truyền
thống, có một dấu cách trước một số dấu câu như dấu chấm hỏi hay dấu hai chấm,
và dấu cách này sẽ được thêm tự động nếu bạn khai báo `babel` với lựa chọn
`french`.

## Tùy biến global

Đôi khi bạn muốn một tùy biến được áp dụng vào tất cả các gói lệnh bạn đã sử
dụng. Điều này có thể được thực hiện bằng cách đưa tùy biến này vào
`\documentclass`. Do đó ta có thể dùng

```latex
\documentclass[ngerman]{article} % Chú ý rằng tùy biến là 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

H"ohe

\end{document}
```
