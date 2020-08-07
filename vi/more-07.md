---
title: "Bổ sung: Thêm hình ảnh và làm cho các hình linh động"
---

## Đặt tên tệp ảnh

LaTeX hoạt động trên nhiều hệ điều hành nên các tên tệp nên được chú ý. Cách làm
an toàn nhất là đặt tên các tệp đơn giản thôi: chỉ gồm các ký tự trong bảng chữ
cái tiếng Anh, đồng thời không có khoảng trống (dấu cách). Ví dụ, nếu bạn muốn
cho các ảnh vào một thư mục con, một thứ kiểu như
`\includegraphics[width=30pt]{pix/mom.png}` là một cách làm an toàn.

Các ký tự trống trong tên tệp thường gây nhiều khó khăn cho máy tính, nhưng hiện
tại nó cũng đã được hỗ trợ tương đối đầy đủ. Tuy nhiên, nếu bạn có dấu cách
trong tên tệp và bạn gặp phải một số vấn đề, đầu tiên bạn nên bỏ các ký tự trống
đó đi.

Việc dùng các ký tự có dấu (như á, ồ, v.v...) không thật sự được hỗ trợ nhiều,
có nhiều vấn đề với một số hệ điều hành, đặc biệt là Windows. Nếu bạn có vấn đề
với các ký tự có dấu, thử thay bằng các ký tự ASCII để thử.

## Lưu trữ các ảnh trong một thư mục con

Một cách thông dụng để sắp xếp các tệp đó là đưa toàn bộ hình ảnh vào một thư
mục con. Sau đó bạn có thể dùng đường dẫn đến thư mục đó như ví dụ ở trên, chú ý
rằng ký tự `/` được dùng để phân biệt các phần của đường dẫn
_kể cả trên Windows_.

Nếu bạn có nhiều hình vẽ, bạn có thể cần phải thiết lập thư mục con ngay từ đầu.
Điều này có thể được thực hiện bằng `\graphicspath`. Các thư mục con sẽ được đưa
vào trong cặp ngoặc và được viết như một "mảng" trong đối số của
`\graphicspath`. Ví dụ, để thêm các thư mục con `figs` và `pics`, ta làm như
sau:

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Chú ý ký tự `/` ở đuôi mỗi thư mục con!

## Vẽ hình

Như đã thảo luận ở trên, LaTeX dễ dàng sử dụng hình ảnh từ hầu hết các nguồn, kể
cả các đồ thị từ những phần mềm khoa học. Khi bạn thêm các hình như vậy, bạn nên
lưu các đồ thị dưới định dạng PDF nếu có thể, vì đây là một định dạng vector
(không bị "vỡ ảnh" khi phóng to &ndash; khác với định dạng bitmap của JPG hay
PNG sẽ làm vỡ ảnh khi phóng to). Nếu bạn cần tạo ra tệp theo định dạng bitmap,
hãy làm cho độ phân giải ảnh cao nhất có thể. Bạn có thể tạo ra các hình mà có
cả một số tính năng của TeX với [Inkscape](https://inkscape.org). Nếu bạn cần vẽ
hình trên không gian ba chiều, bạn có thể dùng
[Asymptote](https://ctan.org/pkg/asymptote). Hai công cụ này có thể xuất ra
các tệp mà bạn có thể thêm vào văn bản của mình.

Bạn cũng có thể tạo ra những hình vẽ trực tiếp trong LaTeX với độ chính xác cao.
Điều này tương đối tiện lợi dù văn bản sẽ trở nên phức tạp hơn một chút, bằng
việc sử dụng [Ti*k*Z](https://ctan.org/pkg/pgf) hay
[PSTricks](https://ctan.org/pkg/pstricks-base).

## Đặt vị trí cho các phần linh động

Việc đặt vị trí cho các phần linh động trong LaTeX tương đối phức tạp. Nhiều
người có thể muốn đặt hình vẽ ngay tại vị trí mà nó được đặt trong mã nguồn.
Gói `float` có thể được dùng để làm việc đó.

```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{lipsum}
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{An example image}
\end{figure}
\lipsum[8-15]
\end{document}
```

Chú ý lựa chọn `H` (*absolutely* **H**ere &ndash; _bắt buộc_ tại vị trí hiện
tại). Tuy nhiên thông thường ta không nên dùng `H`, vì nó có thể gây ra nhiều
khoảng trống thừa trong văn bản.

## Những loại thành phần linh động khác

Trong [bài sau](lesson-08), ta sẽ thấy rằng ta không thể cho bảng vào môi trường
`figure` được, chúng cần được đưa vào môi trường `table`. Tuy nhiên, ta không
_bắt buộc_ phải đưa hình ảnh vào `figure` hay đưa bảng vào `table` &ndash; ta
chỉ nên làm vậy thôi.

Ta cũng có thể cần nhiều loại môi trường linh động khác, mỗi loại được thêm vào
một cách độc lập. Ta có thể làm vậy bằng việc sử dụng gói
[`trivfloat`](https://ctan.org/pkg/trivfloat). Gói này cung cấp lệnh `\trivfloat`
để ta định nghĩa những kiểu môi trường linh động mới.

```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{lipsum}
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{An example image}
\end{image}
\end{document}
```
