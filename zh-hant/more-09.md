---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：交叉引用"
description: "本課展示了如何通過載入 `hyperref` 宏包來製作交叉引用的連結。"
toc-anchor-text: "更多內容：交叉引用"
---

## 將交叉引用變成連結

你可以通過使用`hyperref`宏包將交叉引用變成超連結。在大多數情況下，`hyperref`應該在文件導言區中指定的任何其他宏包之後載入。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{簡介}
一些令人興奮的文字和一個引用~\ref{sec:next}。

\section{下一件事}
\label{sec:next}

更多文字。
\end{document}
```

我們選擇讓連結與普通文字顏色相同；試試刪除`hidelinks`看看為什麼！
