---
lang: "vi"
title: "Sử dụng trang learnlatex.org"
description: "Một vài nét khái quát về cách sử dụng và điều hướng trong hệ thống các bài trong trang learnlatex.org."
permalink: /vi/help
---

# Sử dụng trang learnlatex.org

## Định hướng trong trang

Khóa này bao gồm 16 bài học cơ bản. Bạn có thể xem [danh sách của chúng]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }})
trong [trang chủ](./).

Mỗi bài có một đường dẫn đến một bài bổ sung về cùng chủ đề nhưng có phần chuyên
sâu hơn. Tuy nhiên, bạn vẫn có thể đi qua tất cả 16 bài mà _không_ cần học thêm
những bài bổ sung này.

Vào phần cuối của khóa học có một số bài được dành riêng cho việc soạn thảo
bằng các ngôn ngữ khác nhau, cũng như tập hợp một số ví dụ của các gói lệnh
LaTeX thông dụng mà không được nói đến trong các bài học chính.

---

## Ví dụ

### Chạy các ví dụ

Mỗi ví dụ bao gồm một tệp LaTeX nhỏ được hiển thị như sau:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Example text.
\end{document}
```

Đây là một ví dụ đầy đủ. Tuy nhiên bạn có thể phải sửa nó để thực hiện những
thay đổi nhỏ, ví dụ như để thực hiện các bài tập ở phần cuối mỗi bài học.

Trang web này sử dụng [ACE](https://ace.c9.io) để hiển thị cũng như thực hiện
các thao tác với các đoạn mã ví dụ.

#### Ba cách biên dịch ví dụ

Có ba cách bạn có thể dùng để chạy phần mã trước hoặc sau khi sửa:

* Dùng dịch vụ Overleaf
* Dùng một dịch vụ LaTeX online
* Dùng hệ thống TeX được cài đặt sẵn trong máy

##### Dùng dịch vụ Overleaf

Nút <button style="padding:0 1px;font-size:90%">Mở trong Overleaf</button> sẽ
đưa phần mã nguồn lên [Overleaf](https://www.overleaf.com/about).

Nếu bạn không có một tài khoản Overleaf, hoặc những thông tin về tài khoản
của bạn không được lưu trữ sẵn trong trình duyệt, bạn sẽ được đưa tới một
trang để đăng nhập hoặc đăng ký tài khoản Overleaf. Đây là một dịch vụ miễn
phí nhưng có yêu cầu bạn phải cung cấp một số thông tin và đồng ý với những
điều khoản sử dụng.

Nếu bạn đã có một tài khoản, Overleaf sẽ được mở ra ở một tab mới với một
project mới có chứa đoạn mã này. Bạn có thể sửa mã trên Overleaf và biên dịch
ngay trên đó.

Các chức năng sửa mã trên Overleaf tốt hơn chức năng sửa mã ở đây nhiều. Bạn
cũng có thể lưu project vào tài khoản Overleaf của mình và thao tác với nó
sau.

##### Dùng một dịch vụ LaTeX online

Nút <button style="padding:0 1px;font-size:90%">Chạy với LaTeX Online</button>
sẽ chuyển đoạn mã tới [TeXLive.net](https://texlive.net).[^1]

TeXLive.net được phát triển đặc biệt dành cho trang này, và nó sử dụng
[PDF.js](https://mozilla.github.io/pdf.js) để hiển thị các tệp PDF trên
điện thoại cũng như các trình duyệt không có trình đọc PDF mặc định.

Tệp PDF output (hoặc một phần của các thông báo lỗi nếu quá trình biên dịch
gặp vấn đề) sẽ được hiện ra ngay phía dưới ví dụ. Nút
<button style="padding:0 1px;font-size:90%">Xóa output</button> có thể được
dùng để bỏ phần output này đi nếu bạn thấy nó không còn cần thiết.

Chú ý rằng TeXLive.net không cần bạn phải lập tài khoản nên nó rất thuận
tiện cho những ví dụ nhỏ. Tuy nhiên, cả trang này hay các dịch vụ như
`latexonline.cc` hay `latex-on-http` đều không hỗ trợ khả năng lưu văn bản của
bạn. Tất cả những thay đổi bạn đã thực hiện sẽ bị mất sau khi bạn rời khỏi
trang.

##### Dùng hệ thống TeX được cài đặt sẵn trong máy

Nếu bạn đã có một hệ thống TeX được cài đặt trong máy, bạn có thể sao chép
đoạn mã vào trình soạn mã của mình và thực hiện các thao tác ở đó.

### Xử lý lỗi

Các ví dụ trên trang đều được dựa trên một hệ thống TeX đã được cập nhật lên
phiên bản mới nhất. Chúng đều biên dịch được với các dịch vụ LaTeX online mà ta
đã liệt kê ở trên. Do vậy, nếu bạn nhận thông báo lỗi khi biên dịch, bạn nên kiểm
tra lại xem hệ thống TeX của mình đã được cập nhật hay chưa.

---

## Chọn trình biên dịch TeX

Khi một đoạn mã được đưa lên, trình dịch `pdflatex`
sẽ được sử dụng mặc định.

Bạn có thể thay đổi trình dịch thành `latex`, `pdflatex`, `xelatex`,
`lualatex`, `platex` hay `uplatex` bằng cách dùng một ghi chú tương tự như sau:

```
% !TEX <bất cứ đoạn chữ nào> lualatex
```

trong đó khoảng trống ở bắt đầu là không bắt buộc; viết hoa hay viết thường đều
được hiểu như nhau và phần `<bất cứ đoạn chữ nào>` được bỏ qua.

Điều này cho phép một ghi chú kiểu như `% !TEX program=pdflatex` được sử dụng
bởi một số trình sửa mã TeX, nhưng ở đây `program=` là không bắt buộc. Chú ý rằng,
vào thời điểm hiện tại, ta chỉ có thể chọn một trong số các trình dịch nêu trên
để biên dịch.

Bạn có thể xem một số ví dụ có ghi chú dùng để cho biết ví dụ sẽ được chạy bằng 
LuaLaTeX trong [bài bổ sung của bài 14](more-14).

Nếu `platex` hay `uplatex` được sử dụng, chương trình `dvipdfmx` cũng được sử dụng
để tạo ra tệp PDF từ các tệp DVI mà các trình dịch này xuất ra. Tương tự, nếu
bạn dùng `latex`, các chương trình `dvips` and `ps2pdf` cũng sẽ được sử dụng.

---

## Chọn cách tệp PDF được hiển thị trong trình duyệt

Nếu bạn sử dụng hệ thống LaTeX Online, mặc định các tệp PDF được hiển thị với sự
trợ giúp của [PDF.js](https://mozilla.github.io/pdf.js), bởi vì thư viện này có
thể hoạt động ổn định trên rất nhiều trình duyệt khác nhau.

Nếu bạn muốn sử dụng trình đọc PDF mặc định của trình duyệt, bạn có thể dùng một
ghi chú dưới dạng

```
% !TEX <bất cứ đoạn chữ nào> pdf
```

Bạn có thể sử dụng `pdfjs` thay cho `pdf` ở ghi chú trên; khi đó PDF.js sẽ được
sử dụng để hiển thị PDF. Để debugging thuận lợi, bạn có thể cần đến tệp log ngay
cả khi quá trình biên dịch không có lỗi; bạn có thể dùng `log` thay cho `pdf`
trong ghi chú để làm việc này.

---

## Xuất ra HTML (make4ht)

Nếu bạn sử dụng một hệ thống LaTeX online, một 'chương trình biên dịch TeX' nữa,
`make4ht`, cũng có thể được sử dụng. Nó sẽ cho output là các trang HTML của văn
bản.

Để có được output như vậy, thêm dòng chú thích sau:

`% !TeX make4ht`
{: .noedit :}

Nếu bạn đang sử dụng một hệ thống TeX được cài đặt sẵn trong máy, bạn cũng có
thể xuất ra HTML bằng câu lệnh terminal

`make4ht  document.tex "2,mathjax"`
{: .noedit :}

Nếu bạn chạy `make4ht` bằng hệ thống TeX cài sẵn, bạn có thể thực hiện nhiều loại
tùy biến khác nhau. Đọc thêm ở
[hướng dẫn sử dụng `make4ht`](https://texdoc.org/pkg/make4ht).

---

[^1]: Trong quá trình phát triển ban đầu của trang này,
      [LaTeX.Online](https://latexonline.cc/) và
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http) cũng đã được sử
      dụng, và chúng tôi muốn gửi lời cảm ơn tới những nhà phát triển của các dịch
      vụ này.
