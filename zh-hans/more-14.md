---
layout: "lesson"
lang: "zh-hans"
title: "更多内容：选择字体和使用Unicode引擎"
description: "本课为想要在文档中编写Lua代码的用户展示了一个基本的Lua示例。"
toc-anchor-text: "更多内容：选择字体和使用Unicode引擎"
---

## Lua

LuaTeX 引擎提供了类似于 XeTeX 的 OpenType 字体访问方式，大多数`fontspec`宏包的用法在这两个引擎上都同样有效。

LuaTeX 还以其他方式扩展了TeX，特别是通过嵌入 Lua 脚本语言。对于那些熟悉"主流"编程语言的人来说，这提供了一种更熟悉的编程风格。它还提供了访问 TeX 系统内部工作机制的可能性，并通过替换用 Lua 编写的新代码来修改行为。

本课程不涵盖 Lua 编程，但这里展示了一个计算 2π 的简单示例。

```latex
% !TEX program=lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

