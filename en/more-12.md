---
title: "More on: Citations and references"
---

## Dealing wth non-English sorting

The BibTeX program was written primarily to deal with references in English. It
is very limited in handling accented characters, and even more limited with
non-Latin letters. In contrast, the Biber program was written from the start to
handle a mix of scripts properly.

This means that if you are sorting your bibliography, and you need to sort in
anything other than English order, you really should be using `biblatex` and
Biber, rather than `natbib` and BibTeX.
