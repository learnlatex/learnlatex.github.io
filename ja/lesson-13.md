---
layout: "lesson"
lang: "ja"
title: "より大きな文書を作る"
description: "このレッスンでは、管理がしやすいようにLaTeX文書ソースを小さなファイルに分割する方法を紹介します。ファイル分割を行うことで、長い文書の作成を簡単にしたり、処理時間を短縮したりすることができます。"
toc-anchor-text: "文書ソースの構造化"
toc-description: "管理しやすいようにファイル分割する"
---

# より大きな文書を作る

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span class="summary">このレッスンでは、管理がしやすいようにLaTeX文書ソースを小さなファイルに分割する方法を紹介します。ファイル分割を行うことで、長い文書の作成を簡単にしたり、処理時間を短縮したりすることができます。</span>

大きな文書を作成する場合は、しばしばソースを複数ファイルに分割したくなることがあります。例えば、「メイン」のファイルを1つ作り、章ごと（主に書籍や学位論文の場合）やセクションごと（長い論文の場合）のソースファイルを用意するということはよく行われます。

## ソースを構造化する

LaTeXにはこうしたファイル分割を制御するしくみがあります。この機能で重要なコマンドは`\input`と`\include`の2種類です。このうち`\input`は、指定したファイルの内容を「まるでそこに直接記述したかのように」読み込むもので、（原理的には）どのような場合にも利用できます。一方の`\include`は新しいページを作成し、さらに内部的な調整を行うので、章ごとの分割の場合にのみ役立ちます。その代わり、このコマンドには大きな利点があります。`\include`を使用した場合、どの章を実際に読み込むかを制御することができるので、文書全体ではなく文書の一部のみに集中して処理を行うことができるのです。

以上のことを踏まえた上で、長いドキュメントの例を見てみましょう：

<!-- pre0 {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{とあるシンプルな本}
\author{組版太郎\and 組版花子}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% すべての aux ファイルを生成するため、
% 最初は全ファイルを読み込む
}

\begin{document}
\frontmatter       % 前付け
\include{front}

% =========================
\mainmatter        % 本文
\include{chap1}
\include{chap2}
\appendix          % 付録
\include{append}

% ========================
\backmatter        % 後付け
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

以降は、このコード例をさまざまな観点から説明していきます。（上記コード例のタイプセットに必要な多数の補助ファイルの中身は、このページの末尾に掲載しています。）

## `\input`を使用する

`\input`コマンドは大きなファイルの章ごと**ではない**部分に使うと良いです。上のコード例では、前付けブックカバーを分割するのに使用しています。こうすることで、メインファイルを短く明確に保つことができ、さらに言えば切り出したカバーは場合によっては別の文書に再利用することができます。さらに「本」の表紙や裏表紙など**章ではない**セクションを分割するのにも使用しています。これもやはりメインファイルをシンプルな状態に維持するためです。

## `\include`と`\includeonly`を使用する

`\include`コマンドは章を分割するのに向いているので、上のコード例でも章全体を切り出す場合に用いています。このコマンドは必ず改ページを行います。どの章を実際に読み込むのかを絞り込むために`\includeonly`コマンドを使用しました。このコマンドの引数にはファイル名をカンマ区切りリストで与えます。`\includeonly`を使用することでタイプセットにかかる時間を短縮したり、校正のために「選択的な」PDFを生成したりすることができます。`\includeonly`を利用することの大きなメリットの1つは、ファイル分割をしていてもLaTeXが`.aux`ファイルにある相互参照の情報をすべて利用できるということです。

## 目次を作成する

`\tableofcontents`コマンドは見出しコマンドの情報を利用して目次の生成を行います。目次用途には専用の一時ファイル（拡張子は`.toc`）があり、そのため目次を完成させるにはLaTeXを2回以上実行する必要がある場合があります。目次は見出し名から自動的に作成されます。似たようなコマンドに`\listoffigures`と`\listoftables`があり、これらはフロート環境のキャプション情報を利用してそれぞれ図目次と表目次を作成します。これらの目次にも専用の一時ファイルがあり、その拡張子はそれぞれ`.lof`と`.lot`です。

## 文書をパート別に分割する

前付けの`\frontmatter`、本文の`\mainmatter`、後付けの`\backmatter`はフォーマットに影響を与えます。例えば、`\frontmatter`はページ番号をローマ数字に変更します。また`\appendix`コマンドは章の番号を`A`、`B`、……の形に変更するので、`\appendix`後の最初の章の見出しは「付録A」のようになります。

## 練習問題

このレッスンで使用したコード例を利用して、基本的な構造を色々といじってみましょう。`\includeonly`の引数を変更して、その効果を確かめましょう。

いくつかのフロート要素を追加して、表目次と図目次を作ってみましょう。ローカル環境にLaTeXをインストールしている場合は、目次を完成させるのに何回LaTeX実行が必要でしたか？（オンラインシステムはLaTeXの再実行を自動で行ってしまうので、何回の処理が必要かは見た目ではわかりません。）

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Preface}
まえがき。\cite{doody}を参照せよ。
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introduction}
最初の章のテキスト。
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Something}
2つ目の章のテキスト。
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
最初の付録のテキスト。
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
表紙
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
誰々のために\ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
後付け
\end{center}
```
<!-- {% endraw %} -->
