---
title: "Bổ sung: Văn bản LaTeX đầu tiên của bạn"
---

## Chạy LaTeX

Như đã được mô tả [ở bài trước](lesson-02), các văn bản LaTeX chỉ là những văn
bản mã thuần túy. Để thấy điều này, bạn hãy thử mở tệp LaTeX trong một trình mã
nguồn đơn giản, ví dụ như Notepad trên Windows. Bạn sẽ thấy nội dung tệp giống
hệt như trên một trình sửa mã nguồn với nhiều tính năng hơn, chỉ là không có
syntax highlighting, v.v...

Bạn cũng có thể tạo ra PDF mà không cần trình mã nguồn phức tạp nào cả; điều này
tương đương với việc sử dụng trình gõ lệnh (Command Prompt hay Terminal), nên
nếu bạn không quen những điều này, không sao cả. Nếu bạn *có quen*, bạn có thể
`cd` tới thư mục chứa tệp nguồn `.tex` và chạy

`pdflatex first`

hay

`pdflatex first.tex`

để biên dịch ra tệp PDF. Chú ý rằng việc thêm đuôi tệp `.tex` là không bắt buộc
&ndash; LaTeX sẽ hiểu đuôi tệp là `.tex` nếu bạn dùng một tệp không có đuôi.

## Các ký tự đặc biệt

Nếu bạn muốn viết một ký tự đặc biệt, thông thường bạn chỉ cần thêm một ký tự
`\` ngay trước nó, ví dụ như `\{` được dùng để in ra một ký tự mở ngoặc nhọn.
Tuy nhiên, cũng có một vài trường hợp mà bạn cần những câu lệnh dài hơn.

| Ký tự  | Câu lệnh ngắn (cả math mode và text mode) | Câu lệnh dài (chỉ cho text mode) |
| `{`    | `\{`          | `\textbraceleft`  |
| `}`    | `\}`          | `\textbraceright` |
| `$`    | `\$`          | `\textdollar`     |
| `%`    | `\%`          |                   |
| `&`    | `\&`          |                   |
| `#`    | `\#`          |                   |
| `_`    | `\_`          | `\textunderscore` |
| ``\``  |               | `\textbackslash`  |
| `^`    |               | `\textasciicircum`|
| `~`    |               | `\textasciitilde` |

Ba ký tự cuối không có một câu lệnh ngắn nào cả, vì `\\` được dùng trong một số
trường hợp để xuống dòng, `\~` và `\^` để thêm dấu vào các chữ cái.
