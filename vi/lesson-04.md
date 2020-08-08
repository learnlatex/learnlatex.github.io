---
title: "Cấu trúc logic"
---

LaTeX cho ta nhiều cách để ta quan tâm đến cấu trúc logic trong văn bản, cũng
như khả năng trực tiếp điều chỉnh thiết kế văn bản. Trong hầu hết các trường
hợp, ta nên dùng những phương pháp để quan tâm tới cấu trúc trong văn bản, vì
nó giúp ta có thể chỉnh sửa thiết kế văn bản khi cần một cách dễ dàng.

## Ví dụ đầu tiên

Ta sẽ bắt đầu với một ví dụ cho thấy sự khác biệt giữa một trong những câu lệnh
markup hay dùng nhất trong LaTeX, `\emph`, với việc chỉ đơn thuần làm chữ
nghiêng. (Làm nghiêng chữ là một cách thông dụng để nhấn mạnh một phần của văn
bản.)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some text with \emph{emphasis and \emph{nested} content}.

Some text in \textit{italic and \textit{nested} content}.
\end{document}
```

Bạn có thể đoán được là `\textit` là một câu lệnh để làm cho chữ nghiêng, tuy
nhiên nó _luôn_ làm cho chữ nghiêng, vì thế nó hoạt động không tốt khi bạn lồng
các câu lệnh này với nhau. Hãy xem cách `\emph` hoạt động khi được lồng vào
nhau. Cũng có một số chỗ mà việc nhấn mạnh không có nghĩa là làm chữ nghiêng; ví
dụ, trong những văn bản trình chiếu (presentation), ta thường dùng màu sắc để
nhấn mạnh một phần văn bản. Với các markup logic này, ta không phải lo về những
vấn đề như vậy trong phần thân văn bản.

Ta sẽ có một hướng dẫn chi tiết hơn vào [phần sau](lesson-11), nhưng bây giờ ta
sẽ thêm `\textbf` vào những câu lệnh ta biết: câu lệnh này **tô đậm** chữ trong
văn bản.

## Các câu lệnh liên quan đến các phần của văn bản

Có lẽ bạn đã từng sử dụng một trình soạn thảo văn bản, và bạn thường bắt đầu một
phần mới bằng việc gõ đề mục và làm cho cái đề mục này có cỡ chữ to hơn và có
kiểu chữ đậm, v.v..., rồi tách nó với các dòng khác bằng những dòng trống. Trong
LaTeX, việc dùng những markup logic thường _dễ hơn_ việc tự căn chỉnh format
"bằng tay": ta chỉ cần dùng câu lệnh `\section`. Tất cả những thứ liên quan đến
thiết kế, ví dụ như font, cỡ chữ, các khoảng cách với các phần xung quanh, 
v.v... đều được LaTeX lo.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.

\section{Second section}

Text of the second section.

\end{document}
```

Sử dụng thiết lập mặc định với lớp văn bản `article`, LaTeX đánh số các tên đề
mục và các "đề mục con", cũng như in các đề mục với kiểu chữ đậm. Ta sẽ nói về
việc thay đổi thiết kế [trong bài sau](lesson-05).

LaTeX có thể chia một văn bản thành những cấp độ phần khác nhau

- `\chapter` (chương) (nhưng ta cần `\documentclass{book}` hoặc
  `\documentclass{report}` cho câu lệnh này)
- `\section` (phần)
- `\subsection` (phần con)
- `\subsubsection` (phần "cháu")

Ta có thể đi sâu thêm nữa, câu lệnh tiếp theo trong dãy là `\paragraph`, nhưng
thường thì như vậy là hơi quá nhiều cấp độ trong các phần văn bản. (Chú ý rằng
`\paragraph`, mặc dù dịch từ tiếng Anh là "đoạn", *không* phải là một cách để
bắt đầu một đoạn văn mới!)

Bạn có thể nghĩ tới việc đặt tên văn bản. Có những câu lệnh đặc biệt cho việc
này, nhưng vì không phải văn bản nào cũng dùng nó, nên ta sẽ nói về nó trong
[bài bổ sung](more-04).

## Danh sách

Một chỗ nữa mà bạn cần đến các markup logic là khi bạn viết các danh sách. Có
hai loại danh sách chính có sẵn trong LaTeX:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Ordered % Có đánh số
\begin{enumerate}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{enumerate}

Unordered % Không đánh số
\begin{itemize}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{itemize}

\end{document}
```

Chú ý rằng ta dùng `\item` để bắt đầu mỗi thành phần trong danh sách.

## Bài tập

Thử một vài cấp độ câu lệnh cho đề mục trong văn bản. Thử dùng 
`\documentclass{report}` thay vì `\documentclass{article}` và thêm các câu lệnh
`\chapter`. Chúng cho kết quả ra sao? Thử dùng `\paragraph` và thậm chí cả
`\subparagraph` để xem chúng trông như thế nào; mặc định chúng *không* được đánh
số.

Thử làm một vài danh sách, lồng các danh sách. Khi lồng thì bạn thấy các ký tự
đánh dấu các thành phần của danh sách (số đếm nếu là danh sách đánh số và
chấm/gạch đầu dòng nếu là danh sách không đánh số) thay đổi như thế nào? Chú ý
rằng bạn chỉ có thể lồng danh sách tới tối đa là 4 cấp độ trong LaTeX; dù sao
việc lồng quá nhiều cấp độ cũng không phải là điều tốt.
