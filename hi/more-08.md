---
layout: "lesson"
lang: "hi"
title: "अधिक जानकारी: टेबल्स (तालिका)"
description: "यह पाठ कॉलम को स्टाइल करके, स्पेसिंग और नियमों को बदलकर टेबल्स (तालिका) को अनुकूलित करने के अधिक तरीके दिखाता है, तथा अन्य पैकेज दिखाता है जो तालिकाओं को विभिन्न एक्सटेंशन प्रदान करते हैं।"
toc-anchor-text: "अधिक जानकारी: टेबल्स (तालिका)"
---


## प्रीएम्बल (preamble) की अन्य सामग्री

चूँकि इस पाठ में सभी उपलब्ध प्रीएम्बल टोकन शामिल नहीं किए गए थे, इसलिए कुछ अन्य टोकनों को यहाँ उदाहरणों के साथ समझाया गया है। आप चाहें तो पाठ की शुरुआत में दी गई तालिकाओं को दोबारा देख सकते हैं, ताकि उपलब्ध विकल्पों का एक समग्र दृष्टिकोण मिल सके। वहाँ दिए गए छोटे विवरण पर्याप्त हैं यह समझने के लिए कि `l`, `c`, `r`, और `p` को समझने के बाद `m`, `b`, `w`, और `W` कॉलम टाइप्स क्या करते हैं। यदि फिर भी स्पष्ट न हो, तो आप इनके साथ थोड़ा प्रयोग करके देख सकते हैं। अब तक हमने जिन टोकनों की बात नहीं की, वे हैं — `>`, `<`, `@`, `!`, और `|`, जो कि प्रीएम्बल में उपयोग होने वाले उपयोगी टोकन हैं।



### किसी कॉलम को स्टाइल देना

`>` और `<` टोकन का उपयोग किसी कॉलम की सेल सामग्री से पहले या बाद में कुछ जोड़ने के लिए किया जा सकता है। इसका प्रयोग कॉलम की उपस्थिति को बदलने के लिए किया जा सकता है। उदाहरण के लिए, यदि आप पहली कॉलम की सारी सामग्री को *italic* (तिरछा) करना चाहते हैं और हर आइटम के बाद कॉलन (:) लगाना चाहते हैं, तो आप निम्नलिखित तरीका अपना सकते हैं:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape` कमांड आगे आने वाले पूरे टेक्स्ट को italic (तिरछा) बना देता है,लेकिन इसका प्रभाव सिर्फ उस टेबल सेल तक ही सीमित रहता है।
हम कुछ पाठों के बाद lesson-11 में मैनुअल फ़ॉन्ट फॉर्मेटिंग के बारे में विस्तार से जानेंगे।

यदि आप नहीं चाहते कि पहली सेल (जो आमतौर पर टेबल का शीर्षक/हेड होता है) इस फॉर्मेटिंग से प्रभावित हो, तो आप वहाँ `\multicolumn` का उपयोग कर सकते हैं। ध्यान रखें कि `\multicolumn` का उपयोग किसी एक सेल की alignment (पंक्तिबद्धता) बदलने के लिए भी किया जा सकता है, जैसा कि नीचे उदाहरण में दिखाया गया है।

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### कॉलम्स के बीच की जगह को नियंत्रित करना
आमतौर पर LaTeX हर कॉलम के दोनों तरफ थोड़ी जगह (space) देता है, ताकि टेबल संतुलित और स्पष्ट दिखे। यह जगह `\tabcolsep` नामक लंबाई (length) से परिभाषित होती है। चूँकि प्रत्येक कॉलम के दोनों ओर padding (अंतर) होता है, इसलिए टेबल की बाहरी किनारों पर एक-एक `\tabcolsep` होता है,
और दो कॉलमों के बीच कुल `2\tabcolsep` की जगह बनती है — एक प्रत्येक कॉलम से।

आप इस जगह को अपनी आवश्यकता अनुसार बदल सकते हैं, इसके लिए `\setlength` कमांड का उपयोग किया जाता है:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

आप `@` टोकन का उपयोग करके कॉलम्स के बीच की जगह को अपनी पसंद के अनुसार बदल सकते हैं। इससे दो कॉलमों के बीच या टेबल के किनारों पर दी जाने वाली डिफ़ॉल्ट padding हट जाती है,और उसकी जगह आप जो चाहें वह सामग्री (जैसे टेक्स्ट, स्पेस, या कोई प्रतीक) डाल सकते हैं। आप जो भी चीज़ कॉलम्स के बीच दिखाना चाहते हैं, उसे @{...} में तर्क (argument) के रूप में लिख सकते हैं।

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(हम `\hspace` को [थोड़ी ही देर में](lesson-11) फिर से देखेंगे; आप शायद अंदाज़ा लगा सकते हैं कि यह क्षैतिज (horizontal) जगह जोड़ने के लिए होता है।) 

`!` प्रीएम्बल टोकन भी कुछ हद तक वैसा ही काम करता है। फर्क बस इतना है कि यह दिए गए तर्क (argument) को दो कॉलमों के बीच की खाली जगह के बीच में जोड़ता है।

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### वर्टिकल नियम

कभी-कभी आपको वर्टिकल नियमों का उपयोग करना पड़ सकता है।


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal & Food  & Size   \\[2pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

आपने शायद ध्यान दिया हो कि `|` का व्यवहार `!{decl}` जैसा ही लगता है — यह दो कॉलमों के बीच एक *लंबवत रेखा* (vertical rule) जोड़ता है, और डिफ़ॉल्ट padding को वैसे ही रहने देता है। हालाँकि, इसका एक बड़ा नुकसान है: लंबवत रेखाएँ `booktabs` पैकेज द्वारा दी गई क्षैतिज रेखाओं (horizontal rules) के साथ ठीक से काम नहीं करतीं।  

यदि आप `booktabs` का उपयोग नहीं कर रहे हैं, तो LaTeX की पारंपरिक क्षैतिज रेखाओं का उपयोग कर सकते हैं, जैसे:  
- `\hline` — यह `\toprule`, `\midrule`, और `\bottomrule` के समकक्ष है  
- `\cline` — यह `\cmidrule` की तरह काम करता है  

जैसा कि ऊपर दिखाया गया है, लंबवत रेखाएँ `\\` कमांड के वैकल्पिक आर्ग्युमेंट में दी गई किसी भी अतिरिक्त ऊँचाई को पूरा कवर करती हैं।



## `booktabs` रूल्स को कस्टमाइज करना

`booktabs` द्वारा प्रदान की गई सभी रेखाएँ (`\toprule`, `\midrule`, `\bottomrule` आदि) और `\addlinespace` एक वैकल्पिक कोष्ठकयुक्त (bracketed) आर्ग्युमेंट स्वीकार करते हैं, जिससे आप रेखा की मोटाई (thickness) तय कर सकते हैं। इसके अलावा, `\cmidrule` में किनारों की कटाई (trimming) को भी नियंत्रित किया जा सकता है — इसके लिए `l` या `r` के बाद कोष्ठकों `{}` में कोई लंबाई (length) दी जा सकती है।

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## कॉलम में सही ढंग से संरेखण (Numeric Alignment)

टेबल में संख्याओं को सही ढंग से संरेखित (align) करने के लिए `siunitx` पैकेज द्वारा दिया गया `S` कॉलम टाइप इस्तेमाल किया जाता है।

यदि आप दो कॉलमों में संख्याएँ इस प्रकार संरेखित करना चाहें कि दशमलव बिंदु (decimal point) के अनुसार सभी संख्याएँ सीधी दिखाई दें, तो एक साधारण उदाहरण कुछ इस तरह होगा:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Values} &  {More Values} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```


ध्यान दें कि कोई भी गैर-संख्यात्मक सेल (non-numeric cell) को ब्रेसेज़ `{}` में रखकर "सुरक्षित" करना आवश्यक होता है।

`siunitx` पैकेज संख्याओं को विभिन्न तरीकों से फॉर्मेट करने के कई विकल्प प्रदान करता है। अधिक जानकारी के लिए [पैकेज डाक्यूमेंटेशन](https://texdoc.org/pkg/siunitx) देखें।



## पूरी टेबल की चौड़ाई निर्धारित करना

`tabular` वातावरण की चौड़ाई सामान्यतः टेबल की सामग्री के अनुसार अपने आप तय हो जाती है। यदि आप टेबल की कुल चौड़ाई अलग से तय करना चाहते हैं, तो इसके लिए दो आमतौर पर उपयोग किए जाने वाले तरीके हैं।

ध्यान रखें कि टेबल को नीचे बताए गए तरीके से किसी निश्चित चौड़ाई में फॉर्मेट करना अधिक उपयुक्त होता है (आवश्यक हो तो `\small` जैसे छोटे फ़ॉन्ट साइज़ का प्रयोग करें), बजाय इसके कि आप `\resizebox` जैसे कमांड्स से टेबल को स्केल करें, जो फ़ॉन्ट साइज और रूल की मोटाई को असंगत बना सकते हैं।


### `tabular*`

`tabular*` वातावरण एक अतिरिक्त *चौड़ाई (width)* आर्ग्युमेंट लेता है, जिससे आप टेबल की कुल चौड़ाई निर्धारित कर सकते हैं। इस वातावरण में *लचीलापन देने के लिए* `\extracolsep` कमांड का उपयोग किया जाता है। यह अतिरिक्त स्पेस उस बिंदु से शुरू होकर सभी कॉलमों के बीच जोड़ा जाता है। आमतौर पर इसे `\fill` के साथ प्रयोग किया जाता है, जो एक विशेष प्रकार का स्पेस होता है जो आवश्यकतानुसार जितना चाहिए उतना फैल सकता है।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```


### `tabularx`

`tabularx` वातावरण, जो इसी नाम के पैकेज द्वारा प्रदान किया जाता है, `tabular*` की तरह ही दिखने वाला सिंटैक्स रखता है, लेकिन यह कॉलम्स के बीच की जगह (inter-column space) को समायोजित करने के बजाय  `X` नामक नए कॉलम टाइप की चौड़ाई को समायोजित करता है। `X` कॉलम टाइप दरअसल `p{...}` जैसा ही होता है, लेकिन इसकी चौड़ाई अपने आप (स्वतः) तय होती है, ताकि पूरी टेबल दी गई कुल चौड़ाई में समा सके।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

`tabularx` वातावरण अन्य फॉर्म्स की तुलना में थोड़ा अलग व्यवहार करता है, क्योंकि यह अंतिम रूप से टेबल की चौड़ाई तय करने के लिए पहले कुछ बार अलग-अलग चौड़ाइयों के साथ टेबल को *अस्थायी रूप से* टाइपसेट करता है। इस कारण, इस वातावरण के उपयोग पर कुछ सीमाएँ होती हैं। विस्तृत जानकारी के लिए [पैकेज डाक्यूमेंटेशन](https://texdoc.org/pkg/tabularx) देखें।


## एक से अधिक पृष्ठों में फैली हुई तालिकाएँ (Multi-page Tables)
`tabular` वातावरण एक *अखंड बॉक्स* (unbreakable box) बनाता है, इसलिए यह केवल तभी प्रयोग किया जा सकता है जब पूरी तालिका एक ही पृष्ठ में समा सके। अक्सर इसे एक फ्लोटिंग `table` वातावरण के भीतर रखा जाता है।

कुछ पैकेज ऐसे विकल्प प्रदान करते हैं जिनका सिंटैक्स लगभग `tabular` जैसा ही होता है, लेकिन वे टेबल को पृष्ठों में बाँटने की सुविधा भी देते हैं। यहाँ हम `longtable` पैकेज का उपयोग दिखाते हैं:


```latex
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Entry & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
A Wider Entry & b\\  
\end{longtable}

\end{document}
```

`longtable` की विशेषता यह है कि यह टेबल की कॉलम चौड़ाइयों को सभी पृष्ठों में समान बनाए रखता है। हालाँकि, ऐसा करने के लिए LaTeX को डॉक्यूमेंट को कई बार कंपाइल करना पड़ सकता है, ताकि यदि बाद के पृष्ठों में कोई चौड़ा कंटेंट हो तो उसकी वजह से पहले के कॉलम की चौड़ाई भी समायोजित की जा सके।



## तालिका के नोट्स (Table Notes)

अक्सर टेबल में ऐसे चिन्हों (जैसे फ़ुटनोट) की आवश्यकता होती है जो नीचे दिए गए स्पष्टीकरण या नोट्स की ओर संकेत करते हैं।

`threeparttable` पैकेज इस प्रकार की तालिकाओं के लिए मार्कअप को सरल बना देता है। यह सुनिश्चित करता है कि नोट्स उसी चौड़ाई के एक ब्लॉक में दिखाई दें, जितनी चौड़ाई टेबल की हो। विस्तृत जानकारी के लिए [पैकेज डाक्यूमेंटेशन](https://texdoc.org/pkg/threeparttable) देखें। हालाँकि, हम यहाँ एक सरल उदाहरण प्रस्तुत करते हैं।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```


## संकरे कॉलमों में टेक्स्ट टाइपसेट करना

डिफ़ॉल्ट लाइन ब्रेकिंग सेटिंग्स अपेक्षाकृत लंबी पंक्तियों के लिए बनाई गई होती हैं, ताकि लाइन ब्रेक चुनने में थोड़ी लचीलापन (flexibility) बनी रहे। नीचे दिया गया उदाहरण कुछ संभावित उपाय दर्शाता है। पहली तालिका में शब्दों के बीच की जगह (interword spacing) खींची गई है, और TeX "Underfull lines" की चेतावनी देता है। `\raggedright` का उपयोग आमतौर पर इस समस्या से बचा सकता है, लेकिन इससे कुछ पंक्तियाँ बहुत असमान (ragged) भी दिख सकती हैं। `ragged2e` पैकेज का `\RaggedRight` कमांड एक संतुलित समाधान है: यह पंक्तियों में कुछ असमानता की अनुमति देता है, लेकिन जहाँ ज़रूरी हो वहाँ शब्दों को विभाजित (hyphenate) भी कर सकता है, जैसा कि तीसरी तालिका में दिखाया गया है।

यहाँ `\arraybackslash` के उपयोग पर ध्यान दें — यह `\\` कमांड की परिभाषा को पुनः सेट करता है ताकि वह टेबल की पंक्ति को सही ढंग से समाप्त कर सके।

एक वैकल्पिक तकनीक, जैसा कि चौथी तालिका में दिखाया गया है, यह है कि आप फ़ॉन्ट का आकार छोटा कर दें, ताकि कॉलम उतने संकरे न लगें और टेक्स्ट बेहतर फिट हो सके।


```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\end{table}

\end{document}
```


## नए कॉलम प्रकार (Column Types) परिभाषित करना

जैसा कि [मुख्य पाठ](lesson-08) में दिखाया गया है, `array` पैकेज ऐसी संरचनाओं को अनुमति देता है जैसे `>{\bfseries}c`, जो एक *मोटा (bold)* और *केन्द्रित (centered)* कॉलम दर्शाता है। ऐसे उपयोग को सरल बनाने के लिए, एक नया कॉलम टाइप परिभाषित करना सुविधाजनक होता है। उदाहरण के लिए:

```latex
\newcolumntype{B}{>{\bfseries}c}
```

यह आपको टेबल की प्रीएम्बल में `B` का उपयोग करने की अनुमति देता है, जिससे वह कॉलम स्वतः ही मोटा और केन्द्रित बन जाएगा।


## वर्टिकल ट्रिक्स (ऊर्ध्वाधर युक्तियाँ)
कई बार, किसी सेल को कई पंक्तियों (rows) में फैलाने की बजाय, एक ही पंक्ति में कुछ सेल्स को ऊर्ध्वाधर रूप से विभाजित करना अधिक उचित होता है। यह कार्य *नेस्टेड `tabular` वातावरण* (nested tabular environments) के उपयोग से किया जा सकता है।


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

ध्यान दें कि आप `tabular` में एक वैकल्पिक आर्ग्युमेंट के माध्यम से ऊर्ध्वाधर संरेखण (vertical alignment) को नियंत्रित कर सकते हैं। यह आर्ग्युमेंट `t`, `c`, या `b` को स्वीकार करता है, जो क्रमशः शीर्ष (top), मध्य (centered), या नीचे (bottom) संरेखण को दर्शाते हैं। इसका उपयोग इस प्रकार किया जाता है:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## तालिकाओं में पंक्ति-अंतर (Line Spacing)

मुख्य पाठ में हमने `booktabs` पैकेज के `\addlinespace` कमांड का उपयोग दिखाया था, जो किसी विशेष पंक्ति के बाद अतिरिक्त जगह जोड़ने के लिए उपयोगी होता है। टेबल की पंक्तियों के बीच की दूरी नियंत्रित करने के दो सामान्य पैरामीटर होते हैं:  
- `\arraystretch`  
- `\extrarowheight` (यह `array` पैकेज से आता है)


```latex
\renewcommand\arraystretch{1.5}
```


यह 50% तक *बेसलाइन स्पेसिंग* (baseline spacing) बढ़ा देगा।

अक्सर, विशेष रूप से जब आप `\hline` का उपयोग कर रहे हों, तो केवल पंक्तियों की ऊँचाई बढ़ाना अधिक उपयुक्त होता है, बिना बेसलाइन के नीचे की गहराई को बढ़ाए। नीचे दिया गया उदाहरण `\extrarowheight` पैरामीटर के उपयोग को दर्शाता है।

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
