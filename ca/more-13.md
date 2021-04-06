---
layout: "lesson"
lang: "en"
title: "More on: Structuring longer documents"
description: "This lesson shows how to make an index, and how to use the imakeidx package to automate the process."
toc-anchor-text: "More on: Structuring longer documents"
---

## Making an index

Depending on the type of document you are writing, you might want to include
an index. This is a bit like making a bibliography, as it uses auxiliary files.
Luckily, this is all automated by the `imakeidx` package. We need three
instructions to LaTeX:

- The `\makeindex` command, which enables creation of an index
- The `\index` command, which marks up index entries
- The `\printindex` command, which prints the index

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

We've shown two features of indexing here: subdivision using `!`, and printing
something different from the 'sort text' of an index entry using `@`. There
is a lot of customisation possible with an index; try out the example and see
how it works.
