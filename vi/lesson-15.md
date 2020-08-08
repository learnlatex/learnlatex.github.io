---
title: "Xử lý lỗi"
---

Không giống như các hệ thống xử lý văn bản thường gặp khác, LaTeX có một chu
trình "Sửa/Biên dịch/Xem kết quả" giống như nhiều ngôn ngữ lập trình, và như
trong lập trình thì quá trình biên dịch có thể xảy ra lỗi và người dùng phải xử
lý những lỗi này.

Bài này đưa ra một số ví dụ của những lỗi thường gặp nhất trong LaTeX.

Bạn nên sử dụng chức năng chỉnh sửa mã để thử sửa văn bản và kiểm tra xem bạn đã
sửa được những lỗi này hay chưa.

## Không tìm thấy pdflatex

Khi bắt đầu với LaTeX thì mọi người thường gặp lỗi dạng sau:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

trên Windows hay

```
bash: pdflatex: command not found
```
{: .noedit :}

trên Linux.

Đây không phải là một lỗi TeX, nó là một lỗi từ hệ điều hành cho thấy TeX chưa
được cài đặt đúng cách. Một lỗi thường gặp là việc bạn cài đặt một _trình soạn
thảo mã nguồn_ như TeXworks hay TeXShop nhưng không cài đặt một _hệ thống TeX_
như TeX Live hay MiKTeX.

## Cấu trúc của một thông báo lỗi {{ site.tex }}

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
```

Tệp này tạo ra một thông báo lỗi như sau trong tệp log:

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* Dòng đầu tiên, đánh dấu với `!`, cho ta thông báo lỗi chính (lệnh không được
  định nghĩa (undefined command) trong trường hợp này).
* Hai dòng kế tiếp cho ta biết dòng mã mà TeX đang xử lý, với một ký tự xuống
  dòng đánh dấu vị trí TeX đã đi tới. Trong ví dụ trên, lệnh chưa định nghĩa
  chính là token cuối cùng được TeX đọc, tức là `\textbold`, từ cuối cùng trước
  ký tự xuống dòng. Sau dấu xuống dòng là các token còn lại `{hmmm}`; dù những
  token này có thể được đọc bởi TeX như đối số của `\textbold` nhưng TeX chưa xử
  lý chúng.
* Có thể có thêm một vài dòng sau điểm này cung cấp cho ta thêm thông tin về lỗi.
* Dòng tiếp theo bắt đầu với `l.` đi cùng một số. Đây là số thứ tự của dòng mã
  mà ở đó TeX phát hiện lỗi.

* Dòng cuối cùng là một ký tự `?`. Nếu bạn dùng TeX trong chế độ tương tác, bạn
  có thể đưa lệnh cho TeX tại điểm này, và nếu bạn gõ lệnh `s` thì TeX sẽ tiếp
  tục xử lý phần còn lại của văn bản. Tuy nhiên, hầu hết các trình mã nguồn và
  các hệ thống TeX online chạy TeX trong một chế độ không dừng tại lỗi mà vẫn
  tiếp tục tự động cố gắng xử lý phần còn lại của văn bản.

Chú ý rằng TeX không phát hiện lỗi tại điểm mà lệnh được định nghĩa, và trên
thực tế, nếu `\mycommand` được định nghĩa nhưng không được sử dụng, quá trình
biên dịch sẽ không có lỗi gì cả. Vì thế, mặc dù lỗi được phát hiện ở dòng 7, lỗi
"thực" lại nằm ở việc định nghĩa `\mycommand` tại dòng 3. Do đó, việc đọc toàn
bộ thông báo lỗi là một việc quan trọng.

Chú ý rằng một số trình sửa mã nguồn hiện những bản "tóm tắt" của thông báo lỗi.
Những tóm tắt này có thể dễ gây hiểu nhầm, ví dụ như

`line 7: undefined command: ...\mycommand`

vì nó làm cho ta tưởng rằng `\mycommand` không được định nghĩa.


## Ngoặc nhọn không khớp

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Ở đây, lỗi là một dấu đóng ngoặc nhọn `}` được dùng để kết thúc một đối số không
bắt buộc. Ngoặc nhọn này không khớp với bất kỳ ký tự mở ngoặc nhọn `{` nào, do
đó nó sinh lỗi trong quá trình LaTeX xử lý các đối số, và bạn nhận được một lỗi
internal không rõ ràng lắm:

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Mặc dù thông báo lỗi không giúp ích được nhiều, hai dòng kế tiếp có cho ta thấy
vị trí của lỗi bằng việc sử dụng ký tự xuống dòng tại điểm lỗi:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


## Không tìm thấy tệp

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

Tệp này sinh ra lỗi sau

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Chú ý rằng lỗi này có thể được gây ra bởi hai lý do khác nhau: một lỗi đánh máy
như ở ví dụ này (có thể sửa được bằng cách sửa tên gói lệnh), hay việc tệp cần
tìm đang thật sự bị thiếu và cần phải được cài đặt đúng cách.

## Dòng trống trong các môi trường toán

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

cho ta một lỗi khá tối nghĩa:

```
! Missing $ inserted.
```
{: .noedit :}

Nhưng việc sửa lỗi khá đơn giản. Các môi trường toán không được chứa các dòng
trống, do vậy những dòng trống này cần phải được xóa đi.

## Bài tập

Thử sửa các lỗi trong các ví dụ trên.

Tạo ra một văn bản nhỏ với những lỗi khác nhau và ghi nhớ cấu trúc những thông
báo lỗi bạn nhận được.

<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(2, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(2, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(2, 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(6, 0, false);
  }, false);
</script>
