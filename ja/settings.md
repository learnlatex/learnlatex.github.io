---
layout: "page"
lang: "ja"
title: 設定
permalink: /ja/settings
---

# サイト設定（ユーザ設定）

## Cookies の許可と削除

Cookies はブラウザに保存される少量のデータです。本ウェブサイトはデフォルトではいかなる Cookies も使用しませんが、サイト設定を行う場合には Cookies に保存する必要があります。

以下のボタンにより Cookies を許可すると、このウェブサイトが Cookies を利用できるようになり、下記オプションが利用可能になります。

{% include settings-accept.html 
   accept="Accept Cookies"
   reset= "Reset: Delete All Cookies"
%}

## デフォルト出力

`% !TeX` による設定がない場合に TeXLive.net が結果出力をする方法 (`return`) を指定します。

{% include settings-return.html %}

## デフォルトエンジン

`% !TeX` による設定がない場合に TeXLive.net と Overleaf が使用すべきエンジン (`engine`) を指定します。（`-dev` や `context` オプションは Overleaf では無効です。）

なお、デフォルトの「デフォルトエンジン」は日本語版内に限り pLaTeX に設定されています（他のほとんどの言語では初期設定は pdfLaTeX です）。このオプションを用いてデフォルトエンジンを変更すると、その設定はサイト全体に反映されるので注意してください。特に、pLaTeX 以外のエンジンをデフォルトに設定すると、日本語版のほとんどのコード例はそのままでは正しく処理できなくなります。

{% include settings-engine.html %}

## エディタのテーマ

埋め込み ACE エディタのテーマを指定します。

{% include settings-acetheme.html %}
