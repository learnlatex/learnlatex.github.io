---
lang: "vi"
title: "Bổ sung: Cấu trúc cho các văn bản dài"
---

## Tạo chỉ mục

Phụ thuộc vào loại văn bản bạn đang viét, bạn có thể cần thêm một chỉ mục. Điều
này khá giống với việc tạo một danh sách các tài liệu tham khảo, vì nó dùng tới
các tệp aux. Tuy nhiên, mọi thứ có thể được tự động hóa bằng gói `imakeidx`. Ta
cần thực hiện ba lệnh:

- Lệnh `\makeindex` bật chức năng tạo chỉ mục
- Lệnh `\index` để đánh dấu các vị trí để lưu thông tin cho chỉ mục
- Lệnh `\printindex` để in ra chỉ mục

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

Ta có thể thấy hai chức năng đã được hiển thị ở đây: chia nhỏ các chỉ mục theo
"chỉ mục con &ndash; chỉ mục cha" theo `!` và in ra một đoạn mã khác với đoạn
mã được nhập bằng `@` (đoạn mã được nhập sẽ luôn được dùng để sắp xếp các chỉ
mục). Có nhiều cách căn chỉnh định dạng của chỉ mục, hãy thử các ví dụ này và
xem cách chúng hoạt động ra sao.
