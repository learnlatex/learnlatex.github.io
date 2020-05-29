---
title: Translating learnlatex.org
---

## Translating learnlatex.org

We encourage translations of the learnlatex.org course, the translations can be hosted in the main
site.

## Initial setup.

If you are proposing to make a translation please open a
[new issue](https://github.com/learnlatex/learnlatex.github.io/issues) at
GitHub stating the intention and tracking progress, that way other people
contemplating working on the same language will be alerted and so duplication of effort
will be avoided.

The easiest way to develop and test your issue is to fork the
[github repository](https://github.com/learnlatex/learnlatex.github.io/)
and enable github-pages on your fork (You will need to remove the CNAME file from
the top level of the repository as your fork will not be running at learnlatex.org).


## Adding your language

Once the initial site is working, you can make add the new language files by taking the
ISO 639-1 two letter language code for your language, which we shall assume is `zz`

1. Make a new directory `zz` as a copy of the english pages in `en`, including the subdirectory `en/includes`
2. Copy top level `index.html` into the `zz` directort and change references to `en` to `zz`.
   (See the examples for existing languages, such as `de`).
3. Add the two level code `zz` to the `langs:` array in the `_config.yml` file.
4. Translate the fixed strings in the files in `zz/includes` into your language.
   This is for site navigation such as "next lesson" and
   for the buttons used in examples such as "edit".


At this point your language should appear im the drop down menu to
select languages, and the navigation between pages. Obviously the main
text is still English!


## Translating the pages

We ask that translations are fairly literal translations of the
english text.  The intention is that the structure of the course and
order and depth that subjects are introduced are the same for all the
languages hosted on the site.

If you would rather use a different course structure but wish to use the
hosting mechanisms that have been developed at learnlatex.org that is also
possible, all the code is open source, however in that case we request that you
use a separate URL to host the course.

For the examples themselves there are two approaches possible.

### English examples.

You may wish to keep the example texts unchanged but just translate
the descriptive texts.

### Translating examples.

For some communities it is more natural
that the examples are also translated. One issue here is that making
realistic examples may involve macro packages such as `babel` or a
different default engine such as pLaTeX or XeLaTeX rather than
pdfLaTeX.

If this is the case we ask that the help file has an English and translated example
See for example the [Japanese help text](https://www.learnlatex.org/ja/help) and that file
and lesson-03 with the first document have forward references to the
[language setup lessons](en/more-06) and also any
[language specific lessons](en/language-01) that you add.

Apart from these forward references the examples should stay as close
to the current examples as possible even if they are set up to run
with a different engine (which can be accomplished by adding a `! TEX`
comment to the example.)

## Language specific lessons.

At least one language specific lesson should be added as `language-01` although you can add more as needed.
This should _not_ be a translation of `en/language-01` but rather any specific details for the language
such as choice of engine to use, options for the `babel` package, etc.

The final language specific lesson should have a

`next: extra-01`

entry in the yml metadata section at the top of the file (the lines between the two rows of `---`).
this tells the jekyll site builder to modify the navigation for the final lesson.



## Merging back to learnlatex.org

When you are ready you can restore the CNAME file, and then make a
pull request using the GitHub site to request the files are added to
the main site.

At this point you can close the initial issue raised that flagged your
intentionto provide a translation.

## Making changes after the files have been merged.

If you need to make changes later, either to improve the translation,
or because the English text has been updated, then the same basic system
should be used. Make the edits in the forked copy then make a pull request to
have the changes made in the main site.







