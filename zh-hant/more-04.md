---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：邏輯結構"
description: "本課展示了如何設定文件標題，以及如何製作描述列表。"
toc-anchor-text: "更多內容：邏輯結構"
---

## 文件標題

LaTeX 為文件標題提供了一些邏輯標記：三個用於設定"後設資料"的命令和一個用於使用它的命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
\author{張三 \and 李四}
\title{我做的一些事情}
\date{2020年4月1日}
\maketitle

一些普通的文字。
\end{document}
```

如你所見，命令`\author`、`\title`和`\date`用於儲存資訊，而`\maketitle`則使用這些資訊。你也可以用`\and`來分隔多個作者。命令`\author`、`\title`和`\date`需要在`\maketitle`之前使用。這裡，我們把它們放在了文件正文中：它們也可以在導言區使用，但如果你使用babel宏包的快捷方式，它們在那裡不會生效。

`\maketitle`提供的設計取決於文件類（參見[第5課](lesson-05)）。當你想要自定義設計時，可以使用`titlepage`環境，但這超出了本入門教程的範圍。如果你想要自己設計文件，你可以使用一個可定製的文件類，如`memoir`，或者從 LaTeX 的基礎類之一（如`book`）開始，將其作為起點。

## 描述列表

除了"有序"和"無序"類型的列表外，LaTeX 還提供了另一種不太常見的列表：描述列表。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

\begin{description}
\item[狗：] 犬屬的成員，屬於狼形犬科，是最廣泛分佈的陸地食肉動物。
\item[貓：] 小型食肉哺乳動物的家養物種。它是貓科中唯一的家養物種，通常被稱為家貓，以區別於該科的野生成員。
\end{description}

\end{document}
```

## 練習

嘗試設定不同的`\author`、`\title`和`\date`資訊來測試`\maketitle`。你 _必須_ 提供哪些資訊？這些命令中必須包含作者、標題和日期嗎？

製作一些描述列表，並嘗試將其中一些巢狀在其他列表（有序、無序或描述列表）中。
