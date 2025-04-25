---
layout: "page"
lang: "en"
title: "Using the learnlatex.org site"
description: "This page explains the learnlatex.org website itself and how to best make use of it."
permalink: /en/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# Help


## Navigating the site

The course consists of 16 core lessons that can be reached from the
[table of contents]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) on the [start page](./).

Each lesson has a link to one associated lesson on the same subject
that goes into greater depth. It should be possible to work through
all 16 lessons _without_ reading the additional lessons.

At the end of the course there are one or more lessons specific to the
language being used for the lessons, and finally a gallery of examples
of packages demonstrating LaTeX use not covered by this course.

---

## Examples

### Running the examples

Each example consists of a complete small LaTeX document shown within
the page like this:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Example text.
\end{document}
```

Each example is complete. However you may wish to edit it to make small
changes, perhaps as part of an Exercise set at the end of the lesson.

There are two editors being used on the site (depending on the page).

* [ACE](https://ace.c9.io/).

  You may customise the theme used in the editor (for example using a
  dark theme with light text on a dark background) on the [Site Settings](settings) page.
  A convenient way to experiment with different themes is to to use <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> on Mac)
  while on any example in the site. [This displays a panel](javascript:acesettings()) which allows you to change all the ACE settings.

  The ACE repository has a [useful page of editor keyboard shortcuts](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).


* [CodeMirror6](https://codemirror.net/)

  Currently two CodeMirror themes are provided (a light and a dark).

#### Three ways to run the example

* Use the Overleaf service
* Use the TeXLive.net service
* Use a locally installed TeX system

##### Use the Overleaf service

Overleaf is one of the most popular online LaTeX editing services. The 
<button>Open in Overleaf</button> button, below the example, will submit the 
code to [Overleaf](https://www.overleaf.com/about).

If you do not have an account, or the account details are not
already cached in your browser, then you will be redirected to a
login page where you may login or register with Overleaf. This is a
free service but does require you to give some details and agree to
terms and conditions.

If your Overleaf account is already cached in your browser, then
Overleaf will be opened in a new tab, with a new
project with the code. You may then edit it in
Overleaf which will simultaneously run LaTeX on your code showing
the resulting output or error log.

Unlike documents processed at TeXLive.net, you may save your project
in your Overleaf account and return to it later.

##### Use the TeXLive.net service

The <button>Run at TeXLive.net</button> button, below the example, will submit the code to the 
[TeXLive.net](https://texlive.net) service[^1].

The TeXLive.net service was developed specifically to support this site, and
in particular makes use of [PDF.js](https://mozilla.github.io/pdf.js/)
to enable display of PDF on mobile and other browsers without built in PDF 
readers.

The resulting PDF document (or section of the error log) will be
shown inline immediately below the example. A <button>Delete
Output</button> button will be provided so that you may remove this output
(or you may leave it in place and continue the rest of the lesson
below).

Note that **TeXLive.net** requires no login or signup of any sort
so it is very convenient for small examples, but this site
provides no  mechanism to save your document. Any changes that you
make to the example are lost if you move off the page.

##### Locally installed TeX system

If you have a TeX system installed locally, then you may copy the
example code off the page, either explicitly selecting it, or by
using select all keyboard shortcuts in the editor
(<kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd>
in windows for example). This will place the code in your operating system
clipboard so you can start a blank document using your local
editor, and paste in the text.

### Troubleshooting

Our examples are based around using an up-to-date LaTeX installation. They all 
work with both of our online demonstration systems, so if you get errors with 
the examples we provide, you might want to check if your LaTeX system is 
up-to-date.

---

## Choosing the TeX engine

When submitting example documents, by default the `pdflatex` engine will be used.

You can force the choice of `latex`, `pdflatex`, `xelatex`, `lualatex`,
`platex` or `uplatex` by using a comment of the form:

`% !TEX ` _any text_ `lualatex`

where the white space at the start is optional and case is ignored as
is _any text_ between the first and last word.

This allows the form `% !TEX program=pdflatex` used by some TeX editors
but does not require the `program=` and is currently restricted to
specifying just one of the engines that are supported on
the online systems being used.

You can see an example of a comment being used to specify LuaLaTeX in
[some of the examples on this site](more-14).

If `platex` or `uplatex` is specified; then the `dvipdfmx` program is
also used to produce the PDF result from the DVI file that these variants generate.
Similarly `dvips` and `ps2pdf` are used if `latex` is specified.

If the engine is not specified in a `% !TeX` comment, then `pdflatex` will be used
unless you have specified a default TeX engine on the [Site Settings](settings) page.

---

## Choosing how to display the output

If you use the TeXLive.net system, then the PDF
output from running an example is shown using
[PDF.js](https://mozilla.github.io/pdf.js/) by default. This provides
consistent behavior over the widest range of browsers.

If you would prefer to use your browser's default PDF reader (either
its built in one, or an external application that you have configured)
then add a comment of the form:

`% !TEX ` _any text_ `pdf`

The default behavior can be explicitly specified by using `pdfjs` as
the final token. For debugging you may sometimes want the log file
returned, even if the document produces a PDF with
no errors. This can be specified by using `log` as the final token in
the comment.

As an alternative to using a `% !TeX` comment, you may specify the
site default return parameter on the [Site Settings](settings)
page. The Settings are specific to each browser, so for example you
may choose to use the default `pdfjs` setting on your mobile device,
but use `pdf` on your desktop browser to use its default PDF rendering.


---

## HTML output (make4ht, LaTeXML, lwarp)

If using the TeXLive.net system, then additional return options,
`make4ht`, `LaTeXML` or `lwarp` may be specified. These return one or more HTML pages
in the frame within the page. It may be specified at the same time
as `xelatex` or `lualatex` as well as the default `pdflatex` processing.

To enable this output, add a comment of the form:


```
% !TeX make4ht
```
{: .noedit :}


Replacing `make4ht` by `LaTeXML` or `lwarp` to specify those systems.



Alternatively you may specify `make4ht`, `LaTeXML` or `lwarp` as the default return option
on the [Site Settings](settings) page.


If using a locally installed TeX system, the same output as the `make4ht` option may be obtained
by executing

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

with the addional option `-x` or `-l` if XeLaTeX or LuaLaTeX are specified.

When running locally, other configurations would be possible. See the [make4ht
manual](https://texdoc.org/pkg/make4ht).


For `LaTeXML` to run locally, you would need to install LaTeXML (it is not part of TeX Live or MiKTeX)
and use

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Many other LaTeXML configurations are possible,
[as described in the manual](https://dlmf.nist.gov/LaTeXML/manual/).


The `lwarp` configuration is not documented here, it is somewhat experimental and subject to change.
The current version can be seen at the
[source repository](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Note that during development of the site we have also used 
      [LaTeX.Online](https://latexonline.cc/) and
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      and we thank the developers of those services for making updates to enable
      the examples on this site to be available at an early stage.


