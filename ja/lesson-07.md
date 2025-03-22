---
layout: "lesson"
lang: "ja"
title: "図と位置調整"
description: "このレッスンでは外部の画像データをLaTeX文書に取り込む方法を考えます。そして、その入れ方を調整したり、フロートを作ることによってPDF中の適切な位置に自動配置したりする方法を紹介します。"
toc-anchor-text: "図の使用"
toc-description: "図の入れ方とスペーシングと位置調整"
---

# 図と位置調整

<span class="summary">このレッスンでは外部の画像データをLaTeX文書に取り込む方法を考えます。そして、その入れ方を調整したり、フロートを作ることによってPDF中の適切な位置に自動配置したりする方法を紹介します。</span>

図（画像データ）をLaTeX外部から持ち込むためには、`\includegraphics`コマンドを提供する`graphicx`パッケージを利用します。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{graphicx}

\begin{document}
この図
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
は外から読み込まれたPDFです。
\end{document}
```

この方法によりEPS、PNG、JPG、PDFファイルを挿入することができます。同じファイル名で複数の画像形式のデータがある場合、拡張子まで含めて`example-image.png`のように書くこともできます（`graphicx`パッケージは拡張子が与えられていない場合、適切なものを推測します）。

お気付きかもしれませんが、ここで新しい`center`環境を使用しました。これは読み込んだ画像を水平方向に中央配置するためです。今後の[レッスン](lesson-11)ではスペーシングや配置についてもう少し詳しく紹介します。

## 図の見た目を変更する

`\includegraphics`コマンドは画像のサイズや形状を変更したり、あるいはトリミングを行ったりするための多くのオプションを備えています。こうしたオプションのいくつかは頻繁に使用されるので、覚えておいても損はありません。

最も単純なものは画像の幅を設定する`width`オプションと縦の長さを設定する`height`オプションです。これらへの値はしばしば`\textwidth`や`\textheight`を利用して相対値で指定されます。LaTeXはアスペクト比が維持されるように自動的に画像を拡大・縮小します。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
何らかのテキスト
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

同様に`scale`を用いて画像の拡大倍率を指定したり、`angle`で角度を指定して回転したりすることもできます。他にも`clip`ではみ出した部分を切り取ったり、`trim`によってトリミングを行ったりすることができます。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## 画像をフロートにする

伝統的な組版では、特に技術的な文書では、グラファイックスはテキストの中間ではなく、別の場所に配置されることになっています。これを**フロート**と言います。ページ内に大きな空白を作らないようにするため、画像は通常フロートとして挿入されます。

```latex
\RequirePackage{plautopatch}
\documentclass[dvipdfmx]{jlreq}
\usepackage{graphicx}
\usepackage{bxjalipsum}  % 日本語ダミーテキスト

\begin{document}
\jalipsum[3-5]{wagahai} % いくつかのダミー段落

配置のテスト
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a}
  \caption{サンプル画像}
\end{figure}

\jalipsum[6-10]{wagahai} % いくつかのダミー段落
\end{document}
\end{document}
```

この例で、LaTeXは図とキャプションは、1ページ目に十分な空きがないので、テキスト「配置のテスト」の位置ではなく2ページ目の先頭に移動させるはずです。オプション`ht`はLaTeXにフロートの配置位置を指示します。ここでの`ht`の2文字は、ソース中のそのままの位置（つまり「配置のテスト」の直後）またはページの先頭に配置するよう指示しています。オプションには最大4つの位置指定子を使用することができます。

* `h`: その場 (here)
* `t`: ページの上部 (top)
* `b`: ページの下部 (bottom)
* `p`: 独立ページ

ただし、紙面に余裕がない場合など、指示した位置に配置されない場合もあります。

今後の[レッスン](lesson-09)で、テキストからフロートに対して相互参照をする方法を説明します。

また上記の例では`center`環境の代わりに`\centering`を使用しました。フロート内では画像を水平方向に中央配置するには`\centering`を使用します。`center`環境を使用すると垂直方向に余計なスペースが入ってしまいます。

## 練習問題

上記の例で使用した「サンプル画像」の代わりに、自分で作成した画像を文書に挿入してみましょう。

`\includegraphics`の`height`、`width`、`angle`、`scale` オプションを用いて、何ができるのか試してみましょう。

`bxjalipsum`パッケージを利用して、さらに長い文書例を作ってみましょう。その中で様々な位置指定子を用いてフロートを配置してみましょう。各種の指定子はどのように働くでしょうか？
