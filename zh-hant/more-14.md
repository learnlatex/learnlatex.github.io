---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：選擇字型和使用Unicode引擎"
description: "本課為想要在文件中編寫Lua程式碼的使用者展示了一個基本的Lua示例。"
toc-anchor-text: "更多內容：選擇字型和使用Unicode引擎"
---

## Lua

LuaTeX 引擎提供了類似於 XeTeX 的 OpenType 字型訪問方式，大多數`fontspec`宏包的用法在這兩個引擎上都同樣有效。

LuaTeX 還以其他方式擴充套件了TeX，特別是通過嵌入 Lua 指令碼語言。對於那些熟悉"主流"程式語言的人來說，這提供了一種更熟悉的程式設計風格。它還提供了訪問 TeX 系統內部工作機制的可能性，並通過替換用 Lua 編寫的新程式碼來修改行為。

本課程不涵蓋 Lua 程式設計，但這裡展示了一個計算 2π 的簡單示例。

```latex
% !TEX program=lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

