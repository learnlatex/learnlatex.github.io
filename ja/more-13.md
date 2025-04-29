---
layout: "lesson"
lang: "ja"
title: "追加レッスン：より大きな文書を作る"
description: "この追加レッスンでは索引の作り方と、そのプロセスを自動化するimakeidxパッケージの使い方を紹介します。"
toc-anchor-text: "追加レッスン：より大きな文書を作る"
---

## 索引を作成する

作成している文書の書類によっては、索引を付したい場合もあるでしょう。索引の作り方は、一時ファイル（auxファイル）を使用するという点で参考文献の作り方と少し似ています。幸運なことに、このプロセスは`imakeidx`パッケージを使用することで自動化することができます。LaTeXに対して指示すべきことは3つあります。

* `\makeindex`コマンドで索引作成の機能を有効化します
* `\index`コマンドで索引語をマークアップします
* `\printindex`コマンドで索引を印字します

```latex
% !TEX program=pdflatex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

上の例では、索引作成時に使うことのできる2つの機能を使用しています。`!`を用いた下位区分の作成と、`@`を用いたソート用読み仮名の付与です。索引は柔軟にカスタマイズすることができます。具体例を編集して、さまざまな索引を作成してみましょう。
