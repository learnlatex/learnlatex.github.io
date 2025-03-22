---
layout: "lesson"
lang: "ja"
title: "追加レッスン：相互参照"
description: "この追加レッスンではhyperrefパッケージを読み込むことで相互参照をリンク化できることを示します。"
toc-anchor-text: "追加レッスン：相互参照"
---

## 相互参照をリンクにする

`hyperref`パッケージを使用すると相互参照をリンクにすることができます。`hyperref`は基本的にはプリアンブルの一番最後に読み込むことが望ましいです。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{イントロダクション}
相互参照\ref{sec:next}を含む素晴らしいテキスト。.

\section{次のセクション}
\label{sec:next}

続きのテキスト。
\end{document}
```

ここではリンクが他の通常テキストと同じ色になるようにしています。`hidelinks`オプションを外すとどうなるか試してみましょう！
