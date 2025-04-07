---
layout: "page"
lang: "zh-hans"
title: 网站设置
permalink: /zh-hans/settings
---
# 网站设置（用户偏好）

## 接受或删除 Cookies

Cookies 是由你的浏览器存储的小数据片段。默认情况下，该网站不使用任何 Cookies，但在此页面上设置的任何选项都会存储在 Cookies 中。

在此接受 Cookies 以启用该网站的 Cookies 使用，并启用以下菜单选项。

{% include settings-accept.html 
   accept="接受 Cookies"
   reset= "重置：删除所有 Cookies"
%}

## 默认返回
TeXLive.net 应在没有通过 `% !TeX` 注释设置的情况下使用的 `return` 表单参数。

{% include settings-return.html %}

## 默认引擎
TeXLive.net 或 Overleaf 应在没有通过 `% !TeX` 注释设置的情况下使用的 `engine` 表单参数。（在 Overleaf 中不应使用 `-dev` 和 `context` 选项。）

{% include settings-engine.html %}

## 编辑器主题
嵌入的 ACE 编辑器使用的主题。

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
