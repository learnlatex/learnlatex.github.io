---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：包含圖片和定位"
description: "本課提供了關於如何更好地命名和儲存要在 LaTeX 中使用的圖片檔案的詳細資訊，以及如何在 LaTeX 中建立自己的圖片。"
toc-anchor-text: "更多內容：包含圖片和定位"
---

## 命名圖片檔案

LaTeX 可以在多種計算機平臺上執行，因此檔名的命名需要一些考慮。最安全的做法是簡單地命名你的圖片，特別是避免使用空格。例如，如果你想通過將所有圖片儲存在子目錄中來組織檔案，那麼像這樣的寫法： `\includegraphics[width=30pt]{pix/mom.png}` 是可移植且經得起未來考驗的。

檔名中的空格傳統上有些問題，但現在一般都支援了。然而，如果你的檔名中有空格，並且遇到了問題，你可以嘗試先移除空格作為第一步解決方案。

變音符號的支援有些不穩定；在某些系統上，特別是 Windows 上，存在一些問題。如果你發現檔名中的變音符號有問題，請嘗試只使用 ASCII 字元進行測試。

## 將圖片儲存在子目錄中

將原始檔組織的一個常見方式是把所有圖片放入一個子目錄。然後你可以在包含圖片時加入相對路徑，就像上面展示的那樣；注意即使在 Windows 上，路徑的各部分也是使用`/`字元分隔的。

如果你有很多圖片，你可能想要預先設定子目錄。這可以使用`\graphicspath`來完成，它需要為每個子目錄提供一個帶花括號的條目。例如，要同時包含`figs`和`pics`子目錄，我們可以使用：

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

注意這些路徑末尾的`/`是必需的。

## 生成圖片

如前所述，LaTeX 可以輕鬆使用大多數來源的圖片，包括科學軟體生成的圖表。如果可能的話，你可能想要儲存為PDF格式，因為這是一種可縮放的格式。如果你需要建立點陣圖，請嘗試使用高解析度。你可以使用 [Inkscape](https://inkscape.org/) 建立包含 LaTeX 片段的滑鼠繪製的圖形。另一個選擇是 [Asymptote](https://www.ctan.org/pkg/asymptote)，它擴充套件這些繪圖技術到三維空間。這兩個軟體都將其輸出生成為檔案，供你包含在文件中。

你也可以建立特別適合 LaTeX 的圖形，這些圖形具有很高的精確度，並且可以包含與文件匹配的公式和標籤。你可以使用 [Ti*k*Z](https://ctan.org/pkg/pgf) 直接在文件中繪製圖形，這很方便，儘管代價是文件更復雜且需求更多，或者使用 [PSTricks](https://ctan.org/pkg/pstricks-base)。

## 放置浮動體

LaTeX 的浮動體放置很複雜。最常見的要求是將圖片放在輸出中與它在輸入中的位置完全相同的地方。`float`宏包可以做到這一點。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}
\usepackage{lipsum}  % 用於生成填充文字
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{示例圖片}
\end{figure}
\lipsum[8-15]
\end{document}
```

注意`H`選項，它表示將圖片"絕對放在這裡"。然而，不建議使用`H`，因為它可能會在文件中產生大片空白區域。

## 其他類型的浮動體

我們將[很快](lesson-08)看到我們可以把表格放在浮動體中；它們會進入`table`環境。然而，我們不_必須_把圖片放在`figure`環境中或把表格放在`table`環境中；這只是慣例。

你可能想要有其他類型的浮動環境；每種類型都是獨立插入的。你可以使用[`trivfloat`](https://ctan.org/pkg/trivfloat)宏包來實現。這個宏包提供了一個單獨的命令`\trivfloat`來建立新類型的浮動體。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}
\usepackage{lipsum}  % 用於生成填充文字
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{示例圖片}
\end{image}
\end{document}
```
