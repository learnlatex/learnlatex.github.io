---
layout: "lesson"
lang: "vi"
title: "LaTeX là gì và nó hoạt động như thế nào?"
description: "Bài này giải thích LaTeX là gì, cũng như sự khác nhau trong cách hoạt động giữa LaTeX và các trình soạn thảo thường gặp như Microsoft Word hay LibreOffice Writer."
toc-anchor-text: "Khái quát về LaTeX"
toc-description: "LaTeX là gì? Nó hoạt động thế nào?"
---

# Khái quát về LaTeX

<span class="summary">Bài này giải thích LaTeX là gì, cũng như sự khác nhau
trong cách hoạt động giữa LaTeX và các trình soạn thảo thường gặp như Microsoft
Word hay LibreOffice Writer.</span>

Không giống những trình soạn thảo văn bản thông dụng như Microsoft Word hay
LibreOffice Writer, LaTeX không phải là một trình soạn thảo WYSIWYG ('What You See Is
What You Get'). Trong LaTeX, ta dùng văn bản thuần túy (plain text) và thêm các
markup (dưới dạng các câu lệnh, v.v...) vào. Những markup này sẽ cho LaTeX biết
ý nghĩa của từng phần trong văn bản, tương tự như HTML.

Ví dụ, `<h2>` bắt đầu một phần trong một văn bản HTML. LaTeX cũng có một câu
lệnh cho việc này, đó là `\section`.

## Quy trình làm việc với LaTeX

Vì các tệp LaTeX không phải là văn bản trực tiếp mà chỉ là phần code để các
trình biên dịch tạo ra văn bản, nên thông thường bạn không cần phải đưa cho
mọi người tệp LaTeX của mình. Thay vào đó, sau khi viết xong _mã nguồn_ LaTeX,
bạn chạy LaTeX trên tệp này (thông thường bằng một chương trình máy tính có tên
là `pdflatex`) để tạo ra một tệp PDF. Tệp PDF này chính là văn bản sau cùng để
bạn gửi cho những người khác.

Mọi người sử dụng các cách khác nhau để gọi tên quá trình này. Vì LaTeX tương
đối giống với lập trình, quy trình thường được gọi là 'biên dịch' văn bản, mặc
dù 'typesetting' (sắp chữ) là cách gọi hợp lý hơn.

## Chạy LaTeX nhiều lần

Đối với những tệp đơn giản, bạn chỉ cần biên dịch một lần để có được tệp PDF
hoàn chỉnh. Nhưng một khi bạn thêm những thứ phức tạp hơn, ví dụ như các đường
dẫn trong văn bản, trích dẫn tài liệu (citation), hình vẽ hay mục lục, bạn có
thể phải chạy LaTeX nhiều hơn một lần. Chúng ta sẽ nói về việc khi nào chạy
LaTeX nhiều hơn một lần là cần thiết.

## LaTeX hay pdfLaTeX hay...

Trong [bài tiếp theo](lesson-02), chúng ta sẽ thấy rằng LaTeX chỉ bao gồm một
chương trình máy tính duy nhất. Để đơn giản, ta sẽ quan tâm chủ yếu vào một
chương trình cụ thể, pdfLaTeX, để xuất ra các tệp PDF của bạn. Chúng ta sẽ đi
tới những chương trình khác, và những lợi ích và công dụng của nó, trong những
bài sau của khóa này.
