---
lang: "vi"
title: "Bảng trong LaTeX"
---

## Bảng cơ bản

Các bảng trong LaTeX được tạo ra bằng môi trường `tabular`. Bài này sẽ coi như
bạn đã khai báo gói `array` &ndash; gói này gia tăng nhiều tính năng cho các
bảng trong LaTeX và không được thêm vào LaTeX mặc định chỉ vì nhiều lý do bất
đắc dĩ. Do đó, hãy thêm dòng sau vào phần khai báo và ta có thể đi tiếp.


```latex
\usepackage{array}
```
{: .noedit :}

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
\usepackage[T1]{fontenc}
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
\usepackage[T1]{fontenc}
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
\usepackage[T1]{fontenc}
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
\usepackage[T1]{fontenc}
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

Một lời khuyên trước khi ta đến với các đường kẻ: trong các bảng ta nên hạn chế
tối đa các đường kẻ, và thông thường ta không nên vẽ các đường kẻ dọc. Trên thực
tế, ta không nên dùng bất cứ câu lệnh hay công cụ có sẵn nào để vẽ đường kẻ cả.
Thay vào đó, ta nên làm quen với các câu lệnh của gói `booktabs`, đó là lý do
chúng sẽ được nói đến trước. Nếu bạn đọc muốn tìm hiểu về những công cụ có sẵn
được cung cấp bởi lõi LaTeX, bạn có thể xem [bài bổ sung](more-08).

`booktabs` cung cấp bốn câu lệnh đường kẻ ngang khác nhau (chú ý ta nên bỏ *mọi*
đường kẻ dọc). Mỗi câu lệnh có thể được dùng ở ngay đầu hàng hay ngay sau một
câu lệnh cùng nhóm. Ba câu lệnh trong số đó là `\toprule` (đường trên cùng của
bảng), `\midrule` (đường ở giữa bảng) và `\bottomrule` (đường dưới cùng của
bảng).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

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

Câu lệnh còn lại trong nhóm là `\cmidrule`. Nó có thể được dùng để vẽ một đường
kẻ ngang không đi qua toàn bộ chiều ngang của bảng mà chỉ nối trong một số cột
nhất định. Vùng cột này được viết dưới dạng `{số-số}`. Ngay cả khi bạn chỉ muốn
vẽ đường kẻ ngang cho một cột duy nhất bạn vẫn phải viết theo dạng trên (với hai
`số` bằng nhau).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

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

`\cmidrule` còn cho phép bạn làm ngắn ở hai đầu với một tùy biến không bắt buộc
đặt trong cặp ngoặc tròn:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

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

Bạn có thể đã đoán được rằng `r` và `l` làm đường kẻ bị làm ngắn lần lượt ở bên
phải (**r**ight) và bên trái (**l**eft).

Đôi khi một đường kẻ ngang là hơi quá nhiều; ta chỉ cần một khoảng trống nhỏ
giữa hai hàng. Ta có thể dùng `\addlinespace` cho việc đó.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

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

## Gộp các ô với nhau

Trong LaTeX, ta có thể gộp các ô cùng hàng bằng lệnh `\multicolumn`. Nếu được sử
dụng, nó phải là phần đầu tiên trong ô. `\multicolumn` nhận ba đối số:

1. Số lượng ô sẽ được gộp
2. Căn lề của ô đã được gộp
3. Nội dung của ô gộp

Đối số căn lề giống như phần khai báo bảng của `tabular`, nhưng chỉ được có đúng
_một_ ký tự kiểu cột duy nhất.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

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

Ta cũng có thể dùng `\multicolumn` trong một ô duy nhất để thay đổi kiểu cột cho
riêng ô đó. Ví dụ sau dùng cách này để căn giữa hàng trên cùng của bảng:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

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

Gộp các ô theo chiều dọc không được hỗ trợ bởi phần LaTeX gốc. Thông thường, ta
chỉ cần để các ô ở phía dưới trống là đủ để người đọc hiểu, mà không cần phải
thật sự gộp các ô trong cột.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

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

## Bài tập

Thử thực hiện một số thao tác với bảng. Thử các loại căn lề khác nhau với kiểu
cột `l`, `c` và `r`. Điều gì sẽ xảy ra nếu bạn để một hàng có quá ít ô (không đủ
cho các cột)? Nếu có quá nhiều ô (có quá nhiều để điền vào các cột)? Thử thao
tác với `\multicolumn` để gộp các ô trên các cột với nhau.
