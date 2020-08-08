---
title: "Cross-referencing"
---

## The `\label` and `\ref` mechanism

When you are writing a document of any length, you'll want to refer to numbered
items such as figures, tables or equations. Luckily, LaTeX can automatically add
the right numbers; we just have to set things up. To have LaTeX remember a spot
in your document you have to label it, and then in other places, you refer to it.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material for the first section.


\subsection{Subsection of the first section}
\label{subsec:labelone}

Text of material for the first subsection.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

In subsection~\ref{subsec:labelone} is equation~\ref{eq:labeltwo}.
\end{document}
```

There are two `\label{...}` commands, one after the subsection
and one inside the equation environment.
They are associated with the last sentence's `\ref{...}` commands.
When you run LaTeX, it saves information about the labels to an auxiliary file.
For `\label{subsec:labelone}`, LaTeX knows that it is now in a subsection and
so it saves the subsection's number.
For `\label{eq:labeltwo}`, LaTeX knows that the most recent environment
of interest is an equation so it saves the information for that equation.
When you ask for the reference, LaTeX gets it from the auxiliary file.

The `subsec:` and `eq:` aren't used by LaTeX;
rather, it just keeps track of what it has most
recently processed.
But when you are writing these help you remember what the label
is about.

You may see references that show in an output PDF
as boldface double question marks, **??**.
The explanation is that because of this auxiliary file work,
the first time that you compile a document the label has not
yet been saved.
Run LaTeX one more time and you'll be all set.
(Usually while writing you will run LaTeX several times anyway,
so in practice this is not a bother.)

Notice the tie (`~`) characters before the references.
You don't want a line break between `subsection` and its number, or
between `equation` and its number.
Putting in a tie means LaTeX won't break the line there.

## Where to put `\label`

The `\label` command always refers to the previous numbered entity:
a section, an equation, a float, etc. That means that `\label` always has to
come _after_ the thing you want to refer to. In particular, when you create
floats, the `\label` has to come _after_ (or better, in), the `\caption` command,
but within the float environment.

## Exercises

Try adding new numbered parts (sections, subsections, enumerated lists) to
the test document and finding out how many runs are needed to make `\label`
commands work.

Add some floats and see what happens when you put `\label` _before_ the
`\caption` instead of after; can you predict the result?

What happens if you put a `\label` for an equation _after_ the `\end{equation}`?
