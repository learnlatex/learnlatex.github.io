---
layout: "lesson"
lang: "ja"
title: "日本語LaTeXとDVIウェア"
description: "このレッスンでは和文組版に適したLaTeXエンジンを紹介します。一部のLaTeXエンジンはPDFを直接生成するのではなく、DVIという中間形式を経由してPDFを作成します。DVIからPDFを作成するDVIウェアについても紹介します。"
toc-anchor-text: "日本語LaTeX"
toc-description: "日本語を扱えるLaTeXエンジン"
---

# 日本語LaTeXとDVIウェア

<span class="summary">このレッスンでは和文組版に適したLaTeXエンジンを紹介します。一部のLaTeXエンジンはPDFを直接生成するのではなく、DVIという中間形式を経由してPDFを作成します。DVIからPDFを作成するDVIウェアについても紹介します。</span>

オリジナルのLaTeXは海外（特に英語圏）で開発されたソフトウェアであるため、残念ながらそのままでは日本語を扱うことができません。しかしオリジナルのLaTeXを日本語用に拡張し、和文組版が可能なLaTeXエンジン（日本語LaTeX）がいくつも開発されてきました。代表的なものは以下の3つです。

* pLaTeX：最も古くから使われている日本語LaTeXで、よく普及している。出力形式はDVI。
* upLaTeX：pLaTeXをさらに拡張した日本語LaTeX。森鷗外の「鷗」などJISS X 0208の外の文字も容易に扱うことができる。出力形式はDVI。
* LuaLaTeX：比較的新しいLaTeXエンジン。欧米でも用いられるが、LuaTeX-jaというしくみを使うことで和文組版も可能。PDFを直接出力する。

pLaTeXとupLaTeXはまとめて「pLaTeX系」と呼ばれることがあります。これらのエンジンはPDFではなくDVIを出力するため、最終的なPDFを得るためにはdvipdfmxなどのDVIウェアを利用する必要があります。一方、LuaLaTeXは直接PDFを出力できるためDVIウェアを必要としません。

<p class="hint">欧文組版ではこの他にもpdfLaTeXやXeLaTeXがしばしば用いられますが、現在のところこれらのエンジンではきちんとした和文組版はできません。</p>

## DVIウェア

古くからあるLaTeXエンジンは、歴史的な事情によりPDFではなくDVIを出力します。DVIファイルは、dvioutなどを用いることにより直接表示することも可能ですが、今日ではPDFに変換して利用されることがほとんどでしょう。

DVIをPDFに変換する方法はいくつかありますが、ほとんどの日本語LaTeXの利用者はdvipdfmxを用いてPDFに変換しています。dvipdfmx以外のDVIウェアについては、本チュートリアルの範囲を超えるので扱いません。したがって、pLaTeXまたはupLaTeXを使用する場合は、これらが生成したDVIをdvipdfmxを用いてPDFに変換する、ということだけを覚えておいてください。なお、本チュートリアルのコード例をTeXLive.netで実行する場合、dvipdfmxは自動で実行されます（[ヘルプ](help)を参照）。

## pLaTeX

pLaTeXは最も古くから使われている日本語LaTeXで、歴史的によく普及しています。日本語版Learn LaTeXでは、コード例はデフォルトでpLaTeX + dvipdfmxで処理されるようになっています。

pLaTeXの使用時は、`\documentclass`より前に`\RequirePackage{plautopatch}`によってplautopatchを読み込むことで、各種の海外製LaTeXパッケージに対するpLaTeX用パッチが適用されます。また、dvipdfmxを用いてPDF化を行うので、クラスオプションに`dvipdfmx`を必ず指定します。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{iftex}
\begin{document}

これは\ifpTeX p\TeX \else p\TeX 以外\fi です。

\end{document}
```

pLaTeXはよく普及していますが、古くからあるソフトウェアであるため仕様が古い部分があります。たとえば、JIS X 0208規格に含まれないUnicode文字の取り扱いは不得手です。Unicode一般の文字を扱いやすくしたものが、次に紹介するupLaTeXです。

## upLaTeX

upLaTeXはpLaTeXを拡張したLaTeXエンジンで、内部Unicode化によってUnicode範囲内の文字をJIS X 0208内の文字と同様に扱えるようになっています。日本語版Learn LaTeXのコード例をupLaTeXで処理したい場合は、[設定](setting)を変更するか、マジックコメント`% !TEX program=uplatex`の記入が必要です。

upLaTeXを使用する場合も、plautopatchの読み込みが推奨されます。また、dvipdfmxを用いてPDF化を行うので、クラスオプションに`dvipdfmx`を必ず指定します。

```latex
% !TEX program=uplatex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{iftex}
\begin{document}

これは\ifupTeX up\TeX \else up\TeX 以外\fi です。

Unicode文字を簡単に出力できます。①森鷗外㋐内田百閒㈱鄧小平。

\end{document}
```

## LuaLaTeX

LuaLaTeXは比較的新しいLaTeXエンジンで、Luaというプログラミング言語によってTeXの内部処理の拡張を行えるようになっています。このしくみを利用するLuaTeX-jaによって、しっかりした日本語組版を行うことが可能です。fontspecパッケージにより、簡単にフォント指定を行える点も魅力です（[レッスン14](lesson-14)を参照）。今後、さらに普及していくことが予想されています。

欠点は従来の日本語LaTeX（pLaTeX系）と比べると動作が遅い点です。Overleafの無料アカウントで、ある程度以上の規模の文書をLuaLaTeXで処理するとタイムアウトしてしまう場合があるようです。

```latex
% !TEX program=lualatex
\documentclass{jlreq}
\usepackage{iftex}

\begin{document}

これは\ifluatex Lua\TeX \else Lua\TeX 以外\fi です。

\end{document}
```

なおjlreq文書クラスはpLaTeX, upLaTeX, LuaLaTeXのすべてに対応しており、特にLuaLaTeXで使用する場合はLuaTeX-jaを自動的に読み込みます。jlreq以外の文書クラスを採用する場合、基本的にはLuaLaTeXの使用時は専用の文書クラスを用いる必要があります。詳しくは[次の付録レッスン](language-02)を参照してください。
