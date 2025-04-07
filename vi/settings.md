---
layout: "page"
lang: "vi"
title: Cài đặt trang
permalink: /vi/settings
---

# Cài đặt trang

## Cookie

Cookie là các đoạn thông tin nhỏ được lưu trữ ở trình duyệt của bạn. Mặc định,
không có cookie nào được sử dụng ở trang này, tuy nhiên các cài đặt ở đây đều
được lưu trữ dưới dạng cookie.

Cho phép sử dụng cookie bằng cách đồng ý ở đây để sử dụng các tùy chỉnh cài đặt
ở dưới.

{% include settings-accept.html 
   accept="Đồng ý sử dụng cookie"
   reset= "Reset: Xóa mọi cookie"
%}

## Cách thức xuất mặc định

Cách thức xuất mà TeXLive.net sẽ sử dụng nếu không có yêu cầu cụ thể qua ghi chú
dạng `% !TEX` trong mã ví dụ.

{% include settings-return.html %}

## Trình biên dịch mặc định

Trình biên dịch mà TeXLive.net và Overleaf sẽ sử dụng nếu không có yêu cầu cụ thể
qua ghi chú dạng `% !TEX` trong mã ví dụ.

{% include settings-engine.html %}

## Giao diện mặc định của trình soạn mã

Chọn giao diện (theme) được sử dụng cho trình soạn mã ACE.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
