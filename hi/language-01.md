---
layout: "lesson"
lang: "en"
title: "हिंदी भाषा की विशेषताएँ"
description: "इस अध्याय में कुछ अनुशंसाएँ दी गई हैं जो हिंदी भाषा में LaTeX-डॉक्यूमेंट बनाने में उपयोगी होंगी।"
next: "extra-01"
toc-anchor-text: "हिंदी भाषा की विशेषताएँ"
toc-description: "हिंदी में LaTeX के साथ टाइपसेटिंग"
---

# हिंदी भाषा की विशेषताएँ

<span class="summary">इस अध्याय में कुछ अनुशंसाएँ दी गई हैं जो हिंदी भाषा में LaTeX-डॉक्यूमेंट बनाने में उपयोगी होंगी।</span>


LaTeX एक शक्तिशाली टाइपसेटिंग सिस्टम है, जिसे वैज्ञानिक और गणितीय डाक्यूमेंट्स को उच्च गुणवत्ता में तैयार करने के लिए जाना जाता है। हालाँकि, यह मूल रूप से अंग्रेज़ी भाषा के लिए बनाया गया था, लेकिन अब यूनिकोड सपोर्ट और कुछ विशेष इंजन जैसे LuaLaTeX और XeLaTeX के माध्यम से हिंदी सहित देवनागरी लिपि में भी डॉक्यूमेंट तैयार किए जा सकते हैं। नीचे दिए गए कोड-उदाहरणों में LuaLatex इंजन का चयन इस लाइन **%!TeX program = lualatex** का प्रयोग करके किया गया है। अगर आप इस लाइन को हटाकर सीधे ही कोड-उदाहरण को चलाना चाहते हैं तो [सेटिंग्स पृष्ठ](settings) से डिफ़ॉल्ट इंजन के रूप में LuaLaTex का चयन भी कर सकते हैं।

यह लेख आपको बताएगा कि हिंदी में LaTeX डॉक्यूमेंट कैसे बनाया जाए — आवश्यक पैकेज से लेकर फॉण्ट चयन और कोड के उदाहरणों तक।

---

## आवश्यकताएँ

1. LaTeX वितरण — जैसे कि [TeX Live](https://www.tug.org/texlive/), [MiKTeX](https://miktex.org/) या [Overleaf](https://www.overleaf.com/) (ऑनलाइन)
2. Unicode समर्थित इंजन — LuaLaTeX या XeLaTeX
3. UTF-8 एन्कोडिंग वाला टेक्स्ट एडिटर (जैसे TeXstudio, VS Code)
4. हिंदी यूनिकोड फॉण्ट — जैसे कि Shobhika, Lohit Devanagari, आदि

---

## उपयोग किए जाने वाले मुख्य पैकेज

| पैकेज | उपयोग |
|-------|-------|
| `fontspec` | यूनिकोड फॉण्ट का चयन |
| `polyglossia` | बहुभाषी सपोर्ट (हिंदी के लिए) |
| `babel` | वैकल्पिक बहुभाषी पैकेज (XeLaTeX में कम उपयुक्त) |


## `polyglossia` के साथ हिंदी में एक सरल LuaLaTeX डॉक्यूमेंट उदाहरण

```latex
%!TeX program = lualatex
\documentclass{article}
\usepackage{fontspec}
\usepackage{polyglossia}
\setmainlanguage{hindi}
\newfontfamily\devanagarifont[Script=Devanagari]{Shobhika} % आप यहाँ कोई और यूनिकोड फॉण्ट भी चुन सकते हैं

\begin{document}

\section{परिचय}
यह एक सरल \LaTeX{} डॉक्यूमेंट है जो हिंदी (देवनागरी लिपि) में टाइपसेट किया गया है। इसमें हम यह देखेंगे कि यूनिकोड और शोभिका फॉण्ट की सहायता से LaTeX में हिंदी कैसे लिखी जा सकती है।

\end{document}
```

हालाँकि `babel` हिंदी के लिए उतना अच्छा सपोर्ट नहीं देता जितना `polyglossia`, फिर भी यदि आप `babel` के साथ हिंदी इस्तेमाल करना चाहते हैं, तो आप इस प्रकार से प्रयोग कर सकते हैं। आपको अपने डॉक्यूमेंट के शुरुवात में **\begin{document}** के पहले ये कोड जोड़ना होगा।

```latex
%!TeX program = lualatex
\documentclass{article}
\usepackage[hindi]{babel} % Hindi language with babel
\usepackage{fontspec} % Fontspec for Devanagari fonts
\setmainfont[Script=Devanagari]{Lohit Devanagari} % Replace with Shobhika etc. if desired
```

ऊपर दिए गए कोड में यह सुनिश्चित करना आवश्यक है कि Lohit Devanagari फॉण्ट आपके प्रोजेक्ट में उपलब्ध हो। वैकल्पिक रूप से, आप Noto Serif Devanagari का भी उपयोग कर सकते हैं। चूंकि हम यहाँ TeXLive.net प्लेटफॉर्म पर सभी कोड उदाहरण चला रहे हैं, और इस प्लेटफॉर्म पर ये दोनों फॉण्ट उपलब्ध नहीं हैं, अतः babel पैकेज के साथ कोड को सफलतापूर्वक चलाने हेतु \setmainfont{FreeSerif} फॉण्ट का प्रयोग किया गया है।


```latex
%!TeX program = lualatex
\documentclass{article}
\usepackage[hindi]{babel}

\usepackage{fontspec} % Fontspec for Devanagari fonts (LuaLaTeX)
\setmainfont{FreeSerif} % Font for Successful Compilation at TexLive

\begin{document}

\section{परिचय}
यह उदाहरण \texttt{babel} पैकेज का उपयोग करके हिंदी में LaTeX डॉक्यूमेंट तैयार करने का तरीका दिखाता है। इस डॉक्यूमेंट में हिंदी लिपि और यूनिकोड फॉण्ट्स का प्रयोग किया गया है।

\section{विशेषताएँ}
\begin{itemize}
  \item यूनिकोड सपोर्ट
  \item \texttt{babel} द्वारा कुछ स्वचालित अनुवाद
  \item देवनागरी लिपि में लेखन
\end{itemize}

\end{document}
```

आपने ध्यान दिया होगा कि `babel` के साथ हिंदी के लिए आपको कितने सारे वर्कअराउंड करने पड़ते हैं क्योंकि `babel` का हिंदी सपोर्ट सीमित है। साथ में आपको अपेक्षित पीडीएफ भी प्राप्त नहीं हुआ है। इसमें यह भी है कि `babel` स्वचालित रूप से "Table of Contents" को "अनुक्रमणिका" में बदलना आदि कार्य भी स्वयं नहीं करता है। अगर आपको अधिक बेहतर देवनागरी रेंडरिंग, स्वचालित अनुवाद और भाषाई सटीकता चाहिए तो `polyglossia` बेहतर विकल्प है। यदि आप `pdfLaTeX` का उपयोग कर रहे हैं तो आपको यूनिकोड सपोर्ट के लिए `inputenc` और `devanagari` जैसे पैकेजों की ओर जाना होगा, जो अपेक्षाकृत पुरानी पद्धति मानी जाती है।

---

## फॉण्ट विकल्प

आप नीचे दिए गए किसी भी हिंदी यूनिकोड फॉण्ट का उपयोग कर सकते हैं:

- Shobhika – शास्त्रीय देवनागरी फॉण्ट, सुंदर और स्पष्ट
- Lohit Devanagari – ओपन सोर्स फॉण्ट, सरल और पठनीय
- Sanskrit 2003 – संस्कृत/हिंदी दोनों के लिए उपयुक्त
- Noto Sans Devanagari – Google द्वारा विकसित, सुंदर और आधुनिक

---

##  गणितीय सूत्रों के साथ हिंदी

LaTeX का मुख्य आकर्षण उसकी गणितीय क्षमताएँ हैं। आप हिंदी टेक्स्ट के साथ भी गणितीय फॉर्मूले लिख सकते हैं:

```latex
%!TeX program = lualatex
\documentclass{article}
\usepackage{fontspec}
\usepackage{polyglossia}
\setmainlanguage{hindi}
\newfontfamily\devanagarifont[Script=Devanagari]{Shobhika}

\begin{document}

\section{गणितीय उदाहरण}
यहाँ पर हम एक समीकरण प्रस्तुत कर रहे हैं:

\[
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]


\section{निष्कर्ष}
यह द्विघात समीकरण का सामान्य हल है।

\end{document}
```
---

## Overleaf पर हिंदी डॉक्यूमेंट
यदि आप कोई सॉफ्टवेयर इंस्टॉल नहीं करना चाहते, तो आप [Overleaf](https://www.overleaf.com/) जैसे ऑनलाइन LaTeX संपादकों का उपयोग कर सकते हैं। वहाँ पर XeLaTeX को चयनित कर के ऊपर दिया गया कोड सीधे चलाया जा सकता है।

---

## सामान्य समस्याएँ और समाधान

| समस्या | समाधान |
|--------|---------|
| देवनागरी अक्षर गलत दिखते हैं | फॉण्ट सपोर्ट की जाँच करें; `fontspec` और `Script=Devanagari` अनिवार्य है |
| हिंदी शब्दों में टुकड़े-टुकड़े अक्षर | यूनिकोड एन्कोडिंग (UTF-8) फाइल सेव करते समय सुनिश्चित करें |
| "Missing character" त्रुटि | सही इंजन चुनें (XeLaTeX या LuaLaTeX) |


---

## निष्कर्ष

LaTeX अब केवल अंग्रेजी तक सीमित नहीं रहा। हिंदी में उच्च गुणवत्ता वाले डॉक्यूमेंट तैयार करना संभव है, वह भी वैज्ञानिक ढंग से। थोड़ी सी तैयारी और सही टूल्स का प्रयोग कर के आप अपने लेख, शोध-पत्र, और रिपोर्ट्स को हिंदी में सहजता से तैयार कर सकते हैं। 
