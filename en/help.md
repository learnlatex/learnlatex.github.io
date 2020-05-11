---
title: "Using the learnlatex.org site"
---

## Navigating the site

The course consists of 15 core lessons reached from the table of contents on the [home page](/).

Each lesson has a link to one associated lesson on the same subject
that goes in to greater depth. It should be possible to work through
all 15 lessons _without_  reading the additional lessons.

## Running the examples

Each example consists of a complete small LaTeX document shown within
the page like this:

```latex
\documentclass{article}
\begin{document}
Example text.
\end{document}
```

The example is complete however you may wish to edit it to make small
changes, perhaps as part of an Exercise set at the end of the lesson.

The <button style="padding:0 1px;font-size:90%">Edit</button> button enables editing within the page, this is
marked by the removal of the LaTeX syntax highlighting and a green
border added around the code block. Note that this is just a basic edit facility provided by your browser
there is no TeX specific editing help as found in typical editing systems that you would use with TeX.

Whether or not the code block has been edited, there are three basic ways that you can run the example.

1. Use the **LaTeX Online** service. The <button style="padding:0 1px;font-size:90%">LaTeX online</button> button
   will submit the code to the `latexonline.cc` service.

   The resulting PDF document (or section of the error log) will be
   shown inline immediately below the example. A <button style="padding:0 1px;font-size:90%">Delete
   Output</button> button will be provided so that you may remove this output
   (or you may leave it in place and continue the rest of the lesson
   below).

   Note that  **LaTeX Online** requires no login or signup of any sort
   so it is very convenient for small examples, but neither this site
   nor `latexonline.cc` site provide any mechanism to save your
   document. Any changes that you make to the example are lost if you
   move off the page.

2. Use the **Overleaf** Service. The <button style="padding:0 1px;font-size:90%">Open in Overleaf</button>
   button will submit the code to **Overleaf**.

   If you do not have an account, or the account details are not
   already cached in your browser, then you will be redirected to a
   login page where you may login or register with Overleaf. This is a
   free service but does require you to give some details and agree to
   terms and conditions.

   If your Overleaf account is already cached in your browser, then
   Overleaf will be opened in a new tab, with a new
   project with the code and you may edit it in
   Overleaf which will simultaneously run LaTeX on your code showing
   the resulting output or error log.

   The editing fetaures in Overleaf are far more extensive than on this
   site, and you may save your project in your overleaf account and
   return to it later.

3. If you have a TeX system installed locally, then you may copy the example code
   off the page, either explicitly selecting it, or by using
   the <button style="padding:0 1px;font-size:90%">Copy</button> button. This will place the code in your
   operating system clipboard so you can start a blank document using
   your local editor, and paste in the text.


   

