---
title: "Bổ sung: Cấu trúc logic"
---

## Tiêu đề văn bản

LaTeX cho ta một số markup cho tiêu đề và thông tin văn bản: ba câu lệnh để
thiết lập các thông tin văn bản và một câu lệnh để sử dụng chúng.

```latex
\documentclass{article}
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

## Bài tập

Thử đưa ra những thông tin khác nhau cho `\author`, `\title` và `\date` để kiểm
tra cách hoạt động của `\maketitle`. Những câu lệnh nào trong số ba câu lệnh này
là *bắt buộc* để `\maketitle` hoạt động? Liệu các câu lệnh có bắt buộc phải có
nội dung bên trong nó không?
