---
layout: "lesson"
lang: "zh-hant"
title: "引用和參考文獻"
description: "本課展示了參考文獻資料庫的基礎知識。學習如何建立自己的資料庫以及如何使用兩種主要的工作流程在文件中使用它們。"
toc-anchor-text: "引用和參考文獻"
toc-description: "使用參考文獻資料庫。"
---

# 引用和參考文獻

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span
  class="summary">本課展示了參考文獻資料庫的基礎知識。學習如何建立自己的資料庫以及如何使用兩種主要的工作流程在文件中使用它們。</span>

對於參考文獻引用，雖然你可以直接在文件中包含參考源，但通常你會從一個或多個外部檔案獲取這些資訊。這些檔案是參考文獻資料庫，包含以處理友好的格式儲存的資訊。使用一個或多個參考文獻資料庫可以讓你重複使用資訊並避免手動格式化。

## 參考文獻資料庫

參考文獻資料庫通常被稱為"BibTeX 檔案"，副檔名為`.bib`。它們包含一個或多個條目，每個條目對應一個參考文獻，每個條目中有一系列欄位。讓我們看一個例子：

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->


這是一個文章條目和一本書的條目；這是最常見的類型。每個資料庫條目類型都以`@`開頭，如所示，所有資訊都在一對大括號內。

除了被稱為"鍵"的引用"名稱"之外，各個欄位都以鍵值格式給出：這只是一個標籤，所以你可以使用任何你喜歡的內容，但在上面我們選擇使用作者名加年份：這是一種常見的方法。

具體需要給出哪些欄位取決於條目類型，但大多數都很明顯。你可能注意到在`author`欄位中，每個條目都用`and`分隔。這是_必需的_：輸出格式需要知道哪個作者是哪個。你可能還注意到在文章標題中，一些條目用了額外的大括號；這些是為了防止改變大小寫。

手動編輯`.bib`檔案相當繁瑣，所以大多數人使用專門的編輯器。[JabRef](https://www.jabref.org) 被廣泛使用，而且是跨平臺的，但還有幾個其他的介面可用。如果參考文獻包含 DOI（數字物件標識符），你可能想嘗試 [doi2bib](https://doi2bib.org)來輕鬆獲取 BibTeX 條目。但請確保檢查條目是否正確！

在這裡，我們將使用上面的簡短示例資料庫進行演示：我們已經將其"儲存"為`learnlatex.bib`。

## 從資料庫傳輸資訊

要將資訊從資料庫傳輸到文件中，需要三個步驟。首先，使用 LaTeX 編譯文件，這會建立一個包含文件引用的參考文獻列表的檔案。第二，執行一個程式從參考文獻資料庫中提取資訊，選擇你使用的那些參考文獻，並按順序排列。最後，再次編譯文件，這樣 LaTeX 就可以使用這些資訊來解析你的引用。通常需要至少編譯兩次才能解析所有引用。

對於第二步，有兩個廣泛使用的系統：BibTeX 和 Biber。Biber 只能與 LaTeX 宏包`biblatex`一起使用，而 BibTeX 可以不使用任何宏包，或者與`natbib`一起使用。

不同的編輯器以不同的方式處理執行 LaTeX 之外的第二個工具。對於我們的線上示例，有一些"幕後"指令碼可以一次完成所有操作。你的編輯器可能有一個"做事情"按鈕，或者你可能需要在 LaTeX 執行之間手動選擇執行 BibTeX 或 Biber。

引用和參考文獻的格式獨立於你的 BibTeX 資料庫，由所謂的"樣式"設定。我們將看到這在 BibTeX 工作流程和`biblatex`中工作方式略有不同，但一般思路保持不變：我們可以選擇引用的顯示方式。

## 使用`natbib`的BibTeX工作流程

雖然可以在不載入任何宏包的情況下在 LaTeX 文件中插入引用，但這相當有限。相反，我們將使用`natbib`宏包，它允許我們建立不同類型的引用，並且有很多可用的樣式。

我們輸入的基本結構如下例所示：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{natbib}

\begin{document}
數學展示來自\citet{Graham1995}，而
化學內容在\citet{Thomas2008}中。

一些括號引用：\citep{Graham1995}
然後\citep[p.~56]{Thomas2008}。

\citep[參見][pp.~45--48]{Graham1995}

一起引用\citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

你可以看到我們可以通過給出它們的鍵來引用資料庫中的不同條目。`natbib`宏包同時提供了文字和括號引用樣式，分別是`\citet`和`\citep`。參考文獻樣式由`\bibliographystyle`行選擇；這裡我們使用了`plainnat`樣式。參考文獻實際上是由`\bibliography`行插入的，它也選擇要使用的資料庫；這是一個逗號分隔的列表。

可以通過可選參數向引用新增頁碼引用。如果給出兩個可選參數，第一個會出現在引用標籤之前作為簡短說明，第二個出現在標籤之後作為頁碼引用。

上面的設定使用作者-年份樣式，但我們可以使用數字引用。這是通過向`natbib`行新增`numbers`選項來完成的。

## `biblatex`工作流程

`biblatex`宏包的工作方式與`natbib`略有不同，因為我們在導言區選擇資料庫，但在文件正文中列印它。還有一些新的命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % 參考文獻資訊檔案

\begin{document}
數學展示來自\autocite{Graham1995}。

一些更復雜的引用：\parencite{Graham1995}或
\textcite{Thomas2008}或可能是\citetitle{Graham1995}。

\autocite[56]{Thomas2008}

\autocite[參見][45-48]{Graham1995}

一起引用\autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

注意`\addbibresource` _需要_ 完整的資料庫檔名，而我們在`natbib`中使用`\bibliography`時省略了`.bib`。還要注意`biblatex`使用更長的命令名稱，但這些都很容易猜到。

同樣，可以在引用前後插入簡短文字，使用可選參數。注意這裡頁碼不需要加字首`p.~`或`pp.~`，`biblatex`可以自動新增適當的字首。

在`biblatex`中，參考文獻樣式是在載入宏包時選擇的。這裡我們使用了`authoryear`，但還有`numeric`樣式和許多其他可用的樣式。

## 在 BibTeX 工作流程和`biblatex`之間選擇

儘管 BibTeX 工作流程和`biblatex`都通過 BibTeX 檔案獲取輸入，並且可以產生在文件中結構上相似的輸出，但它們使用完全不同的方式來產生這個結果。這意味著這兩種方法之間存在一些差異，這可能幫助你選擇哪種方法最適合你。

在 BibTeX 工作流程中，參考文獻樣式最終由一個`.bst`檔案決定，你通過`\bibliographystyle`命令選擇它。`biblatex`不使用`.bst`檔案，使用了一個不同的系統。如果你使用的是一個帶有`.bst`檔案的模板，或者你的項目給了你一個`.bst`檔案，你必須使用 BibTeX 工作流程，不能使用`biblatex`。

`biblatex`採用的不同方法意味著你可以直接從文件導言區使用基於 LaTeX 的命令修改參考文獻和引用命令的輸出。相比之下，BibTeX 的`.bst`樣式的修改通常需要處理這些外部檔案，並且需要了解 BibTeX 程式語言。一般來說，`biblatex`被認為比 BibTeX 工作流程更容易定製。

在`biblatex`中，實現更復雜的引用樣式通常更容易，它提供了更廣泛的不同引用命令。它還提供更多上下文相關的功能。粗略地說，這對於在許多STEM學科中常見的樣式來說不太有趣，但對於一些人文學科領域中更復雜的樣式來說變得相關。

BibTeX 只能正確排序 US-ASCII 字元，並依賴變通方法為非 US-ASCII 字元提供基於 US-ASCII 的排序。通過Biber，`biblatex`提供了完整的 Unicode 排序功能。因此，如果你想要以非 ASCII/非英語順序對參考文獻進行排序，`biblatex`通常是更好的選擇。

由於存在的時間比`biblatex`更長，BibTeX 工作流程比`biblatex`更為成熟，這意味著許多出版商和期刊期望使用 BibTeX 工作流程生成的參考文獻。這些出版商不能或通常不接受使用`biblatex`的投稿。

結論是：檢查作者/投稿指南，如果你要投稿給期刊或出版商。如果你得到了一個`.bst`檔案，你必須使用 BibTeX 工作流程。如果你需要一個相對簡單的參考文獻和引用樣式，並且只需要基於英語 US-ASCII 的排序，BibTeX 工作流程就足夠了。如果你需要更復雜的引用樣式，非英語排序，或者想要更容易訪問引用和參考文獻樣式的自定義功能，你會想要研究使用`biblatex`。

## 練習

嘗試`natbib`和`biblatex`的示例。對於`natbib`，你需要執行 LaTeX、BibTeX、LaTeX、LaTeX；對於`biblatex`，是 LaTeX、Biber、LaTeX。找出如何在你的編輯器中做到這一點，或者嘗試 Overleaf 和 TeXLive.net 的自動化功能。

看看當你建立新的資料庫條目和新的引用時會發生什麼。新增一個不在資料庫中的引用，看看它如何顯示。嘗試`natbib`的`numeric`選項和`biblatex`的`style=numeric`選項。
