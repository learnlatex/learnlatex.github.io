---
title: "Bảng"
---

## Bảng cơ bản

Các bảng trong LaTeX được tạo ra bằng môi trường `tabular`. Bài này sẽ coi như
bạn đã khai báo gói `array` &ndash; gói này gia tăng nhiều tính năng cho các
bảng trong LaTeX và không được thêm vào LaTeX mặc định chỉ vì nhiều lý do bất
đắc dĩ. Do đó, hãy thêm dòng sau vào phần khai báo và ta có thể đi tiếp.

<!-- {% raw %} -->
```latex
\usepackage{array}
```
<!-- {% endraw %} -->

Để tạo ra một bảng `tabular`, ta cần nói cho TeX biết rằng có bao nhiều cột và
các cột được căn ra sao. Điều này được thực hiện trong một đối số bắt buộc,
thường được gọi là phần khai báo bảng, cho môi trường `tabular`. Ta dùng các ký
tự để ký hiệu các cột &ndash; các ký tự này được gọi là các ký tự khai báo hay
các "kiểu cột". Những kiểu cột được định nghĩa sẵn là:

<!-- don't line wrap this table, markdown seems to not support this -->

| kiểu cột | ý nghĩa |
| --- |:-- |
| `l` | cột căn lề trái |
| `c` | cột căn giữa |
| `r` | cột căn lề phải |
| `p{độ rộng}` | cột có độ rộng xác định trước; chữ sẽ được căn cả hai lề và được tách dòng tự động |
| `m{độ rộng}` | giống `p` nhưng được căn giữa theo chiều dọc của hàng |
| `b{độ rộng}` | giống `p` nhưng được căn dưới theo chiều dọc của hàng |
| `w{căn lề}{độ rộng}` | cột có độ rộng xác định trước, nếu phần chữ quá rộng sẽ được viết tràn mà không có thông báo gì. Bạn có thể chọn căn lề theo chiều ngang bằng `l`, `c` hay `r`. |
| `W{căn lề}{độ rộng}` | giống `w` nhưng sẽ có một cảnh báo `Overfull \hbox` nếu phần chữ quá rộng và phải viết tràn. |

Một vài ký tự khai báo khác không ký hiệu một cột nhưng cũng có thể khá hữu ích:

<!-- don't line wrap this table, markdown seems to not support this -->

| ký tự khai báo | ý nghĩa |
| ---  | :-- |
| `*{n}{xâu}` | tương đương với việc viết `xâu` n lần trong phần khai báo cột. Ký tự này có thể có ích khi bạn cần phải làm nhiều cột có kiểu giống hệt nhau. |
| `>{mã}` | thêm `mã` trước phần mã của mọi ô trong cột tiếp theo (bạn có thể dùng cách này để thay đổi kiểu chữ trong cả một cột) |
| `<{mã}` | thêm `mã` sau phần mã của mọi ô trong cột trước |
| <span>`|`</span>  | thêm một đường kẻ dọc |
| `@{mã}` | thay khoảng trống giữa hai cột bằng `mã` |
| `!{mã}` | thêm `mã` vào phần giữa của khoảng trống có sẵn |

Hai bảng trên có tất cả những kiểu cột được định nghĩa bởi lõi LaTeX và gói
`array`. Một số kiểu cột bổ sung, có được ở một số gói khác nhau, được nêu trong
[bài bổ sung](more-08) của bài này.

Các cột loại `l`, `c`, `r` sẽ có độ rộng là độ rộng của ô rộng nhất. Mỗi cột cần
được định nghĩa trước, do đó nếu bạn muốn ba cột căn giữa, bạn cần dùng `ccc`.
Các khoảng trống được bỏ qua, do đó `c c c` cũng không khác biệt.

Trong phần thân bảng, các cột được phân tách bằng ký tự `&` và một dòng mới được
bắt đầu bằng `\\`.

Ta đã có tất cả những gì mình cần cho bảng đầu tiên của ta. Trong đoạn mã ví dụ
dưới đây, `&` và `\\` được làm cho thẳng hàng với nhau. Điều này không bắt buộc
trong LaTeX, nhưng nó giúp việc đọc mã nguồn dễ dàng hơn.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

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

Nếu một cột có nội dung dài bạn sẽ gặp một số vấn đề nếu chỉ dùng `l`, `c` hay
`r`. Xem điều gì xảy ra trong ví dụ sau:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Vấn đề đó là kiểu cột `l` đưa nội dung của ô vào cột với chiều rộng tự nhiên của
nó, kể cả khi chiều rộng này là quá rộng. Để xử lý việc này ta cần kiểu `p`.
Kiểu này in nội dung của cột theo các đoạn văn có chiều rộng được cho trước và
căn trên theo chiều dọc &ndash; điều bạn sẽ cần trong hầu hết trường hợp. So
sánh ví dụ trên với ví dụ dưới đây:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Nếu bảng của bạn có nhiều cột có cùng loại, ta thường cần một loại vòng lặp để
việc khai báo cột được nhanh hơn. Ta có thể dùng ký tự khai báo `*` cho việc
này. Theo bảng trên, `*{6}{c}` tương đương với `cccccc`. Để cho thấy điều đó,
đây là bảng trong ví dụ đầu tiên của bài này nhưng với cú pháp mới ta vừa học
được:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Thêm các đường kẻ trong bảng

A word of advice prior to introducing rules; lines should be used really
sparsely in tables, and normally vertical ones look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines; instead you
should get familiar with the facilities of the `booktabs` package, which is why
it is covered here first. For the sake of completeness the standard
lines are shown in the [more-info](more-08) page.

`booktabs` provides four different types of lines. Each of those commands has to
be used as the first thing in a row or following another rule.
Three of the rule commands are: `\toprule`, `\midrule`, and
`\bottomrule`. From their names the intended place of use should be clear:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array, booktabs}

\begin{document}
\begin{tabular}{lll}
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

The fourth rule command provided by `booktabs` is `\cmidrule`. It can be used to
draw a rule that doesn't span the entire width of the table but only a specified
column range. A column range is entered as a number span: `{`_number_`-`_number_`}`.
Even if you only want to draw the rule for a single
column you need to specify that as a range (with both numbers matching).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array, booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

There is another useful feature of `\cmidrule`. You can shorten it on either end
with an optional argument enclosed in parentheses:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array, booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

You may have guessed that `r` and `l` mean the rule is shortened on its **r**ight
and **l**eft end, respectively.

Sometimes a rule would be too much of a separation for two rows but to get
across the meaning more clearly you want to separate them by some means. In this
case you can use `\addlinespace` to insert a small skip.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  \addlinespace
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Merging cells

In LaTeX you can merge cells horizontally by using the `\multicolumn` command. It
has to be used as the first thing in a cell. `\multicolumn` takes three
arguments:

1. The number of cells which should be merged
2. The alignment of the merged cell
3. The contents of the merged cell

The alignment can contain anything legal in a `tabular`'s preamble, but _only a
single column type_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array, booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

You can also use `\multicolumn` on a single cell to prevent the
application of whatever you defined in the table preamble for the
current column.  The following uses this method to center the
table's head row:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array, booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Merging cells vertically isn't supported by LaTeX.
Usually it suffices to leave cells empty to give the reader the
correct idea of what was meant without explicitly making cells span rows.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{array, booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Exercises

Use the simple table example to start experimenting with tables. Try out
different alignments using the `l`, `c` and `r` column types. What happens if
you have too few items in a table row? How about too many? Experiment with the
`\multicolumn` command to span across columns.
