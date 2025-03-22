---
layout: "lesson"
lang: "ja"
title: "ドキュメントへのアクセス方法とヘルプの求め方"
description: "このレッスンではLaTeX関連のソフトウェアやパッケージのドキュメントにアクセスする主要な方法を紹介します。さらに問題が発生した場合に、どのようにヘルプを求めればいいかも見ていきます。"
toc-anchor-text: "ドキュメントとヘルプ"
toc-description: "ドキュメントへのアクセス方法とヘルプの求め方"
---

# ドキュメントへのアクセス方法とヘルプの求め方

<span class="summary">このレッスンではLaTeX関連のソフトウェアやパッケージのドキュメントにアクセスする主要な方法を紹介します。さらに問題が発生した場合に、どのようにヘルプを求めればいいかも見ていきます。</span>

パッケージや文書クラスのドキュメントにアクセスする方法はいくつかあります。

## `texdoc`

TeXディストリビューション（TeX LiveやMiKTeX）をドキュメント込みでインストールしている場合、`texdoc`というコマンドラインツールを使用してローカルに保存されたドキュメントにアクセスすることができます。

```
texdoc 〈パッケージ名〉
```
{: .noedit :}

を実行すると`〈パッケージ名〉`に対応するドキュメントが開きます。このツールは利用可能なドキュメントを検索し、検索ワードに最も関連性が高いと判断したものを開きます。また次のようにすることで、見つかった利用可能なドキュメントを一覧表示させることもできます：

```
texdoc -l 〈パッケージ名〉
```
{: .noedit :}

## texdoc.org

`texdoc`コマンドと同様の機能を提供する[ウェブサイト](https://texdoc.org/)もあります。このサイトでは、ちょうど`texdoc -l`のようにドキュメントを検索して選択肢の中から好みのものを選んで閲覧することができます。

## CTAN

[CTAN](https://www.ctan.org)（Comprehensive TeX Archive Network）はTeX関連の成果物を集積するネットワークです。ほとんどのLaTeXパッケージはここに登録されています。このサイトでパッケージを検索してドキュメントを閲覧することも可能です。一般にパッケージは`ctan.org/pkg/〈パッケージ名〉`という位置に保存されているので、そこにアクセスするとREADMEをはじめCTANにアップロードされているドキュメントを見ることができます。

## LaTeXに関する書籍（英語）

LaTeXについてもっと詳しく学ぶのに役立つ本は数多く出版されています。LaTeX初心者の場合は、初心者向けに構成された入門書を読むのがよいでしょう。そうした本には、このチュートリアルよりもさらに詳しい解説が載っているはずです。以下では、具体的に文献を紹介していきます。

LaTeX 開発チームは[書籍のリスト](https://www.latex-project.org/help/books/)を公開しています。このリストに載っている本の多くはLaTeXチームのメンバーによって執筆されたものです。最も重要なものは 
[Lamportの公式ガイド](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)と網羅的な解説書である[『LaTeXコンパニオン』]((https://www.informit.com/store/latex-companion-9780201362992))です。

その他のLaTeX学習本には次のようなものがあります。

* Helmut Kopka、Patrick Daly著 [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714)：電子書籍
* Nicola Talbot著 [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/)：無償の電子書籍、廉価の紙書籍
* Nicola Talbot著 [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/)：無償の電子書籍、廉価の紙書籍
* Stefan Kottwitz著 [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)：電子書籍、紙書籍
* Marc van Dongen著 [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154)：電子書籍、紙書籍

## LaTeXに関する書籍（日本語）

日本語のLaTeX学習本には次のようなものがあります。

* 奥村晴彦、黒木祐介 著 [『LaTeX美文書作成入門』](https://gihyo.jp/book/2023/978-4-297-13889-9)：電子書籍、紙書籍
* 吉永徹美 著 [『独習LaTeX2e』](https://www.shoeisha.co.jp/book/detail/9784798115368)：紙書籍
* 水谷正大 著 [『LaTeX超入門 ゼロからはじめる理系の文書作成術』](https://bookclub.kodansha.co.jp/product?item=0000343850)：電子書籍、紙書籍
* 坂東慶太 著 [『インストールいらずのLaTeX入門 ― Overleafで手軽に文書作成』](http://www.tokyo-tosho.co.jp/books/978-4-489-02311-8/)：紙書籍

## ヘルプを求める

LaTeXに関する質問をすることができるオンラインフォーラムはたくさんあります。現在最も人気の高いQAサイトはおそらく以下の通りです。

* 英語圏：[TeX - LaTeX StackExchange](https://tex.stackexchange.com)
* 日本語圏：[TeXフォーラム](https://okumuralab.org/tex/)、[日本語版スタックオーバーフロー](https://ja.stackoverflow.com/questions/tagged/latex)

こうした場所で質問をする場合は常に、再現手順を明確にすることが最重要です。つまり、いわゆる最小再現コード例（Minimal Working Example；MWE）を作ることが大事です。これは問題を自己解決する必要はありませんが（それができるなら質問しないですよね）、できる限り明確で、自己完結していて、最小のコード例を作りましょう。言い換えると、問題を再現するのに最低限必要なもののみに絞り込むということです。

### MWEの作り方

ではどうすればMWEを作ることができるのでしょうか？ 基本的には、まず次のような文書を作成します。

```latex
\documentclass{article}
\begin{document}
Text
\end{document}
```
{: .noedit :}

そして、困っている問題が発生するまで一行ずつコードを追加していきます。もちろん実際に作成しているファイルから「切り落とす」ことで MWE を作成することもできますが、手順が長くなるかもしれません。

<p class="hint">改ページやその他の影響を与えるために、より長いテキストが必要になる場合もあります。そのような場合は<code>lipsum</code>パッケージ（日本語のテキストが必要な場合は<code>bxjalipsum</code>パッケージ）を使用すると、ダミーの段落を生成することができるのでテストファイルを簡潔に保つのに役立つでしょう。</p>

### ログファイル

またログファイルを見ることも重要です。これはLaTeXを実行する度に作成されるもので、作成している文書ソースのファイル名と同一の名前で拡張子`.log`を持っています。

<p class="hint">デスクトップ環境によっては「拡張子を表示する」のようなオプションを使用しないとどのファイルかわからないかもしれません。</p>

ログファイルの中には、常にフルのエラーメッセージが書かれています。LaTeXのエラーメッセージはなるべくわかりやすくなるようにと努力がなされていますが、一般のワープロのようにはいきません。

<p class="hint">エディタによってはエラーの「フル」テキストの閲覧を難しくするものもあります。そのような場合、重要な情報が隠されてしまっている可能性があります。</p>

何か問題が発生した場合、経験豊富なLaTeXユーザはしばしばログファイルを添付して欲しいとお願いをします。

## さらに学ぶ

これで本チュートリアルのメインレッスンは終わりです。[付録レッスン](./language-01)では日本語独自の話題などを取り上げていますので、興味のある方は確認してみてください。
