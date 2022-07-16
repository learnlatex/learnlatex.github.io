---
layout: "lesson"
lang: "ja"
title: "追加レッスン：ドキュメントへのアクセス方法とヘルプの求め方"
description: "This lesson show you where you can find the sources of LaTeX itself."
toc-anchor-text: "More on: Accessing documentation and getting help"
---

## LaTeX のソースコード解説文書

メインレッスンで解説した `texdoc` コマンドはパッケージ文書の検索に特化しているわけではありません．必要があれば，LaTeX の実装の詳細など，それらを超える情報にアクセスすることができます．そうした情報が必要な場合には，以下のリンクが役に立つことでしょう．

LaTeX のソースコードは LaTeX 自身で組版された文書 `source2e.pdf` として読むことができます．この文書を開くには `texdoc source2e` を実行するか [texdoc.org](https://texdoc.org/pkg/source2e) にアクセスします．

最近の LaTeX では LaTeX3 Programming Language (expl3) がデフォルトで利用可能になっています（この機能は，かつては `expl3` パッケージとして提供されていました）．[expl3 インターフェースの解説文書](https://texdoc.org/pkg/interface3) (`texdoc interface3`) や[expl3 のソースコード解説文書](https://texdoc.org/pkg/source3) (`texdoc source3`) も `texdoc` で開くことができます．
