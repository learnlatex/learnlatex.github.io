---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：結構化長文件"
description: "本課提供了更多關於如何建立目錄、使用PDF書籤以及在文件中包含其他檔案的資訊。"
toc-anchor-text: "更多內容：結構化長文件"
---

## 建立索引

基於你所建立的文件長度，你可能需要建立索引。這類似於製作參考文獻，因為它使用輔助檔案。幸運的是，這都可以通過`imakeidx`包自動完成。我們需要以下三條指令來指導 LaTeX：

- `\makeindex`指令，用於啟用索引的建立
- `\index`指令，用於標記索引條目
- `\printindex`指令，用於列印索引


```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{imakeidx}
\makeindex
\begin{document}
一些文字標記索引foo\index{foo}.
另一些文字標記索引baz\index{baz!bar}.
更多文字標記索引alpha\index{alpha@$\alpha$}.
標記索引baz的另一部分的其他文字\index{baz!wibble}.

\clearpage
另一頁的文字標記索引foo\index{foo}
標記索引beta的其他文字\index{beta@$\beta$}.
標記索引gamma的其他文字\index{gamma@$\gamma$}.
\printindex
\end{document}
```

我們在這裡展示了索引的兩個特性：使用`!`進行分類細分，以及使用`@`列印與索引條目的"排序文字"不同的內容。索引有很多可以自定義的地方；試試這個示例，看看它是如何工作的。
