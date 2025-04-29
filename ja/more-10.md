---
layout: "lesson"
lang: "ja"
title: "追加レッスン：数式"
description: "この追加レッスンではamsmathの追加のアライメント環境や数式内でボールド体を使う方法、数式の拡張パッケージmathtools、そしてUnicode入力を数式入力に用いる方法などを説明します。"
toc-anchor-text: "追加レッスン：数式"
---

## `amsmath`のさらなるアライメント環境

`amsmath`にはメインレッスンで紹介した`align*`環境以外にも多数のディスプレイ数式環境を提供しています。そうした環境のうち、主なものとしてはアライメントが不要な複数行に渡るディスプレイ数式用の`gather`環境や、長い単一の数式を複数行に切り分ける（最初の行を左に、最後の行を右にアライメントする）ための`multline`環境があります。すべての環境について、`*`を付けるとデフォルトで数式番号の付与が省略されます。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{amsmath}

\begin{document}

Gather環境
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline環境
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### 数式アライメントのカラム

`amsmath`のアライメント環境はカラムのペアを受け取って、それぞれの最初のカラムを右側に、2つ目のカラムを左側にアライメントするように設計されています。このため複数の数式を並べる際に、関係演算子を基準としてアライメントすることが可能です。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{amsmath}
\begin{document}
アライメントされた数式たち
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

さらに、アライメントを行うディスプレイ数式環境には`ed`で終わるバリエーションもあります。これらはより大きなディスプレイ数式の中に入れて使用することができます。例えば`aligned`と`gathered`はそれぞれ`align`と`gather`の変種です。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{amsmath}
\begin{document}
Aligned環境
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned`は`tabular`のものと似た位置指定を行うオプション引数を取ることができます。これはインライン数式を先頭行にアライメントするような場合に便利です。以下のコード例の2項目を比較してみてください。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## ボールド体の数式

LaTeX標準では数式内の記号をボールド体にする方法は2つあります。数式全体をボールド体にする場合は`\boldmath`コマンドをその数式の記述に入る前に宣言します。また`\mathbf`コマンドを使用すると独立の文字や単語を立体かつボールドなローマン体にすることができます。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % \mathbfの誤った使い方
\end{document}
```

通常の太さの数式の中で太字の記号（`\boldmath`宣言時に出力されるもの）を使用したい場合には`bm`パッケージが提供する`\bm`コマンドを用いることができます。`\bm`コマンドは`=`のような記号やギリシャ文字に対しても効果を発揮します（上のコード例では`\mathbf`が`\pi`に対しては効果を発揮していないことに注意してください）。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Mathtools

`mathtools`パッケージは内部で`amsmath`パッケージを読み込んで多くの追加機能を提供します。一例を挙げると、`amsmath`の行列用の環境に各カラムのアライメントを指定するオプションを追加します。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## 数式のUnicode入力

[レッスン14](lesson-14)で扱うように、現代ではOpenTypeフォントを扱う拡張TeXエンジンが存在します。そうしたエンジンでも、デフォルトでは数式フォントについては古典的なTeXの数式フォントを使用します。`unicode-math`パッケージを使用するとOpenTypeの数式フォントを利用することができます。このパッケージの詳細はこのチュートリアルの範囲を超えてしまうので、[パッケージ文書](https://texdoc.org/pkg/unicode-math)を参照してください。ここでは小さなコード例を示すに留めます。

```latex
% !TEX program=lualatex
\documentclass{jlreq} % LuaLaTeX使用時はdvipdfmxは指定しない
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

いち、に、さん
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicodeの数学用英数字記号（Math Alphanumerics）
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
