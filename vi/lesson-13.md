---
title: "Cấu trúc cho các văn bản dài"
---

<script>
preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

## Thiết lập cấu trúc cho các tệp mã nguồn

Khi bạn viết một văn bản dài, bạn có thể muốn chia mã của bạn thành nhiều tệp
khác nhau. Một cách thường thấy là có một tệp chính ("tệp gốc"), và một tệp cho
mỗi chương (cho một cuốn sách hoặc một luận án) hoặc mỗi tệp cho một phần dài
(cho một bài báo dài).

LaTeX cho phép ta chia nhỏ mã và kiểm soát chúng. Có hai lệnh quan trọng ở đây:
`\input` và `\include`. Ta có thể dùng `\input` để LaTeX hiểu là "coi như tệp
kia vừa được gõ lại ở đây", vì thế nó gần như có thể được dùng trong mọi trường
hợp. Lệnh `\include` chỉ chạy tốt đối với các chương, vì nó sang trang mới và
thực hiện một vài thay đổi nội bộ. Tuy nhiên nó lại có điểm mạnh lớn: nó cho
phép ta chọn chương nào để thêm vào, do đó ta có thể làm việc với một phần văn
bản thay vì lúc nào cũng phải biên dịch tất cả mọi thứ.

Do đó, một văn bản dài có thể trông như thế này:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{A Sample Book}
\author{John Doe \and Joe Bloggs}

\IfFileExists{append.aux}
{
\includeonly{
%  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Ban đầu, hãy thêm tất cả các tệp con và chạy LaTeX
% để có được những tệp aux cần thiết.
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

Ta sẽ nhìn vào những đặc điểm của tệp ví dụ này ở dưới. (Các tệp cần thiết để
biên dịch, ví dụ `front.tex` hay `chap2.tex` được thêm ở dưới cùng của trang
này.)

## Dùng `\input`

Lệnh `\input` khá tốt cho những phần của một tệp dài mà _không_ phải những
chương khác nhau. Ví dụ, ta đã dùng nó để tách trang đầu và trang cuối. Điều này
làm cho tệp gốc ngắn gọn và rõ ràng hơn, hơn nữa ta có thể dùng lại những trang
này trong một văn bản khác. Ta còn dùng lệnh này cho những phần không phải
chương ở phần đầu của "cuốn sách" như phần lời nói đầu chẳng hạn. Việc này làm
cho tệp chính gọn và dễ đọc hơn rất nhiều.

## Dùng `\include` và `\includeonly`

Lệnh `\include` hoạt động tốt đối với các chương, nên ta đã dùng chúng cho mỗi
chương của văn bản. Ta đã chọn những chương nào sẽ được dùng bằng `\includeonly`
&ndash; bạn có thể thấy đối số của lệnh này là một danh sách các tên tệp phân
tách bởi dấu phẩy. Khi bạn dùng `\includeonly`, bạn có thể giảm thời lượng biên
dịch bằng việc chỉ biên dịch những phần ta đang chỉnh sửa. Thêm nữa, một trong
những điểm quan trọng của `\includeonly` đó là LaTeX sẽ dùng tất cả những thông
tin về đánh dấu nhãn cũng như tham chiếu từ tệp aux của những tệp khác cũng được
`\include`.

## Thêm mục lục vào văn bản

Lệnh `\tableofcontents` dùng tất cả những thông tin có được từ các lệnh tiêu đề
mục trong văn bản để tạo một mục lục. Nó có một tệp aux của riêng nó với đuôi
`.toc`, nên bạn có thể phải chạy LaTeX hai lần liền để `\tableofcontents` có
được đầy đủ thông tin. Có những lệnh tương tự như `\listoffigures` (in ra danh
sách các hình vẽ) và `\listoftables` (in ra danh sách các bảng) hoạt động với
các lệnh `\caption` trong các môi trường linh động. Hai lệnh này cũng có tệp aux
riêng, với đuôi tệp lần lượt là `.lof` và `.lot`.

## Chia văn bản thành các phần

Các lệnh `\frontmatter`, `\mainmatter` và `\backmatter` được dùng để thay đổi
các định dạng trong trang. Ví dụ, `\frontmatter` thay đổi kiểu của số trang
thành các chữ số La Mã.

Lệnh `\appendix` thay đổi việc đánh số phần thành `A`, `B`, v.v..., vì thế
chương đầu tiên sau `\appendix` sẽ được in ra với tên là "Phụ lục A".

## Bài tập

Thử thao tác với cấu trúc cơ bản của văn bản ví dụ, thử thêm và lược bỏ các tên
tệp trong `\includeonly` để xem sự thay đổi.

Thêm một vài thành phần linh động và tạo ra một danh sách các hình và các bảng.
Nếu bạn dùng một hệ thống LaTeX được cài trong máy của mình, bạn cần bao nhiêu
lần chạy LaTeX để có được một mục lục và những danh sách này đầy đủ? (Những hệ
thống LaTeX online chạy LaTeX theo một cách "bí mật" nên những thông tin về số
lần chạy không thật sự rõ ràng.)

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Preface}
The preface text. See \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introduction}
The first chapter text.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Something}
The second chapter text.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
The first appendix text.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
For \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
The back cover
\end{center}
```
<!-- {% endraw %} -->

----
