---
title: "Bổ sung: Mở rộng LaTeX bằng các gói lệnh và định nghĩa các lệnh mới"
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
có một bàn phím hỗ trợ tiếng Đức. Hơn nữa, để ý rằng tiêu đề mục lục
"_Table of Contents_" đã được chuyển sang tiếng Đức, "_Inhaltsverzeichnis_".

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Chú ý rằng tùy biến là 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.


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

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## Định nghĩa các lệnh mới: Đối số tùy chọn

`\newcommand` cho phép ta định nghĩa lệnh với tối đa 9 đối số. Đối số đầu tiên
có thể là đối số tùy chọn (không bắt buộc).

Nếu ta sử dụng ví dụ từ bài chính, ta có thể tạo một đối số tùy chọn cho màu,
nhận giá trị mặc định là màu xanh.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{xcolor}
\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}
\begin{document}
Something about \kw{apples} and \kw[red]{oranges}.
\end{document}
```

Các đối số tùy chọn được đánh dấu bằng cặp ngoặc vuông `[]`. Nếu không được
người dùng sử dụng, các đối số tùy chọn sẽ nhận giá trị mặc định được khai báo
trong phần định nghĩa.

## `\NewDocumentCommand`

Bắt đầu từ phiên bản LaTeX tháng 10 năm 2020, một hệ thống định nghĩa lệnh mới,
nâng cao hơn, đã được thêm vào LaTeX. Trong các phiên bản LaTeX cũ hơn, hệ thống
này được cung cấp bởi gói `xparse`, và để đảm bảo các ví dụ sau có thể hoạt động
được trong các bản LaTeX cũ, gói này được sử dụng.

Ví dụ sau là cách định nghĩa lệnh `\kw` bằng `\NewDocumentCommand`:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{xparse} % Chỉ cần thiết cho các bản LaTeX cũ
\usepackage{xcolor}
\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}
\begin{document}
Something about \kw{apples} and \kw[red]{oranges}.
\end{document}
```

Giống như `\newcommand`, `\NewDocumentCommand` cũng được theo sau bởi tên lệnh
(trong trường hợp này là `\kw`) và phần thân câu lệnh, với `#1` đến `#9` được
sử dụng cho các đối số. Tuy nhiên, có điểm khác biệt lớn ở cách các đối số được
khai báo.

Không giống ở `\newcommand` mà chỉ có số đối số được khai báo, và chỉ có thể
thêm giá trị mặc định cho đối số đầu tiên, ở `\NewDocumentCommand`, mỗi đối số
được khai báo bằng một ký tự. Vì thế, một lệnh với hai đối số bắt buộc sẽ được
khai báo là `{mm}` thay vì `[2]`. Cách này hơi dài dòng hơn, nhưng nó cho phép
định nghĩa nhiều kiểu lệnh khác nhau, trong đó có cả việc đối số tùy chọn không
nhất thiết phải đứng đầu. Trong ví dụ đơn giản trên, ta đã khai báo rằng đối số
đầu tiên là tùy chọn và có giá trị mặc định là `blue` (`O{blue}`), còn đối số
thứ hai là bắt buộc (`m`).
