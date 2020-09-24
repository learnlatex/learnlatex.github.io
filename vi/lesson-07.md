---
title: "Thêm hình ảnh và làm cho các hình linh động"
---

## Thêm các hình ảnh

Để thêm hình ảnh từ bên ngoài LaTeX, ta dùng gói `graphicx`. Gói này thêm câu
lệnh `\includegraphics` vào LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
This picture
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
is an imported PDF.
\end{document}
```

Ta có thể thêm các tệp có định dạng EPS, PNG, JPG và PDF theo cách này. Nếu bạn
có nhiều tệp cùng tên nhưng khác định dạng, bạn nên thêm đuôi tệp vào câu lệnh,
ví dụ `\includegraphics{example-image.png}`. (Gói `graphicx` sẽ đoán đuôi tệp
nếu bạn không cung cấp nó.)

Bạn có thể thấy ta đã dùng một môi trường mới ở đây, `center`, để căn giữa hình
ảnh. [Trong một bài ở phần sau](lesson-11), ta sẽ nói nhiều hơn về các khoảng
cách và việc chỉnh vị trí của các thành phần văn bản.

## Thay đổi một số thông số của hình ảnh

Câu lệnh `\includegraphics` có nhiều tùy biến để kiểm soát kích thước vầ hình
dạng của hình ảnh được thêm vào. Một vài tùy biến như vậy được dùng rất thường
xuyên, do đó ta nên biết chúng.

Thứ cần thiết nhất có lẽ là khả năng thay đổi chiều rộng (`width`) và chiều cao
(`height`) của một hình ảnh. Các tùy biến này thường nhận giá trị được biểu diễn
theo `\textwidth` (độ rộng của phần chữ trong trang giấy) hay `\textheight`
(độ cao của phần chữ trong trang giấy). LaTeX sẽ tự động thu nhỏ hoặc phóng to
ảnh để tỉ lệ chiều rộng/chiều dài ảnh vẫn được giữ nguyên.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Some text
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Bạn cũng có thể phóng to/thu nhỏ (`scale`) ảnh, hay xoay (`angle`) nó. Một vài
thứ khác bạn có thể muốn làm đó là cắt hình ảnh bằng `clip` hay `trim`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Làm hình ảnh trở nên linh động

Thông thường trong ngành sắp chữ, đặc biệt với những văn bản kỹ thuật, các hình
ảnh thường được chuyển sang một vị trí khác trong văn bản. Những hình ảnh như
vậy được gọi là các thành phần *linh động*. Các ảnh thường được thêm vào như các
phần linh động để chúng không tạo ra khoảng trắng quá lớn trong trang giấy.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}

\begin{document}
\lipsum[1-4] % Một vài đoạn văn mẫu

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{An example image}
\end{figure}

\lipsum[6-10] % Thêm một vài đoạn văn mẫu nữa
\end{document}
```

Ở đây, LaTeX chuyển vị trí của hình ảnh và tiêu đề ảnh ra khỏi vị trí
`Test location` tới phía trên cùng của trang sau đó, vì trong trang đầu tiên
không còn đủ chỗ cho nó. Tùy biến `ht` ảnh hưởng cách LaTeX đặt vị trí một phần
linh động; hai chữ này có nghĩa là hình ảnh có thể được giữ nguyên vị trí như
trong mã nguồn (cạnh `Test location`), hay được chuyển sang phần trên của trang
tiếp theo. Bạn có thể dùng tới bốn chữ cái như vậy:

- `h` (**h**ere) tại vị trí hiện tại nếu có thể
- `t` (**t**op) phía trên cùng của trang giấy
- `b` (**b**ottom) phía dưới cùng của trang giấy
- `p` (**p**age) đưa đến một trang được dành riêng cho các phần linh động

Ở [một bài sau](lesson-09), ta sẽ xem làm cách nào để tạo ra các đường dẫn đến
các hình linh động trong văn bản của bạn.

Ta có thể thấy là ta đã căn giữa hình ảnh bằng `\centering` thay vì dùng môi
trường `center`. Trong một hình linh động, ta nên dùng `\centering` để căn giữa
vì nếu dùng `center` sẽ có quá nhiều khoảng trống theo chiều dọc trang giấy.

## Bài tập

Thử thêm một hình ảnh bạn có, thay vào hình ảnh "mẫu" mà ta có ở ví dụ trên.

Thử xem bạn có thể làm được gì với `height`, `width`, `angle` và `scale`.

Dùng `lipsum` để tạo ra một đoạn văn bản mẫu đủ dài, sau đó thử thêm các phần
linh động với các tùy biến khác nhau. Các tùy biến khác nhau hoạt động với nhau
như thế nào?
