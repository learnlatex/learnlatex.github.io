---
lang: "vi"
title: "Bổ sung: Xử lý lỗi"
---

## Các lỗi được phát hiện khi kết thúc các môi trường

Một số môi trường (đáng chú ý nhất là các môi trường của `amsmath` cũng như các
bảng tạo bởi `tabularx`) thu nhận toàn bộ nội dung môi trường trước khi xử lý
phần nội dung này. Điều này nghĩa là bất kỳ lỗi nào trong nội dung môi trường sẽ
được "phát hiện" tại dòng cuối của môi trường này. Tuy nhiên, như ta thấy trong
bài chính, TeX vẫn đánh dấu vị trí lỗi chính xác.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Lỗi sẽ được thông báo tại dòng 11:

```
l.12 \end{align}
```
{: .noedit :}

Tuy nhiên, trên thực tế lỗi lại nằm ở dòng 9, như được hiển thị bởi hai dòng kế
tiếp của thông báo lỗi:

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Những lỗi được tạo ra do những lỗi trước đó

Khi chạy LaTeX trong chế độ tương tác, tại mỗi lỗi bạn có thể dừng toàn bộ quá
trình xử lý với `x`, sửa văn bản và biên dịch lại. Tuy nhiên, nếu bạn dùng `s`
hay dùng một trình sửa mã/một hệ thống online, TeX sẽ cố gắng tự sửa lỗi. Tuy
nhiên quá trình tự sửa lỗi này đôi khi lại vô tình tự gây ra thêm lỗi.

Vì vậy, đừng bận tâm nhiều vào _số_ lỗi được phát hiện. Luôn chú ý vào việc sửa
lỗi đầu tiên.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

Lỗi ở đây là ký tự `_`; nó cần được nhập như sau: `\_`.

TeX có phát hiện lỗi này một cách chính xác với thông báo lỗi _đầu tiên_:

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Tuy nhiên, nếu bạn yêu cầu TeX tiếp tục xử lý, TeX sẽ cố gắng sửa chữa bằng việc
thêm một `$` để `_` được xem như ký tự subscript trong chế độ toán. Chế độ này
tiếp tục cho đến `$` tiếp theo, do đó `\alpha` bị đưa ra khỏi chế độ toán, điều
này cho ta thêm một lỗi nữa.

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Những lỗi không được thông báo

Một vài lỗi hiểm hóc, đặc biệt là những lỗi không thể được phát hiện cho tới khi
TeX đã đọc hết tệp văn bản, sẽ không cho ta một thông báo lỗi nào, mà cùng lắm
chỉ là một cảnh báo (warning) trong tệp log.

Nếu bạn thử ví dụ sau bằng LaTeX CGI, nó sẽ vẫn cho ta PDF. Để xem cảnh báo
trong tệp log, hãy thêm `% !TEX log` vào đầu đoạn mã.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text)  normal size?

\end{document}
```

Trong ví dụ này, lệnh đổi cỡ chữ được kết thúc bằng `)` thay vì `}`. Điều này
không được phát hiện cho tới điểm cuối của tệp &ndash; tại đây TeX phát hiện ra
vẫn còn một nhóm chưa được đóng. Do đó, nó cho ta biết số dòng mà ở đó nhóm được
bắt đầu (vị trí của `{`). Nó không thể phát hiện lỗi thực tế, do `)` được coi
như "phần văn bản bình thường".

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}

<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5, false);
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>
