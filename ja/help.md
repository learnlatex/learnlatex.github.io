---
lang: "ja"
title: "このウェブサイトの使い方"
description: "このページではLearn LaTeX自体の使い方を説明します。"
permalink: /ja/help
---

# ヘルプ

## ナビゲーション

16個のメインレッスンへは[トップページ](./)の[目次]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }})からジャンプすることができます。

各レッスンページには、メインレッスンと同じトピックでより深い内容を扱う**追加レッスン**へのリンクがあります。もっとも、このチュートリアルはこれらの追加レッスンを読まずとも問題なく最後までいくことができるようになっています。

メインレッスンの後ろには、いくつか各言語の独自レッスン（例えば、日本語版であれば日本語組版に特化したレッスン）があります。そして、一番最後にこのチュートリアルで扱うことのできなかった様々なLaTeXパッケージの使用例を示す特別なレッスンが用意されています。

---

## コード例 

### コード例の実行方法

各コード例は、小さいながらも完全なLaTeX文書になっていて、次のような見た目をしています：

```latex
\documentclass[dvipdfmx]{jlreq}

\begin{document}
これはサンプル文書です。
\end{document}
```

各コード例は、そのままでも処理することのできる完全なLaTeX文書になっています。しかし、例えば各レッスンの末尾にある練習問題を解くために、コード例を少し編集したいと思うことがあるかもしれません。そのような場合のために、コード例は[ACEエディタ](https://ace.c9.io/)によって編集できるようになっています。

ACEエディタのテーマは[設定](settings)ページでカスタマイズできます（例えばダークテーマを使用すると、暗い背景に明るいテキストが表示されるようになります）。サイト内のコード例の中で、キーボードショートカット<kbd>Ctrl</kbd>+<kbd>,</kbd>（Macでは<kbd>⌘</kbd>+<kbd>,</kbd>）を使用するとACEエディタ設定を変更するためのパネルが現れるので、簡単にさまざまなテーマを試すことができます。

ACEのリポジトリには[多くの便利なキーボードショートカットを紹介するページ](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts)があります。

#### コード例を実行する3つの方法

* Overleafを利用する
* TeXLive.netを利用する
* 手許のPCにインストールしたTeXシステムを使用する

##### Overleafを利用する

Overleafは世界的に最も人気のあるオンラインLaTeXサービスの1つです。各コード例の下にある<button>Open in Overleaf</button>を押すと、そのコードが[Overleaf](https://www.overleaf.com/about)に送られます。

もしあなたがOverleafのアカウントを持っていなかったり、ログイン情報がブラウザにキャッシュされていなかったりする場合は、Overleafのログインページにリダイレクトされます。そのページでログインや新規のアカウント登録を行うことができます。Overleafは無料サービスですが、いくつかユーザ登録に必要な情報を入力したり、利用規約に同意したりする必要があります。

既にOverleafアカウントの情報がブラウザにキャッシュされている場合は、Overleafで新しいタブが開かれて新しいプロジェクト内に送信したコードが保存された状態になります。よってOverleaf上でコードを編集し、同時にそのコードを実際にLaTeXで処理した出力やエラーログを閲覧することができるようになります。

なお、Overleafはデフォルト設定は和文文書の処理（pLaTeX）に対応していないため、和文のサンプルを試すには**少し設定が必要**です[^overleaf_platex]。まず、左上の「Menu」をクリックして「Compiler」をデフォルトの「pdfLaTeX」から「LaTeX」に変更します。次に、「Menu」直下の書類アイコン（New file）をクリックして`latexmkrc`という名前のファイルを作成し、次の内容を書き込みます。

```
$latex = 'platex';
$bibtex = 'pbibtex';
$dvipdf = 'dvipdfmx %O -o %D %S';
```
{: .noedit :}

これで、OverleafでもpLaTeXを用いて和文文書が処理できるようになります。

次に説明するTeXLive.netで処理した文書とは異なり、Overleafではプロジェクトをあなたのアカウントに紐付けて保存することができ、後から再度開くことが可能です。

##### TeXLive.netを利用する

同じく各コード例の下の<button>TeXLive.netで実行</button>ボタンを押すと、そのコードは[LaTeX CGI](https://latexcgi.xyz/)サービス[^latex_cgi]に送信されます。

このLaTeX CGIサービスはこのチュートリアルを支援するために開発されたもので、[PDF.js](https://mozilla.github.io/pdf.js/)を利用することで専用のPDFビューアがなくてもモバイルを含むブラウザ上でそのままPDFを表示できるという特徴があります。

PDF出力（あるいはエラーログの抜粋）がコード例の直下に表示されます。こうした出力は<button>出力を削除</button>ボタンを押すことで消し去ることができます（もちろん出力を消さずに放置して先へ進むことも可能です）。

**TeXLive.net**の利用にはログインもユーザ登録も一切必要ありません。そのため小さなコード例の実行には大変便利ですが、このサイトにはコードを保存する機能は備わっていないので注意してください。コード例に対して行ったすべての変更はページを離れた時点で失われてしまいます。

##### 手許のPCにインストールしたTeXシステムを使用する

もし手許のPCにTeXシステムがインストールされているようであれば、もちろんコード例をページからコピーして使用することができます（明示的に範囲選択をしてもいいですし、エディタのキーボードショートカットで全選択する（Windowsでは<kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd>とします）のでも構いません）。それによってコード例はあなたのOSのクリップボードにコピーされるので、新しいドキュメントを適当なエディタで作成し、その内容をペーストすることができます。
   
### トラブルシューティング

このチュートリアルのコード例はいずれも最新のLaTeXを前提として作られています。すべてのコード例は、私たちが利用している2つのオンラインサービス（OverleafとTeXLive.net）で動作することが確認されています。そのため、もしローカルなTeXシステムでチュートリアルのコード例が動かないという場合は、TeXシステムが最新のものになっているかどうか確認してください。

---

## TeXエンジンを選択する

コード例を送信した際、デフォルトでは`platex`エンジンが使用されます（日本語版以外では原則`pdflatex`）。

しかし、明示的に`latex`, `pdflatex`, `xelatex`, `lualatex`, `platex`, `uplatex`のうちどれを使用するかを指定することも可能です。これには次のような書式を使用します：

`% !TEX ` 〈任意のテキスト〉 `lualatex`

この書式において、最初の空白は省略することができるほか、大文字・小文字の違いは無視されます。最初と最後のみが重要で〈任意テキスト〉の部分も無視されます。

このしくみにより`% !TEX program=pdflatex`といういくつかのTeXエディタでサポートされている記法が許容されるようになっています。ただし`program=`の部分は、現状ではオンラインシステムで利用可能なエンジンのうちの1つを選択するのにしか利用されないため省略可能になっています。

<!-- TODO: 日本語版独自の説明 -->

なお`platex`や`uplatex`が選択された場合には`devipdfmx`コマンドが自動的に呼び出され、これらのエンジンが出力するDVIファイルはPDFに変換されるようになっています。同様に`latex`が選択されている場合には`dvips`と`ps2pdf`が使用されます。

---

## 出力の表示方法を選択する

TeXLive.netを使用した場合、コード例を実行したことによるPDF出力はデフォルトで[PDF.js](https://mozilla.github.io/pdf.js/)により表示されます。これにより、さまざまな種類のブラウザで同じ挙動を得ることができます。

もしブラウザのデフォルトPDFリーダ（ブラウザ内蔵のものでも、設定した外部アプリケーションでも）を使用したいという場合には、次のコメント記法を用います：

`% !TEX ` 〈任意のテキスト〉 `pdf`

デフォルトの挙動は、末尾の値を`pdfjs`とすることで明示的に指定することもできます。デバッグ目的ではエラーなしにPDFが得られる場合でもログファイルの内容を見たいという場合があるかもしれません。そのような場合は末尾の値を`log`としてください。

As an alternative to using a `% !TeX` comment, you may specify the
site default return parameter on the [Site Settings](settings)
page. The Settings are specific to each browser, so for example you
may choose to use the default `pdfjs` setting on your mobile device,
but use `pdf` on your desktop browser to use its default PDF rendering.

---

## HTML output (make4ht, LaTeXML, lwarp)

If using the TeXLive.net system, then additional return options,
`make4ht`, `LaTeXML` or `lwarp` may be specified. These return one or more HTML pages
in the frame within the page. It may be specified at the same time
as `xelatex` or `lualatex` as well as the default `pdflatex` processing.

To enable this output, add a comment of the form:

```
% !TeX make4ht
```
{: .noedit :}

Replacing `make4ht` by `LaTeXML` or `lwarp` to specify those systems.

Alternatively you may specify `make4ht`, `LaTeXML` or `lwarp` as the default return option
on the [Site Settings](settings) page.

If using a locally installed TeX system, the same output as the `make4ht` option may be obtained
by executing

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

with the addional option `-x` or `-l` if XeLaTeX or LuaLaTeX are specified.

When running locally, other configurations would be possible. See the [make4ht
manual](https://texdoc.org/pkg/make4ht).

For `LaTeXML` to run locally, you would need to install LaTeXML (it is not part of TeX Live or MiKTeX)
and use

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Many other LaTeXML configurations are possible,
[as described in the manual](https://dlmf.nist.gov/LaTeXML/manual/).

The `lwarp` configuration is not documented here, it is somewhat experimental and subject to change.
The current version can be seen at the
[source repository](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).

---

<!-- TODO: 以下はそのうち消す -->

Each example consists of a complete small LaTeX document shown within
the page like this:

## Japanese

Japanese examples look like:

```latex
% !TEX platex
\documentclass{jsarticle}
\begin{document}
テキストの例。
\end{document}
```

See also the examples in [The Japanese specific section of the site](language-01)

## English

English example:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Example text.
\end{document}
```

<!-- TODO: ここまで -->

---

[^overleaf_platex]: Overleaf上でpLaTeXを使用する方法については、必要に応じて[公式のヘルプページ](https://ja.overleaf.com/learn/latex/Questions/Does_Overleaf_support_pTeX%3F)も確認してください。

[^latex_cgi]: このチュートリアルの開発段階では[LaTeX.Online](https://latexonline.cc/)や[LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)も使用されていました。本チュートリアル企画の初期段階から協力的に開発に取り組んでくれた、これらのサービスの開発者に感謝いたします。
