---
title: "Selecting fonts and using Unicode engines"
---

When TeX and LaTeX first started being widely used they largely only handled European languages out of the box, although there was some capability for using other alphabets such as Greek and Russian.
Originally, accents and accented letters were typed using control sequences or macros such as `\c{c}` for ‘ç’ and `\'e` for ‘é’. While some people continue to use these input methods because they can be easier to type, others wanted to be able to use the keys on their keyboards to input such symbols directly.
Before Unicode, LaTeX provided support for many types of *file encoding* that allowed text to be written in various languages natively — for example, using the `latin1` encoding French users could write ‘`déjà vu`’ and LaTeX would internally translate the accented letters into TeX commands to produce the correct output.

This approach is still in use in modern LaTeX when using the `pdflatex` engine. By default all files are assumed to be Unicode-encoded unless otherwise specified. Although this engine is limited to 8-bit fonts, most European languages can be supported.

Font selection with `pdflatex` uses the robust LaTeX font selection scheme, and nowadays there are many fonts ready-to-use in a standard LaTeX distribution. For example, the TeX Gyre fonts are a suite of high-quality fonts based on common fonts that most people are familiar with such as Times, Helvetica, Palatino, and others. To load these fonts, it is as simple as loading a package with the appropriate name. For a Times lookalike, the TeX Gyre name is Termes:
```latex
\usepackage{tgtermes}
```

More information about the fonts that are available in a default `pdflatex` installation is available HERE.


## The Unicode era

As `pdflatex` is limited to 8-bit file encodings and 8-bit fonts, it cannot natively use modern OpenType fonts and easily switch between multiple languages that use different alphabets (or scripts, to use the technical term).
There are two replacements for TeX that natively use Unicode input and modern fonts: XeTeX and LuaTeX. For LaTeX, these are typically invoked in your editor using the engines `xelatex` and `lualatex` respectively.

In these engines, font selection is performed by the `fontspec` package, and for simple documents can look as easy as:
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
This selects the TeX Gyre Termes font, as in the `pdflatex` example above. Notably, this approach works for *any* OpenType font.
Having selected a font, input can now be typed directly in plain Unicode into a source document.
Here is an example showing some Roman and Greek letters as well as some CJK ideographs:

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```


When switching between languages it is usually important to also change things like hyphenation patterns and so on, and the `babel` and `polyglossia` packages both provide robust features to do this.




LuaLaTeX example

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ \pi \approx \directlua{ tex.print(math.pi) } $

\end{document}
```

