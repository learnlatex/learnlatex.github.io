---
layout: "lesson"
lang: "ja"
title: "和文用文書クラスと縦書き"
description: "このレッスンでは和文の組版に対応する代表的な文書クラスを紹介します。一部の文書クラスは縦書きにも対応しています。"
toc-anchor-text: "和文用文書クラス"
toc-description: "和文組版に適した文書クラス"
---

<!-- Note: extra-01の日本語版を用意するか検討。設定に`next: "extra-01"`の追記が必要 -->

論文や書籍の執筆を行う際には、しばしば学会や出版社によって独自の文書クラスが用意されています。基本的には、それらの専用文書クラスを利用することで、各ユーザが自前でレイアウト設定を行わずとも、各媒体が指定する適切なレイアウトで文書を作成することができます。

ここでは、何らかの事情でそうした専用文書クラスが利用できない場合に使用できる、汎用的な和文用文書クラスを紹介します。

## jlreq

jlreqは汎用の和文組版用文書クラスで、pLaTeX、upLaTeX、LuaLaTeXのすべてに対応しています（jlreqはこれらのエンジンを自動判定できます）。また、縦書き文書の作成も可能です。本チュートリアルの日本語コード例では、基本的にこの文書クラスを採用しています。

jlreqという名前はWord Wide Webコンソーシアム（W3C）が策定する[「日本語組版処理の要件（JLREQ）」](https://www.w3.org/TR/jlreq/)に由来しており、実際この文書クラスはJLREQに準拠することを目指して開発されています。比較的新しい文書クラスで、簡単にレイアウトのカスタマイズが行えるよう多数のクラスオプションや設定用コマンドが備えられています（詳しくは[jlreqのパッケージ文書](http://mirrors.ctan.org/macros/jptex/latex/jlreq/jlreq-ja.pdf)を参照してください）。

例えば、縦書き文書を作成するにはクラスオプション`tate`を指定します。

```
\RequirePackage{plautopatch}
\documentclass[dvipdfmx,tate]{jlreq}
\begin{document}

これはjlreq文書クラスによる縦書きの例です。

\end{document}
```

## jsclassesとその派生

jsclassesは[レッスン5](lesson-05)で紹介した欧文用の基本文書クラスarticle, report, bookの日本語版で、pLaTeXとupLaTeXに対応しています。縦書きには対応していません。

* `jsarticle`: 章のない短めの和文文書
* `jsreport`: 章のある長めの和文文書、片面印刷
* `jsbook`: 章のある長めの和文文書、両面印刷、前付け・後付けあり（たとえば索引）

jsclassesでフォントサイズを指定する場合は、欧文用のものと同様クラスオプションで`12pt`, `13pt`, `14pt`等と指定します。また`twocolumns`オプションにも対応しています。

```
\RequirePackage{plautopatch}
\documentclass[dvipdfmx,14pt,twocolumn]{jsarticle}
\usepackage{bxjalipsum}
\begin{document}

\jalipsum[1-5]{wagahai}

\end{document}
```

ちなみにjsclassesの“js”は**J**apanese **S**tandardに由来します。

### ltjsclasses

jsclassesのLuaLaTeX対応版です。`ltjsarticle`, `ltjsreport`, `ltjsbook`がそれぞれ`jsarticle`, `jsreport`, `jsbook`に対応しています。

```
% !TEX program=lualatex
\documentclass[14pt,twocolumn]{ltjsarticle}
\usepackage{bxjalipsum}
\begin{document}

\jalipsum[1-5]{wagahai}

\end{document}
```

LuaLaTeXの場合はplautopatchの読み込みと、クラスオプション`dvipdfmx`の指定が不要である点に注意してください。

### bxjsclasses

jsclassesの拡張版にあたり、pLaTeX、upLaTeX、pdfLaTeX、XeLaTeX、LuaLaTeXに対応しています。ただし、pdfLaTeXやXeLaTeXについては「可能な限りpLaTeX系におけるjsclassesの見た目に近づける」ことを目的としており、ちゃんとした和文組版は行えないので注意してください。`bxjsarticle`, `bxjsreport`, `bxjsbook`がそれぞれ`jsarticle`, `jsreport`, `jsbook`に対応しています。
