---
title: Accessing documentation and getting help
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
