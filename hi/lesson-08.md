---
layout: "lesson"
lang: "hi"
title: "टेबल्स"
description: "यह पाठ दिखाता है कि आप LaTeX में तालिकाएँ कैसे बना सकते हैं, कक्षों के संरेखण को कैसे प्रभावित कर सकते हैं, तालिका में नियम कैसे जोड़ सकते हैं, और कक्षों को कैसे मर्ज कर सकते हैं।"
toc-anchor-text: "LaTeX टेबल"
toc-description: "टेबल्स के साथ काम करने की मूल बातें"
---

# टेबल

<span class="summary">यह पाठ दिखाता है कि आप LaTeX में टेबल्स कैसे बना सकते हैं, कक्षों (cells) के संरेखण को कैसे प्रभावित कर सकते हैं, टेबल्स में नियम कैसे जोड़ सकते हैं, और कक्षों को कैसे मर्ज (merge) कर सकते हैं।</span>


LaTeX में टेबल्स तैयार करने के लिए `tabular` परिवेश (environment) का प्रयोग किया जाता है। इस पाठ में यह मानकर चला जाएगा कि आप `array` नामक पैकेज को लोड कर चुके हैं, जो LaTeX में टेबल्स की कार्यक्षमता को और अधिक बढ़ा देता है। यह पैकेज LaTeX के मूल (kernel) में कुछ ऐतिहासिक कारणों से अंतर्निहित नहीं किया गया है। अतः, कृपया अपने प्रीएम्बल (preamble) में निम्नलिखित पंक्ति जोड़ें, और फिर हम आगे बढ़ने को तैयार हैं:

```latex
\usepackage{array}
```
{: .noedit :}

किसी `tabular` को टाइपसेट (typeset) करने के लिए हमें LaTeX को यह बताना होता है कि कितने कॉलम (columns) आवश्यक होंगे और प्रत्येक कॉलम को कैसे संरेखित (align) किया जाना चाहिए। यह कार्य एक अनिवार्य आर्ग्युमेंट (mandatory argument) के माध्यम से किया जाता है, जिसे प्रायः टेबल का प्रीएम्बल (table preamble) कहा जाता है। यह `tabular` परिवेश (environment) के साथ प्रयोग किया जाता है, जिसमें आप कॉलम को एक-अक्षरी नामों (single-letter names) के माध्यम से निर्दिष्ट करते हैं, जिन्हें प्रीएम्बल-टोकन (preamble-tokens) कहा जाता है। उपलब्ध कॉलम प्रकार निम्नलिखित हैं:


<!-- don't line wrap this table, markdown seems to not support this -->

| type       | description |
| ---        |:-- |
| `l`        | left aligned column |
| `c`        | centered column |
| `r`        | right aligned column |
| `p{width}` | a column with fixed width `width`; the text will be automatically line wrapped and fully justified |
| `m{width}` | like `p`, but vertically centered compared to the rest of the row |
| `b{width}` | like `p`, but bottom aligned |
| `w{align}{width}` | prints the contents with a fixed `width`, silently overprinting if things get larger. You can choose the horizontal alignment using `l`, `c`, or `r`. |
| `W{align}{width}` | like `w`, but this will issue an overfull box warning if things get too wide. |


इसके अतिरिक्त, कुछ अन्य प्रीएम्बल-टोकन भी उपलब्ध हैं, जो स्वयं कोई कॉलम परिभाषित नहीं करते, परन्तु फिर भी उपयोगी हो सकते हैं:

<!-- don't line wrap this table, markdown seems to not support this -->

| type | description |
| ---  | :-- |
| `*{num}{string}` | repeats `string` for `num` times in the preamble. With this you can define multiple identical columns. |
| `>{decl}` | this will put `decl` before the contents of every cell in the following column (this is useful, e.g., to set a different font for this column) |
| `<{decl}` | this will put `decl` after the contents of each cell in the previous column |
| <span>`|`</span>  | add a vertical rule |
| `@{decl}` | replace the space between two columns with `decl` |
| `!{decl}` | add `decl` in the center of the existing space |


नीचे दीए गए दो टेबल्स LaTeX तथा array पैकेज में उपलब्ध सभी कॉलम प्रकारों को सूचीबद्ध करते हैं। कुछ अतिरिक्त कॉलम प्रकार, जो अन्य पैकेजों से लिए गए हैं, इस पाठ के अधिक विवरण पृष्ठ में प्रस्तुत किए गए हैं।

`l`, `c`, और `r` कॉलम्स प्रकारों की चौड़ाई उस सेल (कोष्ठक) की प्राकृतिक चौड़ाई के अनुसार होती है जो सबसे चौड़ा होता है। प्रत्येक कॉलम को स्पष्ट रूप से घोषित करना आवश्यक होता है, अतः यदि आप तीन केन्द्रित (centered) स्तम्भ चाहते हैं, तो आपको सारणी प्रीएम्बल में `ccc` लिखना होगा। रिक्त स्थानों (spaces) की अनदेखी की जाती है, इसलिए `ccc` और `c c c` में कोई अंतर नहीं है।

टेबल के मुख्य भाग (table body) में स्तम्भों को ampersand `&` के माध्यम से अलग किया जाता है, और प्रत्येक नई पंक्ति `\\` द्वारा आरंभ की जाती है।

अब हमारे पास अपनी पहला टेबल बनाने के लिए आवश्यक सभी जानकारी है। निम्नलिखित कोड में `&` और `\\` को एक पंक्ति में व्यवस्थित किया गया है। यद्यपि LaTeX में ऐसा करना आवश्यक नहीं है, परन्तु स्रोत (source) को पढ़ने में इससे सुविधा होती है।

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

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

यदि किसी टेबल के कॉलम में अधिक मात्रा में पाठ (text) हो, तो केवल `l`, `c` और `r` का प्रयोग करके उसे ठीक प्रकार से प्रदर्शित करना कठिन हो सकता है। निम्न उदाहरण में देखें कि क्या होता है:

<!-- {% raw %} -->

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

समस्या यह है कि `l` प्रकार का कॉलम अपने विषयवस्तु को उसकी प्राकृतिक चौड़ाई में एक ही पंक्ति में टाइपसेट करता है, भले ही पृष्ठ की सी (margin) रास्ते में बाधक बनती हो। इस समस्या से निपटने के लिए आप `p` कॉलम का उपयोग कर सकते हैं। यह कॉलम अपनी विषयवस्तु को पैराग्राफ के रूप में उस चौड़ाई में टाइपसेट करता है जिसे आप आर्ग्युमेंट के रूप में निर्दिष्ट करते हैं, और उसे ऊपरी भाग (top) पर ऊर्ध्वाधर रूप से संरेखित करता है — जो कि अधिकांश समय अपेक्षित ही होता है। ऊपर प्राप्त परिणाम की तुलना नीचे दिए गए उदाहरण से करें:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

यदि आपके टेबल में एक जैसे कई कॉलम हों, तो प्रीएम्बल में प्रत्येक स्तम्भ को अलग-अलग परिभाषित करना कठिन और असुविधाजनक हो सकता है। इस प्रक्रिया को सरल बनाने के लिए आप `*{num}{string}` का उपयोग कर सकते हैं, जो निर्दिष्ट `string` को `num` बार दोहराता है। उदाहरणस्वरूप, `*{6}{c}` का अर्थ `cccccc` के समतुल्य होता है। यह कैसे कार्य करता है, इसे दिखाने के लिए नीचे इस पाठ के पहले टेबल को इसी नए विन्यास के साथ प्रस्तुत किया गया है:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## रेखाएँ (Lines) जोड़ना

रेखाओं का उपयोग समझाने से पहले एक सुझाव देना उपयुक्त होगा — टेबल्स में रेखाओं का उपयोग बहुत सीमित रूप से करना चाहिए, और सामान्यतः ऊर्ध्व रेखाएँ (vertical lines) अव्यवसायिक सी प्रतीत होती हैं। वास्तव में, मानक टेबल्स में मानक रेखाओं का प्रयोग नहीं किया जाना चाहिए; इसके स्थान पर आपको `booktabs` पैकेज की विशेषताओं से परिचित होना चाहिए, और यही कारण है कि इसे यहाँ पहले प्रस्तुत किया जा रहा है। पूर्णता की दृष्टि से मानक रेखाएँ [more-info](more-08) पृष्ठ में दिखाई गई हैं।

`booktabs` चार प्रकार की भिन्न-भिन्न रेखाएँ प्रदान करता है। इन आदेशों का उपयोग या तो किसी पंक्ति की शुरुआत में या किसी अन्य रेखा के तुरंत बाद किया जाना चाहिए। तीन मुख्य रेखा-व्यवस्था हैं: `\toprule`, `\midrule`, और `\bottomrule`। इनके नाम से ही इनके प्रयोग का अपेक्षित स्थान स्पष्ट हो जाता है:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
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

`booktabs` द्वारा प्रदान किया गया चौथी रेखा-व्यवस्था `\cmidrule` है। इसका उपयोग ऐसी स्थिति में किया जाता है जब आप पूरे टेबल की चौड़ाई में रेखा न खींचकर केवल किसी निर्दिष्ट कॉलम-सीमा तक ही रेखा खींचना चाहते हैं। कॉलम-सीमा को एक संख्यात्मक सीमा के रूप में लिखा जाता है: `{`_संख्या_`-`_संख्या_`}` (`{`_number_`-`_number_`}`)। यदि आप केवल एक ही कॉलम के लिए रेखा खींचना चाहते हैं, तब भी आपको उसे एक सीमा के रूप में ही लिखना होगा (जिसमें दोनों संख्याएँ समान हों)।


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\cmidrule` की एक और उपयोगी विशेषता यह है कि आप इसे दोनों सिरों से संक्षिप्त कर सकते हैं, जिसके लिए एक वैकल्पिक आर्गुमेंट का उपयोग किया जाता है जिसे कोष्ठकों (parentheses) में लिखा जाता है:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

आपने अनुमान लगाया होगा कि `r` और `l` का अर्थ है कि रेखा को क्रमशः दाएँ (**r**ight) और बाएँ (**l**eft) छोर से छोटा किया जाएगा।

कभी-कभी दो पंक्तियों के बीच रेखा का प्रयोग बहुत अधिक विभाजन उत्पन्न करता है, परन्तु शायद टेक्स्ट के अर्थ को अधिक स्पष्ट रूप से प्रस्तुत करने के लिए आपको किसी प्रकार के अंतर की आवश्यकता पड़ सकती है। ऐसी स्थिति में आप `\addlinespace` का उपयोग करके एक छोटा सा रिक्त स्थान जोड़ सकते हैं।


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  \addlinespace
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## कोष्ठकों का विलयन (Merging Cells)

LaTeX में आप `\multicolumn` आदेश का उपयोग करके कोष्ठकों (cells) को क्षैतिज रूप से एकीकृत (merge) कर सकते हैं। इस आदेश का प्रयोग कोष्ठक में सबसे पहले किया जाना चाहिए। `\multicolumn` तीन आर्ग्युमेंट लेता है:

1. उन कोष्ठकों की संख्या जिन्हें विलय करना है  
2. विलय किए गए कोष्ठक का संरेखण (alignment)  
3. विलय किए गए कोष्ठक की सामग्री (contents)

संरेखण में वह सभी कुछ सम्मिलित हो सकता है जो `tabular` के प्रीएम्बल में वैध हो, परन्तु _केवल एक कॉलम प्रकार_ ही स्वीकार्य होता है।


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

आप `\multicolumn` का उपयोग एक ही कोष्ठक पर भी कर सकते हैं, ताकि उस कॉलम के लिए प्रीएम्बल में जो कुछ परिभाषित किया गया है, वह लागू न हो। निम्नलिखित उदाहरण में इसी विधि का प्रयोग करके टेबल की शीर्ष पंक्ति (head row) को केन्द्रित किया गया है:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

LaTeX में कोष्ठकों का ऊर्ध्वाधर रूप से विलयन (vertically merging) नहीं होता है। सामान्यतः, पंक्तियों में कोष्ठकों को खाली छोड़ देना ही पर्याप्त होता है, जिससे पाठक को यह स्पष्ट रूप से समझ में आ जाता है कि किसका संबंध किससे है।

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## अभ्यास

टेबल्स के साथ प्रयोग करने के लिए सरल टेबल के उदाहरण से शुरुआत करें। `l`, `c` और `r` कॉलम प्रकारों का उपयोग करके विभिन्न संरेखणो (alignments) को आज़माएँ। यह देखें कि यदि किसी टेबल-पंक्ति में बहुत कम आइटम हों तो क्या होता है? और यदि बहुत अधिक हों तो क्या परिणाम मिलता है? टेबल्स में फैलाव (span) करने के लिए `\multicolumn` कमांड का प्रयोग करके देखें कि क्या होता है।