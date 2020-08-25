---
title: "Using the learnlatex.org site"
permalink: /en/help
---

## Navigating the site

The course consists of 16 core lessons that can be reached from the table
of contents on the [home page](/).

Each lesson has a link to one associated lesson on the same subject
that goes into greater depth. It should be possible to work through
all 16 lessons _without_  reading the additional lessons.

At the end of the course there are one or more lessons specific to the
language being used for the lessons, and finally a gallery of examples
of packages demonstrating LaTeX use not covered by this course.

## Running the examples

Each example consists of a complete small LaTeX document shown within
the page like this:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Example text.
\end{document}
```

The example is complete. However you may wish to edit it to make small
changes, perhaps as part of an Exercise set at the end of the lesson.
The editor being used is [ACE](https://ace.c9.io/).

Whether or not the code block has been edited, there are three basic ways that you can run the example.

1. Use a  **LaTeX Online** service. The <button style="padding:0 1px;font-size:90%">LaTeX Online</button> button
   will submit the code to the
   [LaTeX CGI](https://latexcgi.xyz/) service[^1].


   The LaTeX CGI service was developed specifically to support this site, and
   in particular makes use of [PDF.js](https://mozilla.github.io/pdf.js/)
   to enable display of PDF on mobile and other browsers without built in PDF readers.

   The resulting PDF document (or section of the error log) will be
   shown inline immediately below the example. A <button style="padding:0 1px;font-size:90%">Delete
   Output</button> button will be provided so that you may remove this output
   (or you may leave it in place and continue the rest of the lesson
   below).

   Note that **LaTeX Online** requires no login or signup of any sort
   so it is very convenient for small examples, but neither this site
   nor the `latexcgi`, `latexonline.cc` or `latex-on-http` sites
   provide any mechanism to save your document. Any changes that you
   make to the example are lost if you move off the page.


2. Use the **Overleaf** Service. The <button style="padding:0 1px;font-size:90%">Open in Overleaf</button>
   button will submit the code to [Overleaf](https://www.overleaf.com/about).

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

   The editing features in Overleaf are far more extensive than on this
   site, and you may save your project in your Overleaf account and
   return to it later.

3. If you have a TeX system installed locally, then you may copy the
   example code off the page, either explicitly selecting it, or by
   using select all keyboard shortcuts in the editor (ctrl-A Ctrl-C
   in windows for example). This will place the code in your operating system
   clipboard so you can start a blank document using your local
   editor, and paste in the text.


## Choosing the {{ site.tex }} engine

When submitting example documents, by default the
`pdflatex` engine will be used unless the example uses the `fontspec`
package in which case `xelatex` is used.

You can force the choice of `pdflatex`, `xelatex`, `lualatex`,
`platex` or `uplatex` by using a comment of the form:

`% !TEX ` _any text_ `lualatex`

where the white space at the start is optional and case is ignored as
is _any text_ between the first and last word.

This allows the form `% !TEX program=pdflatex` used by some TeX editors
but does not require the `program=` and is currently restricted to
specifying just one of the five engines that are supported on
the online systems being used.

You can see an example of a comment being used to specify LuaLaTeX in
[some of the examples on this site](more-14).

If `platex` or `uplatex` is specified; then the `dvipdfmx` program is
also used to produce the PDF result from the DVI file that these variants generate.


## Choosing how to display the output

If you use the LaTeX online system, then the PDF
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

---

[^1]: Note that during development of the site we have also used 
      [LaTeX.Online](https://latexonline.cc/) and
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      and we thank the developers of those services for making updates to enable
      the examples on this site to be available at an early stage.
