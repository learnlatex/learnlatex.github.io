---
lang: "vi"
title: "Bổ sung: Sử dụng các lớp văn bản"
---

## Các lớp văn bản đặc biệt cho các tạp chí, báo...

Nhiều tạp chí khoa học cung cấp các lớp văn bản cho cộng tác viên. Các lớp này
thường thiết lập các định dạng cho giống với định dạng của tạp chí, mặc dù điều
này có thể phụ thuộc vào font, kiểu chữ, v.v... Nếu có một lớp văn bản như vậy,
thông thường nó được cung cấp trực tiếp bởi tòa soạn tạp chí, tuy nhiên cũng có
một số lớp văn bản như vậy ở CTAN và các hệ thống TeX.

## Các lớp văn bản cho trình chiếu

Một vùng cần khá nhiều sự quan tâm đặc biệt đó là việc viết các trình chiếu.
Lớp `slides` được viết để làm các trình chiếu "cổ điển", và nó không có hỗ trợ
đặc biệt gì cho các trình chiếu trên màn hình. Hai lớp văn bản khác đã được phát
triển để cung cấp nhiều tính năng hơn, và được dùng khá phổ biến: `beamer` và
`powerdot`. Vì `beamer` có lẽ là lớp thông dụng hơn, ta sẽ xét một vì dụ cách
hoạt động của nó:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}{A first frame}
  Some text
\end{frame}

\begin{frame}{A second frame}
  Different text
  \begin{itemize}
    \item<1-> First item
    \item<2-> Second item
  \end{itemize}
\end{frame}

\end{document}
```

Ví dụ này cho ta hai ý tưởng quan trọng. Đầu tiên, `beamer` chia một văn bản
thành các "frame", mỗi frame có thể tương ứng với nhiều hơn một slide. Thêm nữa,
`beamer` còn thêm vào các cú pháp LaTeX bình thường một số thành phần để cho
phép một phần của văn bản có thể hiện ra theo thứ tự. Đây là một tính năng rất
mạnh nhưng nó khá phức tạp nên ta sẽ không xét nó ở đây. Bạn có thể xem
[bài viết này](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)
để đọc thêm.

## Lớp văn bản cho hình ảnh

Đôi khi bạn cần phải tạo ra một hình ảnh (có thể có nhiều chữ trên đó) bằng
LaTeX. Bạn không muốn có bất cứ thứ gì ngoài chính phần văn bản ở trên "trang"
của output. Cách đơn giản nhất để làm việc này là sử dụng
[lớp `standalone`](https://ctan.org/pkg/standalone). Nó tự thay đổi kích thước
trang giấy theo nội dung văn bản.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
A simple document: this will be a very small box!
\end{document}
```
