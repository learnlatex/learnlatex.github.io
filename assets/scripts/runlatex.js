// runlatex.js for TeXLive.net and Overleaf
// Copyright 2020 2021 David Carlisle
// MIT Licence

// set here but local versions can be redefined after
// loading this file

// runlatex configuration object
var runlatex={}

runlatex.texts ={
    "Open in Overleaf": "Open in Overleaf",
    "TeXLive.net":      "run at TeXLive.net", // or "run latex" or whatever
    "Delete Output":    "Delete Output",
    "Compiling PDF":    "Compiling PDF",
    // The following not used on learnlatex.org
    "edit":             "edit",
    "copy":             "copy",
    "Added Code":       "Added code",
    "End Added Code":   "End Added code",
    "Top Caption":      "Edit and run this example:"
}

runlatex.editorlines=100;
runlatex.adddefaultpreamble=false;
runlatex.adddefaultengine=false;
runlatex.usecaptions=false;
runlatex.minrunlines=0;
runlatex.completionsURI="";

// debug by using https://httpbin.org/post
// set to null to omit from interface
runlatex.latexcgiURI="https://texlive.net/cgi-bin/latexcgi";
runlatex.overleafURI="https://www.overleaf.com/docs";

// per page setup
runlatex.preincludes={};

// Disable all use of cookies
// No cookies are set by this file even when true.
runlatex.usecookies=true;

// end of configuration

var editors=[];

const noeditregex = /^\s*[/%#\*]+ *!TEX.*[^a-zA-Z]noedit *(\n|$)/i;
const norunregex = /^\s*([/%#\*]+ *!TEX.*[^a-zA-Z]none *|[^% \t\\][^\\]*)(\n|$)/i;
const commentregex = / %.*/;
const engineregex = /% *!TEX.*[^a-zA-Z](((pdf|xe|lua|u?p)?latex(-dev)?)|context|(pdf|xe|lua|u?p)?tex) *\n/i;
const returnregex = /% *!TEX.*[^a-zA-Z](pdfjs|pdf|log|make4ht|latexml|lwarp) *\n/i;
const makeindexregex = /% *!TEX.*[^a-zA-Z]makeindex( [a-z0-9\.\- ]*)\n/ig;

var packageregex = [
    [ /\\includegraphics/,                    "\\usepackage[demo]{graphicx}\n"],
    [ /\\begin{equation|align|gather|flalign/,"\\usepackage{amsmath}\n"       ],
    [ /tikz|pgf/,                             "\\usepackage{tikz}\n"          ],
    [ /fancy/,                                "\\usepackage{fancyhdr}\n"      ],
    [ /addplot|axis/,                         "\\usepackage{pgfplots}\n"      ],
    [ /hyper|href|bookmark|\\url/,            "\\usepackage{hyperref}\n"      ],
    [ /\\newcolumntype/,                      "\\usepackage{array}\n"         ],
    [ /listing/,                              "\\usepackage{listings}\n"      ],
    [ /\\blind/,                              "\\usepackage{blindtext}\n"     ],
    [ /\\lipsum/,                             "\\usepackage{lipsum}\n"        ],
    [ /color/,                                "\\usepackage{xcolor}\n"        ],
    [ /pspicture/,                            "\\usepackage{pstricks}\n"      ]
];


var latexcompetions="";
    

var customCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
	var startToken = session.getTokenAt(pos.row, pos.column).value;
	if (startToken.startsWith("\\")){
	    var cmplts=[];
	    var s=0;
	    for (let pkg in latexcompletions) {
		var cs=latexcompletions[pkg];
		s=s-1;
		for(let i=0;i<cs.length;i++){
		    if(cs[i].startsWith(prefix)){
			cmplts.push({name: cs[i], value:cs[i],score: s, meta: pkg});
		    }
		}
	    }
	    callback(null, cmplts);
	} else {
	    callback(null, []);
	    return 
	}	    
    }
}

function llexamples() {
    if(runlatex.completionsURI != ""){
	let request = new XMLHttpRequest();
	request.open('GET', runlatex.completionsURI);
	request.responseType = 'json';
	request.onload = function() {
	    latexcompletions = request.response;
	}
	request.send();
    }
    var p = document.getElementsByTagName("pre");
    var editor;
    var acemode;
    for(var i=0;i<p.length;i++) {
	acemode="ace/mode/latex";
	p[i].setAttribute("id","pre" + i);
	var pretext=p[i].innerText;
	if(!pretext.match(noeditregex) && !p[i].classList.contains('noedit')) {
	    if((runlatex.adddefaultpreamble &&
		(pretext.match(norunregex) || (pretext.match(/\n[^\n]/g) || '').length + 1  < runlatex.minrunlines )) ||
	       (!runlatex.adddefaultpreamble &&
		pretext.indexOf("\\documentclass") == -1 && !pretext.match(engineregex)) ||
	       p[i].classList.contains('norun')) {
		if(pretext.match(norunregex)) {
		    acemode="ace/mode/text";
		}
	    } else {
		// caption
		if(runlatex.usecaptions && runlatex.texts["Top Caption"]) {
		    var cpt = document.createElement("div");
		    cpt.setAttribute("class",'lltopcaption');
		    cpt.innerHTML=runlatex.texts["Top Caption"];
		    p[i].parentNode.insertBefore(cpt, p[i]);
		}
		// space
		var s = document.createElement("div");
		s.setAttribute("class",'ace-spacer');
		p[i].parentNode.insertBefore(s, p[i].nextSibling);
		if(runlatex.latexcgiURI){
		    // texlive.net
		    var r = document.createElement("button");
		    r.innerText=runlatex.texts["TeXLive.net"];
		    r.setAttribute("class","llbutton");
		    r.setAttribute("onclick",'latexcgi("pre' + i + '")');
		    r.setAttribute("id","lo-pre" + i);
		    p[i].parentNode.insertBefore(r, p[i].nextSibling);
		    var f2=document.createElement("span");
		    f2.innerHTML="<form style=\"display:none\" id=\"form2-pre" + i +
			"\" name=\"form2-pre" + i +
			"\" enctype=\"multipart/form-data\" action=\"" +
			runlatex.latexcgiURI +
			"\" method=\"post\" target=\"pre" + i +
			"ifr\"></form>";
		    p[i].parentNode.insertBefore(f2, p[i].nextSibling);
		}
		if(runlatex.overleafURI){
		    // overleaf
		    var o = document.createElement("button");
		    o.innerText=runlatex.texts["Open in Overleaf"];
		    o.setAttribute("class","llbutton");
		    o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
		    p[i].parentNode.insertBefore(o, p[i].nextSibling);
		    var f=document.createElement("span");
		    f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +
			"\" action=\"" +
			runlatex.overleafURI +
			"\" method=\"post\" target=\"_blank\"></form>";
		    p[i].parentNode.insertBefore(f, p[i].nextSibling);
		}
	    }
	    p[i].textContent=pretext.replace(/\s+$/,'');
	    p[i].style.height="1em"; // force redisplay in Opera zoom
	    ace.config.set('basePath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12') ;
	    editor = ace.edit(p[i]);
	    editor.setTheme(rlacetheme);
	    editor.getSession().setMode(acemode);
	    editor.setOption("minLines",runlatex);
	    editor.setOption("maxLines",runlatex.editorlines);
	    editor.setShowPrintMargin(false);
	    if(runlatex.completionsURI != ""){
		langTools=ace.require("ace/ext/language_tools");
		langTools.setCompleters([customCompleter]);
		editor.setOptions({
		    enableBasicAutocompletion: true,
		    enableLiveAutocompletion: true
		});
	    }
	    editor.resize();
	    editors["pre" + i]=editor;
	}
    }
}


function addinput(f,n,v) {
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.value =encodeURIComponent(v);
    f.appendChild(inp);
}

function addinputnoenc(f,n,v) {
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.value =v;
    f.appendChild(inp);
}

function addtextarea(f,n,v) {
    var inp=document.createElement("textarea");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.textContent=v;
    f.appendChild(inp);
}

function openinoverleaf(nd) {
    var fm = document.getElementById('form-' + nd);
    fm.innerHTML="";
    var p = document.getElementById(nd);
    var t = editors[nd].getValue();

    var engv=rldefaultengine;
    var eng=t.match(engineregex);
    if(runlatex.adddefaultpreamble) {
	if(t.indexOf("\\documentclass") == -1 && ( eng == null)) {
	    t=generatepreamble(t,editors[nd]);
	}
    }
    if(eng != null) {
	engv=eng[1].toLowerCase();
	if(engv == "pdftex" || engv == "luatex" || engv == "xetex" || engv == "ptex" || engv == "uptex") {
	    addinput(fm,"main_document","document.tex");
	}    
    }
    addinput(fm,"encoded_snip[]","\n" + t);
    addinput(fm,"snip_name[]","document.tex");
    if(typeof(runlatex.preincludes) == "object") {
	if(typeof(runlatex.preincludes[nd]) == "object") {
	    var incl=runlatex.preincludes[nd];
	    for(prop in incl) {
		if(editors[prop]==null) {
		    addinput(fm,"encoded_snip[]",document.getElementById(prop).textContent);
		} else {
		    addinput(fm,"encoded_snip[]",editors[prop].getValue());
		}
		addinput(fm,"snip_name[]",incl[prop]);
	    }
	}
    }
    if(eng != null) {
	if(engv.indexOf("platex") != -1 || engv.indexOf("ptex") != -1 || engv=="tex") {
	    addinput(fm,"encoded_snip[]","$latex = '" + engv + "';\n$bibtex = 'pbibtex';\n$dvipdf = 'dvipdfmx %O -o %D %S';");
	    addinput(fm,"snip_name[]","latexmkrc");
	    engv="latex_dvipdf";
	} else if(engv == "pdftex" || engv == "luatex" || engv == "xetex") {
	    addinput(fm,"encoded_snip[]","$pdflatex = '" + engv + "';");
	    addinput(fm,"snip_name[]","latexmkrc");
	    engv=rldefaultengine;
	}

    }
    addinput(fm,"engine",engv);
    fm.submit();
}

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

function generatepreamble(t,e) {
    e.navigateFileStart();
    if(t.match(/koma|KOMA|addsec|\\scr|scrheadings/)){
        e.insert("\n% " + runlatex.texts["Added Code"] + "\n\\documentclass{scrartcl}\n");
    } else {
	e.insert("\n% " + runlatex.texts["Added Code"] + "\n\\documentclass{article}\n");
    }
    for(var i=0;i<packageregex.length; i++){
	if(t.match(packageregex[i][0])) e.insert(packageregex[i][1]);
    }
    e.insert("\n\\begin{document}\n% "  + runlatex.texts["End Added Code"] + "\n\n");
    e.navigateFileEnd();
    e.insert("\n\n% " +
	     runlatex.texts["Added Code"] +
	     "\n\\end{document}\n% "  +
	     runlatex.texts["End Added Code"] +
	     "\n");
    return e.getValue();
}

function defaultengine(t) {
	if ((t.indexOf("\\usepackage{lua") !== -1) || (t.indexOf("\\directlua") !== -1) ){
	    return "lualatex";
	} else if (t.indexOf("fontspec") !== -1) {
	    return "xelatex";
	} else if (t.indexOf("pstricks") !==-1) {
	    return "latex";
	} else return rldefaultengine;
}

function latexcgi(nd) {
    var fm = document.getElementById('form2-' + nd);
    fm.innerHTML="";
    var p = document.getElementById(nd);
    var t = editors[nd].getValue();
    var engv=rldefaultengine;
    var eng=t.match(engineregex);
    if(runlatex.adddefaultpreamble) {
	if(t.indexOf("\\documentclass") == -1 && ( eng == null)) {
	    t=generatepreamble(t,editors[nd]);
	}
    }
    addtextarea(fm,"filecontents[]",t);
    addinputnoenc(fm,"filename[]","document.tex");
    if(typeof(runlatex.preincludes) == "object") {
	if(typeof(runlatex.preincludes[nd]) == "object") {
	    var incl=runlatex.preincludes[nd];
	    for(prop in incl) {
		if(editors[prop]==null) {
		    addtextarea(fm,"filecontents[]",document.getElementById(prop).textContent);
		} else {
		    addtextarea(fm,"filecontents[]",editors[prop].getValue());
		}
		addinputnoenc(fm,"filename[]",incl[prop]);
	    }
	}
    }
    if(eng != null) {
	engv=eng[1].toLowerCase();
    } else if(runlatex.adddefaultengine) {
	engv=defaultengine(t);
    }
    addinput(fm,"engine",engv);
    var rtn = t.match(returnregex);
    var rtnv = "";
    if(rtn == null) {
	// ES6 / IE
	if (typeof Symbol == "undefined") {
	    addinput(fm,"return","pdf");
	} else {
	    addinput(fm,"return",rldefaultreturn);
	}
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
	d.innerText=runlatex.texts["Delete Output"];
        d.setAttribute("class","llbutton");
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    var  loading=document.createElement("div");
    loading.id=nd+"load";
    loading.textContent=runlatex.texts["Compiling PDF"] + " . . .";
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





var createCookie = function(name, value, days) {
    if(runlatex.usecookies){
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/" + "; SameSite=Lax";
    }
}

function getCookie(c_name) {
    if (runlatex.usecookies && document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function rlSetReturn(n) {
    createCookie('runlatex-return',n,100);
}

var rldefaultreturn=getCookie('runlatex-return');
if(rldefaultreturn=="") rldefaultreturn="pdfjs";

function rlSetEngine(n) {
    createCookie('runlatex-engine',n,100);
}

var rldefaultengine=getCookie('runlatex-engine');
if(rldefaultengine=="") rldefaultengine="pdflatex";


var rlacetheme=getCookie('runlatex-acetheme');
if(rlacetheme=="") rlacetheme="ace/theme/textmate";

function rlAllowCookies() {
  createCookie('runlatex-cookies',"true",100);
  window.location.reload(false);
}

function rlDeleteCookies() {
 createCookie('runlatex-cookies',"",-999);
 createCookie('runlatex-return',"",-999);
 createCookie('runlatex-engine',"",-999);
 createCookie('runlatex-acetheme',"",-999);
 window.location.reload(false);
}

var rlallowcookies=getCookie('runlatex-cookies')=="true";

window.addEventListener('load', llexamples, false);
