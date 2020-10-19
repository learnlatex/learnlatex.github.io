---
lang: "vi"
title: "Tham chiếu chéo"
---

## Cách hoạt động của `\label` và `\ref`

Khi ta viết một văn bản dài, ta có thể cần phải thêm các tham chiếu chéo tới các
thành phần được đánh số như hình, bảng hay công thức toán học. LaTeX có khả năng
cho ta con số chính xác khi tham chiếu, ta chỉ cần đưa ra đoạn mã hợp lý. Để bảo
LaTeX "nhớ" một vị trí trong văn bản, ta cần phải đánh dấu nó, và trong các vị
trí khác, ta tạo tham chiếu đén vị trí đánh dấu này.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material for the first section.


\subsection{Subsection of the first section}
\label{subsec:labelone}

Text of material for the first subsection.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

In subsection~\ref{subsec:labelone} is equation~\ref{eq:labeltwo}.
\end{document}
```

Có hai câu lệnh `\label{...}`, một cái đi sau lệnh chỉ mục và một cái nằm trong
môi trường `equation`. Chúng được tham chiếu chéo với các câu lệnh `\ref` trong
câu cuối cùng. Khi bạn chạy LaTeX, trình biên dịch sẽ lưu trữ các thông tin về
các chỗ đánh dấu vào một tệp aux. Đối với `\label{subsec:labelone}`, LaTeX hiểu
đó là một phần con (subsection) và nó sẽ lưu trữ số thứ tự của phần con này. Đối
với `\label{eq:labeltwo}`, LaTeX hiểu rằng môi trường đang được sử dụng gần nhất
là một công thức toán, do đó nó sẽ lưu trữ số thứ tự của công thức toán đấy. Khi
bạn cần thêm một tham chiếu, LaTeX sẽ lấy thông tin từ tệp aux này.

Tiền tố `subsec:` và `eq:` không được sử dụng bởi LaTeX, thay vì thế nó chỉ lưu
trữ thông tin về thứ vừa được xử lý. Tuy nhiên, khi bạn viết, những nhãn đánh
dấu kiểu này giúp bạn nhớ được nhãn dán này có ý nghĩa là gì.

Bạn có thể thấy các tham chiếu trong tệp PDF dưới dạng hai dấu hỏi chấm in đậm
**??**. Điều này là do cách tệp aux hoạt động. Lần đầu tiên biên dịch, các chỗ
đánh dấu chưa được lưu lại thông tin, do đó LaTeX không biết phải cho số nào vào
và nó dùng **??** thay vì thế. Bạn chỉ cần chạy LaTeX thêm một lần nữa là được.
(Thông thường khi viết bạn vẫn phải chạy LaTeX nhiều lần, do đó trên thực tế đây
không phải là một vấn đề quá lớn.)

Chú ý việc sử dụng của `~` ở trước các tham chiếu. Ta không muốn "subsection" và
số tham chiếu nằm ở hai dòng khác nhau, do đó ta cần đặt `~` để bảo LaTeX không
được xuống dòng tại điểm này.

## Đặt `\label` ở chỗ nào?

Lệnh `\label` luôn lưu trữ thông tin về thành phần được đánh số trước đó. Do đó
`\label` cần phải đi *sau* thành phần mà bạn muốn đánh dấu. Ví dụ, khi bạn tạo
các thành phần linh động thì `\label` phải đi _sau_ hoặc nằm trong lệnh
`\caption`, nhưng phải nằm trong môi trường linh động.

## Bài tập

Thử thêm một vài phần được đánh dấu (các đề mục, các danh sách được đánh số,...)
vào một văn bản test và tìm hiểu xem cần bao nhiêu lần chạy LaTeX để làm cho
lệnh `\label` hoạt động tốt.

Thử thêm một vài thành phần linh động và xem điều gì sẽ xảy ra nếu bạn dùng
`\label` _trước_ `\caption`; bạn có thể đoán kết quả không?

Điều gì sẽ xảy ra nếu bạn đặt lệnh `\label` để đánh dấu một công thức toán ở
*sau* `\end{equation}`?
