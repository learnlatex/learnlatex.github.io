---
title: Logical structure
---

LaTeX focuses on the logical structure of your document,
more than on visual detail.

You probably have used a word processor.
There, to start a section most people enter the title,
back up and highlight that,
click to make it in a larger size and bold,
and insert a new line.
But in LaTeX you enter `\section{title}` and the system
handles the font changes, vertical space, etc.
The one command is easier, and makes the output uniform throughout
the document.

Edit the file to say this, then save.
(Or, you can simply copy and paste it.)
```latex
\documentclass{article}

\begin{document}
Hey world!

This is a first document.

% ================
\section{Title of the first section}
Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.


% ================
\section{Second section}

Text of the second section.

\end{document}
```

LaTeX numbers the sections and subsections and includes the
titles in boldface.
How to modify their look is beyond this this document but the point is that
the system does this for you.

Notice the line before the sections starting with
a percent sign, `%`.
The percent sign marks the rest of the line as a comment
so that LaTeX ignores the equal signs.
(It is only here as an example,
but you might enter that to help find the sections
while you are editing.)
