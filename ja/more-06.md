---
layout: "lesson"
lang: "ja"
title: "追加レッスン：パッケージを利用したLaTeXの拡張"
description: "この追加レッスンではパッケージの読み込みについてより詳しく解説します。babelパッケージを用いて言語選択を行う方法やカスタムコマンドについてより踏み込んだ内容を扱います。"
toc-anchor-text: "追加レッスン：パッケージを利用したLaTeXの拡張"
---

## 複数のパッケージを読み込む

複数のパッケージを同時に読み込むため、`\usepackage`コマンドにはパッケージ名のカンマ区切りリストを与えることができます（例えば`\usepackage{color,graphicx}`）。パッケージオプションを指定した場合は、リスト内の各パッケージに対してそれらのオプションが適用されます。ただし個別にパッケージ読み込みを行ったほうがコメントアウトするのも簡単なので、このチュートリアルではパッケージは1行に1つ読み込む方針を貫きます。

## `babel`パッケージ

[メインレッスン6](lesson-06)では`babel`パッケージを利用すると異なるハイフネーションパターンを選択できるということを説明しました。選択した言語によっては、ハイフネーションパターンの以外にもさまざまな設定の適用が行われます。例えばドイツ語の場合には「ソフト」ハイフンを挿入するための短いコマンドが定義されたり、ドイツ語キーボードがなくても簡単にウムラウトを入力する方法が提供されたりします。また`\tableofcontents`で出力される**目次**の見出し名がドイツ語の“Inhaltsverzeichnis”に変更されている点にも注意してください。

```latex
% !TEX program=pdflatex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

また別の言語ではデザインが変更される場合もあります。例えば、伝統的なフランス語組版では`:`などのパンクチュエーション記号の前にスペースをおきます。`french`オプション付きで`babel`パッケージを読み込んでいる場合、このスペースが自動的に挿入されるようになります。

## グローバルオプション

あるオプションを読み込むすべてのパッケージに対して適用したいという場合には、そのオプションを`\documentclass`に対して与えます。すべてのパッケージはこのグローバルオプションを「確認」します。例えば、使用言語をすべてのパッケージに伝えるためには、次のようにします：

```latex
% !TEX program=pdflatex
\documentclass[ngerman]{article} % オプション名は 'ngerman' である点に注意
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## コマンド定義の応用

`\newcommand`を用いると最大で9個の引数を取るコマンドを作ることができます。このうち最初の引数はオプション引数にすることも可能です。

メインレッスンのコード例を拡張することを考えるなら、キーワードの色を変更可能（デフォルトは青）にすることができます。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\gtfamily #2}}

\begin{document}

\kw{リンゴ}と\kw{みかん}についての何らかの論述。

\end{document}
```

オプション引数は`[]`で囲うことで表され、もし省略された場合には定義時に指定されたデフォルト値が用いられます。

## `\NewDocumentCommand`

2020年10月のLaTeXリリース以降は、拡張されたコマンド定義システムが利用可能になりました。それ以前のLaTeXでも、このシステムは`xparse`パッケージにより利用可能でした（互換性のため、ここでも`xparse`パッケージを読み込むコード例を示します）。

上のコード例を、`\NewDocumentCommand`を用いて書き直すと次のようになります。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{xparse}
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\gtfamily #2}}

\begin{document}

\kw{リンゴ}と\kw{みかん}についての何らかの論述。

\end{document}
```

`\newcommand`の場合と同様に、`\NewDocumentCommand`は定義するコマンド名（ここでは`\kw`）と定義本体（引数は`#1`から`#9`で表現されます）を受け取ります。しかし、引数仕様の表現の仕方が大きく異なります。

`\newcommand`では単に引数の数（および場合によっては最初のオプション引数のデフォルト値）を与えていましたが、`\NewDocumentCommand`は1つ1つの引数が1つの文字で表現されます。つまり、2つの引数を取るコマンドの引数仕様は`[2]`ではなく`{mm}`のように表現されます。こうした表現方法はいくらか冗長ですが、多様な形態のコマンド定義を可能にします。上記のコード例はシンプルながらそうした事例の1つになっています：最初の引数はデフォルト値が`blue`のオプション引数（`O{blue}`）で、2つ目は必須の引数です（`m`）。
