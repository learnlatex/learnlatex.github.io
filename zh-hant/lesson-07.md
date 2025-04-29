---
layout: "lesson"
lang: "zh-hant"
title: "包含圖片和定位"
description: "本課展示了如何在文件中包含外部圖片檔案，如何更改它們的外觀，以及如何讓它們在PDF中自動定位到合適的位置。"
toc-anchor-text: "使用圖片"
toc-description: "圖片的外觀和定位。"
---

# 包含圖片和定位

<span
  class="summary">本課展示了如何在文件中包含外部圖片檔案，如何更改它們的外觀，以及如何讓它們自動定位或浮動到合適的位置。</span>

要在 LaTeX 中引入外部圖片，請使用`graphicx`宏包，它為LaTeX新增了`\includegraphics`命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
這張圖片
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
是匯入包含外部圖片的PDF。
\end{document}
```

你可以包含EPS、PNG、JPG和PDF格式的檔案。如果你有一個圖片的多個版本，那麼你可以寫成`example-image.png`這樣的形式。（如果你沒有給出副檔名，`graphicx`宏包會嘗試猜測副檔名。）

你會注意到我們在這裡使用了一個新的環境`center`，用於將圖片在頁面上水平居中。[稍後](lesson-11)，我們將更多地討論間距和定位。

## 修改圖片外觀

`\includegraphics`命令有許多選項來控制圖片的大小和形狀，以及裁剪掉不需要的部分。其中一些選項使用很多，所以值得了解。

最明顯的設定是設定圖片的`width`（寬度）或`height`（高度），這些通常相對於`\textwidth`或`\linewidth`以及`\textheight`來設定。`\textwidth`和`\linewidth`的區別很微妙，通常結果是相同的。`\textwidth`是物理頁面上文字塊的寬度，而`\linewidth`是_當前_寬度，這可能在局部上有所不同（這種差異在使用`twocolumn`類選項時最為明顯）。LaTeX 會自動縮放圖片以保持寬高比。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
一些文字
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

你還可以`scale`（縮放）圖片，或者通過`angle`（角度）旋轉它們。另一個你可能想要做的是`clip`（裁剪）和`trim`（修剪）圖片。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## 讓圖片浮動

在排版中，特別是技術文件時，圖片可能會移動到文件的其他位置。這稱為 *浮動*。圖片通常作為浮動體包含，這樣它們不會在頁面中留下大片空白。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}
\usepackage{zhlipsum}  % 生成填充文字

\begin{document}
\zhlipsum*[1-5] % 幾個填充段落

測試浮動位置
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{一個示例圖片}
\end{figure}

\zhlipsum*[6-10] % 幾個填充段落
\end{document}
```

這裡LaTeX將圖片和標題從`測試位置`文字處移到了第二頁的頂部，因為第一頁底部沒有足夠的空間。`ht`影響 LaTeX 可以放置浮動體的位置；這兩個字母表示它可以放在原始碼所在位置（在`測試位置`旁邊）或頁面頂部。你最多可以使用四個位置說明符：

- `h` "這裡"（如果可能）
- `t` 頁面頂部
- `b` 頁面底部
- `p` 專門用於浮動體的頁面

[稍後](lesson-09)，我們將看到如何交叉引用浮動體，這樣你就可以在文字中指向它們。

你可能注意到我們在這裡使用了`\centering`而不是`center`環境來居中圖片。在浮動體內部，如果你想要水平居中內容，應該使用`\centering`；這可以避免浮動體和`center`環境都新增額外的垂直空間。

## 練習

嘗試包含你建立的圖片，替換我們在演示中使用的"標準"圖片。

探索使用`height`、`width`、`angle`和`scale`鍵可以做什麼。

使用`width`鍵將一個圖片的大小設定為相對於`\textwidth`，另一個圖片相對於`\linewidth`。嘗試它們在有或沒有`twocolumn`選項時的表現。

使用`lipsum`製作一個相當長的演示，然後嘗試使用不同的位置說明符來放置浮動體。不同的說明符如何相互作用？（本文中的示例程式碼使用了另一箇中文的佔位字元生成包`zhlipsum`。）
