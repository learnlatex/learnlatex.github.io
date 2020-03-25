---
title: learnlatex.org
---

## Welcome to learnlatex.org!

This site aims to help you take the first steps with LaTeX, a document
preparation system designed to produce high-quality typeset output. LaTeX can
be scary for new users as it is _not_ a word processor, and because it is not a
single program. Our aim here is to help you get started without trying to show
you _everything_ in one go.

To do that, we have taken around 15 of the most important things you'll need to
know, and made them into short 'lessons'. Each lesson is very focussed, so they
should not take too long to cover. In each lesson, we've given examples of what
you'd write, and they are available so you can try them out on-line.

## The lessons

<ul>
{%- for page in site.pages | sort: 'path' -%}
{% assign sz = page.path | size %}
{%- if 14 == sz %}
{%- if page.path  contains "en/lesson" %}
<li><a href="{{page.path | replace: '.md',''}}">
<b>&#160;{{page.path | replace: '.md','' | replace: 'en/lesson-',''}}</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endif -%}
{%- endfor -%}
{%- for page in site.pages | sort: 'path' -%}
{% assign sz = page.path | size %}
{%- if 14 != sz %}
{%- if page.path  contains "en/lesson" %}
<li><a href="{{page.path | replace: '.md',''}}">
<b>{{page.path | replace: '.md','' | replace: 'en/lesson-',''}}</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endif -%}
{%- endfor -%}
</ul>

## Getting help and going further 