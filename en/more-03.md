---
title: More on: Your first LaTeX document
---

As [detailed earlier](lesson-02), LaTeX documents are simply plain text. To see
this, try opening your first document in a simple text editor, for example
on Windows using Notepad. You should see the same text as in a dedicated LaTeX
editor, but without any highlight of keywords.

You can also convert to PDF without your editor: this means using the Command
Prompt/Terminal, so don't worry if you are not familiar with this. If you
*are*, you can navigate to the directory containing your `.tex` source file and
run
```bash
pdflatex first
```
or
```bash
pdflatex first.tex
```
to typeset your PDF. Notice that the `.tex` extension is optional: LaTeX will
assume files end `.tex` unless you specify otherwise.
