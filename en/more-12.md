---
lang: "en"
title: "More on: Citations and references"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "More on: Citations and references"
---

## Dealing with non-English sorting

The BibTeX program was written primarily to deal with references in English. It
is very limited in handling accented characters, and even more limited with
non-Latin letters. In contrast, the Biber program was written from the start to
handle a mix of scripts properly.

This means that if you are sorting your bibliography, and you need to sort in
anything other than English order, you really should be using `biblatex` and
Biber, rather than `natbib` and BibTeX.

## Hyperlinks

If you load the `hyperref` package (as covered [earlier](more-09)), it will
automatically make some content in your bibliography into links. This is
particularly useful for URLs and DOIs.

## Differences in best practice for BibTeX input between styles

While the overall syntax of the BibTeX files is the same whether you use the
BibTeX workflow or `biblatex`, the set of fields that is supported (used by the
style) and their exact meaning may not only vary between the BibTeX workflow
and `biblatex`, but also between different BibTeX styles. A large 'core set' of
entry types and fields is the same for almost all styles, but there are
differences in some fields.

A common example is the URL. Some older BibTeX `.bst` styles (most notably
the 'standard BibTeX styles', e.g. `plain.bst`, `unsrt.bst`, ...) predate
the invention of the URL and have no dedicated field for the URL of an online
resource. Many newer styles _do_ have a dedicated `url` field. The workaround
to show the URL in the older styles is usually to use the `howpublished` field,
but with the newer styles it is of course preferable to use the dedicated
`url` field.

In order to be able to make use of the full potential of your used style you
will have to find out the set of fields it supports and their semantic.
