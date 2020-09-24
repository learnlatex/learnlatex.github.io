---
title: "Bổ sung: Phần tài liệu tham khảo"
---

## Sắp xếp các mục tài liệu đối với các tài liệu không có tên tiếng Anh

BibTeX được viết để chủ yếu xử lý các thông tin được viết bằng tiếng Anh. Nó
không tốt trong việc xử lý các chữ cái có dấu, và gần như không hỗ trợ các chữ
cái không phải chữ cái Latin. Ngược lại, Biber được viết sao cho nó có thể xử lý
các ngôn ngữ khác nhau tốt.

Điều này nghĩa là nếu bạn đang sắp xếp các tài liệu và bạn muốn sắp xếp theo bất
kỳ thứ tự gì ngoài thứ tự các bảng chữ cái tiếng Anh không dấu, bạn thật sự cần
đến `biblatex` và Biber thay vì `natbib` và BibTeX.

## Đường dẫn

Nếu bạn khai báo gói `hyperref` (như đã nói trong [bài trước](more-09)), gói này
sẽ tự động chuyển các thông tin cần thiết trong mục tài liệu tham khảo thành các
đường dẫn. Điều này có thể rất hữu ích, đặc biệt là đối với các URL và DOI.

## Những sự khác biệt đối với tệp BibTeX cho các kiểu bibliography khác nhau

Dù cú pháp tổng thể của các tệp BibTeX đối với quy trình BibTeX hay `biblatex`
giống nhau, các miền thông tin được sử dụng và ý nghĩa của các miền này có thể
thay đổi, không chỉ giữa quy trình BibTeX với `biblatex`, mà thậm chí còn giữa
các kiểu bibliography khác nhau. Có một tập hợp các miền "cốt lõi" có ý nghĩa
giống nhau giữa hầu hết các kiểu, nhưng có sự khác biệt ở một số miền khác.

Một ví dụ thường gặp là URL. Một vài kiểu `.bst` cũ (đáng chú ý nhất là các kiểu
tiêu chuẩn như `plain.bst` hay `unsrt.bst`) được viết trước khi khái niệm URL ra
đời, do đó chúng không hỗ trợ một miền nào cho URL. Tuy nhiên nhiều kiểu mới hơn
lại có một miền thông tin `url`. Nếu bạn dùng một kiểu cũ, bạn có thể dùng miền
`howpublished` để thế cho miền `url`; nhưng dĩ nhiên nếu bạn dùng một kiểu đủ
mới thì workaround này là không cần thiết và bạn nên dùng `url` như thường.

Để có thể tận dụng được tất cả các chức năng của kiểu bibliography của mình, bạn
nên tìm hiểu danh sách toàn bộ các miền được hỗ trợ và ý nghĩa của chúng.
