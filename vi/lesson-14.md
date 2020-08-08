---
title: "Chọn fonts và sử dụng các trình biên dịch Unicode"
---

Khi TeX và LaTeX bắt đầu được sử dụng rộng rãi, nó chỉ có hỗ trợ cho một số ngôn
ngữ châu Âu, cùng với một vài tính năng cho các bảng chữ cái khác như tiếng Hy
Lạp hay tiếng Nga.

Ban đầu, các chữ cái có dấu được nhập bằng những lệnh như `\c{c}` tạo ra "ç" hay
`\'e` tạo ra `é`. Trong khi một số người vẫn tiếp tục sử dụng cách này, hầu hết
mọi người muốn nhập trực tiếp các chữ cái có dấu từ bàn phím của họ.

Trước Unicode, LaTeX có hỗ trợ cho nhiều loại *mã hóa tệp* (file encoding) cho
phép các chữ cái ngoài bộ chữ cái tiếng Anh được nhập trực tiếp &ndash; ví dụ,
sử dụng hệ mã hóa `latin1` thì những người viết tiếng Pháp có thể viết trực tiếp
là `déjà vu` và LaTeX sẽ tự động chuyển các ký tự đặc biệt về những lệnh TeX để
tạo ra output chính xác.

Kiểu hỗ trợ này vẫn được sử dụng ở ngày nay trong trình dịch `pdflatex`. Các tệp
được hiểu là được mã hóa theo Unicode một cách mặc định. Mặc dù trình dịch này
bị giới hạn và chỉ hỗ trợ các font 8-bit, hầu hết các ngôn ngữ châu Âu được hỗ
trợ. (Tiếng Việt cũng được hỗ trợ, xem [bài đặc biệt](language-01).)

`pdflatex` chọn font bằng hệ thống chọn font của LaTeX, và ngày nay có nhiều
font có sẵn trong một hệ thống TeX đầy đủ. Ví dụ, font TeX Gyre là một hệ thống
font có chất lượng khá cao dựa trên những font mà mọi người đã trở nên quen
thuộc với nó như Times, Helvetica hay Palatino. Để dùng những font này ta chỉ
cần khai báo những gói lệnh với tên gói hợp lý. Ví dụ, để có một font giống
Times, ta dùng font Termes (`tgtermes`).

```latex
\usepackage{tgtermes}
```
{: .noedit :}

Đối với `pdflatex`, hầu hết các font có thể được dùng qua việc khai báo gói
lệnh. Bạn có thể xem
[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) hay
[trang CTAN về chủ đề "Font"](https://www.ctan.org/topic/font) để tìm hiểu về
những font có sẵn. Bạn cũng có thể tìm kiếm trên mạng về font mà bạn cần, sau đó
tìm kiếm bản mà `pdflatex` có thể dùng được. Nếu bạn muốn dùng một font có bản
quyền (proprietary font), bạn cũng có thể tìm một bản clone hợp lý; đối với hầu
hết phần mềm thì bản clone này có chất lượng gần tương đương với bản gốc.

## Thời của Unicode

Vì `pdflatex` bị giới hạn về các hệ mã hóa tệp 8-bit cũng như các font 8-bit, nó
không thể dùng những font OpenType hiện đại hay thay đổi ngôn ngữ sử dụng những
bảng chữ cái khác nhau một cách tự nhiên được. Có hai sự thay thế cho pdfTeX mà
có thể xử lý các vấn đề này, đó là XeTeX và LuaTeX. Đối với LaTeX, những trình
biên dịch này có thể được dùng bằng các lệnh `xelatex` và `lualatex` tương ứng.

Trong những trình dịch này, việc chọn font được thực hiện bởi gói `fontspec`, và
đối với những văn bản đơn giản nó có thể trông ngắn gọn như thế này:

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

Các lệnh này chọn font TeX Gyre Termes. Đáng chú ý, cách này có thể hoạt động
với *bất kỳ* font OpenType nào. Những font dùng được ở `pdflatex` cũng có thể
dùng được trong `xelatex` và `lualatex` qua các gói lệnh tương ứng. Bạn cũng có
thể dùng bất kỳ font nào đã được cài đặt vào máy tính của bạn bằng việc sử dụng
`fontspec` như mô tả ở trên.
[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) có cho ta biết
những font nào có định dạng OpenType đi kèm, nên ta có thể dùng nó làm nguồn để
tìm kiếm một font vừa ý. Điều tương tự với
[trang CTAN](https://www.ctan.org/topic/font) được mô tả ở trên.

Sau khi đã chọn một font, input có thể được viết trực tiếp bằng Unicode thuần
túy vào mã nguồn. Đây là một ví dụ sử dụng một số chữ cái Latin, một số chữ cái
Hy Lạp, một số ký hiệu cùng một vài chữ cái tượng hình CJK.

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

Khi ta thay đổi ngôn ngữ, việc thay đổi quy tắc hyphenation và những thứ tương
tự có thể cần thiết. Các gói `babel` hay `polyglossia` đều cung cấp những công
cụ mạnh để thực hiện việc này.
