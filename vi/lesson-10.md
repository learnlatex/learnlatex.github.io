---
title: "Các công thức toán học"
---

## Chế độ toán (math mode)

Bạn có thể thêm các công thức toán dưới một chế độ được gọi là *chế độ toán*
(math mode). Trong chế độ này, các khoảng trống bị bỏ qua và khoảng trống phù
hợp giữa các ký tự được điền vào (trong hầu hết các trường hợp). Có hai loại
chế độ toán: inline cho các công thức "trên dòng" và display cho các công thức
có một dòng riêng cho nó.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A sentence with inline mathematics: $y = mx + c$. % Inline

A second paragraph containing display maths
\[
  y = mx + c % display
\]
See how the paragraph continues after the display.
\end{document}
```

Ta có thể thấy các câu lệnh toán "giống LaTeX" xuất hiện ở nhiều chỗ khác, ví dụ
như thư viện MathJax để hiện công thức toán học trên các trang web. Những thư
viện như vậy thường thực hiện những thay đổi nhỏ đối với cú pháp của LaTeX vì
nó không hề dùng LaTeX! Các ví dụ ở đây đều dùng LaTeX "chính xác", do đó nếu
bạn thấy cú pháp hơi khác ở những chỗ khác, có thể những chỗ đó đang dùng một
thứ không phải LaTeX.

## Chế độ toán inline và các ký hiệu toán học

Như bạn thấy ở trên, chế độ toán inline được đánh dấu bằng một cặp ký tự dollar
(`$...$`). Ta cũng có thể dùng ký hiệu `\(...\)`. Các công thức đơn giản được
nhập mà không có lệnh đặc biệt nào, và bạn có thể thấy các khoảng trống được
điền vào một cách hợp lý và các biến được viết nghiêng.

Chế độ toán inline hạn chế kích thước quá lớn theo chiều dọc để công thức không
ảnh hưởng quá nhiều đến sự cách dòng của đoạn văn.

Chú ý rằng _tất cả_ các công thức toán nên được đưa vào chế độ toán, kể cả khi
chúng chỉ là những ký tự đơn lẻ. Ví dụ, dùng `... $2$ ...` thay vì `... 2 ...`.
Ta cũng nên để ý các ký tự đặc biệt của chế độ toán khi copy từ các chỗ khác vào
tệp của mình, ví dụ ký hiệu dollar `$` phải được chuyển thành `\$`.

Ta có thể dễ dàng thêm superscripts như số mũ hay subscripts như số chỉ, các số
này được đánh dấu bằng `^` và `_` tương ứng.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Superscripts $a^{b}$ and subscripts $a_{b}$.
\end{document}
```

(Bạn có thể thấy các ví dụ mà những superscript hay subscript đơn giản được nhập
vào mà không có cặp ngoặc nhọn, nhưng cú pháp đó không phải là cú pháp "chính
thức" và có thể hoạt động không theo ý bạn; do đó luôn dùng cặp ngoặc nhọn.)

Có *rất nhiều* các câu lệnh toán học. Một vài lệnh khá đơn giản như `\sin` hay
`\log` hay `\theta`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some mathematics: $y = 2 \sin \theta^{2}$.
\end{document}
```

Ta không thể đưa ra tất cả các câu lệnh toán LaTeX ở đây, nhưng có nhiều nguồn
trên Internet cho ta một danh sách tương đối đầy đủ. Khi bạn muốn biết lệnh
LaTeX tương ứng cho một ký hiệu nào đó, bạn có thể dùng công cụ
[Detexify](https://personaljournal.ca/paulsutton/detexify).

## Chế độ toán display

Tất cả các lệnh hoạt động tốt trong chế độ toán inline đều sử dụng được trong
chế độ display. Các công thức display được căn giữa mặc định và được hiểu là một
phần của đoạn văn (nói cách khác, đối với LaTeX, không có sự tách đoạn khi nhập
công thức toán). Chú ý rằng các môi trường toán không cho phép đoạn văn kết thúc
ngay trong công thức, do đó bạn không được để dòng trống vào bên trong chế độ
toán display.

Chú ý rằng đoạn văn luôn nên được bắt đầu _trước_ chế độ display, vì thế không
để một dòng trống trước các môi trường toán display. Nếu bạn cần nhiều dòng
trong công thức toán, không dùng các môi trường toán liên tiếp vì khoảng trống
theo chiều dọc sẽ bị lộn xộn; thay vào đó hãy dùng các môi trường như `align` từ
gói `amsmath` (sẽ được nói tới sau).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Chú ý các ký tự `^` và `_` được dùng cho các cận của dấu tích phân. Ngoài ra, ta
đã thêm một khoảng trống giữa `e^{-x^2}` với `dx` bằng `\,`; khoảng trống này để
làm cho nó không giống một phép nhân của `e^{-x^2}` và `dx`.

Ta có thể cần đánh số công thức toán &ndash; điều này có thể được thực hiện với
môi trường `equation`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

Các môi trường được đánh số thứ tự tự động. Con số này có thể là một số đơn giản
như trong ví dụ này, nhưng cũng có thể được bắt đầu bởi số chỉ mục, như (2.5)
cho công thức thứ năm trong phần 2. Điều này phụ thuộc vào lớp văn bản nên sẽ
không được nói đến ở đây.

## Gói `amsmath`

Các ký hiệu toán học rất phong phú, và các công cụ cung cấp bởi phần lõi của
LaTeX không thể hỗ trợ tất cả các ký hiệu trong số đó. Gói `amsmath` phát triển
thêm để có thể hỗ trợ thêm nhiều ký hiệu khác, cũng như cung cấp thêm nhiều môi
trường với các tính năng khác nhau cho các công thức toán học. Bạn nên đọc
[hướng dẫn sử dụng `amsmath`](http://texdoc.net/pkg/amsmath) &ndash; tài liệu
này chuyên sâu hơn về `amsmath` và có nhiều ví dụ hơn những gì ta có thể nói tới
trong khóa này.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Solve the following recurrence for $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

Môi trường `align*` căn các dòng thẳng hàng tại dấu `&`, giống như trong một
bảng. Chú ý cách ta đã dùng `\quad` để thêm một chút khoảng trống, và `\text` để
thêm một vài đoạn chữ thường vào trong chế độ toán. Ta cũng dùng một lệnh toán
học nữa, `\binom`, để ký hiệu một nhị thức.

Chú ý rằng ta đã dùng `align*` nên các công thức không được đánh số. Hầu hết các
môi trường toán tự động đánh số công thức, và phiên bản có dấu sao `*` tắt chức
năng đánh số này.

Ngoài ra gói còn cung cấp các môi trường để hỗ trợ việc viết ma trận.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
AMS matrices.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## Font trong chế độ toán

Không giống chữ bình thường, việc thay đổi font trong chế độ toán thường có một
số ý nghĩa toán học nào đó. Do đó chúng thường được viết một cách cụ thể. Sau
đây là một vài lệnh bạn có thể cần:

- `\mathrm`: viết thẳng
- `\mathit`: viết ngiêng nhưng với khoảng cách giữa các ký tự như trong text mode
- `\mathbf`: viết đậm
- `\mathsf`: viết theo font sans
- `\mathtt`: viết theo font mono
- `\mathbb`: viết theo "hai nét" (ví dụ tập hợp số thực thường được ký hiệu là
  `\mathbb{R}`) &ndash; lệnh này cần đến gói `amsfonts`.

Mỗi lệnh trên dùng một chữ cái Latin làm đối số, ví dụ ta có thể ký hiệu tên của
một ma trận theo cách sau:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
The matrix $\mathbf{M}$.
\end{document}
```

Chú ý rằng chế độ in nghiêng mặc định thêm một khoảng trống nhỏ giữa các ký tự
để ký hiệu đó là một tích. Dùng `\mathit` nếu bạn không muốn có khoảng trống này
(các từ sẽ được in nghiêng theo đúng nghĩa của nó).

Các lệnh `\math...` dùng các font được định nghĩa cho các công thức toán. Nhiều
khi ta muốn thêm một vài từ theo font bình thường, khi đó ta có thể dùng lệnh
`\text{...}` (cung cấp bởi gói `amsmath`) hoặc các câu lệnh như `\textrm{...}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $
\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}
\end{document}
```

Nếu bạn muốn làm cho cả các ký hiệu khác cũng được in đậm, xem
[bài bổ sung](more-10).

## Bài tập

Thử một vài ví dụ với công thức toán học, lây một ví dụ và thay đổi chế độ toán
từ inline sang display và ngược lại. Ảnh hưởng đến công thức toán là như thế
nào?

Thử thêm một vài chữ cái Hy Lạp, cả chữ thường và chữ hoa. Thử đoán tên của các
câu lệnh này.

Test các câu lệnh thay đổi font. Điều gì sẽ xảy ra nếu bạn lồng các câu lệnh
này?

Chế độ toán display được căn giữa mặc định. Thử thêm tùy biến `fleqn` (flush
left equation) vào lớp văn bản để xem cách căn lề khác. Tương tự, các số thứ tự
của các công thức thường được đặt ở bên phải &ndash; hãy thử dùng tùy biến
`leqno` (left equation numbers) vào lớp văn bản và nhận xét sự thay đổi về vị
trí các con số này.
