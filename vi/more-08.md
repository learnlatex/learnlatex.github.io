---
title: "Bổ sung: Bảng trong LaTeX"
---

## Những thứ khác có thể được dùng trong phần khai báo bảng

Vì bài chính không đi qua tất cả những ký tự có thể được dùng trong phần khai
báo bảng, một vài ký tự được giải thích với các ví dụ ở đây. Bạn có thể cần xem
lại các bảng ở phần đầu của [bài chính](lesson-08) để có được cái nhìn tổng quan
về những thứ ta có thể dùng. Ý nghĩa ngắn gọn được cung cấp trong bảng sẽ đủ để
hiểu một số kiểu cột như `m`, `b`, `w` và `W` nếu bạn đã hiểu `l`, `c`, `r` và
`p` (nếu bạn chưa chắc chắn, cứ việc thử chúng). Tuy nhiên ta vẫn cần có một cái
nhìn kỹ hơn về các ký tự khác như `>`, `<`, `@`, `!` hay `|`.

### Thay đổi kiểu chữ trong một cột

Vì `>` và `<` có thể được dùng để đưa mã vào trước hay sau phần nội dung của các
ô trong một cột, ta có thể dùng chúng để thay đổi kiểu chữ trong một cột nào đó.
Ví dụ, nếu bạn muốn in nghiêng cột đầu tiên và thêm một dấu phẩy vào sau cột đó,
ta có thể dùng:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape` làm cho các phần chữ sau đó được in nghiêng, nhưng phạm vi ảnh hưởng
của nó chỉ gói gọn bên trong ô của bảng thôi. Ta sẽ có những cái nhìn sâu hơn về
thay đổi kiểu chữ trong [một vài bài sau](lesson-11).

Bạn có thể muốn ô đầu tiên không bị ảnh hưởng vì nó là header của bảng. Trong
trường hợp như vậy, `\multicolumn` có thể được dùng. Nhớ rằng lệnh này có thể
được dùng để thay đổi kiểu cột trong một ô duy nhất. Xem ví dụ sau.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Thay đổi khoảng cách giữa các cột

Thông thường LaTeX thêm một khoảng trống nhỏ vào trước và sau mỗi cột để các cột
được cách đều nhau. Khoảng trống này được định nghĩa là độ dài `\tabcolsep` ở
hai bên của bảng và `2\tabcolsep` ở giữa hai cột bất kỳ trong bảng. Ta có thể
thay đổi độ dài này thành một số bất kỳ bằng lệnh `\setlength`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Ta có thể thay đổi khoảng cách này thành một đoạn mã bất kỳ (không nhất thiết là
một khoảng trống) bằng `@`. Ký tự khai báo bảng này sẽ bỏ khoảng trống giữa hai
cột hoặc ở hai bên bảng, và đặt đoạn mã vào vị trí đó.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Ta sẽ xem xét `\hspace` [trong một bài sau](lesson-11), nhưng bạn có thể đã
đoán được là nó thêm một khoảng trống ngang có độ rộng cho trước.

Ký tự khai báo bảng `!` hoạt động khá giống `@`, chỉ khác là nó không bỏ phần
khoảng trống giữa các cột mà thêm đoạn mã vào giữa khoảng trống đó.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Đường kẻ dọc

Đôi khi ta cần đến các đường kẻ dọc.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal & Food  & Size   \\[2pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Bạn có thể thấy `|` hoạt động khá giống `!`: nó thêm một đường kẻ dọc vào giữa
hai cột và giữ nguyên các khoảng trống có sẵn. Tuy nhiên `|` có một nhược điểm:
nó không hoạt động tốt với các câu lệnh được cung cấp bởi `booktabs`. Thay vào
đó, ta có thể dùng các đường kẻ ngang mặc định được cung cấp bởi LaTeX: lệnh
`\hline` hoạt động giống `\toprule`, `\midrule` và `\bottomrule`, hay `\cline`
hoạt động giống `\cmidrule`.

## Tùy biến các đường kẻ của `booktabs`

Tất cả các đường kẻ của `booktabs` và `\addlinespace` hỗ trợ một đối số không
bắt buộc trong dấu ngoặc vuông, đó là độ rộng của đường kẻ. Đối số này đi trước
các đối số khác, kể cả đối số không bắt buộc đặt trong dấu ngoặc tròn của
`\cmidrule`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Căn chỉnh các số trong các cột

Bạn có thể căn chỉnh các số trong một cột bằng kiểu cột `S` được cung cấp bởi
gói `siunitx`. Một ví dụ đơn giản với hai cột số được căn thẳng hàng tại dấu
thập phân:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Values} &  {More Values} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

Chú ý rằng tất cả các ô không phải số cần phải được "bảo vệ" bằng cách đưa chúng
vào trong cặp ngoặc nhọn.

Gói `siunitx` cung cấp nhiều cách để tùy biến các số trong nhiều cách khác nhau,
xem [hướng dẫn sử dụng của gói](https://texdoc.net/pkg/siunitx) để có thêm thông
tin.

## Đưa ra độ rộng của cả bảng

Độ rộng của một môi trường `tabular` được xác định tự động dựa trên nội dung của
các ô trong bảng. Có hai cách thông dụng để đưa ra một độ rộng khác cho bảng.

Chú ý rằng ta luôn nên thay đổi kích thước của bảng bằng một trong những cách
dưới (có thể dùng những câu lệnh cỡ chữ như `\small` nếu cần thiết) thay vì thu
nhỏ cả bảng với `\resizebox` và những câu lệnh tương tự.

### `tabular*`

Môi trường `tabular*` nhận thêm một đối số là độ rộng của bảng. Khoảng trống cần
được thêm vào bảng bằng lệnh `\extracolsep`. Khoảng trống này được thêm vào
khoảng giữa các cột từ thời điểm dùng lệnh trở đi. Trong hầu hết trường hợp nó
được sử dụng với `\fill`, một khoảng trống đặc biệt mà tự động kéo ra dài nhất
có thể.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

Môi trường `tabularx`, được cung cấp bởi một gói lệnh cùng tên, có cú pháp tương
tự như `tabular*`, nhưng thay vì thay đổi khoảng cách giữa các cột, nó thay đổi
độ rộng của các cột bằng một kiểu cột mới, `X`. Kiểu cột này tương đương với
`p{...}` với một độ rộng được xác định tự động.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

Không giống các loại bảng khác được mô tả trong bài này, `tabularx` cần phải tự
viết bảng nhiều lần để thử các độ rộng phù hợp nhất cho các cột. Do đó, việc sử
dụng môi trường này có một số nhược điểm, xem
[hướng dẫn sử dụng gói](https://texdoc.net/pkg/tabularx) để biết thêm thông tin.

## Bảng trên nhiều trang

Một `tabular` tạo ra một "hộp" không thể được chia nhỏ bao quanh bảng, do đó
bảng phải đủ nhỏ để có thể để vừa trong một trang, và thường được đặt trong môi
trường linh động `table`.

Nhiều gói cung cấp các phiên bản bảng khác với cú pháp tương tự mà có cho phép
chia bảng trên nhiều trang. Ví dụ sau sử dụng gói `longtable`:

```latex
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Entry & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
A Wider Entry & b\\  
\end{longtable}

\end{document}
```

`longtable` có thể giữ được độ rộng của cột trên tất cả các trang, tuy nhiên để
làm được điều này nó có thể cần nhiều lần chạy LaTeX.

## Ghi chú trong bảng

Thông thường ta có thể cần một khu vực để ghi chú ở phía dưới các bảng. Gói
`threeparttable` đơn giản hóa các markup cho những bảng như vậy, và thêm phần
ghi chú vào một hàng "đặc biệt" có cùng chiều rộng với bảng. Bạn có thể đọc thêm
về gói tại [hướng dẫn sử dụng của nó](https://texdoc.net/pkg/threeparttable),
ở đây ta sẽ chỉ xét một ví dụ.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Sắp chữ trong các cột hẹp

Những thiết lập tách dòng mặc định hiểu rằng cột của bạn đủ rộng để có nhiều lựa
chọn trong việc tách dòng. Ví dụ sau cho thấy một vài cách giải quyết khi cột
của bạn tương đối nhỏ. Cách đầu tiên thay đổi khoảng cách giữa các từ và TeX sẽ
xuất ra một cảnh báo về "Underfull lines". Sử dụng `\raggedright` thường xử lý
được cảnh báo này nhưng nó có thể làm một số dòng nhìn không được đều. Lệnh
`\RaggedRight` từ gói `ragged2e` có thể giải quyết việc này: nó cho phép sự biến
thiên trong độ dài của các dòng, nhưng nó cũng tách các âm tiết (hyphenate) khi
cần thiết, như ta thấy trong bảng thứ ba.

Chú ý việc sử dụng `\arraybackslash` ở đây: nó thay đổi định nghĩa của `\\` để
câu lệnh này kết thúc hàng hiện tại của bảng.

Một kỹ thuật khác, như trong bảng thứ tư, là việc sử dụng một cỡ chữ nhỏ hơn để
các cột không quá hẹp so với kích thước chữ.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\end{table}

\end{document}
```

## Định nghĩa kiểu cột mới

Như đã lấy ví dụ trong bài chính, gói `array` cho phép những sự khai báo như
`>{\bfseries}c` để làm một cột trở nên đậm. Để cho tiện lợi, ta có thể định
nghĩa kiểu cột mới cho những sự khai báo như vậy. Ví dụ:

```latex
\newcolumntype{B}{>{\bfseries}c}
```

sẽ cho phép việc sử dụng `B` trong bảng để khai báo một cột in đậm và căn giữa.

## Một vài trick cho sự căn chỉnh theo chiều dọc

Ta có thể lồng các `tabular`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Chú ý rằng ta có thể thay đổi vị trí tương đối theo chiều dọc của môi trường
`tabular` với đoạn mã xung quanh bằng một đối số không bắt buộc cho môi trường
này: ta có thể dùng `t` (**t**op &ndash; phía trên), `c` (**center** &ndash;
ở giữa) hay `b` (**b**ottom &ndash; phía dưới). Một ví dụ:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Khoảng cách giữa các hàng trong bảng

Trong bài chính ta đã nói về `\addlinespace` từ gói `booktabs` mà có thể được
dùng để thêm khoảng trống giữa hai cặp hàng bất kỳ.

Ta có thể thay đổi khoảng trống giữa tất cả các cặp hàng bằng việc thay đổi các
tham số ảnh hưởng đến sự phân cách các hàng, đó là `\arraystretch` và
`\extrarowheight` (câu lệnh sau được định nghĩa trong gói `array`). Ví dụ,

```latex
\renewcommand\arraystretch{1.5}
```

sẽ gia tăng khoảng cách giữa các hàng 50%.

Thông thường, khi dùng `\hline`, ta nên gia tăng độ cao của các hàng mà không
gia tăng "độ sâu" của chúng. Ta có thể dùng `\extrarowheight` cho việc này.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
