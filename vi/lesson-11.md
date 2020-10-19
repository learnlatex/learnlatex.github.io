---
lang: "vi"
title: "Định dạng font chữ và các khoảng cách"
---

## Khoảng cách giữa các đoạn văn

Ta đã biết rằng một dòng trống có công dụng ngắt đoạn trong LaTeX. Dòng đầu tiên
của đoạn văn mới sẽ được lùi đầu dòng một chút. Tuy nhiên, nhiều người không
muốn lùi đầu dòng mà muốn có một khoảng trống nhỏ giữa các đoạn. Ta có thể làm
được điều đó bằng gói `parskip`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum}
\begin{document}
\lipsum
\end{document}
```

## Buộc xuống dòng

Trong hầu hết các trường hợp, ta không nên buộc LaTeX phải ngắt dòng giữa đoạn
văn; thay vào đó ta nên dùng một dòng trống để sang một đoạn văn mới.

Tuy nhiên có một số trường hợp ta dùng `\\` để ngắt dòng mới mà không cần phải
bắt đầu một đoạn văn mới:

- Tại điểm cuối của một hàng trong bảng
- Trong môi trường `center`
- Ngắt dòng khi viết thơ (với môi trường `verse`)

Hầu như trong mọi trường hợp, nếu bạn không ở trong những tình huống trên, bạn
_không nên_ dùng `\\`.

## Thêm một khoảng trống có kích thước cụ thể

Ta có thể thêm một khoảng trống nhỏ (bằng khoảng nửa một ký tự trống thông
thường) bằng `\,`. Trong chế độ toán, ta còn có các lệnh khác như `\.`, `\:` hay
`\;`, hay thậm chí `\!` sẽ tạo ra một khoảng trống có "độ rộng âm".

Trong số ít trường hợp, ví dụ khi ta tạo trang bìa, ta cần phải thêm những
khoảng trống có kích thước cụ thể. Ta có thể dùng `\hspace` (khoảng trống theo
chiều ngang) và `\vspace` (khoảng trống theo chiều dọc).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some text \hspace{1cm} more text.

\vspace{10cm}

Even more text.
\end{document}
```

## Định dạng các chữ một cách cụ thể

Trong [một bài trước](lesson-03), ta thấy rằng trong hầu hết trường hợp các
markup logic nên được sử dụng. Tuy nhiên đôi khi ta muốn làm cho chữ đậm,
nghiêng hay đổi font chữ thành monospace, v.v... Có hai loại câu lệnh khác nhau
để thực hiện điều này: một loại được dùng cho các đoạn chữ ngắn, loại kia được
dùng cho các đoạn chữ dài hơn.

Cho các đoạn chữ ngắn, ta dùng `\textbf` (chữ đậm), `\textit` (chữ nghiêng),
`\textrm` (chữ thẳng), `\textsf` (chữ theo font sans), `\texttt` (chữ theo font
monospace) và `\textsc` (chữ theo font small-caps).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Let's have some font fun: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

Cho các đoạn dài hơn, ta dùng một lệnh thay đổi setup của font. `\bfseries` hay
`\itshape` là các ví dụ. Ta cần đưa đoạn chữ vào trong một _nhóm_ để ngăn việc
thay đổi setup này ảnh hưởng đến phần sau của văn bản. Các môi trường trong
LaTeX đều là các nhóm khác nhau; mỗi ô bảng cũng là một nhóm; hay ta có thể dùng
`{...}` để tạo ra một nhóm cụ thể.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

{\itshape

This text is italic.

So it this: the effect is not limited to a paragraph.

}
\end{document}
```

Ta có thể thay đổi cỡ chữ theo cách tương tự. Các câu lệnh thường gặp là
`\huge` (chữ rất to), `\large` (chữ to), `\normalsize` (cỡ chữ mặc định),
`\small` (chữ nhỏ) và `\footnotesize` (chữ nhỏ hơn). Chúng sẽ thay đổi cỡ chữ
một cách tương đối theo cỡ chữ mặc định của văn bản; nói cách khác `\small` khi
bạn dùng tùy biến `12pt` cho lớp văn bản sẽ lớn hơn `\small` khi bạn dùng tùy
biến `10pt`. Chú ý rằng ta cần phải kết thúc một đoạn văn _trước_ khi chuyển
cỡ chữ lại như bình thường &ndash; bạn có thể xem lệnh `\par` dùng để kết thúc
đoạn (khá tương đương với một dòng trống) được dùng ở ví dụ sau.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

\begin{center}
{\itshape\large Some text\par}
Normal text
{\bfseries\small Much smaller text\par}
\end{center}

\end{document}
```

## Bài tập

Thử thao tác với việc định dạng chữ. Thêm môi trường `titlepage` và thử thêm
các khoảng trống có kích thước khác nhau và thay đổi kiểu chữ. Điều gì xảy ra
khi ta lồng các lệnh đổi kiểu chữ với nhau? Điều này khác trong chế độ toán ra
sao?

Điều gì xảy ra nếu bạn thay đổi cỡ chữ một đoạn văn dài (thử với `\tiny` (rất
nhỏ) rồi thử với `\huge`) nhưng không dùng `\par` khi kết thúc nhóm?
