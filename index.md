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

We know that people will want to know more than we can cover in 15 short
lessons. To help guide you when you need more information, we have therefore
including a 'going further' page for each lesson. This extra information is
there to support you when you need the detail, but should not get in your
way if you do not.


## The lessons

<ul>
{%- for page in site.pages | sort: 'path' -%}
{%- if page.path  contains "en/lesson" %}
<li><a href="{{page.path | replace: '.md',''}}">
<b>
{% if page.path contains "en/lesson-0" %}
&#160;{{page.path | replace: '.md','' | replace: 'en/lesson-0',''}}
{% else %}
{{page.path | replace: '.md','' | replace: 'en/lesson-',''}}
{% endif %}
</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endfor -%}
</ul>

## Getting help and going further



