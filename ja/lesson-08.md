---
layout: "lesson"
lang: "ja"
title: "表組み"
description: "このレッスンではLaTeXで表組みを行う方法を説明します。セルのアライメントを変更したり、表に罫線を追加したり、セルを結合したりする方法も見ていきます。"
toc-anchor-text: "LaTeXの表組み"
toc-description: "表組みを扱う基本"
---

# 表組み

<span class="summary">このレッスンではLaTeXで表組みを行う方法を説明します。セルのアライメントを変更したり、表に罫線を追加したり、セルを結合したりする方法も見ていきます。</span>

LaTeXで表組みを行うには`tabular`環境を使用します。このレッスンではLaTeXの表組み機能を拡張する`array`パッケージの使用を前提とします（このパッケージの機能がLaTeX本体に実装されていないのは単に歴史的経緯によります）。したがって、とにもかくにも以下をプリアンブルに書いておきましょう：

```latex
\usepackage{array}
```
{: .noedit :}

表組みを行うためには、予めLaTeXに何列の表を作成するのか、またどのように中身をアライメント（配置）するのかについて指示しておく必要があります。こうした指示は、`tabular`環境の必須引数（しばしば「表プリアンブル」と呼ばれます）において行います。各列の体裁に関する指定は、この環境の引数に「プリアンブルトークン」と呼ばれる1文字の指定子を並べることで行います。利用可能な列指定子は次の通りです：

<!-- don't line wrap this table, markdown seems to not support this -->

| 指定子     | 説明 |
| ---        |:-- |
| `l`        | 左寄せの列 |
| `c`        | 中央寄せの列 |
| `r`        | 右寄せの列 |
| `p{〈行長〉}` | 幅を`〈行長〉`に固定した列。テキストは自動的に改行され、ジャスティフィケーションされる |
| `m{〈行長〉}` | `p`の変種。水平方向に中央寄せ |
| `b{〈行長〉}` | `p`の変種。水平方向に下部寄せ |
| `w{〈配置〉}{〈行長〉}` | 列の中身を幅`width`の中に配置。収まり切らない場合は自動的に延長。水平方向の配置を`l`、`c`、`r`から選べる |
| `W{〈配置〉}{〈行長〉}` | `w`の変種。ただし、収まりきらない場合は警告を出す |

さらに、少しですが列を作成しないプリアンブルトークンもあり、これらもやはり有益です。

<!-- don't line wrap this table, markdown seems to not support this -->

| 指定子 | 説明 |
| ---  | :-- |
| `*{〈回数〉}{〈文字列〉}` | `〈文字列〉`を`〈回数〉`回繰り返す。同じ構造の複数列を繰り返すのに使う |
| `>{〈宣言〉}` | 各セルの先頭に`〈宣言〉`を置く。例えばある列にだけ他とは異なるフォントを使用したい場合などに便利 |
| `<{〈宣言〉}` | 各セルの末尾に`〈宣言〉`を置く |
| <span>`|`</span>  | 垂直の罫線を引く |
| `@{〈宣言〉}` | 列間に配置するスペースを`〈宣言〉`の内容に変更 |
| `!{〈宣言〉}` | 列間のスペースの中央に`〈宣言〉`の内容を配置 |

上の2つの表に記載のもので、LaTeX本体および`array`パッケージが提供するプリアンブルトークンはすべてです。[追加レッスン](more-08)では、他のパッケージが提供するもういくつかの拡張プリアンブルトークンを紹介しています。

`l`、`c`、`r` のいずれかが指定された列は、その列の中で最も長いセルに合わせた自然な長さになります。各列はそれぞれ宣言される必要があるので、例えば中央揃えの列が3つ欲しいときは表プリアンブルに`ccc`と指定する必要があります。スペースは無視されるので`c c c`でも同じことです。

表本体は、各列をアンパサンド`&`で区切り、新しい行を`\\`を用いて開始します。

ここで表の具体例を見てみましょう。以下のコード例では、`&`と`\\`の位置で整列されています。このような位置合わせは必須ではありませんが、その方がソースコードを見やすく保つのに役立ちます。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

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

表の中に長いテキストを含むとき`l`、`c`、`r`が指定された列では問題が起こる場合があります。例えば、次の例をタイプセットしたときに何が起こるか確認してみましょう：

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  動物 & 説明 \\
  イヌ & イヌは食肉目イヌ科イヌ属の一種で、最もよく見られる肉食動物である。 \\
  ネコ & ネコは肉食で小型の家畜哺乳類である。ネコ科では唯一家畜化された種であり、
         同じネコ科に属する他の野生種と区別するためにしばしばイエネコとも呼ばれる。 \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

問題というのは、`l`タイプの列ではその中身をどんなときも自然長で1行に入れてしまい、ページの終端が来てもお構いなしに組版されてしまうということです。この問題に対処するには`p`指定子を使用します。この指定を行った列では、中身が段落として引数に指定した長さの範囲に組版されます。この際、各行は垂直方向に対しては上側に揃えられます（ほとんどのケースでは、この設定が一番妥当でしょう）。問題を改善した下記のサンプルを先の出力と比較してみましょう：

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  動物 & 説明 \\
  イヌ & イヌは食肉目イヌ科イヌ属の一種で、最もよく見られる肉食動物である。 \\
  ネコ & ネコは肉食で小型の家畜哺乳類である。ネコ科では唯一家畜化された種であり、
         同じネコ科に属する他の野生種と区別するためにしばしばイエネコとも呼ばれる。 \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

もし同じタイプの列を多数持つ表が必要になった場合、同じ指定子を何度も表プリアンブルに並べるのは大変なので、そういった場合は`*{〈回数〉}{〈文字列〉}`を使うと簡単です。この指定では`〈文字列〉`が`〈回数〉`回繰り返されます。つまり、例えば`*{6}{c}`は`cccccc`と同じです。このレッスンで最初に例として出した表を、この新しい書式で書き直してみましょう：

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  動物   & 食べ物 & 大きさ \\
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 罫線を引く

罫線の引き方を説明する前に、少しアドバイスをしておきます。表の罫線はなるべく少なく抑えるべきで、特に垂直方向の罫線を引くと、多くの場合素人らしくなってしまいます。実際、プロの作成する表には罫線は一切引くべきではありません（訳注：和文主体の文書では罫線はそこまで嫌われていません）。罫線の代わりに、`booktabs`パッケージのもつ機能を活用するべきです。というわけで、ここではまず`booktabs`パッケージの解説をします。LaTeX標準の罫線の引き方については[追加レッスン](more-08)で扱います。

`booktabs`パッケージは4種類の罫線を提供します。これらのコマンドは各行の冒頭、もしくは直前の罫線の直後で使用する必要があります。まず単純なものは`\toprule`、`\midrule`、`\bottomrule`の3つです。これらは、コマンド名からしてどこで使うべきものか明らかですね：

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物   & 食べ物 & 大きさ \\
  \midrule
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`booktabs`パッケージが提供する4つ目のコマンドは`\cmidrule`です。このコマンドは表の全長ではなく、指定した列の幅分だけの罫線を引くときに使用します。罫線を引く部分は数値の範囲で`{〈数値〉-〈数値〉}`という形で指定します。なおただ1つの列だけに罫線を引きたい場合も範囲として指定を行います（両端に同じ数値を記入します）。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物   & 食べ物 & 大きさ \\
  \midrule
  イヌ   & 肉     & 中     \\
  \cmidrule{1-2}
  ウマ   & 干し草 & 大     \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  カエル & 虫     & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\cmidrule`には他にも便利な機能があります。丸括弧で囲うオプション引数を用いると、左右いずれかまたは両方の端を短くすることができます。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物   & 食べ物 & 大きさ \\
  \midrule
  イヌ   & 肉     & 中     \\
  \cmidrule{1-2}
  ウマ   & 干し草 & 大     \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  カエル & 虫     & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

もちろん、このオプション引数内で用いる`r`と`l`はそれぞれ右（**r**ight）と左（**l**eft）を表しています。

区切りとして罫線を入れるほどではないものの、意味的な区切りを明確にするために少し間隔を空けたい場合もあります。そのようなときは`\addlinespace`を使用します。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass{jsarticle}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  動物 & 説明 \\
  \midrule
  イヌ & イヌは食肉目イヌ科イヌ属の一種で、最もよく見られる肉食動物である。 \\
  \addlinespace
  ネコ & ネコは肉食で小型の家畜哺乳類である。ネコ科では唯一家畜化された種であり、
         同じネコ科に属する他の野生種と区別するためにしばしばイエネコとも呼ばれる。 \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## セルの結合

LaTeXでは水平方向のセル結合には`\multicolumn`を使用します。このコマンドは必ず各セルの冒頭で使います。必須引数は3つあります。

1. 結合すべきセルの数
2. 結合したセルのアライメント
3. 結合したセルの中身

2つ目の引数（アライメント）には`tabular`のプリアンブルに書くことのできる任意の指定子を記入できますが、**必ず1つだけ**指定するようにしてください。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  動物   & 食べ物 & 大きさ \\
  \midrule
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
  カッパ & \multicolumn{2}{c}{不詳} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\multicolumn`は、特定のセルについて表プリアンブルで行った指定を適用しないようにするのに用いることもできます。次の例では、この手法を用いて表のヘッダー部分だけ中央揃えにしています。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{動物} & \multicolumn{1}{c}{食べ物} & \multicolumn{1}{c}{大きさ} \\
  \midrule
  イヌ   & 肉     & 中     \\
  ウマ   & 干し草 & 大     \\
  カエル & 虫     & 小     \\
  カッパ & \multicolumn{2}{c}{不詳} \\
  \bottomrule
\end{tabular}
\end{document}

```
<!-- {% endraw %} -->

LaTeXでは垂直方向のセル結合はサポートされていません。通常、複数行にまたがるセルを作成しなくても、単にセルを空の状態にしておくだけで読者に意図が伝わるはずです。

<!-- {% raw %} -->
```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  グループ & 動物     & 大きさ \\
  \midrule
  草食動物 & ウマ     & 大     \\
           & シカ     & 中     \\
           & ウサギ   & 小     \\
  \addlinespace
  肉食動物 & イヌ     & 中     \\
           & ネコ     & 小     \\
           & ライオン & 大     \\
  \addlinespace
  雑食動物 & カラス   & 小     \\
           & クマ     & 大     \\
           & ブタ     & 中     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 練習問題

表組みについて実験を始めるために、シンプルな表を使いましょう。指定子`l`、`c`、`r`を用いて、アライメントを変更してみてください。セルが足りない行があるとどうなりますか？ 逆に多すぎる場合はどうでしょう？ また`\multicolumn`コマンドを使ってセルの結合を試してみましょう。
