---
title: "Accessing documentation and getting help"
---


There are several ways to access the documentation of a package or class.

## `texdoc`

If you've installed a TeX distribution (_e.g._, TeXLive or MikTeX) and included
the documentation when you installed it you can access the locally saved
documentation using the `texdoc` command line tool. Using

```sh
texdoc <pkg>
```

Will open the documentation of package `<pkg>`. The utility will search the
available documentation and open what it thinks is the closest match to your
search term. You can list and choose from among all the viable results it finds
using

```sh
texdoc -l <pkg>
```


## texdoc.net

This is a homepage which works similar to the `texdoc` utility. You can search
for documentation they have available just like you would do with `texdoc -l`
and then choose from among the results.


## CTAN

CTAN is the Comprehensive TeX Archive Network. Most LaTeX packages are published
there. You can search the site for the package you want to access the
documentation of. Usually the packages are saved in `ctan.org/pkg/<pkg-name>`
and you can access the README and documentation of the packages stored on CTAN
there.

## Getting help

There are various online forums for asking LaTeX questions: perhaps the most
popular today is [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Whenever you ask a question, it's best to first get your example clear: what is
normally known as a 'minimal working example' (MWE). This doesn't mean the code
works (as you wouldn't be asking otherwise!), but rather it means you've done
your best to make it clear, self-contained and minimal. The latter means only
having enough content to show the issue.

How do you construct a MWE? Normally easiest is to start from

```latex
\documentclass{article}
\begin{document}
Text
\end{document}
```

and add lines one at a time until you show the issue. You can try to 'cut down'
your real file, but that can be a long process.

One thing you will want available is your log file: this is created by LaTeX
every time you run it, and has the same name as your input but ending `.log`.
Depending on your desktop interface, you might need to 'show extensions' to
work otu which file it is.
