---
title: Citations and references
---
<script>
preincludes = {
 "pre1": {
    "pre0": "document.bib"
   }
}
</script>

For bibliographic citations, while
you can include reference sources directly in your document,
usually you will get that information from one or more external files.
Such a file is a database of references,
containing the information in a processing-friendly format.
It may have many entries; here is one.

<!-- {% raw %} -->
```
@BOOK
  {ConcreteMath,  % string to use for citation
  AUTHOR = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  TITLE = {Concrete Mathematics},
  PUBLISHER = {Addison-Wesley},
  DATE = 1995
  }
```
<!-- {% endraw %} -->

To get the information into your document there are three steps.
First, use LaTeX to compile your document, which
creates a file with a list of the references that your document cites.
Second, run a program that takes information from the database of references,
picks out the ones that you use, and puts them in order.
Finally, compile your document again so that LaTeX can use that information
to resolve your citations.

For the second step there are two systems in wide use: BibTeX and
BibLaTeX.
We shall use BibLaTeX for this illustration
but the principles are the same.

In addition to putting the above material in a file `document.bib`,
create this LaTeX file.

```latex
\documentclass{article}
\usepackage{biblatex}
\addbibresource{document.bib} % file of reference info

\begin{document}
The mathematics showcase is from \cite{ConcreteMath}.

\printbibliography
\end{document}
```

When you compile this with LaTeX,
your editor may automatically detect that it has
references to resolve and do that for you, or you may need to
run the steps by hand.
In the latter case,
next run `biber document`,
and then compile with LaTeX twice more.
The result has the `\cite{...}` replaced with a reference, and
a list of references placed where the document source says
`\printbibliography`.
