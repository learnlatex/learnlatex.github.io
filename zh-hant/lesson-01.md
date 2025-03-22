---
layout: "lesson"
lang: "zh-hant"
title: "LaTeX 是什麼以及它如何工作"
description: "本課解釋了 LaTeX 的基本概念以及它與常見文書處理器（如Microsoft Word或LibreOffice Writer）的不同之處。"
toc-anchor-text: "LaTeX 基礎"
toc-description: "LaTeX 是什麼以及它如何工作。"
---

# LaTeX 基礎

<span
  class="summary">本課解釋了 LaTeX 的基本概念以及它與常見文書處理器（如Microsoft Word或LibreOffice Writer）的不同之處。</span>

與常見的文書處理器（如Microsoft Word或LibreOffice Writer）不同，LaTeX 通常不提供所見即所得（WYSIWYG）。使用 LaTeX 時，你需要將純文字與標記結合使用。這些標記告訴 LaTeX 文字中某些元素的邏輯意義，類似於HTML的工作方式。

例如，HTML文件中的`<h2>`元素表示一個新章節。LaTeX 也有一個命令用於此目的；在這裡你可以使用`\section`命令。

## LaTeX 工作流程

因為 LaTeX 檔案不是文件本身，而是關於文件各部分應該是什麼的指令，你通常不會直接將 LaTeX 檔案傳送給他人。相反，在編寫完 LaTeX 原始檔後，你需要使用 LaTeX （通常使用一個名為`pdflatex`的程式）來生成PDF檔案。然後，你將這個PDF檔案傳送給他人。

不同的人對這個過程有不同的描述。由於使用 LaTeX 有點像程式設計，它通常被稱為“編譯”文件，儘管“排版”更為準確。

## 多次執行 LaTeX 

對於簡單的檔案，你只需排版一次即可獲得完整的PDF。但一旦你開始新增更復雜的內容，如交叉引用、引用、圖形和目錄，你可能需要多次執行 LaTeX。我們會告訴你何時需要這樣做。

## LaTeX 或 pdfLaTeX 或其他

在[下一課](lesson-02)中，我們將看到 LaTeX 不是一個單一的程式。為了簡化，我們將專注於一個特定的 LaTeX 程式 pdfLaTeX（本課程的中文版使用XeLaTeX 以獲得更好的中文支援，但是 pdfLaTeX 仍然是最常用的 LaTeX 程式）來建立你的PDF。我們將在課程後面討論其他程式以及為什麼你可能想要使用它們。
