---
title: "Bổ sung: Làm việc với LaTeX"
---

Đối với hầu hết các ví dụ, ta sẽ không dùng chương trình `latex` mà sẽ dùng một
chương trình được gọi là `pdflatex`. Đây là thành viên của một hệ các chương
trình tương tự, tất cả đều là "con cháu" của `latex`. Ta sẽ dùng `pdflatex` vì
nó có lẽ là chương trình biên dịch phổ biến nhất và có thể xuất trực tiếp ra
các tệp PDF.

## Định dạng TeX và trình biên dịch gốc

Như đã được mô tả [trước đó](more-01), LaTeX được phát triển trên một hệ gọi là
TeX. Ta gọi LaTeX là một 'định dạng': một tập hợp các macros (câu lệnh, v.v...)
mà TeX có thể hiểu được. Khi bạn chạy `pdflatex`, _thực ra_ bạn đang chạy một
chương trình gọi là 'pdfTeX' đã dùng sẵn định dạng LaTeX. Ta thường gọi pdfTeX
là một _trình biên dịch gốc_: một chương trình có thể hiểu được những gì TeX yêu 
cầu thực hiện.

Có ba trình biên dịch gốc được dùng phổ biến ngày nay:

- pdfTeX
- XeTeX
- LuaTeX

Ta sẽ xem xét [XeTeX và LuaTeX sau](lesson-14): điều chính ta cần biết đó là
hai chương trình này có thể sử dụng các font chữ từ hệ điều hành, điều mà pdfTeX
không thể thực hiện được.

Nếu bạn ở Nhật Bản, hay đang viết một văn bản có nhiều thành phần tiếng Nhật,
bạn có thể đã từng nghe nói đến pTeX và upTeX. Đây là những trình biên dịch gốc
được viết cho việc sắp chữ theo chiều dọc. LuaTeX cũng có thể làm được điều này,
nhưng hiện tại, upTeX vẫn là trình biên dịch gốc phổ biến nhất cho ngôn ngữ 
tiếng Nhật.
