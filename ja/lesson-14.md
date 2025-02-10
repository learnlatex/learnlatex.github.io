---
layout: "lesson"
lang: "ja"
title: "フォントの選択とUnicodeエンジンの利用"
description: "このレッスンではLaTeXがどのようにUnicode入力を扱うのかということを解説し、その影響やフォント選択のしくみについて見ていきます。新しいLaTeXエンジンではUnicodeやOpenTypeがサポートされています。"
toc-anchor-text: "フォントとUnicodeエンジン"
toc-description: "フォントの選択とファイルエンコーディング"
---

# フォントの選択と Unicode エンジンの利用

<span class="summary">このレッスンではLaTeXがどのようにUnicode入力を扱うのかということを解説し、その影響やフォント選択のしくみについて見ていきます。新しいLaTeXエンジンではUnicodeやOpenTypeがサポートされています。</span>

TeXとLaTeXが広く使われるようになった頃は、いくらかギリシャ文字やロシア文字も扱うことができたとはい、基本的にそのままでは欧州言語しか扱うことができませんでした。

## アクセントとアクセント付き文字

当初はアクセント符号やアクセント文字はコマンドを使用して入力する必要がありました（例：‘ç’は`\c{c}`、‘é’は`\'e`）。こうした入力は簡単なので一部の人々は今でもこうした手段を使用し続けていますが、それ以外の人たちは彼らのキーボードにあるキーを利用して直接こうした文字を入力したいと望みました。

Unicodeが登場するまでは、LaTeXはさまざまな種類の**ファイル・エンコーディング**をサポートすることによって、多用な言語がネイティブに利用できるようにしていました。例えば`latin1`エンコーディングを利用すれば、フランス語ユーザも単に‘`déjà vu`’と書くだけで、LaTeXが内部的にアクセント付き文字をTeXのコマンドに変換してくれるため、期待する出力を得ることができます。

こうしたアプローチは現代のLaTeXでも`pdflatex`エンジンの場合には現役です。特に指定をしない場合、デフォルトではすべてのファイルはUnicode（UTF-8エンコーディング）として扱われます。このエンジンは8-bitフォントしか扱うことができないですが、ほとんどの欧州言語の場合は問題ありません。

## フォントの選択

`pdflatex`でフォント選択をする場合は、昔ながらのLaTeXのフォント選択機構を使用することになりますが、現在では標準的なディストリビューションに多くの「お膳立てされた」フォントが含まれています。例えば、TeX Gyre fontsは高品質なフォントの集合です。これには多くの人に馴染み深いTimes、Helvetica、Palatinoなどを基にしたフォントが含まれています。こうしたフォントを使用するのは簡単で、適切なパッケージを読み込むだけです。例えばTeX Gyreに含まれるTimes系のフォントTermesを利用するには次のようにします。

```latex
\usepackage{tgtermes}
```
{: .noedit :}

`pdflatex`ではほとんどの欧文フォントはパッケージを介して利用することになります。利用可能なフォントを確認するには[LaTeXフォントカタログ](https://www.tug.org/FontCatalogue/)や[CTANの‘Font’トピックページ](https://www.ctan.org/topic/font)を参照するといいでしょう。もちろんインターネットでフォントを検索して、`pdflatex`互換なバージョンを探してみるという手もあります。商用フォントを利用したいという場合も、適切なクローンがないか探してみてください。そうしたものもオリジナルのフォントとよく似ているので、ほとんどの状況では十分でしょう。

## Unicodeの時代

`pdflatex`ではファイルエンコーディングもフォントも8-bitに制限されてしまうので、モダンなOpenTypeフォントをネイティブに活用したり、異なる文字体系を用いる複数の言語を簡単に切り替えたすることはできません。Unicode入力とモダンなフォントをネイティブに扱うことができるpdfTeXの代替エンジンが2つあります。XeTeXとLuaTeXです。LaTeXの場合は、これらのエンジンは多くの場合、お使いのエディタで`xelatex`および`lualatex`を選択することで利用することができます。

これらのエンジンでは、フォント選択は`fontspec`パッケージによって行います。シンプルな例を挙げると次のようになります。

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

この指定によって、さきほど`pdflatex`の例で行ったのと同様に、TeX Gyre Termesフォントが選択されることになります。重要なことは、この方法が**任意の**OpenTypeフォントについて利用可能だということです。`pdflatex`で利用可能なフォントの一部は、`xelatex`や`lualatex`でも同じパッケージを用いて利用できるようになっています。あるいはお使いのコンピュータにインストールされている好きなフォントを上記の例で示したように`fontspec`で指定することもできます。先ほど紹介した[LaTeXフォントカタログ](https://www.tug.org/FontCatalogue/)にはOpenType形式の用意もあるフォントも紹介しているので、やはりこのカタログを参照してフォントを探すことができます。[CTANページ](https://www.ctan.org/topic/font)についても同様です。

フォントを選択したら、あとは単純にUnicodeで文書ソースを記述することができます。ここではラテン文字、ギリシャ文字に加えて、いくつかCJK表意文字を含む文書のコード例を示します。

```latex
% !TEX program=xelatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p class="hint">言語を変更する場合、一般にはハイフネーションなどの設定も合わせて変更する必要があります。<code>babel</code>パッケージや<code>polyglossia</code>パッケージを使用すると、多くの言語では簡単にこうした変更を実現することができます。</p>
