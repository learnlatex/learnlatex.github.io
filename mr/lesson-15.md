---
layout: "lesson"
lang: "mr"
title: "अडचणी"
description: "ह्या प्रकरणात लाटेक्-मध्ये येणाऱ्या अडचणी, त्यांचे अर्थ व त्या कशा सोडवाव्यात हे आपण पाहूया."
toc-anchor-text: "अडचणी हाताळणे"
toc-description: "अनपेक्षित गोष्टींचा सामना करणे."
---

# अडचणी

<span class="summary">
ह्या प्रकरणात लाटेक्-मध्ये येणाऱ्या अडचणी, त्यांचे अर्थ व त्या कशा सोडवाव्यात हे आपण पाहूया.
</span>

लाटेक् ही एक आज्ञावली आहे. तिच्या प्रक्रियेत वापरकर्त्यांकडून काही चुका होऊ शकतात व त्यांमुळे
आज्ञावलीय विश्वात फार सहज आढळणाऱ्या अडचणींचा सामना लाटेक्-वापरकर्त्यांनाही करावा लागू
शकतो.

## सर्वसामान्य अडचणी

ह्या पृष्ठावर आपण सर्वसामान्य अडचणींबाबत माहिती घेऊया. प्रत्येक अडचण तिचे कारण काय आहे
ह्याबाबत थोडी माहिती देते.

ह्यासाठी उदाहरणे चालवून पाहणे उपयुक्त ठरतेच, परंतु त्यांच्यातील अडचणी सोडवण्याचा प्रयत्न
करणेदेखील तितकेच महत्त्वाचे.

### pdflatex not found

अनेकदा सुरुवातीला वापरकर्त्यांना दिसणारी अडचण -

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

ही विंडोज़् प्रणालीवर व

```
bash: pdflatex: command not found
```
{: .noedit :}

ही लिनक्स प्रणालीवर.

ही लाटेक्-ची अडचण नसून कार्यकारी प्रणालीची अडचण आहे. ह्या अडचणीत असे सांगितले आहे की टेक्
संगणकावर बसवले नाही अथवा ते मला सापडले नाही. वापरकर्त्यांकडून एक सामान्य चूक होते ती अशी की
ते केवळ लाटेक्-चा संपादक संगणकावर बसवतात व टेक्-वितरण बसवतच नाहीत. त्यामुळे ही अडचण येऊ
शकते.

### टेक् अडचणीची चिकित्सा

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
```

This produces a multi-line message in the log file.

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* अडचणीची पहिली ओळ `!` ह्या चिन्हासह सुरू होते. हे त्या अडचणीचे सामान्य स्वरूप स्पष्ट करते. इथे
  आज्ञेची व्याख्या झाली नाही अशी अडचण दाखवण्यात येत आहे.
* ह्यानंतर दुसऱ्या ओळीवर टेक् ज्या ओळीवर प्रक्रिया करत होते ती ओळ दाखवण्यात येते. ही ओळ जिथे
  संपते तिथे टेक् थांबले असा अर्थ होतो. व्याख्या न केली गेलेली आज्ञा हेच प्रक्रियेतील शेवटचे अक्षर
  असते, त्यामुळे ओळीच्या शेवटी ते दिसत आहे. `\textbold` ही आज्ञा इथे व्याख्या न केली गेलेली
  आहे. ओळतोडीनंतर जे शेष असते ते लिहिले जाते. टेक्-ने त्यावर अजून प्रक्रिया केली नसते. ह्या
  उदाहरणात `{hmmm}` हा कार्यघटक अशा रीतीने टेक्-च्या प्रक्रियेतून राहिला आहे.
* ह्यानंतर काही आणखी ओळी असू शकतात, ज्यांमुळे आज्ञेतील दोष स्पष्ट होईल.
* शेवटची ओळ `l.` ह्या अक्षराने सुरू होते, त्यापुढे एक आकडा लिहिला असतो व शेवटी बीजधारिकेतील
  ती ओळ लिहिली असते जिथे टेक्-ला अडचण जाणवते.
* शेवटी `?` असते, जिथे टेक् पुढे काय करावे हा प्रश्न वापरकर्त्यास विचारते. जर तुम्ही एखादा मजकूर
  संपादक वापरत असाल, तर बहुतांश वेळा त्यात अडचणी आल्यास न थांबता प्रक्रिया पूर्ण करण्याची
  सोय केली असते, परंतु आज्ञापटलावरून टेक् चालवत असाल, तर मात्र टेक्-ला विविध आज्ञा सांगून
  प्रक्रियेची पुढील दिशा ठरवता येते.

Note here that TeX does not see the error at the point that
the definition is made; and in fact if `\mycommand` is defined but not
used, no error would be raised. So although the error is reported on
line 7, the "real" error is in the definition on line 3, so it is
important to see the whole error message.

Beware that some editors show one line "summaries" of the error log.
This can be particularly misleading if shown as

`line 7: undefined command: ...\mycommand`

as it makes it appear that `\mycommand` is not defined.


### Mismatched braces


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Here the error is a mismatched `}` used to end the optional
argument. The closing brace causes LaTeX's option parsing
to fail and you get an internal and not that helpful error: 

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

While the error description is unhelpful; the following two
lines do accurately display the location of the error by the use of
the linebreak showing how far TeX had read:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


### Missing files

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

This produces the error

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Note: the same error may be caused by two different causes; a simple
typo as here, which may be corrected by fixing the package name, or
that the file really is missing and needs to be installed on the
current system.

### Blank lines in display math

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Produces the slightly mysterious error

```
! Missing $ inserted.
```
{: .noedit :}

But the fix is simple, blank lines are not allowed in math
environments and should be deleted.

## Exercise

Attempt to fix the errors in the supplied examples.

Produce small documents with different errors and note the form of the error messages.

<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(3, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(3, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3  , 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(7, 0, false);
  }, false);
</script>
