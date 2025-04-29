---
layout: "page"
lang: "ja"
title: 設定
permalink: /ja/settings
---

# サイト設定（ユーザ設定）

## Cookiesの許可と削除

Cookiesはブラウザに保存される少量のデータです。本ウェブサイトはデフォルトではいかなるCookiesも使用しませんが、サイト設定を行う場合にはCookiesに保存する必要があります。

以下のボタンによりCookiesを許可すると、このウェブサイトがCookiesを利用できるようになり、下記オプションが利用可能になります。

{% include settings-accept.html 
   accept="Cookiesを許可"
   reset= "リセット：すべてのCookiesを削除"
%}

## デフォルト出力

`% !TeX`による設定がない場合にTeXLive.netが結果出力をする方法（`return`）を指定します。

{% include settings-return.html %}

## デフォルトエンジン

`% !TeX`による設定がない場合にTeXLive.netとOverleafが使用すべきエンジン（`engine`）を指定します。（`-dev`や`context`オプションはOverleafでは無効です。）

なお、デフォルトの「デフォルトエンジン」は日本語版に限りpLaTeXに設定されています（他のほとんどの言語では初期設定はpdfLaTeXです）。このオプションを用いてデフォルトエンジンを変更すると、その設定はサイト全体に反映されるので注意してください。特に、pLaTeX 以外のエンジンをデフォルトに設定すると、日本語版のほとんどのコード例はそのままでは正しく処理できなくなります。

{% include settings-engine.html %}

## エディタのテーマ

埋め込みACEエディタのテーマを指定します。

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
