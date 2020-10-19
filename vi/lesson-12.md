---
lang: "vi"
title: "Phần tài liệu tham khảo"
---
<script>
preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

## Lưu trữ thông tin các tài liệu

Trong khi ta có thể đưa thông tin về tài liệu tham khảo trực tiếp vào mã nguồn,
ta thường lấy thông tin đó từ một hoặc nhiều tệp bên ngoài. Mỗi tệp trong đó lưu
trữ các thông tin quan trọng về các tài liệu được trích dẫn, v.v...; các thông
tin được lưu trữ sao cho trình dịch có thể hiểu được. Việc sử dụng một hay nhiều
tệp ngoài lưu trữ thông tin giúp bạn dễ dàngtái sử dụng thông tin và tránh việc
phải thực hiện định dạng kiểu chữ "bằng tay".

Những tệp lưu trữ như vậy thường được gọi là các "tệp BibTeX" và có đuôi tệp là
`.bib`. Chúng thường bao gồm một hay nhiều mục, mỗi mục cho thông tin về một tài
liệu tham khảo &ndash; đó là một chuỗi các miền thông tin. Hãy cùng xem một ví
dụ:

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->


Mục đầu tiên lưu trữ thông tin về một bài báo còn mục còn lại lưu trữ thông tin
về một cuốn sách &ndash; bài báo (`article`) và sách (`book`) chính là hai loại
mục phổ biến nhất. Mỗi mục bắt đầu bằng `@` như ta thấy ở trên, và tất cả các
thông tin được lưu trong một cặp ngoặc nhọn.

Các vùng thông tin được cho dưới dạng "tùy biến = giá trị" (key=value), trừ
thông tin đầu tiên mà ta gọi là "tên" của mục này. Ta có thể dùng bất kỳ tên nào
đặt cho cái tên này; nó chỉ là một cái nhãn để ta tạo đường dẫn trong văn bản,
nhưng trong ví dụ trên ta dùng tên tác giả và năm xuất bản &ndash; đây là cách
làm phổ biến nhất.

Hầu hết các vùng thông tin đều có ý nghĩa khá rõ ràng, ví dụ `author` là vùng
dành cho tên tác giả hay `title` là vùng dành cho tiêu đề tài liệu. Ta có thể để
ý rằng trong `author`, các tên tác giả được phân tách bởi `and`. Điều này rất
_quan trọng_: Formatting của output cần phải biết được tên của từng tác giả một.
Ta cũng có thể thấy trong `title` của mục `article`, một số chữ cái được đưa vào
cặp ngoặc nhọn; điều này để tránh việc thay đổi cách viết chữ hoa/chữ thường
trong output.

Sửa một tệp `.bib` bằng tay không dễ dàng, nên hầu hết mọi người dùng một trình
mã nguồn dành riêng cho việc này. [JabRef](https://www.jabref.org) được dùng phổ
biến và nó hỗ trợ nhiều hệ điều hành, nhưng cũng còn nhiều chương trình khác
nữa. Nếu phần tài liệu tham khảo có bao gồm DOI (Digital Object Identifier), bạn
có thể cần đến [doi2bib](https://doi2bib.org) để dễ dàng có được mục BibTeX.
Đương nhiên, nhớ kiểm tra lại xem mục BibTeX có chính xác không!

Trong các phần tiếp theo ta sẽ dùng tệp BibTeX ví dụ ở trên. Ta đã "lưu" nó dưới
tên `learnlatex.bib`.

## Dùng thông tin từ các tệp BibTeX

Để lấy thông tin từ các tệp BibTeX vào văn bản, bạn cần thực hiện ba bước. Đầu
tiên, chạy LaTeX để biên dịch văn bản; nó sẽ tạo ra một tệp với danh sách các
tham chiếu tới các tài liệu tham khảo trong văn bản. Sau đó, chạy một chương
trình nhận tệp BibTeX, chọn những mục mà bạn dùng và sắp xếp chúng theo thứ tự.
Cuối cùng, biên dịch văn bản của bạn thêm một lần nữa để LaTeX có thể tập hợp
các thông tin từ hai lần chạy trước. Tuy nhiên thông thường ta cần chạy LaTeX
biên dịch thêm ít nhất hai lần nữa để giải quyết mọi vấn đề liên quan đến tham
chiếu trong văn bản.

Để thực hiện bước thứ hai, có hai hệ thống chương trình được dùng phổ biến:
BibTeX và Biber. Biber chỉ được dùng với một gói LaTeX gọi là `biblatex`, trong
khi BibTeX có thể được sử dụng không cần gói nào hoặc với gói `natbib`.

Chạy một công cụ thứ hai cùng với LaTeX được hỗ trợ bởi hầu hết trình mã nguồn
khác nhau. Đối với các ví dụ ở đây, có một số đoạn mã được chạy trong quá trình
biên dịch. Trình mã nguồn của bạn có thể có một nút "tổng biên dịch" mà làm mọi
thứ cần thiết, hoặc bạn có thể phải chọn chạy BibTeX hay Biber "bằng tay" giữa
các lần chạy LaTeX.

Cấu trúc và định dạng của các mục trong phần tài liệu tham khảo không phụ thuộc
vào các thông tin trong tệp BibTeX; thay vào đó nó được định nghĩa bởi một thứ
gọi là "kiểu bibliography". Ta sẽ thấy rằng các kiểu này hoạt động có hơi khác
nhau một chút giữa `natbib` và `biblatex`, nhưng ý tưởng chính vẫn giữ nguyên:
ta có thể chọn cách các mục tài liệu tham khảo được in ra trong văn bản của mình.

## Quy trình làm việc trực tiếp với BibTeX bằng gói `natbib`

Mặc dù ta có thể thêm các mục tài liệu vào một văn bản LaTeX mà không cần thêm
gói nào, điều này có nhiều hạn chế. Thay vào đó, ta sẽ dùng gói `natbib` &ndash;
gói này cho phép ta có nhiều kiểu mục tài liệu khác nhau cũng như có nhiều kiểu
bibliography có sẵn.

Cấu trúc cơ bản của mã LaTeX được viết trong ví dụ sau:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}
The mathematics showcase is from \citet{Graham1995}, whereas
there is some chemistry in \citet{Thomas2008}.

Some parenthetical citations: \citep{Graham1995}
and then \citep[p.~56]{Thomas2008}.

\citep[See][pp.~45--48]{Graham1995}

Together \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

Bạn có thể thấy rằng ta có thể thêm tham chiếu đến các mục tài liệu khác nhau
bằng việc sử dụng tên của mục đó. Gói `natbib` cung cấp `\citet` và `\citep` mà
ta có thể dùng để tạo các tham chiếu với formatting khác nhau. Kiểu biblography
được chọn bằng lệnh `\bibliographystyle`; ở đây ta đang sử dụng kiểu `plainnat`.
Phần tài liệu tham khảo được thêm bằng lệnh `\bibliography` &ndash; đối số của
lệnh này là một danh sách được phân cách bởi dấu phẩy của tên các tệp BibTeX mà
ta sử dụng.

Ta có thể thêm số trang vào tham chiếu bằng một đối số không bắt buộc cho các
lệnh `\cite`. Nếu có hai đối số không bắt buộc được cho, đối số đầu tiên được
đưa vào phía trước phần tham chiếu và đối số thứ hai được đưa vào phía sau.

Setup ở phía trên dùng kiểu (tác giả &ndash; năm xuất bản). Ta có thể dùng các
kiểu khác. Ví dụ để đánh số các mục tài liệu ta thêm tùy biến `numbers` vào dòng
khai báo `natbib`.

## Quy trình làm việc với `biblatex`

Gói `biblatex` hoạt động hơi khác `natbib` một chút: ta chọn tệp BibTeX ở phần
khai báo và in nó bằng một câu lệnh khác trong thân văn bản. Để ý sự thay đổi
tên câu lệnh.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % file of reference info

\begin{document}
The mathematics showcase is from \autocite{Graham1995}.

Some more complex citations: \parencite{Graham1995} or
\textcite{Thomas2008} or possibly \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Together \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

Chú ý rằng `\addbibresource` cần toàn bộ tên của tệp BibTeX, _tính cả_ đuôi tệp
`.bib` (ta bỏ qua `.bib` trong `natbib`). Ta cũng thấy rằng `biblatex` dùng các
lệnh có tên dài hơn, nhưng chúng thường khá dễ đoán.

Tương tự như ở `natbib`, các đoạn chữ ở trước và sau tham chiếu có thể được thêm
bằng các đối số không bắt buộc. Chú ý rằng số trang không cần phải thêm `p.~`
hay `pp.~`, vì `biblatex` tự động thêm tiền tố phù hợp cho số trang.

Trong `biblatex`, kiểu tham chiếu được chọn khi ta khai báo gói. Ở đây ta đã
dùng `authoryear`, nhưng ta cũng có `numeric` và nhiều kiểu khác nữa.

## Chọn giữa `biblatex` hay quy trình làm việc trực tiếp với BibTeX

Mặc dù cả `biblatex` cũng như quy trình trực tiếp của BibTeX đều nhận input từ
các tệp BibTeX và có thể tạo ra output có cấu trúc tương tự nhau trong văn bản,
chúng sử dụng những cách khác hẳn nhau để tạo ra output này. Do đó, sẽ có nhiều
điểm khác biệt giữa hai lựa chọn mà bạn có thể xem xét để chọn phương pháp phù
hợp nhất cho mình.

Trong quy trình của BibTeX, kiểu bibliography được xác định bởi một tệp `.bst`
(các tệp này được chọn bằng lệnh `\bibliographystyle`). `biblatex` không sử
dụng các tệp `.bst`; nó sử dụng một cách khác. Nếu bạn đang dùng một template có
bao gồm một tệp `.bst`, hay được cung cấp một tệp `.bst` cho văn bản của mình,
bạn không thể dùng `biblatex` mà buộc phải dùng quy trình trực tiếp của BibTeX.

Cách hoạt động của `biblatex` cho bạn khả năng thay đổi output của các lệnh dẫn
nguồn cũng như các lệnh tham chiếu ngay tại phần khai báo của văn bản với những
lệnh LaTeX thường. Trong khi đó, việc chỉnh sửa một tệp `.bst` yêu cầu bạn phải
có kiến thức của ngôn ngữ lập trình BibTeX. Nói chung, `biblatex` được coi là có
thể tùy biến dễ dàng hơn nhiều so với BibTeX.

Trong `biblatex`, việc viết một kiểu tham chiếu mới đơn giản hơn và các lệnh
tham chiếu cũng đa dạng hơn. Nó cũng có nhiều chức năng phụ thuộc vào ngữ cảnh
(context-dependent). Nói chung, điều này không quá quan trọng trong các lĩnh vực
liên quan đến STEM, nhưng nó khá có ích đối với những kiểu tham chiếu phức tạp
trong một số lĩnh vực như nhân văn học.

BibTeX chỉ có thể sắp xếp chính xác các ký tự trong bảng chữ cái tiếng Anh, và
dựa vào các workaround để sắp xếp các ký tự khác dựa trên cách sắp xếp gốc này.
Trong khi đó, `biblatex` có thể sắp xếp chính xác với tất cả các ký tự Unicode.
Do đó `biblatex` thường là lựa chọn tốt hơn nếu các tiêu mục trong phần tài liệu
tham khảo có chứa các ký tự không phải ký tự tiếng Anh.

Vì được sinh ra trước, quy trình gốc BibTeX được khá nhiều người sử dụng. Do đó,
có nhiều nhà xuất bản hay tòa soạn có thể sẽ yêu cầu bạn phải dùng BibTeX. Những
nhà xuất bản này thông thường không chấp nhận `biblatex`.

Tóm lại, hãy kiểm tra các tiêu chuẩn mà văn bản của bạn cần có. Nếu bạn nhận
được một tệp `.bst`, bạn cần dùng quy trình BibTeX gốc. Nếu bạn không cần một
phần tài liệu tham khảo quá phức tạp và chỉ cần sắp xếp tiêu đề theo bảng chữ
cái tiếng Anh, BibTeX là đủ. Tuy nhiên để có các kiểu tham chiếu phức tạp hơn
cũng như một hệ thống sắp xếp đầy đủ hơn, bạn có thể cần đến `biblatex`.

## Bài tập

Thử thao tác với cả `natbib` và `biblatex`. Đối với `natbib`, bạn cần phải chạy
(theo thứ tự) LaTeX, BibTeX, LaTeX và LaTeX; còn đối với `biblatex` thì bạn cần
chạy LaTeX, Biber, LaTeX. Hãy tìm hiểu cách để chạy theo trình tự này trong
trình mã nguồn (nếu bạn dùng Overleaf hay LaTeX Online thì quá trình này được
thực hiện tự động).

Xem điều gì sẽ xảy ra khi bạn thêm những mục thông tin mới và những tham chiếu
mới. Thêm một tham chiếu đến một tài liệu tham khảo không được khai báo thông
tin trong tệp BibTeX để xem nó hoạt động ra sao. Thử dùng tùy biến `numeric` cho
gói `natbib` hoặc `style=numeric` cho gói `biblatex`.
