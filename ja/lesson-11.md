---
layout: "lesson"
lang: "ja"
title: "フォーマットの変更：フォントとスペーシング"
description: "このレッスンでは文書内の要素間のスペーシングを変更する方法や明示的なフォーマット変更をLaTeX文書ソースで記述する方法を学びます。"
toc-anchor-text: "フォントとスペーシング"
toc-description: "見た目を変更する方法"
---

# フォーマットの変更：フォントとスペーシング

<span class="summary">このレッスンでは文書内の要素間のスペーシングを変更する方法や明示的なフォーマット変更をLaTeX文書ソースで記述する方法を学びます。</span>

すでに説明したように、LaTeXでは空行を入力すると新しい段落が開始されます。LaTeXの処理結果を見ると、新しい段落はインデントによって開始されるということもわかりました。

## 段落スペーシング

段落の区切りを示すにあたっては、インデントの代わりに「空行」を作ることも一般的です。このようなスタイルを採用する場合には`parskip`パッケージが使えます。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage[parfill]{parskip}
\usepackage{bxjalipsum} % ダミーテキスト
\begin{document}
\jalipsum{wagahai}
\end{document}
```

## 強制改行

ほとんどの場合、LaTeXで強制改行を使用すべきではありません。強制改行ではなく、（場合によっては`parskip`パッケージも使いながら）改段落をするようにしましょう。

**稀**ではありますが、改段落ではなく強制改行`\\`を使う場面もないわけではありません。

* 表組みの行の終端
* `center`環境の中
* 詩（`verse`環境の中）

繰り返しますが、上記のわずかなケース以外では、`\\`を**使うべきではありません**。

## 明示的なスペース

`\,`を入れると小さなスペース（普通のスペースのおよそ半分）を入れることができます。数式モードでは`\.`、`\:`、`\;`などより多くの変種コマンドが利用でき、さらに`\!`というサイズが負のスペースも使うことができます。

極めて稀な状況（例えばタイトルページを作るとき）では水平方向・垂直方向の明示的なスペースが必要な場合があります。そのような場合にはそれぞれ`\hspace`（水平方向）と`\vspace`（垂直方向）を使います。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\begin{document}
何らかのテキスト\hspace{1cm}追加のテキスト。

\vspace{10cm}

もっと追加のテキスト。
\end{document}
```

## 明示的なテキストの見た目変更

多くの場合には明示的に見た目を変更するよりも論理的な構造を示す方が好ましいということを[レッスン3](lesson-03)で述べました。しかし、ときには明示的にテキストを太字やイタリック、あるいは等幅に変更したいという場合もあるでしょう。そのような場合に利用できるコマンドは大きく2種類に分けることができます。短いテキストに適用するためのコマンドと、より広い範囲に適用したい場合に利用するコマンドです。

短い欧文テキストに対しては`\textbf`、`\textit`、`\textrm`、`\textsf`、`\texttt`、`\textsc`を使うことができます。同様に和文テキストに対しては`\textmc`と`\textgt`があります。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\begin{document}
さまざまな欧文の書体を試してみましょう：
\textbf{bold}、\textit{italic}、\textrm{roman}、\textsf{sans serif}、
\texttt{monospaced}、\textsc{small caps}。

和文の書体は：\textmc{明朝体}、\textgt{ゴシック体}。
\end{document}
```

より広い範囲の書体を変更したい場合は、フォント設定自体を変えるようなコマンドを使用します（訳注：こうしたコマンドは「宣言型」と呼ばれることもあります）。例えば`\bfseries`や`\gtfamily`はそうしたコマンドの具体例です。こうしたコマンドには「終端」がないので、必ず**グループ**と呼ばれる構造の中で使用して文書全体に適用されてしまうのを防がねばなりません。LaTeXの環境や表組み中の各セルはグループです。あるいは、ブレースを使って`{ ... }`のように明示的にグループを作成することもできます。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\begin{document}
普通のテキスト。

{\gtfamily

このテキストはゴシック体です。

ご覧の通り、その効果は段落を超えても継続しています。

}
\end{document}
```

フォントサイズも似たような方法で変更することができます。これらのコマンドはいずれも、使うとそれ以降のテキストすべてに適用されます。フォントの大きさを変更するコマンドは相対的な形のものが多く、`\huge`、`\large`、`\normalsize`、`\small`、`\footnotesize`が一般的です。フォントサイズを変更したときは、サイズを元に戻す**前に**段落を終了することが重要です。このために次の例では`\par`を用いて明示的に段落を終了しています。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\begin{document}
普通のテキスト。

\begin{center}
{\gtfamily\large 何らかのテキスト\par}
普通のテキスト。
{\bfseries\small さらに何らかのテキスト\par}
\end{center}

\end{document}
```

## 練習問題

明示的なフォーマットの変更を色々と試してみましょう。`titlepage`環境を作ってさまざまなスペースを入れたりフォントを変更したりしてみてください。こうした命令を複数組み合わせるとどうなりますか？ 数式モードの場合とどう異なりますか？

大きな段落の中でフォントサイズを変更（まず`\tiny`を、次に`\huge`を試してみましょう）した後、グループの終わりに`\par`を書かないとどうなってしまいますか？
