---
title: "Bổ sung: Các công thức toán học"
---

## Các kiểu căn chỉnh nâng cao của `amsmath`

Ngoài môi trường `align*` được nhắc tới trong bài chính, `amsmath` còn nhiều môi
trường toán tương tự khác, trong đó đáng chú ý là `gather` dành cho việc hiển
thị các công thức toán trên nhiều dòng mà không cần căn chỉnh vị trí, hay
`multline` để chia một công thức dài trên nhiều dòng khác nhau, căn lề trái cho
dòng đầu tiên và lề phải cho dòng cuối cùng. Trong mọi trường hợp, thêm `*` vào
tên môi trường sẽ tắt chức năng đánh số các dòng.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### Các cột trong sự căn lề của các môi trường toán

Các môi trường `amsmath` được thiết kế để thực hiện các "cặp cột" với cột đầu
tiên của cặp được căn phải và cột sau được căn trái. Điều này giúp nhiều công
thức được hiển thị trên một dòng, như trong ví dụ sau:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned equations
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}
\end{document}
```

Thêm vào đó ta còn có các môi trường "con" với đuôi `ed` cho các môi trường nói
trên, ví dụ `aligned` hay `gathered`, để đưa việc căn dòng vào trong một phần
nhỏ trong một công thức nào đó (hãy thử chúng để hiểu cách hoạt động!).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned` còn nhận một đối số không bắt buộc như `tabular`. Ta có thể dùng nó để
căn chỉnh cả môi trường theo chiều dọc so với các thành phần xung quanh:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

# In đậm các công thức toán học

LaTeX có hai cách để làm đậm các công thức toán. Để làm một công thức được in
đậm hoàn toàn, dùng `\boldmath` trước công thức đó. Lệnh `\mathbf` cũng có thể
được dùng để làm đậm các chữ cái (câu lệnh này cũng làm các chữ cái được viết
thẳng).

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}
$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$\mathbf{\pi} r^2$ % việc sử dụng không hợp lý của \mathbf
\end{document}
```

(Chú ý rằng `\mathbf` không có ảnh hưởng gì đến `\pi` trong ví dụ trên.)

Nếu bạn muốn dùng các ký hiệu đậm như được sử dụng bởi `\boldmath` chỉ trong một
phần của một công thức nào đó, ta có thể dùng lệnh `\bm` từ gói `bm`. Chú ý rằng
`\bm` cũng hoạt động tốt với các ký hiệu như dấu bằng hay các chữ cái Hy Lạp.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}

\begin{document}
$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$
\end{document}
```

# Gói `mathtools`

Gói `mathtools` dùng `amsmath` và thêm nhiều chức năng tăng cường khác như tăng
các hỗ trợ cho việc viết ma trận. Dùng `mathtools` ta có thể dùng các ký tự khai
báo bảng để căn lề các ô trong ma trận.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}
\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]
\end{document}
```

# Các công thức toán học và Unicode


Như ta sẽ biết trong [một bài sau](lesson-14), có nhiều trình biên dịch TeX khác
nhau có thể dùng font OpenType. Các trình biên dịch này vẫn sử dụng font toán
mặc định của TeX nhưng ta có thể dùng gói `unicode-math` để sử dụng font
OpenType cho các công thức toán. Nội dung của gói này nằm ngoài tầm của khóa
này nên ta sẽ không đi sâu vào nó mà chỉ đưa ra một ví dụ đơn giản. Tuy nhiên
bạn có thể đọc thêm trong
[hướng dẫn sử dụng gói](https://texdoc.net/pkg/unicode-math).

```
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

One two three
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode Math Alphanumerics
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
