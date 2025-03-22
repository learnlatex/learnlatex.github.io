---
layout: "lesson"
lang: "zh-hant"
title: "選擇字型和使用 Unicode 引擎"
description: "本課介紹了 LaTeX 如何解釋 Unicode 輸入以及這如何影響你的輸入內容和使用的字型。了解 Unicode 和 OpenType 字型支援。"
toc-anchor-text: "字型和 Unicode 引擎"
toc-description: "選擇字型和檔案編碼。"
---

# 字型和Unicode引擎

<span
  class="summary">本課介紹了 LaTeX 如何解釋 Unicode 輸入以及這如何影響你的輸入內容和使用的字型。了解 Unicode 和 OpenType 字型支援。</span>

當 TeX 和 LaTeX 最初開始被廣泛使用時，它們基本上只能直接處理歐洲語言，儘管也有一些使用其他字母（如希臘語和俄語）的能力。

## 重音和帶重音的字母

最初，重音和帶重音的字母是使用控制序列或宏來輸入的，比如`\c{c}`表示'ç'，`\'e`表示'é'。雖然有些人繼續使用這些輸入方法因為它們可能更容易輸入，但其他人希望能夠直接使用鍵盤上的鍵來輸入這些符號。

在 Unicode 之前，LaTeX 為許多類型的 *檔案編碼* 提供了支援，這些編碼允許以本地方式編寫各種語言的文字 — 例如，使用`latin1`編碼，法語使用者可以寫'`déjà vu`'，LaTeX 會在內部將帶重音的字母轉換為 TeX 命令以產生正確的輸出。

這種方法在使用`pdflatex`引擎的現代 LaTeX 中仍在使用。預設情況下，所有檔案都被假定為 Unicode（UTF-8 編碼），除非另有指定。儘管這個引擎限於8位字型，但大多數歐洲語言都可以得到支援。

## 字型選擇

使用`pdflatex`的字型選擇使用了健壯的 LaTeX 字型選擇方案，如今在標準 LaTeX 發行版中有許多可直接使用的字型。例如，TeX Gyre 字型是一套基於大多數人熟悉的常見字型的高質量字型，如 Times、Helvetica、Palatino 等。要載入這些字型，只需載入一個具有適當名稱的宏包。對於 Times 的替代品，TeX Gyre 的名稱是 Termes：

```latex
\usepackage{tgtermes}
```
{: .noedit :}

對於`pdflatex`，大多數字體都可以通過宏包訪問。你可以檢視 [LaTeX字型目錄](https://www.tug.org/FontCatalogue/)或 [CTAN上的'字型'主題](https://www.ctan.org/topic/font)來了解一些選項。你也可以在網際網路上搜尋你想要的字型，並尋找`pdflatex`相容的宏包版本。如果你想使用專有字型，你可以搜尋合適的克隆版本，對於大多數應用來說，這與原版足夠相似。

## Unicode時代

由於`pdflatex`限於8位檔案編碼和8位字型，它不能原生使用現代 OpenType 字型，也不能輕鬆地在使用不同字母（或指令碼，用技術術語來說）的多種語言之間切換。有兩個替代 pdfTeX 的引擎，它們原生使用 Unicode 輸入和現代字型：XeTeX 和 LuaTeX。對於 LaTeX，這些通常在你的編輯器中分別使用`xelatex`和`lualatex`引擎來呼叫。

<p class="hint">例如，本教程的中文版本就指定 XeLaTeX 為編譯引擎，並使用`xeCJK`宏包來支援中文。</p>

在這些引擎中，字型選擇由`fontspec`宏包完成，對於簡單的文件可以像這樣簡單：
```latex
% !TEX program=lualatex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

這選擇了 TeX Gyre Termes 字型，就像在`pdflatex`示例中一樣。值得注意的是，這種方法適用於 _任何_ OpenType 字型。一些可用於`pdflatex`的字型也可以通過它們各自的宏包用於`xelatex`和`lualatex`，或者通過使用`fontspec`如上所示載入你計算機上安裝的任何字型。

[LaTeX字型目錄](https://www.tug.org/FontCatalogue/)也顯示了有 OpenType 格式可用的字型，所以你可以用它作為查詢字型的資源，以及前面提到的 [CTAN頁面](https://www.ctan.org/topic/font)。

選擇字型後，現在可以直接在源文件中用純 Unicode 輸入文字。這裡是一個示例，顯示了一些拉丁字母和希臘字母以及一些 CJK 表意文字：

```latex
% !TEX program=lualatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p 
  class="hint">在切換語言時，通常也需要更改斷字模式等內容，`babel`和`polyglossia`宏包都提供了強大的功能來做這些事情。</p>
