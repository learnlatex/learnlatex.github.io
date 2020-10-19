---
lang: "vi"
title: "Bổ sung: Chọn fonts và sử dụng các trình biên dịch Unicode"
---

## Lua

Trình dịch LuaTeX cho phép ta dùng các font OpenType theo một cách tương tự như
XeTeX, và hầu hết các chức năng của `fontspec` hoạt động giống nhau trong hai
trình dịch.

Ngoài ra, LuaTeX còn mở rộng TeX theo những cách khác nữa, đáng chú ý nhất là
việc thêm ngôn ngữ lập trình Lua vào TeX. Điều này có thể được dùng khi bạn lập
trình trong LaTeX. LuaTeX cũng cung cấp khả năng tiếp cận những việc nội bộ của
TeX và thay đổi cách TeX hoạt động bằng việc thay mã TeX gốc bằng những đoạn mã
mới được viết trong Lua.

Lập trình với Lua không được xem xét trong khóa học này, nhưng đây là một ví dụ
đơn giản để tính 2π với LuaTeX:

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```
