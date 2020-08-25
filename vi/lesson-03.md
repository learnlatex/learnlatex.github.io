---
title: "Văn bản LaTeX đầu tiên của bạn"
---

Văn bản LaTeX đầu tiên sẽ rất đơn giản, ý tưởng là để cho bạn thấy bố cục của
một văn bản và cách để biên dịch nó thành công. Đây cũng là cơ hội đầu tiên của
bạn để [sử dụng các ví dụ ở đây trên `learnlatex.org`](help).

Nếu bạn đang sử dụng một hệ thống TeX được cài đặt lên máy tính của mình, trong
trình soạn thảo mã nguồn hãy tạo một tệp mới đặt tên là `first.tex`, và sao chép
đoạn mã sau vào tệp hoặc gõ lại nó. Nếu bạn đang sử dụng một dịch vụ trực tuyến,
bạn có thể nhấn vào nút "LaTeX Online" hoặc "Open in Overleaf" để thử nó! Chúng
tôi khuyên bạn nên thử những lựa chọn trực tuyến ngay cả khi đã cài đặt một hệ
thống TeX; đây là một cơ hội tốt để thấy được các lựa chọn khác nhau hoạt động
như thế nào.

Chú ý rằng ta sẽ dùng tiếng Anh cho các ví dụ ở đây. Cách dùng tiếng Việt trong
LaTeX sẽ được nói tới trong [một bài khác](language-01).
```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hey world!

This is a first document.
\end{document}
```
Lưu tệp lại và biên dịch thành một tệp PDF. Nếu bạn đang sử dụng một hệ thống
LaTeX trên máy tính của mình, nút biên dịch sẽ tùy thuộc vào trình soạn mã nguồn
mà bạn dùng. Bạn sẽ được một tệp PDF có dòng chữ phía trên _và_ số trang; LaTeX
thêm số trang tự động.

Xem tệp output `first.pdf` với một trình đọc PDF. Chúc mừng, bạn đã biên dịch
thành công tệp LaTeX đầu tiên!

## Xử lý lỗi

Nhiều khi quá trình biên dịch có thể sinh lỗi. Kiểm tra bạn đã gõ lại mỗi dòng
trong tệp LaTeX giống hệt như đã viết ở trên. Đôi khi một thay đổi rất nhỏ trong
mã LaTeX có thể dẫn đến những thay đổi lớn trong văn bản, đôi khi thậm chí làm
cho trình dịch không thể xuất ra văn bản được. Nếu bạn cảm thấy bị mắc, xóa toàn
bộ mã và sao chép lại đoạn mã trên từ đầu.

Nếu quá trình biên dịch LaTeX kết thúc với một dấu hỏi chấm `?`, bạn có thể
thoát ra bằng việc gõ `x` và nhấn `<Enter>`.

LaTeX thường cố gắng để các đoạn lỗi có ích cho người dùng, nhưng chúng không
giống các đoạn lỗi trong các trình soạn thảo văn bản. Một vài phần mềm sửa mã
nguồn còn cắt đi một phần đoạn lỗi, và phần bị cắt có thể chứa những yếu tố
quan trọng. LaTeX luôn viết lại những gì nó đang làm vào một tệp, đây là một tệp
có định dạng `.log`. Bạn luôn luôn có thể xem toàn bộ đoạn lỗi ở đó, và khi bạn
gặp một vấn đề nào đó, những người dùng LaTeX thành thạo thường đề nghị bạn cung
cấp một bản sao của tệp log này.

## Những kiến thức ta đã có được

Văn bản ở trên cho thấy những điều cơ bản nhất. Các văn bản LaTeX là sự kết hợp
giữa các đoạn văn bản và các câu lệnh. Các câu lệnh bắt đầu bằng một ký tự `\`,
đôi khi có những đối số (argument) trong cặp ngoặc nhọn `{}` (và đôi khi có
những đối số _không bắt buộc_ trong cặp ngoặc vuông `[]`). Sau đó bạn có được
một output PDF bằng việc yêu cầu LaTeX biên dịch mã nguồn của mình.

Mọi văn bản LaTeX đều có một `\begin{document}` kết hợp với một
`\end{document}`. Giữa hai cái này là phần *thân văn bản*, nơi mà bạn để nội
dung văn bản của mình. Trong ví dụ trên, phần thân có hai đoạn văn (chú ý rằng
trong LaTeX ta phân cách các đoạn văn _bằng các dòng trống_). Phần đi trước
`\begin{document}` được gọi là phần *khai báo* (preamble), phần này chứa các
đoạn mã để thiết lập những cài đặt và thiết kế cho văn bản.

Lệnh `\usepackage` sẽ được giới thiệu trong [một bài sau](lesson-06). Dòng
`\usepackage[T1]{fontenc}` được thêm vào hầu hết các ví dụ trong khóa là để
thiết lập mã hóa font (font encoding) cho các ví dụ này; chúng ta chưa cần phải
quan tâm quá nhiều đến nó.

Ngoài ra, LaTeX cũng có nhiều cặp `\begin{...}` và `\end{...}` nữa; những cặp
này được gọi là các *môi trường*. Chúng không thể đứng một mình: đối với mỗi
`\begin{x}` cần phải có một `\end{x}`. Bạn cũng có thể lồng các môi trường với
nhau, nhưng đảm bảo rằng các môi trường phải "đi theo cặp", nói cách khác, nếu
bạn có `\begin{x} ... \begin{y}` bạn phải có `\end{y} ... \end{x}`.

Ta có thể thêm ghi chú vào mã nguồn bằng cách bắt đầu chúng bằng ký tự `%`. Hãy
cùng thử nó xem:
```latex
\documentclass[a4paper,12pt]{article} % Lớp văn bản với một số tùy chọn
\usepackage[T1]{fontenc}
% Một ghi chú ở phần khai báo
\begin{document}
% Đây là một ghi chú nữa
This is   a simple
document\footnote{with a footnote}.

This is a new paragraph.
\end{document}
```
Bạn có thể thấy ta có hai đoạn văn: chú ý một dòng trống đã được sử dụng cho
việc đó. Bạn cũng có thể thấy nhiều ký tự trống liên tiếp nhau đã được LaTeX
hiểu là một ký tự trống duy nhất.

Đôi khi bạn có thể cần một ký tự trống mạnh hơn mà không bị phân thành các dòng;
trong LaTeX ta có thể có được điều này bằng `~` &ndash; nó cho một ký tự trống
nhưng 'buộc' hai từ bên cạnh lại với nhau làm cho chúng buộc phải hiện ra trên
một dòng duy nhất. Điều này có thể rất hữu ích khi ta bắt đầu viết các đường dẫn
trong văn bản ở phần sau của khóa học này.

## Các ký tự đặc biệt

Bạn đã có thể thấy rằng `\`, `{` và `}` có ý nghĩa đặc biệt trong LaTeX. Một `\`
bắt đầu một câu lệnh, `{` và `}` được dùng cho các _đối số bắt buộc_: những
thông tin mà một câu lệnh yêu cầu.

Có một vài ký tự khác cũng có ý nghĩa đặc biệt, ví dụ như ký tự `~` mà ta vừa
mới biết. Hầu như tất cả các ký tự đặc biệt như vậy đều _rất ít khi_ được dùng
trong văn bản thông thường, đó là lý do tại sao chúng được chọn cho những việc
như vậy. Nếu bạn cần phải viết những ký tự đặc biệt như thế này vào văn bản, bạn
có thể đọc thêm trong [phần bổ sung của bài học này](more-03).

## Bài tập

Thử "thí nghiệm" với hệ thống sửa và viết mã tại đây, ấn vào nút để biên dịch
văn bản, sau đó sửa mã ngay trong trang này rồi biên dịch lại.

Thử thêm một vài dòng nữa vào văn bản của bạn, biên dịch và xem những thay đổi
trong tệp PDF. Tìm hiểu cách hoạt động của trình sửa mã nguồn của bạn và thử tìm
cách để đi từ một vị trí trong mã nguồn tới vị trí tương ứng của nó trong PDF.
Thử thêm một vài ký tự `~` và xem những ảnh hưởng của nó đến việc tách dòng
trong đoạn văn trong LaTeX.
