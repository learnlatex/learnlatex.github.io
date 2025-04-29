---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：處理錯誤"
description: "本課展示了 LaTeX 中的一些更常見的錯誤，並解釋了鏈式錯誤和靜默錯誤。"
toc-anchor-text: "更多內容：處理錯誤"
---

## 在環境末尾報告的錯誤

某些環境（特別是`amsmath`的對齊環境和`tabularx`表格）在處理內容之前會掃描整個環境主體。這意味著環境內的任何錯誤都會在最後一行被報告。然而，如主課程所示，TeX 顯示的錯誤上下文仍然應該能夠準確指出錯誤位置。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

這裡的錯誤將在第12行被報告

```
l.12 \end{align}
```
{: .noedit :}

儘管實際錯誤是在第10行，這可以從上下文行中看出：

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## 由早期錯誤引起的虛假錯誤

當從命令列互動式呼叫 LaTeX 時，可以在第一個錯誤處使用`x`停止處理，編輯文件並重新執行。但是，如果你滾動過錯誤提示，或使用自動執行此操作的編輯器或線上系統，TeX 將嘗試恢復；然而這可能會導致報告更多的錯誤。

因此，不要太在意報告的錯誤 _數量_，始終專注於修復第一個報告的錯誤。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

這裡的錯誤是下劃線`_`，它應該輸入為`\_`。

TeX 在 _第一個_ 錯誤訊息中正確地報告了這一點

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

然而，如果你滾動過`?`提示，TeX 會通過新增一個`$`來恢復，這樣`_`就會在數學模式中被視為下標。數學模式然後會繼續到結束數學模式的`$`，因此後面的`\alpha`會在文字模式中被看到，從而產生另一個錯誤

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## 不觸發錯誤提示的錯誤

某些錯誤，特別是直到檔案末尾才被檢測到的錯誤，不會生成錯誤提示，而只是在日誌中給出警告。

如果你在 TeXLive.net 伺服器上嘗試這個示例，它預設會返回一個 PDF；要在日誌中檢視錯誤訊息，請新增`%!TeX log`。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

在這個例子中，大小變化錯誤地以 `)` 而不是 `}` 結尾。直到檔案末尾，TeX 檢測到仍有一個未關閉的組時，才會檢測到這種情況。它在這裡報告組以 `{` 開頭的行。它無法檢測到實際錯誤，因為 `)` 被視為“普通文字”。

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
  rlselectline('pre0',10);
  rlselectline('pre3',5);
  rlselectline('pre6',6);
  }, false);
</script>
