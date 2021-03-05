---
layout: "lesson"
lang: "mr"
title: "कोष्टके"
description: "ह्या प्रकरणात लाटेक् आज्ञावलीचा वापर करून कोष्टके कशी काढण्यात यावीत हे शिकवले गेले आहे. त्यासोबतच कोष्टकातील चौकटींची आडवी मांडणी, कोष्टकात रेषांचा वापर करणे व कोष्टकातील दोन चौकटी एकमेकांत जोडून घेणे हे सर्व कसे करावे ह्याचे प्रशिक्षणही देण्यात आले आहे."
toc-anchor-text: "कोष्टके"
toc-description: "लाटेक्-सह कोष्टके तयार करण्याचे प्रशिक्षण"
---

# कोष्टके

<span class="summary">
ह्या प्रकरणात लाटेक् आज्ञावलीचा वापर करून कोष्टके कशी काढण्यात यावीत हे शिकवले गेले
आहे. त्यासोबतच कोष्टकातील चौकटींची आडवी मांडणी, कोष्टकात रेषांचा वापर करणे व कोष्टकातील
दोन चौकटी एकमेकांत जोडून घेणे हे सर्व कसे करावे ह्याचे प्रशिक्षणही देण्यात आले आहे.
</span>

लाटेक्-सह कोष्टके तयार करण्याकरिता `tabular` हे क्षेत्र वापरले जाते. ह्या प्रकरणात असे गृहीत
धरले जाईल की तुम्ही `array` आज्ञासंचाचा वापर करत आहात. हा आज्ञासंच लाटेक्-कोष्टकांना अधिक
कार्यक्षम करतो, परंतु काही ऐतिहासिक कारणांमुळे ह्या आज्ञासंचाचा समावेश मूळ लाटेक्-आज्ञावलीत केला
गेला नाही आहे. त्याकरिता पुढील आज्ञा तुमच्या बीजधारिकेच्या आज्ञापीठात लिहा.

```latex
\usepackage{array}
```
{: .noedit :}

कोष्टकाची निर्मिती करण्याकरिता त्या कोष्टकात किती स्तंभ लागणार आहेत व त्यांची आडवी मांडणी
कशी असणार आहे हे लाटेक्-ला आज्ञावलीमार्फत सांगावे लागते. ह्यासाठी `tabular` ह्या क्षेत्रास एक
अनिवार्य कार्यघटक द्यावा लागतो. ह्याकरिता एका अक्षराची काही प्राचले वापरता
येतात. `tabular` क्षेत्रास पुढील अक्षरांच्या प्राचलांसह स्तंभसंख्या सांगणारा कार्यघटक पुरवता येतो.

<!-- don't line wrap this table, markdown seems to not support this -->

| प्रकार       | वर्णन |
| ---        |:-- |
| `l`        | डावीकडे मजकुराची मांडणी असलेला स्तंभ |
| `c`        | मध्यभागी मजकुराची मांडणी असलेला स्तंभ |
| `r`        | उजवीकडे मजकुराची मांडणी असलेला स्तंभ |
| `p{<रुंदी>}` | <रुंदी> ह्या किंमतीसह स्पष्ट केलेल्या रुंदीचा स्तंभ. ह्यातील मजकूर निर्दिष्ट रुंदीहून जास्त असेल, तर ओळ तुटून उर्वरित मजकूर आपोआप खाली लिहिले जाते. |
| `m{<रुंदी>}` | `p` ह्या प्राचलाप्रमाणेच, परंतु उभी मांडणी मध्यभागी केली जाते. |
| `b{<रुंदी>}` | `p` ह्या प्राचलाप्रमाणेच, परंतु उभी मांडणी ओळीच्या तळाशी केली जाते. |
| `w{<मांडणी>}{<रुंदी>}` | निर्दिष्ट रुंदीइतका मजकूर छापते, जर मजकूर वाढू लागला, तर तो मुद्रित भागावर छापला जाण्याची शक्यता आहे. आडव्या मांडणीकरिता `l`, `c` व `r` ही प्राचले वापरली जाऊ शकतात. |
| `W{<मांडणी>}{<रुंदी>}` | हे प्राचल `w`प्रमाणेच काम करते, परंतु मजकूर नेमून दिलेल्या जागेहून अधिक असल्यास ह्यासह overfull boxची एक सूचना मिळू शकते |

ह्यांव्यतिरिक्त काही आणखी प्राचले आहेत, त्यांमुळे स्तंभनिश्चिती होईलच असे नाही, परंतु ती उपयुक्त असू
शकतात. 

<!-- don't line wrap this table, markdown seems to not support this -->

| प्रकार | वर्णन |
| ---  | :-- |
| `*{आकडा}{प्राचल}` | ह्या प्राचलाचा वापर केल्यास निर्दिष्ट केलेले `प्राचल` दिलेल्या `आकड्या`इतक्या वेळा `tabular` क्षेत्राच्या कार्यघटकात समाविष्ट केले जाते. ह्या प्रकारच्या आज्ञेसह एकाच प्रकारच्या स्तंभाची अनेक प्राचले लिहिणे सोयीचे जाते. उदा. ४ वेळा `c` हा स्तंभप्रकार लिहिण्याकरिता `*{4}{c}` |
| `>{घोषणा}` | ह्या प्राचलाचा वापर केल्यास कार्यघटकात लिहिलेली `घोषणा` त्या विशिष्ट स्तंभातील प्रत्येक चौकटीच्या सामग्रीआधी घातली जाते. (एका विशिष्ट स्तंभातील सर्व अक्षरे ठळक करण्याकरिता, तिरकी करण्याकरिता अथवा अन्य काही मजकूरविशिष्ट आज्ञांसह छापण्याकरिता ही व्यवस्था उपयुक्त ठरते.) |
| `<{घोषणा}` | ह्या प्राचलाचा वापर केल्यास कार्यघटकात लिहिलेली `घोषणा` त्या विशिष्ट स्तंभातील प्रत्येक चौकटीच्या सामग्रीनंदर घातली जाते. |
| <span>`|`</span>  | दोन स्तंभांमध्ये उभी रेषा आखण्याकरिता |
| `@{घोषणा}` | दोन स्तंभांमधील मोकळ्या जागेऐवजी कार्यघटकात लिहिलेली `घोषणा` ह्या कार्यघटकात लिहिलेल्या आज्ञा चालवणे. |
| `!{घोषणा}` | दोन स्तंभांमधील मोकळ्या जागेच्या बरोब्बर मध्यावर `घोषणा` ह्या कार्यघटकात लिहिलेल्या आज्ञा चालवणे. |

वरील दोन कोष्टकांसह लाटेक्-कोष्टकांमधील व `array` ह्या आज्ञासंचासह पुरवल्या जाणाऱ्या सर्व
स्तंभप्रकारांची नोंद घेण्यात आली आहे. ह्या प्रकरणाच्या [अधिक माहितीत](more-08) काही इतर
आज्ञासंचांतर्फे पुरवले जाणारे स्तंभप्रकार नोंदवले आहेत.

`l`, `c`, व `r` हे स्तंभप्रकार त्या स्तंभातील सर्वात रुंद चौकटीइतक्या लांबीचे रुंदीचे
असतात. प्रत्येक स्तंभासाठी एखादा स्तंभप्रकार घोषित करावाच लागतो, त्यामुळे तीन आडवी मांडणी
असणारे स्तंभ हवे असल्यास `tabular` क्षेत्राच्या कार्यघटकात `ccc` लिहिणे आवश्यक. मोकळ्या जागा
दुर्लक्षित केल्या जातात, त्यामुळे `c c c` असे लिहिले, तरी तेदेखील तसेच कार्य करते.

`tabular` क्षेत्राच्या आत स्तंभ संपवण्याकरिता `&` हे चिन्ह वापरले जाते व ओळ संपवण्याकरिता
`\\` हे.

लाटेक्-सह कोष्टक तयार करण्याकरिता आवश्यक अशी सर्व माहिती आपण पाहिली. पुढील आज्ञावली ह्याचे
एक उदाहरण म्हणून पाहा. ह्या आज्ञावलीत `&` व `\\` हे एका स्तंभात असल्याप्रमाणेच सुटसुटीत
लिहिले आहेत. लाटेक्-आज्ञावलीच्या दृष्टीने ह्यांची आवश्यकता नसते, परंतु असे लिहिल्यामुळे बीजआज्ञावलीचे
वाचन सुलभ होते.

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

एखाद्या कोष्टकात पुष्कळ मजकूर असेल, तर केवळ `l`, `c` व `r` ह्यांसह त्याची जुळणी करणे इष्ट
नाही. त्याने अडचणी निर्माण होऊ शकतात. पुढील आज्ञावलीचे फलित पाहा.

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

ह्या आज्ञावलीत अडचण अशी आहे की `l` ह्या प्राचलासह तयार करण्यात आलेल्या स्तंभातील सामग्री
छापणे पृष्ठ संपले तरी थांबत नाही. त्या सामग्रीच्या नैसर्गिक रुंदीइतकी जागा हे प्राचल घेते. हे
टाळण्याकरिता `p` ह्या प्राचलासह स्तंभ तयार करणे जास्त उचित. ह्या प्राचलासह कार्यघटकात
निर्दिष्ट केलेल्या रुंदीइतका मजकूर परिच्छेदासारखा छापला जातो. बहुतांश वेळा अशा परिस्थितीत
इष्टतम असते तशी चौकटीतील मजकुराची उभी मांडणी तिच्या शीर्षस्थानी असते. पुढील आज्ञावलीचे फलित
पाहा.

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

कोष्टकात एकच स्तंभप्रकार अनेक वेळा येत असेल, तर त्याची व्याख्या अनेक वेळा लिहिणे कटकटीचे वाटू
शकते. हे सोपे करण्यासाठी `*{आकडा}{प्राचल}` ही आज्ञावली वापरून निर्दिष्ट आकड्याइतक्या वेळा
ठरावीक प्राचल पुनरावृत्त करू शकता. त्यामुळे `*{6}{c}`चा अर्थ `cccccc` असा होतो. हे कसे घडते
हे पाहण्याकरिता पुढील उदाहरण पाहा.

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

## रेषांचा वापर

कोष्टकांमध्ये रेषांचा वापर कसा करावा हे सांगण्यापूर्वी एक सल्ला. कोष्टकात रेषांचा वापर कमीत कमी
असणे अधिक इष्ट मानले जाते. विशेषतः कोष्टकात वापरल्या जाणाऱ्या उभ्या रेघा ह्या सद्य
सौंदर्यमूल्यांप्रमाणे फारशा चांगल्या दिसत नाहीत. तसेच उत्कृष्ट कोष्टकांसाठी लाटेक्-तर्फे मिळणाऱ्या
रेषांचा वापर करूच नये. `booktabs` आज्ञासंचाद्वारे पुरवण्यात येणाऱ्या सुविधा शिकून घ्याव्यात. ह्या
प्रकरणात त्यांची ओळख आपण करून घेत आहोत. लाटेक्-आज्ञावलीतील रेषांची माहिती ह्या प्रकरणाच्या
[अधिक माहितीत](more-08) देण्यात आली आहे.

`booktabs` ह्या आज्ञासंचातर्फे चार प्रकारच्या रेषा पुरवल्या जातात. त्यांपैकी प्रत्येक आज्ञा
ओळीच्या सुरुवातीला वापरली जावी अथवा दुसऱ्या एखाद्या रेषेनंतर वापरावी. रेषांकरिता तीन आज्ञा
उपलब्ध आहेत, त्या पुढीलप्रमाणे.

* `\toprule` - शीर्षरेषा
* `\midrule` - मध्यरेषा
* `\bottomrule` - तलरेषा

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

`booktabs` आज्ञासंचातर्फे पुरवली जाणारी चौथी रेषेची आज्ञा `\cmidrule` ही आहे. ह्या
आज्ञेमार्फत कोष्टकातील दोन ओळींमध्ये अशी रेेष आखता येेते जी सर्व स्तंभांच्या रुंदीची नाही. ह्या रेषेची
रुंदी कार्यघटकात नमूद केलेल्या स्तंभांच्या रुंदीइतकी असते. हे स्तंभ संयोगचिन्हासह पुढीलप्रमाणे लिहिले
जातात. `{`**स्तंभक्रमांक-क**`-`**स्तंभक्रमांक-ख**`}`. ह्यामुळे 'स्तंभक्रमांक क'पासून 'ख'पर्यंत रेषा
आखली जाते. एकाच स्तंभापुरती रेष आखायची असेल, तरी संयोगचिन्हाच्या दोन्ही बाजूंना तेच आकडे टाकावे
लागतात. (वरील उदाहरणात `**स्तंभक्रमांक-क**`-`**स्तंभक्रमांक-क**`)

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

ह्या आज्ञेसह एक अधिकचे वैशिष्ट्य पुरवले जाते. त्यात दोन्ही बाजूंनी रेषेची रुंदी कमी करता
येते. ह्यासाठीची प्राचले वैकल्पिक कार्यघटक म्हणून चौकटी कंसात लिहावी लागतात. पुढील उदाहरण
पाहा.

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

`r` हे प्राचल रेषेची रुंदी उजवीकडून कमी करण्यासाठी, `l` हे प्राचल रेषेची रुंदी डावीकडून कमी
करण्यासाठी.

काही वेळा रेषेने दोन ओळींना वेगळं करण्याची गरज नसते, परंतु दोन ओळींना वेगळं करण्याची किंचित गरज
असते, अशा वेळी `\addlinespace` ह्या आज्ञेसह लहानशी मोकळी जागा सोडता येते.

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

## चौकटींना एकमेकांत मिसळणे

एका ओळीतील दोन चौकटींना एकमेकांत मिसळण्यासाठी `\multicolumn` ही आज्ञा वापरली जाते.
चौकटीच्या सुरुवातीलाच ह्या आज्ञेचा प्रयोग करावा लागतो. ह्या आज्ञेस तीन अनिवार्य कार्यघटक
आहेत.

1. एका ओळीतील जितक्या चौकटी एकमेकांत मिसळायच्या आहेत तो आकडा
2. आडव्या मांडणीचे स्थान
3. एकमेकांत मिसळलेल्या मोठ्या चौकटीतील सामग्री

`tabular` क्षेत्राच्या कार्यघटकातील आडव्या मांडणीचे कोणतेही प्राचल ह्या आज्ञेच्या दुसऱ्या
कार्यघटकात चालू शकते, परंतु ते एकटे वापरले जायला हवे.

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

`\multicolumn` ह्या आज्ञेचा वापर एकाच चौकटीपुरता करून, स्तंभासाठी निवडलेल्या सोयींमध्ये त्या
एका चौकटीपुरते बदल करता येतात. पुढील उदाहरणात कोष्टकाच्या शीर्षओळीतील आडवी मांडणी
मध्यभागी करण्यासाठी ह्या आज्ञेचा उपयोग केला आहे.

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

स्तंभातील दोन चौकटींना एकमेकांत मिसळणे लाटेक्-च्या मूळ आज्ञावलीसह शक्य नाही. त्याकरिता अधिकचे
आज्ञासंच वापरावे लागू शकतात. बहुतांश वेळा स्तंभातील चौकटी एकमेकांत मिसळून त्यांची एक ओळ
बनवण्यापेक्षा स्तंभात मोकळ्या चौकटी सोडणे पुरेसे ठरते. पुढील उदाहरण पाहा.

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


## स्वाध्याय

ह्या प्रकरणातील कोष्टकांची साधी उदाहरणे बदलून पाहा व त्यांवर अधिकाधिक प्रयोग करा. आडव्या
मांडणीत बदल करून पाहा. जर एखाद्या ओळीत फार कमी घटक असतील तर काय होते? ह्याउलट एखाद्या
ओळीत खूप घटक असतील तर काय होते? `\multicolumn` आज्ञेचा वापर करून चौकटींना जोडून पाहा.
