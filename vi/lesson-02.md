---
title: "Làm việc với LaTeX"
---

Không giống nhiều chương trình máy tính khác, LaTeX không phải là một chương
trình bao gồm 'tất cả mọi thứ'. Thay vào đó, có nhiều chương trình khác nhau
hoạt động cùng nhau. Ta có thể chia chúng thành hai thứ mà bạn cần:

- Một _hệ thống TeX_
- Một trình soạn thảo mã nguồn (thường là một trình soạn thảo dành riêng cho
LaTeX)

## Hệ thống {{ site.tex }}

Phần cốt lõi của làm việc với LaTeX là có một hệ thống TeX. Một hệ thống TeX là
tập hợp của những chương trình và tệp cần thiết để LaTeX có thể chạy được dù
thông thường bạn không trực tiếp 'chạy' những chương trình này.

Ngày nay có hai hệ thống TeX chính, đó là [MiKTeX](https://www.miktex.org) và
[TeX Live](https://tug.org/texlive). Cả hai đều dùng được trên cả Windows, macOS
và Linux. MiKTeX rất phù hợp cho Windows; trên macOS thì TeX Live được phân phối
trong một hệ thống lớn hơn được gọi là [MacTeX](https://www.tug.org/mactex/).
Có [những ưu điểm và nhược điểm của mỗi hệ thống](https://tex.stackexchange.com/q/20036),
và bạn có thể xem 
[một số lời khuyên từ đội ngũ phát triển LaTeX](https://www.latex-project.org/get/)

Vì TeX Live có sẵn trên tất cả các hệ điều hành phổ biến, và vì nó có nhiều ưu
điểm, chúng tôi khuyên rằng nếu bạn không chắc mình nên dùng hệ TeX nào, bạn nên
chọn TeX Live.

## Trình soạn thảo mã nguồn

Các tệp LaTeX cũng chỉ là các tệp văn bản thuần túy (plain text), do đó nó có
thể được chỉnh sửa bởi bất kỳ trình soạn thảo mã nguồn nào. Tuy nhiên, ta nên có
một trình mã nguồn được thiết kế để hoạt động với LaTeX, với những tính năng như
nút biên dịch (bạn không cần phải mở cửa sổ lệnh để biên dịch nữa), trình đọc
PDF, hay nổi bật cú pháp (syntax highlighting). Một tính năng có ích trong tất
cả những trình sửa mã nguồn LaTeX hiện đại là SyncTeX: tính năng giúp bạn có thể
click vào mã nguồn để đến thẳng vị trí tương ứng trong PDF hay ngược lại.

Có rất nhiều trình soạn thảo mã nguồn, đây là một
[danh sách khá đầy đủ trên StackExchange](https://tex.stackexchange.com/q/339).
Một trình sửa mã nguồn cơ bản, [TeXworks](https://tug.org/texworks), được phân
phối cùng với TeX Live và MikTeX trong Windows và Linux, và
[TeXShop](https://pages.uoregon.edu/koch/texshop/) được phân phối trong MacTeX.

Đối với bất kỳ trình sửa mã nguồn nào, chúng tôi khuyên bạn nên cài đặt nó
_sau_ khi cài đặt hệ LaTeX, vì khi đó trình sửa mã nguồn có thể tự 'tìm' được
hệ LaTeX và tự thiết lập các cài đặt đúng cách.

## Làm việc trực tuyến

Ngày nay, có nhiều trang web có thể cho phép bạn tránh việc phải cài đặt bất cứ
thứ gì vào máy mà vẫn có thể sử dụng được LaTeX. Những trang web này hoạt động
bằng cách cho phép bạn sửa tệp ngay trên trang, sau đó chạy LaTeX và hiển thị
tệp PDF được tạo thành.

Một số trang kết hợp LaTeX với những chức năng thường thấy ở một trình soạn thảo
văn bản, trong khi các trang còn lại cho bạn sửa mã nguồn trực tiếp.

Có những trang cho phép bạn chạy LaTeX mà không cần đăng nhập, và chúng tôi sẽ
sử dụng một trong số đó, [LaTeX CGI](https://latexcgi.xyz), để cho bạn
chính sửa và test các ví dụ ở đây. Để có một hệ thống đầy đủ hơn, bạn cần phải
đăng ký tài khoản với những trang web như vậy &ndash; khi đó bạn có thể lưu lại
tệp của mình và cũng tránh làm cho trang bị overload. Chúng tôi đã thêm các
đường dẫn để bạn có thể sửa các ví dụ của chúng tôi bằng
[Overleaf](https://www.overleaf.com), một trong những trang web lớn nhất để làm
việc với LaTeX trực tuyến. Tất nhiên vẫn còn nhiều trang web như vậy, ví dụ như
[Papeeria](https://papeeria.com/).

## Bài tập

Cài đặt một hệ thống TeX trên máy tính của bạn _hoặc_ đăng ký một tài khoản với
một dịch vụ LaTeX trực tuyến. Nếu bạn cài đặt một hệ thống TeX, bạn cũng cần một
trình sửa mã nguồn nữa; chúng tôi khuyên nên bắt đầu bằng TeXworks hoặc TeX Shop
(xem ở trên), rồi sau đó đến với những trình sửa mã nguồn khác một khi bạn đã đủ
tự tin để làm việc với LaTeX.

Bạn sẽ có thể [chạy tất cả các bài tập khác trong trình duyệt của bạn](help.md),
nhưng bạn nên bắt đầu làm việc với những văn bản thật, vì thế bây giờ là thời
điểm rất phù hợp để chuẩn bị.
