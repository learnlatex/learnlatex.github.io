---
layout: "lesson"
lang: "zh-hant"
title: "處理錯誤"
description: "本課展示了 LaTeX 文件中的一些常見錯誤，它們的含義，以及如何解決它們。"
toc-anchor-text: "錯誤處理"
toc-description: "處理意外行為。"
---

# 處理錯誤

<span
  class="summary">本課展示了 LaTeX 文件中的一些常見錯誤，它們的含義，以及如何解決它們。</span>

與典型的文書處理系統不同，LaTeX 有一個類似於程式語言編譯器的編輯/執行/檢視迴圈，就像在程式設計中一樣，使用者可能會在輸入中出錯，因此需要處理系統報告的錯誤資訊。

## 常見錯誤

本頁給出了幾個常見錯誤的示例。每個錯誤示例都有一些關於錯誤資訊形式的討論。

嘗試這些示例可能會有所啟發，同時也可以使用編輯功能來嘗試修復文件並測試你是否能夠解決這些錯誤。

### 找不到pdflatex

人們在開始時看到的一個常見錯誤，在 Windows 作業系統中，可能是：

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

而在Linux系統中，則可能是：

```
bash: pdflatex: command not found
```
{: .noedit :}

這不是 TeX 錯誤，而是作業系統錯誤，說明TeX沒有安裝或找不到。一個常見的錯誤是安裝了一個 _編輯器_，如 TeXworks 或 TeXShop，但沒有安裝 TeX 系統，如 TeX Live 或 MiKTeX。

### TeX錯誤資訊的剖析

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

這裡使用自定義命令 \mycommand。

\end{document}
```

這會在日誌檔案中產生一個多行訊息。

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 這裡使用自定義命令 \mycommand
                                  .
? 
```
{: .noedit :}

* 第一行，以`!`標記，給出了錯誤的一般性質（未定義的命令）。
* 第二對行顯示 TeX 正在處理的行，在 TeX 已經到達的點處有一個換行標記。未定義的命令是最後一個被讀取的標記，所以是換行前的最後一個詞，這裡是`\textbold`。換行後是`{hmmm}`，這些標記可能已經作為參數被讀取，但尚未被 TeX 執行。
* 在這一點上，可能會有一些額外的行顯示錯誤訊息的更多上下文。
* 最後一行以`l.`開頭，後面是行號，然後是原始檔中檢測到錯誤的行。

* 最後一行是一個`?`。如果互動式使用 TeX，可以在這一點向 TeX 輸入指令，但大多數編輯器和線上系統在錯誤時執行 TeX 的模式是不停止而是繼續嘗試處理剩餘的文件。如果你在互動式工作，輸入`s`到提示符會指示 TeX 以這種模式繼續。

注意，TeX 並不在定義被建立的點看到錯誤；事實上，如果`\mycommand`被定義但未使用，就不會報錯。所以雖然錯誤在第8行被報告，但"真正的"錯誤在第4行的定義中，因此看到完整的錯誤訊息很重要。

要注意，一些編輯器顯示錯誤日誌的一行"摘要"。這可能特別具有誤導性，如果顯示為

`行 8: 未定義的命令: ...\mycommand`

因為它使得看起來像是`\mycommand`未定義。

### 不匹配的花括號

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

這裡的錯誤是一個用於結束可選參數的不匹配的`}`。結束花括號導致 LaTeX 的選項解析失敗，你得到一個內部的且不太有幫助的錯誤：

```
! \@fileswith@ptions 參數包含額外的 }.
```
{: .noedit :}

雖然錯誤描述不太有幫助，但接下來的兩行通過使用換行準確地顯示了錯誤的位置：

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}

### 缺失檔案

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmathz}

\begin{document}

\end{document}
```

這會產生錯誤

```
! LaTeX 錯誤: 檔案 `amsmathz.sty' 未找到.
```
{: .noedit :}

注意：同樣的錯誤可能由兩種不同的原因引起；這裡是一個簡單的拼寫錯誤，可以通過修正宏包名稱來糾正，或者檔案確實缺失，需要在當前系統上安裝。

### 顯示數學中的空行

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

一些文字
\begin{equation}

  1=2

\end{equation}

\end{document}
```

產生了一個有點神祕的錯誤

```
! 插入未知 $ .
```
{: .noedit :}

但修復很簡單，數學環境中的空行是不允許的，應該刪除。

## 練習

嘗試修復提供的示例中的錯誤。

生成包含不同錯誤的文件，並注意錯誤資訊的形式。

<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
  }, false);
</script>
