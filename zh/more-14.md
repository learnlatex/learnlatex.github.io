---
layout: "lesson"
lang: "zh"
title: "更多内容：选择字体和使用Unicode引擎"
description: "本课为想要在文档中编写Lua代码的用户展示了一个基本的Lua示例。"
toc-anchor-text: "更多内容：选择字体和使用Unicode引擎"
---

## Lua

LuaTeX引擎提供了类似于XeTeX的OpenType字体访问方式，大多数`fontspec`宏包的用法在这两个引擎上都同样有效。

LuaTeX还以其他方式扩展了TeX，特别是通过嵌入Lua脚本语言。对于那些熟悉"主流"编程语言的人来说，这提供了一种更熟悉的编程风格。它还提供了访问TeX系统内部工作机制的可能性，并通过替换用Lua编写的新代码来修改行为。

本课程不涵盖Lua编程，但这里展示了一个计算2π的简单示例。

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

