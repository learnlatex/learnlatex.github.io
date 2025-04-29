---
layout: "lesson"
lang: "ja"
title: "追加レッスン：ドキュメントへのアクセス方法とヘルプの求め方"
description: "この追加レッスンではLaTeX本体のソースコードの見つけ方を学びます。"
toc-anchor-text: "追加レッスン：ドキュメントへのアクセス方法とヘルプの求め方"
---

## LaTeXのソースコード解説文書

メインレッスンで解説した`texdoc`コマンドはパッケージ文書の検索に特化しているわけではありません。必要があれば、LaTeXの実装の詳細など、それらを超える情報にアクセスすることができます。そうした情報が必要な場合には、以下のリンクが役に立つことでしょう。

LaTeXのソースコードはLaTeX自身で組版された文書`source2e.pdf`として読むことができます。この文書を開くには`texdoc source2e`を実行するか[texdoc.org](https://texdoc.org/pkg/source2e)にアクセスします。

最近のLaTeXではLaTeX3 Programming Language（expl3）がデフォルトで利用可能になっています（この機能は、かつては`expl3`パッケージとして提供されていました）。[expl3インターフェースの解説文書](https://texdoc.org/pkg/interface3)（`texdoc interface3`）や[expl3のソースコード解説文書](https://texdoc.org/pkg/source3)（`texdoc source3`）も`texdoc`で開くことができます。
