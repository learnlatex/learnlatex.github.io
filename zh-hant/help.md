---
layout: "page"
lang: "zh-hant"
title: "使用 learnlatex.org 網站"
description: "本頁介紹 learnlatex.org 網站及如何最好地使用它。"
permalink: /zh-hant/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# 幫助

## 網站導航

本課程包含16個核心課程，可以從[首頁](./)的[目錄]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }})進入。

每個課程都有一個連結指向相同主題的相關課程，這些相關課程會更深入地探討該主題。你應該能夠在 _無需_ 閱讀額外課程的情況下完成全部16個課程。

在課程結束時，有一個或多個針對當前所用語言的特定課程，最後還有一個展示各種宏包的示例庫，展示了本課程未涵蓋的 LaTeX 用法。

---

## 示例

### 執行示例

每個示例都是一個完整的小型 LaTeX 文件，在頁面中顯示如下：

```latex
% !TEX program= LuaLaTeX 

\documentclass{ctexart}
\begin{document}
示例文字。
\end{document}
```

<p class="hint">當你使用 ctexart（或其他ctex文件類）時，無需載入 xeCJK 宏包（`\usepackage{xeCJK}`）。現代 TeX 引擎會根據需要自動載入對應的CJK 宏包，簡單的ctexart文件應該在所有引擎上都能正常工作。在編譯LaTeX文件時最好使用 LuaLaTeX 引擎，不僅因為它在處理大型文件時更快，而且它是被推薦的編譯引擎(https://www.texdev.net/2024/11/05/engine-news-from-the-latex-project)。</p>

每個示例都是完整的。但是你可能希望編輯它來做一些小的改動，也許是作為課程末尾的練習集的一部分。

編輯器使用的是

* [ACE](https://ace.c9.io/)。

  你可以在[網站設定](settings)頁面自定義編輯器使用的主題（例如使用深色主題，即在深色背景上顯示淺色文字）。在網站的任何示例中使用<kbd>Ctrl</kbd>+<kbd>,</kbd>（Mac上使用<kbd>⌘</kbd>+<kbd>,</kbd>）是一種嘗試不同主題的便捷方式。[這會顯示一個面板](javascript:acesettings())，允許你更改所有ACE設定。

  ACE程式碼庫有一個[有用的編輯器快捷鍵頁面](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts)。

* [CodeMirror6](https://codemirror.net/).


#### 執行示例的三種方式

* 使用 Overleaf 服務
* 使用 TeXLive.net 服務
* 使用本地安裝的 TeX 系統

##### 使用Overleaf服務

Overleaf 是最受歡迎的線上 LaTeX 編輯服務之一。示例下方的<button>在 Overleaf 中開啟</button>按鈕會將程式碼提交到[Overleaf](https://www.overleaf.com/about)。

如果你沒有賬號，或者瀏覽器中沒有快取賬號資訊，你將被重定向到登入頁面，在那裡你可以登入或註冊 Overleaf。這是一個免費服務，但需要你提供一些詳細資訊並同意使用條款和條件。

如果你的 Overleaf 賬號已經在瀏覽器中快取，Overleaf 將在新標籤頁中開啟，其中包含程式碼的新項目。你可以在 Overleaf 中編輯它，Overleaf 會同時執行 LaTeX 處理你的程式碼，顯示輸出結果或錯誤日誌。

與在 TeXLive.net 處理的文件不同，你可以將項目儲存在 Overleaf 賬號中，以後再回來繼續編輯。

##### 使用TeXLive.net服務

示例下方的<button>在 TeXLive.net 執行</button>按鈕會將程式碼提交到 [TeXLive.net](https://texlive.net)服務[^1]。

TeXLive.net 服務是專門為支援本網站而開發的，特別是利用了 [PDF.js](https://mozilla.github.io/pdf.js/)來實現在移動裝置和其他沒有內建 PDF 閱讀器的瀏覽器上顯示 PDF。

生成的 PDF 文件（或錯誤日誌的部分內容）將立即顯示在示例下方。會提供一個<button>刪除輸出檔案</button>按鈕，這樣你可以移除這個輸出（或者你可以將它留在原處，繼續學習下面的課程內容）。

注意，**TeXLive.net** 不需要任何登入或註冊，所以它對小型示例來說非常方便，但本網站不提供儲存你文件的機制。如果你離開頁面，你對示例所做的任何更改都會丟失。

##### 本地安裝的TeX系統

如果你已經在本地安裝了TeX系統，那麼你可以複製示例程式碼，可以通過顯式選擇它，也可以使用編輯器中的全選鍵盤快捷鍵（例如在 Windows 中使用<kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd>）。這會將程式碼放入你的作業系統剪貼簿，這樣你就可以使用本地編輯器啟動一個空白文件，然後貼上文字。

### 故障排除

我們的示例是基於使用最新的 LaTeX 安裝。它們都能在我們的兩個線上演示系統中執行，所以如果你在我們提供的示例中遇到錯誤，你可能需要檢查你的 LaTeX 系統是否需要更新。

---

## 選擇TeX引擎

提交示例文件時，預設將使用`pdflatex`引擎。

你可以通過使用以下形式的註釋來強制選擇`latex`、`pdflatex`、` XeLaTeX `、` LuaLaTeX `、`platex`或`uplatex`：

`% !TEX ` _任意文字_ ` LuaLaTeX `

其中開頭的空格是可選的，大小寫不敏感，第一個和最後一個單詞之間的_任意文字_也會被忽略。

這允許使用某些TeX編輯器使用的形式`% !TEX program=pdflatex`，但不要求`program=`，目前僅限於指定線上系統支援的引擎之一。

你可以在[本網站的一些示例](more-14)中看到使用註釋來指定 LuaLaTeX 的例子。

如果指定了`platex`或`uplatex`，那麼還會使用`dvipdfmx`程式來從這些變體生成的DVI檔案生成 PDF 結果。類似地，如果指定了`latex`，則會使用`dvips`和`ps2pdf`。

如果在`% !TeX`註釋中未指定引擎，則將使用`pdflatex`，除非你在[網站設定](settings)頁面上指定了預設TeX引擎。

---

## 選擇如何顯示輸出

如果你使用 TeXLive.net 系統，則預設情況下使用 [PDF.js](https://mozilla.github.io/pdf.js/)顯示執行示例的 PDF 輸出。這在各種瀏覽器中提供了一致的行為。

如果你更喜歡使用瀏覽器的預設 PDF 閱讀器（無論是內建的還是你配置的外部應用程式），請新增以下形式的註釋：

`% !TEX ` _任意文字_ `pdf`

預設行為可以通過使用`pdfjs`作為最後一個標記來顯式指定。出於偵錯目的，即使文件沒有錯誤地生成了 PDF，有時你也可能想要返回日誌檔案。這可以通過在註釋中使用`log`作為最後一個標記來指定。

作為使用`% !TeX`註釋的替代方法，你可以在[網站設定](settings)頁面上指定網站預設返回參數。這些設定是特定於每個瀏覽器的，因此例如你可以在移動裝置上使用預設的`pdfjs`設定，但在桌面瀏覽器上使用`pdf`來使用其預設的 PDF 渲染。

---

## HTML輸出（make4ht、LaTeXML、lwarp）

如果使用 TeXLive.net 系統，則可以指定額外的返回選項：`make4ht`、`LaTeXML`或`lwarp`。這些會在頁面內的框架中返回一個或多個 HTML 頁面。它們可以與` XeLaTeX `或` LuaLaTeX `以及預設的`pdflatex`處理一起指定。

要啟用此輸出，請新增以下形式的註釋：

```
% !TeX make4ht
```
{: .noedit :}

將`make4ht`替換為`LaTeXML`或`lwarp`來指定這些系統。

或者，你可以在[網站設定](settings)頁面上將`make4ht`、`LaTeXML`或`lwarp`指定為預設返回選項。

如果使用本地安裝的 TeX 系統，可以通過執行以下命令獲得與`make4ht`選項相同的輸出：

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

如果指定了 XeLaTeX 或 LuaLaTeX ，則需要新增`-x`或`-l`選項。

在本地執行時，可以使用其他配置。請參閱[make4ht手冊](https://texdoc.org/pkg/make4ht)。

對於`LaTeXML`，你需要安裝 LaTeXML（它不是 TeX Live 或 MiKTeX 的一部分）並使用：

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

可以使用許多其他 LaTeXML 配置，[如手冊中所述](https://dlmf.nist.gov/LaTeXML/manual/)。

`lwarp`配置在這裡沒有記錄，它有點實驗性並且可能會改變。當前版本可以在[原始碼庫](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp)中看到。

---

[^1]: 注意，在網站開發期間，我們還使用了 [LaTeX.Online](https://latexonline.cc/)和 [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)，我們感謝這些服務的開發者在早期階段使本網站的示例可用。


