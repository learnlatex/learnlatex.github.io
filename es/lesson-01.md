---
title: "What is LaTeX and how does it work?"
---

Unlike common word processors such as Microsoft Word or LibreOffice Writer, LaTeX
usually does not provide WYSIWYG ('What You See Is What You Get'). With LaTeX
one takes plain text and enriches it with markup. This markup tells LaTeX
about the logical meaning of certain elements of the text, similar to the way
HTML does.

Take for example the element  `<h2>`  indicating a new section in an HTML document.
LaTeX also has a command for this; here one would use the `\section` command.

## The {{ site.latex }} workflow

Because LaTeX files are not the document itself but rather instructions
on what each part of the document should be, you don't normally give other
people your LaTeX file itself. Instead, after writing your LaTeX _source_, you
run LaTeX on the file (normally using a program called `pdflatex`) to
create a PDF file. This PDF is then what you send to others.

Different people use different ways to describe this process. As using LaTeX
is a bit like programming, it's often called 'compiling' your document, although
'typesetting' is more accurate.

## Multiple {{ site.latex }} runs

For simple files, you only need to typeset your file once to get the completed
PDF. But once you start adding more complicated things, like cross-references,
citations, figures, and tables of contents, you might need to run LaTeX more
than once. We'll tell you when that's the case.

## {{ site.latex }} or pdf{{ site.latex }} or ...

In the [next lesson](lesson-02), we are going to see that LaTeX is not a
single program. To keep things simple, we are going to focus on one particular
LaTeX program, pdfLaTeX, for creating your PDFs. We will look at some other
programs, and why you might want to use them, later in the course.
