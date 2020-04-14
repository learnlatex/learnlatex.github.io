---
title: Your first LaTeX document
---

Our first LaTeX document is going to be very simple: the idea is to show you
how a document looks and how to typeset it successfully. It is also your
first chance to see how to use the examples here on `learnlatex.org`.

If you are using a local LaTeX installation, in your editor create a new file
called `first.tex`, and either copy–paste the text below or type it in.
If you are using the on-line systems, you can just click on the buttons in the
example to try it out! We suggest you try out the on-line options even  if you
have set up LaTeX locally: this is a good chance to see how the different
options work.
```latex
\documentclass{article}

\begin{document}
Hey world!

This is a first document.
\end{document}
```
Save the file and typeset it to a PDF document: if you are using a local LaTeX
installation, the exact button to press will depend on the editor you have
picked. You should get a PDF file that contains the text above _plus_ a page
number: LaTeX adds that automatically.

View the output `first.pdf` with
whatever program you prefer for PDF viewing.
Looks great; congratulations!

## Handling errors

Errors happen.
Check that you have entered the file lines exactly.
Sometimes seemingly small input changes give large changes in the
result, including causing a document to not work.
If you are stuck, try erasing the document and copying it fresh from the
lines above.

If your invocation of LaTeX ends with a question mark then you can get out by
typing `x` and `Enter`.

LaTeX's error messages try to be helpful, but they are not the same as messages
in word processors. Some editors also make it hard to see the 'full' text of an
error, which can hide key details. LaTeX always creates a log of what it is
doing: this is a text file ending in `.log`. You can always see the full  error
messages there, and if you have a problem, expert LaTeX users might ask  for a
copy of your log file.

## What you've got

The first document shows the basics.
LaTeX documents are  a mixture of text and commands.
The commands start with a backslash
and sometimes have arguments in curly braces
(or sometimes optional arguments in square brackets).
Then you get an output PDF by telling LaTeX to process your file.

Every LaTeX document has a `\begin{document}` and a matching
`\end{document}`.
Between these two is the *document body*, where your content goes.
Here the body has two paragraphs (in LaTeX you separate paragraphs
with a blank line).
Before the `\begin{document}` is the *document preamble*,
which has code to set up the document layout.

LaTeX has other `\begin{...}` and `\end{...}` pairs; these are
called *environments*.
You must match them, so that for every `\begin{x}` there is an `\end{x}`.
You must also nest them, so that if you have
`\begin{x}  ... \begin{y}` then you must have
`\end{y}  ... \end{x}`.

We can add comments to a LaTeX file by starting them with `%`: lets use
that to show the structure:
```latex
\documentclass[a4paper,12pt]{article} % The document class with options
% A comment in the preamble
\begin{document}
% This is a comment
This is   a simple
document\footnote{with a footnote}.

This is a new paragraph.
\end{document}
```
You can see above that we've got two paragraphs: notice the use of a blank  line
to do that. Also notice that multiple spaces are treated as a single space.

You might also sometimes want a 'hard' space that does not break over lines: in
LaTeX we can create that using `~`, 'tying' two pieces of text together. That's
particularly useful when we start creating cross-references later in the course.

## Exercise

Experiment with the on-line editing and typesetting system; click the
button to typeset the content, then edit it in the webpage and re-typeset it.

Try adding text to your first document, typesetting and seeing the changes in
your PDF. Make some different paragraphs and add variable spaces. Explore how
your editor works: click on your source and find how to go to the same line  in
your PDF. Try adding some hard spaces and see how they influence line-breaking.
