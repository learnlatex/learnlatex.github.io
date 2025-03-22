---
layout: "lesson"
lang: "ja"
title: "追加レッスン：エラーへの対処"
description: "この追加レッスンではLaTeXのよくあるエラーをもう少し紹介するとともに、連鎖するエラーやサイレントエラーについても説明します。"
toc-anchor-text: "追加レッスン：エラーへの対処"
---

## 環境の終わりで報告されるエラー

いくつかの環境（特に`amsmath`のアライメント環境や`tabularx`の表組み環境）は環境内の本文を、実際の処理を開始する前にすべて読み込みます。こうした環境では、その環境内で発生したエラーはすべてその環境の最後の行で報告されます。しかしメインレッスンで見てきたように、この場合でもTeXがエラー箇所として表示するのはエラーが発生したピンポイントな位置です。

```latex
% !TEX program=pdflatex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4}
\end{align}

\end{document}
```

この場合のエラーは12行目で報告されます。

```
l.12 \end{align}
```
{: .noedit :}

しかし、実際のエラー発生位置は下記のコードが現れる10行目です。

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}

## 先に発生したエラーによる不正確なエラー

LaTeXをコマンドラインで対話的に実行している場合には最初のエラーが起こった時点で`x`を押して処理を中断し、文書ソースを編集して再実行するということができます。しかしエラー箇所をスキップしたり、自動的にこうした指示を行うエディタやオンラインシステムを利用している場合には、TeXはどうにか正常に復帰しようとします。ところが、このことがかえって多くのエラー報告につながってしまうこともあります。

そのため発生したエラーの**数**はあまり気にせずに、報告された最初のエラーを修正することに注力しましょう。

```latex
% !TEX program=pdflatex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

上のコード例でのエラーは`\_`と入力すべきアンダーバーが`_`となっている箇所です。

TeXはこの問題を**最初の**エラーメッセージとして正しく報告します。

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

しかし、ここでもしプロンプトに`?`を入力してエラーをスキップすると、TeXは`$`を追加して`_`を数式モードの下付き文字として解釈します。この数式モードは終了の`$`が出てくるまで継続されるため、今度は続く`\alpha`がテキストモード内で出てくることになるため新たなエラーが発生します。

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}

## エラープロンプトを表示しないエラー

ファイルの末尾まで検出されることのないエラーなど、一部のエラーはエラープロンプトを表示させません。こうしたエラーはログファイルに警告だけを残します。

下記のコード例をTeXLive.netで実行すると、デフォルトではPDFが表示されます。ログの中にあるエラーメッセージを確認するためには、`%!TeX log`を追加する必要があります。

```latex
% !TEX program=pdflatex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

このコード例ではフォントサイズの変更が`}`ではなく`)`で終了してしまっています。このエラーは TeX がファイルの最後まで読み込んだ上で、まだ閉じていないグループがあることによって初めて検知されます。そのため、ファイルの最後に至ってはじめて`{`で開始されたグループが閉じられていないことが報告されます。残念ながら`)`は通常のテキストとして解釈されてしまうため、TeXはグループを終了すべきその位置を特定することはできません。

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}

<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5, false);
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>

