---
lang: "vi"
title: "Sử dụng trang learnlatex.org"
description: "Một vài nét khái quát về cách sử dụng và điều hướng trong hệ thống các bài trong trang learnlatex.org."
permalink: /vi/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>


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

* Trang web này sử dụng [ACE](https://ace.c9.io) để hiển thị cũng như thực hiện
  các thao tác với các đoạn mã ví dụ.

  Bạn có thể thay đổi giao diện của ACE (ví dụ chuyển sang chế độ tối) trong
  [Cài đặt trang](settings). Bạn cũng có thể thử các giao diện khác nhau bằng cách
  dùng <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> trên Mac) khi đang
  ở bất cứ ví dụ nào trong trang &ndash; [nó sẽ mở một bảng cài đặt](javascript:acesettings())
  cho phép ta thử mọi cài đặt của ACE.
  
  Trang GitHub của ACE có một trang khá hữu ích về
  [danh sách các phím tắt](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).

* [CodeMirror6](https://codemirror.net/).

#### Ba cách biên dịch ví dụ

Có ba cách bạn có thể dùng để chạy phần mã trước hoặc sau khi sửa:

* Dùng dịch vụ Overleaf
* Dùng dịch vụ TeXLive.net
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

Không giống như trên TeXLive.net, bạn có thể lưu lại các đoạn mã trên Overleaf,
và sử dụng chúng sau.

##### Dùng dịch vụ TeXLive.net

Nút <button style="padding:0 1px;font-size:90%">Chạy với TeXLive.net</button>
sẽ chuyển đoạn mã tới [TeXLive.net](https://texlive.net).[^1]

TeXLive.net được phát triển đặc biệt dành cho trang này, và nó sử dụng
[PDF.js](https://mozilla.github.io/pdf.js) để hiển thị các tệp PDF trên
điện thoại cũng như các trình duyệt không có trình đọc PDF mặc định.

Tệp PDF output (hoặc một phần của các thông báo lỗi nếu quá trình biên dịch
gặp vấn đề) sẽ được hiện ra ngay phía dưới ví dụ. Nút
<button style="padding:0 1px;font-size:90%">Xóa output</button> có thể được
dùng để bỏ phần output này đi nếu bạn thấy nó không còn cần thiết.

Chú ý rằng **TeXLive.net** không cần bạn phải lập tài khoản nên nó rất thuận
tiện cho những ví dụ nhỏ. Tuy nhiên, nó không hỗ trợ lưu văn bản. Tất cả những
thay đổi bạn đã thực hiện sẽ bị mất sau khi bạn rời khỏi trang.

##### Dùng hệ thống TeX được cài đặt sẵn trong máy

Nếu bạn đã có một hệ thống TeX được cài đặt trong máy, bạn có thể sao chép
đoạn mã vào trình soạn mã của mình và thực hiện các thao tác ở đó.

### Xử lý lỗi

Các ví dụ trên trang đều được dựa trên một hệ thống TeX đã được cập nhật lên
phiên bản mới nhất. Chúng đều biên dịch được với các dịch vụ ta đã liệt kê ở
trên: Overleaf và TeXLive.net. Do vậy, nếu bạn nhận thông báo lỗi khi biên dịch,
bạn nên kiểm tra lại xem hệ thống TeX của mình đã được cập nhật hay chưa.

---

## Chọn trình biên dịch TeX

Khi một đoạn mã được đưa lên, trình dịch `pdflatex`
sẽ được sử dụng mặc định.

Bạn có thể thay đổi trình dịch thành `latex`, `pdflatex`, `xelatex`,
`lualatex`, `platex` hay `uplatex` bằng cách dùng một ghi chú tương tự như sau:

```
% !TEX <bất cứ đoạn chữ nào> lualatex
```
{: .noedit :}

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

Nếu không có bất cứ ghi chú dạng `% !TeX` nào, `pdflatex` sẽ được sử dụng trừ
khi bạn đã yêu cầu một trình biên dịch mặc định khác trong [Cài đặt trang](settings).

---

## Chọn cách tệp PDF được hiển thị trong trình duyệt

Nếu bạn sử dụng TeXLive.net, mặc định các tệp PDF được hiển thị với sự
trợ giúp của [PDF.js](https://mozilla.github.io/pdf.js), bởi vì thư viện này có
thể hoạt động ổn định trên rất nhiều trình duyệt khác nhau.

Nếu bạn muốn sử dụng trình đọc PDF mặc định của trình duyệt, bạn có thể dùng một
ghi chú dưới dạng

```
% !TEX <bất cứ đoạn chữ nào> pdf
```
{: .noedit :}

Bạn có thể sử dụng `pdfjs` thay cho `pdf` ở ghi chú trên; khi đó PDF.js sẽ được
sử dụng để hiển thị PDF. Để debugging thuận lợi, bạn có thể cần đến tệp log ngay
cả khi quá trình biên dịch không có lỗi; bạn có thể dùng `log` thay cho `pdf`
trong ghi chú để làm việc này.

Thay vì dùng `% !TeX`, bạn cũng có thể dùng cách hiển thị mặc định trong
[Cài đặt trang](settings). Các cài đặt được lưu riêng cho từng trình duyệt, nên
bạn có thể chọn `pdfjs` cho trình duyệt trên thiết bị di động nhưng chọn `pdf`
cho trình duyệt trên máy tính.

---

## Xuất ra HTML (make4ht, LaTeXML, lwarp)

Nếu bạn sử dụng TeXLive.net, bạn cũng có thể yêu cầu xuất ra dạng HTML thay vì
PDF. Điều đó được thực hiện bằng việc sử dụng một trong các lựa chọn xuất
`make4ht`, `LaTeXML` hoặc `lwarp` (bạn vẫn có thể dùng lựa chọn này cùng lúc với
lựa chọn trình biên dịch như `xelatex` hay `pdflatex`).

Để có được output như vậy, thêm dòng chú thích như sau vào đoạn mã:

```
% !TeX <lựa chọn xuất>
```
{: .noedit :}

Thay `<lựa chọn xuất>` bằng `make4ht`, `LaTeXML` hoặc `lwarp` để sử dụng lựa
chọn xuất tương ứng.

Ngoài cách này, bạn cũng có thể vào [Cài đặt trang](settings) để đặt `make4ht`,
`LaTeXML` hoặc `lwarp` làm cách thức xuất mặc định.

Nếu bạn đang sử dụng một hệ thống TeX được cài đặt sẵn trong máy, bạn cũng có
thể xuất ra HTML với `make4ht` bằng câu lệnh terminal dưới đây

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

với argument `-x` hoặc `-l` nếu bạn muốn dùng XeLaTeX hoặc LuaLaTeX tương ứng.

Nếu bạn chạy `make4ht` bằng hệ thống TeX cài sẵn, bạn có thể thực hiện nhiều loại
tùy biến khác nhau. Đọc thêm ở
[hướng dẫn sử dụng `make4ht`](https://texdoc.org/pkg/make4ht).

Đối với `LaTeXML`, nếu bạn cần dùng nó bằng hệ thống TeX trên máy của mình, bạn
cần cài đặt LaTeXML riêng (nó không đi cùng TeX Live hay MiKTeX). Sau đó dùng
lệnh terminal sau:

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
  --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
  --destination=document.html" document.tex
```
{: .noedit :}

Các loại tùy biến LaTeXML cũng có thể được sử dụng, xem thêm tại
[hướng dẫn sử dụng LaTeXML](https://dlmf.nist.gov/LaTeXML/manual/).

Các tùy biến của `lwarp` không được nêu ở đây, vì nó vẫn đang trong giai đoạn
thử nghiệm. Tùy biến đang được sử dụng cho TeXLive.net có thể được xem ở
[đây](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).

---

[^1]: Trong quá trình phát triển ban đầu của trang này,
      [LaTeX.Online](https://latexonline.cc/) và
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http) cũng đã được sử
      dụng, và chúng tôi muốn gửi lời cảm ơn tới những nhà phát triển của các dịch
      vụ này.
