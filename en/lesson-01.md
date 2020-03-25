---
title: What is LaTeX and how does it work?
---

## How does LaTeX work?

Unlike common word processors such as Microsoft Word or LibreOffice, LaTeX usually does not provide WYSIWYG. With LaTeX one takes a good text editor, writes the text and enriches the text with markup. This markup tells LaTeX about the logical meaning of certain elements of the text, similar to the way HTML does.

Take for example a `<h2>` headline indicating a new section in an HTML-document. LaTeX also has a command for this, here one would use the `\section` command.

## From here on

For more information on the history of TeX and LaTeX see:

*

 The text with the commands is then processed by one of the LaTeX commands, e.g. by pdflatex or lualatex. In case there are no errors the processor creates a PDF file.
