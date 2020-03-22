---
What is LaTeX and how does it work?
---

The word "LaTeX" actually consists of two components, "La" and "TeX". In the following we will briefly describe where they come from.

## TeX and LaTeX

TeX was originally invented by the Stanford professor Donald Knuth. Knuth is well-known for a series of books known as the "Art of Computer Programming". In 1973 a new edition of the books was to be made, this was the time when the typesetting industry switched from traditional typesetting with lead to photobased typesetting. Donald Knuth did not like the quality of the print and therefore decided to implement his own typesetting system based.

In May 1977 the development of TeX started.

The original TeX was rather complicated to use, even Donald Knuth used various macros to edit his books. Leslie Lamport, who works for Microsoft nowadays also developed a set of macros which simplify the use of TeX and called this macro set "LaTeX" (Lamport TeX) 

Today LaTeX is the most common way to interact with TeX. Another alternative is for example ConTeXt.

## How does LaTeX work?

Other than with common word processors such as Microsoft Word or LibreOffice LaTeX usually does not provide WYSIWYG. With LaTeX one takes a good text editor, writes the text and enriches the text with markup. This markup tells LaTeX about the logical meaning of certain elements of the text, similar to the way HTML does. 

Take for example a <h2> headline indicating a new section in an HTML-document. LaTeX also has a command for this, here one would use the \section command. 
  
 The text with the commands is then processed by one of the LaTeX commands, e.g. by pdflatex or lualatex. In case there are no errors the processor creates a PDF file.
