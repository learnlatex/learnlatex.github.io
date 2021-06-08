---
layout: "lesson"
lang: "mr"
title: "अधिक माहिती: कोष्टके"
description: "ह्या प्रकरणात कोष्टकांचे रूप अधिकाधिक इष्ट कसे करावे ह्यासाठीचे निरनिराळे मार्ग सांगितले आहेत. त्यांमध्ये स्तंभविषयक सोयी, मोकळ्या जागेचे नियंत्रण व काही आज्ञासंचांची ओळख हे समाविष्ट आहे."
toc-anchor-text: "अधिक माहिती: कोष्टके"
---

## tabular क्षेत्राची अतिरिक्त प्राचले

मुख्य प्रकरणात सर्व माहिती देणे शक्य नसल्यामुळे ह्या प्रकरणात आपण उर्वरित प्राचलांची माहिती
सोदाहरण पाहूया. हे प्रकरण वाचण्यापूर्वी मुख्य प्रकरणातील कोष्टकाची उजळणी करणे उपयुक्त ठरू
शकेल. स्थाननिश्चितीची `m`, `b`, `w` व `W` ही प्राचले तिथल्या माहितीवरून बऱ्यापैकी स्पष्ट
आहेतच. नसल्यास उदाहरणांतील स्थाननिश्चितीची प्राचले बदलून त्यांवर प्रयोग करून हे शिकून घेता येऊ
शकते. ज्यांना उदाहरणांची आवश्यकता आहे, ती प्राचले म्हणजे `>`, `<`, `@`, `!` व `|`.

### स्तंभाची शैली तयार करणे

`>` व `<` ह्यांचा वापर चौकटींच्या पूर्वी व नंतर करावयाच्या अक्षरजुळणीविषयक आज्ञांसाठी उपयुक्त
ठरतो. संपूर्ण स्तंभाचे रूप बदलणाऱ्या आज्ञांचा वापर ह्यांसह करता येतो. पहिला स्तंभ इटालीय अक्षरांत
छापण्याकरिता व त्याच्या प्रत्येक नोंदीनंतर द्विबिंदू (:) टाकण्याकरिता पुढील प्रकारे आज्ञावली
लिहिता येऊ शकते.

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

`\itshape` आज्ञेसह तिच्यानंतर येणारा सर्व मजकूर इटालीय वळणात लिहिला जातो, परंतु ह्या आज्ञेचा
प्रभाव केवळ त्या चौकटीपुरताच लागू आहे. ह्याबाबत अधिक तपशील आपण [लवकरच](lesson-11)
पाहणार आहोत.

ह्याच स्तंभातील पहिल्या ओळीतील मजकुरावर हा प्रभाव असू नये असेही तुम्हाला वाटू शकते, कारण
पहिली ओळ ही शीर्षकाची असते. अशा वेळी `\multicolumn` आज्ञेसह ठरावीक चौकटीची जुळणी बदलता
येऊ शकते.

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

### स्तंभांमधील मोकळ्या जागेचे नियंत्रण

लाटेक्-तर्फे प्रत्येक स्तंभाच्या आजूबाजूला मोकळी जागा सोडली जाते. ही जागा `\tabcolsep` ह्या
आज्ञेसह ठरवली जाते. ही जागा स्तंभाच्या दोन्ही बाजूंना सोडली जात असल्यामुळे ह्या आज्ञेच्या
कार्यघटकातील मापाच्या दुप्पट जागा दोन स्तंभांमध्ये सुटलेली दिसते. `\setlength` ह्या दोन
कार्यघटक असलेल्या आज्ञेसह हे माप बदलता येऊ शकते.

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

ह्या मोकळ्या जागे ऐवजी काही वेगळे हवे असेल, तर तेदेखील टाकता येते. त्याकरिता `@` हे चिन्ह
वापरून त्यापुढे विशिष्ट आज्ञावली लिहावी. त्यामुळे सोडल्या जाणाऱ्या मोकळ्या जागेऐवजी तुम्ही
कार्यघटकात लिहिलेली आज्ञावली तिथे छापली जाते.

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

(`\hspace` म्हणजे काय हे आपण [लवकरच](lesson-11) पाहूया. तुम्हाला कदाचित ह्याचा अंदाज
लागला असेलच की ही आज्ञा आडवी मोकळी जागा सोडते.)

`!` हे प्राचल काहीसे हेच कार्य करते, परंतु फरक असा आहे की ह्या प्राचलास दिलेल्या कार्यघटकातील
सामग्री स्तंभांमधील जागेच्या मध्यस्थानी छापली जाते.

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


### उभ्या रेषा

काही वेळा कोष्टकात उभ्या रेषा असणे अनिवार्य असते.

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

`|` ह्या प्राचलाचे कार्य काहीसे `!` ह्या प्राचलासारखेच आहे, फरक इतकाच की त्यामुळे येणारे फलित
निश्चित आहे व ते म्हणजे उभी रेषा, परंतु ह्याचा एक दुष्परिणाम असा की ह्या उभ्या रेषा `booktabs`
आज्ञासंचाच्या आडव्या रेषांसोबत चालू शकत नाहीत. लाटेक्-तर्फे पुरवल्या जाणाऱ्या आडव्या रेषांचा वापर
मात्र करता येऊ शकतो.

- `\hline` (`\toprule`, `\midrule` व `\bottomrule` ह्यांकरिता पर्यायी)
- `\cline` (`\cmidrule` हिच्याकरिता पर्यायी). 

उभ्या रेषांची उंची एकूण स्तंभाच्या उंचीइतकीच असते.

## `booktabs`मधील रेषा

`booktabs` आज्ञासंचातील सर्व रेषा व `\addlinespace` ही आज्ञा एक वैकल्पिक कार्यघटक घेऊ शकते
ज्यामध्ये त्या ओळीची जाडी लिहिता येऊ शकते. तसेच `\cmidrule` आज्ञेच्या फलित-रेषेला एका बाजूने
कापण्यासाठी वापरल्या जाणाऱ्या `r` अथवा `l` ह्या प्राचलांसमोर महिरपी कंसांत किती कापले जावे
ह्याची मापे लिहिता येऊ शकतात.

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

## संख्यांची मांडणी

आकड्यांच्या मांडणीकरिता `S` हे `siunitx` ह्या आज्ञासंचातर्फे पुरवले जाणारे प्राचल उपयुक्त ठरते.

संख्यांच्या दोन स्तंभांची मांडणी पुढील उदाहरणात पाहा.

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

लक्षात ठेवा अशा प्रकारच्या स्तंभांमध्ये जर संख्येतर घटक लिहायचे असतील, तर त्यांना महिरपी कंसांत
"सुरक्षित" पद्धतीने लिहावे लागते.

`siunitx` आज्ञासंचातर्फे आकड्यांची अक्षरजुळणी करण्याकरिता निरनिराळ्या पद्धती पुरवल्या
जातात. त्या पाहण्याकरिता त्यांची [हस्तपुस्तिका](https://texdoc.org/pkg/siunitx) पाहा.

## कोष्टकांची एकूण रुंदी ठरवणे

`tabular` क्षेत्राची रुंदी त्यातील सामग्रीच्या रुंदीनुसार आपोआप ठरवली जातेे. ह्या रुंदीत बदल
करण्यासाठी वापरल्या जाणाऱ्या दोन पद्धती आहेत.

कोष्टकाची रुंदी नियंत्रित करणे हे कायम श्रेयस्कर ठरते. संपूर्ण कोष्टकाची रुंदी `\resizebox`
सारख्या आज्ञा वापरून बदलणे थोडे धोकादायक असते, कारण त्यामुळे टंक व रेषांची मापे अनियमित होऊ
शकतात.

### `tabular*`

`tabular*` हे क्षेत्र रुंदीकरिता एक अधिकचा कार्यघटक स्वीकारते. त्या कार्यघटकात कोष्टकाची एकूण
रुंदी भरणे आवश्यक आहे. ह्या क्षेत्रात अधिकची मोकळी जागा `\extracolsep` ह्या आज्ञेद्वारे घातली
जाऊ शकते. ही मोकळी जागा त्या आज्ञेनंतर येणाऱ्या प्रत्येक स्तंभानंतर सोडली जाते. ह्या आज्ञेचा
कार्यघटक `\fill` असणे खूप उपयुक्त. ही जागेची एक विशेष आज्ञा आहे. हिच्यातर्फे "आवश्यक" तेवढी
जागा सोडली जाते.

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

`tabularx` क्षेत्र ह्या नावाच्याच आज्ञासंचातर्फे पुरवले जाते. ह्याचे कार्य `tabular*`सारखेच आहे,
परंतु स्तंभांमधील मोकळी जागा नियंत्रित करण्याऐवजी ह्या क्षेत्राद्वारे `X` नावाचा स्तंभप्रकार
पुरवला जातो, परंतु त्याची रुंदी स्वयंनिश्चित होते.

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

ह्या आज्ञासंचातर्फे तयार होणाऱ्या कोष्टकाच्या वापरावर काही मर्यादा आहेत, तसेच ते पूर्ण
करण्याकरिता अनेक वेळा प्रयोग करून अंतिम रूप निश्चित करावे लागते. ह्याबाबत अधिक माहितीसाठी
त्यांची [हस्तपुस्तिका](https://texdoc.org/pkg/tabularx) पाहा.

## एकाहून अधिक पृष्ठांवर चालणारे कोष्टक

`tabular` क्षेत्राद्वारे तयार होणारे कोष्टक अविभाज्य असते व त्यामुळे ते एका पानावर राहील
इतक्या उंचीचेच असावे लागते.

अनेक पानांवर चालणारे कोष्टक तयार करण्यासाठी निरनिराळे आज्ञासंच उपलब्ध आहेत. इथे आम्ही
`longtable` आज्ञासंचाचे उदाहरण दाखवत आहोत.

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

`longtable` ह्या आज्ञासंचातर्फे कोष्टकांच्या स्तंभांची रुंदी टिकवली जाते. त्यामुळले कितीही पृष्ठ
चालणारे कोष्टक असले, तरी त्यातील कोणत्याही स्तंभाची रुंदी त्या संपूर्ण स्तंभातील सर्वात रुंद
मजकुराइतकी असते. हे साधण्याकरिता धारिकेस दोन वेळा चालवावे लागू शकते.

## कोष्टकांतील टिप्पण्या

तळटिपांप्रमाणेच कोष्टकांतील सामग्रीविषयी टीपा देण्याची गरज पडू शकते. `threeparttable`
आज्ञासंचातर्फे हे सोपे केले जाते. ह्या आज्ञासंचाच्या क्षमता जाणून घेण्याकरिता त्याची
[हस्तपुस्तिका](https://texdoc.org/pkg/threeparttable) पाहा. आम्ही इथे एक सोपे उदाहरण
दाखवतो आहोत.

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

## अरुंद स्तंभांमध्ये अक्षरजुळणी करणे

ओळतोडीची मूळ यंत्रणा तुलनेने रुंद ओळींची अपेक्षा करते. अन्यथा मजकूर नीट छापला जात नाही, परंतु
अशी परिस्थिती ओढवल्यास काय करावे ह्याचे काही मार्ग पुढील उदाहरणात दाखवले आहेत. पहिल्या
कोष्टकात शब्दांमधील जागा वाढवली गेली आहे व त्यामुळे टेक्-तर्फे एक सूचना देण्यात आली आहे.
`\raggedright` ही आज्ञा वापरून ह्या समस्येचा तोडगा काढता येऊ शकतो, परंतु ह्यामुळे काही ओळी
अती उजवीकडे आहेत असे भासू शकते. `\RaggedRight` ही `ragged2e` आज्ञासंचातील आज्ञा एक तडजोड
आहे. ह्या आज्ञेतर्फे संयोगचिन्हांचा वापर व शब्दांना उजवीकडे ढकलणे दोन्ही शक्य आहे. उदाहरणातील
तिसरे कोष्टक पाहा.

`\arraybackslash` आज्ञेचा प्रयोग पाहा. ह्या आज्ञेतर्फे `\\` ह्या आज्ञ़ेचा अर्थ ठरवला जातो.

आणखी एक मार्ग चौथ्या उदाहरणात दाखवण्यात आला आहे. तो म्हणजे टंकाचा आकार कमी
करण्याचा. त्यामुळे कोष्टकाची रुंदी नियंत्रित राहते.

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

## नवीन स्तंभप्रकार घडवणे

[मुख्य प्रकरणात](lesson-08) पाहिल्याप्रमाणे `array` आज्ञासंचासह `>{\bfseries}c` ठळक
अक्षरांसह मध्यभागी मांडला गेलेला स्तंभ तयार करता येऊ शकतो. अशा प्रकारचा स्तंभ वारंवार
वापरायचा असेल, तर `tabular`च्या कार्यघटकात वापरता येईल असे विशेष प्राचल आपल्याला तयारही
करता येते. उदा.

```latex
\newcolumntype{B}{>{\bfseries}c}
```

ह्यासह `B` नावाचे प्राचल कार्यघटकात लिहिता येेऊ शकेल.

## काही कॢप्त्या

दोन ओळींना एकमेकांत मिसळण्यापेक्षा कोष्टकामधील एका ओळीत आणखी छोटे कोष्टक समाविष्ट करणे ही
कॢप्ती कधी कधी अपेक्षित परिणाम साधू शकते.

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


लक्षात ठेवा की `tabular` क्षेत्राच्या वैकल्पिक कार्यघटकात `t`, `c` अथवा `b` ही स्थानविशिष्ट
प्राचले शीर्ष, मध्य अथवा तलस्थानी कोष्टक छापण्यासाठी वापरता येऊ शकतात. उदा.

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

## कोष्टकांतील ओळींमधील अंतर

`\addlinespace` आज्ञेसकट सोडली जाणारी अधिकची जागा आपण मुख्य प्रकरणात पाहिलीच, परंतु
सर्वच कोष्टकांमधील ओळींमधील अंतर एकत्र वाढवायचे असेल तर दोन मार्ग आहेत.

`\arraystretch` ही लाटेक्-मधील आज्ञा व `\extrarowheight` ही `array` आज्ञासंचातील
आज्ञा.

```latex
\renewcommand\arraystretch{1.5}
```

ह्या आज्ञेमार्फत तलरेषेची उंची ५०% वाढवली जाते.

परंतु `\hline` वापरत असताना पूर्ण ओळीची उंची वाढवणे अधिक उचित ठरते. तलरेषेकडून वाढवण्याने
काही वाईट परिणाम फलितात होऊ शकतात. पुढील उदाहरणातील `\extrarowheight` आज्ञेचा वापर
पाहा.

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
