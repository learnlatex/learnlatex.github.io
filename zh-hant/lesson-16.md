---
layout: "lesson"
lang: "zh-hant"
title: "獲取文件和尋求幫助"
description: "本課展示了 LaTeX 相關軟體和宏包的主要文件來源，以及當你遇到困難時如何尋求幫助。"
toc-anchor-text: "幫助與文件"
toc-description: "獲取幫助和文件。"
---

# 獲取文件和尋求幫助

<span
  class="summary">本課展示了 LaTeX 相關軟體和宏包的主要文件來源，以及當你遇到困難時如何尋求幫助。</span>

有幾種方式可以訪問宏包或文件類的文件。

## `texdoc`

如果你已經安裝了 TeX 發行版（如 TeX Live 或 MiKTeX），並且在安裝時包含了文件，你可以使用`texdoc`命令列工具訪問本地儲存的文件。使用：

`texdoc` < _pkg_ >

將開啟宏包`<pkg>`的文件。該工具會搜尋可用的文件，並開啟它認為最接近你搜尋詞的結果。你可以使用以下命令列出並選擇所有可行的結果：

`texdoc -l` < _pkg_ >

## texdoc.org

這是一個[網站](https://texdoc.org/)，其工作方式類似於`texdoc`工具。你可以像使用`texdoc -l`那樣搜尋他們提供的文件，然後從結果中選擇。

## CTAN

[CTAN](https://www.ctan.org)是綜合 TeX 檔案網路（Comprehensive TeX Archive Network）。大多數 LaTeX 宏包都發布在這裡。你可以在網站上搜尋宏包來訪問其文件。通常宏包儲存在`ctan.org/pkg/<pkg-name>`中，你可以在那裡訪問 CTAN 上儲存的宏包的 README 和文件。

## LaTeX 相關書籍

有幾本可以幫助你學習更多關於 LaTeX 的書籍。作為初學者，你會從結構化的入門指南中獲益良多，因為這些指南可以提供比我們在這裡介紹的更多細節。你可能還想要一個更詳細的參考手冊。

LaTeX 團隊維護了一個[書籍列表](https://www.latex-project.org/help/books/)，其中大部分是由團隊成員編寫的。最著名的是 [Lamport 的官方指南](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)和全面的 [LaTeX Companion 第3版](https://www.informit.com/store/latex-companion-parts-i-ii-3rd-edition-9780138166489)。

其他面向學習 LaTeX 的書籍包括：

- [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) 作者：Helmut Kopka和Patrick Daly：提供電子書版本
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) 作者：Nicola Talbot：提供免費電子書或低價印刷版本
- [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/) 作者：Nicola Talbot：提供免費電子書或低價印刷版本
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide) 作者：Stefan Kottwitz：提供電子書和印刷版本
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) 作者：Marc van Dongen：提供電子書和印刷版本

## 獲取幫助

有多個線上論壇可以詢問 LaTeX 問題；也許現今最受歡迎的是 [TeX - LaTeX StackExchange](https://tex.stackexchange.com)。每當你提問時，最好先把示例弄清楚：通常被稱為"最小工作示例"（MWE）。這並不意味著程式碼能工作（否則你就不會提問了！），而是說你已盡最大努力使其清晰、自包含且最小化。後者意味著只包含足夠展示問題的內容。

### 如何建立最小工作示例（MWE）

如何構建 MWE？通常最簡單的是從：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
文字
\end{document}
```

開始，然後一行一行地新增內容，直到展示出問題。你也可以嘗試"縮減"你的實際檔案，但這可能是一個很長的過程。

<p 
  class="hint">如果你需要更多文字來展示分頁和其他效果，可以使用`lipsum`或者`zhlipsum`等宏包生成無意義的段落文字，同時保持測試檔案較小。</p>

### 日誌檔案

每次執行 LaTeX 時都會建立一個日誌檔案，它與你的輸入檔案同名但副檔名為`.log`。

<p 
  class="hint">根據你的桌面介面，你可能需要"顯示副檔名"才能確定是哪個檔案。</p>

在日誌檔案中，你總是可以看到完整的錯誤訊息。LaTeX 的錯誤訊息試圖提供幫助，但它們不像文書處理器中的訊息那樣。

<p 
  class="hint">一些編輯器也使得很難看到錯誤的"完整"文字，這可能隱藏了關鍵細節。</p>

如果你遇到問題，LaTeX 專家通常會要求一份你的日誌檔案副本。

### 更進一步

最後，我們提供了一個[示例集](./extra-01)，展示了本入門教程未涵蓋的不同主題領域，以及這些領域中的不同 LaTeX 宏包。
