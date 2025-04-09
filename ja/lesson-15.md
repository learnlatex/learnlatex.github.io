---
layout: "lesson"
lang: "ja"
title: "エラーへの対処"
description: "このレッスンではLaTeXによる文書作成でよくあるエラーを紹介します。各エラーがどのような意味で、どうすれば改善できるのかを示します。"
toc-anchor-text: "エラーへの対処"
toc-description: "期待通りの挙動でないときは"
---

# エラーへの対処

<span class="summary">このレッスンではLaTeXによる文書作成でよくあるエラーを紹介します。各エラーがどのような意味で、どうすれば改善できるのかを示します。</span>

典型的なワープロソフトと異なり、LaTeXには編集・実行・確認のサイクルがあり、プログラミング言語のコンパイラを使った作業に似ています。そして、プログラミングの場合と同様に、入力の中に間違いが含まれていて、システムが報告するエラーメッセージを解読しなければならない場合があります。

## よくあるエラー

ここからいくつかの一般的なエラーを紹介していきます。各エラー例ではエラーメッセージの見た目に関することについても解説します。

実際にエラーとなるコード例を試してみるだけでも勉強になるかと思いますが、さらに編集機能を利用して問題箇所を修正し、ご自身の手でエラーを解決できるか試してみるといいでしょう。

### pdflatexコマンドが見つからない

これはLaTeX初心者が陥りやすい典型的なエラーです。Windowsの場合、次のようなメッセージが現れます：

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

Linuxなどの場合は次のようなメッセージが見られるでしょう：

```
bash: pdflatex: command not found
```
{: .noedit :}

これらは厳密にはTeXのエラーではなく、TeXがインストールされていない（あるいは見つからない）というオペレーティングシステムのエラーです。よくある間違いは、TeXworksやTeXShopなどの**エディタ**だけをインストールしていて、TeX LiveやMiKTeXといったTeXシステムをインストールしていないというものです。

### TeXエラーメッセージの解剖学

```latex
\documentclass[dvipdfmx]{jlreq}

\newcommand\mycommand{\textbold{むむむ}}

\begin{document}

コマンドを使ってみます：\mycommand

\end{document}
```

上記のコード例は複数行のメッセージをログファイルに吐き出します。

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {むむむ}
l.7 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* `!`から始まる1行目は、エラーの一般的な性質を述べています（この例では未定義のコマンドがあると言っています）
* 続く2行はTeXが処理していたソース箇所を示しています。ここで改行位置は TeX が到達した地点を表しています。つまり改行位置直前の`\textbold`こそが未定義のコマンドであるということがわかります。改行後の`{むむむ}`は、本来コマンドの引数として読まれるべきだったものですが、まだTeXによって処理されていません。
* この後にさらにエラーが発生した文脈について追加の説明が表示される場合もあります。
* `l.〈行番号〉`から始まる行はソースファイルにおいてエラーが特定された位置を示しています。

* 最後の行は単体の`?`です。TeXを対話的に使用している場合はここでTeXへの指示を入力することができるのですが、ほとんどのエディタやオンラインシステムはTeXを対話的に実行するのではなく、エラーがあってもTeXを停止させることなく一旦は文書全体を処理させようと試みます。その上で、改めてエラー発生箇所のメッセージを表示させている場合が多いです。もしTeXを対話的に実行している場合は`s`と入力することにより、TeXにひとまず最後まで文書を処理するように指示することができます。

ここで注目すべき点は、TeXはコマンドを定義したところでエラーを起こしているわけではないことです。実際、`\mycommand`を定義しても、そのコマンドを使用しなかった場合、エラーは発生しません。この例ではエラーが8行目にあると報告されているにも関わらず、「本当の」エラーは4行目のコマンド定義の中にあります。したがって、エラーメッセージ全体を視ることが重要です。

エディタによってはエラーログの「概要」のみを表示するものもあります。このようなエディタでは、場合によっては次のようにミスリーディングな表示になってしまう場合があります：

```
line 8: undefined command: ...\mycommand
```
{: .noedit :}

これではあたかも`\mycommand`が未定義であるかのように読めますが、実際のエラーはそうではありません。

### アンバランスなブレース

```latex
% !TEX program=pdflatex
\documentclass{article}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

上記のコード例ではアンバランスな`}`がオプション引数の終端で使用されています。この閉じブレースはLaTeXのオプション処理を失敗させるため、あまり役に立たない内部エラーを見ることになります：

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

エラーの説明は役に立ちませんが、続く2行がエラー箇所を正確に示しています。改行位置はTeXがどこまで読むことができたかを示しています：

```
l.3 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}

### ファイルが見つからない

```latex
% !TEX program=pdflatex
\documentclass{article}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

このコード例は、次のエラーを引き起こします。

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

このエラーの原因は2通り考えられます。1つは、ここでの例がそうであるように、単純にタイポがある場合です。これはパッケージ名を正しく直すことによって解決するはずです。もう1つの可能性は、本当に目的のファイルが存在しておらず、システムにインストールが必要な場合です。

### ディスプレイ数式内での空行

```
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}

\begin{document}

何らかのテキスト
\begin{equation}

  1=2

\end{equation}

\end{document}
```

上記の例は、ちょっと意味不明なエラーを生じさせます：

```
! Missing $ inserted.
```
{: .noedit :}

しかしながら、これを直すのは簡単です。ディスプレイ数式環境には空行を含めることはできないので、空行を削除してしまいましょう。

## 練習問題

このレッスンに出てきたエラーを直してみましょう。

ここに出てこなかったエラーが発生するような小さな文書を作成し、エラーメッセージを確認してみましょう。

<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',3);
  rlselectline('pre5',4);
  rlselectline('pre8',4);
  rlselectline('pre10',8);
  }, false);
</script>
