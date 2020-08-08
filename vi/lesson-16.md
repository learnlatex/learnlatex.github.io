---
title: "Tiếp cận các hướng dẫn sử dụng gói và tìm kiếm sự trợ giúp"
---


Có nhiều cách để đọc hướng dẫn sử dụng của một gói hay lớp văn bản nào đó.

## `texdoc`

Nếu bạn đã cài một hệ thống TeX (ví dụ: TeX Live hay MiKTeX) với đầy đủ các
hướng dẫn sử dụng, bạn có thể đọc được những văn bản này bằng lệnh `texdoc`.
Trong cửa sổ lệnh bạn gõ lệnh

```
texdoc <gói>
```

Khi đó lệnh sẽ mở hướng dẫn sử dụng của `<gói>`. Lệnh này sẽ tìm kiếm trong tất
cả các hướng dẫn sử dụng có sẵn và mở văn bản mà nó thấy là phù hợp nhất trong
các kết quả tìm kiếm có được. Bạn có thể in ra danh sách những văn bản tìm thấy
được bằng việc dùng tùy chọn `-l`:

```
texdoc -l <gói>
```

## texdoc.net

Đây là một [trang web](https://texdoc.net) hoạt động tương tự lệnh `texdoc`. Bạn
có thể tìm kiếm giống như khi bạn dùng `texdoc -l` và chọn từ những kết quả tìm
được.

## CTAN

[CTAN](https://ctan.org), viết tắt của Comprehensive TeX Archive Network, là hệ
thống lưu trữ hầu hết các công cụ trong LaTeX. Bạn có thể tìm kiếm gói lệnh
trong trang này để đọc hướng dẫn sử dụng của nó. Thông thường gói lệnh sẽ được
lưu dưới URL `https://ctan.org/pkg/<tên gói>`, và bạn có thể đọc tệp README hoặc
hướng dẫn sử dụng ở đường dẫn này.

## Sách về LaTeX

Có nhiều cuốn sách có sẵn mà bạn có thể đọc để học thêm về LaTeX. Là người mới
học LaTeX thì việc đọc những hướng dẫn cơ bản sẽ có ích rất nhiều, vì những sách
như vậy thường cung cấp nhiều thông tin hơn những gì ta nói tới ở đây.

Đội ngũ phát triển lõi LaTeX có một
[danh sách](https://www.latex-project.org/help/books) các cuốn sách được viết
bởi các thành viên. Hai cuốn đáng chú ý nhất là [Hướng dẫn sử dụng LaTeX của
Lamport](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
(ta còn nhớ trong [bài này](more-01) rằng Lamport chính là cha đẻ của LaTeX),
hay [LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Một vài cuốn sách khác có nội dung tương tự:

- [_Guide to
  LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) bởi Helmut
  Kopka và Patrick Daly: có sẵn dưới dạng sách điện tử
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) bởi
  Nicola Talbot: có sẵn dưới dạng sách điện tử miễn phí hoặc sách in có giá thấp
- [_Using LaTeX to write a PhD
  thesis_](https://www.dickimaw-books.com/latex/thesis/) bởi
  Nicola Talbot: có sẵn dưới dạng sách điện tử miễn phí hoặc sách in có giá thấp
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)
  bởi Stefan Kottwitz: có sẵn dưới dạng sách điện tử và sách in
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) bởi
  Marc van Dongen: có sẵn dưới dạng sách điện tử và sách in

## Tìm kiếm sự trợ giúp trong LaTeX

Có nhiều diễn đàn trên mạng để bạn có thể hỏi các câu hỏi LaTeX; có lẽ diễn đàn
có nhiều người truy cập nhất là
[TeX &ndash; LaTeX StackExchange](https://tex.stackexchange.com). Mỗi khi bạn
hỏi một câu hỏi ở bất kỳ diễn đàn nào, tốt nhất bạn nên chuẩn bị một đoạn mã ví
dụ &ndash; thường được gọi là "minimal working example" (MWE). Đoạn mã này nên
được tối giản hóa sao cho vấn đề của bạn vẫn xuất hiện trên đó nhưng những thứ
không liên quan được gạch bỏ đi, để hỗ trợ mọi người trả lời bạn tốt hơn.

Làm cách nào để tạo ra một MWE? Thông thường cách dễ nhất là bắt đầu từ

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

và thêm những dòng mã có liên quan vào cho đến khi vấn đề của bạn xuất hiện. Bạn
cũng có thể bỏ đi những phần không cần thiết trong tệp LaTeX thực tế của bạn,
nhưng quá trình đó phức tạp hơn một chút.

Nếu bạn cần một lượng chữ lớn để xuất hiện trên nhiều trang, bạn có thể dùng
những gói như `lipsum`. Như ta đã biết, gói này tạo ra những đoạn văn không có ý
nghĩa với chiều dài tùy ý để test trong khi vẫn làm kích thước tệp của bạn đủ
nhỏ.

Một trong những thứ mà mọi người có thể yêu cầu bạn cung cấp đó là tệp log, tệp
này được tạo ra bởi LaTeX mỗi khi bạn chạy nó, và có đuôi tệp là `.log`. Tệp này
bao gồm tất cả những thông tin trong quá trình chạy, đặc biệt là những thông tin
quan trọng như phiên bản gói lệnh, các thông báo lỗi hay các cảnh báo từ LaTeX,
v.v...
