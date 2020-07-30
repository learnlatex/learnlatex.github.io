var buttons ={
"edit":             "संपादन",
"copy":             "नक्कल",
"Open in Overleaf": "ओव्हरलीफमध्ये उघडा",
"LaTeX Online":     "लाटेक् ऑनलाईन",
"Delete Output":    "फलित काढून टाका",
"Compiling PDF":    "पीडीएफ् धारिका तयार होत आहे"
}


function openinoverleaf(nd) {
var fm = document.getElementById('form-' + nd);
fm.innerHTML="";
var p = document.getElementById(nd);
//ace    var t = p.innerText;
var t = editors[nd].getValue();
addinput(fm,"encoded_snip[]","\n" + t);
addinput(fm,"snip_name[]","document.tex");
if(t.indexOf("{marathi}") != -1) {
addinput(fm,"encoded_snip[]","%%\n%% This is file `marathi.sty',\n%% generated with the docstrip utility.\n%%\n%% The original source files were:\n%%\n%% marathi.dtx  (with options: `package')\n%% \n%% -------------------------------------------------------------------------\n%% आज्ञासंच:      marathi\n%% लेखक:       निरंजन\n%% आवृत्ती:      १.२  (१६ जून, २०२०)\n%% माहिती:  लुआ-लाटेक् व झी-लाटेक् ह्यांच्यासह मराठीचा सुलभ वापर करण्यासाठी.\n%% दुवा:   https://gitlab.com/niranjanvikastambe/marathi\n%% अडचणी:  https://gitlab.com/niranjanvikastambe/marathi/-/issues\n%% परवाना:      लाटेक् प्रकल्प परवाना. आवृत्ती १.३सी किंवा त्यापुढील.\n%% अधिक माहितीकरिता marathi.dtx ही बीज-धारिका पाहा.\n%% ---------------------------------------------------------------------------\n%% हे काम लाटेक् प्रकल्प परवान्याच्या (१.३सी अथवा त्यापुढील) अटींचे पालन करून वितरित केले जाऊ शकते\n%% तसेच सुधारले जाऊ शकते.\n%% \n%% ह्या परवान्याची नवीनतम प्रत खालील दुव्यावर उपलब्ध आहे.\n%% \n%% http://www.latex-project.org/lppl.txt.\n%% \n%% हा आज्ञासंचाची लाटेक् प्रकल्पाच्या नियमांनुसार देखरेख केली जात आहे.\n%% \n%% ह्या आज्ञासंचाचा लेखक व पालक निरंजन आहे.\n%% \n%% ह्या कामात marathi.dtx, marathi.ins तसेच त्यांपासून निर्माण केलेली\n%% marathi.sty ही धारिका समाविष्ट आहे.\n%% --------------------------------------------------------------------------\n%% Package:      marathi\n%% Author:       Niranjan\n%% Version:      1.2  (16 June, 2020)\n%% Description:  For conveniently typesetting Marathi language with LuaLaTeX and XeLaTeX.\n%% Repository:   https://gitlab.com/niranjanvikastambe/marathi\n%% Bug tracker:  https://gitlab.com/niranjanvikastambe/marathi/-/issues\n%% License:      The LaTeX Project Public License v1.3c or later.\n%% ---------------------------------------------------------------------------\n%% \n\\def\\marathiPackageName{marathi}\n\\def\\marathiPackageVersion{१.२}\n\\def\\marathiPackageDate{१६ जून, २०२०}\n\\def\\marathiPackageDescription{लुआ-लाटेक् व झी-लाटेक् ह्यांच्यासह मराठीचा सुलभ वापर करण्यासाठी. इथून पुढे लाटेक्-वरील मराठीच्या स्थानिकीकरणाचे काम ह्या आज्ञासंचामार्फत केले जाईल. तूर्त expex व blindtext ह्या आज्ञासंचांचे स्थानिकीकरण ह्या आज्ञासंचामार्फत पुरवले आहे.}\n\n\\ProvidesPackage{marathi}\n\\NeedsTeXFormat{LaTeX2e}\n\\RequirePackage{setspace}\n\\RequirePackage{pgfkeys}\n\n\\def\\बदल#1{\\pgfkeys{marathi/.cd,#1}}\n\\pgfkeys{\n    marathi/.is family,marathi/.cd,\n    अंतर/.code={\\setstretch{#1}\\selectfont},\n    अंतर=1.5,\n    अंतर/.default=1\n}\n\n\\DeclareOption*{\\expandafter\\बदल\\expandafter{\\CurrentOption}}\n\\ProcessOptions\n\\providecommand{\\अंतरबदल}[1]{\\बदल{अंतर=#1}}\n\\def\\arraystretch{1.2}\n\\@ifclassloaded{standalone}{\\RequirePackage{fontspec}}{}\n\\RequirePackage{iftex}\n\n\\ifluatex\n\n\\usepackage{babel}\n\\babelprovide[import, main, maparabic, mapdigits,\ncounters/swar = अ आ इ ई उ ऊ ए ऐ ओ औ अं अः ॲ ऋ ऌ ऑ ,\nalph=swar,\ncounters/anka = एक दोन तीन चार पाच सहा सात आठ नऊ दहा अकरा बारा\nतेरा चौदा पंधरा सोळा सतरा अठरा एकोणीस वीस एकवीस बावीस तेवीस\nचोवीस पंचवीस सव्वीस सत्तावीस अठ्ठावीस एकोणतीस तीस एकतीस बत्तीस\nतेहतीस चौतीस पस्तीस छत्तीस सदतीस अडतीस एकोणचाळीस चाळीस\nएकेचाळीस बेचाळीस त्रेचाळीस चव्वेचाळीस पंचेचाळीस शेहेचाळीस सत्तेचाळीस\nअठ्ठेचाळीस एकोणपन्नास पन्नास एकावन्न बावन्न त्रेपन्न चौपन्न पंचावन्न छप्पन्न\nसत्तावन्न अठ्ठावन्न एकोणसाठ साठ एकसष्ट बासष्ट त्रेसष्ट चौसष्ट पासष्ट सहासष्ट\nसदुष्ट अडुसष्ट एकोणसत्तर सत्तर एकाहत्तर बाहत्तर त्र्याहत्तर चौऱ्याहत्तर पंचाहत्तर\nशाहत्तर सत्त्याहत्तर अठ्ठ्याहत्तर एकोणऐंशी ऐंशी एक्याऐंशी ब्याऐंशी त्र्याऐंशी\nचौऱ्याऐंशी पंच्याऐंशी श्याऐंशी सत्त्याऐंशी अठ्ठ्याऐंशी एकोणनव्वद नव्वद एक्याण्णव\nब्याण्णव त्र्याण्णव चौऱ्याण्णव पंचाण्णव शहाण्णव सत्त्याण्णव अठ्याण्णव नव्याण्णव शंभर,\nAlph=anka,\ncounters/vyanjan = क ख ग घ ङ\nच छ ज झ ञ\nट ठ ड ढ ण\nत थ द ध न\nप फ ब भ म\nय र ल व श ष स ह ळ\n]{marathi}\n\n\\renewcommand\\thepart{\\localecounter{anka}{part}}\n\\renewcommand\\theenumiii{\\localecounter{vyanjan}{enumiii}}\n\\usepackage{fontspec}\n\\defaultfontfeatures{Renderer=HarfBuzz}\n\\babelfont{rm}{Shobhika}\n\n\\else\n\n\\RequirePackage{polyglossia}\n\\setdefaultlanguage{marathi}\n\\setmainfont[Script=Devanagari,Mapping=devanagarinumerals]{Shobhika}\n\\fi\n\n\\providecommand{\\टंक}[1]\n{\\ifluatex\n\\babelfont{rm}{#1}\n\n\\else\n\n\\setmainfont[\nScript=Devanagari,\nMapping=devanagarinumerals\n]\n{#1}\n\\fi\n}\n\n\\providecommand{\\दुसराटंक}[2]{\n\\ifluatex\n\newfontfamily{#1}[Renderer=Harfbuzz,Script=Devanagari]{#2}\n\\else\n\\ifxetex\n\newfontfamily{#1}[Script=Devanagari,Mapping=devanagarinumerals]{#2}\n\\fi\\fi\n}\n\n\\providecommand{\\परिच्छेद}{\\input{namuna-para}}\n\n\\newcounter{क्र}\n\\@ifclassloaded{article}{\\setcounter{क्र}{1}}{}\n\\@ifclassloaded{book}{\\setcounter{क्र}{2}}{}\n\\@ifclassloaded{report}{\\setcounter{क्र}{3}}{}\n\\@ifclassloaded{beamer}{\\setcounter{क्र}{4}}{}\n\\@ifclassloaded{letter}{\\setcounter{क्र}{5}}{}\n\\providecommand{\\नमुना}{\n    \\ifnum\\value{क्र}=1\\input{namuna-article}\\else\n    \\ifnum\\value{क्र}=2\\input{namuna-book}\\else\n    \\ifnum\\value{क्र}=3\\input{namuna-report}\\else\n    \\ifnum\\value{क्र}=4\\input{namuna-beamer}\\else\n    \\input{namuna-letter}\\relax\\fi\\fi\\fi\\fi\n}\n\n\\@ifclassloaded{beamer}{%\n    \\usefonttheme{serif}}\n\n\\@ifpackageloaded{expex}{\n\\definelabeltype{devanagari}\n{labelgen=list,labellist={अ,आ,इ,ई,उ,ऊ,ए,ऐ,ओ,औ,अं,अः},\nlabelformat=A.,\nfullrefformat=XA,\nlabelalign=left,\nlabelwidth=1.5em}\n\n\\lingset{labeltype=devanagari}\n}{}\n\\endinput\n%%\n%% End of file `marathi.sty'.\n");
addinput(fm,"snip_name[]","marathi.sty");
}
if(typeof(preincludes) == "object") {
if(typeof(preincludes[nd]) == "object") {
var incl=preincludes[nd];
for(prop in incl) {
//ace		addinput(fm,"encoded_snip[]",document.getElementById(prop).innerText);
addinput(fm,"encoded_snip[]",editors[prop].getValue());
addinput(fm,"snip_name[]",incl[prop]);
}
}
}
var engv="pdflatex";
var eng=t.match(engineregex);
if(eng != null) {
engv=eng[1].toLowerCase();
if(engv == "platex" || engv == "uplatex") {
addinput(fm,"encoded_snip[]","$latex = '" + engv + "';\n$bibtex = 'pbibtex';\n$dvipdf = 'dvipdfmx %O -o %D %S';");
addinput(fm,"snip_name[]","latexmkrc");
engv="latex_dvipdf";
}
} else if(t.indexOf("fontspec") !== -1) {
engv="xelatex";
}
addinput(fm,"engine",engv);
fm.submit();
}

// https://github.com/YtoTech/latex-on-http

function latexonhttpbutton(nd) {
var jsn=[];
if(typeof(preincludes) == "object") {
if(typeof(preincludes[nd]) == "object") {
var incl=preincludes[nd];
for(prop in incl) {
jsn.push({path: incl[prop],
content: document.getElementById(prop).innerText
})
}
}
}
var p = document.getElementById(nd);
var t = p.innerText;
jsn.push({main: true, content: t});
var b = document.getElementById('lo-' + nd);
var ifr= document.getElementById(nd + "ifr");
if(ifr == null) {
ifr=document.createElement("iframe");
ifr.setAttribute("width","100%");
ifr.setAttribute("height","500em");
ifr.setAttribute("id",nd + "ifr");
ifr.setAttribute("name",nd + "ifr");
p.parentNode.insertBefore(ifr, b.nextSibling);
d=document.createElement("button");
d.innerText=buttons["Delete Output"];
d.setAttribute("id","del-" + nd);
d.setAttribute("onclick",'deleteoutput("' + nd + '")');
p.parentNode.insertBefore(d, b.nextSibling);
}
var cmd="pdflatex";
var eng=t.match(engineregex);
if(eng != null) {
cmd=eng[1].toLowerCase();
} else if(t.indexOf("fontspec") !== -1) {
cmd="xelatex";
}
var fm = document.getElementById('form2-' + nd);
fm.innerHTML="";
addinputnoenc(fm,"compiler",cmd);
addinputnoenc(fm,"resources",JSON.stringify(jsn));
fm.submit();
//    alert(fm.getAttribute("target"));
//    alert(ifr.getAttribute("name"));

}


function latexonhttp(nd) {
var jsn=[];
if(typeof(preincludes) == "object") {
if(typeof(preincludes[nd]) == "object") {
var incl=preincludes[nd];
for(prop in incl) {
jsn.push({path: incl[prop],
content: document.getElementById(prop).innerText
})
}
}
}
var p = document.getElementById(nd);
var t = p.innerText;
// no biber support currently
if(t.indexOf("biblatex") !== -1) {
t=t.replace(/usepackage\{biblatex/,'usepackage[]\{biblatex');
t=t.replace(/\]\{biblatex/,',backend=bibtex]\{biblatex');
}
jsn.push({main: true, content: t});
var b = document.getElementById('lo-' + nd);
var ifr= document.getElementById(nd + "ifr");
if(ifr == null) {
ifr=document.createElement("iframe");
ifr.setAttribute("width","100%");
ifr.setAttribute("height","500em");
ifr.setAttribute("id",nd + "ifr");
ifr.setAttribute("name",nd + "ifr");
p.parentNode.insertBefore(ifr, b.nextSibling);
d=document.createElement("button");
d.innerText=buttons["Delete Output"];
d.setAttribute("id","del-" + nd);
d.setAttribute("onclick",'deleteoutput("' + nd + '")');
p.parentNode.insertBefore(d, b.nextSibling);
}
var cmd="pdflatex";
var eng=t.match(engineregex);
if(eng != null) {
cmd=eng[1].toLowerCase();
} else if(t.indexOf("fontspec") !== -1) {
cmd="xelatex";
}
var fm = document.getElementById('form2-' + nd);
fm.innerHTML="";
addinputnoenc(fm,"compiler",cmd);
addinputnoenc(fm,"resources",JSON.stringify(jsn));
fm.submit();
}

//

function copytoclipboard(nd){
var p = document.getElementById(nd);
var nn=document.createElement("textarea");
nn.value=p.innerText;
document.body.appendChild(nn);
nn.select();
document.execCommand("copy");
document.body.removeChild(nn);
}


function allowedit(nd){
var p = document.getElementById(nd);
p.contentEditable="true";
p.setAttribute("spellcheck","false");
p.innerHTML=p.innerText;
p.style.border="solid thin green";
}

function deleteoutput(nd){
var b = document.getElementById('del-' + nd);
var ifr = document.getElementById(nd + 'ifr');
b.parentNode.removeChild(b);
ifr.parentNode.removeChild(ifr);
}

function latexcgi(nd) {
var fm = document.getElementById('form2-' + nd);
fm.innerHTML="";
var p = document.getElementById(nd);
//ace    var t = p.innerText;
var t = editors[nd].getValue();
addtextarea(fm,"filecontents[]",t);
addinputnoenc(fm,"filename[]","document.tex");
if(typeof(preincludes) == "object") {
if(typeof(preincludes[nd]) == "object") {
var incl=preincludes[nd];
for(prop in incl) {
//ace		addtextarea(fm,"filecontents[]",document.getElementById(prop).innerText);
addtextarea(fm,"filecontents[]",editors[prop].getValue());
addinputnoenc(fm,"filename[]",incl[prop]);
}
}
}
var engv="pdflatex";
var eng=t.match(engineregex);
if(eng != null) {
engv=eng[1].toLowerCase();
} else if(t.indexOf("fontspec") !== -1) {
engv="xelatex";
}
addinput(fm,"engine",engv);
var rtn = t.match(returnregex);
var rtnv = "";
if(rtn == null) {
// ES6 / IE
if (typeof Symbol == "undefined") addinput(fm,"return","pdf");
} else {
rtnv=rtn[1].toLowerCase();
addinput(fm,"return",rtnv);
}
var mki = makeindexregex.exec(t);
while (mki != null) {
addinputnoenc(fm,"makeindex[]",mki[1]);
mki = makeindexregex.exec(t);
}
var b = document.getElementById('lo-' + nd);
var ifr= document.getElementById(nd + "ifr");
if(ifr == null) {
ifr=document.createElement("iframe");
ifr.setAttribute("width","100%");
ifr.setAttribute("height","500em");
ifr.setAttribute("id",nd + "ifr");
ifr.setAttribute("name",nd + "ifr");
p.parentNode.insertBefore(ifr, b.nextSibling);
d=document.createElement("button");
d.innerText=buttons["Delete Output"];
d.setAttribute("id","del-" + nd);
d.setAttribute("onclick",'deleteoutput("' + nd + '")');
p.parentNode.insertBefore(d, b.nextSibling);
}
var  loading=document.createElement("div");
loading.id=nd+"load";
loading.textContent=buttons["Compiling PDF"] + " . . .";
p.parentNode.insertBefore(loading, ifr);
// scroll only if really close to the bottom
var rect = b.getBoundingClientRect();
if(document.documentElement.clientHeight - rect.bottom < 50){
window.scrollBy(0,150);
}
setTimeout(function () {
p.parentNode.removeChild(document.getElementById(nd+"load"));
}, 1000);
fm.submit();
}
