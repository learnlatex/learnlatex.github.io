---
layout: "page"
lang: "hi"
title: "learnlatex.org साइट का उपयोग करना"
description: "यह पृष्ठ learnlatex.org वेबसाइट के बारे में बताता है तथा यह भी बताता है कि इसका सर्वोत्तम उपयोग कैसे किया जा सकता है"
permalink: /hi/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# मदद

## साइट को नेविगेट करना

इस कोर्स में 16 मुख्य पाठ हैं, जिन्हें [प्रारंभ पृष्ठ](./) पर
[पाठ तालिका]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) से पढ़ा जा सकता है।

प्रत्येक पाठ में उसी विषय से संबद्ध पाठ का लिंक है
जो विषय का अधिक गहराई से विवरण करता है। अतिरिक्त पाठों को पढ़े बिना भी 
सभी 16 पाठों को पूरा करना आपके लिए संभव होगा।

कोर्स के अंत में प्रत्येक पाठों के लिए उपयोग की जा रही भाषा से जुड़े एक या एक से अधिक विशिष्ट पाठ हैं, और अंत में लाटेक उपयोग को प्रदर्शित करने वाले वे पैकेज जिन्हें इस कोर्स द्वारा कवर नहीं किया गया है उनकी एक गैलरी भी दी गई है।

---

## उदाहरण

### उदाहरणों को चलाना

प्रत्येक उदाहरण में एक पूर्ण छोटा LaTeX दस्तावेज़ होता है जो पृष्ठ के अंदर इस प्रकार दिखाया जाता है:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
उदाहरण टेक्स्ट
\end{document}
```

प्रत्येक उदाहरण अपने आप में पूर्ण है। हालाँकि अगर आप इसे संपादित करके इसमें छोटे-मोटे बदलाव करना चाहते हैं, तो पाठ के अंत में दिए गए 'अभ्यास सेट' का प्रयोग कर सकते हैं।

इस वेबसाइट में [ACE/ऐस](https://ace.c9.io/) संपादक उपयोग किया जा रहा है।

आप संपादक में उपयोग की जाने वाली थीम को [साइट सेटिंग्स](सेटिंग्स) से कस्टमाइज़ कर सकते हैं (उदाहरण के लिए, गहरे रंग की थीम जिसपर गहरे रंग की पृष्ठभूमि हो, उस पर हल्के रंग के टेक्स्ट का उपयोग करना) 


विभिन्न थीम को प्रयोग करने का एक सुविधाजनक तरीका है <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> मैक पर)
का उपयोग करना। [यह एक पैनल प्रदर्शित करता है](javascript:acesettings()) जो आपको सभी ACE सेटिंग्स को बदलने की अनुमति देता है।

ACE रिपॉजिटरी में [संपादक कीबोर्ड शॉर्टकट का एक उपयोगी पृष्ठ](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts) है।


#### उदाहरण चलाने के तीन तरीके हैं:

* Overleaf/ओवरलीफ सेवा का उपयोग करना
* TeXLive.net/टेक्सलाइव.नेट सेवा का उपयोग करना
* Local Machine/खुद के कंप्यूटर पर इन्सटाल्ड TeX सिस्टम का उपयोग करना



##### ओवरलीफ सेवा का उपयोग करना

ओवरलीफ सबसे लोकप्रिय ऑनलाइन लाटेक संपादन सेवाओं में से एक है। उदाहरण के तौर पर नीचे दिया गया <button>ओवरलीफ में खोलें</button> बटन, आपको दिए गए कोड को [ओवरलीफ](https://www.overleaf.com/about) पर सबमिट करने की सक्षमता देगा।

यदि आपके पास कोई ओवरलीफ खाता नहीं है, या आपका खाता विवरण आपके ब्राउज़र के कैश (Cache) में नहीं है, तो आपको ओवरलीफ एक लॉगिन पृष्ठ पर पुनः जाने के लिए निर्देशित करेगा जहाँ आप ओवरलीफ के साथ लॉगिन या पंजीकरण कर सकते हैं। यह एक निःशुल्क सेवा है, लेकिन इसके लिए आपको कुछ विवरण देने और नियमों और शर्तों से सहमत होने की आवश्यकता होती है। 

यदि आपका ओवरलीफ खाता आपके ब्राउज़र में पहले से कैश है, तो ओवरलीफ़ एक नए टैब में खुलेगा, जिसमें कोड के साथ एक नया प्रोजेक्ट होगा। फिर आप दिए गए कोड को ओवरलीफ में संपादित कर सकते हैं जो आपके कोड को लाटेक के साथ चलाने के साथ साथ परिणामी आउटपुट या त्रुटि लॉग दिखाएगा। TeXLive.net पर संसाधित दस्तावेज़ों के विपरीत, आप अपने प्रोजेक्ट को अपने ओवरलीफ खाते में सहेज कर (Save) रख सकते हैं और बाद में उस पर वापस भी आ सकते हैं।



##### TeXLive.net सेवा का उपयोग करना

<button>TeXLive.net पर चलाएँ</button> बटन, नीचे दिए गए उदाहरण कोड को [TeXLive.net](https://texlive.net) सेवा[^1] पर सबमिट करेगा।

TeXLive.net सेवा को विशेष रूप से इस साइट के लिए विकसित किया गया था, जो
[PDF.js](https://mozilla.github.io/pdf.js/) का उपयोग करके PDF को दिखाती है खास कर उन मोबाइल और अन्य ब्राउज़रों पर जिनमें पीडीएफ को प्रदर्शित करने के लिए कोई भी 'बिल्ट इन PDF रीडर' नहीं है।

परिणामी PDF डॉक्यूमेंट (या त्रुटि लॉग का अनुभाग) उदाहरण के ठीक नीचे इनलाइन दिखाया जाएगा। आपको एक <button>डिलीट आउटपुट</button> बटन भी प्रदान किया जाएगा ताकि आप इस आउटपुट को डिलीट कर सकें (या आप इसे इसी जगह पर छोड़ कर नीचे दिए गए पाठ के बाकी हिस्से को पढ़ना जारी रख सकते हैं)।

ध्यान दें कि **TeXLive.net** को किसी भी तरह के लॉगिन या साइनअप की आवश्यकता नहीं है
इसलिए यह छोटे उदाहरणों के लिए बहुत सुविधाजनक है, लेकिन यह साइट
आपके डॉक्यूमेंट को सहेज के रखने के लिए कोई तंत्र प्रदान नहीं करती है। यदि आप पृष्ठ से हट जाते हैं तो उदाहरण में आपके द्वारा किए गए कोई भी कोड परिवर्तन भी खो जाएँगे।



##### खुद के मशीन (कंप्यूटर) पर इन्सटाल्ड TeX सिस्टम का उपयोग करना

यदि आपके पास खुद की मशीन (कंप्यूटर) पर एक TeX संपादक सिस्टम स्थापित है, तो आप इस पृष्ठ से उदाहरण कोड की प्रतिलिपि (Copy) बना सकते हैं, या तो स्पष्ट रूप से पूरा सेलेक्ट कर सकते हैं, या संपादक में 'पूरे कोड का चयन' (उदाहरण के लिए विंडोज़ में <kbd> Ctrl</kbd> + <kbd> A</kbd> <kbd> Ctrl</kbd> + <kbd> C</kbd>) कीबोर्ड शॉर्टकट का प्रयोग कर सकते हैं । यह शॉर्टकट कोड को आपके ऑपरेटिंग सिस्टम के क्लिपबोर्ड में रखेगा ताकि आप अपने लोकल संपादक का उपयोग करके एक खाली डॉक्यूमेंट शुरू कर सकें, और टेक्स्ट के रूप में कोड को लोकल संपादक में पेस्ट कर सकें।



### समस्या निवारण

हमारे उदाहरण अप-टू-डेट लाटेक इंस्टॉलेशन का उपयोग करते हैं। वे सभी हमारे दोनों ऑनलाइन डेमो सिस्टम के साथ काम करते हैं, इसलिए यदि आपको हमारे द्वारा दिए गए उदाहरणों में त्रुटियाँ मिलती हैं, तो आप को सबसे पहले यह जाँचना चाहिए कि आपका लाटेक सिस्टम अप-टू-डेट है या नहीं।


---

## TeX इंजन का चुनाव करना

कोई भी डॉक्यूमेंट सबमिट करते समय, डिफ़ॉल्ट रूप से `pdflatex` इंजन का उपयोग किया जाएगा।

You can force the choice of `latex`, `pdflatex`, `xelatex`, `lualatex`,
`platex` or `uplatex` by using a comment of the form:

`% !TEX ` _any text_ `lualatex`

where the white space at the start is optional and case is ignored as
is _any text_ between the first and last word.

This allows the form `% !TEX program=pdflatex` used by some TeX editors
but does not require the `program=` and is currently restricted to
specifying just one of the engines that are supported on
the online systems being used.

You can see an example of a comment being used to specify LuaLaTeX in
[some of the examples on this site](more-14).

If `platex` or `uplatex` is specified; then the `dvipdfmx` program is
also used to produce the PDF result from the DVI file that these variants generate.
Similarly `dvips` and `ps2pdf` are used if `latex` is specified.

If the engine is not specified in a `% !TeX` comment, then `pdflatex` will be used
unless you have specified a default TeX engine on the [Site Settings](settings) page.

---



## Choosing how to display the output

If you use the TeXLive.net system, then the PDF
output from running an example is shown using
[PDF.js](https://mozilla.github.io/pdf.js/) by default. This provides
consistent behavior over the widest range of browsers.

If you would prefer to use your browser's default PDF reader (either
its built in one, or an external application that you have configured)
then add a comment of the form:

`% !TEX ` _any text_ `pdf`

The default behavior can be explicitly specified by using `pdfjs` as
the final token. For debugging you may sometimes want the log file
returned, even if the document produces a PDF with
no errors. This can be specified by using `log` as the final token in
the comment.

As an alternative to using a `% !TeX` comment, you may specify the
site default return parameter on the [Site Settings](settings)
page. The Settings are specific to each browser, so for example you
may choose to use the default `pdfjs` setting on your mobile device,
but use `pdf` on your desktop browser to use its default PDF rendering.


---

## HTML output (make4ht, LaTeXML, lwarp)

If using the TeXLive.net system, then additional return options,
`make4ht`, `LaTeXML` or `lwarp` may be specified. These return one or more HTML pages
in the frame within the page. It may be specified at the same time
as `xelatex` or `lualatex` as well as the default `pdflatex` processing.

To enable this output, add a comment of the form:


```
% !TeX make4ht
```
{: .noedit :}


Replacing `make4ht` by `LaTeXML` or `lwarp` to specify those systems.



Alternatively you may specify `make4ht`, `LaTeXML` or `lwarp` as the default return option
on the [Site Settings](settings) page.


If using a locally installed TeX system, the same output as the `make4ht` option may be obtained
by executing

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

with the addional option `-x` or `-l` if XeLaTeX or LuaLaTeX are specified.

When running locally, other configurations would be possible. See the [make4ht
manual](https://texdoc.org/pkg/make4ht).


For `LaTeXML` to run locally, you would need to install LaTeXML (it is not part of TeX Live or MiKTeX)
and use

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Many other LaTeXML configurations are possible,
[as described in the manual](https://dlmf.nist.gov/LaTeXML/manual/).


The `lwarp` configuration is not documented here, it is somewhat experimental and subject to change.
The current version can be seen at the
[source repository](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Note that during development of the site we have also used 
      [LaTeX.Online](https://latexonline.cc/) and
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      and we thank the developers of those services for making updates to enable
      the examples on this site to be available at an early stage.


