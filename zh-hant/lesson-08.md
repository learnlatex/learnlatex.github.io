---
layout: "lesson"
lang: "zh-hant"
title: "表格"
description: "本課展示了如何在 LaTeX 中建立表格，如何影響單元格的對齊，如何新增表格線條，以及如何合併單元格。"
toc-anchor-text: "LaTeX 表格"
toc-description: "表格的基礎知識。"
---

# 表格

<span
  class="summary">本課展示了如何在 LaTeX 中建立表格，如何影響單元格的對齊，如何新增表格線條，以及如何合併單元格。</span>

LaTeX 中的表格使用`tabular`環境來建立。本課假設你已載入`array`宏包，它為LaTeX表格新增了更多功能。這個宏包之所以不是 LaTeX 核心的一部分，僅僅是出於歷史原因。因此，請在導言區新增以下內容，我們就可以開始了：

```latex
\usepackage{array}
```
{: .noedit :}

要排版`tabular`環境，我們需要告訴 LaTeX 需要多少列以及它們應該如何對齊。這是通過一個必需的參數（通常被稱為表格導言）來完成的，在這個參數中，你使用單字母名稱（稱為導言標記）來指定列。可用的列類型有：

<!-- don't line wrap this table, markdown seems to not support this -->

| 類型            | 描述                                                                                      |
| --------------- | :---------------------------------------------------------------------------------------- |
| `l`             | 左對齊列                                                                                  |
| `c`             | 居中對齊列                                                                                |
| `r`             | 右對齊列                                                                                  |
| `p{寬度}`       | 固定寬度為`寬度`的列；文字將自動換行並完全對齊                                            |
| `m{寬度}`       | 與`p`類似，但相對於行的其餘部分垂直居中                                                   |
| `b{寬度}`       | 與`p`類似，但底部對齊                                                                     |
| `w{對齊}{寬度}` | 以固定`寬度`列印內容，如果內容過大則靜默溢位。你可以使用`l`、`c`或`r`來選擇水平對齊方式。 |
| `W{對齊}{寬度}` | 與`w`類似，但如果內容過寬，這將發出溢位框警告。                                           |

此外，還有一些其他可用的導言標記，它們不定義列但可能也很有用：

<!-- don't line wrap this table, markdown seems to not support this -->

| 類型              | 描述                                                                     |
| ----------------- | :----------------------------------------------------------------------- |
| `*{數量}{字元串}` | 在導言中重複`字元串` `數量`次。通過這種方式，你可以定義多個相同的列。    |
| `>{聲明}`         | 在每個單元格內容之前將`聲明`放在下一列中（這對於設定不同的字型等很有用） |
| `<{聲明}`         | 在前一列的每個單元格內容之後放置`聲明`                                   |
| <span>`           | `</span>                                                                 | 新增垂直線 |
| `@{聲明}`         | 用`聲明`替換列之間的空格                                                 |
| `!{聲明}`         | 在現有空格的中心新增`聲明`                                               |

這兩個表格列出了 LaTeX 和`array`宏包提供的所有可用列類型。一些來自不同宏包的其他列類型在本課的[更多細節](more-08)中介紹。

列`l`、`c`和`r`的寬度將是其最寬單元格的自然寬度。每個列都必須聲明，因此如果你想要三個居中對齊的列，你需要在表格導言中使用`ccc`。空格會被忽略，所以`c c c`是一樣的。

在表格主體中，列使用`&`分隔，新行使用`\\`開始。

我們已經有了建立第一個表格所需的一切。在下面的程式碼中，`&`和`\\`是對齊的。這在 LaTeX 中不是必需的，但有助於閱讀原始碼。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  動物  & 食物  & 大小   \\
  狗    & 肉    & 中等   \\
  馬    & 乾草  & 大     \\
  青蛙  & 蒼蠅  & 小     \\
\end{tabular}
\end{document}
```

如果表格列包含大量文字，僅使用`l`、`c`和`r`會出現問題。看看下面的例子會發生什麼：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  動物 & 描述 \\
  狗   & 狗是犬屬的成員，屬於狼形犬科，是最廣泛分佈的陸地食肉動物。 \\
  貓   & 貓是一種小型食肉目家養動物。它是貓科中唯一的家養物種，通常被稱為家貓，以區別於該科的野生成員。 \\
\end{tabular}
\end{document}
```

問題在於`l`類型列會以其自然寬度排版其內容，即使有頁面邊界也不會換行。要解決這個問題，你可以使用`p`列。這會將其內容作為段落排版，並指定寬度作為參數。將上面的結果與以下內容進行比較：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  動物 & 描述 \\
  狗   & 狗是犬屬的成員，屬於狼形犬科，是最廣泛分佈的陸地食肉動物。 \\
  貓   & 貓是一種小型食肉目家養動物。它是貓科中唯一的家養物種，通常被稱為家貓，以區別於該科的野生成員。 \\
\end{tabular}
\end{document}
```

如果你的表格有許多相同類型的列，在導言中輸入那麼多列定義會很麻煩。你可以使用`*{num}{string}`來簡化，它會重複`string` `num`次。所以`*{6}{c}`等同於`cccccc`。為了證明它確實有效，這裡是本課的第一個表格，使用新學到的語法：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  動物  & 食物  & 大小   \\
  狗    & 肉    & 中等   \\
  馬    & 乾草  & 大     \\
  青蛙  & 蒼蠅  & 小     \\
\end{tabular}
\end{document}
```

## 新增線條

在介紹線條之前，先提一個建議：線條在表格中應該謹慎使用，通常垂直線看起來不夠專業。事實上，對於專業的表格，你不應該使用任何標準線條；相反，你應該熟悉`booktabs`宏包的功能，這就是為什麼我們先在這裡介紹它。為了完整性，標準線條在[更多資訊](more-08)頁面中展示。

`booktabs`提供了四種不同類型的線條。每個這些命令都必須作為行中的第一個內容使用，或緊跟在另一個線條之後。
三個線條命令是：`\toprule`、`\midrule`和`\bottomrule`。從它們的名稱就可以清楚地知道它們的使用位置：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  馬    & 乾草  & 大     \\
  青蛙  & 蒼蠅  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

`booktabs`提供的第四個線條命令是`\cmidrule`。它可以用來繪製一條不跨越整個表格寬度的線條，而是隻跨越指定的列範圍。列範圍作為數字範圍輸入：`{`_數字_`-`_數字_`}`。即使你只想為單個列繪製線條，也需要將其指定為範圍（兩個數字相同）。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  \cmidrule{1-2}
  馬    & 乾草  & 大     \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  青蛙  & 蒼蠅  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

你可以使用`\cmidrule`的短版本，在任一端新增一個可選參數，括號中的`r`和`l`分別表示規則在 **右** 和 **左** 端縮短：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  \cmidrule{1-2}
  馬    & 乾草  & 大     \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  青蛙  & 蒼蠅  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

你可能已經猜到，`r`和`l`分別表示規則在**右**和**左**端縮短。

有時，線條會將兩行分隔得太開，但為了更清楚地表達含義，你仍需要通過某種方式將它們分開，這時使用`\addlinespace`來插入一個小分隔。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  動物 & 描述 \\
  \midrule
  狗   & 狗是犬屬的成員，屬於狼形犬科，是最廣泛分佈的陸地食肉動物。 \\
  \addlinespace
  貓   & 貓是一種小型食肉目家養動物。它是貓科中唯一的家養物種，通常被稱為家貓，以區別於該科的野生成員。 \\
  \bottomrule
\end{tabular}
\end{document}
```

## 合併單元格

在 LaTeX 中，你可以使用`\multicolumn`命令來水平合併單元格。它必須作為單元格中的第一個內容使用。`\multicolumn`需要三個參數：

1. 應該合併的單元格數量
2. 合併單元格的對齊方式
3. 合併單元格的內容

對齊方式可以包含任何在`tabular`導言中合法的內容，但**只能包含單個列類型**。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  馬    & 乾草  & 大     \\
  青蛙  & 蒼蠅  & 小     \\
  fuath  & \multicolumn{2}{c}{未知} \\
  \bottomrule
\end{tabular}
\end{document}
```

你還可以使用`\multicolumn`在一個單元格上，以防止應用表格導言中為當前列定義的任何內容。以下內容使用這種方法來居中表格的標題行：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{動物} & \multicolumn{1}{c}{食物} & \multicolumn{1}{c}{大小} \\
  \midrule
  狗    & 肉    & 中等   \\
  馬    & 乾草  & 大     \\
  青蛙  & 蒼蠅  & 小     \\
  fuath  & \multicolumn{2}{c}{未知} \\
  \bottomrule
\end{tabular}
\end{document}
```

垂直合併單元格在 LaTeX 中不受支援。通常，只需留空單元格即可讓讀者正確的理解，而無需明確地使單元格跨越多行。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  組    & 動物  & 大小   \\
  \midrule
  草食動物 & 馬    & 大     \\
          & 鹿    & 中等   \\
          & 兔子  & 小     \\
  \addlinespace
  肉食動物 & 狗    & 中等   \\
          & 貓    & 小     \\
          & 獅子  & 大     \\
  \addlinespace
  雜食動物 & 烏鴉  & 小     \\
          & 熊    & 大     \\
          & 豬    & 中等   \\
  \bottomrule
\end{tabular}
\end{document}
```

## 練習

使用簡單的表格示例開始嘗試表格。嘗試使用`l`、`c`和`r`列類型進行不同的對齊。如果你在表格行中缺少項目會發生什麼？如果你在表格行中新增太多項目會發生什麼？嘗試使用`\multicolumn`命令跨越多列。
