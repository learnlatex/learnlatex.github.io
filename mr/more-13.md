---
layout: "lesson"
lang: "mr"
title: "अधिक माहिती: दीर्घ दस्तऐवजांची रचना"
description: "ह्या प्रकरणात आपण संज्ञासूची कशी छापावी व imakeidx आज्ञासंच वापरून ही प्रक्रिया स्वयंचलित कशी करावी हे आपण पाहूया."
toc-anchor-text: "अधिक माहिती: दीर्घ दस्तऐवजांची रचना"
---

## संज्ञासूची छापणे

तुमच्या दस्तऐवजाच्या स्वरूपानुसार तुम्हाला संज्ञासूची छापण्याची आवश्यकता वाटू शकते. हे काहीसे
संदर्भसूची छापण्यासारखेच आहे. ह्याकरिताही साहाय्यक धारिका निर्माण होतात. ह्या सर्व प्रक्रियेचे
स्वयंचलन `imakeidx` आज्ञासंचातर्फे होते. ह्याकरिता लाटेक्-ला तीन सूचना देण्याची गरज असते.

- `\makeindex` आज्ञा, हिच्यासह सूची तयार होते
- `\index` आज्ञा, हिच्यामुळे नोंदी तयार करता येतात
- `\printindex` आज्ञा, हिच्यामुळे सूची छापली जाते

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

इथे आपण सूचीची दोन वैशिष्ट्ये पाहिली आहेत. `!` ह्या चिन्हासह उपविभाग तयार करणे. तसेच
अनुक्रमित सूचीतील मजकुरापेक्षा काही वेगळे लिहिण्यासाठी `@` ह्या चिन्हाचा वापर. ह्यात आणखी
बरेच बदल करता येऊ शकतात. उदाहरणे चालवून पाहा.
