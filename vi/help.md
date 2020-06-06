---
title: "Sử dụng trang learnlatex.org"
---

## Định hướng trong trang

Khóa này bao gồm 15 bài học cơ bản. Bạn có thể xem danh sách của chúng trong
[trang chủ](.).

Mỗi bài có một đường dẫn đến một bài bổ sung về cùng chủ đề nhưng có phần chuyên
sâu hơn. Tuy nhiên, bạn vẫn có thể đi qua tất cả 15 bài mà _không_ cần học thêm
những bài bổ sung này.

## Chạy các ví dụ

Mỗi ví dụ bao gồm một tệp LaTeX nhỏ được hiển thị như sau:

```latex
\documentclass{article}
\begin{document}
Example text.
\end{document}
```

Đây là một ví dụ đầy đủ. Tuy nhiên bạn có thể phải sửa nó để thực hiện những
thay đổi nhỏ, ví dụ như để thực hiện các bài tập ở phần cuối mỗi bài học.

Nút <button style="padding:0 1px;font-size:90%">sửa</button> có thể được dùng để
sửa đoạn mã trong ví dụ ngay trong trang. Chú ý rằng đây chỉ là một chức năng
sửa đơn giản được cung cấp bởi trình duyệt của bạn, nó không hề có những chức
năng hỗ trợ LaTeX như bạn có thể thấy ở hầu hết các trình sửa mã nguồn.

Có ba cách bạn có thể dùng để chạy phần mã trước hoặc sau khi sửa:

1. Dùng hệ thống **LaTeX Online**. Nút
   <button style="padding:0 1px;font-size:90%">Chạy với LaTeX Online</button> sẽ
   chuyển đoạn mã tới dịch vụ [LaTeX Online](https://latexonline.cc).

   Tệp PDF output (hoặc một phần của các thông báo lỗi nếu quá trình biên dịch
   gặp vấn đề) sẽ được hiện ra ngay phía dưới ví dụ. Nút
   <button style="padding:0 1px;font-size:90%">Xóa output</button> có thể được
   dùng để bỏ phần output này đi nếu bạn thấy nó không còn cần thiết.

   Chú ý rằng **LaTeX Online** không cần bạn phải lập tài khoản nên nó rất thuận
   tiện cho những ví dụ nhỏ. Tuy nhiên, cả trang này lẫn `latexonline.cc` đều
   không hỗ trợ khả năng lưu văn bản của bạn. Tất cả những thay đổi bạn đã thực
   hiện sẽ bị mất sau khi bạn rời khỏi trang.

   **Cảnh báo:** Việc hiện tệp PDF output trong trang yêu cầu trình duyệt của
   bạn phải có một trình đọc PDF mà có thể hoạt động được trong một `iframe`.
   Nếu bạn dùng điện thoại, điều này thường không xảy ra; khi đó một thông báo
   có thể hiện ra hỏi liệu bạn muốn tải về tệp PDF để đọc trong máy, nhưng nó có
   thể không có thông báo nào hết. Cách mà nút này thực hiện phụ thuộc vào trình
   duyệt của bạn. Bạn có thể cần dùng đến đường link **Overleaf** trong một số
   trường hợp.


2. Dùng **Overleaf**. Nút
   <button style="padding:0 1px;font-size:90%">Mở trong Overleaf</button> sẽ đưa
   phần mã nguồn lên [Overleaf](https://www.overleaf.com/about).

   Nếu bạn không có một tài khoản Overleaf, hoặc những thông tin về tài khoản
   của bạn không được lưu trữ sẵn trong trình duyệt, bạn sẽ được đưa tới một
   trang để đăng nhập hoặc đăng ký tài khoản Overleaf. Đây là một dịch vụ miễn
   phí nhưng có yêu cầu bạn phải cung cấp một số thông tin và đồng ý với những
   điều khoản sử dụng.

   Nếu bạn đã có một tài khoản, Overleaf sẽ được mở ra ở một tab mới với một
   project mới có chứa đoạn mã này. Bạn có thể sửa mã trên Overleaf và biên dịch
   ngay trên đó.

   Các chức năng sửa mã trên Overleaf tốt hơn chức năng sửa mã ở đây nhiều. Bạn
   cũng có thể lưu project vào tài khoản Overleaf của mình và thao tác với nó
   sau.

3. Nếu bạn đã có một hệ thống TeX được cài đặt trong máy, bạn có thể sao chép
   đoạn mã bằng nút <button style="padding:0 1px;font-size:90%">sao chép</button>.
   Nút này sẽ lưu đoạn mã vào clipboard và bạn có thể mở trình soạn mã của mình,
   dán đoạn mã vào và thực hiện các thao tác ở đó.


## Chọn trình biên dịch {{ site.tex }}

Khi một đoạn mã được đưa lên Overleaf hoặc LaTeX Online, trình dịch `pdflatex`
sẽ được sử dụng một cách mặc định trừ khi ví dụ có dùng gói `fontspec` (khi đó
`xelatex` sẽ được sử dụng).

Bạn có thể thay đổi trình dịch bằng cách dùng một ghi chú dưới dạng

```
% !TEX <bất cứ đoạn chữ nào> lualatex
```

trong đó khoảng trống ở bắt đầu là không bắt buộc; viết hoa hay viết thường đều
được hiểu như nhau và phần `<bất cứ đoạn chữ nào>` được bỏ qua.

Điều này cho phép một ghi chú kiểu như `% !TEX program=pdflatex` được sử dụng
bởi một số trình sửa mã TeX, nhưng ở đây `program=` là không bắt buộc. Chú ý
rằng thay vì `lualatex`, ta chỉ có hai sự thay thế là `pdflatex` và `xelatex`,
vì các dịch vụ LaTeX trên mạng mà ta dùng chỉ hỗ trợ ba trình biên dịch này
thôi.

Bạn có thể xem một số ví dụ có ghi chú dùng để cho biết ví dụ sẽ được chạy bằng 
LuaLaTeX trong [bài bổ sung của bài 14](more-14).
