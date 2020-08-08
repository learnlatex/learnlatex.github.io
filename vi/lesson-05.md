---
title: "Sử dụng các lớp văn bản"
---

## Lớp văn bản làm gì?

Bạn có thể để ý rằng tất cả các ví dụ ta đã xét đều bắt đầu với một dòng
`\documentclass` ("document class" nghĩa là lớp văn bản), và
`\documentclass{article}` là lựa chọn thường dùng nhất. (Ta cần
`\documentclass{report}` trong [bài trước](lesson-04) để thử câu lệnh
`\chapter`.) Dòng này là bắt buộc, và hầu như trong mọi trường hợp, đó nên là
câu lệnh đầu tiên trong văn bản của bạn.

Lớp văn bản đưa ra các thiết lập chung cho văn bản, ví dụ

- thiết kế: lề, font, cách dòng, v.v...
- quyết định liệu trong văn bản có các chương hay không
- quyết định liệu tiêu đề có nên được cho sang một trang riêng (trang bìa)
  không.

Lớp văn bản cũng có thể thêm nhiều câu lệnh khác, ví dụ như các lớp văn bản để
tạo văn bản trình chiếu.

Dòng khai báo lớp văn bản cũng có thể nhận một số _tùy biến_: những lựa chọn
được áp dụng vào cả văn bản. Chúng được khai báo trong cặp ngoặc vuông:
`\documentclass[<lựa chọn>]{<tên lớp>}`. Cú pháp này, với những tùy biến không
bắt buộc được đưa vào cặp ngoặc vuông, được dùng trong nhiều câu lệnh LaTeX.

## Các lớp văn bản cơ bản

LaTeX có một hệ các lớp văn bản cơ bản. Chúng khá giống nhau, nhưng có một vài
điểm khác biệt:

- `article`: các văn bản ngắn không có các chương
- `report`: các văn bản dài hơn với các chương, cấu trúc in một mặt giấy
- `book`: các văn bản dài hơn với các chương, cấu trúc in hai mặt giấy với
  frontmatter và backmatter.
- `letter`: các văn bản không có chia phần
- `slides`: được dùng cho các bài thuyết trình (xem thêm phía dưới)

`article`, `report` và `book` có những câu lệnh rất tương đồng nhau, như ta đã
thấy. Khi viết bằng `letter`, các câu lệnh có hơi khác một chút

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Some Address\\Some Street\\Some City}

\opening{Dear Sir or Madam,}

The text goes Here

\closing{Yours,}

\end{letter}

\end{document}
```

Ta thấy `\\` được dùng để tách dòng bên trong phần địa chỉ, ta sẽ xem xét việc
tách dòng [trong một bài sau](lesson-11). Ta cũng thấy rằng `letter` đưa ra một
môi trường mới cho mỗi bức thư và cũng có những câu lệnh đặc biệt

`article`, `report` và `book` nhận một số tùy biến như `10pt`, `11pt`, `12pt` để
chuyển cỡ chữ, hay `twocolumn` để chia phần thân văn bản thành hai cột. Chú ý
rằng `14pt`, `8pt` hay `threecolumn` *không* phải là các tùy biến của các lớp
này (đây là lỗi thường gặp của những người mới học LaTeX).

## Những lớp văn bản với nhiều công cụ hơn

Những lớp văn bản cơ bản tương đối đơn giản, nhưng điều này cũng có nghĩa là
chúng tương đối bảo thủ về thiết kế và danh sách các câu lệnh được định nghĩa.
Qua thời gian, một số lớp văn bản mạnh hơn đã được viết ra, mà cho phép bạn
thay đổi thiết kế mà không cần phải làm mọi việc "bằng tay". Ta sẽ nói kỹ hơn
ở [bài sau](lesson-11).

Hội Toán học Hoa Kỳ (AMS) viết ra một số biến thể của những lớp văn bản gốc, như
`amsart` hay `amsbook`, với một thiết kế gần hơn với những bài báo, văn bản liên
quan đến toán học.

Hai lớp văn bản lớn nhất và thông dụng nhất là hệ thống KOMA-script và lớp văn
bản `memoir`. KOMA-script cho một hệ thống lớp văn bản mới "song song" với các
lớp văn bản gốc: `scrartcl`, `scrreprt` và `scrbook`, trong khi `memoir` giống
như một sự phát triển của `book`.

Những lớp văn bản này có nhiều công cụ giúp bạn thiết kế, ta sẽ khám phá một vài
trong số đó trong một bài tập. Bạn có thể hỏi tại sao ta có thể biết đến những
công cụ này; ta sẽ nói đến điều đó trong [bài cuối](lesson-15), nhưng bạn vẫn
luôn có thể "nhảy cóc"!

## Trình chiếu

Lớp `slides` được phát triển để tạo ra các trình chiếu vào những năm 1980, vì
thế không có hỗ trợ tốt cho việc tạo ra các trình chiếu dựa trên PDF. Có những
lớp văn bản hiện đại hơn có thể giúp ta làm điều này; ta sẽ xem xét chúng trong
[bài bổ sung](more-05).

## Bài tập

Thử xem việc thay đổi lớp văn bản giữa các lớp gốc, các lớp thuộc hệ thống
KOMA-script và `memoir` ảnh hưởng đến output như thế nào.

```latex
\documentclass{article} % Thay đổi lớp văn bản ở đây
\usepackage[T1]{fontenc}

\begin{document}

\section{Introduction}

This is a sample document with some dummy
text\footnote{and a footnote}. This paragraph is quite
long as we might want to see the effect of making the
document have two columns.

\end{document}
```

Thử thêm tùy biến `twocolumn` và xem sự thay đổi của output.

Thay `\section` trong ví dụ trên bằng `\chapter` và thử xem những tùy biến sau
có ảnh hưởng như thế nào lên văn bản khi dùng lớp `scrreprt`:

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
