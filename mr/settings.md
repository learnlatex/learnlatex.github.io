---
layout: "page"
lang: "mr"
title: प्राधान्ये
permalink: /mr/settings
---
# संकेतस्थळावरील प्राधान्ये

## स्मृती तयार करण्यासाठीची परवानगी

स्मृतींमुळे वापरकर्त्यांच्या काही आवडीनिवडी संकेतस्थळातर्फे जतन करून ठेवल्या जातात व वापरकर्त्यांना
संकेतस्थळाचा सुलभ वापर करता येतो. आमच्या संकेतस्थळातर्फे कोणत्याही स्मृती परवानगीशिवाय तयार
केल्या जात नाहीत, परंतु तुम्हाला काही स्मृती तयार करून संकेतस्थळावरील अभ्यासक्रमाचा अधिक सोपा
वापर करता येईल.

जर अशा स्मृती तयार करण्याची परवानगी आम्हाला देण्याकरिता पुढील कळ दाबा.

{% include settings-accept.html 
   accept="स्मृती तयार करा"
   reset= "स्मृती पुसून टाका"
%}

## फलित दाखवण्याची मूलभूत आज्ञावली

TeXLive.net ह्या आज्ञावलीने `% !TeX` ह्या प्रकारच्या सूचना नसताना वापरावी अशी मूलभूत आज्ञावली.

{% include settings-return.html %}


## मूलभूत चालक

TeXLive.net ह्या आज्ञावलीतर्फे अथवा ओव्हरलीफतर्फे `% !TeX` अशी कोणतीही विशिष्ट सूचना
वापरली नसताना जो चालक वापरावा त्याविषयीचे तुमचे प्राधान्य. (`-dev` व `context` हे पर्याय
ओव्हरलीफसह वापरले जाऊ नयेत.)

{% include settings-engine.html %}


## मजकूर-संपादकाचा देखावा
एस ह्या संकेतस्थळावर समाविष्ट मजकूर-संपादकाचा मूलभूत देखावा निवडणे.

{% include settings-acetheme.html %}

कोडमिरर-६ ह्या मजकूर-संपादकासाठीची रंगछटा (गडद/उजळ).

{% include settings-cm6theme.html %}
