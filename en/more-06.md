---
title: "More on: Extending LaTeX using packages"
---

## Loading multiple packages

The `\usepackage` command takes a comma-separated list of packages, so you can
load several in one go: `\usepackage{color,graphicx}` for example. If you are
passing options to a package, they will apply to each of the packages in the list.
It's also easier to comment out packages if they are loaded
separately.  So we will stick to loading each package on a separate line.

## The `babel` package

We showed the `babel` package [in the main lesson](lesson-06) as a way to choose
different hyphenation patterns. It does a lot more than that, depending on the
language(s) being used. For example, in German, it provides some shorthands for
creating 'soft' hyphens, and also a way to quickly type umlauts without needing
a German keyboard.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'

\begin{document}

H"ohe

\end{document}
```

Other language settings make design changes: for example, in traditional
French typography, there is a space before some punctuation signs, like `:`,
and this is added automatically if you load `babel` with the option `french`.

## Global options

Sometimes, you want an option to be available to all of the packages you've
loaded. That is done by giving it on the `\documentclass` line: every package
can 'see' this list. So to pass the language of a document to all packages,
we might use:

```latex
\documentclass[ngerman]{article} % Notice that the option name is 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

H"ohe

\end{document}
```
