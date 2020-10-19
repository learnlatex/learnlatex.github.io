---
lang: "vi"
title: "Bổ sung: Cấu trúc logic"
---

## Tiêu đề văn bản

LaTeX cho ta một số markup cho tiêu đề và thông tin văn bản: ba câu lệnh để
thiết lập các thông tin văn bản và một câu lệnh để sử dụng chúng.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{A.~N.~Other \and D.~Nobacon} % Tác giả
\title{Some things I did}            % Tiêu đề văn bản
\date{1st April 2020}                % Ngày viết văn bản
\maketitle

Some normal text.
\end{document}
```

Như ta thấy, các câu lệnh `\author`, `\title` và `\date` lưu trữ một số thông
tin, và `\maketitle` in ra các thông tin này. Ta cũng có thể phân chia các tác
giả với `\and`. Chú ý rằng `\author`, `\title` và `\date` cần phải ở trước
`\maketitle`. Ở đây, ta dùng chúng trong thân văn bản, nhưng chúng cũng có thể
được dùng ở phần khai báo.

Cách `\maketitle` hoạt động phụ thuộc vào lớp văn bản (xem [bài 5](lesson-05)).
Có môi trường `titlepage` để bạn có thể đưa ra các thiết kế tiêu đề tùy ý mình,
nhưng môi trường này hơi nâng cao và không nằm trong phạm vi khóa này.

## Danh sách liệt kê mục

Ngoài các kiểu danh sách "đánh số" và "không đánh số", LaTeX cũng cung cấp một
kiểu danh sách nữa, ít dùng hơn, đó là "danh sách liệt kê các mục" (chạy ví dụ
sau để hiểu hơn về kiểu danh sách này).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\begin{description}
\item[Dog:] member of the genus Canis, which forms part of the wolf-like canids,
  and is the most widely abundant terrestrial carnivore.
\item[Cat:] domestic species of small carnivorous mammal. It is the only
  domesticated species in the family Felidae and is often referred to as the
  domestic cat to distinguish it from the wild members of the family.
\end{description}
\end{document}
```

## Bài tập

Thử đưa ra những thông tin khác nhau cho `\author`, `\title` và `\date` để kiểm
tra cách hoạt động của `\maketitle`. Những câu lệnh nào trong số ba câu lệnh này
là *bắt buộc* để `\maketitle` hoạt động? Liệu các câu lệnh có bắt buộc phải có
nội dung bên trong nó không?

Tạo một vài danh sách liệt kê mục, và thử lồng ba loại danh sách vào với nhau
xem sao.
