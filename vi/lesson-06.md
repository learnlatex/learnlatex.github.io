---
title: "Mở rộng LaTeX bằng các gói lệnh và định nghĩa các lệnh mới"
---

Sau khi khai báo lớp văn bản, trong phần khai báo bạn có thể thay đổi các chức
năng trong LaTeX bằng việc thêm một hoặc nhiều *gói lệnh*. Những gói lệnh này
có thể

- Thay đổi cách hoạt động của một số phần của LaTeX
- Thêm các câu lệnh mới vào văn bản
- Thay đổi thiết kế văn bản

## Thay đổi cách hoạt động của LaTeX

Khi nói về khả năng tùy chỉnh từ người dùng thì phần lõi của LaTeX khá bị giới
hạn. Do đó, một số gói lệnh tăng cường được viết để xử lý những vấn đề này. Đầu
tiên là thay đổi cách LaTeX hoạt động đối với một ngôn ngữ cụ thể nào đó. Các
ngôn ngữ khác nhau có các quy tắc khác nhau, do đó ta cần phải cho LaTeX biết
cần dùng ngôn ngữ nào. Điều này được xử lý bởi gói `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % Để có được hyphenation

\begin{document}

This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.
This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.

\end{document}
```

Thử bỏ dấu chú thích ở dòng khai báo `babel` và xem sự thay đổi trong output.
(Mặc định LaTeX hiểu là cần phải dùng các quy tắc của tiếng Anh -- Mỹ. Dùng
lựa chọn `vietnamese` nếu bạn muốn dùng tiếng Việt, xem thêm ở
[bài đặc biệt](language-01).)

Ngoài hyphenation (gạch nối các âm tiết trong từ), `babel` còn có thể làm được
nhiều thứ khác. Ta sẽ xét chúng trong [bài bổ sung](more-06).

## Thay đổi thiết kế văn bản

Việc thay đổi một vài định dạng của văn bản mà không phụ thuộc vào lớp văn bản
là tương đối có ích. Một trong những định dạng cần thay đổi nhất đó là lề trang
giấy. Ta đã dùng gói `geometry` trong ví dụ trên, nhưng bây giờ ta hãy cùng xem
một ví dụ dành riêng cho việc thay đổi kích thước lề.

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Hey world!

This is a first document.


% ================
\chapter{Chapter One}
Introduction to the first chapter.


\section{Title of the first section}
Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.


% ================
\section{Second section}

Text of the second section.

\end{document}
```

Thử bỏ dòng khai báo `geometry` đi và xem sự thay đổi trong output.

## Thêm những chức năng mới

Một trong những điểm mạnh của LaTeX đó là bạn có thể chọn từ hàng ngàn gói lệnh,
trong đó có nhiều gói lệnh để viết các công thức toán học, để nhập các đường
dẫn trong văn bản, để xử lý các vấn đề với màu, v.v... Ta sẽ đi qua một vài gói
lệnh thông dụng nhất trong các bài sau.

## Định nghĩa các lệnh mới

Đôi khi bạn cần định nghĩa một vài lệnh đặc biệt cho văn bản của mình, ví dụ khi
ta cần một chức năng không có sẵn trong các gói lệnh, hay bạn cần lặp lại một
đoạn chữ nhiều lần.

Ví dụ sau là một cách định nghĩa một lệnh để chèn keyword dưới một kiểu chữ nhất
định nào đó.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\newcommand\kw[1]{\textbf{\itshape #1}}
\begin{document}
Something about \kw{apples} and \kw{oranges}.
\end{document}
```

Trong phần định nghĩa lệnh, `[1]` khai báo số đối số của lệnh (1 đối số trong ví
dụ này), còn `#1` ký hiệu đối số đầu tiên của lệnh (`apples` hay
`oranges` trong ví dụ này). Bạn có thể dùng tới 9 đối số cho lệnh của mình,
nhưng thông thường một lệnh chỉ nên có nhiều nhất một đối số mà thôi.

Định nghĩa các lệnh mới không chỉ giúp ta hoàn thành văn bản với ít đánh máy
hơn, nó còn giúp ta phân biệt thông tin về các kiểu được sử dụng trong văn bản.
Nếu bạn muốn thay đổi kiểu chữ cho các keyword, thay vì phải sửa cả văn bản, bạn
chỉ cần sửa định nghĩa của lệnh. Ở ví dụ sau, ta đã sử dụng gói `xcolor` để thêm
màu chữ, và thay kiểu chữ đậm bằng chữ màu xanh:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{xcolor}
\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}
\begin{document}
Something about \kw{apples} and \kw{oranges}.
\end{document}
```

Tuy nhiên, chú ý rằng việc định nghĩa hay sử dụng quá nhiều câu lệnh có thể làm
cho mã nguồn của văn bản khó đọc và khó hiểu hơn. Do đó, ta cần cẩn thận khi
định nghĩa thêm các câu lệnh mới như vậy.

## Bài tập

Thử viết một vài đoạn văn theo một ngôn ngữ khác tiếng Anh và xem cách `babel`
thay đổi các quy tắc.

Thử thay đổi kích thước lề trong ví dụ `geometry`. Bạn có thể thiết lập các kích
thước lề trên, dưới, trái, phải một cách riêng biệt bằng các tùy biến `top`,
`bottom`, `left` và `right` theo thứ tự ấy. Chú ý rằng khi bạn cho nhiều tùy
biến vào một gói lệnh hoặc một lớp văn bản, bạn phân tách các tùy biến bằng dấu
phẩy.

Thử khai báo gói lệnh `lipsum` và thêm lệnh `\lipsum` vào văn bản. Bạn sẽ thấy
tại sao gói lệnh này rất hữu ích trong việc viết các mã ví dụ trong LaTeX.

Thử sửa định nghĩa của lệnh `\kw` để thay đổi kiểu chữ của keyword thành một
kiểu khác.
