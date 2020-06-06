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
