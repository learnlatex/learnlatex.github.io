---
title: "पहिला लाटेक् दस्तऐवज"
---

आपली पहिली लाटेक् धारिका अतिशय सोपी असणार आहे. हिच्यामागे कल्पना अशी आहे
की लाटेक् धारिका कशी असते व कशी कशी चालवली जाते ह्याचे प्रात्यक्षिक तुम्हाला दाखवावे.
ह्या संकेतस्थळावरील उदाहरणे कशी चालवावीत हे जाणण्यासाठी [मदतीच्या पानाला](help)
जरूर भेट द्या.

जर संगणकावरील टेक्-वितरण वापरत असाल, तर तुमच्या संपादकामध्ये नवी धारिका उघडा,
`.tex` ह्या प्रत्ययासह धारिकेस कोणतेही नाव द्या. तात्पुरते `xyz.tex` हे नाव आपण वापरू.
त्यानंतर खालील मजकुराची नक्कल जशीच्या तशी तिथे टाका अथवा स्वतः हा मजकूर टंकलिखित
करा. महाजालावरच लाटेक् वापरायचे असेल, तर 'लाटेक् ऑनलाईन' अथवा 'ओव्हरलीफमध्ये उघडा'
ह्यांपैकी एक कळ दाबा.

```latex
\documentclass{article}

\begin{document}
Hey world!

This is a first document.
\end{document}
```
ही धारिका जतन करून एखाद्या चालकासह चालवा, त्यामुळे एक पीडीएफ् फलित तयार
होईल. तुमच्या संगणकावरील टेक्-वितरणासह धारिका चालवत असाल, तर त्याकरिता
असणारी कळ संपादकाप्रमाणे बदलत जाईल. फलित धारिकेत आपण वर लिहिलेला मजकूर
**आणि** पृष्ठक्रमांक आपोआप येईल. लाटेक् हा क्रमांक आपोआप देते.

तयार झालेले पीडीएफ् फलित तुमच्या पसंतीच्या पीडीएफ् दर्शकासह उघडून पाहा. अभिनंदन!
तुमची पहिली लाटेक् धारिका यशस्वीरित्या चालली आहे.

## अडचणी कशा सोडवाव्यात?

लाटेक् चालवताना अडचणी येण्याची शक्यता असते.
तुमच्या बीजधारिकेतील मजकूर वर दिल्याप्रमाणेच लिहिला गेला आहे ह्याची खात्री करून घ्या.
कधी कधी अतिशय लहानसहान चुकांमुळे फलितामध्ये खूप मोठे बदल घडून येतात. काही वेळा
ह्या चुकांमुळे धारिका चालू न शकण्यापर्यंत गंभीर परिणाम होऊ शकतात. जर धारिका चालत
नसेल, तर संपूर्ण आज्ञावली खोडून पुन्हा एकदा वर दिलेला मजकूर तिथे जसाच्या तसा प्रविष्ट
करा व धारिका चालवून पाहा.

जर लाटेक् चालवताना प्रश्नचिन्ह उपस्थित झाले, तर `x` व `<Enter>` ही कळ दाबल्यास तुम्ही
प्रक्रियेतून बाहेर पडाल.

लाटेक् अडचण दाखवताना काही संदेश देते. ते अनेकदा माहितीपूर्ण असतात, परंतु ते इतर मजकूर
संपादकांप्रमाणे कार्य करत नाहीत. अनेकदा संपादकांमार्फत अडचणींमधील संपूर्ण निरोप लपवले जातात.
लाटेक्-मार्फत धारिका चालवली गेल्यानंतर एका `.log` धारिकेची निर्मिती होते. `.log` प्रत्ययाची धारिका
ही साधी मजकूररूपी धारिका असते. ह्या धारिकेत अडचणींचा संपूर्ण निरोप वाचता येतो. अनेकदा अडचण
सोडवताना सहलाटेक्-वापरकर्त्यांकडून `.log` धारिकेची मागणी केली जाते.

## What you've got

The first document shows the basics.
LaTeX documents are a mixture of text and commands.
The commands start with a backslash
and sometimes have arguments in curly braces
(or sometimes optional arguments in square brackets).
Then you get an output PDF by telling LaTeX to typeset your file.

Every LaTeX document has a `\begin{document}` and a matching
`\end{document}`.
Between these two is the *document body*, where your content goes.
Here the body has two paragraphs (in LaTeX you separate paragraphs
with one or more blank lines).
Before `\begin{document}` is the *document preamble*,
which has code to set up the document layout.

LaTeX has other `\begin{...}` and `\end{...}` pairs; these are
called *environments*.
You must match them so that for every `\begin{x}` there has to be an `\end{x}`.
If you nest them, then you must have `\end{y} ... \end{x}` to match
`\begin{x} ... \begin{y}`, i.e. the `\begin` and `\end` statements matching
in order.

We can add comments to a LaTeX file by starting them with `%`; let's use
that to show the structure:
```latex
\documentclass[a4paper,12pt]{article} % The document class with options
% A comment in the preamble
\begin{document}
% This is a comment
This is   a simple
document\footnote{with a footnote}.

This is a new paragraph.
\end{document}
```
You can see above that we've got two paragraphs: notice the use of a blank  line
to do that. Also notice that multiple spaces are treated as a single space.

You might also sometimes want a 'hard' space that does not break over lines: in
LaTeX we can create that using `~`, 'tying' two pieces of text together. That's
particularly useful when we start creating cross-references later in the course.

## Special characters

You've probably spotted that ``\``, `{` and `}` have a special meaning to LaTeX.
A ``\`` starts an instruction to LaTeX: a 'command'. The curly brace characters
 `{` and `}` are used to show _mandatory arguments_: information that commands
 require.

There are some other characters with special meaning; we've just seen that `~`
is a 'hard' space, for example. Almost all of these characters  are _very_
uncommon in normal text, which is why they were chosen for special meanings.
If you do need to show one of these special characters, we've put some
[information in the further details page](more-03).

## Exercise

Experiment with the online editing and typesetting system; click the
button to typeset the content, then edit it in the webpage and re-typeset it.

Try adding text to your first document, typesetting and seeing the changes in
your PDF. Make some different paragraphs and add variable spaces. Explore how
your editor works; click on your source and find how to go to the same line  in
your PDF. Try adding some hard spaces and see how they influence line-breaking.
