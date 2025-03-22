---
layout: "lesson"
lang: "ja"
title: "追加レッスン：表組み"
description: "このレッスンでは列スタイルやスペーシング・罫線の変更によって表組みをカスタマイズしたり、外部のパッケージを用いて表組み機能を拡張したりする方法を説明します。"
toc-anchor-text: "追加レッスン：表組み"
---

## その他のプリアンブルトークン

メインレッスンではすべてのプリアンブルトークンを紹介しなかったので、ここで残りいくつかのものについても例とともに紹介しておきます。メインレッスンの冒頭に掲げた表をもう一度見てもらえれば、どのようなトークンが利用可能なのかの概要を確認できるかと思います。トークン`l`、`c`、`r`、`p`の役割を理解した後であれば、メインレッスンの表にある短い説明を読むだけでも列タイプ`m`、`b`、`w`、`W`との違いを理解することができるでしょう。もしそれではわからないという場合は、ちょっと実験をしてみましょう。これ以外でまだ説明できていないトークンは`>`、`<`、`@`、`!`、`|`です。

### 列のスタイル

`>`と`<`を用いると、それぞれセルの前と後ろにコードを挿入することができるので、これによって列の見た目を変更することができます。例えば、最左の列を太字にしつつ直後にコロンを入れるようにするには、次のようにします：

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\bfseries}l<{：} *{2}{l}}
  動物   & 食べ物 & 大きさ \\
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

ここで`\bfseries`は後続のすべてのテキストを太字に変更しますが、その効果は表のセル内に「抑えられて」います。手動での書体変更については[レッスン11](lesson-11)で扱います。

また最初の1行は見出しなので、こうした変更を適用したくないという場合もあるでしょう。そのようなときは`\multicolumn`が使えます。このコマンドは下記の例のように単一の列のアライメントを変更するのにも使用できることを思い出しましょう。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\bfseries}l<{：} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{動物} & 食べ物 & 大きさ \\
  \midrule
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### 列間のスペースを調整する

通常LaTeXは各列の前後に適当なスペースを追加して、見た目を整えるとともに列の区切れ目を明確にします。このスペースの大きさは`\tabcolsep`で設定されています。各列の両側にスペースが追加されているということは、テーブルの両端には`\tabcolsep`分のスペースが、それ以外の列間には`2\tabcolsep`分のスペース（両側から`\tabcolsep`分ずつ）が入ることになります。このスペース幅は`\setlength`を使用することで任意の長さに変更できます。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  動物   & 食べ物 & 大きさ \\
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

こうした列間のスペースはプリアンブルトークン`@`を用いることで任意に変更することもできます。この方法を用いると、両端および列間のスペーシングが無効化され、代わりに`@`の引数に指定したものが追加されるようになります。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  動物   & 食べ物 & 大きさ \\
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

（`\hspace`については[レッスン11](lesson-11)で紹介します。これは指定した長さの水平スペースを挿入するためのコマンドです。）

プリアンブルトークン`!`も似たような機能を持ちます。`@`との違いは、このトークンは引数の内容を元々あったスペースに**追加する**ということです。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  動物   & 食べ物 & 大きさ \\
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### 垂直の罫線

垂直の罫線を追加することもできます。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  動物   & 食べ物 & 大きさ \\[2pt]
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

この`|`の挙動は`!{〈コマンド〉}`とよく似ています。`|`は元々のスペーシングを維持したまま垂直罫線を列の間に追加します。しかし、垂直罫線には`booktabs`が提供する水平罫線とは併用できないという大きな問題もあります。LaTeX標準が提供する水平罫線`\hline`（`\toprule`、`\midrule`、`\bottomrule`に相当）と`\cline`（`\cmidrule`のようなもの）とは併用することが可能です。上のコード例で示したように、垂直の罫線は行末の`\\`のオプション引数で指定する任意の長さに伸長します。

## `booktabs`の罫線をカスタマイズする

`booktabs`パッケージが提供するすべての罫線コマンドと`\addlinespace`はオプション引数をサポートしており、罫線の太さを指定することができます。さらに`\cmidrule`によるトリミングは指定子`l`や`r`の後ろにブレースで囲った長さを指定することで調整することが可能です。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  動物   & 食べ物 & 大きさ \\ \midrule[1pt]
  イヌ   & 肉     & 中     \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 数値の列アライメント

数値のアライメントは`siunitx`パッケージが提供するカラム指定子`S`に任せることもできます。

2つの数値カラムから成る単純な例を示します：

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{数値} &  {もっと数値} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

中身が数値でないセルはブレースによって「保護」される必要がある点に注意してください。

`siunitx`パッケージは数値をさまざまな方法で扱う手段を提供しています。詳細は[パッケージの説明文書](https://texdoc.org/pkg/siunitx)（英語）を参照してください。

## 表全体の幅を指定する

通常`tabular`環境の幅はその中身によって自動的に定まります。表全体の幅を特定の長さに指定したい場合、よく使われる方法が2つあります。

表の幅を指定する場合には基本的には以下のいずれかの方法を用いることが推奨されます（必要な場合は`\small`などでフォントサイズを変更するのは構いません）。`\resizebox`などのコマンドを用いて表を拡大・縮小するとフォントサイズや罫線の幅に一貫性がなくなるので、推奨されません。

### `tabular*`

`tabular*`環境は表全体の**幅**を指定するために追加の引数を1つ取ります。この環境を使用するときは、`\extracolsep`コマンドを用いて伸縮可能なスペースを必ず追加する必要があります。ここで指定したスペースは、テーブルプリアンブルのそれ以降のすべての列間に挿入されます。`\extracolsep`で指定されるスペースはほとんどの場合`\fill`です。これは必要な限りどこまでも長くなる特殊なスペースです。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

`tabularx`パッケージが提供する`tabularx`環境の書式は`tabular*`環境とよく似ていますが、カラム間スペースを調整する代わりに追加のカラムタイプ`X`の幅を調整します。これは`p{...}`による幅指定を自動化するのと同等です。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

ここまでに紹介した表組みを制御する他の手法と異なり、`tabularx`を用いた場合は最終的な幅の決定を行うまでに複数回のタイプセットが必要です。そのためこの環境にはいくつかの制約が存在します。詳細は[パッケージ文書](https://texdoc.org/pkg/tabularx)を参照してください。

## 複数ページにまたがる表

通常の`tabular`環境は改ページ不可能なボックスを作るので、必ず1ページに収まるサイズである必要があります。また`tabular`は多くの場合はフロート環境の1つである`table`環境に収められます。

`tabular`とよく似た書式のまま、改ページを許す表組み環境を提供するパッケージがいくつかあります。ここではそうしたパッケージの1つである`longtable`パッケージを紹介します。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{長いテーブル}\\
左側 & 右側 \\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Entry & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
ちょっと長い内容 & b\\  
\end{longtable}

\end{document}
```

`longtable`に特徴的なのは、すべてのページに渡って列の幅が保存されることです。一方で、この特徴を反映するためには、最終的な出力結果を得るために複数回のLaTeX実行が必要となる場合があります。これは後のページになって、以前のページの列幅を広げなければならないようなデータに遭遇する可能性があるためです。

## テーブルノート

表組みの中において、表の下にあるノートを参照するため脚注記号のようなものが欲しいときがあります。`threeparttable`パッケージを用いると、シンプルにこうした需要に応えることができます。このパッケージでは、大元の表と同じ幅のブロックにノートを作成します。詳細は[パッケージ文書](https://texdoc.org/pkg/threeparttable)にゆずることにしますが、ここでは単純なコード例を示します。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{何かしらの表}
   \begin{tabular}{ll}
    なにかの項目 & 42\tnote{1}\\
    別の項目 & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] これは最初のノートです。
   \item [2] 2つめのノートです。
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## 狭いカラムでの組版

デフォルトの改行設定は、改行位置を柔軟に選べるようにするため相対的に幅の広いスペースを前提にしています。下のコード例では、狭いカラムでの組版時に利用できるアプローチをいくつか示しています。

<p class="hint">ただし和文の場合は、ほとんどどこでも改行することができるので、実際にはあまり問題にならないかもしれません。</p>

1つ目の表では単語間スペースが伸びており、TeXがUnderfull lines警告を出しています。`\raggedright`コマンドを使用すると通常はこの問題を回避することができますが「ラギッド過ぎる」行ができてしまう場合もあります。`ragged2e`パッケージの`\RaggedRight`コマンドは妥協策です。3つ目の表が示すように、このコマンドを用いるとラグ組みを行いつつも必要な場合にはハイフネーションも行います。

この例では`\arraybackslash`が使用されていることに注意してください。このコマンドは`\\`の定義をリセットし、表の行を終わらせるコマンドに戻します。

さらに別の代替案は、4つ目の表で示したように、より小さいフォントを使用することです。こうすることで列の幅はテキストサイズに対して相対的にそこまで狭くなくなります。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
その一 & 狭いカラムに配置された長いテキスト。さらに例文を追加してみる。\\
その二 & 狭いカラムに配置されたもう1つの長いテキスト。さらにハイフネーションのテスト用の英文：A long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
その一 & 狭いカラムに配置された長いテキスト。さらに例文を追加してみる。\\
その二 & 狭いカラムに配置されたもう1つの長いテキスト。さらにハイフネーションのテスト用の英文：A long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
その一 & 狭いカラムに配置された長いテキスト。さらに例文を追加してみる。\\
その二 & 狭いカラムに配置されたもう1つの長いテキスト。さらにハイフネーションのテスト用の英文：A long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
その一 & 狭いカラムに配置された長いテキスト。さらに例文を追加してみる。\\
その二 & 狭いカラムに配置されたもう1つの長いテキスト。さらにハイフネーションのテスト用の英文：A long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\end{table}

\end{document}
```

## 新しい列タイプを定義する

[メインレッスン](lesson-08)で示したように`array`パッケージを用いるといくつかの指定子を組み合わせて、例えば`>{\bfseries}c`で「コンテンツをボールド体でセンタリングして表示する列」を作ることができます。こうした指定をまとめて新しい列タイプを作成すると便利な場合があります。

```latex
\newcolumntype{B}{>{\bfseries}c}
```
{: .noedit :}

上のように定義しておけば、テーブルプリアンブルに`B`を書くだけで同様のことが実現できるようになります。

## 垂直罫線

複数の列にまたがるセルを作る（セルの結合を行う）よりも、1つの列を用意してその中に`tabular`環境を入れ子にすることでセルを垂直に分割する方がよい場合があります。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  テスト & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  コンテンツ & を & ここに書く \\
  コンテンツ & を & ここに書く \\
  コンテンツ & を & ここに書く \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

垂直方向のアライメントは`tabular`環境のオプション引数で制御することができます。ここでは`t`（トップ）、`c`（中央）、`b`（ボトム）の3つの指定子を利用することができます：

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  テスト & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  コンテンツ & を & ここに書く \\
  コンテンツ & を & ここに書く \\
  コンテンツ & を & ここに書く \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 表の行間調整

メインレッスンでは`booktabs`パッケージの`\addlinespace`コマンドを利用すると特定の行と行の間にスペースを追加することができることを説明しました。

表中の行間をコントロールする一般的なパラメタは2つあります。`\arraystretch`と`\extrarowheight`です（後者は`array`パッケージが提供するものです）。

```latex
\renewcommand\arraystretch{1.5}
```
{: .noedit :}

のように再定義することで、ベースライン同士のスペースを50%増やすことができます。

`\hline`を使用する場合などでは、ベースラインより下の深さを変更することなく、行の高さだけを増加させた方がいい場合があります。そのような場合には`\extrarowheight`パラメタを使用します。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
平方 & $x^2$\\
\hline
立方 & $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
平方 & $x^2$\\
\hline
立方 & $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
