---
layout: "lesson"
lang: "zh-hant"
title: "使用 LaTeX"
description: "本課解釋了什麼是TeX系統以及最常見的系統有哪些，列出了一些通常與 LaTeX 一起使用的文字編輯器，以及整合編輯器的線上系統。"
toc-anchor-text: "使用 LaTeX"
toc-description: "TeX系統和 LaTeX 文字編輯器。"
---

# 使用LaTeX

<span
  class="summary">本課解釋了什麼是TeX系統以及最常見的系統有哪些，列出了一些通常與 LaTeX 一起使用的文字編輯器，以及整合編輯器的線上系統。</span>

與許多計算機程式不同，LaTeX 不是一個包含“所有內容”的單一應用程式。相反，有多個程式協同工作。我們可以將其分為兩個你實際需要的部分：

- 一個 _TeX系統_
- 一個文字編輯器（通常是專門為 LaTeX 設計的）

## LaTeX系統

使用 LaTeX 的核心是擁有一個可用的TeX系統。TeX系統是一組“幕後”程式和檔案，它們是使 LaTeX 正常工作的必要條件，但大多數時候你不會直接“執行”它。

目前有兩個主要的TeX系統，[MiKTeX](https://miktex.org/)和 [TeX Live](https://tug.org/texlive)。它們都可以在 Windows、macOS 和 Linux 上使用。MiKTeX 在 Windows 上有很強的背景；在 macOS上 ，TeX Live 被捆綁到一個更大的集合中，稱為 [MacTeX](http://www.tug.org/mactex/)。每個系統都有其[優點](https://tex.stackexchange.com/questions/20036)，你可能想檢視[LaTeX 項目的更多建議](https://www.latex-project.org/get/)。

由於 TeX Live 在所有常見平臺上都可用，並且具有一些效能優勢，我們建議如果你不確定要安裝哪個系統，請選擇 TeX Live。

## 編輯器

LaTeX 檔案只是純文字，因此可以用任何文字編輯器編輯。然而，使用專門為 LaTeX 設計的編輯器最為方便，因為它們提供了一鍵編譯檔案、內建PDF檢視器和語法高亮等功能。所有現代LaTeX編輯器中一個非常有用的功能是 SyncTeX：可以點選原始檔直接跳轉到PDF，或反向跳轉。

LaTeX 編輯器比我們在這裡列出的要多得多：在 [StackExchange 上有一個全面的列表](https://tex.stackexchange.com/questions/339/latex-editors-ides)。一個基本的編輯器，[TeXworks](https://tug.org/texworks)，在 Windows 和 Linux 上的 TeX Live 和 MiKTeX 中都包含了，[TeXShop](https://pages.uoregon.edu/koch/texshop/)則包含在 MacTeX 中。（我個人比較喜歡使用另一個優秀的編輯器 [TexStudio](https://www.texstudio.org/)。）

<p 
  class="hint">無論你選擇哪個編輯器，我們建議你在安裝TeX系統<i>之後</i>安裝它，以便編輯器可以“找到”TeX系統並正確設定。</p>

## 線上工作

有幾個強大的線上網站可以讓你避免安裝TeX系統和 LaTeX 編輯器的需要。這些網站通過讓你在網頁中編輯檔案，然後在後臺執行 LaTeX，並顯示生成的PDF。

其中一些網站將 LaTeX 與類似於文書處理器的功能結合在一起，而另一些則更專注於讓你檢視 LaTeX 程式碼，因此更接近於本地安裝。

有些系統允許你在不登入的情況下執行 LaTeX，我們使用其中一個，[TeXLive.net](https://texlive.net)，讓你編輯和測試我們提供的示例。對於更完整的工作，最好的線上系統要求你在使用前註冊。這可以讓你儲存工作，也有助於網站不被過載。我們已經設定了連結，你可以使用 [Overleaf](https://www.overleaf.com)編輯我們的示例，這是 LaTeX 線上的主要網站之一。當然還有其他的：[Papeeria](https://papeeria.com/)就是一個例子。

## 與他人合作

如果你計劃將 LaTeX 原始檔傳送到處理它們的目的地，例如出版商、會議組織者或預印本伺服器（例如 arXiv），你應該檢查他們施加的限制。

## 練習

為自己設定一個本地 LaTeX 安裝 _或_ 一個線上 LaTeX 服務的賬戶。如果你使用本地安裝，你還需要選擇一個編輯器：我們建議從 TeXworks， TexStuio 或TeXShop（見上文）開始，然後在你了解自己如何最好地使用 LaTeX 後再檢視其他編輯器。

你將能夠[在瀏覽器中執行我們所有的其他練習](help.md)，但我們希望幫助你使用真實的文件，因此現在是讓自己準備好的好時機。
