---
title: "ドキュメントへのアクセス方法とヘルプの求め方"
---

パッケージや文書クラスのドキュメントにアクセスする方法はいくつかあります．

## `texdoc`

TeX ディストリビューション（TeX Live や MiKTeX）をドキュメント込みでインストールしている場合，`texdoc` というコマンドラインツールを使用してローカルに保存されたドキュメントにアクセスすることができます．

```
texdoc 〈パッケージ名〉
```
{: .noedit :}

を実行すると `〈パッケージ名〉` に対応するドキュメントが開きます．このツールは利用可能なドキュメントを検索し，検索ワードに最も関連性が高いと判断したものを開きます．また次のようにすることで，見つかった利用可能なドキュメントを一覧表示させることもできます：

```
texdoc -l 〈パッケージ名〉
```
{: .noedit :}

## texdoc.net

`texdoc` コマンドと同様の機能を提供する[ウェブサイト](https://texdoc.net/)もあります．このサイトでは，ちょうど `texdoc -l` のようにドキュメントを検索して選択肢の中から好みのものを選んで閲覧することができます．

## CTAN

[CTAN](https://www.ctan.org) (Comprehensive TeX Archive Network) は TeX 関連の成果物を集積するネットワークです．ほとんどの LaTeX パッケージはここに登録されています．このサイトでパッケージを検索してドキュメントを閲覧することも可能です．一般にパッケージは `ctan.org/pkg/〈パッケージ名〉` という位置に保存されているので，そこにアクセスすると README をはじめ CTAN にアップロードされているドキュメントを見ることができます．

## LaTeX に関する書籍（英語）

LaTeX についてもっと詳しく学ぶのに役立つ本は数多く出版されています．LaTeX 初心者の場合は，初心者向けに構成された入門書を読むのがよいでしょう．そうした本には，このチュートリアルよりもさらに詳しい解説が載っているはずです．以下では，具体的に文献を紹介していきます．

LaTeX 開発チームは[書籍のリスト](https://www.latex-project.org/help/books/)を公開しています．このリストに載っている本の多くは，LaTeX チームのメンバーによって執筆されたものです．最も重要なものは 
[Lamport の公式ガイド](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)と網羅的な解説書である[『LaTeX コンパニオン』]((https://www.informit.com/store/latex-companion-9780201362992))です．

その他の LaTeX 学習本には次のようなものがあります：

* Helmut Kopka, Patrick Daly 著 [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714): 電子書籍
* Nicola Talbot 著 [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/): 無償の電子書籍，廉価の紙書籍
* Nicola Talbot 著 [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/): 無償の電子書籍，廉価の紙書籍
* Stefan Kottwitz 著 [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide): 電子書籍，紙書籍
* Marc van Dongen 著 [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154): 電子書籍，紙書籍

## ヘルプを求める

LaTeX に関する質問をすることができるオンラインフォーラムはたくさんあります．現在最も人気の高い QA サイトはおそらく以下の通りです．

* 英語圏：[TeX - LaTeX StackExchange](https://tex.stackexchange.com)
* 日本語圏：[TeX フォーラム](https://oku.edu.mie-u.ac.jp/tex/)

こうした場所で質問をする場合は常に，再現手順を明確にすることが最重要です．つまり，いわゆる最小再現コード例 (Minimal Working Example; MWE) を作ることが大事です．これは問題を自己解決する必要はありませんが（それができるなら質問しないですよね），できる限り明確で，自己完結していて，最小のコード例を作りましょう．言い換えると，問題を再現するのに最低限必要なもののみに絞り込むということです．

ではどうすれば MWE を作ることができるのでしょうか？ 基本的には，まず次のような文書を作成します．

How do you construct a MWE? Normally easiest is to start from

```latex
\documentclass{article}
\begin{document}
Text
\end{document}
```

そして，困っている問題が発生するまで一行ずつコードを追加していきます．もちろん実際に作成しているファイルから「切り落とす」ことで MWE を作成することもできますが，手順が長くなるかもしれません．

改ページやその他の影響を与えるために，より長いテキストが必要になる場合もあります．そのような場合は `lipsum` パッケージ（日本語のテキストが必要な場合は `bxjalipsum` パッケージ）を使用すると，無意味な段落を生成することができるのでテストファイルを簡潔に保つのに役立つでしょう．

またログファイルを見ることも重要です．これは LaTeX を実行する度に作成されるもので，作成している文書ソースのファイル名と同一の名前で拡張子 `.log` を持っています．デスクトップ環境によっては「拡張子を表示する」のようなオプションを使用しないとどのファイルかわからないかもしれません．
