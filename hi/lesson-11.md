---
layout: "lesson"
lang: "hi"
title: "स्वरूपण: फॉण्ट और स्पेसिंग"
description: "यह पाठ दिखाता है कि किसी डॉक्यूमेंट में 'रिक्ति देने वाले तत्वों (spacing elements)' को कैसे बदला जाए और LaTeX स्रोत में स्पष्ट स्वरूपण निर्देश (formatting instruction) कैसे जोड़े जाएँ।"
toc-anchor-text: "फॉण्ट और स्पेसिंग"
toc-description: "प्रस्तुति के लिए टेक्स्ट का स्वरूपण"
---

# स्वरूपण: फॉण्ट और स्पेसिंग

<span class="summary">यह पाठ दिखाता है कि किसी डॉक्यूमेंट में 'रिक्ति देने वाले तत्वों (spacing elements)' को कैसे बदला जाए और LaTeX स्रोत में स्पष्ट स्वरूपण निर्देश (formatting instruction) कैसे जोड़े जाएँ।</span>

हम पहले देख चुके हैं कि यदि आप अपने इनपुट (input) में एक खाली पंक्ति (blank line) छोड़ देते हैं, तो LaTeX उसे एक नया अनुच्छेद (paragraph) मान लेता है। इसका संकेत यह होता है कि हर नया अनुच्छेद इंडेंट (indent) से शुरू होता है (अनुच्छेद के इंडेंट होने का अर्थ है पृष्ठ के नार्मल बाएँ मार्जिन का अनुच्छेद के लिए और दाएँ खिसक जाना)।



## अनुच्छेदों के बीच रिक्ति (Paragraph spacing)
एक सामान्य शैली यह है कि अनुच्छेदों की शुरुआत में कोई इंडेंट न हो, बल्कि उनके बीच एक खाली पंक्ति (blank line) छोड़ दी जाए। इसे हम `parskip` पैकेज का उपयोग करके प्राप्त कर सकते हैं।

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Just for some filler text
\begin{document}
\lipsum
\end{document}
```


## नई पंक्ति लेने के लिए विवश करना (Forcing a new line)

अधिकतर स्थितियों में, आपको LaTeX में जबरदस्ती नई पंक्ति (new line) नहीं लानी चाहिए। जैसा कि हमने अभी देखा, आप आमतौर पर या तो नया अनुच्छेद (paragraph) शुरू करना चाहते हैं, या `parskip` पैकेज का उपयोग करके अनुच्छेदों के बीच एक 'खाली पंक्ति' डालना चाहते हैं।

कुछ _विशेष_ परिस्थितियाँ ऐसी होती हैं जहाँ बिना नया अनुच्छेद बनाए, आप `\\` का उपयोग करके नई पंक्ति शुरू कर सकते हैं:

- तालिका (table) की पंक्तियों के अंत में  
- `center` एनवायरनमेंट के भीतर  
- कविता (poetry) जैसे `verse` एनवायरनमेंट में  

इन विशेष परिस्थितियों के अलावा, यदि आप इनसे बाहर हैं तो आपको `\\` का प्रयोग _नहीं_ करना चाहिए।



## स्पष्ट रूप से रिक्त स्थान जोड़ना (Adding explicit space)

हम `\,` कमांड का उपयोग करके एक पतला रिक्त स्थान (thin space) जोड़ सकते हैं, जो सामान्य रिक्त स्थान की लगभग आधी मोटाई का होता है।

गणित मोड (math mode) में अन्य विकल्प भी उपलब्ध हैं, जैसे:  
- `\.` (बहुत पतला रिक्त स्थान)  
- `\:` (मध्यम रिक्त स्थान)  
- `\;` (थोड़ा अधिक रिक्त स्थान)  
- और `\!` (ऋणात्मक रिक्त स्थान या negative space, जो स्थान को थोड़ा घटाता है)।

बहुत ही विशेष परिस्थितियों में — जैसे कि शीर्षक पृष्ठ (title page) बनाते समय — या आपको क्षैतिज (horizontal) या ऊर्ध्वाधर (vertical) रिक्त स्थान को स्पष्ट रूप से जोड़ने की आवश्यकता हो जाए, तब आप `\hspace` और `\vspace` कमांड्स का उपयोग कर सकते हैं।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some text \hspace{1cm} more text.

\vspace{10cm}

Even more text.
\end{document}
```

## टेक्स्ट का स्पष्ट स्वरूपण (formatting)

हमने [पाठ 3 में](lesson-03) लिखा था कि अधिकतर समय आपका डॉक्यूमेंट एक तर्कसंगत संरचना के साथ होना चाहिए। लेकिन कभी-कभी आप पाठ को गाढ़ा, तिरछा, या एकरूपी आदि बनाना चाहते हैं।

इसके लिए दो प्रकार के कमांड होते हैं: पहला 'पाठ के छोटे-छोटे टेक्स्ट्स के लिए', और दूसरा 'किसी ऐसी स्थिति में जहाँ अनुच्छेद के मध्य आपको कुछ फोर्मेटिंग करनी पड़ जाए' (इसे हम टेक्स्ट की प्रवाहमान स्थिति कह सकते हैं)।

पाठ के छोटे-छोटे टेक्स्ट्स के लिए हम `\textbf`, `\textit`, `\textrm`, `\textsf`, `\texttt` और `\textsc` का उपयोग करते हैं।

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Let's have some font fun: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

प्रवाहमान टेक्स्ट के लिए, हम ऐसे कमांड्स का उपयोग करते हैं जो फॉण्ट सेटअप को बदलते हैं; उदाहरण के लिए `\bfseries` और `\itshape`। चूँकि ये कमांड स्वयं 'रुकते' नहीं हैं, इसलिए यदि हम नहीं चाहते कि इनका प्रभाव पूरे दस्तावेज़ पर पड़े, तो हमें इन्हें एक _समूह_ (group) में रखना होता है। LaTeX एनवायरनमेंट्स 'समूह' होते हैं, जैसे कि टेबल्स के कक्ष होते हैं, या हम `{...}` का प्रयोग करके भी LaTeX में स्पष्ट रूप से समूह बना सकते हैं।

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

{\itshape

This text is italic.

So it this: the effect is not limited to a paragraph.

}
\end{document}
```

हम फॉण्ट के आकार को भी इसी प्रकार निर्धारित कर सकते हैं; ये सभी कमांड्स प्रवाहमान रूप से कार्य करते हैं। निर्धारित किए गए आकार सापेक्ष होते हैं। इसका अर्थ यह है कि सामान्यतः आपके नार्मल टेक्स्ट का जो भी साइज़ होता है, उसके सापेक्ष जिस टेक्स्ट को आप `\huge`, `\large`, `\normalsize`, `\small` और `\footnotesize` आदि एनवायरनमेंट में रखते हैं, उन टेक्स्ट्स का आकार खुद से प्रयुक्त हो जाता है। यह महत्वपूर्ण है कि फॉण्ट आकार को पुनः बदलने से _पहले_ अनुच्छेद को समाप्त किया जाए; देखें कि यहाँ हम एक स्पष्ट `\par` (अनुच्छेद विभाजन) जोड़ते हैं।

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

\begin{center}
{\itshape\large Some text\par}
Normal text
{\bfseries\small Much smaller text\par}
\end{center}

\end{document}
```


## अभ्यास

स्वतः स्वरूपण (manual formatting) के साथ स्व-प्रयोग करें: एक `titlepage` एनवायरनमेंट बनाएँ और विभिन्न रिक्त स्थानों तथा फॉण्ट परिवर्तनों को सम्मिलित करने का प्रयास करें। जब हम फॉण्ट परिवर्तनों को एक साथ मिलाते हैं तो क्या होता है? यह गणित मोड की तुलना में कैसा है?

यदि आप किसी बड़े अनुच्छेद का फॉण्ट आकार बदलते हैं (पहले `\tiny`, फिर `\huge` का प्रयास करें) लेकिन समूह को बंद करने से पहले अंतिम `\par` नहीं देते हैं, तो क्या होता है?
