---
layout: "page"
lang: "zh-hant"
title: 網站設定
permalink: /zh-hant/settings
---
# 網站設定（使用者偏好）

## 接受或刪除 Cookies

Cookies 是由你的瀏覽器儲存的小資料片段。預設情況下，該網站不使用任何 Cookies，但在此頁面上設定的任何選項都會儲存在 Cookies 中。

在此接受 Cookies 以啟用該網站的 Cookies 使用，並啟用以下選單選項。

{% include settings-accept.html 
   accept="接受 Cookies"
   reset= "重置：刪除所有 Cookies"
%}

## 預設返回
TeXLive.net 應在沒有通過 `% !TeX` 註釋設定的情況下使用的 `return` 表單參數。

{% include settings-return.html %}

## 預設引擎
TeXLive.net 或 Overleaf 應在沒有通過 `% !TeX` 註釋設定的情況下使用的 `engine` 表單參數。（在 Overleaf 中不應使用 `-dev` 和 `context` 選項。）

{% include settings-engine.html %}

## 編輯器主題
嵌入的 ACE 編輯器使用的主題。

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
