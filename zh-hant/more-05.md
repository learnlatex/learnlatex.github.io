---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：使用文件類來影響設計"
description: "本課提供了更多關於 LaTeX 專門文件類的資訊。"
toc-anchor-text: "更多內容：使用文件類來影響設計"
---

## 期刊專用的文件類

許多學術期刊都提供了用於投稿的 LaTeX 文件類。這些文件類通常會設定與最終期刊相似的排版佈局，儘管這也取決於字型使用等因素。如果有文件類可用，通常是由編輯部直接提供的，他們應該提供相應的使用說明。許多這樣的文件類也可以在 [CTAN](https://ctan.org)上找到，幷包含在標準的 TeX 發行版中。

## 用於簡報的文件類

建立簡報需要很多特殊處理。`slides`文件類是為製作"傳統的"印刷幻燈片而編寫的，它並不支援螢幕演示。為了實現這一點，已經開發了兩個廣泛使用的文件類：`beamer`和`powerdot`。由於`beamer`可能是更常用的一個，我們將給你一個它如何工作的示例：

```latex
% !TEX program=lualatex

\documentclass{ctexbeamer}
\begin{document}

\begin{frame}
  \frametitle{第一張幻燈片}
  一些文字
\end{frame}

\begin{frame}
  \frametitle{第二張幻燈片}
  不同的文字
  \begin{itemize}
    \item<1-> 第一項
    \item<2-> 第二項
  \end{itemize}
\end{frame}

\end{document}
```

這展示了兩個重要的概念。首先，`beamer`將文件分為幀（frames）（為了處理中文，我們使用了`ctexbeamer`這個文件類），每個幀可能會產生多個幻燈片（頁面）。其次，`beamer`擴充套件了正常的 LaTeX 語法，允許原始檔的部分內容"逐步顯示"。這很強大，但比我們在這裡能介紹的更復雜：更多資訊請檢視[這篇博文](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)。

## 用於影象的文件類

有時候你需要使用 LaTeX 製作一個影象（可能包含大量文字），而你只想要內容本身，不要頁面上的其他任何東西。使用[`standalone`](https://ctan.org/pkg/standalone)文件類最容易做到這一點。它會自動將頁面大小設定為圍繞列印的內容。

```latex
% !TEX program=lualatex
\documentclass{standalone}
\begin{document}
一個簡單的文件：這將是一個很小的盒子！
\end{document}
```
